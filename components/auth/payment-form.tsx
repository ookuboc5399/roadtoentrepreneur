import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

interface PaymentFormProps {
  initialPlan?: string;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'ベーシック',
    price: 980,
    features: [
      '基本的な投資情報へのアクセス',
      '月次レポートの閲覧',
      'コミュニティへの参加',
    ],
  },
  {
    id: 'premium',
    name: 'プレミアム',
    price: 1980,
    features: [
      'すべての投資情報へのアクセス',
      'リアルタイムの市場分析',
      'プレミアムコンテンツの閲覧',
      '専門家によるアドバイス',
      'プレミアムコミュニティへの参加',
    ],
    recommended: true,
  },
];

function CheckoutForm({ selectedPlan, onSuccess }: { selectedPlan: string; onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    if (!stripe || !elements) return;

    // デバッグ情報を収集
    const collectDebugInfo = async () => {
      try {
        setDebugInfo(prev => [
          ...prev,
          `Stripe initialized: ${!!stripe}`,
          `Elements initialized: ${!!elements}`,
          `Current environment: ${process.env.NODE_ENV}`,
          `Current URL: ${window.location.href}`,
        ]);

        // PaymentElementの状態を確認
        const paymentElement = elements.getElement('payment');
        setDebugInfo(prev => [
          ...prev,
          `PaymentElement available: ${!!paymentElement}`,
        ]);
      } catch (err) {
        setDebugInfo(prev => [...prev, `Error collecting debug info: ${err}`]);
      }
    };

    collectDebugInfo();
  }, [stripe, elements]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setDebugInfo(prev => [...prev, 'Stripe or Elements not initialized']);
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      setDebugInfo(prev => [...prev, 'Starting payment submission']);
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setDebugInfo(prev => [...prev, `Submit error: ${submitError.message}`]);
        throw submitError;
      }

      setDebugInfo(prev => [...prev, 'Confirming payment']);
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/complete?plan=${selectedPlan}`,
          payment_method_data: {
            billing_details: {
              address: {
                country: 'JP',
              },
            },
          },
        },
      });

      if (confirmError) {
        setDebugInfo(prev => [...prev, `Confirm error: ${confirmError.message}`]);
        throw confirmError;
      }

      setDebugInfo(prev => [...prev, 'Payment successful']);
      onSuccess();
    } catch (err: any) {
      console.error('Payment error:', err);
      setDebugInfo(prev => [...prev, `Payment error: ${err.message}`]);
      setError(err.message || '支払い処理に失敗しました。しばらく待ってから再度お試しください。');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <PaymentElement />
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}
      {process.env.NODE_ENV === 'development' && debugInfo.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h4 className="text-sm font-medium text-gray-900">デバッグ情報:</h4>
          <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">
            {debugInfo.join('\n')}
          </pre>
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isProcessing || !stripe
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        {isProcessing ? '処理中...' : '支払いを確定'}
      </button>
    </form>
  );
}

export function PaymentForm({ initialPlan }: PaymentFormProps) {
  const router = useRouter();
  const { updateSubscription } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan || plans[1].id);
  const [error, setError] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handlePlanSelect = async (planId: string) => {
    if (isUpdating) return;
    setSelectedPlan(planId);
    router.replace(`/auth/payment?plan=${planId}`, undefined, { shallow: true });
  };

  const handleSuccess = async () => {
    try {
      setIsUpdating(true);
      const success = await updateSubscription(selectedPlan);
      if (success) {
        router.push('/mypage/goals/goal-setting');
      } else {
        setError('サブスクリプションの更新に失敗しました。しばらく待ってから再度お試しください。');
      }
    } catch (err: any) {
      console.error('Subscription update error:', err);
      setError(err.message || 'エラーが発生しました。しばらく待ってから再度お試しください。');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          プランを選択
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          あなたに最適なプランをお選びください
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-blue-500 ring-2 ring-blue-500'
                      : 'border-gray-300 hover:border-blue-500'
                  } ${plan.recommended ? 'border-2' : ''}`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        おすすめ
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {plan.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        月額 ¥{plan.price.toLocaleString()}
                      </p>
                    </div>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      selectedPlan === plan.id ? 'bg-blue-500' : 'bg-gray-200'
                    }`}>
                      <CheckCircle className={`h-4 w-4 ${
                        selectedPlan === plan.id ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="ml-2 text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <CheckoutForm
              selectedPlan={selectedPlan}
              onSuccess={handleSuccess}
            />

            {error && (
              <div className="text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="text-center text-xs text-gray-500">
              <p>支払いは安全に処理されます</p>
              <p>キャンセルはいつでも可能です</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
