# Stripe決済機能実装メモ

## 現在の状況

Stripe決済機能は現在コメントアウトされており、将来的に実装する予定です。

## コメントアウトされたファイル

### 1. フロントエンド
- `pages/auth/payment.tsx` - 支払いページ
- `pages/payment/complete.tsx` - 支払い完了ページ

### 2. API
- `pages/api/stripe/create-payment-intent.ts` - PaymentIntent作成API
- `pages/api/test-stripe.ts` - Stripe設定テスト用API

## 実装済みの機能（コメントアウト中）

### ✅ 支払いページ (`/auth/payment`)
- Stripe Elements統合
- PaymentIntent作成
- エラーハンドリング
- ローディング状態管理

### ✅ PaymentIntent作成API (`/api/stripe/create-payment-intent`)
- Stripe SDK統合
- プラン別料金設定
- 環境変数の改行問題対応
- デバッグログ機能

### ✅ 支払い完了ページ (`/payment/complete`)
- 支払い状況確認
- サブスクリプション更新
- エラーハンドリング
- デバッグ情報表示

### ✅ テスト用API (`/api/test-stripe`)
- Stripe設定確認
- 環境変数デバッグ
- 接続テスト

## 環境変数

```env
# Stripe設定（テスト環境）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 料金プラン

```typescript
const PLAN_PRICES = {
  basic: 980,    // 980円
  premium: 1980, // 1980円
};
```

## 将来の実装手順

### 1. 環境変数の設定
- `.env`ファイルにStripeキーを設定
- 本番環境では`pk_live_`と`sk_live_`を使用

### 2. コメントアウトの解除
1. `pages/auth/payment.tsx`のコメントアウトを解除
2. `pages/api/stripe/create-payment-intent.ts`のコメントアウトを解除
3. `pages/payment/complete.tsx`のコメントアウトを解除

### 3. テスト
1. `/api/test-stripe`でStripe設定を確認
2. `/auth/payment`で支払いフローをテスト
3. Webhookの設定（必要に応じて）

### 4. 本番環境への展開
1. Stripeアカウントの本番環境設定
2. 環境変数を本番用に更新
3. Webhookエンドポイントの設定

## 注意事項

- 現在は「準備中」メッセージを表示
- 支払いページにアクセスすると準備中画面が表示される
- 支払い完了ページはホームにリダイレクト
- 全ての決済関連APIは503エラーを返す

## 関連ファイル

### 設定ファイル
- `lib/stripe.ts` - Stripe設定とヘルパー関数
- `components/auth/payment-form.tsx` - 支払いフォームコンポーネント

### 認証関連
- `lib/auth.tsx` - 認証とサブスクリプション管理

## 実装時の参考情報

### Stripe Elements設定
```typescript
const options: StripeElementsOptions = {
  clientSecret,
  appearance: {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#0070f3',
    },
  },
};
```

### PaymentIntent作成
```typescript
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
```

### 支払い状況確認
```typescript
const { paymentIntent, error } = await stripe.retrievePaymentIntent(clientSecret);
```

---

**最終更新**: 2024年12月30日
**ステータス**: コメントアウト済み（将来実装予定）

