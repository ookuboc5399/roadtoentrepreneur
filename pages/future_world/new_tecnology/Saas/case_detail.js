import Layout from '../../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_futureworld from '../../../../components/header/header_future_world';
import Chaptermaas from '../../../../components/chapter/future_world/new_technology/Saas/chapter_maas_detail';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_futureworld/>
      <div className="flex ">
        <div className="w-1/4">
        <Chaptermaas/>

        </div>
        <div className="text-center w-2/4">
          <div className="text-3xl m-4">
          
          </div>
          <div className="justify-center">
            <p></p>
            <p></p>
            <p></p>
            <p>最初のCはインターネットでクルマを外部につなぐconnectedのC。続いてAは自動運転を意味するautonomousのA。Sはみんなで共有するシェアリング中心に多様なサービスを意味するShared&Services。最後のEは電気を意味するElectric</p>
            <p>2016年に閣議決定された「第五期科学技術基本計画」では「超スマート社会」の実現が目標とされた。</p>
            <p>超スマート社会としてSociety 5.0</p>
            <p>必要なもの・サービスを必要な人に必要な時に必要なだけ提供し、社会の様々なニーズにきめ細かに対応でき、あらゆる人が質の高いサービスを受けられ、年齢、性別、地域、言語といった様々な違いを乗り越え、活き活きと快適に暮らすことのできる社会</p>
            <p>IoTですべての人とモノがつながり、一般に「人口知能」であるAIにより必要な情報が必要な時に提供されるようになる。</p>
            <p>政府は第五期の研究開発への投資額をITやソフトウェア関連の技術開発を中心に5年間で26兆円と見込んでいる</p>
          </div>

        </div>

        <div className="w-1/4">

        </div>
      </div>
    </div>

  )
}