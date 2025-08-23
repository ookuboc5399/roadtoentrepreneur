import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/auth';
import { getStripe } from '../../lib/stripe';

export default function PaymentComplete() {
  const router = useRouter();
  const { updateSubscription } = useAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    const { payment_intent, payment_intent_client_secret, plan } = router.query;

    const checkPaymentStatus = async () => {
      try {
        if (!payment_intent || !payment_intent_client_secret) {
          throw new Error('支払い情報が見つかりません');
        }

        const stripe = await getStripe();
        if (!stripe) {
          throw new Error('Stripeの初期化に失敗しました');
        }

        setDebugInfo(prev => [...prev, 'Retrieving payment intent...']);
        const { paymentIntent, error } = await stripe.retrievePaymentIntent(payment_intent_client_secret as string);

        if (error) {
          setDebugInfo(prev => [...prev, `Payment intent error: ${error.message}`]);
          throw error;
        }

        if (!paymentIntent) {
          throw new Error('支払い情報の取得に失敗しました');
        }

        setDebugInfo(prev => [...prev, `Payment status: ${paymentIntent.status}`]);

        if (paymentIntent.status === 'succeeded') {
          if (typeof plan === 'string') {
            try {
              // サブスクリプション更新前に少し待機（Stripeの処理完了を待つ）
              await new Promise(resolve => setTimeout(resolve, 3000));
              
              setDebugInfo(prev => [...prev, 'Updating subscription...']);
              const success = await updateSubscription(plan);
              if (success) {
                setDebugInfo(prev => [...prev, 'Subscription updated successfully']);
                router.push('/mypage/goals/goal-setting');
              } else {
                throw new Error('サブスクリプションの更新に失敗しました');
              }
            } catch (error) {
              console.error('Error updating subscription:', error);
              setDebugInfo(prev => [...prev, `Subscription error: ${error}`]);
              throw new Error('サブスクリプションの更新中にエラーが発生しました');
            }
          } else {
            throw new Error('プランが指定されていません');
          }
        } else {
          throw new Error('支払いが完了していません');
        }
      } catch (error: any) {
        console.error('Payment completion error:', error);
        setError(error.message || '支払い処理中にエラーが発生しました');
        
        // 3秒後に支払いページに戻る
        setTimeout(() => {
          router.push('/auth/payment?error=payment-failed');
        }, 3000);
      } finally {
        setIsProcessing(false);
      }
    };

    if (router.isReady) {
      checkPaymentStatus();
    }
  }, [router.isReady, router.query, router, updateSubscription]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {error ? (
              <>
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                  エラーが発生しました
                </h2>
                <p className="text-gray-600 mb-4">{error}</p>
                <p className="text-sm text-gray-500">
                  支払いページに戻ります...
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isProcessing ? '支払い処理中...' : '支払い処理が完了しました'}
                </h2>
                <p className="text-gray-600">
                  {isProcessing 
                    ? 'しばらくお待ちください。自動的にマイページへ移動します。'
                    : 'マイページへ移動しています...'}
                </p>
              </>
            )}

            {process.env.NODE_ENV === 'development' && debugInfo.length > 0 && (
              <div className="mt-8 p-4 bg-gray-100 rounded text-left">
                <h4 className="text-sm font-medium text-gray-900 mb-2">デバッグ情報:</h4>
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                  {debugInfo.join('\n')}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
