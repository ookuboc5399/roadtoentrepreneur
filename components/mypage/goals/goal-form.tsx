import { useState } from 'react';
import { Calendar, Clock, Target, CheckCircle2, AlertCircle } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  status: 'not_started' | 'in_progress' | 'completed';
  progress: number;
  milestones: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
}

interface GoalFormProps {
  goal?: Goal;
  onSubmit: (goal: Partial<Goal>) => void;
}

export function GoalForm({ goal, onSubmit }: GoalFormProps) {
  const [formData, setFormData] = useState<Partial<Goal>>(
    goal || {
      title: '',
      description: '',
      deadline: '',
      category: '',
      priority: 'medium',
      status: 'not_started',
      progress: 0,
      milestones: [],
    }
  );

  const [newMilestone, setNewMilestone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addMilestone = () => {
    if (!newMilestone.trim()) return;

    setFormData((prev) => ({
      ...prev,
      milestones: [
        ...(prev.milestones || []),
        {
          id: Math.random().toString(36).substr(2, 9),
          title: newMilestone,
          completed: false,
        },
      ],
    }));
    setNewMilestone('');
  };

  const removeMilestone = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      milestones: prev.milestones?.filter((m) => m.id !== id) || [],
    }));
  };

  const toggleMilestone = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      milestones: prev.milestones?.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      ),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          目標タイトル
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          説明
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            期限
          </label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            カテゴリー
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="career">キャリア</option>
            <option value="finance">財務</option>
            <option value="skill">スキル</option>
            <option value="health">健康</option>
            <option value="other">その他</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            優先度
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="high">高</option>
            <option value="medium">中</option>
            <option value="low">低</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ステータス
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="not_started">未着手</option>
            <option value="in_progress">進行中</option>
            <option value="completed">完了</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          進捗率
        </label>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
          step="5"
          className="w-full"
        />
        <div className="text-center text-sm text-gray-600">
          {formData.progress}%
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          マイルストーン
        </label>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMilestone}
              onChange={(e) => setNewMilestone(e.target.value)}
              placeholder="新しいマイルストーンを追加"
              className="flex-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addMilestone}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              追加
            </button>
          </div>

          <div className="space-y-2">
            {formData.milestones?.map((milestone) => (
              <div
                key={milestone.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={milestone.completed}
                    onChange={() => toggleMilestone(milestone.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span
                    className={`${
                      milestone.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {milestone.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeMilestone(milestone.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {goal ? '更新' : '作成'}
        </button>
      </div>
    </form>
  );
}
