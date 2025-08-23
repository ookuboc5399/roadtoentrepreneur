// トレンド暗号通貨API
// Django APIから取得していたトレンド暗号通貨データをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では CoinGecko API の trending エンドポイントなどを使用
      // ここでは模擬データを返す例を示します
      
      const trendingCoins = [
        {
          symbol: 'BTC',
          name: 'Bitcoin',
          price: '45,250.00',
          price_change_24h: '+3.45',
          market_cap: '885,000,000,000',
          volume_24h: '28,500,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 95,
          social_mentions: 15420
        },
        {
          symbol: 'ETH', 
          name: 'Ethereum',
          price: '3,125.80',
          price_change_24h: '+5.23',
          market_cap: '375,000,000,000',
          volume_24h: '18,200,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 89,
          social_mentions: 12850
        },
        {
          symbol: 'ADA',
          name: 'Cardano',
          price: '0.485',
          price_change_24h: '+8.12',
          market_cap: '17,200,000,000',
          volume_24h: '1,450,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 78,
          social_mentions: 8920
        },
        {
          symbol: 'LINK',
          name: 'Chainlink',
          price: '15.67',
          price_change_24h: '+12.34',
          market_cap: '9,800,000,000',
          volume_24h: '980,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 82,
          social_mentions: 6750
        },
        {
          symbol: 'DOT',
          name: 'Polkadot',
          price: '7.89',
          price_change_24h: '+6.78',
          market_cap: '8,500,000,000',
          volume_24h: '650,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 75,
          social_mentions: 4320
        },
        {
          symbol: 'MATIC',
          name: 'Polygon',
          price: '0.892',
          price_change_24h: '+15.67',
          market_cap: '7,200,000,000',
          volume_24h: '580,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 88,
          social_mentions: 7890
        },
        {
          symbol: 'AVAX',
          name: 'Avalanche',
          price: '38.45',
          price_change_24h: '+9.87',
          market_cap: '14,800,000,000',
          volume_24h: '1,200,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 81,
          social_mentions: 5640
        },
        {
          symbol: 'NEAR',
          name: 'NEAR Protocol',
          price: '3.21',
          price_change_24h: '+18.92',
          market_cap: '3,400,000,000',
          volume_24h: '420,000,000',
          last_updated: new Date().toISOString(),
          trend_score: 91,
          social_mentions: 3210
        }
      ]

      // トレンドスコア順にソート
      trendingCoins.sort((a, b) => b.trend_score - a.trend_score)

      res.status(200).json(trendingCoins)
    } catch (error) {
      console.error('Trending coins API error:', error)
      res.status(500).json({ 
        error: 'トレンド暗号通貨データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
