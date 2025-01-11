// Django APIサーバーURL
export async function getAllPostsData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/`);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/`);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}/`);
    if (!res.ok) throw new Error('Failed to fetch post')
    const post = await res.json();
    return post;
  } catch (error) {
    console.error('Error in getNewsData:', error);
    throw error;
  }
}
