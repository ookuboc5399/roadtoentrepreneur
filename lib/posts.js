// 投稿一覧取得
export async function getPostList() {
    const apiRes = await fetch('/api/content/posts', {
      method: 'GET',
    })
    const posts = await apiRes.json()
    return posts
  }
  
  // 投稿一覧ID取得
  export async function getPostIds() {
    const apiRes = await fetch('/api/content/posts', {
      method: 'GET',
    })
    const posts = await apiRes.json()
  
    return posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      }
    })
  }
  
  // 投稿詳細取得
  export async function getPostDetail(id) {
    const apiRes = await fetch(`/api/content/posts/${id}`, {
      method: 'GET',
    })
    const post = await apiRes.json()
    return post
  }