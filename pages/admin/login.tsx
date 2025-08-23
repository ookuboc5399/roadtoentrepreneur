import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // URLパラメータからエラーメッセージを取得
    const errorParam = router.query.error
    if (errorParam === 'unauthorized') {
      setError('管理者権限がありません。管理者アカウントでログインしてください。')
    }
    
    // 環境変数の確認（デバッグ用）
    console.log('Environment check:', {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      adminEmails: process.env.NEXT_PUBLIC_ADMIN_EMAILS
    })
  }, [router.query])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    
    // 入力バリデーション
    if (!email.trim() || !password.trim()) {
      setError('メールアドレスとパスワードを入力してください')
      return
    }

    try {
      console.log('Admin login attempt for:', email)
      setLoading(true)
      setError(null)
      
      // タイムアウト付きのログイン処理
      const loginPromise = supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      })
      
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('ログイン処理がタイムアウトしました')), 10000)
      )
      
      const { data, error } = await Promise.race([loginPromise, timeoutPromise]) as any
      
      console.log('Auth result:', { data: !!data, error: error?.message })
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('メールアドレスまたはパスワードが正しくありません')
        }
        if (error.message.includes('Email not confirmed')) {
          throw new Error('メールアドレスの確認が必要です')
        }
        throw error
      }

      if (!data?.user) {
        throw new Error('ユーザー情報の取得に失敗しました')
      }

      console.log('User authenticated:', data.user.email)
      
      // ユーザー情報を取得して管理者権限をチェック
      const userDataPromise = supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single()
      
      const userTimeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('ユーザー情報の取得がタイムアウトしました')), 5000)
      )
      
      const { data: userData, error: userError } = await Promise.race([userDataPromise, userTimeoutPromise]) as any

      console.log('User data result:', { userData: !!userData, userError: userError?.message })

      if (userError) {
        console.error('User data error:', userError)
        if (userError.code === 'PGRST116') {
          throw new Error('ユーザー情報が見つかりません。アカウントが正しく作成されているか確認してください。')
        }
        throw new Error('ユーザー情報の取得に失敗しました')
      }

      if (!userData) {
        throw new Error('ユーザー情報が見つかりません')
      }

      // 管理者権限をチェック
      const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || []
      console.log('Admin emails:', adminEmails)
      console.log('User role:', userData.role)
      
      const isUserAdmin = adminEmails.includes(userData.email) || userData.role === 'admin'
      console.log('Is user admin:', isUserAdmin)

      if (!isUserAdmin) {
        await supabase.auth.signOut()
        throw new Error('管理者権限がありません。管理者アカウントでログインしてください。')
      }

      console.log('Admin login successful, redirecting to /admin')
      
      // リダイレクト前に少し待機
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push('/admin')
      
    } catch (error: any) {
      console.error('Admin login error:', error)
      setError(error.message || 'ログイン処理中にエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 flex items-center justify-center">
      <div className="bg-blue-800/30 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">管理者ログイン</h1>
        {error && (
          <div className="bg-red-500/20 text-red-200 p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-blue-200 mb-1">メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white border border-blue-300 text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block text-blue-200 mb-1">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-white border border-blue-300 text-gray-900"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
      </div>
    </div>
  )
} 