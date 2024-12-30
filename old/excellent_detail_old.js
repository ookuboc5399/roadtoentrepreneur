import Layout from '../../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../../components/header/header_invester';
import LinePlotetfjapan from '../../../../components/LinePlot_etf_japan';
import Barchartetf from '../../../../components/Barchart_etf';
import ChapterExcellent from '../../../../components/chapter/stock/excellent/chapter_excellent';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">

        <div className="w-1/4">

          <ChapterExcellent/>
        </div>
        <div className="text-center w-3/4">
          <div className="text-3xl m-4">
            老舗株
          </div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>はじめに</div>
            <div className=' text-center block' >
              <p className='text-left inline-block'>
                老舗株とは創業や設立から100年以上経っている長寿企業の株です。
                このタイプは時代や世の中の変化に適応する力と数々の危機を乗り越えてきた実績があるため資産運用の手段として長く株を持ちたい人に向いています。
                他社に真似のできない技術を持っている企業はその分野でライバルがいないオンリーワンの存在
                価格競争に巻き込まれる可能性が小さく、安売りする必要がないため安定的に利益を確保できます
                また、業界でトップシェアを持つ企業やニッチな市場を独占している企業も安定的に稼ぐことができます。
              </p>
            </div>

          </div>
          <div className="text-center text-2xl m-4">
            安定高配当株
          </div>
          <div className="block">
          <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
            <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ソースネクスト</h1>
                <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
              </div>
              <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt class="sr-only">Reviews</dt>
                <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                  <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
                </dd>
                <dt class="sr-only">Location</dt>
                <dd class="flex items-center">
                  <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  Collingwood, Ontario
                </dd>
              </dl>
              <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
              </div>
              <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
              </p>
            </div>
          </main>
        
          <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
            <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ソースネクスト</h1>
                <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
              </div>
              <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt class="sr-only">Reviews</dt>
                <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                  <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
                </dd>
                <dt class="sr-only">Location</dt>
                <dd class="flex items-center">
                  <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  Collingwood, Ontario
                </dd>
              </dl>
              <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
              </div>
              <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
              </p>
            </div>
          </main>
          </div>
        </div>

      </div>
    </div >

  )
}