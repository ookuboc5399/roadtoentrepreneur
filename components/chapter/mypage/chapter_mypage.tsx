import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { 
  ArrowLeftCircle, 
  ChevronDown,
  ChevronRight,
  Target,
  PieChart,
  UserCircle
} from 'lucide-react'

interface Subsection {
  title: string;
  slug: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections: Subsection[];  // Not optional since all sections have subsections
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
    <div className="w-64 border-r border-purple-800/50 flex flex-col bg-gradient-to-b from-purple-900 to-purple-950">
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
                    href={`/mypage/${section.id}/${subsection.slug}`}
                  >
                    <div className={`flex items-center px-4 py-2 rounded-lg transition-colors
                      ${router.asPath === `/mypage/${section.id}/${subsection.slug}`
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
  )
}

export function ChapterMypage() {
  const sections = [
    {
      id: 'account',
      title: 'アカウント情報',
      icon: <UserCircle className="h-5 w-5 mr-3" />,
      subsections: [
        { title: 'プロフィール', slug: 'profile' },
        { title: 'セキュリティ', slug: 'security' },
        { title: '通知設定', slug: 'notifications' }
      ]
    },
    {
      id: 'goals',
      title: '夢の実現',
      icon: <Target className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '目標設定', slug: 'goal-setting' },
        { title: '進捗管理', slug: 'progress' },
        { title: 'アクションプラン', slug: 'action-plan' }
      ]
    },
    {
      id: 'finance',
      title: '収支管理',
      icon: <PieChart className="h-5 w-5 mr-3" />,
      subsections: [
        { title: '収入管理', slug: 'income' },
        { title: '支出管理', slug: 'expense' },
        { title: '予算設定', slug: 'budget' },
        { title: '資産状況', slug: 'assets' }
      ]
    },
  ]
  
  return <ChapterTemplate 
    title="マイページ"
    backLink="/mypage"
    sections={sections}
  />
}
