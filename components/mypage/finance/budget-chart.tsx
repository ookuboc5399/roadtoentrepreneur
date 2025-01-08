import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface BudgetCategory {
  name: string;
  budget: number;
  spent: number;
  color: string;
}

interface BudgetChartProps {
  data: BudgetCategory[];
}

export function BudgetPieChart({ data }: BudgetChartProps) {
  const chartData = data.map(item => ({
    name: item.name,
    value: item.budget,
    spent: item.spent,
    color: item.color
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ¥${value.toLocaleString()}`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `¥${value.toLocaleString()}`}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BudgetProgress({ data }: BudgetChartProps) {
  return (
    <div className="space-y-6">
      {data.map((category, index) => {
        const percentage = Math.min(Math.round((category.spent / category.budget) * 100), 100);
        const isOverBudget = category.spent > category.budget;

        return (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">{category.name}</h3>
              <div className="text-sm text-gray-500">
                ¥{category.spent.toLocaleString()} / ¥{category.budget.toLocaleString()}
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                    isOverBudget ? 'text-red-600 bg-red-200' : 'text-green-600 bg-green-200'
                  }`}>
                    {percentage}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${percentage}%`, backgroundColor: category.color }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>残り: ¥{Math.max(category.budget - category.spent, 0).toLocaleString()}</span>
              {isOverBudget && (
                <span className="text-red-500">
                  予算超過: ¥{(category.spent - category.budget).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function BudgetForm() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-4">予算の設定</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            カテゴリー
          </label>
          <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>家賃</option>
            <option>食費</option>
            <option>交通費</option>
            <option>光熱費</option>
            <option>娯楽費</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            予算額
          </label>
          <input
            type="number"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="予算額を入力"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            期間
          </label>
          <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>2024年4月</option>
            <option>2024年5月</option>
            <option>2024年6月</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          予算を設定
        </button>
      </form>
    </div>
  );
}
