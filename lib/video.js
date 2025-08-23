// 投稿一覧を取得
export async function getAllPostsData() {
  const res = await fetch('/api/content/videos');
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch('/api/content/videos');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getPostData(id) {
  const res = await fetch(`/api/content/videos?id=${id}`);
  const post = await res.json();
  return post;
}