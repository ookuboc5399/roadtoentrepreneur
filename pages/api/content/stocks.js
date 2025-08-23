// 株式データAPI
// Django APIから取得していた株式データをNext.jsで提供

export default async function handler(req, res) {
  const { id, symbol } = req.query

  if (req.method === 'GET') {
    try {
      // 実際の実装では株式APIやデータベースから取得
      // ここでは模擬データを返す例を示します
      
      const mockStocks = [
        {
          id: 1,
          symbol: "AAPL",
          name: "Apple Inc.",
          price: 185.25,
          change: 2.45,
          change_percent: 1.34,
          volume: 58920000,
          market_cap: 2890000000000,
          pe_ratio: 28.5,
          dividend_yield: 0.52,
          sector: "Technology",
          industry: "Consumer Electronics",
          description: "Apple Inc.は、iPhone、iPad、Mac、Apple Watch、Apple TVなどの革新的な製品を設計、製造、販売している多国籍技術企業です。",
          last_updated: new Date().toISOString(),
          financial_data: {
            revenue: 394000000000,
            net_income: 95000000000,
            total_assets: 352000000000,
            total_debt: 120000000000,
            free_cash_flow: 84000000000
          },
          technical_indicators: {
            rsi: 65.4,
            ma_50: 178.90,
            ma_200: 171.25,
            bollinger_upper: 190.50,
            bollinger_lower: 175.80
          }
        },
        {
          id: 2,
          symbol: "TSLA",
          name: "Tesla, Inc.",
          price: 248.50,
          change: -8.75,
          change_percent: -3.40,
          volume: 89450000,
          market_cap: 785000000000,
          pe_ratio: 65.2,
          dividend_yield: 0.00,
          sector: "Consumer Cyclical",
          industry: "Auto Manufacturers",
          description: "Tesla, Inc.は電気自動車、エネルギー貯蔵システム、太陽光発電システムの設計、開発、製造、販売を行う企業です。",
          last_updated: new Date().toISOString(),
          financial_data: {
            revenue: 96000000000,
            net_income: 15000000000,
            total_assets: 106000000000,
            total_debt: 9900000000,
            free_cash_flow: 7500000000
          },
          technical_indicators: {
            rsi: 42.8,
            ma_50: 255.30,
            ma_200: 245.75,
            bollinger_upper: 270.20,
            bollinger_lower: 235.40
          }
        },
        {
          id: 3,
          symbol: "NVDA",
          name: "NVIDIA Corporation",
          price: 785.40,
          change: 15.60,
          change_percent: 2.03,
          volume: 42350000,
          market_cap: 1950000000000,
          pe_ratio: 72.8,
          dividend_yield: 0.03,
          sector: "Technology",
          industry: "Semiconductors",
          description: "NVIDIA Corporationは、ゲーミング、データセンター、自動車、プロフェッショナル市場向けのGPUを設計・製造する企業です。",
          last_updated: new Date().toISOString(),
          financial_data: {
            revenue: 60900000000,
            net_income: 29800000000,
            total_assets: 65700000000,
            total_debt: 9700000000,
            free_cash_flow: 26000000000
          },
          technical_indicators: {
            rsi: 78.2,
            ma_50: 720.50,
            ma_200: 485.60,
            bollinger_upper: 820.30,
            bollinger_lower: 680.90
          }
        },
        {
          id: 4,
          symbol: "MSFT",
          name: "Microsoft Corporation",
          price: 415.80,
          change: 3.20,
          change_percent: 0.78,
          volume: 28900000,
          market_cap: 3100000000000,
          pe_ratio: 35.6,
          dividend_yield: 0.68,
          sector: "Technology",
          industry: "Software",
          description: "Microsoft Corporationは、クラウドコンピューティング、生産性ソフトウェア、ビジネスプロセス、インテリジェントクラウドサービスを提供する企業です。",
          last_updated: new Date().toISOString(),
          financial_data: {
            revenue: 211000000000,
            net_income: 72000000000,
            total_assets: 411000000000,
            total_debt: 47000000000,
            free_cash_flow: 65000000000
          },
          technical_indicators: {
            rsi: 58.9,
            ma_50: 410.25,
            ma_200: 380.70,
            bollinger_upper: 425.60,
            bollinger_lower: 395.40
          }
        },
        {
          id: 5,
          symbol: "GOOGL",
          name: "Alphabet Inc.",
          price: 138.75,
          change: 1.85,
          change_percent: 1.35,
          volume: 35680000,
          market_cap: 1750000000000,
          pe_ratio: 25.4,
          dividend_yield: 0.00,
          sector: "Communication Services",
          industry: "Internet Content & Information",
          description: "Alphabet Inc.は、検索エンジン、オンライン広告、クラウドコンピューティング、ソフトウェアサービスを提供する持株会社です。",
          last_updated: new Date().toISOString(),
          financial_data: {
            revenue: 307000000000,
            net_income: 74000000000,
            total_assets: 402000000000,
            total_debt: 26000000000,
            free_cash_flow: 69000000000
          },
          technical_indicators: {
            rsi: 61.3,
            ma_50: 135.80,
            ma_200: 125.90,
            bollinger_upper: 145.20,
            bollinger_lower: 128.30
          }
        }
      ]

      if (id) {
        // 特定のIDの株式を返す
        const stock = mockStocks.find(s => s.id === parseInt(id))
        if (!stock) {
          return res.status(404).json({ error: '株式データが見つかりません' })
        }
        res.status(200).json(stock)
      } else if (symbol) {
        // 特定のシンボルの株式を返す
        const stock = mockStocks.find(s => s.symbol === symbol.toUpperCase())
        if (!stock) {
          return res.status(404).json({ error: '株式データが見つかりません' })
        }
        res.status(200).json(stock)
      } else {
        // 全株式を返す
        res.status(200).json(mockStocks)
      }
    } catch (error) {
      console.error('Stocks API error:', error)
      res.status(500).json({ 
        error: '株式データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
