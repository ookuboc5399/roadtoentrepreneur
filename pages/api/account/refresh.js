import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { refresh_token } = req.body

    if (!refresh_token) {
      return res.status(400).json({
        error: 'リフレッシュトークンが必要です',
      })
    }

    try {
      // Supabaseでリフレッシュトークンを使用してセッションを更新
      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: refresh_token
      })

      if (error || !data.session) {
        return res.status(401).json({
          error: 'リフレッシュトークンが無効です',
        })
      }

      return res.status(200).json({
        success: 'トークンの更新に成功しました',
        session: {
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
          expires_at: data.session.expires_at,
        },
        user: {
          id: data.user.id,
          email: data.user.email,
        }
      })
    } catch (err) {
      console.error('Refresh token error:', err)
      return res.status(500).json({
        error: 'トークンの更新に失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
