// 新規上場暗号通貨API
// Django APIから取得していた新規上場データをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では取引所のAPIから最新の上場情報を取得
      // ここでは模擬データを返す例を示します
      
      const newListings = [
        {
          symbol: 'ATLAS',
          name: 'Atlas Protocol',
          listing_date: '2024-01-25',
          initial_price: '0.150',
          current_price: '0.187',
          price_change: '+24.67%',
          volume_24h: '8,450,000',
          market_cap: '45,600,000',
          exchange: 'Binance',
          description: 'メタバースとゲーミングに特化した分散型プラットフォーム',
          category: 'Gaming/Metaverse',
          performance: {
            '1h': '+2.34%',
            '24h': '+24.67%',
            '7d': '+156.78%',
            '30d': '+24.67%'
          }
        },
        {
          symbol: 'ORION',
          name: 'Orion Finance',
          listing_date: '2024-01-20',
          initial_price: '2.500',
          current_price: '3.125',
          price_change: '+25.00%',
          volume_24h: '12,300,000',
          market_cap: '78,900,000',
          exchange: 'Coinbase',
          description: 'DeFiプロトコルのアグリゲーターとリクイディティプール管理',
          category: 'DeFi',
          performance: {
            '1h': '+1.87%',
            '24h': '+5.23%',
            '7d': '+25.00%',
            '30d': '+25.00%'
          }
        },
        {
          symbol: 'NEXUS',
          name: 'Nexus Chain',
          listing_date: '2024-01-18',
          initial_price: '0.850',
          current_price: '0.765',
          price_change: '-10.00%',
          volume_24h: '5,670,000',
          market_cap: '32,400,000',
          exchange: 'Kraken',
          description: 'レイヤー2スケーリングソリューションとクロスチェーンブリッジ',
          category: 'Infrastructure',
          performance: {
            '1h': '-0.45%',
            '24h': '-3.21%',
            '7d': '-10.00%',
            '30d': '-10.00%'
          }
        },
        {
          symbol: 'FLUX',
          name: 'Flux Network',
          listing_date: '2024-01-15',
          initial_price: '1.200',
          current_price: '1.456',
          price_change: '+21.33%',
          volume_24h: '9,890,000',
          market_cap: '67,800,000',
          exchange: 'OKX',
          description: 'IoTデバイスとブロックチェーンを接続するプロトコル',
          category: 'IoT',
          performance: {
            '1h': '+0.89%',
            '24h': '+4.56%',
            '7d': '+21.33%',
            '30d': '+21.33%'
          }
        },
        {
          symbol: 'PRISM',
          name: 'Prism Analytics',
          listing_date: '2024-01-12',
          initial_price: '0.450',
          current_price: '0.523',
          price_change: '+16.22%',
          volume_24h: '3,240,000',
          market_cap: '28,700,000',
          exchange: 'Gate.io',
          description: 'ブロックチェーンデータ分析とオンチェーンインテリジェンス',
          category: 'Analytics',
          performance: {
            '1h': '+1.23%',
            '24h': '+2.87%',
            '7d': '+16.22%',
            '30d': '+16.22%'
          }
        },
        {
          symbol: 'ECHO',
          name: 'Echo Protocol',
          listing_date: '2024-01-10',
          initial_price: '3.750',
          current_price: '2.987',
          price_change: '-20.35%',
          volume_24h: '6,780,000',
          market_cap: '89,400,000',
          exchange: 'Huobi',
          description: '分散型ソーシャルメディアプラットフォーム',
          category: 'Social',
          performance: {
            '1h': '-1.12%',
            '24h': '-4.23%',
            '7d': '-20.35%',
            '30d': '-20.35%'
          }
        }
      ]

      // 上場日でソート（新しい順）
      newListings.sort((a, b) => new Date(b.listing_date) - new Date(a.listing_date))

      res.status(200).json(newListings)
    } catch (error) {
      console.error('New listings API error:', error)
      res.status(500).json({ 
        error: '新規上場データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
