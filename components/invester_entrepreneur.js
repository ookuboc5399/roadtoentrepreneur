import Link from "next/link";
import Image from 'next/image';

export function Analysis({ analysis }) {
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
        <p className="p-1 text-2xl ">{analysis.name}</p>
          <span className="p-1 text-2xl">{analysis.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${analysis.href}`}>
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

export function Bot({ bot }) {
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
        <p className="p-1 text-2xl ">{bot.name}</p>
          <span className="p-1 text-2xl">{bot.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${bot.href}`}>
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

export function Bond({ bond }) {
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
        <p className="p-1 text-2xl ">{bond.name}</p>
          <span className="p-1 text-2xl">{bond.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${bond.href}`}>
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

export function FX({ fx }) {
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
        <p className="p-1 text-2xl ">{fx.name}</p>
          <span className="p-1 text-2xl">{fx.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${fx.href}`}>
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

export function Cryptocurrency({ cryptocurrency }) {
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
        <p className="p-1 text-2xl ">{cryptocurrency.name}</p>
          <span className="p-1 text-2xl">{cryptocurrency.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${cryptocurrency.href}`}>
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

export function Option({ option }) {
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
        <p className="p-1 text-2xl ">{option.name}</p>
          <span className="p-1 text-2xl">{option.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${option.href}`}>
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

export function Engel({ engel }) {
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
        <p className="p-1 text-2xl ">{engel.name}</p>
          <span className="p-1 text-2xl">{engel.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${engel.href}`}>
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

export function Mind({ mind }) {
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
        <p className="p-1 text-2xl ">{mind.name}</p>
          <span className="p-1 text-2xl">{mind.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${mind.href}`}>
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

export function Stock({ stock }) {
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
        <p className="p-1 text-2xl ">{stock.name}</p>
          <span className="p-1 text-2xl">{stock.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${stock.href}`}>
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