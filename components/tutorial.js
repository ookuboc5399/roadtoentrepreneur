import Link from "next/link";
import Image from 'next/image';

export default function Tutorial({ tutorial }) {
  return (
    <div className="flex bg-white my-4">
      <div className="bg-green-300 items-center flex ">
        <Image
          src="/svg/20.svg"
          alt="01:Pythonとは？"
          width={160}
          height={160}
        />
      </div>
      <div className="w-full m-4">
        <p className="p-1 text-2xl ">{tutorial.name}</p>
        <span className="p-1 text-2xl">{tutorial.title}</span>
        <div className="mt-3 justify-end flex">
          <Link href={`${tutorial.href}`}>
            <div>
              <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                レッスン詳細へ
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}




