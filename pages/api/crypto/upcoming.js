// 新規上場予定暗号通貨API
// Django APIから取得していた新規上場予定データをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では取引所のAPIや専門サイトからデータを取得
      // ここでは模擬データを返す例を示します
      
      const upcomingCoins = [
        {
          symbol: 'NOVA',
          name: 'Nova Protocol',
          launch_date: '2024-02-15',
          description: 'DeFiとNFTを統合した革新的なプロトコル。次世代のデジタル資産管理ソリューションを提供します。',
          estimated_price: '$0.50 - $1.20',
          exchange: 'Binance',
          total_supply: '1,000,000,000',
          website: 'https://novaprotocol.io',
          whitepaper: 'https://novaprotocol.io/whitepaper.pdf',
          social_links: {
            twitter: 'https://twitter.com/novaprotocol',
            telegram: 'https://t.me/novaprotocol',
            discord: 'https://discord.gg/novaprotocol'
          },
          category: 'DeFi',
          blockchain: 'Ethereum'
        },
        {
          symbol: 'VERTEX',
          name: 'Vertex Network',
          launch_date: '2024-02-28',
          description: 'AIを活用したトレーディングボットとポートフォリオ管理プラットフォーム。',
          estimated_price: '$2.00 - $5.00',
          exchange: 'Coinbase',
          total_supply: '500,000,000',
          website: 'https://vertexnetwork.io',
          whitepaper: 'https://vertexnetwork.io/docs/whitepaper.pdf',
          social_links: {
            twitter: 'https://twitter.com/vertexnetwork',
            telegram: 'https://t.me/vertexnetwork',
            medium: 'https://medium.com/@vertexnetwork'
          },
          category: 'AI/Trading',
          blockchain: 'Polygon'
        },
        {
          symbol: 'SYNTH',
          name: 'Synthetic Finance',
          launch_date: '2024-03-10',
          description: '合成資産の作成と取引を可能にする分散型プラットフォーム。',
          estimated_price: '$1.50 - $3.00',
          exchange: 'Kraken',
          total_supply: '750,000,000',
          website: 'https://syntheticfinance.io',
          whitepaper: 'https://syntheticfinance.io/whitepaper.pdf',
          social_links: {
            twitter: 'https://twitter.com/synthfinance',
            telegram: 'https://t.me/synthfinance',
            reddit: 'https://reddit.com/r/synthfinance'
          },
          category: 'Synthetic Assets',
          blockchain: 'Arbitrum'
        },
        {
          symbol: 'QUANTUM',
          name: 'Quantum Bridge',
          launch_date: '2024-03-25',
          description: 'クロスチェーンブリッジとインターオペラビリティソリューション。',
          estimated_price: '$0.80 - $2.50',
          exchange: 'OKX',
          total_supply: '2,000,000,000',
          website: 'https://quantumbridge.io',
          whitepaper: 'https://quantumbridge.io/docs/technical.pdf',
          social_links: {
            twitter: 'https://twitter.com/quantumbridge',
            telegram: 'https://t.me/quantumbridge',
            github: 'https://github.com/quantumbridge'
          },
          category: 'Infrastructure',
          blockchain: 'Multi-chain'
        },
        {
          symbol: 'PLASMA',
          name: 'Plasma Energy',
          launch_date: '2024-04-05',
          description: '再生可能エネルギーとブロックチェーンを組み合わせた環境プロジェクト。',
          estimated_price: '$0.25 - $0.75',
          exchange: 'Gate.io',
          total_supply: '5,000,000,000',
          website: 'https://plasmaenergy.io',
          whitepaper: 'https://plasmaenergy.io/sustainability-whitepaper.pdf',
          social_links: {
            twitter: 'https://twitter.com/plasmaenergy',
            telegram: 'https://t.me/plasmaenergy',
            linkedin: 'https://linkedin.com/company/plasmaenergy'
          },
          category: 'Sustainability',
          blockchain: 'Solana'
        }
      ]

      // 上場日でソート（近い順）
      upcomingCoins.sort((a, b) => new Date(a.launch_date) - new Date(b.launch_date))

      res.status(200).json(upcomingCoins)
    } catch (error) {
      console.error('Upcoming coins API error:', error)
      res.status(500).json({ 
        error: '新規上場予定データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
