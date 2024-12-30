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

          <ChapterEntrepreneurship />



        </div>
        <div className="w-3/4">
          <div className="text-3xl m-4 text-center">
            ベンチャー事業の4つのステージ
          </div>
          <div className="flex">
            <div class="p-4 m-4 bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 w-1/2">
              <h5 class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              ステージ1
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">幼児期-年商ゼロから100万ドル</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">問題点：自分が何をしているのかよくわかっていない</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主な課題：販売による利益を始めて出す</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主なチャンス：最低限のクリティカルマスの顧客数を獲得する</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="p-4 m-4 bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 w-1/2">
              <h5 class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              ステージ2
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">少年期-年商100万ドルから1000万ドル</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">問題点：収支がとんとんである。もしくは損失を出している</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主な課題：利益の出せる新たな商品を迅速に作り出す</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主なチャンス：キャッシュフローを増やし、利益を出し始める</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div class="p-4 m-4 bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 w-1/2">
              <h5 class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              ステージ3
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">青年期-年商1000万ドルから5000万ドル</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">問題点：システムに無理が生じ顧客もそれに気づいている</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主な課題：混乱状態を整理し秩序を取り戻す</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主なチャンス：有用なガイドラインの確立方法とプロセスや手順の管理の仕方を学ぶ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="p-4 m-4 bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 w-1/2">
              <h5 class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              ステージ4
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">成人期-年商5000万ドルから1億ドル以上</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">問題点：販売が減速する、もしくは完全に行き詰まる</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主な課題：設立当初のベンチャー的な企業に戻る</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 whitespace-nowrap">主なチャンス：何もしなくても事業が回るようにする</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}