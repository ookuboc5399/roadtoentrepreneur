import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// 投稿一覧を取得
export async function getAllStocksData() {
  const res = await fetch(new URL(`${SERVERURL}api3/stock/`));
  const stocks = await res.json();
  return stocks;
  
}

// 投稿一覧のIDを取得
export async function getAllStockIds() {
  const res = await fetch(new URL(`${SERVERURL}api3/stock/`));
  const stocks = await res.json();
  return stocks.map((stock) => {
    return {
      params: {
        id: String(stock.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getStockData(id) {
  const res = await fetch(new URL(`${SERVERURL}api3/stock/${id}/`));
  const stock = await res.json();
  return stock;
}