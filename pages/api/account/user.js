import { supabase, getUser } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    try {
      // Supabaseでトークンを検証し、ユーザー情報を取得
      const { data: { user }, error } = await supabase.auth.getUser(token)

      if (error || !user) {
        return res.status(401).json({
          error: '認証に失敗しました',
        })
      }

      // usersテーブルからプロフィール情報を取得
      const userProfile = await getUser(user.id)

      if (!userProfile) {
        // プロフィールが存在しない場合、基本情報のみ返す
        return res.status(200).json({
          user: {
            id: user.id,
            email: user.email,
            first_name: user.user_metadata?.first_name || '',
            last_name: user.user_metadata?.last_name || '',
            subscription: { plan: 'free', status: 'inactive' }
          }
        })
      }

      return res.status(200).json({
        user: userProfile
      })
    } catch (err) {
      console.error('Get user error:', err)
      return res.status(500).json({
        error: 'ユーザー情報取得に失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    })
  }
}
