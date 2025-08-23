import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Supabaseでログアウト
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error('Logout error:', error)
        return res.status(500).json({
          error: 'ログアウトに失敗しました',
        })
      }

      return res.status(200).json({
        success: 'ログアウトに成功しました',
      })
    } catch (err) {
      console.error('Logout error:', err)
      return res.status(500).json({
        error: 'ログアウトに失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
