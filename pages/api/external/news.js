// ニュース投稿API
// Django APIから取得していたニュースデータをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では外部ニュースAPIやRSSフィードを使用
      // ここでは模擬データを返す例を示します
      
      const mockNews = [
        {
          id: 1,
          title: "2024年の投資戦略：多様化がカギ",
          content: "経済の不確実性が高まる中、投資ポートフォリオの多様化がより重要になっています。専門家は、株式、債券、不動産、コモディティなど異なる資産クラスへの分散投資を推奨しています。",
          category: "投資戦略",
          author: "投資アナリスト",
          date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1日前
          image_url: "/images/investment-strategy.jpg"
        },
        {
          id: 2,
          title: "AI技術が変える金融業界の未来",
          content: "人工知能技術の進歩により、金融業界では自動化とパーソナライゼーションが進んでいます。ロボアドバイザーやアルゴリズム取引など、新しい金融サービスが続々と登場しています。",
          category: "フィンテック",
          author: "テクノロジー専門家",
          date: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2日前
          image_url: "/images/ai-finance.jpg"
        },
        {
          id: 3,
          title: "サイドビジネス成功の秘訣：時間管理術",
          content: "本業と並行してサイドビジネスを成功させるには、効率的な時間管理が不可欠です。優先順位の設定、タスクの自動化、集中時間の確保などの方法を紹介します。",
          category: "サイドビジネス",
          author: "起業家",
          date: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), // 3日前
          image_url: "/images/time-management.jpg"
        },
        {
          id: 4,
          title: "暗号通貨投資のリスク管理",
          content: "暗号通貨市場の高いボラティリティに対処するため、適切なリスク管理戦略が重要です。ポジションサイジング、ストップロス、分散投資などの手法を解説します。",
          category: "暗号通貨",
          author: "クリプト専門家",
          date: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(), // 4日前
          image_url: "/images/crypto-risk.jpg"
        },
        {
          id: 5,
          title: "不動産投資の基本：REITから始める方法",
          content: "不動産投資初心者にとって、REITは手軽に始められる投資方法です。物件選択のポイント、収益性の分析、税務上の考慮事項などを詳しく説明します。",
          category: "不動産投資",
          author: "不動産投資家",
          date: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(), // 5日前
          image_url: "/images/real-estate.jpg"
        }
      ]

      res.status(200).json(mockNews)
    } catch (error) {
      console.error('News API error:', error)
      res.status(500).json({ 
        error: 'ニュースデータの取得に失敗しました',
        details: error.message 
      })
    }
  } else if (req.method === 'POST') {
    // ニュース記事の詳細取得
    const { id } = req.body

    if (!id) {
      return res.status(400).json({ error: 'IDが必要です' })
    }

    try {
      // 模擬的な記事詳細データ
      const mockArticleDetail = {
        id: parseInt(id),
        title: `詳細記事 ${id}`,
        content: `これは記事ID ${id} の詳細コンテンツです。実際の実装では、データベースまたは外部APIから記事の詳細情報を取得します。`,
        category: "投資戦略",
        author: "専門家",
        date: new Date().toISOString(),
        image_url: `/images/article-${id}.jpg`,
        tags: ["投資", "戦略", "分析"],
        views: Math.floor(Math.random() * 10000),
        likes: Math.floor(Math.random() * 500)
      }

      res.status(200).json(mockArticleDetail)
    } catch (error) {
      console.error('Article detail API error:', error)
      res.status(500).json({ 
        error: '記事詳細の取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
