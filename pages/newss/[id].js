import { useRouter } from "next/router";
import { getAllNewsIds, getNewsData } from "../../lib/newss";

export default function NewsData({ news }) {
  const router = useRouter();

  if (router.isFallback || !news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5 w-full">
      <div className="flex justify-center flex-col items-center mb-5">
        <h1 className="text-3xl mb-3 font-bold">{news.title}</h1>
        <p className="mb-3">{news.created_at}</p>
        <div className="border w-14"></div>
      </div>
      <p className="whitespace-pre-wrap">{news.content}</p>
    </div>
  );
}

// 投稿一覧の ID を取得
export async function getStaticPaths() {
  const paths = await getAllNewsIds();

  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }) {
  const news = await getNewsData(params.id);
  return {
    props: {
      news,
    },
    revalidate: 3,
  };
}