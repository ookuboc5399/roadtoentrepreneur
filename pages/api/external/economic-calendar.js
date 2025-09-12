
// fetch is available natively in Node.js 18+

// FMPの国コードを日本語にマッピング
const countryMap = {
  "JP": "日本",
  "US": "米国",
  "EZ": "ユーロ圏",
  "CN": "中国",
  "GB": "英国",
  "DE": "ドイツ",
  "FR": "フランス",
  "AU": "オーストラリア",
  "CA": "カナダ",
  "CH": "スイス",
};

// FMPの重要度を内部的な値にマッピング
const impactMap = {
  "High": "high",
  "Medium": "medium",
  "Low": "low",
};

// 日付をYYYY-MM-DD形式の文字列に変換するヘルパー関数
const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const apiKey = process.env.FMP_KEY;
  if (!apiKey) {
    console.error('FMP API key is not configured.');
    return res.status(500).json({ error: 'APIキーが設定されていません。' });
  }

  try {
    // 過去90日から未来90日までのデータを取得
    const today = new Date();
    const fromDate = new Date();
    fromDate.setDate(today.getDate() - 90);
    const toDate = new Date();
    toDate.setDate(today.getDate() + 90);

    const from = formatDate(fromDate);
    const to = formatDate(toDate);

    const url = `https://financialmodelingprep.com/stable/economic-calendar?from=${from}&to=${to}&apikey=${apiKey}`;

    const apiRes = await fetch(url);

    if (!apiRes.ok) {
      const errorBody = await apiRes.text();
      console.error('FMP API error:', apiRes.status, errorBody);
      if (errorBody.includes("is not valid") || errorBody.includes("plan") || apiRes.status === 403) {
        return res.status(403).json({
          error: 'APIキーが無効か、この機能へのアクセス権がありません。FMPのプランを確認してください。',
          details: errorBody
        });
      }
      throw new Error(`Failed to fetch data from FMP API. Status: ${apiRes.status}`);
    }

    const data = await apiRes.json();

    if (!Array.isArray(data)) {
      console.error('Unexpected data format from FMP API:', data);
      throw new Error('FMP APIから予期しない形式のデータが返されました。');
    }

    // フロントエンドが期待する形式にデータを整形
    const formattedData = data.reduce((acc, event) => {
      const eventDate = event.date.split(' ')[0];
      if (!eventDate) return acc;

      const formattedEvent = {
        time: event.date.split(' ')[1]?.substring(0, 5) || 'N/A',
        country: countryMap[event.country] || event.country,
        event: event.eventName,
        impact: impactMap[event.impact] || 'low',
        actual: event.actual,
        forecast: event.forecast,
        previous: event.previous,
      };

      if (!acc[eventDate]) {
        acc[eventDate] = [];
      }
      acc[eventDate].push(formattedEvent);
      return acc;
    }, {});

    res.status(200).json(formattedData);

  } catch (error) {
    console.error('Economic calendar API error:', error);
    res.status(500).json({
      error: '経済指標データの取得に失敗しました。',
      details: error.message
    });
  }
}
