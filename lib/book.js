import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// 投稿一覧を取得
export async function getAllBooksData() {
  const res = await fetch(new URL(`${SERVERURL}api1/book/`));
  const books = await res.json();
  return books;
}

// 投稿一覧のIDを取得
export async function getAllBookIds() {
  const res = await fetch(new URL(`${SERVERURL}api1/book/`));
  const books = await res.json();
  return books.map((book) => {
    return {
      params: {
        id: String(book.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getBookData(id) {
  const res = await fetch(new URL(`${SERVERURL}api1/book/${id}/`));
  const book = await res.json();
  return book;
}
