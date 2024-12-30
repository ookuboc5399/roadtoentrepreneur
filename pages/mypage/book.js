import Book from "../../components/books";
import { getAllBooksData } from "../../lib/book";
import Mypage from '../../components/layout/mypage/mypage';

export default function Home({ books }) {
  console.log(books)
  return (
    <Mypage>
      <div>
        <div className='text-2xl'>投資</div>
        <div className="flex flex-wrap -m-4 mb-5">
          {books && books.map((book) =><Book key={book.id} book={book} />)}
        </div>
      </div>
      {/* <div>
        <div className='text-2xl'>起業</div>
        <div className="flex flex-wrap -m-4 mb-5">
          {posts && posts.map((post) =>
            <Book key={post.id} post={post} />
          )}
        </div>
      </div>
      <div>
        <div className='text-2xl'>プログラミング</div>
        <div className="flex flex-wrap -m-4 mb-5">
          {posts && posts.map((post) =>
            <Book key={post.id} post={post} />
          )}
        </div>
      </div>
      <div>
        <div className='text-2xl'>英語</div>
        <div className="flex flex-wrap -m-4 mb-5">
          {posts && posts.map((post) =>
            <Book key={post.id} post={post} />
          )}
        </div>
      </div>
      <div>
        <div className='text-2xl'>デザイン</div>
        <div className="flex flex-wrap -m-4 mb-5">
          {posts && posts.map((post) =>
            <Book key={post.id} post={post} />
          )}
        </div>
      </div> */}
    </Mypage>
  );
}

export async function getStaticProps() {
  const books = await getAllBooksData();

  return {
    props: { books },
    revalidate: 3,
  };
}