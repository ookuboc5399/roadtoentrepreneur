import fetch from "node-fetch";

// Django APIサーバーURL
// const SERVERURL = "http://127.0.0.1:8000/";

// 検索結果一覧を取得
export async function getAllRakutenData() {
  const res = await fetch(new URL('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=EGOIST&applicationId=1041325084269081277'));
  const data = await res.json();
  return data;
}