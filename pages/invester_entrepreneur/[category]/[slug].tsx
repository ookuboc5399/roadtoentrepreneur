'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../utils/supabaseClient'
// @ts-ignore
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Chapterinvester } from '../../../components/chapter/invester/chapter_invester'
import { Header_invester } from '../../../components/header/header'

interface Reference {
  title: string
  url: string
  description?: string
}

interface Article {
  id: string
  title: string
  content: string
  category: string
  sub_category: string
  created_at: string
  image_url?: string
  slug: string
  references?: Reference[]
  blocks?: {
    type: string
    content: string
    metadata?: {
      title: string
      description: string
      url: string
      icon: string
    }
  }[]
}

export default function ArticlePage() {
  const router = useRouter()
  const { category, slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (category && slug) {
      fetchArticle()
    }
  }, [category, slug])

  async function fetchArticle() {
    try {
      setLoading(true)
      console.log('Fetching article:', { category, slug })

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .eq('slug', slug)
        .single()

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }
      
      console.log('Fetched article:', data)
      setArticle(data)
    } catch (error) {
      console.error('Error fetching article:', error)
    } finally {
      setLoading(false)
    }
  }

  const ArticleContent = () => (
    <div className="w-full">
      {article?.image_url && (
        <div className="w-full h-[300px] mb-8">
          <Image
            src={article.image_url}
            alt={article.title}
            width={1200}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      )}
      <div className="px-8">
        <h1 className="text-3xl font-bold mb-6">{article?.title}</h1>
        <div className="space-y-8">
          {article?.blocks?.map((block, index) => (
            <div key={index}>
              {block.type === 'text' && (
                <div className="prose max-w-none break-words">
                  <ReactMarkdown>{block.content}</ReactMarkdown>
                </div>
              )}
              
              {block.type === 'link-card' && block.metadata && (
                <a 
                  href={block.metadata.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    {block.metadata.icon && (
                      <img 
                        src={block.metadata.icon} 
                        alt="" 
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-medium text-lg text-gray-900">
                        {block.metadata.title}
                      </h3>
                      {block.metadata.description && (
                        <p className="text-gray-600 mt-1">
                          {block.metadata.description}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      {article?.references && article.references.length > 0 && (
        <div className="mt-12 px-8">
          <h2 className="text-xl font-bold mb-4">参考サイト</h2>
          <div className="space-y-4">
            {article.references.map((ref, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <a 
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {ref.title}
                </a>
                {ref.description && (
                  <p className="text-sm text-gray-600 mt-1">{ref.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen">
      <Header_invester />
      <div className="bg-gray-200 flex-1">
        <div className="flex">
          <div className="w-64 flex-shrink-0">
            {mounted && <Chapterinvester />}
          </div>
          <div className="flex-1">
            {loading ? (
              <div>Loading...</div>
            ) : !article ? (
              <div>Article not found</div>
            ) : (
              <ArticleContent />
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 