// 書籍データAPI
// Django APIから取得していた書籍データをNext.jsで提供

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      // 実際の実装では書籍APIやデータベースから取得
      // ここでは模擬データを返す例を示します
      
      const mockBooks = [
        {
          id: 1,
          title: "投資の基本と実践",
          author: "山田太郎",
          isbn: "978-4-12345-678-9",
          publisher: "投資出版社",
          publication_date: "2023-10-15",
          price: 2800,
          description: "初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーした一冊。株式、債券、不動産投資の基礎知識から、ポートフォリオ理論、リスク管理まで詳しく解説。",
          category: "投資・経済",
          rating: 4.5,
          reviews_count: 124,
          pages: 320,
          language: "日本語",
          cover_image: "/images/books/investment-basics.jpg",
          tags: ["投資", "株式", "初心者向け", "ポートフォリオ"],
          table_of_contents: [
            "第1章: 投資の基本概念",
            "第2章: 株式投資入門",
            "第3章: 債券投資の基礎",
            "第4章: 不動産投資のポイント",
            "第5章: ポートフォリオ理論",
            "第6章: リスク管理手法",
            "第7章: 実践的投資戦略"
          ]
        },
        {
          id: 2,
          title: "暗号通貨完全ガイド",
          author: "佐藤花子",
          isbn: "978-4-23456-789-0",
          publisher: "テック出版",
          publication_date: "2023-12-01",
          price: 3200,
          description: "ビットコインからDeFiまで、暗号通貨の世界を包括的に解説。ブロックチェーン技術の基礎から、主要な暗号通貨の特徴、投資戦略、セキュリティまで網羅。",
          category: "暗号通貨・ブロックチェーン",
          rating: 4.7,
          reviews_count: 89,
          pages: 280,
          language: "日本語",
          cover_image: "/images/books/crypto-guide.jpg",
          tags: ["暗号通貨", "ブロックチェーン", "ビットコイン", "DeFi"],
          table_of_contents: [
            "第1章: ブロックチェーン技術入門",
            "第2章: ビットコインの仕組み",
            "第3章: アルトコインの世界",
            "第4章: DeFiプロトコル解説",
            "第5章: NFTとメタバース",
            "第6章: 暗号通貨投資戦略",
            "第7章: セキュリティとウォレット管理"
          ]
        },
        {
          id: 3,
          title: "サイドビジネス成功の法則",
          author: "田中一郎",
          isbn: "978-4-34567-890-1",
          publisher: "ビジネス書房",
          publication_date: "2023-09-20",
          price: 2400,
          description: "副業・サイドビジネスで成功するための実践的ノウハウを紹介。時間管理、スキル開発、マーケティング戦略から税務処理まで詳しく解説。",
          category: "ビジネス・起業",
          rating: 4.3,
          reviews_count: 156,
          pages: 250,
          language: "日本語",
          cover_image: "/images/books/side-business.jpg",
          tags: ["副業", "起業", "時間管理", "マーケティング"],
          table_of_contents: [
            "第1章: サイドビジネスの基本",
            "第2章: アイデアの見つけ方",
            "第3章: 時間管理術",
            "第4章: スキルアップ戦略",
            "第5章: マーケティング手法",
            "第6章: 収益化のポイント",
            "第7章: 税務と法的注意点"
          ]
        },
        {
          id: 4,
          title: "AI投資の未来",
          author: "鈴木次郎",
          isbn: "978-4-45678-901-2",
          publisher: "フューチャー出版",
          publication_date: "2024-01-10",
          price: 3600,
          description: "人工知能を活用した投資手法の最前線を紹介。機械学習アルゴリズム、量的投資戦略、ロボアドバイザーの仕組みまで詳しく解説。",
          category: "AI・テクノロジー",
          rating: 4.6,
          reviews_count: 67,
          pages: 340,
          language: "日本語",
          cover_image: "/images/books/ai-investment.jpg",
          tags: ["AI", "機械学習", "量的投資", "ロボアドバイザー"],
          table_of_contents: [
            "第1章: AI投資の基礎",
            "第2章: 機械学習アルゴリズム",
            "第3章: 量的投資戦略",
            "第4章: ロボアドバイザー解説",
            "第5章: データ分析手法",
            "第6章: リスク管理とAI",
            "第7章: AI投資の未来展望"
          ]
        },
        {
          id: 5,
          title: "グローバル投資戦略",
          author: "国際投資研究所",
          isbn: "978-4-56789-012-3",
          publisher: "グローバル出版",
          publication_date: "2023-11-05",
          price: 4200,
          description: "世界の金融市場を俯瞰した投資戦略を解説。地域別市場分析、通貨リスク管理、国際分散投資のポイントを詳しく紹介。",
          category: "国際投資",
          rating: 4.4,
          reviews_count: 93,
          pages: 380,
          language: "日本語",
          cover_image: "/images/books/global-investment.jpg",
          tags: ["国際投資", "分散投資", "通貨", "新興市場"],
          table_of_contents: [
            "第1章: グローバル市場概観",
            "第2章: 先進国市場分析",
            "第3章: 新興国投資戦略",
            "第4章: 通貨リスク管理",
            "第5章: 国際分散投資",
            "第6章: ESG投資の潮流",
            "第7章: 今後の展望"
          ]
        }
      ]

      if (id) {
        // 特定のIDの書籍を返す
        const book = mockBooks.find(b => b.id === parseInt(id))
        if (!book) {
          return res.status(404).json({ error: '書籍が見つかりません' })
        }
        res.status(200).json(book)
      } else {
        // 全書籍を返す
        res.status(200).json(mockBooks)
      }
    } catch (error) {
      console.error('Books API error:', error)
      res.status(500).json({ 
        error: '書籍データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
