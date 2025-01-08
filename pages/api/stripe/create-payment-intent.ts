import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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
}
