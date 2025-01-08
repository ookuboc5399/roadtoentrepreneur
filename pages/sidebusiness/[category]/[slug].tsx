import { Header_sidebusiness } from '../../../components/header/header'
import { ChapterSidebusiness } from '../../../components/chapter/sidebusiness/chapter_sidebusiness'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { supabase } from '../../../utils/supabaseClient'

interface Article {
  title: string;
  content: string;
  blocks?: any[];
  section: string;
}

interface WordPressPost {
  id: number;
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt?: {
    rendered: string
  }
  featured_media_url?: string
  yoast_head_json?: {
    og_image?: [{
      url: string
    }]
  }
}

export default function SideBusinessContent() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { category, slug } = router.query
  const [wpPost, setWpPost] = useState<WordPressPost | null>(null)
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (slug) {
      fetchWordPressPost()
      fetchSupabaseArticle()
    }
  }, [slug])

  const fetchSupabaseArticle = async () => {
    try {
      if (typeof slug !== 'string') return;

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) {
        console.error('Error fetching Supabase article:', error)
        return
      }

      if (data) {
        setArticle(data)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const fetchWordPressPost = async () => {
    try {
      // 各slugに対応するWordPressの記事IDをマッピング
      const postIdMap = {
        // 動画カテゴリ
        'movie-detail': '501',
        'thumbnail': '502',
        
        // ブログカテゴリ
        'blog-detail': '503',
        'blog-seo': '504',
        'blog-writing': '505',
        'blog-revision': '506',
        'blog-think': '507',
        'wordpress': '508',
        
        // 物販カテゴリ
        'domestic-resale': '509',
        'ebay': '510',
        'shopify': '511',
        
        // Excelカテゴリ
        'excel-format': '512',
        'excel-date': '513',
        'excel-bar-chart': '514',
        'excel-line-chart': '515',
        
        // デザインカテゴリ
        'design-basics': '516',
        'design-color': '517',
        'design-layout': '518',
        
        // マーケティングカテゴリ
        'sns-marketing': '519',
        'twitter': '520',
        'evolution': '521',
        
        // 不動産カテゴリ
        'real-estate-investment': '522',
        'income-property': '523'
      }

      const postId = typeof slug === 'string' ? postIdMap[slug] : undefined

      if (postId) {
        const response = await axios.get<WordPressPost>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/wordpress/posts/${postId}/`
        )
        setWpPost(response.data)
      }
    } catch (error) {
      console.error('Error fetching WordPress post:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header_sidebusiness />
      <div className="flex pt-16">
        <div className="fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterSidebusiness />}
        </div>
        <div className="flex-1 ml-64 p-8">
          <div className="flex">
            <div className="flex-grow max-w-4xl px-4 sm:px-6 lg:px-8 py-12 bg-white">
              <h1 className="text-3xl font-bold mb-6">
                {wpPost ? wpPost.title.rendered : article ? article.title : category && slug ? `${category}/${slug}` : 'Loading...'}
              </h1>
              {wpPost && (
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: wpPost.content.rendered }}
                />
              )}
              {!wpPost && article && (
                <div className="prose max-w-none">
                  {article.blocks ? (
                    <div>
                      {article.blocks.map((block, index) => (
                        <div key={index} className="mb-4">
                          {block.type === 'text' && (
                            <div>{block.content}</div>
                          )}
                          {block.type === 'code' && (
                            <pre className="bg-gray-100 p-4 rounded">
                              <code>{block.content}</code>
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>{article.content}</div>
                  )}
                </div>
              )}
              {!wpPost && !article && (
                <div className="prose max-w-none">
                  <p>このページのコンテンツは準備中です。</p>
                </div>
              )}
            </div>
            
            {/* サイドバー */}
            {wpPost && wpPost.yoast_head_json?.og_image && (
              <div className="w-80 flex-shrink-0 p-4 bg-gray-50">
                <div className="sticky top-24">
                  <h2 className="text-xl font-bold mb-4">関連情報</h2>
                  <div className="prose max-w-none">
                    <img 
                      src={wpPost.yoast_head_json.og_image[0].url} 
                      alt={wpPost.title.rendered}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="text-sm text-gray-600 mb-4">
                      {wpPost.excerpt?.rendered && (
                        <div dangerouslySetInnerHTML={{ 
                          __html: wpPost.excerpt.rendered.split(' ').slice(0, 30).join(' ') + '...'
                        }} />
                      )}
                    </div>
                    <a 
                      href={`https://perpetualtravelerchoja.com/?p=${wpPost.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      詳細を見る
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
