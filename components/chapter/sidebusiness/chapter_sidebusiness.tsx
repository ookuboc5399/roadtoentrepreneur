import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  Video,
  FileText,
  ShoppingBag,
  FileSpreadsheet,
  PenTool,
  Megaphone,
  Building,
  Target,
  Menu,
  X
} from 'lucide-react'

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections: {
    title: string;
    slug: string;
  }[];
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
    <div className="h-screen bg-gradient-to-b from-green-900 to-green-950">
      {/* モバイル用ヘッダー */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-green-800/50">
        <div className="flex items-center space-x-3">
          <Link href={backLink}>
            <div className="p-2 rounded-full hover:bg-green-800/50 transition-colors">
              <ArrowLeftCircle className="h-6 w-6 text-white/70" />
            </div>
          </Link>
          <span className="text-lg font-medium text-white/90">{title}</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full hover:bg-green-800/50 transition-colors"
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
      <div className="hidden lg:flex h-full w-64 border-r border-green-800/50 flex-col">
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center space-x-3 mb-6">
            <Link href={backLink}>
              <div className="p-2 rounded-full hover:bg-green-800/50 transition-colors">
                <ArrowLeftCircle className="h-5 w-5 text-white/70" />
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-white/90">{title}</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors
                  ${openSection === section.id ? 'bg-green-800/50 text-white' : 'text-white/70 hover:bg-green-800/30 hover:text-white'}`}
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
              
              {openSection === section.id && (
                <div className="ml-6 mt-1 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent">
                  {section.subsections.map((subsection) => (
                    <Link 
                      key={subsection.slug} 
                      href={`/sidebusiness/${section.id}/${subsection.slug}`}
                    >
                      <div className={`flex items-center px-4 py-2 rounded-lg transition-colors
                        ${router.pathname === `/sidebusiness/${section.id}/${subsection.slug}`
                          ? 'bg-green-800/50 text-white'
                          : 'text-white/70 hover:bg-green-800/30 hover:text-white'}`}
                      >
                        <span className="text-sm">{subsection.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* モバイル用メニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-green-900 to-green-950 border-r border-green-800/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-white/90">{title}</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-green-800/50 transition-colors"
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
                      ${openSection === section.id ? 'bg-green-800/50 text-white' : 'text-white/70 hover:bg-green-800/30 hover:text-white'}`}
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
                        <Link 
                          key={subsection.slug} 
                          href={`/sidebusiness/${section.id}/${subsection.slug}`}
                          onClick={closeMobileMenu}
                        >
                          <div className={`flex items-center px-4 py-3 rounded-lg transition-colors
                            ${router.pathname === `/sidebusiness/${section.id}/${subsection.slug}`
                              ? 'bg-green-800/50 text-white'
                              : 'text-white/70 hover:bg-green-800/30 hover:text-white'}`}
                          >
                            <span className="text-sm">{subsection.title}</span>
                          </div>
                        </Link>
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

export function ChapterSidebusiness() {
  const sections = [
    {
      id: 'movie',
      title: '動画',
      icon: <Video className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '動画編集について', slug: 'movie-detail' },
        { title: 'サムネイル', slug: 'thumbnail' }
      ]
    },
    {
      id: 'blog',
      title: 'ブログ',
      icon: <FileText className="h-5 w-5 mr-3" />,
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
      title: '物販',
      icon: <ShoppingBag className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '国内転売', slug: 'domestic-resale' },
        { title: 'eBay', slug: 'ebay' },
        { title: 'Shopify', slug: 'shopify' }
      ]
    },
    {
      id: 'excel',
      title: 'Excel',
      icon: <FileSpreadsheet className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '実務の表示形式', slug: 'excel-format' },
        { title: '日付や時刻を表す関数', slug: 'excel-date' },
        { title: '縦棒グラフ', slug: 'excel-bar-chart' },
        { title: '折れ線グラフ', slug: 'excel-line-chart' }
      ]
    },
    {
      id: 'design',
      title: 'デザイン',
      icon: <PenTool className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'デザインの基礎', slug: 'design-basics' },
        { title: 'カラー', slug: 'design-color' },
        { title: 'レイアウト', slug: 'design-layout' }
      ]
    },
    {
      id: 'marketing',
      title: 'マーケティング',
      icon: <Megaphone className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'SNSマーケティング', slug: 'sns-marketing' },
        { title: 'Twitter', slug: 'twitter' },
        { title: '進化論マーケティング', slug: 'evolution' }
      ]
    },
    {
      id: 'real_estate',
      title: '不動産',
      icon: <Building className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '不動産投資', slug: 'real-estate-investment' },
        { title: '収益物件', slug: 'income-property' }
      ]
    }
  ]
  
  return <ChapterTemplate 
    title="副業"
    backLink="/sidebusiness"
    sections={sections}
  />
}
