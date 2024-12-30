import Layout from '../../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../../components/header/header_invester';
import ChapterEntrepreneurship from '../../../../components/chapter/startup/chapter_startup_entrepreneurship';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">
        <div className="w-1/4">
          
<ChapterEntrepreneurship/>



        </div>
        <div className="w-2/4">
          <div className="text-3xl m-4">
          
          </div>
          <div className="justify-center">
            <p></p>


            <p></p>素晴らしいキャリアを築くには自分が満足できる仕事、快適な仕事環境、そして目標の達成を可能にしてくれる同僚を選ばなくてはならない
            <p></p>「いつ」「どこで」「何の」仕事をするかを決めるにあたって「誰と」働くかという選択も非常に大事になってくる。素晴らしく優秀な人たちに囲まれて仕事をすれば
            <p></p>事業の各成長過程で生じる壁や障害をより簡単に乗り越えられるようになるからだ
            <p></p>有能な人は会社に大きな違いをもたらす
「適切な人々をバスに乗せ、不適切な人をバスから降ろせばどこか素晴らしい場所へ行く方法が見つかる」






          </div>

        </div>

        <div className="w-1/4">

        </div>
      </div>
    </div>

  )
}