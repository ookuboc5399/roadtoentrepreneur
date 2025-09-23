import { Header } from '../../components/header/header'
import { Chapterinvester } from '../../components/chapter/invester/chapter_invester'
import YouTubeSection from '../../components/youtube/YouTubeSection'
import { youtubeVideos } from '../../data/youtubeVideos'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Building,
  DollarSign,
  BarChart3,
  PieChart,
  Target,
  Menu,
  X
} from 'lucide-react'

export default function InvesterEntrepreneur() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      id: 'stock',
      title: '株式投資',
      icon: <TrendingUp className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '株式投資とは', slug: 'stock-detail' },
        { title: '株式投資の始め方', slug: 'stock-start' },
        { title: '銘柄の選び方', slug: 'stock-pick' },
        { title: 'チャート分析', slug: 'stock-chart' }
      ]
    },
    {
      id: 'fx',
      title: 'FX',
      icon: <TrendingUp className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'FXとは', slug: 'fx-detail' },
        { title: 'MT4の準備', slug: 'fx-start' },
        { title: 'トレードサポート', slug: 'trade-support' }
      ]
    },
    {
      id: 'cryptocurrency',
      title: '仮想通貨',
      icon: <DollarSign className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '仮想通貨とは', slug: 'cryptocurrency-detail' },
        { title: '口座開設', slug: 'account-support' },
        { title: 'ビットコイン', slug: 'btc' },
        { title: 'イーサリアム', slug: 'eth' },
        { title: '仮想通貨リサーチ', slug: 'crypto-research' },
      ]
    },
    {
      id: 'bond',
      title: '債権・コモディディ',
      icon: <Building className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '債権について', slug: 'bond-detail' },
        { title: 'コモディティについて', slug: 'commodity-detail' },
        { title: '金', slug: 'gold' },
        { title: '銀', slug: 'silver' },
        { title: '石油', slug: 'oil' },
      ]
    },
    {
      id: 'management',
      title: '経営',
      icon: <Target className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '飲食店経営について', slug: 'restaurant-management' },
        { title: 'FL比率', slug: 'fl-ratio' },
        { title: 'プロダクトアウトとマーケットイン', slug: 'product-market' }
      ]
    },
    {
      id: 'mind',
      title: 'マインド',
      icon: <Target className="h-5 w-5 mr-3" />,
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
    },
    {
      id: 'ea',
      title: 'EA',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'EA1(MACD・Moving Average)', slug: 'ea_macd_ma' },
        { title: 'EA2(一目均衡表システム)', slug: 'ea_ichimoku' },
        { title: 'EA3', slug: 'ea3' },
        { title: 'EA4(平均足システム・NY_Box)', slug: 'ea4' },
        { title: 'EA5(「早起きは5ピップの得」システム)', slug: 'ea5' },
        { title: 'EA6(ボリンジャーバンドシステム)', slug: 'ea6' },
        { title: 'EA7(定型文)', slug: 'ea7' }
      ]
    },
    {
      id: 'tool',
      title: 'tool',
      icon: <BarChart3 className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '経済指標', slug: 'ecnomic_indicators' },
        { title: '自動売買（NeoAlgo）', slug: 'https://neoalgo2.vercel.app/dashboard' },
        { title: '企業分析（BizLens）', slug: 'https://biz-lens-frontend-c9q7.vercel.app/login' }
      ]
    }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {/* デスクトップ用サイドバー */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          {mounted && <Chapterinvester />}
        </div>
        
        {/* メインコンテンツエリア */}
        <div className="flex-1 lg:ml-0">
          {/* モバイル用チャプター選択ボタン */}
          <div className="lg:hidden p-4 bg-white border-b">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>チャプターを選択</span>
            </button>
          </div>
          
          {/* メインコンテンツエリア */}
          <div className="p-4 sm:p-6 lg:p-8 bg-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">投資・起業コンテンツへようこそ</h1>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                このセクションでは、投資や起業に関する重要な知識や
                実践的なアプローチについて探求します。
                専門家による教育動画で、あなたの投資・起業スキルを向上させましょう。
              </p>
            </div>
          </div>
          
          {/* YouTube動画セクション */}
          <YouTubeSection videos={youtubeVideos} />
          
          {/* 追加情報セクション */}
          <div className="p-4 sm:p-6 lg:p-8 bg-white border-t">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">学習のポイント</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-blue-900">基礎から応用まで</h3>
                  <p className="text-sm sm:text-base text-blue-700">
                    初心者向けの基本概念から、上級者向けの高度な戦略まで、段階的に学習できます。
                  </p>
                </div>
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-green-900">実践的な内容</h3>
                  <p className="text-sm sm:text-base text-green-700">
                    理論だけでなく、実際の投資・起業に役立つ実践的なノウハウを提供します。
                  </p>
                </div>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-purple-900">最新トレンド</h3>
                  <p className="text-sm sm:text-base text-purple-700">
                    暗号通貨、DeFi、最新の投資手法など、時代の先端を行く情報を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-blue-900 to-blue-950 border-r border-blue-800/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-white/90">投資・起業</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-blue-800/50 transition-colors"
                >
                  <X className="h-6 w-6 text-white/70" />
                </button>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-lg transition-colors
                      ${openSection === section.id ? 'bg-blue-800/50 text-white' : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                  >
                    <div className="flex items-center">
                      {section.icon}
                      <span className="text-base font-medium ml-3">{section.title}</span>
                    </div>
                    {openSection === section.id ? 
                      <ChevronDown className="h-5 w-5" /> : 
                      <ChevronRight className="h-5 w-5" />
                    }
                  </button>
                  
                  {openSection === section.id && (
                    <div className="ml-6 mt-1 space-y-1 max-h-48 overflow-y-auto">
                      {section.subsections.map((subsection) => (
                        <React.Fragment key={subsection.slug}>
                          {subsection.slug.startsWith('http') ? (
                            <a
                              href={subsection.slug}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="flex items-center px-4 py-3 rounded-lg transition-colors text-white/70 hover:bg-blue-800/30 hover:text-white"
                            >
                              <span className="text-sm">{subsection.title}</span>
                            </a>
                          ) : (
                            <Link 
                              href={`/invester_entrepreneur/${section.id}/${subsection.slug}`}
                              onClick={closeMobileMenu}
                            >
                              <div className="flex items-center px-4 py-3 rounded-lg transition-colors text-white/70 hover:bg-blue-800/30 hover:text-white">
                                <span className="text-sm">{subsection.title}</span>
                              </div>
                            </Link>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}