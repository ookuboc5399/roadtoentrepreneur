import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// 環境変数からStripeシークレットキーを取得（改行を除去）
const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.replace(/\n/g, '').replace(/\\n/g, '');
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia', // Stripe v17.5.0に対応するバージョン
});

const PLAN_PRICES = {
  basic: 980,
  premium: 1980,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: 将来的にStripe決済を実装する予定
  return res.status(503).json({ 
    error: 'Payment functionality is currently under development',
    message: '支払い機能は現在開発中です'
  });

  /* TODO: 将来的にStripe決済を実装する予定
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // デバッグ用のログ
    console.log('Stripe Secret Key length:', process.env.STRIPE_SECRET_KEY?.length || 0);
    console.log('Stripe Secret Key starts with:', process.env.STRIPE_SECRET_KEY?.substring(0, 10) || 'NOT SET');
    
    const { plan } = req.body;

    if (!plan || !PLAN_PRICES[plan as keyof typeof PLAN_PRICES]) {
      return res.status(400).json({ error: 'Invalid plan' });
    }

    const amount = PLAN_PRICES[plan as keyof typeof PLAN_PRICES];

    // Create a PaymentIntent with the specified payment method types
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'jpy',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        plan,
      },
    });

    // Send publishable key and PaymentIntent details to client
    res.json({
      clientSecret: paymentIntent.client_secret,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
  */
}
