import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '../../lib/stripe';
import { PaymentForm } from '../../components/auth/payment-form';
import { useRouter } from 'next/router';
import type { StripeElementsOptions } from '@stripe/stripe-js';

export default function Payment() {
  // TODO: 将来的にStripe決済を実装する予定
  // const [clientSecret, setClientSecret] = useState<string>('');
  // const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // TODO: 将来的にStripe決済を実装する予定
  /*
  useEffect(() => {
    let mounted = true;

    const initializePayment = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { plan = 'basic' } = router.query;

        // PaymentIntentを作成
        const response = await fetch('/api/stripe/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan }),
        });

        if (!response.ok) {
          throw new Error('支払い情報の作成に失敗しました');
        }

        const data = await response.json();

        if (mounted) {
          if (data.error) {
            setError(data.error);
          } else {
            setClientSecret(data.clientSecret);
          }
        }
      } catch (err) {
        console.error('Error creating payment intent:', err);
        if (mounted) {
          setError('支払い情報の作成中にエラーが発生しました。しばらく待ってから再度お試しください。');
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    if (router.isReady) {
      initializePayment();
    }

    return () => {
      mounted = false;
    };
  }, [router.isReady, router.query]);
  */

  // TODO: 将来的にStripe決済を実装する予定
  // 現在は簡単な「準備中」メッセージを表示
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              支払い機能準備中
            </h2>
            <p className="text-gray-600 mb-6">
              現在、支払い機能を準備中です。<br />
              しばらくお待ちください。
            </p>
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ホームに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /* TODO: 将来的にStripe決済を実装する予定
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                エラーが発生しました
              </h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={() => router.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                再試行
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !clientSecret) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                読み込み中...
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0070f3',
      },
    },
  };

  return (
    <Elements stripe={getStripe()} options={options}>
      <PaymentForm initialPlan={router.query.plan as string} />
    </Elements>
  );
  */
}
