import { useState } from 'react';
import { Calendar, Clock, Target, ListTodo, ChevronDown, ChevronUp, Plus, X } from 'lucide-react';

interface Action {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: 'pending' | 'in_progress' | 'completed';
  goalId: string;
  priority: 'high' | 'medium' | 'low';
}

interface Goal {
  id: string;
  title: string;
  category: string;
}

interface ActionPlanProps {
  actions: Action[];
  goals: Goal[];
  onAddAction: (action: Omit<Action, 'id'>) => void;
  onUpdateAction: (action: Action) => void;
  onDeleteAction: (actionId: string) => void;
}

export function ActionPlan({
  actions,
  goals,
  onAddAction,
  onUpdateAction,
  onDeleteAction,
}: ActionPlanProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedAction, setExpandedAction] = useState<string | null>(null);
  const [newAction, setNewAction] = useState<Omit<Action, 'id'>>({
    title: '',
    description: '',
    deadline: '',
    status: 'pending',
    goalId: '',
    priority: 'medium',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAction(newAction);
    setNewAction({
      title: '',
      description: '',
      deadline: '',
      status: 'pending',
      goalId: '',
      priority: 'medium',
    });
    setShowAddForm(false);
  };

  const getStatusColor = (status: Action['status']) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'in_progress':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
    }
  };

  const getStatusLabel = (status: Action['status']) => {
    switch (status) {
      case 'pending':
        return '未着手';
      case 'in_progress':
        return '進行中';
      case 'completed':
        return '完了';
    }
  };

  const getPriorityColor = (priority: Action['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
    }
  };

  const sortedActions = [...actions].sort((a, b) => {
    // 優先度でソート
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;

    // ステータスでソート
    const statusOrder = { pending: 0, in_progress: 1, completed: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="space-y-6">
      {/* アクション追加ボタン */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>アクションを追加</span>
        </button>
      </div>

      {/* アクション追加フォーム */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                タイトル
              </label>
              <input
                type="text"
                value={newAction.title}
                onChange={(e) =>
                  setNewAction({ ...newAction, title: e.target.value })
                }
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                説明
              </label>
              <textarea
                value={newAction.description}
                onChange={(e) =>
                  setNewAction({ ...newAction, description: e.target.value })
                }
                rows={3}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  関連する目標
                </label>
                <select
                  value={newAction.goalId}
                  onChange={(e) =>
                    setNewAction({ ...newAction, goalId: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">選択してください</option>
                  {goals.map((goal) => (
                    <option key={goal.id} value={goal.id}>
                      {goal.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  期限
                </label>
                <input
                  type="date"
                  value={newAction.deadline}
                  onChange={(e) =>
                    setNewAction({ ...newAction, deadline: e.target.value })
                  }
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  優先度
                </label>
                <select
                  value={newAction.priority}
                  onChange={(e) =>
                    setNewAction({
                      ...newAction,
                      priority: e.target.value as Action['priority'],
                    })
                  }
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="high">高</option>
                  <option value="medium">中</option>
                  <option value="low">低</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                追加
              </button>
            </div>
          </form>
        </div>
      )}

      {/* アクションリスト */}
      <div className="space-y-4">
        {sortedActions.map((action) => (
          <div
            key={action.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-lg font-medium">{action.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          action.priority
                        )}`}
                      >
                        {action.priority === 'high'
                          ? '高'
                          : action.priority === 'medium'
                          ? '中'
                          : '低'}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          action.status
                        )}`}
                      >
                        {getStatusLabel(action.status)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {goals.find((g) => g.id === action.goalId)?.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={action.status}
                    onChange={(e) =>
                      onUpdateAction({
                        ...action,
                        status: e.target.value as Action['status'],
                      })
                    }
                    className="border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="pending">未着手</option>
                    <option value="in_progress">進行中</option>
                    <option value="completed">完了</option>
                  </select>
                  <button
                    onClick={() =>
                      setExpandedAction(
                        expandedAction === action.id ? null : action.id
                      )
                    }
                    className="text-gray-400 hover:text-gray-500"
                  >
                    {expandedAction === action.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={() => onDeleteAction(action.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {expandedAction === action.id && (
                <div className="mt-4">
                  <div className="text-sm text-gray-600">
                    {action.description}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    期限: {action.deadline}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
