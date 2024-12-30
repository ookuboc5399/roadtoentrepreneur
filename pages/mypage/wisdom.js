import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Mypage from '../../components/layout/mypage/mypage';


export default function Home() {
  return (
    <Mypage>
      <div className="text-3xl p-8">
        <h1 className="p-8 text-center">投資・金融</h1>
        <div className="flex justify-between">
          <Link href="https://newspicks.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/newspicks.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black ease-in-out">Newspicks</p>
              </div>
            </div>
          </Link>
          <Link href="https://liberaluni.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/libe.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">リベ大</p>
              </div>
            </div>
          </Link>
          <Link href="https://real-int.jp/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/mypage/realinte.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">REALINTELLIGENCE</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-3xl">
        <h1 className="p-8 text-center">プログラミング・AI</h1>
        <div className="flex justify-between">
          <Link href="https://newspicks.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/VR Rev.2.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black　ease-in-out ">Newspicks</p>
              </div>
            </div>
          </Link>
          <Link href="https://liberaluni.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/libe.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">リベ大</p>
              </div>
            </div>
          </Link>
          <Link href="https://newspicks.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/newspicks.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">リベ大</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-3xl">
        <h1 className="p-8 text-center">生活</h1>
        <div className="flex justify-between">
          <Link href="https://daigovideolab.jp/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/dlab.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black　ease-in-out ">Dラボ</p>
              </div>
            </div>
          </Link>
          <Link href="https://liberaluni.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/libe.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">リベ大</p>
              </div>
            </div>
          </Link>
          <Link href="https://newspicks.com/">
            <div className="ring-4 bg-white m-4">
              <Image
                className="object-contain"
                src="/images/newspicks.png"
                alt="top"
                width={400}
                height={200}
              />
              <div className="">
                <p className="absolute text-center translate-y-1 transition-all bg-yellow-400 font-bold text-black">リベ大</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Mypage>




  )
}
