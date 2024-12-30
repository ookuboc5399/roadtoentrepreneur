import fetch from "node-fetch";

// WP APIサーバーURL
const SERVERURL = "https://perpetualtravelerchoja.com/wp-json/wp/v2/posts?_embed";

// 投稿一覧を取得
export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVERURL}`));
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVERURL}`));
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

