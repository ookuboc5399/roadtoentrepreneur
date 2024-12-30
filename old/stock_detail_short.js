import Layout from '../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../components/header/header_invester';
import ChapterStock from '../../../components/chapter/stock/stock/chapter_stock_detail';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterStock />
        </div>
        <div className="text-center w-2/4">
          <div className="text-3xl m-4">
            チャートパターン
          </div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            株は1株から買えるわけではなく、最低の単位が決まっています。
            「単元株数」を確認してみましょう。
たとえば1株494円で単元株が100株になっている場合、4万9400円+手数料が購入に必要な金額です
株を購入する資金が足りない場合は「単元未満株」といった商品もあります。
これは単元株数の10分の1などで購入できる商品でSBI証券、マネックス証券などで取り扱いがあります。
例えば単元株100株で1株4000円の場合は40万円が必要になりますが、それを「ミニ株」で買うとすると10株から買えるため必要な資金は4万円で済みます。
          </div>

        </div>

        <div className="w-1/4">

        </div>
      </div>
    </div>

  )
}