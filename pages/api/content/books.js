// 書籍データAPI
// Django APIから取得していた書籍データをNext.jsで提供

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // ダミーの本データ
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

      const { id } = req.query;
      
      if (id) {
        // 特定の本を取得
        const book = books.find(b => b.id === parseInt(id));
        if (book) {
          return res.status(200).json(book);
        } else {
          return res.status(404).json({ error: 'Book not found' });
        }
      } else {
        // 全ての本を取得
        return res.status(200).json(books);
      }
    } catch (error) {
      console.error('Books API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
