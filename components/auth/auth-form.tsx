import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../lib/auth';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const { login, signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // 入力時にエラーをクリア
    setSuccess(''); // 入力時に成功メッセージをクリア
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('メールアドレスとパスワードを入力してください');
      return false;
    }

    if (mode === 'signup') {
      if (!formData.firstName || !formData.lastName) {
        setError('姓名を入力してください');
        return false;
      }

      if (formData.password.length < 6) {
        setError('パスワードは6文字以上で入力してください');
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('パスワードが一致しません');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      if (mode === 'signup') {
        console.log('Attempting signup...');
        const { success, message } = await signup({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });

        if (success) {
          console.log('Signup successful');
          setSuccess('確認メールを送信しました。メールをご確認ください。');
          // フォームをリセット
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
          });
        } else {
          console.log('Signup failed');
          setError(message || 'アカウント作成に失敗しました');
        }
      } else {
        console.log('Attempting login...');
        console.log('Form data:', { email: formData.email });
        
        const result = await login(formData.email, formData.password);
        console.log('Login result:', result);

        if (result.success) {
          console.log('Login successful, preparing to redirect...');
          const returnTo = router.query.returnTo as string;
          const redirectPath = returnTo || '/dashboard';
          console.log('Redirecting to:', redirectPath);
          
          try {
            console.log('Starting redirect process...');
            console.log('Current path:', router.asPath);
            console.log('Target path:', redirectPath);
            
            // ログイン成功後、少し待ってからリダイレクト
            console.log('Waiting for timeout...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Timeout complete');
            
            console.log('Executing router.push...');
            const pushResult = await router.push(redirectPath);
            console.log('router.push result:', pushResult);
            
            console.log('Checking new path:', router.asPath);
            return;
          } catch (error: any) {
            console.error('Redirect failed:', error);
            if (error instanceof Error) {
              console.error('Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
              });
            }
          }
        } else {
          console.log('Login failed:', result.message);
          setError(result.message || 'メールアドレスまたはパスワードが正しくありません');
        }
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || 'エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  // URLパラメータからメッセージを取得
  useEffect(() => {
    const message = router.query.message;
    const error = router.query.error;

    if (message === 'email-confirmed') {
      setSuccess('メールアドレスが確認されました。ログインしてください。');
    } else if (message === 'please-login') {
      setSuccess('ログインしてください。');
    }

    if (error === 'confirmation-failed') {
      setError('メールアドレスの確認に失敗しました。');
    } else if (error === 'invalid-callback') {
      setError('無効な認証リクエストです。');
    }
  }, [router.query]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {mode === 'login' ? 'ログイン' : 'アカウント作成'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    姓
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    名
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {mode === 'signup' && (
                <p className="mt-1 text-xs text-gray-500">
                  6文字以上で入力してください
                </p>
              )}
            </div>

            {mode === 'signup' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  パスワード（確認）
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
                {success}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <span>処理中...</span>
                ) : (
                  <span>{mode === 'login' ? 'ログイン' : '次へ'}</span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  または
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              {mode === 'login' ? (
                <p>
                  アカウントをお持ちでない方は
                  <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    新規登録
                  </Link>
                </p>
              ) : (
                <p>
                  すでにアカウントをお持ちの方は
                  <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                    ログイン
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
