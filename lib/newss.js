// Next.js API Routes
export async function getAllPostsData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/external/news`);
    if (!res.ok) throw new Error('Failed to fetch')
    const posts = await res.json();
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Error in getAllPostsData:', error);
    return [];
  }
}

// 投稿一覧の ID を取得
export async function getAllNewsIds() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/external/news`);
    const posts = await res.json();
    return posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      };
    });
  } catch (error) {
    console.error('Error in getAllNewsIds:', error);
    return [];
  }
}

// 投稿詳細のデータを取得
export async function getNewsData(id) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/external/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error('Failed to fetch post')
    const post = await res.json();
    return post;
  } catch (error) {
    console.error('Error in getNewsData:', error);
    throw error;
  }
}
