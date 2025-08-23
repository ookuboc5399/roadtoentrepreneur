// 検索結果一覧を取得
export async function getAllRakutenData() {
  const res = await fetch(new URL('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=EGOIST&applicationId=1041325084269081277'));
  const data = await res.json();
  return data;
}