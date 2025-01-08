'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../utils/supabaseClient'
import { Header_invester } from '../../../components/header/header'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { Chapterinvester } from '../../../components/chapter/invester/chapter_invester'
import axios from 'axios'

interface Block {
  type: 'text' | 'code' | 'image'
  content: string
  metadata?: {
    language?: string
    alt?: string
  }
}

interface Article {
  title: string
  content: string
  blocks?: Block[]
  category: string
  sub_category: string
}

interface ExternalBlog {
  title: string;
  content: string;
  imageUrl?: string;
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
  const [externalBlog, setExternalBlog] = useState<ExternalBlog | null>(null)
  const [wpPost, setWpPost] = useState<WordPressPost | null>(null)

  useEffect(() => {
    if (category && slug) {
      fetchArticle()
    }
  }, [category, slug])

  useEffect(() => {
    if (article) {
      Prism.highlightAll()
    }
  }, [article])

  async function fetchArticle() {
    try {
      console.log('Fetching article:', { category, slug })
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .eq('slug', slug)
        .single()

      if (error) throw error
      console.log('Article data:', data)
      setArticle(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/wordpress/posts/${postId}/`
        )
        setWpPost(response.data)
      }
    } catch (error) {
      console.error('Error fetching WordPress post:', error)
    }
  }

  useEffect(() => {
    if (slug) {
      fetchWordPressPost()
    }
  }, [slug])

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
            className="max-w-full h-auto"
          />
        )
      case 'text':
      default:
        return <ReactMarkdown>{block.content}</ReactMarkdown>
    }
  }

  const renderChapters = () => {
    if (!article?.content) return null;

    const chapters = article.content.split('\n').filter(line => line.trim().startsWith('#'));
    if (chapters.length === 0) return null;

    return (
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold mb-2">目次</h2>
        <ul className="space-y-1">
          {chapters.map((chapter, index) => (
            <li key={index}>
              <a href={`#chapter-${index}`} className="text-blue-600 hover:underline">
                {chapter.replace(/^#+\s/, '')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderContent = () => {
    if (!article?.content) return null;

    let chapterIndex = 0;
    const lines = article.content.split('\n');
    
    return lines.map((line, index) => {
      if (line.trim().startsWith('#')) {
        const id = `chapter-${chapterIndex++}`;
        return (
          <h2 key={index} id={id} className="text-2xl font-bold mt-8 mb-4">
            {line.replace(/^#+\s/, '')}
          </h2>
        );
      }
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  useEffect(() => {
    if (article?.blocks) {
      Prism.highlightAll()
    }
  }, [article, wpPost])

  if (loading) return <div>Loading...</div>
  if (!article) return <div>Article not found</div>

  return (
    <div className="min-h-screen">
      <Header_invester/>
      <div className="pt-16">
        <div className="flex">
          <div className="w-64 flex-shrink-0 fixed h-[calc(100vh-4rem)]">
            <Chapterinvester />
          </div>
          
          <div className="flex-1 ml-64">
            {loading ? (
              <div className="p-4">Loading...</div>
            ) : !article ? (
              <div className="p-4">Article not found</div>
            ) : (
              <div className="flex">
                <div className="flex-grow max-w-4xl px-4 sm:px-6 lg:px-8 py-12 bg-white">
                  <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
                  <div className="prose max-w-none">
                    {article.blocks?.map((block, index) => (
                      <div key={index} className="mb-4">
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
