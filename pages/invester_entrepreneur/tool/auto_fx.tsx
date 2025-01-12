import { withAuth } from '../../../lib/auth'
import Layout from '../../../components/Layout'
import { Header_invester } from '../../../components/header/header'
import { useState } from 'react'

function AutoFx() {
  const [selectedPair, setSelectedPair] = useState('USD/JPY')
  const [tradeHistory] = useState([
    { date: '2024-03-20', pair: 'USD/JPY', type: '買い', price: 151.23, profit: 15000 },
    { date: '2024-03-19', pair: 'EUR/USD', type: '売り', price: 1.0865, profit: -8000 },
    { date: '2024-03-18', pair: 'GBP/JPY', type: '買い', price: 191.45, profit: 12000 },
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">自動FXトレード</h1>
            
            {/* 通貨ペア選択 */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                通貨ペア
              </label>
              <select
                value={selectedPair}
                onChange={(e) => setSelectedPair(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="USD/JPY">USD/JPY</option>
                <option value="EUR/USD">EUR/USD</option>
                <option value="GBP/JPY">GBP/JPY</option>
              </select>
            </div>

            {/* トレード設定 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">リスク設定</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      1取引あたりの最大損失額
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="10000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      1日の最大損失額
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">トレード戦略</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      エントリー条件
                    </label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                      <option>トレンドフォロー</option>
                      <option>レンジ取引</option>
                      <option>ブレイクアウト</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      利確幅 (pips)
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* トレード履歴 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">最近のトレード履歴</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        日付
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        通貨ペア
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        取引種類
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        価格
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        損益
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tradeHistory.map((trade, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {trade.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {trade.pair}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {trade.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {trade.price}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${trade.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {trade.profit >= 0 ? '+' : ''}{trade.profit.toLocaleString()}円
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 開始/停止ボタン */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                自動取引を開始
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeader_investerを使用
AutoFx.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header_invester />}>
      {page}
    </Layout>
  )
}

export default withAuth(AutoFx)
