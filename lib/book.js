// 投稿一覧を取得
export async function getAllBooksData() {
  const res = await fetch('/api/content/books');
  const books = await res.json();
  return books;
}

// 投稿一覧のIDを取得
export async function getAllBookIds() {
  const res = await fetch('/api/content/books');
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
  const res = await fetch(`/api/content/books?id=${id}`);
  const book = await res.json();
  return book;
}
