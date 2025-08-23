// 個別暗号通貨データAPI
// Django APIから取得していた暗号通貨データをNext.jsで提供

export default async function handler(req, res) {
  const { symbol } = req.query

  if (req.method === 'GET') {
    if (!symbol) {
      return res.status(400).json({ error: 'シンボルが必要です' })
    }

    try {
      // 実際の実装では CoinGecko API や Binance API などを使用
      // ここでは模擬データを返す例を示します
      
      const mockCoinData = {
        symbol: symbol.toUpperCase(),
        name: getCoinName(symbol),
        price: (Math.random() * 100000).toFixed(2),
        price_change_24h: ((Math.random() - 0.5) * 20).toFixed(2),
        market_cap: (Math.random() * 1000000000).toFixed(0),
        volume_24h: (Math.random() * 10000000).toFixed(0),
        description: `${getCoinName(symbol)}は革新的な暗号通貨プロジェクトです。`,
        last_updated: new Date().toISOString(),
        // 追加の技術的指標
        circulating_supply: (Math.random() * 1000000000).toFixed(0),
        total_supply: (Math.random() * 2000000000).toFixed(0),
        max_supply: symbol.toLowerCase() === 'btc' ? '21000000' : null,
        // 価格履歴データ（簡易版）
        price_history: generatePriceHistory(),
        // サポート・レジスタンスレベル
        support_levels: [
          (Math.random() * 50000).toFixed(2),
          (Math.random() * 40000).toFixed(2),
          (Math.random() * 30000).toFixed(2)
        ],
        resistance_levels: [
          (Math.random() * 80000).toFixed(2),
          (Math.random() * 90000).toFixed(2),
          (Math.random() * 100000).toFixed(2)
        ]
      }

      res.status(200).json(mockCoinData)
    } catch (error) {
      console.error('Coin data API error:', error)
      res.status(500).json({ 
        error: '暗号通貨データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}

// 通貨シンボルから名前を取得するヘルパー関数
function getCoinName(symbol) {
  const coinNames = {
    'BTC': 'Bitcoin',
    'ETH': 'Ethereum', 
    'ADA': 'Cardano',
    'DOT': 'Polkadot',
    'LINK': 'Chainlink',
    'LTC': 'Litecoin',
    'XRP': 'Ripple',
    'BCH': 'Bitcoin Cash',
    'BNB': 'Binance Coin',
    'USDT': 'Tether'
  }
  return coinNames[symbol.toUpperCase()] || `${symbol.toUpperCase()} Coin`
}

// 価格履歴データを生成するヘルパー関数
function generatePriceHistory() {
  const history = []
  const basePrice = Math.random() * 50000
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    
    // ランダムな価格変動を生成
    const variation = (Math.random() - 0.5) * 0.1 // ±10%の変動
    const price = basePrice * (1 + variation * (i / 30))
    
    history.push({
      date: date.toISOString().split('T')[0],
      price: price.toFixed(2),
      volume: (Math.random() * 1000000).toFixed(0)
    })
  }
  
  return history
}
