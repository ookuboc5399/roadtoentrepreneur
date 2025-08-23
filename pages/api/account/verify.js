import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body

    if (!token) {
      return res.status(400).json({
        error: 'トークンが必要です',
      })
    }

    try {
      // Supabaseでトークンを検証
      const { data: { user }, error } = await supabase.auth.getUser(token)

      if (error || !user) {
        return res.status(401).json({
          error: '認証に失敗しました',
        })
      }

      return res.status(200).json({
        success: '認証に成功しました',
        user: {
          id: user.id,
          email: user.email,
          email_confirmed: user.email_confirmed_at !== null
        }
      })
    } catch (err) {
      console.error('Verify token error:', err)
      return res.status(500).json({
        error: '認証に失敗しました',
      })
    }
  } else if (req.method === 'GET') {
    // GET メソッドの場合、Authorizationヘッダーからトークンを取得
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    try {
      const { data: { user }, error } = await supabase.auth.getUser(token)

      if (error || !user) {
        return res.status(401).json({
          error: '認証に失敗しました',
        })
      }

      return res.status(200).json({
        success: '認証に成功しました',
        user: {
          id: user.id,
          email: user.email,
          email_confirmed: user.email_confirmed_at !== null
        }
      })
    } catch (err) {
      console.error('Verify token error:', err)
      return res.status(500).json({
        error: '認証に失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
