import React, { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { Value } from 'react-calendar/dist/cjs/shared/types';
import { useAuth } from '../../../lib/auth';
import { supabase } from '../../../lib/supabase';

type CalendarValue = Value;

interface HealthLog {
  id: string;
  user_id: string;
  date: string; // YYYY-MM-DD
  meal?: string | null;
  workout?: string | null;
  weight?: number | null;
  created_at?: string;
  updated_at?: string;
}

type WorkoutUnit = 'reps' | 'sets' | 'minutes';

type LogFormState = {
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  weight: string;
  workoutName: string;
  workoutAmount: string;
  workoutUnit: WorkoutUnit;
};

const parseMeals = (
  meal: string | null | undefined
): Pick<LogFormState, 'breakfast' | 'lunch' | 'dinner'> => {
  const result = { breakfast: '', lunch: '', dinner: '' };
  if (!meal) return result;

  const lines = meal.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('朝:')) {
      result.breakfast = trimmed.slice(2).trim();
    } else if (trimmed.startsWith('昼:')) {
      result.lunch = trimmed.slice(2).trim();
    } else if (trimmed.startsWith('夜:')) {
      result.dinner = trimmed.slice(2).trim();
    }
  }

  // 旧フォーマットなどでプレフィックスが付いていない場合は、朝食として全部入れる
  if (!result.breakfast && !result.lunch && !result.dinner) {
    result.breakfast = meal;
  }

  return result;
};

const buildMealText = (form: LogFormState): string | null => {
  const parts: string[] = [];
  if (form.breakfast) parts.push(`朝: ${form.breakfast}`);
  if (form.lunch) parts.push(`昼: ${form.lunch}`);
  if (form.dinner) parts.push(`夜: ${form.dinner}`);
  return parts.length ? parts.join('\n') : null;
};

export const HealthTracker: React.FC = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [logsByDate, setLogsByDate] = useState<Record<string, HealthLog>>({});
  const [form, setForm] = useState<LogFormState>(() => {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    return {
      date: dateStr,
      breakfast: '',
      lunch: '',
      dinner: '',
      weight: '',
      workoutName: '',
      workoutAmount: '',
      workoutUnit: 'minutes',
    };
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 選択中の日付の文字列表現（YYYY-MM-DD）
  const selectedDateStr = useMemo(() => {
    return selectedDate.toISOString().split('T')[0];
  }, [selectedDate]);

  const currentLog: HealthLog | undefined = logsByDate[selectedDateStr];

  useEffect(() => {
    if (!user?.id) return;
    void fetchLogs();
  }, [user?.id]);

  const fetchLogs = async () => {
    if (!user?.id) return;
    setLoading(true);
    setMessage(null);

    try {
      const today = new Date();
      const past = new Date();
      past.setMonth(past.getMonth() - 3); // 過去3ヶ月分を取得

      const from = past.toISOString().split('T')[0];
      const to = today.toISOString().split('T')[0];

      const { data, error } = await supabase
        .from<HealthLog>('health_logs')
        .select('*')
        .eq('user_id', user.id)
        .gte('date', from)
        .lte('date', to)
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching health logs:', error);
        setMessage({ type: 'error', text: '健康記録の取得に失敗しました' });
        return;
      }

      const map: Record<string, HealthLog> = {};
      (data || []).forEach((log) => {
        map[log.date] = log;
      });
      setLogsByDate(map);

      // もし今日のログがあればフォームに反映
      const todayStr = new Date().toISOString().split('T')[0];
      const todayLog = map[todayStr];
      if (todayLog) {
        const meals = parseMeals(todayLog.meal);
        setForm({
          date: todayStr,
          breakfast: meals.breakfast,
          lunch: meals.lunch,
          dinner: meals.dinner,
          weight: todayLog.weight != null ? String(todayLog.weight) : '',
          workoutName: todayLog.workout || '',
          workoutAmount: '',
          workoutUnit: 'minutes',
        });
      }
    } catch (error) {
      console.error('Unexpected error fetching health logs:', error);
      setMessage({ type: 'error', text: '健康記録の取得中にエラーが発生しました' });
    } finally {
      setLoading(false);
    }
  };

  const handleCalendarChange = (value: CalendarValue, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      const dateStr = value.toISOString().split('T')[0];
      const log = logsByDate[dateStr];
      const meals = parseMeals(log?.meal);
      setForm((prev) => ({
        ...prev,
        date: dateStr,
        breakfast: meals.breakfast,
        lunch: meals.lunch,
        dinner: meals.dinner,
        weight: log?.weight != null ? String(log.weight) : '',
        workoutName: log?.workout || '',
        workoutAmount: '',
      }));
    } else if (Array.isArray(value) && value.length === 2) {
      // 範囲選択は現時点では未対応だが、将来の拡張のために残しておく
      console.log('Range selected:', value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) {
      setMessage({ type: 'error', text: 'ユーザー情報が取得できませんでした' });
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      // フォームの値から保存用の文字列を組み立て
      const mealText = buildMealText(form);

      const workoutUnitLabel =
        form.workoutUnit === 'reps'
          ? '回'
          : form.workoutUnit === 'sets'
          ? 'セット'
          : '分';

      const workoutText =
        form.workoutName && form.workoutAmount
          ? `${form.workoutName} ${form.workoutAmount}${workoutUnitLabel}`
          : form.workoutName || null;

      const payload = {
        user_id: user.id,
        date: form.date,
        meal: mealText,
        workout: workoutText,
        weight: form.weight ? Number(form.weight) : null,
      };

      // 既存レコードがあれば更新、なければ作成
      const existing = logsByDate[form.date];

      let error;
      if (existing) {
        const { error: updateError } = await supabase
          .from<HealthLog>('health_logs')
          .update({
            meal: payload.meal,
            workout: payload.workout,
            weight: payload.weight,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existing.id)
          .eq('user_id', user.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from<HealthLog>('health_logs')
          .insert([
            {
              ...payload,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ]);
        error = insertError;
      }

      if (error) {
        console.error('Error saving health log:', error);
        setMessage({ type: 'error', text: '健康記録の保存に失敗しました' });
        return;
      }

      setMessage({ type: 'success', text: '健康記録を保存しました' });
      await fetchLogs();
    } catch (err) {
      console.error('Unexpected error saving health log:', err);
      setMessage({ type: 'error', text: '健康記録の保存中にエラーが発生しました' });
    } finally {
      setSaving(false);
    }
  };

  const hasLogOnDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return !!logsByDate[dateStr];
  };

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-bold mb-4">健康管理</h2>
      <p className="text-sm text-gray-600 mb-6">
        毎日の食事と筋トレ・運動を記録し、カレンダーで振り返ることができます。
      </p>

      {message && (
        <div
          className={`mb-4 p-3 rounded-md text-sm ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* カレンダー & 日別概要 */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-4">カレンダー</h3>
          <Calendar
            onChange={(value, event) => handleCalendarChange(value, event)}
            value={selectedDate}
            className="w-full"
            tileClassName={({ date }) =>
              hasLogOnDate(date) ? 'react-calendar__tile--has-log' : undefined
            }
          />
          <style jsx global>{`
            .react-calendar__tile--has-log {
              position: relative;
            }
            .react-calendar__tile--has-log::after {
              content: '';
              position: absolute;
              bottom: 6px;
              left: 50%;
              transform: translateX(-50%);
              width: 6px;
              height: 6px;
              border-radius: 999px;
              background-color: #16a34a; /* green-600 */
            }
          `}</style>

          <div className="mt-4 text-sm text-gray-700">
            <div className="font-medium mb-1">
              {selectedDateStr} の記録
            </div>
            {currentLog ? (
              <ul className="space-y-1">
                {currentLog.meal && (
                  <li>
                    <span className="font-semibold">食事:</span>{' '}
                    <span className="whitespace-pre-line">{currentLog.meal}</span>
                  </li>
                )}
                {currentLog.workout && (
                  <li>
                    <span className="font-semibold">筋トレ・運動:</span>{' '}
                    <span>{currentLog.workout}</span>
                  </li>
                )}
                {currentLog.weight != null && (
                  <li>
                    <span className="font-semibold">体重:</span>{' '}
                    <span>{currentLog.weight} kg</span>
                  </li>
                )}
                {!currentLog.meal && !currentLog.workout && currentLog.weight == null && (
                  <li className="text-gray-500">内容は未入力です。</li>
                )}
              </ul>
            ) : (
              <div className="text-gray-500">この日にはまだ記録がありません。</div>
            )}
          </div>
        </div>

        {/* 入力フォーム */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-4">今日の記録</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                日付
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="breakfast"
                className="block text-sm font-medium text-gray-700"
              >
                食事内容
              </label>
              <div className="mt-2 space-y-2">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    朝
                  </label>
                  <input
                    type="text"
                    id="breakfast"
                    name="breakfast"
                    value={form.breakfast}
                    onChange={handleInputChange}
                    placeholder="例: オートミールとバナナ"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    昼
                  </label>
                  <input
                    type="text"
                    id="lunch"
                    name="lunch"
                    value={form.lunch}
                    onChange={handleInputChange}
                    placeholder="例: サラダと鶏胸肉"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    夜
                  </label>
                  <input
                    type="text"
                    id="dinner"
                    name="dinner"
                    value={form.dinner}
                    onChange={handleInputChange}
                    placeholder="例: ご飯と焼き魚"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700"
              >
                体重
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  id="weight"
                  name="weight"
                  value={form.weight}
                  onChange={handleInputChange}
                  placeholder="例: 68.5"
                  className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                />
                <span className="text-sm text-gray-600">kg</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="workoutName"
                className="block text-sm font-medium text-gray-700"
              >
                筋トレ・運動内容
              </label>
              <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <select
                    id="workoutPreset"
                    name="workoutPreset"
                    value=""
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!value) return;
                      setForm((prev) => ({
                        ...prev,
                        workoutName: value,
                      }));
                    }}
                    className="block w-full mb-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  >
                    <option value="">種目を選択</option>
                    <option value="ベンチプレス">ベンチプレス</option>
                    <option value="ランニング">ランニング</option>
                    <option value="スクワット">スクワット</option>
                    <option value="ウォーキング">ウォーキング</option>
                    <option value="プランク">プランク</option>
                  </select>
                  <input
                    type="text"
                    id="workoutName"
                    name="workoutName"
                    value={form.workoutName}
                    onChange={handleInputChange}
                    placeholder="例: ベンチプレス / ランニング など"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="0"
                    id="workoutAmount"
                    name="workoutAmount"
                    value={form.workoutAmount}
                    onChange={handleInputChange}
                    placeholder="回数・分数など"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <select
                    id="workoutUnit"
                    name="workoutUnit"
                    value={form.workoutUnit}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  >
                    <option value="reps">回</option>
                    <option value="sets">セット</option>
                    <option value="minutes">分</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving || loading}
                className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  saving || loading
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {saving ? '保存中...' : '保存する'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

