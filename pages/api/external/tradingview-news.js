// NewsAPIを使用した金融・投資ニュースAPI
// TradingViewスタイルの金融ニュースをNewsAPIから取得し、日本語に翻訳

import { translateToJapanese } from '../../../lib/translate';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { limit = 4 } = req.query;
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      
      if (!apiKey) {
        console.warn('NewsAPI key not found, using mock data');
        return getMockTradingViewNews(res, limit);
      }

      // 複数のクエリで金融・投資関連ニュースのみを取得
      const queries = [
        'finance OR investment OR stock market OR cryptocurrency OR bitcoin OR economy OR Federal Reserve',
        'Bank of Japan OR ECB OR central bank OR monetary policy OR interest rates',
        'stock market OR trading OR portfolio OR investment strategy'
      ];

      let allArticles = [];

      // 各クエリでニュースを取得
      for (const query of queries) {
        try {
          const newsApiUrl = `https://newsapi.org/v2/everything?` +
            `q=${encodeURIComponent(query)}&` +
            `language=en&` +
            `sortBy=publishedAt&` +
            `pageSize=1&` +
            `apiKey=${apiKey}`;

          const response = await fetch(newsApiUrl);
          
          if (response.ok) {
            const data = await response.json();
            if (data.status === 'ok' && data.articles) {
              allArticles = allArticles.concat(data.articles);
            }
          }
        } catch (queryError) {
          console.warn(`Query failed: ${query}`, queryError);
        }
      }

      // 記事を重複除去して最新順にソート
      const uniqueArticles = allArticles
        .filter((article, index, self) => 
          index === self.findIndex(a => a.url === article.url)
        )
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, Math.min(parseInt(limit), 4));

      // 金融関連キーワードで追加フィルタリング
      const financialKeywords = [
        'finance', 'investment', 'stock', 'market', 'cryptocurrency', 'bitcoin', 'economy',
        'federal reserve', 'bank', 'trading', 'portfolio', 'securities', 'bonds', 'forex',
        'banking', 'financial', 'monetary', 'policy', 'interest rate', 'inflation', 'gdp'
      ];

      const finalFilteredArticles = uniqueArticles.filter(article => {
        const title = (article.title || '').toLowerCase();
        const description = (article.description || '').toLowerCase();
        const content = (article.content || '').toLowerCase();
        const text = `${title} ${description} ${content}`;
        
        return financialKeywords.some(keyword => text.includes(keyword));
      });

      // TradingView形式に変換し、翻訳
      const formattedNews = await Promise.all(
        finalFilteredArticles.slice(0, Math.min(parseInt(limit), 4)).map(async article => {
          const [translatedTitle, translatedDescription] = await Promise.all([
            translateToJapanese(article.title || ''),
            translateToJapanese(article.description || article.content || '')
          ]);

          return {
            title: translatedTitle || 'タイトルなし',
            description: translatedDescription || '内容なし',
            link: article.url || '#',
            source: article.source.name || 'Unknown',
            time: article.publishedAt || new Date().toISOString()
          };
        })
      );

      // 金融関連ニュースが見つからない場合はモックデータを返す
      if (formattedNews.length === 0) {
        console.warn('No financial news found, returning mock data');
        return getMockTradingViewNews(res, limit);
      }

      res.status(200).json(formattedNews);
    } catch (error) {
      console.error('TradingView news API error:', error);
      // エラー時はモックデータを返す
      return getMockTradingViewNews(res, Math.min(parseInt(req.query.limit) || 4, 4));
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}

// モックデータを返す関数（金融ニュースのみ）
function getMockTradingViewNews(res, limit = 4) {
  const mockTradingViewNews = [
    {
      title: "FRBが金利政策について声明を発表",
      description: "連邦準備制度理事会が今後の金融政策の方向性について重要な発表を行いました。市場は慎重な反応を示しています。",
      link: "https://example.com/news/1",
      source: "TradingView",
      time: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30分前
    },
    {
      title: "暗号通貨市場が回復、ビットコインが重要な抵抗線を突破",
      description: "ビットコインを含む主要暗号通貨が上昇トレンドを示しており、市場心理の改善が見られます。",
      link: "https://example.com/news/2",
      source: "CoinDesk", 
      time: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1時間前
    },
    {
      title: "日本株式市場の展望、企業業績改善が支援材料",
      description: "日本企業の四半期業績が予想を上回る結果となり、市場全体の楽観的な見通しが広がっています。",
      link: "https://example.com/news/3",
      source: "Nikkei",
      time: new Date(Date.now() - 90 * 60 * 1000).toISOString(), // 1.5時間前
    },
    {
      title: "欧州中央銀行の政策変更が為替市場に影響",
      description: "ECBの最新の政策決定により、ユーロ圏の通貨が他の主要通貨に対して変動しています。",
      link: "https://example.com/news/4",
      source: "Reuters",
      time: new Date(Date.now() - 120 * 60 * 1000).toISOString(), // 2時間前
    }
  ];

  res.status(200).json(mockTradingViewNews.slice(0, limit));
}
