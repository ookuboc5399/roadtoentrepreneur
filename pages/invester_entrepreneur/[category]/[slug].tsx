import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../lib/supabase'
import { Header } from '../../../components/header/header'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { Chapterinvester } from '../../../components/chapter/invester/chapter_invester'
import axios from 'axios'

interface Block {
  type: 'text' | 'code' | 'image' | 'link-card' | 'youtube'
  content: string
  metadata?: {
    language?: string
    alt?: string
    title?: string
    url?: string
    description?: string
  }
}

interface Article {
  title: string
  content?: string
  blocks?: Block[]
  category: string
  sub_category: string
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

export default function Article() {
  const router = useRouter()
  const { category, slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [wpPost, setWpPost] = useState<WordPressPost | null>(null)

  useEffect(() => {
    if (category && slug) {
      fetchArticle()
      fetchWordPressPost()
    }
  }, [category, slug])

  useEffect(() => {
    if (article?.blocks?.some(block => block.type === 'code')) {
      Prism.highlightAll()
    }
  }, [article])

  async function fetchArticle() {
    try {
      setError(null);
      setLoading(true);
      
      // パラメータのバリデーション
      if (!category || typeof category !== 'string') {
        throw new Error('Invalid category parameter');
      }
      if (!slug || typeof slug !== 'string') {
        throw new Error('Invalid slug parameter');
      }

      console.log('Starting article fetch:', { category, slug });

      // Supabaseクエリの実行（複数結果を許可）
      const { data, error: queryError } = await supabase
        .from('articles')
        .select(`
          id,
          title,
          content,
          blocks,
          category,
          sub_category,
          created_at,
          updated_at,
          image_url,
          slug,
          section
        `)
        .eq('category', category)
        .eq('slug', slug);

      // エラーハンドリング
      if (queryError) {
        console.error('Database query error:', {
          code: queryError.code,
          message: queryError.message,
          details: queryError.details,
          hint: queryError.hint
        });
        throw new Error(`Database error: ${queryError.message}`);
      }

      // 結果の確認
      if (!data || data.length === 0) {
        console.error('No article found:', { category, slug });
        throw new Error('Article not found');
      }

      // 複数の結果がある場合は最初のものを使用
      const articleData = Array.isArray(data) ? data[0] : data;

      // データの存在確認と構造の検証
      if (!articleData) {
        console.error('No article data available:', { category, slug });
        throw new Error('Article data not available');
      }

      if (!articleData.title || !articleData.category || !articleData.sub_category) {
        console.error('Invalid article data:', articleData);
        throw new Error('Invalid article data structure');
      }

      // blocksの検証と正規化
      let normalizedBlocks: Block[] = [];
      if (articleData.blocks && Array.isArray(articleData.blocks)) {
        normalizedBlocks = articleData.blocks
          .map(block => {
            if (
              !block ||
              typeof block !== 'object' || 
              !block.type || 
              !block.content || 
              !['text', 'code', 'image', 'link-card', 'youtube'].includes(block.type)
            ) {
              console.warn('Invalid block structure:', block);
              return null;
            }

            const validBlock: Block = {
              type: block.type as Block['type'],
              content: String(block.content),
              ...(block.metadata && { metadata: block.metadata })
            };

            return validBlock;
          })
          .filter((block): block is Block => block !== null);
      } else if (articleData.content) {
        // 古い形式のcontentフィールドをblocksに変換
        normalizedBlocks = [{
          type: 'text',
          content: articleData.content,
          metadata: {}
        }];
      }

      if (normalizedBlocks.length === 0) {
        console.warn('No valid content blocks found');
        normalizedBlocks = [{
          type: 'text',
          content: '記事の内容が見つかりませんでした。',
          metadata: {}
        }];
      }

      const normalizedData = {
        ...articleData,
        blocks: normalizedBlocks
      };

      console.log('Article data processed:', {
        id: normalizedData.id,
        title: normalizedData.title,
        category: normalizedData.category,
        blockCount: normalizedData.blocks.length,
        blocks: normalizedData.blocks.map(b => ({
          type: b.type,
          contentLength: b.content.length,
          hasMetadata: Object.keys(b.metadata || {}).length > 0
        }))
      });

      setArticle(normalizedData);
    } catch (error: any) {
      console.error('Error fetching article:', {
        message: error.message,
        category,
        slug
      });
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const fetchWordPressPost = async () => {
    try {
      let postId = ''
      switch (slug) {
        case 'fx-start':
          postId = '494'
          break
      }

      if (postId) {
        const response = await axios.get<WordPressPost>(
          `/api/wordpress-proxy?postId=${postId}`
        )
        setWpPost(response.data)
      }
    } catch (error) {
      console.error('Error fetching WordPress post:', error)
    }
  }

  const renderBlock = (block: Block) => {
    switch (block.type) {
      case 'code':
        return (
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code className={`language-${block.metadata?.language || 'javascript'} text-white`}>
              {block.content}
            </code>
          </pre>
        )
      case 'image':
        return (
          <img
            src={block.content}
            alt={block.metadata?.alt || ''}
            className="max-w-full h-auto rounded-lg"
          />
        )
      case 'youtube':
        const videoId = block.content.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
        return (
          <div className="youtube-video-container">
            {videoId ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={block.metadata?.title || 'YouTube video'}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <p className="text-gray-600">無効なYouTube URLです</p>
              </div>
            )}
            {block.metadata?.title && (
              <h3 className="text-lg font-semibold mt-2 mb-1">{block.metadata.title}</h3>
            )}
            {block.metadata?.description && (
              <p className="text-gray-600 text-sm">{block.metadata.description}</p>
            )}
          </div>
        )
      case 'link-card':
        return (
          <a 
            href={block.metadata?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow no-underline"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{block.metadata?.title}</h3>
            <p className="text-gray-600 text-sm">{block.metadata?.description}</p>
          </a>
        )
      case 'text':
      default:
        return (
          <div className="prose prose-blue max-w-none">
            <ReactMarkdown>{block.content}</ReactMarkdown>
          </div>
        )
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-xl font-bold mb-4 text-red-600">エラーが発生しました</h1>
            <p className="mb-4">{error || '記事が見つかりません'}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold mb-2">デバッグ情報:</h2>
              <pre className="whitespace-pre-wrap">
                {JSON.stringify({ category, slug, error }, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header/>
      <div className="flex">
        <div className="w-64 flex-shrink-0 fixed h-[calc(100vh-4rem)]">
          <Chapterinvester />
        </div>
        
        <div className="flex-1 ml-64">
          <div className="flex">
            <div className="flex-grow max-w-4xl px-4 sm:px-6 lg:px-8 py-12 bg-white">
              <h1 className="text-3xl font-bold mb-8">{article.title}</h1>
              <div className="space-y-8">
                {article.blocks?.map((block, index) => (
                  <div key={index} className="mb-8">
                    {renderBlock(block)}
                  </div>
                ))}
              </div>
            </div>

            {/* WordPressの記事をサムネイルと要約として表示 */}
            {wpPost && (
              <div className="w-80 flex-shrink-0 p-4 bg-gray-50">
                <h2 className="text-xl font-bold mb-4">関連記事</h2>
                <div className="prose max-w-none">
                  {wpPost.yoast_head_json?.og_image && (
                    <img 
                      src={wpPost.yoast_head_json.og_image[0].url} 
                      alt={wpPost.title.rendered}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-2">{wpPost.title.rendered}</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    {wpPost.excerpt?.rendered ? (
                      <div dangerouslySetInnerHTML={{ 
                        __html: wpPost.excerpt.rendered.split(' ').slice(0, 30).join(' ') + '...'
                      }} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ 
                        __html: wpPost.content.rendered.split(' ').slice(0, 30).join(' ') + '...'
                      }} />
                    )}
                  </div>
                  <a 
                    href={`https://perpetualtravelerchoja.com/?p=${wpPost.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    記事を読む
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
