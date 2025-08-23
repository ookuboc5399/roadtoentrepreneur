// 経済指標カレンダーAPI
// Django APIから取得していた経済指標データをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 実際の実装では外部の経済指標APIやWebスクレイピングを使用
      // ここでは模擬データを返す例を示します
      
      // 現在の日付を取得
      const today = new Date()
      const dateStr = today.toISOString().split('T')[0]
      
      // 模擬的な経済指標データ
      const mockEconomicData = {
        [dateStr]: [
          {
            id: 1,
            time: "08:30",
            country: "日本",
            event: "消費者物価指数 (前年同月比)",
            impact: "high",
            forecast: "2.5%",
            previous: "2.3%",
            actual: null,
            description: "インフレ率を示す重要な指標"
          },
          {
            id: 2,
            time: "21:30",
            country: "米国",
            event: "非農業部門雇用者数",
            impact: "high",
            forecast: "180K",
            previous: "175K", 
            actual: null,
            description: "米国の雇用状況を示す最重要指標"
          },
          {
            id: 3,
            time: "16:00",
            country: "ユーロ圏",
            event: "GDP (前期比)",
            impact: "medium",
            forecast: "0.3%",
            previous: "0.2%",
            actual: null,
            description: "経済成長率を示す指標"
          }
        ]
      }
      
      // 未来の日付のデータも生成
      for (let i = 1; i <= 7; i++) {
        const futureDate = new Date(today)
        futureDate.setDate(today.getDate() + i)
        const futureDateStr = futureDate.toISOString().split('T')[0]
        
        mockEconomicData[futureDateStr] = [
          {
            id: i + 10,
            time: "14:00",
            country: "日本",
            event: `経済指標${i}`,
            impact: i % 3 === 0 ? "high" : i % 2 === 0 ? "medium" : "low",
            forecast: `${(Math.random() * 5).toFixed(1)}%`,
            previous: `${(Math.random() * 5).toFixed(1)}%`,
            actual: null,
            description: `模擬経済指標データ ${i}`
          }
        ]
      }

      res.status(200).json(mockEconomicData)
    } catch (error) {
      console.error('Economic calendar API error:', error)
      res.status(500).json({ 
        error: '経済指標データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
