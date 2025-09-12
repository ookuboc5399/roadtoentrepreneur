import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: 将来的にStripe決済を実装する予定
  return res.status(503).json({ 
    error: 'Stripe test functionality is currently disabled',
    message: 'Stripe決済機能は現在無効化されています'
  });

  /* TODO: 将来的にStripe決済を実装する予定
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 環境変数の状態を確認
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    const debugInfo = {
      stripeSecretKeyExists: !!stripeSecretKey,
      stripeSecretKeyLength: stripeSecretKey?.length || 0,
      stripeSecretKeyStartsWith: stripeSecretKey?.substring(0, 10) || 'NOT SET',
      stripePublishableKeyExists: !!stripePublishableKey,
      stripePublishableKeyLength: stripePublishableKey?.length || 0,
      stripePublishableKeyStartsWith: stripePublishableKey?.substring(0, 10) || 'NOT SET',
    };

    // 改行を除去したキーでテスト
    const cleanSecretKey = stripeSecretKey?.replace(/\n/g, '').replace(/\\n/g, '');
    const cleanPublishableKey = stripePublishableKey?.replace(/\n/g, '').replace(/\\n/g, '');

    if (cleanSecretKey && cleanSecretKey.startsWith('sk_test_')) {
      // Stripeクライアントの初期化テスト
      const Stripe = require('stripe');
      const stripe = new Stripe(cleanSecretKey, {
        apiVersion: '2024-12-18.acacia',
      });

      // 簡単なAPI呼び出しテスト
      const account = await stripe.accounts.retrieve();
      
      return res.status(200).json({
        success: true,
        debugInfo,
        cleanKeys: {
          secretKeyStartsWith: cleanSecretKey.substring(0, 10),
          publishableKeyStartsWith: cleanPublishableKey?.substring(0, 10) || 'NOT SET',
        },
        stripeAccount: {
          id: account.id,
          object: account.object,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Invalid Stripe secret key',
        debugInfo,
        cleanKeys: {
          secretKeyStartsWith: cleanSecretKey?.substring(0, 10) || 'NOT SET',
          publishableKeyStartsWith: cleanPublishableKey?.substring(0, 10) || 'NOT SET',
        },
           });
   }
   */
 } catch (error) {
    console.error('Stripe test error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      debugInfo: {
        stripeSecretKeyExists: !!process.env.STRIPE_SECRET_KEY,
        stripePublishableKeyExists: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      },
         });
   }
   */
 }
