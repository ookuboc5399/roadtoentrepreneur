import Link from "next/link";

export default function Book({ book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <img alt="book" className="object-cover" src={book.image} />
        <div className="text-center my-4">
          <p>{book.title}</p>
        </div>
      </div>
    </Link>
  );
}