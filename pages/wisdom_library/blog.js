import Blog from "../../components/blog";
import { getAllPostsData } from "../../lib/blog";
import Layout from '../../components/layout';
import Dashboard from '../../components/dashboard';

export default function Home({ posts }) {
  return (
    <Layout>
      <div>
        <Dashboard />
        <div className="flex flex-wrap -m-4 mb-5">
          {posts && posts.map((post) => 
            <Blog key={post.id} post={post} />
            )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return {
    props: { posts },
    revalidate: 3,
  };
}