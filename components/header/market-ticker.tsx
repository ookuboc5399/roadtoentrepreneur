import { useState, useEffect } from 'react';
import { fetchMarketData } from '../../lib/market';

export function MarketTicker() {
  const [markets, setMarkets] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMarketData();
      setMarkets(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // 1分ごとに更新

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      {markets.map((market) => (
        <div key={market.symbol} className="flex items-center space-x-2">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              market.symbol === '225' ? 'bg-blue-900' :
              market.symbol === 'TOPIX' ? 'bg-red-700' :
              market.symbol === 'SPX' ? 'bg-red-600' :
              'bg-blue-500'
            }`}>
              <span className="text-white text-xs font-bold">{market.symbol}</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{market.price.toLocaleString()}</span>
                <span className="text-xs text-gray-500">{market.currency}</span>
              </div>
              <span
                className={`text-sm ${
                  market.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {market.change >= 0 ? '+' : ''}
                {market.change}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
