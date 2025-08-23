// import { withAuth } from '../../../../lib/auth'
import Layout from '../../../../components/Layout'
import { Header } from '../../../../components/header/header'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Clock, BarChart2 } from 'lucide-react'
import { getCoinBySymbol, Coin } from '../../../../lib/crypto'

function CoinDetail() {
  const router = useRouter()
  const { symbol } = router.query
  const [coinData, setCoinData] = useState<Coin | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCoinData() {
      if (typeof symbol === 'string') {
        try {
          const data = await getCoinBySymbol(symbol)
          setCoinData(data)
        } catch (err) {
          setError('Failed to fetch coin data')
          console.error(err)
        }
      }
    }

    fetchCoinData()
  }, [symbol])

  if (!coinData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* ヘッダー情報 */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{coinData.name}</h1>
                <p className="text-lg text-gray-500">{coinData.symbol}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{coinData.price}</div>
                <div className={`text-lg ${coinData.price_change_24h.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {coinData.price_change_24h}
                </div>
              </div>
            </div>
          </div>

          {/* 主要指標 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">時価総額</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">{coinData.market_cap}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-2">
                <BarChart2 className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">24時間取引高</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">{coinData.volume_24h}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">24時間変動率</h3>
              </div>
              <p className={`text-2xl font-bold ${coinData.price_change_24h.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {coinData.price_change_24h}
              </p>
            </div>
          </div>

          {/* 概要 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">概要</h2>
            <p className="text-gray-700 leading-relaxed">{coinData.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeaderを使用
CoinDetail.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header />}>
      {page}
    </Layout>
  )
}

export default CoinDetail
