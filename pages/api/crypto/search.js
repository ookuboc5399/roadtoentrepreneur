// 暗号通貨検索API
// Django APIから取得していた暗号通貨検索機能をNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query

    if (!q) {
      return res.status(400).json({ error: '検索クエリが必要です' })
    }

    try {
      // 実際の実装では CoinGecko API の search エンドポイントなどを使用
      // ここでは模擬データを返す例を示します
      
      const allCoins = [
        { symbol: 'BTC', name: 'Bitcoin', price: '45,250.00', price_change_24h: '+3.45' },
        { symbol: 'ETH', name: 'Ethereum', price: '3,125.80', price_change_24h: '+5.23' },
        { symbol: 'ADA', name: 'Cardano', price: '0.485', price_change_24h: '+8.12' },
        { symbol: 'LINK', name: 'Chainlink', price: '15.67', price_change_24h: '+12.34' },
        { symbol: 'DOT', name: 'Polkadot', price: '7.89', price_change_24h: '+6.78' },
        { symbol: 'MATIC', name: 'Polygon', price: '0.892', price_change_24h: '+15.67' },
        { symbol: 'AVAX', name: 'Avalanche', price: '38.45', price_change_24h: '+9.87' },
        { symbol: 'NEAR', name: 'NEAR Protocol', price: '3.21', price_change_24h: '+18.92' },
        { symbol: 'ATOM', name: 'Cosmos', price: '12.34', price_change_24h: '+4.56' },
        { symbol: 'ALGO', name: 'Algorand', price: '0.234', price_change_24h: '+7.89' },
        { symbol: 'XTZ', name: 'Tezos', price: '1.45', price_change_24h: '+2.34' },
        { symbol: 'FTM', name: 'Fantom', price: '0.567', price_change_24h: '+11.23' },
        { symbol: 'LUNA', name: 'Terra Luna', price: '89.45', price_change_24h: '+13.45' },
        { symbol: 'SOL', name: 'Solana', price: '102.34', price_change_24h: '+6.78' },
        { symbol: 'ONE', name: 'Harmony', price: '0.123', price_change_24h: '+14.56' }
      ]

      // 検索クエリに基づいてフィルタリング
      const query = q.toLowerCase()
      const filteredCoins = allCoins.filter(coin => 
        coin.symbol.toLowerCase().includes(query) || 
        coin.name.toLowerCase().includes(query)
      )

      // 完全一致を優先してソート
      filteredCoins.sort((a, b) => {
        const aSymbolMatch = a.symbol.toLowerCase() === query
        const bSymbolMatch = b.symbol.toLowerCase() === query
        const aNameMatch = a.name.toLowerCase() === query
        const bNameMatch = b.name.toLowerCase() === query

        if (aSymbolMatch && !bSymbolMatch) return -1
        if (!aSymbolMatch && bSymbolMatch) return 1
        if (aNameMatch && !bNameMatch) return -1
        if (!aNameMatch && bNameMatch) return 1

        return a.name.localeCompare(b.name)
      })

      // 最大10件に制限
      const limitedResults = filteredCoins.slice(0, 10)

      res.status(200).json(limitedResults)
    } catch (error) {
      console.error('Crypto search API error:', error)
      res.status(500).json({ 
        error: '暗号通貨検索に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
