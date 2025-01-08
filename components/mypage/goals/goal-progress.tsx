import { useState } from 'react';
import { Target, Clock, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

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

interface GoalProgressProps {
  goals: Goal[];
  onUpdateGoal: (goal: Goal) => void;
}

export function GoalProgress({ goals, onUpdateGoal }: GoalProgressProps) {
  const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

  const getPriorityColor = (priority: Goal['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
    }
  };

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'not_started':
        return 'text-gray-600 bg-gray-100';
      case 'in_progress':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
    }
  };

  const getStatusLabel = (status: Goal['status']) => {
    switch (status) {
      case 'not_started':
        return '未着手';
      case 'in_progress':
        return '進行中';
      case 'completed':
        return '完了';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'career':
        return 'キャリア';
      case 'finance':
        return '財務';
      case 'skill':
        return 'スキル';
      case 'health':
        return '健康';
      default:
        return 'その他';
    }
  };

  const toggleMilestone = (goalId: string, milestoneId: string) => {
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;

    const updatedGoal = {
      ...goal,
      milestones: goal.milestones.map((m) =>
        m.id === milestoneId ? { ...m, completed: !m.completed } : m
      ),
    };

    // マイルストーンの完了状態に基づいて進捗率を更新
    const completedCount = updatedGoal.milestones.filter((m) => m.completed).length;
    const totalCount = updatedGoal.milestones.length;
    updatedGoal.progress = Math.round((completedCount / totalCount) * 100);

    // 進捗率に基づいてステータスを更新
    if (updatedGoal.progress === 100) {
      updatedGoal.status = 'completed';
    } else if (updatedGoal.progress === 0) {
      updatedGoal.status = 'not_started';
    } else {
      updatedGoal.status = 'in_progress';
    }

    onUpdateGoal(updatedGoal);
  };

  const sortedGoals = [...goals].sort((a, b) => {
    // 優先度でソート
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;

    // 進捗状況でソート
    const statusOrder = { not_started: 0, in_progress: 1, completed: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="space-y-6">
      {/* 進捗サマリー */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-600 mb-1">
            <Target className="h-5 w-5" />
            <span className="font-medium">総目標数</span>
          </div>
          <div className="text-2xl font-bold">{goals.length}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-green-600 mb-1">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">達成済み</span>
          </div>
          <div className="text-2xl font-bold">
            {goals.filter((g) => g.status === 'completed').length}
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-yellow-600 mb-1">
            <Clock className="h-5 w-5" />
            <span className="font-medium">進行中</span>
          </div>
          <div className="text-2xl font-bold">
            {goals.filter((g) => g.status === 'in_progress').length}
          </div>
        </div>
      </div>

      {/* 目標リスト */}
      <div className="space-y-4">
        {sortedGoals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        goal.status === 'completed'
                          ? 'bg-green-500'
                          : goal.status === 'in_progress'
                          ? 'bg-blue-500'
                          : 'bg-gray-500'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{goal.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          goal.priority
                        )}`}
                      >
                        {goal.priority === 'high'
                          ? '高'
                          : goal.priority === 'medium'
                          ? '中'
                          : '低'}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          goal.status
                        )}`}
                      >
                        {getStatusLabel(goal.status)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {getCategoryLabel(goal.category)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setExpandedGoal(expandedGoal === goal.id ? null : goal.id)
                  }
                  className="text-gray-400 hover:text-gray-500"
                >
                  {expandedGoal === goal.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        進捗率
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {goal.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${goal.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {expandedGoal === goal.id && (
              <div className="px-4 pb-4">
                <div className="mt-2 text-sm text-gray-600">
                  {goal.description}
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    マイルストーン
                  </h4>
                  <div className="space-y-2">
                    {goal.milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={milestone.completed}
                          onChange={() => toggleMilestone(goal.id, milestone.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span
                          className={`text-sm ${
                            milestone.completed
                              ? 'line-through text-gray-400'
                              : 'text-gray-700'
                          }`}
                        >
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  期限: {goal.deadline}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
