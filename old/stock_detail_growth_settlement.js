import Layout from '../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../components/header/header_invester';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header_invester />
      <div className="flex ">
        <div className="w-1/4">
          <div className="bg-gray-900">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                    <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                  </svg>
                  <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
                </div>
              </div>
              <nav className="">
                <Link href="./fx_detail">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 bg-gray-500">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">成長株の過去5年の決算</span>
                  </div>
                </Link>
                <Link href="./">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">株価評価</span>
                  </div>
                </Link>
                <Link href="./fx_detail_bank">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">取引口座開設</span>
                  </div>
                </Link>
                <Link href="./engel_investment/engel_investment">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">MT4の準備</span>
                  </div>
                </Link>
                <Link href="./option/option">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">TURNING POINT TRADERについて</span>
                  </div>
                </Link>
                <Link href="./fx_detail_risk">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    <span class="mx-3 text-2xl text-white">資金管理とリスクリワード</span>
                  </div>
                </Link>
              </nav>
            </div>
          </div>


          {/* <div>
              <div class="tradingview-widget-container">
                <div id="tradingview_44611"></div>
                <div class="tradingview-widget-copyright">TradingView提供の<a href="https://jp.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPLチャート</span></a></div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                new TradingView.widget(
                {
                "width": 980,
                "height": 610,
                "symbol": "NASDAQ:AAPL",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "ja",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_44611"
                }
                );
                </script>
                </div> */}
        </div>
        <div className="text-center w-2/4">
          <div className="text-3xl m-4">
            チャートパターン
          </div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            株価収益率で表現することによって一株当たり利益や株価水準がいろいろ異なる多数の銘柄を共通の土俵で比較検討することができる
         例えば投資を考えている銘柄の期待成長率が8.5%と予想されているとすると市場での平均的評価を知りたいとき期待成長率が近いGEの株価収益率は18倍
         したがってその銘柄の株価収益率が仮に20倍になっているとすればその銘柄はやめてもっと低い株価収益のものを探した方がいい
         株価評価の第一のルール
         　合理的な投資家は配当や利益の成長率が高ければ高いほど株式に対して高い価格を支払うはずである



         ・ダイナミックな高成長期にある企業の多くは利益のほとんどすべてを再投資するため配当は全くしないかほんのわずかでしかない
しかし、期待成長率が同じ程度の２つの企業を比べる場合には当然株主還元額の多いほうが株価は高くてしかるべきである。
株価評価の第二のルール
　合理的な投資家は他の事情が等しければ企業の利益のうち現金配当ないしは自社株買い戻しで株主に還元される割合が多ければ多いほど高い株価をつけるはずである。


ある株式の価格変動が市場平均よりも大きいほどその株式のリスクは高いと考えられる
株価評価の第三のルール
合理的な投資家は他の事情が等しければその株式のリスクが低ければ低いほど高い価格を支払うはずである。

株価評価の第四のルール
投資家が合理的でほかの事情が等しければ金利水準が低ければ低いほど株価は高くなる


・将来についての期待が正しいかどうかは現時点では証明できない
・不完全なデータから正確な期待値を計算することはできない
・メスのガチョウにとって成長であることがオスのガチョウにとっても成長であるとは限らない

2000年の始めにはナスダック100指数を構成する代表的な成長銘柄の平均株価収益率は100倍以上になっていた

情報や分析が必ずしも正しいとは限らない
情報が正しく、将来の成長率も適切に予想されるとしてもアナリストがそれに基づく株価評価を誤る可能性がある
情報とそれに基づく推定結果のいずれもが正しいとしてもなおあなたの買った株の値段は下がるかもしれない


株式投資で成功するための最も重要な要素は長期の成長率
継続的な成長は利益と配当の増加だけでなく株価収益率も上昇させる

・利益成長率が今後5年以上にわたって市場平均以上の銘柄を買うこと
・株価がファンダメンタル価値以上になっている銘柄には手を出すな
・投資家が「砂上の楼閣」を作れるようなストーリーが描ける銘柄を探そう

市場にまだあまり知られておらず株価収益率が市場よりも極端に高くなっていないような成長株に投資する
          </div>

        </div>

        <div className="w-1/4">

        </div>
      </div>
    </div>

  )
}