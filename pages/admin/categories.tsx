import React from 'react'
import { BookOpen, LineChart, PieChart, Brain, Target, Rocket, Bot, Globe, Headphones } from 'lucide-react'

interface Subsection {
  title: string
  slug: string
}

export interface Category {
  id: string
  name: string
  icon: React.ReactNode
  subsections: Subsection[]
}

// 投資・起業のカテゴリー
export const investerCategories: Category[] = [
  { 
    id: 'stock', 
    name: '株式投資',
    icon: React.createElement(LineChart, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: '株式投資とは', slug: 'stock-detail' },
      { title: '株式投資の始め方', slug: 'stock-start' },
      { title: '銘柄の選び方', slug: 'stock-pick' },
      { title: 'チャート分析', slug: 'stock-chart' }
    ]
  },
  { 
    id: 'fx', 
    name: 'FX',
    icon: React.createElement(LineChart, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'FXとは', slug: 'fx-detail' },
      { title: 'MT4の準備', slug: 'fx-start' },
      { title: '通貨ペアの選び方', slug: 'fx-pairs' },
      { title: 'トレードサポート', slug: 'trade-support' }
    ]
  },
  { 
    id: 'cryptocurrency', 
    name: '仮想通貨',
    icon: React.createElement(LineChart, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: '仮想通貨とは', slug: 'cryptocurrency-detail' },
      { title: '口座開設', slug: 'account-support' },
      { title: 'ビットコイン', slug: 'btc' },
      { title: 'イーサリアム', slug: 'eth' }
    ]
  },
  { 
    id: 'bond', 
    name: '債権・コモディディ',
    icon: React.createElement(LineChart, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: '債権について', slug: 'bond-detail'},
      { title: 'コモディティについて', slug: 'commodity-detail' },
      { title: '金', slug: 'gold' },
      { title: '銀', slug: 'silver' },
      { title: '石油', slug: 'oil' }
    ]
  },
  {
    id: 'system',
    name: 'システムトレード',
    icon: React.createElement(PieChart, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'システムトレードの基礎', slug: 'system-basic' },
      { title: '自動売買の仕組み', slug: 'system-auto' },
      { title: '戦略の構築', slug: 'system-strategy' },
      { title: 'EA1(MACD・Moving Average)', slug: 'ea_macd_ma' },
      { title: 'EA2(一目均衡表システム)', slug: 'ea_ichimoku' },
      { title: 'EA3(注文関数)', slug: 'ea_order' },
      { title: 'EA4(平均足システム・NY_Box)', slug: 'ea_heiken_nybox' },
      { title: 'EA5(「早起きは5ピップの得」システム)', slug: 'ea_early_bird' },
      { title: 'EA6(ボリンジャーバンドシステム)', slug: 'ea_bollinger' },
      { title: 'EA7(定型文)', slug: 'ea_template' }
    ]
  },
  {
    id: 'mind',
    name: 'マインド',
    icon: React.createElement(Brain, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'お金持ちの思考法', slug: 'thinking-like-a-rich' },
      { title: '勝つための準備', slug: 'preparing-to-win' },
      { title: '他人に認めてもらう必要はない', slug: 'no-need-for-approval' },
      { title: '品格を備える', slug: 'cultivating-dignity' },
      { title: '孤独に耐える', slug: 'enduring-solitude' },
      { title: 'トレードで大事なこと', slug: 'important-in-trade' },
      { title: 'ビジョナリーカンパニー', slug: 'visionary-company' },
      { title: 'お金持ちになるために', slug: 'becoming-rich' },
      { title: '時代の潮流に乗る', slug: 'riding-the-trend' },
      { title: 'やってのける', slug: 'getting-it-done' },
      { title: '資金管理とリスクリワード', slug: 'fund-management-risk-reward' }
    ]
  }
]

// サイドビジネスのカテゴリー
export const sidebusinessCategories: Category[] = [
  {
    id: 'movie',
    name: '動画',
    icon: React.createElement(Target, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: '動画編集について', slug: 'movie-detail' },
      { title: 'サムネイル', slug: 'thumbnail' }
    ]
  },
  {
    id: 'blog',
    name: 'ブログ',
    icon: React.createElement(Target, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'キーワード調査', slug: 'blog-detail' },
      { title: 'SEO対策', slug: 'blog-seo' },
      { title: 'ライティング', slug: 'blog-writing' },
      { title: '推敲', slug: 'blog-revision' },
      { title: '考え方', slug: 'blog-think' },
      { title: 'WordPress', slug: 'wordpress' }
    ]
  },
  {
    id: 'buppan',
    name: '物販',
    icon: React.createElement(Target, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: '国内転売', slug: 'domestic-resale' },
      { title: 'eBay', slug: 'ebay' },
      { title: 'Shopify', slug: 'shopify' }
    ]
  }
]

// 未来の世界のカテゴリー
export const futureCategories: Category[] = [
  {
    id: 'ai',
    name: 'AI・人工知能',
    icon: React.createElement(Bot, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'AIの基礎知識', slug: 'ai-basics' },
      { title: '機械学習入門', slug: 'machine-learning' },
      { title: 'ディープラーニング', slug: 'deep-learning' },
      { title: 'AIと倫理', slug: 'ai-ethics' }
    ]
  },
  {
    id: 'web3',
    name: 'Web3.0',
    icon: React.createElement(Globe, { className: "h-5 w-5 mr-3" }),
    subsections: [
      { title: 'ブロックチェーン基礎', slug: 'blockchain-basics' },
      { title: 'DeFi入門', slug: 'defi-intro' },
      { title: 'NFTの世界', slug: 'nft-world' },
      { title: 'DAOについて', slug: 'dao-intro' }
    ]
  }
]

// デフォルトエクスポートを追加
export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">カテゴリー管理</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            このページはカテゴリー定義のためのデータファイルです。
          </p>
        </div>
      </div>
    </div>
  )
}
