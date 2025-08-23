// コンテンツ投稿API（Supabaseベース）
// Django APIから取得していた投稿データをSupabaseベースのNext.jsで提供

import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Supabaseのarticlesテーブルから投稿一覧を取得
      const { data: articles, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) {
        console.error('Supabase query error:', error)
        return res.status(500).json({ 
          error: '投稿データの取得に失敗しました',
          details: error.message 
        })
      }

      // 投稿データを適切な形式に変換
      const formattedPosts = articles.map(article => ({
        id: article.id,
        title: article.title,
        content: article.content || '',
        blocks: article.blocks || null,
        category: article.category,
        sub_category: article.sub_category,
        slug: article.slug,
        section: article.section,
        image_url: article.image_url,
        created_at: article.created_at,
        updated_at: article.updated_at,
        // ダミーの追加フィールド（必要に応じて）
        author: 'Road to Entrepreneur',
        excerpt: article.content ? article.content.substring(0, 200) + '...' : '',
        tags: article.category ? [article.category, article.sub_category].filter(Boolean) : [],
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 100)
      }))

      res.status(200).json(formattedPosts)
    } catch (error) {
      console.error('Posts API error:', error)
      res.status(500).json({ 
        error: '投稿データの取得に失敗しました',
        details: error.message 
      })
    }
  } else if (req.method === 'POST') {
    // 投稿作成（認証が必要）
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ error: 'アクセストークンが必要です' })
    }

    try {
      // トークンを検証
      const { data: { user }, error: authError } = await supabase.auth.getUser(token)

      if (authError || !user) {
        return res.status(401).json({ error: '認証に失敗しました' })
      }

      const { title, content, blocks, category, sub_category, section, image_url } = req.body

      if (!title) {
        return res.status(400).json({ error: 'タイトルが必要です' })
      }

      // スラッグを生成
      const slug = generateSlug(title)

      // 新しい投稿を作成
      const { data: newPost, error: insertError } = await supabase
        .from('articles')
        .insert({
          title,
          content: content || '',
          blocks: blocks || null,
          category: category || 'general',
          sub_category: sub_category || '',
          slug,
          section: section || 'blog',
          image_url: image_url || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (insertError) {
        console.error('Insert error:', insertError)
        return res.status(500).json({ 
          error: '投稿の作成に失敗しました',
          details: insertError.message 
        })
      }

      res.status(201).json({
        success: '投稿が作成されました',
        post: newPost
      })
    } catch (error) {
      console.error('Create post error:', error)
      res.status(500).json({ 
        error: '投稿の作成に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}

// スラッグ生成のヘルパー関数
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 特殊文字を削除
    .replace(/\s+/g, '-') // スペースをハイフンに
    .replace(/-+/g, '-') // 連続するハイフンを単一に
    .trim('-') // 先頭・末尾のハイフンを削除
}
