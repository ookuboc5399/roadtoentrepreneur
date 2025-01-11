import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  Monitor,
  Globe,
  Headphones,
  Bot,
  Rocket,
  Code
} from 'lucide-react'

interface Subsection {
  title: string;
  slug: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections: Subsection[];
}

interface ChapterTemplateProps {
  title: string;
  backLink: string;
  sections: Section[];
}

function ChapterTemplate({ title, backLink, sections }: ChapterTemplateProps) {
  const router = useRouter()
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    const category = router.query.category
    if (typeof category === 'string') {
      setOpenSection(category)
    }
  }, [router.query.category])

  return (
    <div className="h-screen bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="h-full w-64 border-r border-purple-800/50 flex flex-col">
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center space-x-3 mb-6">
            <Link href={backLink}>
              <div className="p-2 rounded-full hover:bg-purple-800/50 transition-colors">
                <ArrowLeftCircle className="h-5 w-5 text-white/70" />
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-white/90">{title}</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors
                  ${openSection === section.id ? 'bg-purple-800/50 text-white' : 'text-white/70 hover:bg-purple-800/30 hover:text-white'}`}
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
                <div className="ml-6 mt-1 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
                  {section.subsections.map((subsection) => (
                    <Link 
                      key={subsection.slug} 
                      href={`/future_world/${section.id}/${subsection.slug}`}
                    >
                      <div className={`flex items-center px-4 py-2 rounded-lg transition-colors
                        ${router.pathname === `/future_world/${section.id}/${subsection.slug}`
                          ? 'bg-purple-800/50 text-white'
                          : 'text-white/70 hover:bg-purple-800/30 hover:text-white'}`}
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
  )
}

export function ChapterFuture() {
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
  
  return <ChapterTemplate 
    title="未来の世界"
    backLink="/future_world"
    sections={sections}
  />
}
