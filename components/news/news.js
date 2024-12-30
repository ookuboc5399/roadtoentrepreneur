import Link from "next/link";

export default function News({ news }) {
  return (
    <Link href={`/newss/${news.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <div className="text-center my-4">
          <p>{news.title}</p>
        </div>
      </div>
    </Link>
  );
}