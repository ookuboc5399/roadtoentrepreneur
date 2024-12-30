import { useRouter } from "next/router";
import { getAllBookIds, getBookData } from "../../lib/book";

export default function NewsData({ book }) {
  const router = useRouter();

  if (router.isFallback || !book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5 w-full">
      <div className="flex justify-center flex-col items-center mb-5">
        <h1 className="text-3xl mb-3 font-bold">{book.title}</h1>
        <p className="mb-3">{book.created_at}</p>
        <img alt="book2" className="object-cover" src={book.subimage} />
        <div className="border w-14"></div>
      </div>
      <p className="whitespace-pre-wrap">{book.content}</p>
    </div>
  );
}

// 投稿一覧の ID を取得
export async function getStaticPaths() {
  const paths = await getAllBookIds();

  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }) {
  const book = await getBookData(params.id);
  return {
    props: {
      book,
    },
    revalidate: 3,
  };
}