import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id, category, search } = req.query;
      
      // IDで特定の本を取得
      if (id) {
        const { data: book, error } = await supabase
          .from('library_books')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          return res.status(404).json({ error: 'Book not found' });
        }

        // チャプターも取得
        const { data: chapters } = await supabase
          .from('library_chapters')
          .select('*')
          .eq('book_id', id)
          .order('order_index');

        return res.status(200).json({
          ...book,
          chapters: chapters || []
        });
      }

      // 本の一覧を取得
      let query = supabase
        .from('library_books')
        .select('*')
        .order('created_at', { ascending: false });

      // カテゴリでフィルター
      if (category && category !== 'すべて') {
        query = query.eq('category', category);
      }

      // 検索でフィルター
      if (search) {
        query = query.or(`title.ilike.%${search}%,author.ilike.%${search}%`);
      }

      const { data: books, error } = await query;

      if (error) {
        console.error('Supabase error:', error);
        // フォールバックとしてダミーデータを使用
        return res.status(200).json(getDummyBooks(category, search));
      }

      return res.status(200).json(books || []);
    } catch (error) {
      console.error('Library API error:', error);
      // フォールバックとしてダミーデータを使用
      return res.status(200).json(getDummyBooks(req.query.category, req.query.search));
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

// フォールバック用のダミーデータ関数
function getDummyBooks(category, search) {
      // ダミーの本データ
      const books = [
        {
          id: '1',
          title: '投資の基本と実践',
          author: '山田太郎',
          summary: '初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーした一冊。株式、債券、不動産投資の基礎知識から、ポートフォリオ理論、リスク管理まで詳しく解説。',
          coverImage: '/images/book.png',
          category: '投資・経済',
          rating: 4.5,
          readTime: 15,
          views: 1240,
          hasAudio: true,
          hasVideo: true,
          tags: ['投資', '株式', '初心者向け', 'ポートフォリオ'],
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          audioUrl: '/audio/sample.mp3',
          fullSummary: `
# 投資の基本と実践

## はじめに

投資は現代社会において、資産形成と経済的自由を実現するための重要な手段です。本書では、初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーします。

## 第1章：投資の基礎知識

### 投資とは何か

投資とは、現在の資金を将来の利益を期待して運用することです。株式、債券、不動産、商品など、様々な投資対象があります。

### リスクとリターン

投資において最も重要な概念は、リスクとリターンの関係です。一般的に、高いリターンを期待する投資ほど、リスクも高くなります。

### 分散投資の重要性

「卵を一つの籠に盛るな」という格言があるように、分散投資はリスクを軽減する重要な戦略です。

## 第2章：株式投資入門

### 株式とは

株式は企業の所有権を表す証券です。株式を購入することで、その企業の株主となり、配当や株価上昇による利益を得ることができます。

### 株式投資のメリット

- 高いリターンの可能性
- インフレヘッジ効果
- 配当による継続的な収入

### 株式投資のリスク

- 株価の変動リスク
- 企業の倒産リスク
- 市場全体の下落リスク

## 第3章：債券投資の基礎

### 債券とは

債券は企業や政府が資金調達のために発行する証券です。定期的な利息支払いと満期時の元本返済が約束されています。

### 債券の種類

- 国債：政府が発行する債券
- 社債：企業が発行する債券
- 地方債：地方自治体が発行する債券

## 第4章：不動産投資のポイント

### 不動産投資の特徴

不動産投資は、賃料収入と資産価値の上昇による二重の利益が期待できる投資です。

### 投資対象の選び方

- 立地条件
- 建物の状態
- 賃料相場
- 将来性

## 第5章：ポートフォリオ理論

### アセットアロケーション

資産配分は投資成果を決定する最も重要な要素の一つです。年齢、リスク許容度、投資目的に応じて最適な配分を決定します。

### リバランス

定期的なポートフォリオの見直しと調整により、リスクを管理し、期待リターンを最適化します。

## 第6章：リスク管理手法

### ストップロス

損失を限定するための重要な手法です。事前に決めた価格で売却することで、大きな損失を防ぎます。

### ポジションサイジング

一度に投資する金額を適切に管理することで、リスクをコントロールします。

## 第7章：実践的投資戦略

### 長期投資の重要性

時間を味方につけることで、複利効果を活用し、大きな利益を得ることができます。

### 定額投資法

定期的に一定額を投資することで、平均購入単価を下げ、リスクを軽減します。

## まとめ

投資は知識と経験を積み重ねることで、誰でも習得できるスキルです。本書で学んだ知識を実践に活かし、着実に資産を築いていきましょう。

### 重要なポイント

1. **分散投資**：リスクを軽減する基本戦略
2. **長期視点**：時間を味方につけた投資
3. **継続学習**：市場の変化に対応する柔軟性
4. **リスク管理**：損失を限定する仕組み作り
5. **感情コントロール**：市場の波に流されない冷静さ

投資の世界は常に変化しています。本書で学んだ基礎知識を土台に、継続的に学習を重ね、自分に最適な投資スタイルを見つけていきましょう。
          `,
          chapters: [
            {
              id: '1',
              title: '投資の基礎知識',
              content: '投資とは何か、リスクとリターンの関係、分散投資の重要性について解説します。',
              duration: 300
            },
            {
              id: '2',
              title: '株式投資入門',
              content: '株式の基本概念、メリット・デメリット、投資戦略について詳しく説明します。',
              duration: 450
            },
            {
              id: '3',
              title: '債券投資の基礎',
              content: '債券の種類、特徴、投資方法について学びます。',
              duration: 360
            }
          ]
        },
        {
          id: '2',
          title: '暗号通貨完全ガイド',
          author: '佐藤花子',
          summary: 'ビットコインからDeFiまで、暗号通貨の世界を包括的に解説。ブロックチェーン技術の基礎から、主要な暗号通貨の特徴、投資戦略、セキュリティまで網羅。',
          coverImage: '/images/book.png',
          category: '暗号通貨・ブロックチェーン',
          rating: 4.7,
          readTime: 12,
          views: 890,
          hasAudio: true,
          hasVideo: false,
          tags: ['暗号通貨', 'ブロックチェーン', 'ビットコイン', 'DeFi'],
          fullSummary: '暗号通貨の詳細な要約...',
          chapters: []
        },
        {
          id: '3',
          title: 'サイドビジネス成功の法則',
          author: '田中一郎',
          summary: '副業・サイドビジネスで成功するための実践的ノウハウを紹介。時間管理、スキル開発、マーケティング戦略から税務処理まで詳しく解説。',
          coverImage: '/images/book.png',
          category: 'ビジネス・起業',
          rating: 4.3,
          readTime: 18,
          views: 1560,
          hasAudio: false,
          hasVideo: true,
          tags: ['副業', '起業', '時間管理', 'マーケティング'],
          fullSummary: 'サイドビジネスの詳細な要約...',
          chapters: []
        },
        {
          id: '4',
          title: 'AI投資の未来',
          author: '鈴木次郎',
          summary: '人工知能を活用した投資手法の最前線を紹介。機械学習アルゴリズム、量的投資戦略、ロボアドバイザーの仕組みまで詳しく解説。',
          coverImage: '/images/book.png',
          category: 'AI・テクノロジー',
          rating: 4.6,
          readTime: 20,
          views: 670,
          hasAudio: true,
          hasVideo: true,
          tags: ['AI', '機械学習', '量的投資', 'ロボアドバイザー'],
          fullSummary: 'AI投資の詳細な要約...',
          chapters: []
        },
        {
          id: '5',
          title: 'グローバル投資戦略',
          author: '国際投資研究所',
          summary: '世界の金融市場を俯瞰した投資戦略を解説。地域別市場分析、通貨リスク管理、国際分散投資のポイントを詳しく紹介。',
          coverImage: '/images/book.png',
          category: '国際投資',
          rating: 4.4,
          readTime: 25,
          views: 930,
          hasAudio: false,
          hasVideo: true,
          tags: ['国際投資', '分散投資', '通貨', '新興市場'],
          fullSummary: 'グローバル投資の詳細な要約...',
          chapters: []
        }
      ];

      let filteredBooks = books;

      // カテゴリでフィルター
      if (category && category !== 'すべて') {
        filteredBooks = filteredBooks.filter(book => book.category === category);
      }

      // 検索でフィルター
      if (search) {
        const searchLower = search.toLowerCase();
        filteredBooks = filteredBooks.filter(book => 
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      return filteredBooks;
}
