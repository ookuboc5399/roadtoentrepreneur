import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        error: 'メールアドレスとパスワードが必要です'
      })
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Supabase auth error:', error)
        return res.status(401).json({
          error: 'ログインに失敗しました。メールアドレスまたはパスワードが正しくありません。'
        })
      }

      if (data.user && data.session) {
        return res.status(200).json({
          success: 'ログインに成功しました',
          user: {
            id: data.user.id,
            email: data.user.email,
          },
          session: {
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            expires_at: data.session.expires_at,
          }
        })
      } else {
        return res.status(401).json({
          error: 'ログインに失敗しました'
        })
      }
    } catch (err) {
      console.error('Login error:', err)
      return res.status(500).json({
        error: 'サーバーエラーが発生しました'
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
