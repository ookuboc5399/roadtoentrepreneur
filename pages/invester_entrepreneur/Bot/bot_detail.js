import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../components/header/header_invester';
import Chapterbot from '../../../components/chapter/bot/chapter_bot_detail';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">
        <Chapterbot />
      </div>
      <div className="">
        <div>
          <p>売買を行うための条件をあらかじめ決めておいて機械的に売買を判断するトレード</p>
          <p>人の感情に左右されないため売買ルールがブレないメリットがある</p>
          <p> 他にもFXは週末の土日を除いた5日間、24時間連続して取引を行うことができる</p>
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ファイル形式</div>
          <p>拡張子が.mq4のファイルはソースファイルを意味する。.mq4ファイルをコンパイルすると.ex4ファイルが作成されこれが実行ファイルでありメタトレーダー上で実行されるファイルである。</p>
          <p>拡張子が.mqhのファイルはインクルードファイル</p>
          <p>コンパイラーがソースコードをコンパイルするときには.mqhファイルの内容を.ex4ファイルのなかにインクルードする</p>
          <p>拡張子が.mqtのファイルはテンプレートファイルを意味する</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>

      </div>
    </div>

  )
}