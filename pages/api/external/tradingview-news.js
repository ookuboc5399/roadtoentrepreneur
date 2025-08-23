// TradingViewニュースAPI
// Django APIから取得していたTradingViewニュースデータをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では TradingView API やニュースフィードを使用
      // ここでは模擬データを返す例を示します
      
      const mockTradingViewNews = [
        {
          title: "FRBが金利政策について声明を発表",
          description: "連邦準備制度理事会が今後の金融政策の方向性について重要な発表を行いました。市場は慎重な反応を示しています。",
          link: "https://example.com/news/1",
          source: "TradingView",
          time: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30分前
        },
        {
          title: "テクノロジー株が急上昇、AI関連銘柄に注目",
          description: "人工知能技術の進歩により、関連企業の株価が大幅に上昇しています。投資家の関心が高まっています。",
          link: "https://example.com/news/2", 
          source: "MarketWatch",
          time: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1時間前
        },
        {
          title: "原油価格が下落、地政学的緊張の緩和が要因",
          description: "中東情勢の安定化により、原油価格が下落傾向にあります。エネルギー関連株への影響が注目されています。",
          link: "https://example.com/news/3",
          source: "Bloomberg",
          time: new Date(Date.now() - 90 * 60 * 1000).toISOString(), // 1.5時間前
        },
        {
          title: "暗号通貨市場が回復、ビットコインが重要な抵抗線を突破",
          description: "ビットコインを含む主要暗号通貨が上昇トレンドを示しており、市場心理の改善が見られます。",
          link: "https://example.com/news/4",
          source: "CoinDesk", 
          time: new Date(Date.now() - 120 * 60 * 1000).toISOString(), // 2時間前
        },
        {
          title: "日本株式市場の展望、企業業績改善が支援材料",
          description: "日本企業の四半期業績が予想を上回る結果となり、市場全体の楽観的な見通しが広がっています。",
          link: "https://example.com/news/5",
          source: "Nikkei",
          time: new Date(Date.now() - 180 * 60 * 1000).toISOString(), // 3時間前
        },
        {
          title: "欧州中央銀行の政策変更が為替市場に影響",
          description: "ECBの最新の政策決定により、ユーロ圏の通貨が他の主要通貨に対して変動しています。",
          link: "https://example.com/news/6",
          source: "Reuters",
          time: new Date(Date.now() - 240 * 60 * 1000).toISOString(), // 4時間前
        }
      ]

      res.status(200).json(mockTradingViewNews)
    } catch (error) {
      console.error('TradingView news API error:', error)
      res.status(500).json({ 
        error: 'TradingViewニュースの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
