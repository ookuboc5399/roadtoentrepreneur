// 動画データAPI
// Django APIから取得していた動画データをNext.jsで提供

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      // 実際の実装では動画プラットフォームAPIやデータベースから取得
      // ここでは模擬データを返す例を示します
      
      const mockVideos = [
        {
          id: 1,
          title: "株式投資の基本 - 初心者向け完全ガイド",
          description: "株式投資を始めたい初心者のための基本講座。株の仕組み、証券会社の選び方、銘柄分析の方法まで詳しく解説します。",
          duration: "25:30",
          upload_date: "2024-01-15",
          thumbnail: "/images/videos/stock-basics-thumb.jpg",
          video_url: "/videos/stock-basics.mp4",
          category: "投資教育",
          subcategory: "株式投資",
          instructor: "投資アドバイザー 山田",
          level: "初級",
          views: 15420,
          likes: 892,
          tags: ["株式投資", "初心者", "基本", "証券会社"],
          chapters: [
            { time: "00:00", title: "イントロダクション" },
            { time: "02:15", title: "株式とは何か" },
            { time: "08:30", title: "証券会社の選び方" },
            { time: "15:45", title: "銘柄分析の基本" },
            { time: "22:00", title: "まとめと次のステップ" }
          ],
          materials: [
            { type: "pdf", title: "株式投資チェックリスト", url: "/materials/stock-checklist.pdf" },
            { type: "xlsx", title: "ポートフォリオテンプレート", url: "/materials/portfolio-template.xlsx" }
          ]
        },
        {
          id: 2,
          title: "暗号通貨投資入門 - ビットコインからDeFiまで",
          description: "暗号通貨投資の基礎から応用まで。ビットコイン、イーサリアム、DeFiプロトコルの仕組みと投資方法を解説。",
          duration: "32:45",
          upload_date: "2024-01-20",
          thumbnail: "/images/videos/crypto-intro-thumb.jpg",
          video_url: "/videos/crypto-intro.mp4",
          category: "投資教育",
          subcategory: "暗号通貨",
          instructor: "ブロックチェーン専門家 佐藤",
          level: "中級",
          views: 12350,
          likes: 736,
          tags: ["暗号通貨", "ビットコイン", "DeFi", "ブロックチェーン"],
          chapters: [
            { time: "00:00", title: "暗号通貨とは" },
            { time: "05:20", title: "ビットコインの仕組み" },
            { time: "12:30", title: "アルトコインの世界" },
            { time: "20:15", title: "DeFiプロトコル入門" },
            { time: "28:00", title: "投資戦略とリスク管理" }
          ],
          materials: [
            { type: "pdf", title: "暗号通貨取引所比較表", url: "/materials/crypto-exchanges.pdf" },
            { type: "pdf", title: "DeFiプロトコル一覧", url: "/materials/defi-protocols.pdf" }
          ]
        },
        {
          id: 3,
          title: "動画編集で副業を始める方法",
          description: "動画編集スキルを身につけて副業を始めるための実践的ガイド。Adobe Premiere Proの使い方から案件獲得まで。",
          duration: "28:15",
          upload_date: "2024-01-10",
          thumbnail: "/images/videos/video-editing-thumb.jpg",
          video_url: "/videos/video-editing.mp4",
          category: "サイドビジネス",
          subcategory: "動画編集",
          instructor: "クリエイター 田中",
          level: "初級",
          views: 9870,
          likes: 654,
          tags: ["動画編集", "副業", "Premiere Pro", "フリーランス"],
          chapters: [
            { time: "00:00", title: "動画編集副業の概要" },
            { time: "04:30", title: "必要なスキルとツール" },
            { time: "12:00", title: "Premiere Pro基本操作" },
            { time: "20:30", title: "案件獲得の方法" },
            { time: "25:45", title: "収益化のポイント" }
          ],
          materials: [
            { type: "zip", title: "練習用動画素材", url: "/materials/practice-footage.zip" },
            { type: "pdf", title: "案件獲得テンプレート", url: "/materials/freelance-templates.pdf" }
          ]
        },
        {
          id: 4,
          title: "FX自動売買システム構築講座",
          description: "MetaTraderとEAを使ったFX自動売買システムの構築方法。戦略の設計からバックテストまで詳しく解説。",
          duration: "45:20",
          upload_date: "2024-01-25",
          thumbnail: "/images/videos/fx-ea-thumb.jpg",
          video_url: "/videos/fx-ea.mp4",
          category: "投資教育",
          subcategory: "FX",
          instructor: "システムトレーダー 鈴木",
          level: "上級",
          views: 7890,
          likes: 523,
          tags: ["FX", "自動売買", "EA", "MetaTrader"],
          chapters: [
            { time: "00:00", title: "自動売買の基本概念" },
            { time: "08:15", title: "MetaTrader環境構築" },
            { time: "18:30", title: "EA作成の基礎" },
            { time: "30:45", title: "バックテスト手法" },
            { time: "40:00", title: "実運用の注意点" }
          ],
          materials: [
            { type: "zip", title: "サンプルEAコード", url: "/materials/sample-ea.zip" },
            { type: "pdf", title: "バックテストレポート例", url: "/materials/backtest-example.pdf" }
          ]
        },
        {
          id: 5,
          title: "ブログアフィリエイト収益化戦略",
          description: "ブログを使ったアフィリエイトで安定収入を得る方法。SEO対策、記事作成、収益化まで体系的に解説。",
          duration: "35:50",
          upload_date: "2024-01-18",
          thumbnail: "/images/videos/blog-affiliate-thumb.jpg",
          video_url: "/videos/blog-affiliate.mp4",
          category: "サイドビジネス",
          subcategory: "ブログ",
          instructor: "ブロガー 高橋",
          level: "中級",
          views: 11230,
          likes: 789,
          tags: ["ブログ", "アフィリエイト", "SEO", "WordPress"],
          chapters: [
            { time: "00:00", title: "アフィリエイトの仕組み" },
            { time: "06:45", title: "ニッチ選択の重要性" },
            { time: "15:20", title: "SEO対策の基本" },
            { time: "25:30", title: "収益化戦略" },
            { time: "32:15", title: "継続的成長のコツ" }
          ],
          materials: [
            { type: "pdf", title: "キーワード選定シート", url: "/materials/keyword-sheet.pdf" },
            { type: "xlsx", title: "収益追跡テンプレート", url: "/materials/revenue-tracker.xlsx" }
          ]
        }
      ]

      if (id) {
        // 特定のIDの動画を返す
        const video = mockVideos.find(v => v.id === parseInt(id))
        if (!video) {
          return res.status(404).json({ error: '動画が見つかりません' })
        }
        res.status(200).json(video)
      } else {
        // 全動画を返す
        res.status(200).json(mockVideos)
      }
    } catch (error) {
      console.error('Videos API error:', error)
      res.status(500).json({ 
        error: '動画データの取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
