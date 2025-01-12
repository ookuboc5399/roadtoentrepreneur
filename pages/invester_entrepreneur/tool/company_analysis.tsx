import { withSubscription } from '../../../lib/auth'
import Layout from '../../../components/Layout'
import { Header_invester } from '../../../components/header/header'
import { ChartBar, TrendingUp, Search, Database } from 'lucide-react'

function CompanyAnalysis() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">企業分析ツール</h1>
            
            {/* 機能紹介 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <ChartBar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-blue-900">財務分析</h3>
                </div>
                <p className="text-blue-700">
                  過去10年分の財務データをグラフ化し、トレンドを可視化。
                  主要な財務指標の推移を簡単に確認できます。
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-medium text-green-900">投資指標分析</h3>
                </div>
                <p className="text-green-700">
                  PER、PBR、ROEなどの投資指標を業界平均と比較。
                  投資判断に必要な情報を一目で把握できます。
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-medium text-purple-900">企業スクリーニング</h3>
                </div>
                <p className="text-purple-700">
                  複数の条件を組み合わせて企業を検索。
                  理想の投資先を効率的に見つけることができます。
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="text-lg font-medium text-orange-900">データベース</h3>
                </div>
                <p className="text-orange-700">
                  上場企業の財務データを完備。
                  四半期ごとに更新され、常に最新の情報を提供します。
                </p>
              </div>
            </div>

            {/* CTAセクション */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                詳細な企業分析を始めましょう
              </h2>
              <p className="text-gray-600 mb-6">
                企業分析ツールでは、より詳細な財務分析や企業比較が可能です。
                投資判断に必要な情報を簡単に取得できます。
              </p>
              <a
                href="https://buffett-code.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                企業分析ツールを開く
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeader_investerを使用
CompanyAnalysis.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header_invester />}>
      {page}
    </Layout>
  )
}

export default withSubscription(CompanyAnalysis)
