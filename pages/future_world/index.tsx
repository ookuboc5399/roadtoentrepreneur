import { Header } from '../../components/header/header'
import { ChapterFuture } from '../../components/chapter/future/chapter_future'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  Bot,
  Globe,
  Headphones,
  Menu,
  X
} from 'lucide-react'

export default function FutureWorld() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      id: 'history',
      title: '世界の変遷',
      icon: <Bot className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '世界の変遷', slug: 'history' },
      ]
    },
    {
      id: 'ai',
      title: 'AI・人工知能',
      icon: <Bot className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'AIの基礎知識', slug: 'ai-basics' },
        { title: '機械学習入門', slug: 'machine-learning' },
        { title: 'ディープラーニング', slug: 'deep-learning' },
        { title: 'AIと倫理', slug: 'ai-ethics' }
      ]
    },
    {
      id: 'web3',
      title: 'Web3.0',
      icon: <Globe className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'ブロックチェーン基礎', slug: 'blockchain-basics' },
        { title: 'DeFi入門', slug: 'defi-intro' },
        { title: 'NFTの世界', slug: 'nft-world' },
        { title: 'DAOについて', slug: 'dao-intro' },
        { title: 'Fintech', slug: 'fintech' },
      ]
    },
    {
      id: 'metaverse',
      title: 'メタバース',
      icon: <Headphones className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'メタバースとは', slug: 'metaverse-intro' },
        { title: '仮想空間経済', slug: 'virtual-economy' },
        { title: 'アバターと身分証明', slug: 'avatar-identity' }
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
          {mounted && <ChapterFuture />}
        </div>
        
        {/* メインコンテンツエリア */}
        <div className="flex-1 lg:ml-64">
          {/* モバイル用チャプター選択ボタン */}
          <div className="lg:hidden p-4 bg-white border-b">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>チャプターを選択</span>
            </button>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">未来の世界へようこそ</h1>
            <div className="prose max-w-none">
              <p className="text-sm sm:text-base">
                このセクションでは、AI、Web3.0、メタバースなど、
                私たちの未来を形作る重要な技術トレンドについて探求します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-purple-900 to-purple-950 border-r border-purple-800/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-white/90">未来の世界</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-purple-800/50 transition-colors"
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
                      ${openSection === section.id ? 'bg-purple-800/50 text-white' : 'text-white/70 hover:bg-purple-800/30 hover:text-white'}`}
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
                          href={`/future_world/${section.id}/${subsection.slug}`}
                          onClick={closeMobileMenu}
                        >
                          <div className="flex items-center px-4 py-3 rounded-lg transition-colors text-white/70 hover:bg-purple-800/30 hover:text-white">
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
