import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Value } from '../../../../components/layout/invester/invester';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "value_detail" ? (
          <Value>
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
                    バリュー株投資は会社が保有する現金や不動産、有価証券といった現時点で企業が保有する資産を評価して投資します<br />
                    長期的な投資につ曲げるには自己資本比率から健全性を推し量るべきです
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
          </Value>
        ) : id == "netnet" ? (
          <Value>
            <div className="bg-gray-200">
              <div className="text-center text-2xl m-4">
                ネットネット指数
              </div>
              <p>ネットネット指数=時価総額÷(換金性が高い流動資産-総負債)</p>
              <p>0.66未満は超割安</p>
              <p>換金性が高い流動資産=現金及び預金+受取手形及び売掛金+有価証券+投資有価証券-貸倒引当金</p>
              <p>現金及び預金はキャッシュかキャッシュに近いもの。</p>
              <p>受取手形とは販売した商品に対する代金をもらう権利を手形として保有しているもの。手形として保有していないものは売掛金</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <p>投資有価証券は満期が1年を超過する無満期保有目的証券、子会社株式・関連会社株式、その他有価証券などがあります</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <div className="text-center text-2xl m-4">
                ネットネット株 昭栄薬品(東証ジャスダック　3537)
              </div>
              <p>換金性が高い流動資産は約132億円、総負債は約67億円</p>
              <p>時価総額はおよそ33億円(2020/10/22)。ネットネット指数は0.50</p>
              <p>超優良企業で景気の動向に左右されにくい花王の株式を694910株保有している</p>
              <div className='flex justify-center'>
                <Image
                  src="/images/annual_securities/shoei.png"
                  alt=""
                  width={800}
                  height={1600}
                />
              </div>
              <div className="text-center text-2xl m-4">
                ネットネット株 岩塚製菓(東証ジャスダック　2221)
              </div>
              <p>新潟県長岡市に本社を置く米菓メーカーで「味しらべ」、「田舎のおかき」といったロングセラー商品がある</p>
              <p>換金性が高い流動資産は約572億円、総負債は約176億円</p>
              <p>時価総額はおよそ221億円(2020/10/22)。ネットネット指数は0.55</p>
              <p>岩塚製菓の中で大半を占めているのはワンワンチャイナホールディングスという香港証券取引所に上場している株式</p>
              <p>ワンワンチャイナは中国・上海に本社を置くスナック菓子や飲料のメーカーですが岩塚製菓が技術指導をしたことからワンワンチャイナの株式の約5%(6億843万4480株)を所有している</p>
              <p>ワンワンチャイナは4%と高配当を続けており岩塚製菓はその配当だけでも年間20億円ほどを得ている</p>
              <div className='flex justify-center'>
                <Image
                  src="/images/annual_securities/iwatuka.png"
                  alt=""
                  width={800}
                  height={1600}
                />
              </div>
              <div className="text-center text-2xl m-4">
                ネットネット株 丸八ホールディングス(名証二部　3504)
              </div>
              <p>換金性が高い流動資産は約374億円、総負債は約146億円</p>
              <p>時価総額はおよそ114億円(2020/10/22)。ネットネット指数は0.50</p>
              <p>丸八HDで際立つのは「現金及び預金」の多さ。時価総額の約2倍以上の287億円を保有している</p>
              <p>また、約140億円の賃貸用不動産も保有している。</p>
              <p>ワンワンチャイナは4%と高配当を続けており岩塚製菓はその配当だけでも年間20億円ほどを得ている</p>
              <div className='flex justify-center'>
                <Image
                  src="/images/annual_securities/maruhachi.png"
                  alt=""
                  width={800}
                  height={1600}
                />
              </div>
            </div>
          </Value>
        ) : id == "business_recovery" ? (
          <Value>
            <div className="bg-gray-200">


              <div className="text-center text-2xl m-4">
                業績回復株
              </div>
              <p>業績回復株とは赤字やそれに近い状態から業績が回復する可能性のある企業の株です。</p>
              <p>現状は業績不振でも経営や事業モデルを抜本的に変えたり新たな事業や商品を作り出すことによって業績の向上が期待できる会社があります</p>
              <p>換金性が高い流動資産=現金及び預金+受取手形及び売掛金+有価証券+投資有価証券-貸倒引当金</p>
              <p>現金及び預金はキャッシュかキャッシュに近いもの。</p>
              <p>受取手形とは販売した商品に対する代金をもらう権利を手形として保有しているもの。手形として保有していないものは売掛金</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <p>投資有価証券は満期が1年を超過する無満期保有目的証券、子会社株式・関連会社株式、その他有価証券などがあります</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <p>有価証券にはおもに売買目的有価証券、満期が1年以内に到来する無満期保有目的証券などがあります</p>
              <div className="block">
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">テセック</h1>
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
                        半年で4バガーを達成した優良株
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
                      ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">和井田製作所</h1>
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
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_construction/stock_detail_brand_construction_libwork">
                          詳しく見る
                        </Link>
                      </button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block">
                  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">日本製鉄</h1>
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
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_steel/stock_detail_brand_steel_japan">
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
          </Value>
        ) : id == "assets" ? (
          <Value>
            <div className="bg-gray-200">

              純資産にはおもに「現金及び預金」「有価証券」「賃貸用不動産や土地」<br />

              <div className="text-center text-2xl m-4">
                現金及び預金
              </div>
              <p>企業が所有している現金や銀行に預けている預金。定期預金の場合、貸借対照表では「投資などその他」に計上されている</p>
              <p>現金及び預金が「総負債」より多ければ不況や外部環境の変化にも強く、資金的に余裕があると評価できます</p>
              <div className="text-center text-2xl m-4">
                有価証券
              </div>
              <p>有価証券とは株式、国債、社債等を指しますがここでは株式を主とする投資有価証券をメインにしています</p>
              <p>投資有価証券には「上場株」と「非上場株」があり、中でも注目したいのは上場株。とくに自社の時価総額以上の株式を持っていたらその銘柄は資産バリュー株投資の対象となります。</p>
              <p>昭栄薬品は花王の株式を約69万株所有しています。昭栄薬品の時価総額は保有する花王の評価額よりも割安のため花王の株式を直接買うのではなく昭栄薬品の株式を買った方がお得</p>
              <div className="text-center text-2xl m-4">
                賃貸用不動産や土地
              </div>
              <p>不動産業を営んでいなくても遊休地の活用や会社全体の収益向上のために賃貸用不動産を所有している企業があります。</p>
              <p>なかでも一等地で「簿価」が安く、含み益が乗った不動産を持っている場合その銘柄はお宝銘柄の可能性があります。</p>
              <p>簿価とは「帳簿価格」の略で購入した時の値段で計上されています</p>
              <p>設立が古い会社は低い簿価のままになっている土地を持っている可能性もあるため調査してみる価値があります</p>




            </div>
          </Value>
        ) : id == "excellent" ? (
          <Value>
            <div className="text-center w-3/4">
              <div className="text-3xl m-4">
                優良株
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>はじめに</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    優良株とは稼ぐ力の強い企業の株です。
                    利益率を重視
                    他社に真似のできない技術を持っている企業はその分野でライバルがいないオンリーワンの存在
                    価格競争に巻き込まれる可能性が小さく、安売りする必要がないため安定的に利益を確保できます
                    また、業界でトップシェアを持つ企業やニッチな市場を独占している企業も安定的に稼ぐことができます。
                  </p>
                </div>

              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>オンリーワン企業</div>
              <div className=' text-center block' >
                <p className='text-left inline-block'>
                  他社に真似できない技術を持っていたり特異性のある商品やサービスを持っている企業は市場にライバルがいません。
                  これは経営の安定材料です。
                  ライバルがいなければ価格競争も起きません。
                </p>
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>グローバルニッチトップ</div>
              <div className=' text-center block' >
                <p className='text-left inline-block'>
                  グローバルニッチトップとは世界で通用する競争力を持つ企業です
                  実はグローバルニッチの領域でトップ群に入る企業は数多くあります。

                </p>
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>世界トップ</div>
              <div className=' text-center block' >
                <p className='text-left inline-block'>
                  特定の市場において売上やシェアがトップの企業のことです。
                </p>
              </div>
              <div className="block">
                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2">
                  <div class="">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">ニッポン高度紙工業</h1>
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
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_pulp/stock_detail_brand_pulp">
                          詳しく見る
                        </Link>
                      </button>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      ドラえもんの翻訳こんにゃくを実現したという「ポケトーク」。PC用低価格ソフトが主力でウイルス対策はシェア上位。
                    </p>
                  </div>
                </main>

                <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2">
                  <div class="">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">東京応化工業</h1>
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
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 ">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                        <Link href="/invester/stock/japan/stock_detail_brand_construction/stock_detail_brand_construction_libwork">
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
          </Value>
        ) : id == "buffet" ? (
          <Value>
            <div className="text-center w-3/4">
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>保険事業</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    ガイコ、メドプロ
                    商品が陳腐化することはなく、販売量は経済成長とインフレの両方に伴っておおむね増加する
                  </p>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>アップル</div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>バーリントン・ノーザン・サンタフェ</div>
                <p className='text-left inline-block'>
                  経済における大動脈であり、アメリカにとって必要不可欠な産業である
                </p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>バークシャー・ハサウェイ・エネルギー</div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>アップル</div>
              </div>

              <div id="accordion-open" data-accordion="open">
                <h2 id="accordion-open-heading-1">
                  <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What is Flowbite?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-open-body-1" class="" aria-labelledby="accordion-open-heading-1">
                  <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-black dark:text-blue-400">
                      まずまずの企業を素晴らしい価格で買うよりも素晴らしい企業をまずまずの価格で買うことのほうがはるかによい</p>
                    <p>あなたのデータとそれに基づく判断が正しければあなたは正しいのである</p>
                    <p>圧倒的なブランド力は強い競争力を生み、長期的な成功をもたらしてくれる</p>
                    <p>企業が成長し続けるためには優れた経営力や強い営業力、卓越した研究開発力</p>
                    <p>自分にとっての詳しい分野があり、その業界の企業について正しい判断ができるなら、その能力の輪の中で投資を行い、自分がよくわからない分野に関してはいくら人気があっても安易に手を出さない</p>
                    <p></p>
                    <p>大切なのは事業そのものの素晴らしさであり、強いブランド力と長期的な競争力を備えていれば例えときに愚かな経営者が現れても乗り切ることができる</p>
                  </div>
                </div>
                <h2 id="accordion-open-heading-2">
                  <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                    <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Is there a Figma file available?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
                  <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                    消費者にとって生活に欠かせず、かつ独占的に利益が得られる企業に投資をする</p>
                    <p>1990年代のIBMはコンピューターの製造事業においては圧倒的な競争優位な状況にあった。</p>
                    <p>しかし、OS事業という新事業に手を出したことでライバルが現れ、競争優位性を失ってしまった。</p>
                    <p>アメリカは鉄道とともに発展した国ですが、鉄道建設の大半はイギリスの投資によって建設されたもの</p>
                    <p>第一次世界大戦前はイギリスはアメリカに対する圧倒的な債権国でしたが大戦後にはアメリカがイギリスに対して圧倒的な債権国となっていた</p>
                    <p></p>
                  </div>
                </div>
                <h2 id="accordion-open-heading-3">
                  <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                    <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What are the differences between Flowbite and Tailwind UI?</span>
                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </h2>
                <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
                  <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </Value>
        ) : (
          <></>
        )}
    </div>
  )
}
export default Post
