import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

interface Article {
  id: string
  title: string
  content: string
  category: string
  sub_category: string
  created_at: string
  image_url?: string
}

export default function Article({ category, subCategory }: { category: string, subCategory: string }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticle()
  }, [category, subCategory]) // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchArticle() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .eq('sub_category', subCategory)
        .single()

      if (error) throw error
      setArticle(data)
    } catch (error) {
      console.error('Error fetching article:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!article) return <div>Article not found</div>

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {article.image_url && (
        <div className="relative w-full h-64 mb-8">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  )
}