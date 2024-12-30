import React from 'react';
import Image from 'next/image';
import Header_invester from '../../../../components/header/header';
import {LinePlot_revenue, LinePlot_investingcf,LinePlot_operatingcf,LinePlot_pretaxmargin,LinePlot_totalassets,LinePlot_capitalratio} from '../../../../components/chart/LinePlot';
import { useRouter } from "next/router";



export default function StockData({ stock }) {

  const router = useRouter();
  const { id } = router.query

  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">
        <div className="w-full mx-10">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <div class="flex justify-between -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <div class="mr-2 text-xl">
                <FontAwesomeIcon icon={faBuilding} />
                <a href="#" className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">企業概要</a>
              </div>
              <div class="mr-2 text-xl">
                <FontAwesomeIcon icon={faHundredPoints} />
                <a href="#" className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">業績</a>
              </div>
              <div class="mr-2 text-xl">
                <FontAwesomeIcon icon={faUserVneck} />
                <a href="#" className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">大株主</a>
              </div>
              <div class="mr-2 text-xl">
                <FontAwesomeIcon icon={faMemo} />
                <a href="#" className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group">IR資料</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="inline-block text-3xl">
              {/* {stock.title} */}
            </div>
            {/* <div className='inline-block'>
              <img alt="post" className="object-cover" src={stock.image} width={144} height={144}/>
            </div> */}
          </div>
          <div className='flex'>
            <div className="w-3/4 m-4">

              <div className="justify-center leading-loose text-xl m-4">
                {/* {stock.content} */}
              </div>
            </div>
            <div class="w-1/4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
              <div className='flex items-center justify-center'>
                <div>
                  <Image
                    src="/images/buffett.png"
                    alt=""
                    width={144}
                    height={144}
                  />
                </div>
                <div class="p-5">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">バフェットコード</h5>
                  <a href="https://www.buffett-code.com/company/9437/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    サイトへ
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
      <div className="text-center">
        <div className="text-3xl m-4">
          企業分析
        </div>
        <div className="">
          <div className='flex m-8 justify-center'>
            <div className='m-8'>
              <LinePlot_revenue />
              <div className='flex items-center justify-between mt-8'>
                <div>
                  <FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />
                </div>
                <div>
                  <p className='text-xl'>前期から</p>
                  <p className='text-3xl font-bold'>7.4%</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUp} size="5x" />
                </div>
              </div>
            </div>
            <div className='m-8'>
              <LinePlot_pretaxmargin />
              <div>
                <div className='flex items-center justify-between mt-8'>
                  <div>
                    <FontAwesomeIcon icon={faRankingStar} size="5x" style={{ color: 'red' }} />
                  </div>
                  <div>
                    <p className='text-xl'>前期から</p>
                    <p className='text-3xl font-bold'>7.4%</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUp} size="5x" />
                  </div>
                </div>
              </div>
            </div>
            <div className='m-8'>
              <LinePlot_totalassets />
              <div>
                <div className='flex items-center justify-between mt-8'>
                  <div>
                    <FontAwesomeIcon icon={faRankingStar} size="5x" style={{ color: 'red' }} />
                  </div>
                  <div>
                    <p className='text-xl'>前期から</p>
                    <p className='text-3xl font-bold'>7.4%</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUp} size="5x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex m-8 justify-center'>
            <div className='m-8'>
              <LinePlot_capitalratio />

              <div className='flex items-center justify-between mt-8'>
                <div>
                  <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                </div>
                <div>
                  <p className='text-xl'>前期から</p>
                  <p className='text-3xl font-bold'>7.4%</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUp} size="5x" />
                </div>
              </div>
            </div>
            <div className='m-8'>
              <LinePlot_operatingcf />

              <div className='flex items-center justify-between mt-8'>
                <div>
                  <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                </div>
                <div>
                  <p className='text-xl'>前期から</p>
                  <p className='text-3xl font-bold'>7.4%</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUp} size="5x" />
                </div>
              </div>
            </div>
            <div className='m-8'>
              <LinePlot_investingcf />

              <div className='flex items-center justify-between mt-8'>
                <div>
                  <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                </div>
                <div>
                  <p className='text-xl'>前期から</p>
                  <p className='text-3xl font-bold'>7.4%</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUp} size="5x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center  w-full">
        <div class=" w-full">
          <h3>類似企業比較</h3>
          <div className='flex overflow-hidden items-center'>
            <ul className='flex'>
              <li class="py-6 px-4 ">
                <div class="rounded-lg border-indigo-600 border-2 p-4">
                  <div class="m-4">
                    <h2 class="">ソースネクスト</h2>
                  </div>
                  <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                  </div>
                </div>
              </li>
              <li class="py-6 px-4 w-1/4">
                <div class="rounded-lg border-indigo-600 border-2 p-4">
                  <div class="m-4">
                    <h2 class="">ソースネクスト</h2>
                  </div>
                  <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                  </div>
                </div>
              </li>
              <li class="py-6 px-4 w-1/4">
                <div class="rounded-lg border-indigo-600 border-2 p-4">
                  <div class="m-4">
                    <h2 class="">ソースネクスト</h2>
                  </div>
                  <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                  </div>
                </div>
              </li>
              <li class="py-6 px-4 w-1/4">
                <div class="rounded-lg border-indigo-600 border-2 p-4">
                  <div class="m-4">
                    <h2 class="">ソースネクスト</h2>
                  </div>
                  <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                  </div>
                </div>
              </li>
            </ul>
            {/* <ul className='flex '>
              <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='flex '>
                <li className='h-4 w-4'>tomato</li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
                <li class="py-6 px-4">
                  <div class="rounded-lg border-indigo-600 border-2 p-4">
                    <div class="m-4">
                      <h2 class="">ソースネクスト</h2>
                    </div>
                    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">詳しく見る</button>
                    </div>
                  </div>
                </li>
              </ul> */}
          </div>
        </div>
        <div className="text-3xl m-4">
          過去チャート
        </div>
        <div class="flex justify-between">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/scl/fo/ve3zyyalztwif3v1m4fsy/h?dl=0&rlkey=rxiy6mlrlm3ckg71wnb91tm8d">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">月足</h5>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/scl/fo/m6vrjx5r5q77zqwm2d2z5/h?dl=0&rlkey=s7mn6mn2d6e2l5g1re6b3x847">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">週足</h5>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/sh/vnnq6lfrump0k1q/AAAU1s72yFQg17eZKlT_24_ya?dl=0">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">日足</h5>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/sh/4pi9z11o0pkwtxd/AACe1Na4XymjadZltrTY2lm2a?dl=0">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4時間足</h5>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/sh/3cpne40hmr9yl71/AAAr3aIw4MQJE62_qZIYVRfua?dl=0">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1時間足</h5>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-1">
              <a href="https://www.dropbox.com/sh/pejpdogf9jucrjr/AAD1XHemip3Mu_F4Gtvrr03Pa?dl=0">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">15分足</h5>
              </a>
            </div>
          </div>
        </div>


        <div className="text-3xl m-4">
          関連記事
        </div>
        <div class="flex justify-between">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">コロナショックにおけるBTCUSDの急落は偶然じゃない</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}
