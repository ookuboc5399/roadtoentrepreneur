import Link from 'next/link'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { 
    ArrowLeftCircle, 
    ChevronDown,
    ChevronRight,
    BookOpen, 
    LineChart, 
    PieChart, 
    DollarSign, 
    Building2,
    GraduationCap,
    Target,
    Briefcase,
    BarChart3,
    Brain,
    Menu,
    X,
    // 必要に応じて他のアイコンを追加
  } from 'lucide-react'

const back_bot = "/invester_entrepreneur/bot_chapter"
const back_stock = "/invester_entrepreneur/stock_chapter"
const back_mind = "/invester_entrepreneur/mind_chapter"
const back_start = "/invester_entrepreneur/engel_investment_chapter"



interface Subsection {
  title: string | React.ReactNode;
  slug: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections?: Subsection[];  // Make subsections optional since some sections don't have them
}

interface ChapterTemplateProps {
  title: string;
  backLink: string;
  sections: Section[];
}

function ChapterTemplate({ title, backLink, sections }: ChapterTemplateProps) {
    const router = useRouter()
    const [openSection, setOpenSection] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
    // URLからカテゴリを取得して初期値を設定
    useEffect(() => {
      const category = router.query.category
      if (typeof category === 'string') {
        setOpenSection(category)
      }
    }, [router.query.category])

    // モバイルメニューを閉じる
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false)
    }
  
    return (
      <div className="h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        {/* モバイル用ヘッダー */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-blue-800/50">
          <div className="flex items-center space-x-3">
            <Link href={backLink}>
              <div className="p-2 rounded-full hover:bg-blue-800/50 transition-colors">
                <ArrowLeftCircle className="h-6 w-6 text-white/70" />
              </div>
            </Link>
            <span className="text-lg font-medium text-white/90">{title}</span>
          </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full hover:bg-blue-800/50 transition-colors"
          data-mobile-menu-trigger
        >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white/70" />
            ) : (
              <Menu className="h-6 w-6 text-white/70" />
            )}
          </button>
        </div>

        {/* デスクトップ用サイドバー */}
        <div className="hidden lg:flex h-full w-64 border-r border-blue-800/50 flex-col">
          <div className="p-4 flex-shrink-0">
            {/* ヘッダー部分 */}
            <div className="flex items-center space-x-3 mb-6">
              <Link href={backLink}>
                <div className="p-2 rounded-full hover:bg-blue-800/50 transition-colors">
                  <ArrowLeftCircle className="h-5 w-5 text-white/70" />
                </div>
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-white/90">{title}</span>
              </div>
            </div>
          </div>
  
          {/* ナビゲーション部分をスクロール可能に */}
          <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
            {sections.map((section) => (
              <div key={section.id}>
                {section.subsections ? (
                  <div>
                    <button
                      onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors
                        ${openSection === section.id ? 'bg-blue-800/50 text-white' : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                    >
                      <div className="flex items-center">
                        {section.icon}
                        <span className="text-sm font-medium">{section.title}</span>
                      </div>
                      {openSection === section.id ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                      }
                    </button>
                    
                    {/* サブセクションのリスト */}
                    {openSection === section.id && (
                      <div className="ml-6 mt-1 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
                        {section.subsections.map((subsection) => (
                          <React.Fragment key={subsection.slug}>
                            {subsection.slug.startsWith('http') ? (
                              <a
                                href={subsection.slug}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center px-4 py-2 rounded-lg transition-colors text-white/70 hover:bg-blue-800/30 hover:text-white`}
                              >
                                <span className="text-sm">{subsection.title}</span>
                              </a>
                            ) : (
                              <Link
                                href={`/invester_entrepreneur/${section.id}/${subsection.slug}`}
                              >
                                <div className={`flex items-center px-4 py-2 rounded-lg transition-colors
                                  ${router.pathname === `/invester_entrepreneur/${section.id}/${subsection.slug}`
                                    ? 'bg-blue-800/50 text-white'
                                    : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                                >
                                  <span className="text-sm">{subsection.title}</span>
                                </div>
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={`/invester_entrepreneur/${section.id}`}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors
                      ${router.pathname === `/invester_entrepreneur/${section.id}`
                        ? 'bg-blue-800/50 text-white'
                        : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                  >
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* モバイル用メニュー */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
            <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-blue-900 to-blue-950 border-r border-blue-800/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-medium text-white/90">{title}</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-full hover:bg-blue-800/50 transition-colors"
                  >
                    <X className="h-6 w-6 text-white/70" />
                  </button>
                </div>
              </div>

              {/* モバイル用ナビゲーション */}
              <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
                {sections.map((section) => (
                  <div key={section.id}>
                    {section.subsections ? (
                      <div>
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
                        
                        {/* サブセクションのリスト */}
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
                                    className={`flex items-center px-4 py-3 rounded-lg transition-colors text-white/70 hover:bg-blue-800/30 hover:text-white`}
                                  >
                                    <span className="text-sm">{subsection.title}</span>
                                  </a>
                                ) : (
                                  <Link
                                    href={`/invester_entrepreneur/${section.id}/${subsection.slug}`}
                                    onClick={closeMobileMenu}
                                  >
                                    <div className={`flex items-center px-4 py-3 rounded-lg transition-colors
                                      ${router.pathname === `/invester_entrepreneur/${section.id}/${subsection.slug}`
                                        ? 'bg-blue-800/50 text-white'
                                        : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                                    >
                                      <span className="text-sm">{subsection.title}</span>
                                    </div>
                                  </Link>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={`/invester_entrepreneur/${section.id}`}
                        onClick={closeMobileMenu}
                        className={`flex items-center px-4 py-4 rounded-lg transition-colors
                          ${router.pathname === `/invester_entrepreneur/${section.id}`
                            ? 'bg-blue-800/50 text-white'
                            : 'text-white/70 hover:bg-blue-800/30 hover:text-white'}`}
                      >
                        {section.icon}
                        <span className="text-base font-medium ml-3">{section.title}</span>
                      </Link>
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
  
  export function Chapterinvester() {
    const sections = [
      {
        id: 'stock',
        title: '株式投資',
        icon: <LineChart className="h-5 w-5 mr-3" />,
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
        icon: <LineChart className="h-5 w-5 mr-3" />,
        subsections: [
          { title: 'FXとは', slug: 'fx-detail' },
          { title: 'MT4の準備', slug: 'fx-start' },
          { title: 'トレードサポート', slug: 'trade-support' }
        ]
      },
      {
        id: 'cryptocurrency',
        title: '仮想通貨',
        icon: <LineChart className="h-5 w-5 mr-3" />,
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
        icon: <BookOpen className="h-5 w-5 mr-3" />,
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
        icon: <BookOpen className="h-5 w-5 mr-3" />,
        subsections: [
          { title: '飲食店経営について', slug: 'restaurant-management' },
          { title: 'FL比率', slug: 'fl-ratio' },
          { title: 'プロダクトアウトとマーケットイン', slug: 'product-market' }
        ]
      },
      {
        id: 'mind',
        title: 'マインド',
        icon: <Brain className="h-5 w-5 mr-3" />,
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
        icon: <Target className="h-5 w-5 mr-3" />,
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
        icon: <Target className="h-5 w-5 mr-3" />,
        subsections: [
          { title: '経済指標', slug: 'ecnomic_indicators' },
          { 
            title: (
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full">
                  <span>自動売買（NeoAlgo）</span>
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-md border border-red-600 shadow-lg transform hover:scale-105 transition-transform">
                    FUTURE
                  </span>
                </div>
                <div className="text-xs text-amber-600 font-medium mt-1 ml-1">
                  ⚡ FUTURE プラン限定
                </div>
              </div>
            ), 
            slug: 'https://neoalgo2.vercel.app/dashboard' 
          },
          { 
            title: (
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full">
                  <span>企業分析（BizLens）</span>
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-md border border-purple-600 shadow-lg transform hover:scale-105 transition-transform">
                    PREMIUM
                  </span>
                </div>
                <div className="text-xs text-amber-600 font-medium mt-1 ml-1">
                  🚀 PREMIUM プラン限定
                </div>
              </div>
            ), 
            slug: 'https://biz-lens-frontend-c9q7.vercel.app/login' 
          }
        ]
      }
    ]
    
    return <ChapterTemplate 
      title="チャプター"
      backLink="/invester_entrepreneur/invester_entrepreneur"
      sections={sections}
    />
  }
