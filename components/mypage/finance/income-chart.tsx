import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface IncomeData {
  date: string;
  amount: number;
  category: string;
}

interface IncomeChartProps {
  data: IncomeData[];
}

export function IncomeChart({ data }: IncomeChartProps) {
  // 月ごとの合計収入を計算
  const monthlyData = data.reduce((acc, curr) => {
    const month = curr.date.substring(0, 7); // YYYY-MM
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += curr.amount;
    return acc;
  }, {} as { [key: string]: number });

  // グラフ用のデータ形式に変換
  const chartData = Object.entries(monthlyData).map(([month, total]) => ({
    month,
    total
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="month"
            tick={{ fill: '#6B7280' }}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => `¥${value.toLocaleString()}`}
          />
          <Tooltip 
            formatter={(value: number) => [`¥${value.toLocaleString()}`, '収入']}
            labelFormatter={(label) => `${label}月`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            name="収入"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IncomeList({ data }: IncomeChartProps) {
  return (
    <div className="mt-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                日付
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                カテゴリー
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                金額
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  ¥{item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
