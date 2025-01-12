// import { withAuth } from '../../../lib/auth'
import Layout from '../../../components/Layout'
import { Header } from '../../../components/header/header'
import { useState, useEffect } from 'react'
import { getTrendingCoins, getUpcomingCoins, getNewListings, searchCoins, Coin, UpcomingCoin, NewListing } from '../../../lib/crypto'
import { Search, TrendingUp, Clock, Star } from 'lucide-react'
import { useRouter } from 'next/router'

function CryptoResearch() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Coin[]>([])
  const [showResults, setShowResults] = useState(false)
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([])
  const [upcomingCoins, setUpcomingCoins] = useState<UpcomingCoin[]>([])
  const [newListings, setNewListings] = useState<NewListing[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const [trendingData, upcomingData, newListingsData] = await Promise.all([
          getTrendingCoins(),
          getUpcomingCoins(),
          getNewListings()
        ])
        setTrendingCoins(trendingData)
        setUpcomingCoins(upcomingData)
        setNewListings(newListingsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setShowResults(false)
      return
    }

    try {
      const results = await searchCoins(searchQuery)
      setSearchResults(results)
      setShowResults(true)
    } catch (error) {
      console.error('Error searching coins:', error)
      setSearchResults([])
      setShowResults(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (!value.trim()) {
      setShowResults(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">仮想通貨リサーチ</h1>
            
            {/* 検索バー */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="コイン名やシンボルで検索..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1.5 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  検索
                </button>
              </div>
            </form>

            {/* 検索結果 */}
            {showResults && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-gray-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">検索結果</h2>
                </div>
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名前</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">シンボル</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">価格</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">24h変動</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {searchResults.length > 0 ? (
                          searchResults.map((coin, index) => (
                            <tr 
                              key={index}
                              onClick={() => router.push(`/invester_entrepreneur/cryptocurrency/coin/${coin.symbol}`)}
                              className="cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.symbol}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.price}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{coin.price_change_24h}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                              該当するコインが見つかりませんでした
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 人気急上昇コイン */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">人気急上昇コイン</h2>
              </div>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名前</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">シンボル</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">価格</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">24h変動</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {trendingCoins.map((coin, index) => (
                        <tr 
                          key={index}
                          onClick={() => router.push(`/invester_entrepreneur/cryptocurrency/coin/${coin.symbol}`)}
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{coin.price_change_24h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 上場予定のコイン */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">上場予定のコイン</h2>
              </div>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名前</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">シンボル</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">予定日</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">概要</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {upcomingCoins.map((coin, index) => (
                        <tr 
                          key={index}
                          onClick={() => router.push(`/invester_entrepreneur/cryptocurrency/coin/${coin.symbol}`)}
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.launch_date}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{coin.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 新規上場コイン */}
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">新規上場コイン</h2>
              </div>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名前</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">シンボル</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">上場日</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">現在価格</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {newListings.map((coin, index) => (
                        <tr 
                          key={index}
                          onClick={() => router.push(`/invester_entrepreneur/cryptocurrency/coin/${coin.symbol}`)}
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coin.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.listing_date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coin.current_price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeader_investerを使用
CryptoResearch.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header />}>
      {page}
    </Layout>
  )
}

export default CryptoResearch
