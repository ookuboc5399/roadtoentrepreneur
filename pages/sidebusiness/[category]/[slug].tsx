import { Header } from '../../../components/header/header'
import { ChapterSidebusiness } from '../../../components/chapter/sidebusiness/chapter_sidebusiness'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { supabase } from '../../../utils/supabaseClient'
import ReactMarkdown from 'react-markdown'
import { sidebusinessFallbackContent } from '../../../data/sidebusinessContent'

interface Block {
  type: 'text' | 'code' | 'image' | 'link-card' | 'youtube';
  content: string;
  metadata?: {
    language?: string;
    alt?: string;
    title?: string;
    url?: string;
    description?: string;
  };
}

interface Article {
  title: string;
  content?: string;
  blocks?: Block[];
  section?: string;
}

export default function SideBusinessContent() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { category, slug } = router.query
  const [article, setArticle] = useState<Article | null>(null)

  // URL と実際のコンテンツスラッグの対応表（エイリアス）
  const rawCategory = typeof category === 'string' ? category : undefined
  const rawSlug = typeof slug === 'string' ? slug : undefined

  const aliasMap: Record<string, { category: string; slug: string }> = {
    // /sidebusiness/realestate/realestate-basics -> /sidebusiness/real_estate/real-estate-investment
    'realestate/realestate-basics': {
      category: 'real_estate',
      slug: 'real-estate-investment',
    },
  }

  const aliasKey = rawCategory && rawSlug ? `${rawCategory}/${rawSlug}` : undefined
  const alias = aliasKey ? aliasMap[aliasKey] : undefined

  const effectiveCategory = alias?.category ?? rawCategory
  const effectiveSlug = alias?.slug ?? rawSlug

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (effectiveSlug) {
      fetchSupabaseArticle()
    }
  }, [effectiveSlug]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchSupabaseArticle = async () => {
    try {
      if (!effectiveSlug) return;

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', effectiveSlug)
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

  const getFallbackArticle = (): Article | null => {
    if (!effectiveSlug) return null;
    const fallback = sidebusinessFallbackContent[effectiveSlug];
    if (!fallback) return null;
    return {
      title: fallback.title,
      blocks: fallback.blocks
    };
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
          <div>
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
          <div className="prose prose-green max-w-none">
            <ReactMarkdown>{block.content}</ReactMarkdown>
          </div>
        )
    }
  }

  const displayArticle = article || getFallbackArticle();

  const slugLabel = typeof slug === 'string'
    ? slug.replace(/-/g, ' ')
    : '';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col lg:flex-row pt-0 lg:pt-0">
        <div className="lg:flex-shrink-0">
          {mounted && <ChapterSidebusiness />}
        </div>
        <div className="flex-1 p-4 lg:p-8">
          <div className="flex">
            <div className="flex-grow max-w-4xl px-4 sm:px-6 lg:px-8 py-12 bg-white">
              <h1 className="text-3xl font-bold mb-6">
                {displayArticle ? displayArticle.title : category && slug ? `${category}/${slug}` : 'Loading...'}
              </h1>
              {displayArticle && (
                <div className="space-y-6">
                  {displayArticle.blocks ? (
                    displayArticle.blocks.map((block, index) => (
                      <div key={index}>
                        {renderBlock(block as Block)}
                      </div>
                    ))
                  ) : displayArticle.content ? (
                    <div className="prose max-w-none">
                      <ReactMarkdown>{displayArticle.content}</ReactMarkdown>
                    </div>
                  ) : null}
                </div>
              )}
              {!displayArticle && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-4">
                    {slugLabel ? `${slugLabel} のコンテンツは準備中です` : 'コンテンツ準備中'}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    現在このページのコンテンツを準備しています。しばらくお待ちください。
                  </p>
                  <Link
                    href="/sidebusiness"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors no-underline"
                  >
                    副業トップへ戻る
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
