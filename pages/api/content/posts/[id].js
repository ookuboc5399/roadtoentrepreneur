// 投稿詳細API（Supabaseベース）
// Django APIから取得していた投稿詳細データをSupabaseベースのNext.jsで提供

import { supabase } from '../../../../lib/supabase'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    if (!id) {
      return res.status(400).json({ error: 'IDが必要です' })
    }

    try {
      // Supabaseのarticlesテーブルから投稿詳細を取得
      const { data: article, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Supabase query error:', error)
        return res.status(404).json({ 
          error: '投稿が見つかりません',
          details: error.message 
        })
      }

      if (!article) {
        return res.status(404).json({ error: '投稿が見つかりません' })
      }

      // 投稿詳細データを適切な形式に変換
      const formattedPost = {
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
        // 追加情報
        author: 'Road to Entrepreneur',
        tags: article.category ? [article.category, article.sub_category].filter(Boolean) : [],
        views: Math.floor(Math.random() * 1000) + 100,
        likes: Math.floor(Math.random() * 100) + 10,
        // 関連記事（同じカテゴリから）
        related_posts: []
      }

      // 関連記事を取得
      if (article.category) {
        const { data: relatedArticles } = await supabase
          .from('articles')
          .select('id, title, slug, category, image_url, created_at')
          .eq('category', article.category)
          .neq('id', id)
          .limit(3)

        if (relatedArticles) {
          formattedPost.related_posts = relatedArticles.map(related => ({
            id: related.id,
            title: related.title,
            slug: related.slug,
            category: related.category,
            image_url: related.image_url,
            created_at: related.created_at
          }))
        }
      }

      res.status(200).json(formattedPost)
    } catch (error) {
      console.error('Post detail API error:', error)
      res.status(500).json({ 
        error: '投稿詳細の取得に失敗しました',
        details: error.message 
      })
    }
  } else if (req.method === 'PUT') {
    // 投稿更新（認証が必要）
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

      // 投稿を更新
      const { data: updatedPost, error: updateError } = await supabase
        .from('articles')
        .update({
          title,
          content,
          blocks,
          category,
          sub_category,
          section,
          image_url,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (updateError) {
        console.error('Update error:', updateError)
        return res.status(500).json({ 
          error: '投稿の更新に失敗しました',
          details: updateError.message 
        })
      }

      res.status(200).json({
        success: '投稿が更新されました',
        post: updatedPost
      })
    } catch (error) {
      console.error('Update post error:', error)
      res.status(500).json({ 
        error: '投稿の更新に失敗しました',
        details: error.message 
      })
    }
  } else if (req.method === 'DELETE') {
    // 投稿削除（認証が必要）
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

      // 投稿を削除
      const { error: deleteError } = await supabase
        .from('articles')
        .delete()
        .eq('id', id)

      if (deleteError) {
        console.error('Delete error:', deleteError)
        return res.status(500).json({ 
          error: '投稿の削除に失敗しました',
          details: deleteError.message 
        })
      }

      res.status(200).json({
        success: '投稿が削除されました'
      })
    } catch (error) {
      console.error('Delete post error:', error)
      res.status(500).json({ 
        error: '投稿の削除に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
