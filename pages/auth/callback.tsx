import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // URLからパラメータを取得
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (session) {
          // セッションが存在する場合は、ユーザーは認証済み
          router.push('/mypage/goals/goal-setting');
        } else {
          // エラーメッセージを表示してログインページにリダイレクト
          router.push('/auth/login?message=please-login');
        }
      } catch (error) {
        console.error('Email confirmation error:', error);
        router.push('/auth/login?error=confirmation-failed');
      }
    };

    if (router.isReady) {
      handleEmailConfirmation();
    }
  }, [router.isReady]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              認証処理中...
            </h2>
            <p className="text-gray-600">
              しばらくお待ちください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
