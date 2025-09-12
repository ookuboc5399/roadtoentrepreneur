// NewsAPIを使用したニュース取得API
// NewsAPIから金融・投資関連の最新ニュースを取得し、日本語に翻訳

import { translateToJapanese } from '../../../lib/translate';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { limit = 4 } = req.query;
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      
      if (!apiKey) {
        console.warn('NewsAPI key not found, using mock data');
        return getMockNews(res, limit);
      }

      // NewsAPIから金融・投資関連ニュースのみを取得
      const newsApiUrl = `https://newsapi.org/v2/everything?` +
        `q=("finance" OR "investment" OR "stock market" OR "cryptocurrency" OR "bitcoin" OR "economy" OR "Federal Reserve" OR "Bank of Japan" OR "trading" OR "portfolio" OR "securities" OR "bonds" OR "forex" OR "banking" OR "financial markets")&` +
        `language=en&` +
        `sortBy=publishedAt&` +
        `pageSize=${Math.min(parseInt(limit), 4)}&` +
        `apiKey=${apiKey}`;

      const response = await fetch(newsApiUrl);
      
      if (!response.ok) {
        throw new Error(`NewsAPI request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error(`NewsAPI returned error: ${data.message}`);
      }

      // 金融関連キーワードでフィルタリング
      const financialKeywords = [
        'finance', 'investment', 'stock', 'market', 'cryptocurrency', 'bitcoin', 'economy',
        'federal reserve', 'bank', 'trading', 'portfolio', 'securities', 'bonds', 'forex',
        'banking', 'financial', 'monetary', 'policy', 'interest rate', 'inflation', 'gdp'
      ];

      const filteredArticles = data.articles.filter(article => {
        const title = (article.title || '').toLowerCase();
        const description = (article.description || '').toLowerCase();
        const content = (article.content || '').toLowerCase();
        const text = `${title} ${description} ${content}`;
        
        return financialKeywords.some(keyword => text.includes(keyword));
      });

      // NewsAPIのデータをアプリケーション形式に変換し、翻訳
      const formattedNews = await Promise.all(
        filteredArticles.slice(0, Math.min(parseInt(limit), 4)).map(async (article, index) => {
          const [translatedTitle, translatedContent] = await Promise.all([
            translateToJapanese(article.title || ''),
            translateToJapanese(article.description || article.content || '')
          ]);

          return {
            id: index + 1,
            title: translatedTitle || 'タイトルなし',
            content: translatedContent || '内容なし',
            category: '金融',
            author: article.author || article.source.name || '不明',
            date: article.publishedAt || new Date().toISOString(),
            image_url: article.urlToImage || '/images/default-news.jpg',
            url: article.url
          };
        })
      );

      // 金融関連ニュースが見つからない場合はモックデータを返す
      if (formattedNews.length === 0) {
        console.warn('No financial news found, returning mock data');
        return getMockNews(res, limit);
      }

      res.status(200).json(formattedNews);
    } catch (error) {
      console.error('News API error:', error);
      // エラー時はモックデータを返す
      return getMockNews(res, Math.min(parseInt(req.query.limit) || 4, 4));
    }
  } else if (req.method === 'POST') {
    // ニュース記事の詳細取得
    const { id } = req.body

    if (!id) {
      return res.status(400).json({ error: 'IDが必要です' })
    }

    try {
      // 模擬的な記事詳細データ
      const mockArticleDetail = {
        id: parseInt(id),
        title: `詳細記事 ${id}`,
        content: `これは記事ID ${id} の詳細コンテンツです。実際の実装では、データベースまたは外部APIから記事の詳細情報を取得します。`,
        category: "投資戦略",
        author: "専門家",
        date: new Date().toISOString(),
        image_url: `/images/article-${id}.jpg`,
        tags: ["投資", "戦略", "分析"],
        views: Math.floor(Math.random() * 10000),
        likes: Math.floor(Math.random() * 500)
      }

      res.status(200).json(mockArticleDetail)
    } catch (error) {
      console.error('Article detail API error:', error)
      res.status(500).json({ 
        error: '記事詳細の取得に失敗しました',
        details: error.message 
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}

// モックデータを返す関数（金融ニュースのみ）
function getMockNews(res, limit = 4) {
  const mockNews = [
    {
      id: 1,
      title: "2024年の投資戦略：多様化がカギ",
      content: "経済の不確実性が高まる中、投資ポートフォリオの多様化がより重要になっています。専門家は、株式、債券、不動産、コモディティなど異なる資産クラスへの分散投資を推奨しています。",
      category: "金融",
      author: "投資アナリスト",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      image_url: "/images/investment-strategy.jpg"
    },
    {
      id: 2,
      title: "AI技術が変える金融業界の未来",
      content: "人工知能技術の進歩により、金融業界では自動化とパーソナライゼーションが進んでいます。ロボアドバイザーやアルゴリズム取引など、新しい金融サービスが続々と登場しています。",
      category: "金融",
      author: "テクノロジー専門家",
      date: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      image_url: "/images/ai-finance.jpg"
    },
    {
      id: 3,
      title: "暗号通貨投資のリスク管理",
      content: "暗号通貨市場の高いボラティリティに対処するため、適切なリスク管理戦略が重要です。ポジションサイジング、ストップロス、分散投資などの手法を解説します。",
      category: "金融",
      author: "クリプト専門家",
      date: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
      image_url: "/images/crypto-risk.jpg"
    },
    {
      id: 4,
      title: "不動産投資の基本：REITから始める方法",
      content: "不動産投資初心者にとって、REITは手軽に始められる投資方法です。物件選択のポイント、収益性の分析、税務上の考慮事項などを詳しく説明します。",
      category: "金融",
      author: "不動産投資家",
      date: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
      image_url: "/images/real-estate.jpg"
    }
  ];

  res.status(200).json(mockNews.slice(0, limit));
}
