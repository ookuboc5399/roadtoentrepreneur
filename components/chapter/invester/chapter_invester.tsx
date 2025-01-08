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
    // 必要に応じて他のアイコンを追加
  } from 'lucide-react'

const back_bot = "/invester_entrepreneur/bot_chapter"
const back_stock = "/invester_entrepreneur/stock_chapter"
const back_mind = "/invester_entrepreneur/mind_chapter"
const back_start = "/invester_entrepreneur/engel_investment_chapter"



function ChapterTemplate({ title, backLink, sections }) {
    const router = useRouter()
    const [openSection, setOpenSection] = useState(null)
  
    // URLからカテゴリを取得して初期値を設定
    useEffect(() => {
      const category = router.query.category
      if (category) {
        setOpenSection(category)
      }
    }, [router.query.category])
  
    return (
      <div className="h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="h-full w-64 border-r border-blue-800/50 flex flex-col">
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
                          <Link 
                            key={subsection.slug} 
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
          { title: '株式投資とは', slug: 'stock-detail' },
          { title: 'MT4の準備', slug: 'fx-start' },
          { title: '銘柄の選び方', slug: 'stock-pick' },
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
          { title: '自動売買', slug: 'auto_fx' },
        ]
      }
    ]
    
    return <ChapterTemplate 
      title="チャプター"
      backLink="/invester_entrepreneur/invester_entrepreneur"
      sections={sections}
    />
  }


    


