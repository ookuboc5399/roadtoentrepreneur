import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabaseClient'
import { Header } from '../../components/header/header'
import ReactMarkdown from 'react-markdown'

interface Article {
  title: string
  content: string
  created_at: string
}

export default function FutureWorldArticle() {
  const router = useRouter()
  const { slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug]) // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchArticle() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'future_world')
        .eq('slug', slug)
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
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
} 