import Link from "next/link";
import Image from 'next/image';

export function Marketing({ marketing }) {
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
        <p className="p-1 text-2xl ">{marketing.name}</p>
          <span className="p-1 text-2xl">{marketing.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${marketing.href}`}>
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

export function Movie({ movie }) {
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
        <p className="p-1 text-2xl ">{movie.name}</p>
          <span className="p-1 text-2xl">{movie.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${movie.href}`}>
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

export function Excel({ excel }) {
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
        <p className="p-1 text-2xl ">{excel.name}</p>
          <span className="p-1 text-2xl">{excel.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${excel.href}`}>
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

export function Blog({ blog }) {
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
        <p className="p-1 text-2xl ">{blog.name}</p>
          <span className="p-1 text-2xl">{blog.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${blog.href}`}>
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

export function Buppan({ buppan }) {
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
        <p className="p-1 text-2xl ">{buppan.name}</p>
          <span className="p-1 text-2xl">{buppan.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${buppan.href}`}>
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

export function Design({ design }) {
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
        <p className="p-1 text-2xl ">{design.name}</p>
          <span className="p-1 text-2xl">{design.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${design.href}`}>
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

export function Real_estate({ real_estate }) {
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
        <p className="p-1 text-2xl ">{real_estate.name}</p>
          <span className="p-1 text-2xl">{real_estate.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${real_estate.href}`}>
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