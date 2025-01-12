interface MarketData {
  symbol: string;
  name: string;
  price: number;
  currency: string;
  change: number;
}

export async function fetchMarketData(): Promise<MarketData[]> {
  // TODO: 実際のAPIを使用して株価データを取得する
  // 現在はダミーデータを返しています
  return [
    {
      symbol: '225',
      name: 'Japan 225',
      price: 39190.18,
      currency: 'JPY',
      change: -1.05
    },
    {
      symbol: 'TOPIX',
      name: 'TOPIX',
      price: 2714.12,
      currency: 'JPY',
      change: -0.80
    },
    {
      symbol: 'SPX',
      name: 'S&P 500',
      price: 5827.03,
      currency: 'USD',
      change: -1.54
    },
    {
      symbol: 'NDX',
      name: 'NASDAQ',
      price: 20841.15,
      currency: 'USD',
      change: -1.40
    }
  ];
}
