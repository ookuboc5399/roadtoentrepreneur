// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8001/";  // 8000から8001に変更

export async function getAllPostsData() {
  try {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    if (!res.ok) throw new Error('Failed to fetch')
    const posts = await res.json();
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Error in getAllPostsData:', error);
    return [];
  }
}

export async function getAllPostIds() {
  try {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      };
    });
  } catch (error) {
    console.error('Error in getAllPostIds:', error);
    return [];
  }
}

export async function getPostData(id) {
  try {
    const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
    if (!res.ok) throw new Error('Failed to fetch post')
    const post = await res.json();
    return post;
  } catch (error) {
    console.error('Error in getPostData:', error);
    throw error;
  }
}