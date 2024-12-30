import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dividend } from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "market200_detail" ? (
          <Dividend>
            <div className="text-center w-3/4">
              <div className="text-3xl m-4">
                ETFとは
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>はじめに</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    北の達人は2017年に株価上昇率1025.2%とテンバガー<br />

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
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">LibWork</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>210億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        21年6月期94億円、22年6月期(予想)145億円、23年6月期(予想)160億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_construction/stock_detail_brand_construction_libwork">
                          詳しく見る
                        </Link>
                      </button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      インターネットによる住宅販売の先駆け
                    </p>
                  </div>
                </main>
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ホットリンク</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>87億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        20年12月期43.9億円、21年12月期(予想)58億円、22年12月期(予想)75億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_construction/stock_detail_brand_construction_libwork">
                          詳しく見る
                        </Link>
                      </button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      SNSマーケティングの流行に乗れるか
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">カラダノート</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>86.9億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        20年7月期7.3億円、21年7月期(予想)10億円、22年7月期(予想)13億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      「感性銘柄」としての売り上げの伸びに注目
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">クリーマ</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>187億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        21年2月期20.6億円、22年2月期(予想)24.5億円、23年2月期(予想)31億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      奥さんが良いと言った株はテンバガーになる?
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">カラダノート</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>86.9億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        20年7月期7.3億円、21年7月期(予想)10億円、22年7月期(予想)13億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      「感性銘柄」としての売り上げの伸びに注目
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">カラダノート</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>86.9億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        20年7月期7.3億円、21年7月期(予想)10億円、22年7月期(予想)13億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      「感性銘柄」としての売り上げの伸びに注目
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">カラダノート</h1>
                      <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400"></p>
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                      <dt class="sr-only">時価総額</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>86.9億円</span>
                      </dd>
                      <dt class="sr-only">売上高</dt>
                      <dd class="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        20年7月期7.3億円、21年7月期(予想)10億円、22年7月期(予想)13億円
                      </dd>
                    </dl>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      「感性銘柄」としての売り上げの伸びに注目
                    </p>
                  </div>
                </main>
              </div>
            </div>
          </Dividend>
        ) : id == "market200_detail_soaring" ? (
          <Dividend>
            <div className="w-3/4">
              <div className="text-3xl m-4">
                ETFとは
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>はじめに</div>
                <div className=' block' >
                  <p className='text-left inline-block'>
                    株価が大きく成長する企業には共通点がある<br />
                    <ul>
                      <li>小型株である</li>
                      <li>独自のビジネスモデルを持っている</li>
                      <li>時流に乗っている</li>
                      <li>利益が伸びている</li>
                    </ul>


                    利益が急増した年に株価も急騰する<br />
                    BASEは3月の大底からわずか5ヵ月で株価は12倍となった<br />
                    すららネット(3998)はオンライン学習教材や塾や学校、個人に提供するeラーニングが主力事業<br />
                    2020年3月13日に682円だった株価は同10月に9300円まで高騰し、約7ヵ月で株価は13倍以上になりました

                    創業者が社長の会社は株価が伸びる
                    創業者と投資家の利害は一致している
                  </p>
                </div>

              </div>
              <div className=''>
                <table class="table-auto border-2 border-green-400">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>エムティジェネックス</td>
                      <td>JASDAダード</td>
                      <td>2018/02/13 安値1921円</td>
                      <td>2018/02/13 高値45950円 </td>
                    </tr>
                    <tr>
                      <td>ALBERT</td>
                      <td>東証マザーズ</td>
                      <td>2018/02/06 安値1200円</td>
                      <td>2018/11/29 高値16730円</td>
                    </tr>
                    <tr>
                      <td>オウケイウェイブ</td>
                      <td>名証セントレックス</td>
                      <td>2018/01/04 安値600円</td>
                      <td>2018/05/07 高値8060円</td>
                    </tr>
                    <tr>
                      <td>地域新聞社</td>
                      <td>JASDAQグロース</td>
                      <td>2018/01/10 安値431円</td>
                      <td>2018/11/06 高値5000円</td>
                    </tr>
                    <tr>
                      <td>エクストリーム</td>
                      <td>東証マザーズ</td>
                      <td>2018/05/21 安値610.5円</td>
                      <td>2018/08/30 高値6290円</td>
                    </tr>
                    <tr>
                      <td>ジャストプランニング</td>
                      <td>JASDAQスタンダード</td>
                      <td>2018/01/30 安値301.6円</td>
                      <td>2018/07/20 高値2289.9円</td>
                    </tr>
                    <tr>
                      <td>ブレインパッド</td>
                      <td>東証1部</td>
                      <td>2018/01/04 安値326円</td>
                      <td>2018/10/04 高値1954円</td>
                    </tr>
                    <tr>
                      <td>テリロジー</td>
                      <td>JASDAQスタンダード</td>
                      <td>2018/01/04 安値326円</td>
                      <td>2018/10/04 高値1954円</td>
                    </tr>
                    <tr>
                      <td>共同ピーアール</td>
                      <td>JASDAQスタンダード</td>
                      <td>2018/02/09 安値456.9円</td>
                      <td>2018/08/15 高値2448円</td>
                    </tr>
                    <tr>
                      <td>JMC</td>
                      <td>東証マザーズ</td>
                      <td>2018/02/06 安値484.5円</td>
                      <td>2018/10/01 高値2490円</td>
                    </tr>
                  </tbody>
                </table>

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
          </Dividend>
        ) : id == "market200_detail_policy" ? (
          <Dividend>
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                政策
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>
                  こども庁
                </div>
                <div className=' block' >
                  <p className='text-left inline-block'>
                    未就学児の教育帰還は幼稚園は文部科学省、保育園は厚生労働省、認定こども園は内閣府と管轄省庁がバラバラです<br />
                    給付金は児童手当が内閣府、子育て世帯への給付金が厚労省となっています<br />
                    これがこども庁に一括されれば手間がかからず政府もコストを削減できる<br />


                  </p>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ピジョン(7956)</h1>
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
                          わずか2年で利益8倍の独立系データセンター
                        </dd>
                      </dl>
                      <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                        <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                          <Link href="/invester/stock/japan/stock_detail_brand_others/stock_detail_brand_others_pigeon">
                            詳しく見る
                          </Link>
                        </button>
                      </div>
                      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
                      </p>
                    </div>
                  </main>
                </div>

              </div>

              <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                EV
              </div>
              <div className="block">
                <p className='text-left inline-block'>
                  日本では政府が2030年代半ばにガソリン車の販売を禁止することを目指しており、東京では2030年までに新車販売をすべてハイブリッド車(HV)や電気自動車(EV)にする方針を発表しました<br />

                  現在の主流であるリチウムイオン電池に続く次世代電池として「全固体電池」に開発に力を入れています<br />
                  小型の全固体電池はTDK(6762)、太陽誘電(6976)、村田製作所(6981)が量産化の準備を進めています
                </p>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">エクストリーム</h1>
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

                  </div>
                </main>
              </div>
            </div>
          </Dividend>
        ) : id == "next" ? (
          <Dividend>
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                次世代産業
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>
                  データセンター
                </div>
                <div className=' block' >
                  <p className='text-left inline-block'>
                    次世代の技術やテーマに関連して成長する小型株は時流に乗って大きく成長することができます<br />


                    企業が保有する機密情報や個人情報など各種のデータを会社の代わりに安全に保管、管理、運営やメンテナンス作業等を行うのがデータセンターです<br />

                  </p>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">さくらインターネット(3778)</h1>
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
                          わずか2年で利益8倍の独立系データセンター
                        </dd>
                      </dl>
                      <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                        <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                          <Link href="/invester/stock/japan/stock_detail_brand_telecommunications/stock_detail_brand_telecommunications_sakura">
                            詳しく見る
                          </Link>
                        </button>
                      </div>
                      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
                      </p>
                    </div>
                  </main>
                </div>

              </div>

              <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                DX(デジタルトランスフォーメーション)
              </div>
              <div className="block">
                <p className='text-left inline-block'>
                  DXとはITやデジタル技術を活用しビジネスを改革、業務効率化することです<br />

                  社の代わりのがデータセンターです<br />

                </p>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">エクストリーム</h1>
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

                  </div>
                </main>
              </div>
            </div>
          </Dividend>
        ) : id == "stock_detail_growth" ? (
          <Dividend>
            <div className="text-center w-3/4">
              <div className="text-3xl m-4">
                成長株
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>はじめに</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    成長株とは売り上げが急速に伸びる可能性を秘めている中小企業の株です。
                    企業が急成長すれば大きな値上がり益を得ることができます
                    現状はまだ会社や事業の規模が小さいかもしれません。しかし新たな技術や製品を開発したり、新技術を使った事業モデルを作り出すなどして
                    売上を伸ばしていく可能性のある企業です。政策や社会の価値観の変化などが追い風となり、商品やサービスの売り上げが爆発的に伸びることもあります。

                    2016年7月に306円の安値を付けた半導体検査装置メーカー・レーザーテックの株価は2021年8月に高値2万4160円まで上昇しました。<br />
                    5年間で約79倍<br />

                    決算の主要な情報を記した決算短信冒頭のサマリーだけで決算書は9割分かる。<br />

                    2019年6月　EUV(極端紫外線)に対応した半導体検査装置が同社の業績を躍進させる原動力となった<br />




                    クラウド型経理ソフト「楽楽精算」が主力のラクス<br />
                    中小企業経理部門のDXやアウトソーシング化に貢献しているテーマ性で注目されている<br />

                    ジャパンエレベーターサービスホールディングスはエレベーターのメンテナンスをメーカーに代わって行う製造サービスのアウトソーシング会社<br />
                    ニッチ分野の勝ち組企業はオンリーワン企業と呼ばれテンバガー株によくあるパターン<br />

                    チャーム・ケア・コーポレーションは介護付き老人ホームというストック型ビジネスを展開しており、有料老人ホームを拡大すればするほど売り上げも利益も伸びるビジネスモデル<br />

                  </p>
                </div>

              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>高学歴の新卒社員がいる</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    高学歴で優秀な学生の間で人気のあったベンチャー企業はほぼ例外なく上場して大きく株価を伸ばしている。<br />
                  </p>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>時価総額</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    時価総額が小さいほど何倍にもなる可能性があります。<br />
                  </p>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>成長率</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    成長率の高さは「増収率で判断します。」増収率は売上が前期と比べてどれくらい増加しているかを表します。<br />
                    増収率20%が4年続けば、4年後その会社の売り上げは約2倍になります。
                  </p>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>株主</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    オーナー企業であることも成長株の重要な条件です。<br />
                    オーナー企業は創業者や社長が会社を所有し経営権を持っているのが強みです。
                    経営の意思決定を自分でできるため時代の変化に迅速に対応できます
                  </p>
                </div>
              </div>

            </div>
          </Dividend>
        ) : id == "stock_detail_highdividend" ? (
          <Dividend>
            <div className="w-2/4">
              <div className="text-center text-3xl m-4">
                高配当株
              </div>
              <div className="">
                高配当株とは配当利回りが高い株式を指します。
                配当利回りとは、1株あたりの配当金を1株当たりの株価で割った値です
                <p></p>定期的な不労所得・キャッシュフローである配当金は手間がかかりません
                <p></p>配当金を出す株式を一度保有しさえすればその企業が企業活動を続け、利潤を生みだす限りその利潤が株主に還元されます
                <p></p>定期的に株式をひたすら購入していけば株数が増え、受取配当金も増えていきます。配当金を積み上げること自体の再現性は非常に高いです
                <p></p>配当金という不労所得が月々の生活費を上回れば経済的自由は達成されます
                <p></p>長期で何かに取り組む際には自分にとって心地よい仕組みづくりをすることが肝要だと思います。そしてその心地よい仕組みづくりとは目に見える形で配当金を積み上げていくことなのです
                <p></p>配当金という給与とは別の収入源・キャッシュフローがあるのとないのとでは人生の展望・考え方・生き方・心のありように至るまで大きく変わってきます
                <Image
                  src="/images/PXL.jpg"
                  alt="01:Pythonとは？"
                  width={600}
                  height={600}
                />
                <p></p>上のグラフは1980年1月～2020年2月におけるS&P500における配当再投資の有無によるトータルリターンの違いを示したものです。
                <p></p>S&P500とは主要上場市場が米国の取引所の米国企業のうち大型株から選ばれた500銘柄で構成された指数でアメリカの代表的な株価指数のことです
                <p></p>TOPIXの米国版だと思ってもらえればいいでしょう
                <p></p>配当を再投資せずに取り崩すとグラフの通り長期的にはリターンを損ないます
                <div className="text-xl">長期投資のメリット</div>
                <p></p>1966~2005年における投資期間ごとにリターンが最も良かった年のリターンとリターンが最も悪かった年のリターンのブレ幅を表しています
                <p></p>1年だけ投資した場合、都市によっては+72.1%のリターンを得られる年もあれば、-24.8%のリターンとなる年もありました
                <p></p>ところが投資期間が20年になると1年あたりのリターンは年によって+20.5%、リターンが最も悪くなる投資時期であっても4.4%のプラスとなりどの年であっても元本割れするケースがなくなった

                <div>
                  <p></p>  2016年7月に306円の安値を付けた半導体検査装置メーカー・レーザーテックの株価は2021年8月に高値2万4160円まで上昇しました。
                  <p></p>  5年間で約79倍

                  <p></p>  決算の主要な情報を記した決算短信冒頭のサマリーだけで決算書は9割分かる。

                  <p></p>  2019年6月　EUV(極端紫外線)に対応した半導体検査装置が同社の業績を躍進させる原動力となった


                  <p></p>  低価格の食材・PB商品を販売する「業務スーパー」の神戸物産
                  <p></p>   2019年のタピオカブームに乗って躍進したことで知られている。
                  <p></p>   2020年には新型コロナショックがあり、緊急事態宣言などで外食店が休業し自炊する人が増えたため業績はさらに伸長した。



                  <p></p>  ワークマンは建設職人向けの高機能な作業着を販売するアパレルメーカーでホームセンター「カインズ」なども展開するベイシアグループの中核企業
                  <p></p>  ワークマンプラスの貢献で2019年3月期から3年連続で約15%から35%の売上増、20%台から40%台に達する経常増益を続けた
                  <p></p>  同社は直営店が少なく、9割以上がフランチャイズ店


                  <p></p>  医師向けSNSサービスをWeb上で提供するエムスリー
                  <p></p>   ソニーグループが株式の34.0%を保有するソニー系企業
                  <p></p>  2021年3月期で売り上げの25%を占める海外事業

                  <p></p> IRジャパンホールディングスは上場企業の投資家向けIR活動やM&A・TOB対策を指南するコンサルタント会社
                  <p></p> コンサルタント業は利益率が高い、設備投資にお金がかからないが人材に依存する労働集約型のビジネスモデル

                  <p></p>  クラウド型経理ソフト「楽楽精算」が主力のラクス
                  <p></p>  中小企業経理部門のDXやアウトソーシング化に貢献しているテーマ性で注目されている

                  <p></p>  ジャパンエレベーターサービスホールディングスはエレベーターのメンテナンスをメーカーに代わって行う製造サービスのアウトソーシング会社
                  <p></p>ニッチ分野の勝ち組企業はオンリーワン企業と呼ばれテンバガー株によくあるパターン

                  <p></p>  チャーム・ケア・コーポレーションは介護付き老人ホームというストック型ビジネスを展開しており、有料老人ホームを拡大すればするほど売り上げも利益も伸びるビジネスモデル
                  <div className="text-3xl m-4">
                    米国高配当株
                  </div>
                  <p></p>年に1~2回配当の銘柄が多い日本株と比べて年間の配当の回数が多い
                  <p></p>年4回配当の銘柄が多い
                  <p></p>米国の過去30年のインフレ率の平均は年2.32%。過去30年でインフレ率がマイナスになった年は09年の1年のみ。
                  <p></p>あとはプラスを維持し年2%程度のインフレが続いている
                  <p></p>米国の社長の年収は平均10億~20億円。その9割以上が現金ではなく譲渡制限株式やストックオプションでまかなわれている
                  <p></p>経営者も従業員も報酬を株で受け取るから配当を上げることに積極的
                  <div className="text-center text-2xl m-4">
                    安定高配当株
                  </div>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ベライゾン・コミュニケーションズ</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">米国の携帯市場でシェア4割</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        米国の通信王手5Gで先行し、通信料収入の増加で2023年にかけて年率2~3%の増配を見込む。配当利回りも4.3%と高く、株価に割安感がある.
                      </p>
                    </div>
                  </main>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">コンソリデーテッド・エジソン</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">NY市に電力・ガスを供給</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        NY市に電力・ガス供給を行う。47年連続増配の安定配当株の代表格。インフレ連動で電力料金の値上げも続く見込みで、長期的には年率3~4%程度の配当成長が期待できる.
                      </p>
                    </div>
                  </main>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">メルク</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">世界トップ級のがん治療薬</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        1.5兆円もの売り上げがあるがん治療薬「キイトルーダ」はさまざまながんに適用が拡大。2024年には世界の売上高トップになる見通し
                        <p>また、バイオ製薬大手ギリアドとも提携しHIV薬市場にも参入。年5%の配当成長を見込む</p>
                      </p>

                    </div>
                  </main>
                  <div className="text-center text-2xl m-4">
                    配当成長率年7~10%以上株
                  </div>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ゼネラル・ダイナミクス</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">防衛事業が売上の8割</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        潜水艦や戦車などの防衛事業が売上の8割で、残りはビジネスジェット等の航空宇宙事業。
                      </p>
                    </div>
                  </main>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">アメリカン・タワー</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">電波塔や基地局をリース</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        電波塔や基地局をリースする世界有数の通信インフラのリート。5Gネットワーク需要は長期的に伸びる見通しでリース料も増加傾向
                        <p>また、買収により欧州や中南米そしてアフリカでも業容を拡大</p>
                      </p>
                    </div>
                  </main>
                  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ネクステラ・エナジー</h1>
                        <p class="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">太陽光や風力発電の電力会社</p>
                      </div>
                      <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <div className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
                        <div className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"'>
                          <Image
                            src="/images/PXL.jpg"
                            alt="01:Pythonとは？"
                            width={600}
                            height={600}
                          />
                        </div>
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
                        太陽光と風力発電で米国最大手の電力会社。
                        <p>バイデン政権による脱炭素に向けた政策で株価が2020年3割ほど上昇</p>
                      </p>

                    </div>
                  </main>
                </div>
              </div>
            </div>
          </Dividend>
        ) : id == "stock_detail_ipo" ? (
          <Dividend>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                IPOとは「新規上場」「新規株式公開」といわれます。
                創業したばかりの会社は創業社長などごく少数によって株式が保有されていますが、未上場だと株式市場で取引できないため一般に株式が出回りません。
                しかし会社が順調に業績を伸ばしてIPOをするとその会社の株式は証券取引所の市場で取引できるようになり、個人投資家でも売買できるようになる。

                IPOのメリット
                ・資金調達の幅が広がる
                IPOをすると株式市場から直接必要な資金を調達できるようになる
                ・会社の信用度が高まる
                IPOにあたって証券取引所、IPOを支援・指導する証券会社、監査法人などによって厳しく審査されるため信用度が高まります。
                ・会社の知名度が高まる
                株式を公開すると一般投資家がその会社のことを知る機会が増えます。

                IPO銘柄への投資が儲かりやすいのは上場日以降の株価がブックビルディングによって決定した株価よりも高くなることがほとんどだから

                IPOブックビルディングおすすめ3社
                ・マネックス証券
                ブックビルディングの配分を資産や取引状況に関係なく平等に抽選する完全平等制なので個人投資家に有利
                ・SBI証券
                ネット専業証券会社としてダントツ1位の口座数を誇るため人気が高すぎて現在はブックビルディングでなかなか当選しない状況が続いている。
                しかし、外れるたびにIPOチャレンジポイントが加算されるので、そのぶん当選確率が高まる
                ・野村証券
                国内IPOの引受実績で高い占有率であり、オンライン抽選では完全平等制をとっている

                ブックビルディングへの応募はローリスク・ハイリターン

                IPOのセカンダリー投資は上場前後は人気を集めていたIPO銘柄が上場してからしばらくたって人気が下火になり株価が割安になったタイミングでコツコツ拾っていく投資法
                IPOセカンダリー投資で避けたいのはIPO後に株価が下がり続ける「上場ゴール」銘柄を反転を期待して買ってしまうこと


                東証1部・2部のIPO銘柄は初値こそ安いもののしばらくすると株価が右肩上がりになるケースが多い。
              </div>

            </div>

            <div className="w-1/4">

            </div>
          </Dividend>
        ) : id == "stock_detail_longdividend" ? (
          <Dividend>
            <div className="w-2/4 ml-4">
              <div className="text-3xl m-4 text-center ">
                チャートパターン
              </div>
              <div>
                長期配当投資において重要なことは減配可能性の低い銘柄への投資かつ業績が堅調で着実に稼いでいるか確認する必要があります。
                <p>ここで活躍するのが1株利益(EPS)です</p>
                <p>EPSが増加傾向にあればビジネスは順調であることが読み取れ、逆に減少傾向にあればビジネスに問題を抱えている可能性がある</p>
              </div>
              <div className="text-3xl m-4 text-center">
                ドルコスト平均法
              </div>
              <div>
                <p>一定期間ごとに決まった金額を投資し続ける手法をドルコスト平均法と呼んでいます。</p>
                <p>たとえば毎月1万円投資すると決めてNTT株を買うことにします。</p>
                <p>仮にNTT株が1株3000円だとしたならば1万円で買える株数は3.33株となります</p>
                <p>翌月になりNTT株が2000円に下落しました。すると1万円で買える株数は5株になります。</p>
                <p>翌々月になり株価が上昇して4000円になったとすると2.5株しか買えません。</p>
                <p>最初の月に3ヵ月分の3万円を一括投資していれば買える株数は10株でしたがドルコスト平均法を用いて3ヵ月積み立て投資した場合の株数は10.83株</p>
                <p>同じ3万円の投資でも8.3%も株数が増えたわけです。</p>
              </div>
              <div className='border-collapse justify-center flex mb-4'>
                <table className='border-collapse'>
                  <tr>
                    <th></th> <th>1ヵ月目</th><th>2ヵ月目</th><th>3ヵ月目</th><th>平均</th>
                  </tr>
                  <tr>
                    <th>投資した時の株価</th> <td>3000円</td> <td>2000円</td><td>4000円</td><td>5000円</td>
                  </tr>
                  <tr>
                    <th>毎月1万円投資した時の株価</th> <td>3.33</td> <td>5</td><td>2.5</td><td>10.83</td>
                  </tr>
                  <tr>
                    <th>最初に一括投資した時の株数</th> <td>10</td> <td></td><td></td><td>10</td>
                  </tr>
                </table>
              </div>
              <div>
                <p>しかし、株価が最初に投資した金額から下落することなく上昇し続けた場合はドルコスト平均法よりも一括投資の方がリターンは高くなります。</p>
                <p>1回目に投資した時の株価が3000円、2回目の株価が3500円、3回目の株価が4000円とすると毎月1万円ずつ株を買った際の株数は3.33株+2.86株+2.5株=8.69株</p>
                <p>13.1%も少ない株数となってしまいます。</p>
                <p>株価の下落局面においてはドルコスト平均法が有利となり、上昇局面においては一括投資が有利ということです。</p>
              </div>
              <div className='border-collapse justify-center flex mb-4'>
                <table className='border-collapse'>
                  <tr>
                    <th></th> <th>1ヵ月目</th><th>2ヵ月目</th><th>3ヵ月目</th><th>平均</th>
                  </tr>
                  <tr>
                    <th>投資した時の株価</th> <td>3000円</td> <td>3500円</td><td>4000円</td><td>3500円</td>
                  </tr>
                  <tr>
                    <th>毎月1万円投資した時の株価</th> <td>3.33</td> <td>2.86</td><td>2.5</td><td>8.69</td>
                  </tr>
                  <tr>
                    <th>最初に一括投資した時の株数</th> <td>10</td> <td></td><td></td><td>10</td>
                  </tr>
                </table>
              </div>
            </div>
          </Dividend>
        ) : id == "stock_detail_dividend_increase" ? (
          <Dividend>
            <div className="w-2/4">
              <div className="text-center text-3xl m-4">
                連続増配株
              </div>
              <div className="flex m-4">
                増配していく傾向を持った企業は花王、ユニ・チャーム、ライオン等のトイレタリーセクターやKDDIやNTT等の通信セクター、芙蓉総合リース、リコーリース、みずほリース等のリースセクターに多くみられます。
              </div>
            </div>
            <div className="text-center w-1/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className='border-collapse justify-center flex'>
                <table className='border-collapse'>
                  <tr>
                    <th></th> <th>銘柄</th><th>連続増配</th>
                  </tr>
                  <tr>
                    <th>1位</th> <td>花王</td> <td>31年</td>
                  </tr>
                  <tr>
                    <th>2位</th> <td>リコーリース</td> <td>26年</td>
                  </tr>
                  <tr>
                    <th>3位</th> <td>SPK</td> <td>23年</td>
                  </tr>
                  <tr>
                    <th >4位</th> <td>三菱HCキャピタル</td> <td>22年</td>
                  </tr>
                  <tr>
                    <th className='row-span-2'>4位</th> <td>小林製薬</td> <td>22年</td>
                  </tr>
                  <tr>
                    <th>6位</th> <td>ユー・エス・エス</td> <td>21年</td>
                  </tr>
                  <tr>
                    <th>7位</th> <td>トランコム</td> <td>20年</td>
                  </tr>
                  <tr>
                    <th>7位</th> <td>プラネット</td> <td>20年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>KDDI</td> <td>19年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>沖縄セルラー電話</td> <td>19年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>リンナイ</td> <td>19年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>ユニ・チャーム</td> <td>19年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>芙蓉総合リース</td> <td>19年</td>
                  </tr>
                  <tr>
                    <th>位</th> <td>東京センチュリーリース</td> <td>19年</td>
                  </tr>
                </table>
              </div>
              <div className="justify-center">

              </div>
            </div>
          </Dividend>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

