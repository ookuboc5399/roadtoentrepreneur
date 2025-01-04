import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from 'lucide-react'

interface ChapterTemplateProps {
  title: string
  backLink: string
  sections: {
    id: string
    title: string
    icon: React.ReactNode
    subsections: {
      title: string
      slug: string
    }[]
  }[]
}

const ChapterTemplate: React.FC<ChapterTemplateProps> = ({ title, backLink, sections }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className={cn("bg-gray-100 p-4 min-h-screen")}>
      <div className="mb-4">
        <Link 
          href={backLink} 
          className="text-blue-600 hover:text-blue-800"
          legacyBehavior={false}
        >
          ← 戻る
        </Link>
        <h1 className="text-2xl font-bold mt-2">{title}</h1>
      </div>
      <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {sections.map((section) => (
          <div key={section.id} className="rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full bg-blue-600 text-white p-3 flex items-center justify-between hover:bg-blue-700 transition-colors"
            >
              <div className="flex items-center space-x-2">
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            {expandedSections.includes(section.id) && (
              <div className="bg-white">
                {section.subsections.map((subsection, index) => (
                  <Link
                    key={index}
                    href={`/invester_entrepreneur/${section.id}/${subsection.slug}`}
                    className="block px-4 py-2 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
                  >
                    {subsection.title}
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

export default ChapterTemplate 