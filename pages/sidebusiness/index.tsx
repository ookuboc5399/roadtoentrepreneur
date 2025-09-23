import { Header } from '../../components/header/header'
import { ChapterSidebusiness } from '../../components/chapter/sidebusiness/chapter_sidebusiness'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  Video,
  BookOpen,
  ShoppingCart,
  FileSpreadsheet,
  Palette,
  Megaphone,
  Home,
  Menu,
  X
} from 'lucide-react'

export default function Sidebusiness() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      id: 'video',
      title: '動画制作',
      icon: <Video className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '動画制作の基礎', slug: 'video-basics' },
        { title: '編集ソフトの使い方', slug: 'editing-software' },
        { title: 'YouTube戦略', slug: 'youtube-strategy' },
      ]
    },
    {
      id: 'blog',
      title: 'ブログ',
      icon: <BookOpen className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'ブログの始め方', slug: 'blog-start' },
        { title: 'SEO対策', slug: 'seo-strategy' },
        { title: '収益化', slug: 'monetization' },
      ]
    },
    {
      id: 'ecommerce',
      title: '物販',
      icon: <ShoppingCart className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'ECサイト構築', slug: 'ec-setup' },
        { title: '商品選定', slug: 'product-selection' },
        { title: 'マーケティング', slug: 'marketing' },
      ]
    },
    {
      id: 'excel',
      title: 'Excel',
      icon: <FileSpreadsheet className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'Excel基礎', slug: 'excel-basics' },
        { title: '関数の使い方', slug: 'functions' },
        { title: 'データ分析', slug: 'data-analysis' },
      ]
    },
    {
      id: 'design',
      title: 'デザイン',
      icon: <Palette className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'デザイン基礎', slug: 'design-basics' },
        { title: 'ツールの使い方', slug: 'design-tools' },
        { title: 'ブランディング', slug: 'branding' },
      ]
    },
    {
      id: 'marketing',
      title: 'マーケティング',
      icon: <Megaphone className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'SNSマーケティング', slug: 'sns-marketing' },
        { title: 'コンテンツマーケティング', slug: 'content-marketing' },
        { title: '広告運用', slug: 'advertising' },
      ]
    },
    {
      id: 'realestate',
      title: '不動産',
      icon: <Home className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '不動産投資基礎', slug: 'realestate-basics' },
        { title: '物件選び', slug: 'property-selection' },
        { title: '管理・運営', slug: 'management' },
      ]
    }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-16">
        {/* デスクトップ用サイドバー */}
        <div className="hidden lg:block fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterSidebusiness />}
        </div>
        
        {/* メインコンテンツエリア */}
        <div className="flex-1 lg:ml-64">
          {/* モバイル用チャプター選択ボタン */}
          <div className="lg:hidden p-4 bg-white border-b">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>チャプターを選択</span>
            </button>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">副業の世界へようこそ</h1>
            <div className="prose max-w-none">
              <p className="text-sm sm:text-base">
                このセクションでは、動画制作、ブログ、物販、Excel、デザイン、マーケティング、不動産など、
                様々な副業の可能性について探求します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-green-900 to-green-950 border-r border-green-800/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-white/90">副業の世界</span>
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
                          <div className="flex items-center px-4 py-3 rounded-lg transition-colors text-white/70 hover:bg-green-800/30 hover:text-white">
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
