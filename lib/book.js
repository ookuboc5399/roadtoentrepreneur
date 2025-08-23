// 投稿一覧を取得
export async function getAllBooksData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/content/books`);
  const books = await res.json();
  return books;
}

// 投稿一覧のIDを取得
export async function getAllBookIds() {
  // 静的なデータを使用（ビルド時にAPIサーバーが起動していないため）
  const books = [
    { id: 1 },
    { id: 2 }
  ];
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
  // 静的なデータを使用
  const books = [
    {
      id: 1,
      title: '投資の基本',
      content: '投資についての基本的な知識を学びましょう。',
      created_at: '2024-01-01',
      subimage: '/images/book.png'
    },
    {
      id: 2,
      title: '副業の始め方',
      content: '副業を始めるためのガイドです。',
      created_at: '2024-01-02',
      subimage: '/images/book.png'
    }
  ];
  
  const book = books.find(b => b.id === parseInt(id));
  return book || null;
}
