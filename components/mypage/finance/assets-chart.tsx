import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AssetData {
  date: string;
  total: number;
  cash: number;
  stocks: number;
  crypto: number;
  other: number;
}

interface AssetChartProps {
  data: AssetData[];
}

interface AssetBreakdown {
  name: string;
  value: number;
  color: string;
}

interface AssetBreakdownProps {
  data: AssetBreakdown[];
}

export function AssetTrendChart({ data }: AssetChartProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date"
            tick={{ fill: '#6B7280' }}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => `¥${value.toLocaleString()}`}
          />
          <Tooltip 
            formatter={(value: number) => `¥${value.toLocaleString()}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            name="総資産"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6' }}
          />
          <Line
            type="monotone"
            dataKey="cash"
            name="現金"
            stroke="#10B981"
            dot={{ fill: '#10B981' }}
          />
          <Line
            type="monotone"
            dataKey="stocks"
            name="株式"
            stroke="#F59E0B"
            dot={{ fill: '#F59E0B' }}
          />
          <Line
            type="monotone"
            dataKey="crypto"
            name="暗号資産"
            stroke="#6366F1"
            dot={{ fill: '#6366F1' }}
          />
          <Line
            type="monotone"
            dataKey="other"
            name="その他"
            stroke="#EC4899"
            dot={{ fill: '#EC4899' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AssetBreakdownChart({ data }: AssetBreakdownProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name, value, percent }) => 
              `${name}: ¥${value.toLocaleString()} (${(percent * 100).toFixed(1)}%)`
            }
          >
            {data.map((entry, index) => (
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

export function AssetSummary({ data }: { data: AssetData }) {
  const summaryItems = [
    { label: '総資産', value: data.total, color: 'bg-blue-100 text-blue-800' },
    { label: '現金', value: data.cash, color: 'bg-green-100 text-green-800' },
    { label: '株式', value: data.stocks, color: 'bg-yellow-100 text-yellow-800' },
    { label: '暗号資産', value: data.crypto, color: 'bg-indigo-100 text-indigo-800' },
    { label: 'その他', value: data.other, color: 'bg-pink-100 text-pink-800' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {summaryItems.map((item, index) => (
        <div key={index} className={`rounded-lg p-4 ${item.color}`}>
          <h4 className="text-sm font-medium mb-1">{item.label}</h4>
          <p className="text-2xl font-bold">¥{item.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
