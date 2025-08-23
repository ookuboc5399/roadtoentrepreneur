import { supabase, createUserDebug } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, email, password } = req.body

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({
        error: '全ての必須項目を入力してください'
      })
    }

    try {
      // Supabase Authでユーザーを作成
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name,
            last_name,
          }
        }
      })

      if (authError) {
        console.error('Supabase auth signup error:', authError)
        
        // メールアドレスが既に登録されている場合の処理
        if (authError.message.includes('already registered')) {
          return res.status(409).json({
            error: 'このメールアドレスは既に登録されています'
          })
        }
        
        return res.status(400).json({
          error: 'アカウント登録に失敗しました: ' + authError.message
        })
      }

      if (authData.user) {
        // usersテーブルにプロフィール情報を作成
        const userProfile = await createUserDebug({
          id: authData.user.id,
          email: authData.user.email,
          first_name,
          last_name,
          subscription: {
            plan: 'free',
            status: 'inactive'
          }
        })

        if (!userProfile) {
          console.warn('Failed to create user profile, but auth user was created')
        }

        return res.status(200).json({
          success: 'アカウント登録に成功しました。メールアドレスを確認してください。',
          user: {
            id: authData.user.id,
            email: authData.user.email,
            email_confirmed: authData.user.email_confirmed_at !== null
          }
        })
      } else {
        return res.status(400).json({
          error: 'アカウント登録に失敗しました'
        })
      }
    } catch (err) {
      console.error('Registration error:', err)
      return res.status(500).json({
        error: 'サーバーエラーが発生しました'
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
