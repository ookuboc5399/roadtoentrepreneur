import { loadStripe, Stripe } from '@stripe/stripe-js';

// Stripeインスタンスをシングルトンとして管理
let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    // 環境変数からStripeパブリックキーを取得（改行を除去）
    const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.replace(/\n/g, '').replace(/\\n/g, '');
    if (!stripePublishableKey) {
      throw new Error('Stripe publishable key is not set');
    }
    
    stripePromise = loadStripe(stripePublishableKey, {
      locale: 'ja',
      apiVersion: '2024-12-18.acacia',
      betas: ['payment_element_beta_1'],
    });
  }
  return stripePromise;
};

export const createPaymentIntent = async (plan: string) => {
  try {
    const response = await fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create payment intent');
    }

    const data = await response.json();

    // デバッグ情報をコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('Payment Intent created:', {
        clientSecret: data.clientSecret ? 'present' : 'missing',
        publishableKey: data.publishableKey ? 'present' : 'missing',
      });
    }

    return data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export const getPaymentConfig = () => {
  return {
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0070f3',
        colorBackground: '#ffffff',
        colorText: '#1a1a1a',
        colorDanger: '#df1b41',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        spacingUnit: '4px',
        borderRadius: '4px',
      },
      rules: {
        '.Input': {
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.Input:focus': {
          border: '1px solid #0070f3',
          boxShadow: '0 0 0 1px #0070f3',
        },
      },
    },
    loader: 'auto' as const,
    paymentMethodConfiguration: {
      card: {
        allowedCountries: ['JP'],
        collectBillingAddress: true,
      },
    },
    fields: {
      billingDetails: {
        address: {
          country: 'JP',
        },
      },
    },
  };
};
