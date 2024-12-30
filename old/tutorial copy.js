import Link from "next/link";
import Image from 'next/image';

export default function Tutorial({ tutorial }) {
  return (
        <div className="">
          <div className="text-center my-4">
            <div className="flex m-4 w-full">
              <div className="flex bg-white">
                <div className="bg-green-300 h-full items-center content-center">
                  <Image
                    src="/svg/20.svg"
                    alt="01:Pythonとは？"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="m-4">
                  <span className="p-4 text-2xl">{tutorial.title}</span>
                  <div>
                    <div className="float-right mt-4">
                      <div className="text-green-300">
                        <Link href={`${tutorial.href}`}>
                          <div>
                            <button className="w-36 bg-white text-green-300">
                              レッスン詳細へ
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}




