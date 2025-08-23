import { supabase, updateSubscription } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { plan, user_id } = req.body
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    if (!plan || !user_id) {
      return res.status(400).json({
        error: 'プランとユーザーIDが必要です',
      })
    }

    try {
      // トークンを検証
      const { data: { user }, error: authError } = await supabase.auth.getUser(token)

      if (authError || !user || user.id !== user_id) {
        return res.status(401).json({
          error: '認証に失敗しました',
        })
      }

      // サブスクリプションを更新
      const updatedUser = await updateSubscription(user_id, plan)

      if (!updatedUser) {
        return res.status(500).json({
          error: 'サブスクリプションの更新に失敗しました',
        })
      }

      return res.status(200).json({
        success: 'サブスクリプションが更新されました',
        user: updatedUser
      })
    } catch (err) {
      console.error('Subscription update error:', err)
      return res.status(500).json({
        error: 'サブスクリプションの更新に失敗しました',
      })
    }
  } else if (req.method === 'GET') {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    try {
      // トークンを検証
      const { data: { user }, error: authError } = await supabase.auth.getUser(token)

      if (authError || !user) {
        return res.status(401).json({
          error: '認証に失敗しました',
        })
      }

      // ユーザーのサブスクリプション情報を取得
      const { data: userProfile, error } = await supabase
        .from('users')
        .select('subscription')
        .eq('id', user.id)
        .single()

      if (error) {
        console.error('Get subscription error:', error)
        return res.status(500).json({
          error: 'サブスクリプション情報の取得に失敗しました',
        })
      }

      return res.status(200).json({
        subscription: userProfile?.subscription || { plan: 'free', status: 'inactive' }
      })
    } catch (err) {
      console.error('Get subscription error:', err)
      return res.status(500).json({
        error: 'サブスクリプション情報の取得に失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
