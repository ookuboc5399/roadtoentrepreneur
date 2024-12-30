import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Etf } from '../../../../components/layout/invester/invester';
import { LinePlotetf,LinePlotetfjapan } from '../../../../components/chart/LinePlot';
import { Barchartetf } from '../../../../components/chart/Barchart';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "investment_trust_detail" ? (
          <Etf>
            <div className="text-center w-3/4 m-4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div>
                <div className='text-2xl text-center m-4'>はじめに</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    多くの人の集めたお金を一つの大きな資金としてまとめ、運用の専門家が株式や債券などに投資、運用する。<br />
                    投資信託は大きく二つに分かれる<br />
                    1つは市場平均並みの投資収益を目指す「インデックスファンド」です<br />
                    日経平均株価や東証株価指数(TOPIX)、といったインデックス(指数)に連動するように運用されます<br />
                    <br />
                    <br />
                    たとえば、運用利回りがいずれも年3.5%のAファンドとBファンドがあるとします。<br />
                    信託報酬がAファンドは年0.5%、Bファンドは年1.5%だった場合、1000万円を30年間運用した場合Aファンドは2427万円までふえます。<br />
                    一方、Bファンドは1811万円にしかなりません。その差は実に616万円にもなるのです。<br />
                    AファンドとBファンドは信託報酬が1%違うだけですがその一見小さな違いが長期では大きなパフォーマンスの差となることがおわかりいただけるでしょう<br />
                    <br />
                  </p>
                  <LinePlotetf />
                  <p className='text-left inline-block'>
                    国内株式ファンドのアクティブファンドの信託報酬は平均で年1.56%ですがインデックスファンドは年0.48%です<br />
                    国内の日本株ファンドで過去10年間のトータルリターンがインデックスを上回ったアクティブファンドは2021年9月末時点で42.6%しかありませんでした。<br />
                    つまり6割近くのアクティブファンドはインデックスファンドに負けてしまっていたわけです。<br />
                    アメリカの米国大型株式ファンドで過去10年間のトータルリターンがS&P500指数を上回ったアクティブファンドの比率を調べると2021年4月末時点で28.5%に過ぎず、7割のアクティブファンドがインデックスに負けていたのです<br />
                  </p>
                </div>
                <div className='text-2xl text-center m-4'>アクティブファンドとインデックスファンド</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>


                  </p>
                </div>
                <div className='text-2xl text-center m-4'>インデックスファンドの優位性</div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    大きなメリットの一つはアクティブファンドに比べてコストを抑えた運用ができることです<br />
                    二つ目はインデックスファンドを買うと市場全体に投資したのと同じ効果が得られることです<br />
                    日経平均株価に連動するファンドなら225銘柄、TOPIXに連動するファンドなら2000銘柄すべてに分散投資することになります。<br />
                    一方アクティブファンドの場合ものによっては組み入れている銘柄数が20銘柄程度ということもあり1社が倒産してしまった場合運用成績に大きな影響が出ることはさけられません<br />
                    メリットの三つ目は選ぶ手間や時間がかからないことです。
                  </p>
                </div>



                もう一つは市場平均以上の投資収益を目指すアクティブファンドです
                様々な運用戦略を駆使したり投資先を調査したりして投資する銘柄を選別し

                運用にかかるコストについてはインデックスファンドに軍配が上がります
                これはアクティブファンドは個別銘柄の調査などに手間がかかるのでその分だけ信託報酬が高くなってしまうからです

              </div>

              <div className=''>
                <div className='text-xl m-4'>
                  米国の投資信託の純資産残高TOP10
                </div>
                <div>
                  <table class="table-auto border-2 border-green-400">
                    <thead>
                      <tr>

                        <th class="px-4 py-2">順位</th>
                        <th class="px-4 py-2">資産クラス</th>
                        <th class="px-4 py-2">ファンド名</th>
                        <th class="px-4 py-2">運用会社</th>
                        <th class="px-4 py-2">純資産額(億ドル)</th>
                        <th class="px-4 py-2">インデックス/アクティブ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className='border px-4 py-2'>米国大型株式</td>
                        <td className='border px-4 py-2'> バンガード・トータル・ストック・マーケット</td>
                        <td className='border px-4 py-2'>バンガード </td>
                        <td className='border px-4 py-2'>9744 </td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>米国大型株式</td>
                        <td>バンガード500</td>
                        <td>バンガード</td>
                        <td className='border px-4 py-2'>5109</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>米国大型株式</td>
                        <td>バンガード・トータル・インターナショナル・ストック</td>
                        <td>バンガード</td>
                        <td className='border px-4 py-2'>3481</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>米国大型株式</td>
                        <td>フィデリティ500</td>
                        <td>フィデリティ</td>
                        <td className='border px-4 py-2'>3280</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>米国大型株式</td>
                        <td>バンガード・インスティテューショナル</td>
                        <td>バンガード</td>
                        <td className='border px-4 py-2'>2826</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>米国大型株式</td>
                        <td>アメリカン・ファンズ・グロース・ファンド・オブ・アメリカ</td>
                        <td>キャピタル</td>
                        <td className='border px-4 py-2'>2728</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>米国中期債券</td>
                        <td>バンガード・トータル・バンド・マーケットⅡ</td>
                        <td>バンガード</td>
                        <td className='border px-4 py-2'>2441</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>米国中期債券</td>
                        <td>バンガード・トータル・ボンド・マーケット・インデックス・ファンド</td>
                        <td>バンガード</td>
                        <td className='border px-4 py-2'>2296</td>
                        <td className='border px-4 py-2'>インデックス</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>バランス</td>
                        <td>アメリカン・ファンズ・アメリカン・バランスド・ファンド</td>
                        <td>キャピタル</td>
                        <td className='border px-4 py-2'>2031</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>海外大型株式</td>
                        <td>アメリカン・ファンズ・ユーロパシフィック・グロース・ファンド</td>
                        <td>キャピタル</td>
                        <td className='border px-4 py-2'>1921</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=''>
                <div className='text-xl m-4'>
                  国内の公募追加型株式投信の純資産残高TOP10
                </div>
                <div>
                  <table class="table-auto border-2 border-green-400">
                    <thead>
                      <tr>

                        <th class="px-4 py-2">順位</th>
                        <th class="px-4 py-2">資産クラス</th>
                        <th class="px-4 py-2">ファンド名</th>
                        <th class="px-4 py-2">運用会社</th>
                        <th class="px-4 py-2">純資産額(億ドル)</th>
                        <th class="px-4 py-2">インデックス/アクティブ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>グローバルESGハイクオリティ成長株式ファンド</td>
                        <td className='border px-4 py-2'>アセマネOne </td>
                        <td className='border px-4 py-2'>10964 </td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>グローバル・プロスペクティブ・ファンド</td>
                        <td className='border px-4 py-2'>日興</td>
                        <td className='border px-4 py-2'>9789</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>ピクテ・グローバル・インカム株式ファンド</td>
                        <td className='border px-4 py-2'>ピクテ</td>
                        <td className='border px-4 py-2'>9715</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>アライアンス・バーンスタイン・米国成長株投信Dコース</td>
                        <td className='border px-4 py-2'>アライアンス</td>
                        <td className='border px-4 py-2'>8939</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>グローバル・ハイクオリティ成長株式ファンド</td>
                        <td className='border px-4 py-2'>アセマネOne</td>
                        <td className='border px-4 py-2'>7463</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td className='border px-4 py-2'>netWIN GSテクノロジー株式ファンドBコース</td>
                        <td className='border px-4 py-2'>アメリカン・ファンズ・グロース・ファンド・オブ・アメリカ</td>
                        <td className='border px-4 py-2'>ゴールドマン</td>
                        <td className='border px-4 py-2'>6968</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>次世代通信関連世界株式戦略ファンド</td>
                        <td className='border px-4 py-2'>三井住友TAM</td>
                        <td className='border px-4 py-2'>6887</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td className='border px-4 py-2'>海外株式</td>
                        <td className='border px-4 py-2'>デジタル・トランスフォーメーション・株式ファンド</td>
                        <td className='border px-4 py-2'>日興</td>
                        <td className='border px-4 py-2'>6630</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td className='border px-4 py-2'>海外REIT</td>
                        <td className='border px-4 py-2'>ダイワ・US-REIT・オープンBコース</td>
                        <td className='border px-4 py-2'>大和</td>
                        <td className='border px-4 py-2'>6386</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td className='border px-4 py-2'>バランス</td>
                        <td className='border px-4 py-2'>東京海上・円資産バランスファンド</td>
                        <td className='border px-4 py-2'>東京海上</td>
                        <td className='border px-4 py-2'>6299</td>
                        <td className='border px-4 py-2'>アクティブ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='text-2xl text-center m-4'></div>
              <div className=' text-center block' >
                <p className='text-left inline-block'>
                  投資信託は非上場のものを指すのが一般的です<br />
                  投資信託の場合それぞれの投信の基準価額は1日1回決まる仕組みでたとえばみなさんが国内株式に投資する投信の購入を申し込むとその日の15時以降に基準価額が決まり、その値段で買うことになるわけです<br />

                </p>
              </div>
              <div className='flex justify-center'>
                <Image
                  src="/images/trust.png"
                  alt=""
                  width={960}
                  height={503}
                />
              </div>
              <p className='text-left inline-block'>
                ETFとは「Exchange Traded Fund」の略称で「上場投資信託」とも呼ばれ株式のように売買できるのが特徴です。<br />
                ETFは大半がインデックスファンドでアクティブファンドは少数<br />

              </p>
            </div>
          </Etf>
        ) : id == "investment_etf_trust_detail" ? (
          <Etf>
            <div className="text-center w-3/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div>
                <div className='text-2xl text-center m-4'></div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    ETFとインデックス投信の違いは大きく分けるとコストと取引形態の二つがあります<br />
                  </p>

                </div>
              </div>

              <div>
                注文方法はETFはリアルタイムで取引が可能。投資信託は一日一回算出される基準価格での売買
                ETFは証券会社で、投資信託は証券会社や銀行、郵便局で購入できる
                ETFは１口数千円～数万円で投資信託は１００円から購入が可能
                運用管理費用(信託報酬)は投資信託と比べETFが安い傾向がある

              </div>
              <div className='text-xl m-4'>
                インデックスファンドとETFの比較
              </div>
              <div>
                <table class="table-auto border-2 border-green-400">
                  <thead>
                    <tr>
                      <th class="px-4 py-2"></th>
                      <th class="px-4 py-2">インデックスファンド</th>
                      <th class="px-4 py-2">ETF(上場)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>購入時の手数料</td>
                      <td className='border px-4 py-2'>0のファンドが多い</td>
                      <td className='border px-4 py-2'>一部のネット証券では国内ETFはゼロ、海外ETFは特定の銘柄がゼロ</td>
                    </tr>
                    <tr>
                      <td>信託報酬</td>
                      <td className='border px-4 py-2 bg-blue-300'>最近はかなり低い<br />ファンドも登場</td>
                      <td className='border px-4 py-2 bg-red-300'>インデックスファンドより比較的低い</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>売却時の手数料</td>
                      <td className='border px-4 py-2'>信託財産留保額</td>
                      <td className='border px-4 py-2'>一部のネット証券では国内ETFはゼロ</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>為替手数料</td>
                      <td className='border px-4 py-2 bg-red-300'>為替手数料はかからない</td>
                      <td className='border px-4 py-2 bg-blue-300'>海外ETFは為替手数料がかかる</td>
                    </tr>
                    <tr>
                      <td>購入の場所</td>
                      <td className='border px-4 py-2 bg-red-300'>証券会社、銀行、信用金庫、郵便局など</td>
                      <td className='border px-4 py-2 bg-blue-300'>証券会社</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>売買のタイミング</td>
                      <td className='border px-4 py-2 bg-blue-300'>1日1回の価格で売買</td>
                      <td className='border px-4 py-2 bg-red-300'>リアルタイムで売買が可能</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>注文の方法</td>
                      <td className='border px-4 py-2 bg-red-300'>金額、口数指定で翌日に基準価額がわかる</td>
                      <td className='border px-4 py-2 bg-blue-300'>指値、成行で注文可能</td>
                    </tr>
                    <tr>
                      <td>定時定額による投資</td>
                      <td className='border px-4 py-2 bg-red-300'>可能</td>
                      <td className='border px-4 py-2 bg-blue-300'>SBI証券で海外ETFの一部が可能</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>分配金の自動再投資</td>
                      <td className='border px-4 py-2 bg-red-300'>可能</td>
                      <td className='border px-4 py-2 bg-blue-300'>不可</td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>分配金の外国税額控除の申請</td>
                      <td className='border px-4 py-2 bg-red-300'>必要なし</td>
                      <td className='border px-4 py-2 bg-blue-300'>自ら外国税額控除を申請</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=' text-center block' >
                <p className='text-left inline-block'>
                  ETFとインデックス投信の違いは大きく分けるとコストと取引形態の二つがあります<br />
                </p>


                ETFを購入する場合は株式と同様に証券会社に売買手数料を支払う必要があります。売り買いのたびに手数料がかかるので頻繁な売買には向きません<br />
                ただ一部のネット証券では国内ETFについて売買手数料を無料にしており、海外ETFについても一部の銘柄の買付手数料は無料となっています<br />
                なおネット証券最大手のSBI証券で国内ETFを買う場合は「約定代金の0.45%、手数料上限は税込22ドル」です<br />
                つまり100万円投資する場合、買付手数料は4950円になりますが、22ドルという上限が設定されているため実際の買付手数料は約2500円となります。<br />
                信託報酬は運用期間中ずっとかかり続けるコストなので運用商品を選ぶうえでは非常に重要なポイントです。<br />
                投資信託は受託会社と販売会社、運用会社に信託報酬を払うことになります
                ETFは投資信託のように販売会社が存在していないのでその分だけ信託報酬が低くなる
                実際TOPIXに連動するインデックス投信の信託報酬は平均で0.48%ですが、それに比べてETFはわずか0.09%と非常に低くなっています
                ETFはインデックス投信に比べて信託報酬が低く長期投資に向いているものの原則として購入時と売却時に手数料がかかるほか海外ETFでは為替手数料もかかる点がネック
              </div>

              <div className='border-collapse'>
                <table className='border-collapse'>
                  <tr>
                    <th></th> <th>ETF</th><th>投資信託</th>
                  </tr>
                  <tr>
                    <th>購入最低金額</th> <td>数千～数万円</td> <td>100円～</td>
                  </tr>
                  <tr>
                    <th>取引通貨・為替手数料</th> <td>円・ドル</td> <td>円</td>
                  </tr>
                  <tr>
                    <th>運用管理費用</th> <td>投資信託より安め</td> <td>ETFより高め</td>
                  </tr>
                  <tr>
                    <th>購入手数料</th> <td>9</td> <td>数千～数万円</td>
                  </tr>
                  <tr>
                    <th>売却・解約手数料</th> <td>9</td> <td>数千～数万円</td>
                  </tr>
                  <tr>
                    <th>分配金有無・課税</th> <td>9</td> <td>数千～数万円</td>
                  </tr>
                  <tr>
                    <th>二重課税</th> <td>9</td> <td>数千～数万円</td>
                  </tr>
                </table>
              </div>
              分配金がない投資信託の場合、各企業から支払われた配当金は投資信託内で再投資されるため課税されないメリットがある
              米国ETFなど米国の金融商品の分配金や配当金を得た場合、10%の外国所得税が課税されます。
              その後NISAなど非課税制度以外での投資の場合日本国内で20.315%がかかり、二重課税となってしまう
            </div>
          </Etf>
        ) : id == "investment_etf_detail" ? (
          <Etf>
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
                    ETFは証券取引所に上場している投資信託です。<br />
                    ETFには非常にコストが低く柔軟に売買でき、品ぞろえが豊富で特色のあるものが多いといった特徴がある<br />
                    株式や債券、不動産、コモディティなど様々な資産クラスの銘柄がそろっているのはもちろん国・地域やセクター別の銘柄もたくさんあります。<br />
                    非上場のインデックスファンドも多様な銘柄がありますがETFのほうがより細かい分散投資ができます<br />
                  </p>
                </div>
                <div className='flex justify-center'>
                  <Image
                    src="/images/etf.png"
                    alt=""
                    width={960}
                    height={503}
                  />
                </div>
                株式や債券など金融商品の詰め合わせ<br />
                ETFのメリットは分散投資ができる。低コストで運用できる。種類が豊富で多数の選択肢がある。<br />
                全世界株式ETF「VT」は世界中の国の約９０００社の株式に投資している。　米国ETFで発生するコストの多くは年率0.0数%~数%　全世界・地域・セクター・テーマなどさまざまな種類のETFがある<br />
                地域で分類<br />
                ・全世界ETF<br />
                ・先進国、新興国ETF<br />
                ・地域、各国ETF<br />
                株式以外<br />
                ・債券ETF<br />
                ・REIT(不動産)ETF<br />
                ・コモディティ(商品)ETF<br />
                特性ジャンルで分類<br />
                ・セクターETF<br />
                ・テーマ型ETF<br />
                ・ファクターETF<br />
                投資資金の数倍の値動き<br />
                ・レバレッジ(ブル型)ETF<br />
                ・インバース(ベア型)ETF<br />

                米国ETF市場における主要運用会社は「iシェアーズ」ブランドでETFを展開するブラックロック社。<br />
                380本のETFを揃え、35.5%のマーケットシェアを握っています。<br />
                2位はコストを抑えたインデックス運用に定評のあるバンガード社<br />
                商品数は82本でマーケットシェアの27.9%のシェアを持っています。<br />
                3位はスパイダーブランドのETFを展開するステートストリート社
                133本のETFを揃え、15.2%のシェアを持っています
                <div className=''>
                  <table class="table-auto border-2 border-green-400">
                    <thead>
                      <tr>
                        <th></th>
                        <th>運用資産額</th>
                        <th>設立年</th>
                        <th>主なETF</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ブラックロック</td>
                        <td>約810兆円</td>
                        <td>1988年</td>
                        <td>iSharesETF ・IVV ・HDV ・AGG </td>
                      </tr>
                      <tr>
                        <td>バンガード</td>
                        <td>約671兆円</td>
                        <td>1975年</td>
                        <td>VanguardETF ・VOO・VTI・VYM</td>
                      </tr>
                      <tr>
                        <td>ステートストリート</td>
                        <td>約340兆円</td>
                        <td>1978年</td>
                        <td>SPDRETF ・SPY・SPYD・GLD</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                ETFにかかる手数料
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>手数料</th> <th>内容</th><th>発生頻度</th>
                    </tr>
                    <tr>
                      <th>運用管理費用(信託報酬)</th> <td>ETFの運用・管理にかかる費用</td> <td>毎日</td>
                    </tr>
                    <tr>
                      <th>購入手数料</th> <td>購入時に発生する手数料</td> <td>購入時</td>
                    </tr>
                    <tr>
                      <th>売却手数料</th> <td>売却時に発生する手数料(円で受け取る場合は為替手数料も発生)</td> <td>売却時</td>
                    </tr>
                  </table>
                </div>
                日銀は2010年12月から金融緩和策の一つとしてETFの買い入れをスタートしました。
                当初日銀の買い入れ額は年間で約4500億円を限度としていましたが、その後買い入れ額は拡大
                2020年3月には年間約12兆円にまで増額されました
                <LinePlotetfjapan />
                日本のETF保有割合のうち実に9割以上を金融機関が保有するという状況になっており、個人の保有はたった3%に過ぎません。

                2010年以降その年に各資産に投資をした場合、リターンを表しています
                たとえば2020年についてみると新興国株式に投資すれば年12.12%で運用できたことが分かります
                2番目にリターンが高かったのは先進国株式で10.18%。国内株式7.39%、先進国債券5.33%、新興国債券-0.56%、国内債券-0.75%
                <Barchartetf />

                運用手数料年率1% 購入手数料0.5% 売却手数料0.5%　のETFを100万円分購入する場合購入手数料5000円がかかります。
                1年間保有した場合運用管理手数料1万円
                売却時には売却手数料の5000円が発生します。

                大学新卒22歳で100万円を投資し年利回り5%で運用したとします。65歳時点で管理手数料なしの場合815万円に対し、0.5%の場合は664万円と151万円の差が出ている。
                2%の場合は356万円で半額以下です。
                年間数%の手数料が長期運用のリターンに大きな影響を与える
                できる限り運用管理費用の安いETFを選択するべき

                各証券会社の手数料
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>証券会社</th> <th>SBI証券</th><th>楽天証券</th><th>楽天証券</th>
                    </tr>
                    <tr>
                      <th>最低取引手数料</th> <td>0ドル</td> <td>0ドル</td><td>0ドル</td>
                    </tr>
                    <tr>
                      <th>購入手数料</th> <td>0.45%</td> <td>無料~0.45%</td><td>無料~0.45%</td>
                    </tr>
                    <tr>
                      <th>売却手数料</th> <td>0.45%</td> <td>0.45%</td><td>0.45%</td>
                    </tr>
                    <tr>
                      <th>上限取引手数料</th> <td>20ドル</td> <td>20ドル</td><td>20ドル</td>
                    </tr>
                  </table>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>厳選ETF</div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/1i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・トータル・ワールド・ストックETF</div>
                  </div>
                </div>

                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「FTSEグローバル・オールキャップ・インデックス」に連動するETFで世界全体の株式時価総額の98%以上をカバーしています。<br />
                    組入れ銘柄は先進国と新興国を含む50か国の約9000銘柄で大型株だけでなく中小型株の銘柄も含まれるのが特長です<br />
                    信託報酬は0.08%と世界全体をカバーする株式ファンドの中ではコストが極めて低いといえます<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/2i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・トータル・ストック・マーケットETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「CRSP USトータル・マーケット・インデックス」に連動するETFです。米国株式を投資対象とし、MSCIインデックスがカバーしていない超小型の銘柄も含め約4000銘柄から構成されています。<br />
                    信託報酬は0.03%で極めて低いコストで米国株式市場全体に投資できます<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/3i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・FTSE先進国市場ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「FTSE先進国オールキャップインデックス」に連動するETFです。米国を除く23か国の先進国市場の株式を投資対象としています。<br />
                    主な投資対象国は日本、カナダ、欧州地域の先進国と太平洋地域の先進国で大型株・中型株・小型株の約4000銘柄で構成されています<br />
                    信託報酬は0.05%と同資産クラスのファンドの中で極めて低い水準です<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/4i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・FTSE・エマージング・マーケッツETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「FTSEエマージング・マーケッツ・オールキャップ(含む中国A株)・インデックス」に連動するETFです。新興国市場の大型、中型、小型株式に投資します。<br />
                    中国、インド、ブラジル、ロシア、台湾、南アフリカ等の24か国を投資対象とし約4300銘柄と幅広い銘柄で構成されています<br />
                    信託報酬は0.1%で同資産クラスの中では極めて低い水準です<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/5i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米国トータル債券市場ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「ブルームバーグ・バークレイズ米国総合浮動調整インデックス」に連動するETFです。米国の国債を中心に米国適格投資債権を投資対象とし、約7割をAAAの格付債券が占めています。<br />
                    約1万8000銘柄という幅広い銘柄に分散投資されており、信託報酬も0.035%と米国債券ETFの中でも極めて低い水準です<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/6i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・トータル・インターナショナル債券ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「ブルームバーグ・バークレイズ・グローバル総合(米ドル除く)浮動調整RIC基準インデックス」に連動するETFです。日本と欧州を中心に米国以外の主要先進国の債券に幅広く投資しています。<br />
                    投資対象は国債や政府系機関債、社債、証券化債券などを中心としており6000以上の銘柄に投資することで分散効果を高めています<br />
                    信託報酬は0.08%<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/7i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米ドル建て新興国政府債券ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「ブルームバーグ・バークレイズ米ドル建て新興市場政府債RIC基準インデックス」に連動するETFです。新興国の国債、政府系機関債および社債を投資対象としており約700銘柄という幅広い銘柄に投資を行っています。<br />
                    信託報酬は0.25%と新興国債券ETFとしては極めて低いといえます<br />
                  </p>
                </div>

                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>おすすめETF</div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/1i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>iシェアーズ・コア TOPIX ETF</div>
                  </div>
                </div>

                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    東証一部全銘柄の時価総額の加重平均である東証株価指数(TOPIX)に連動するETFです。<br />
                    <br />
                    信託報酬は0.06%で他のTOPIXに連動するETFの中で一番低い水準です。
                    出来高や純資産残高は「TOPIX連動型上場投資信託」や「ダイワ上場投信トピックス」に比べて少ないものの、流動性の心配は特になく、TOPIX連動型のETFとしては最適<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/2i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・S&P500 ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「S&P500指数」に連動するETFです。<br />
                    信託報酬は0.03%<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/3i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米国高配当株式ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「FTSEハイディビデンド・イールド・インデックス」に連動するETFです。米国の高い配当利回りの銘柄で構成されています。<br />
                    主な投資対象国は日本、カナダ、欧州地域の先進国と太平洋地域の先進国で大型株・中型株・小型株の約4000銘柄で構成されています<br />
                    信託報酬は0.06%と同資産クラスのファンドの中で極めて低い水準です<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/4i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米国増配株式ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    10年以上連続した増配実績を持つ米国普通株で構成される「NASDAQUSディビデンド・アチーバーズ・セレクト・インデックス」に連動するETFです。<br />
                    中国、インド、ブラジル、ロシア、台湾、南アフリカ等の24か国を投資対象とし約4300銘柄と幅広い銘柄で構成されています<br />
                    信託報酬は0.06%とほかの米国大型株に投資するETFと比べても低い水準です<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/5i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>インベスコQQQ 信託シリーズ1</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「ナスダック100指数」に連動するETFです。米国のグロース銘柄に投資するETFで投資家からの人気は非常に高く日々の出来高はかなり大きく、流動性は全く心配ありません<br />
                    信託報酬も0.2%<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/6i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米国情報技術セクター ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「MSCI USインベスタブル・マーケット・情報技術25/50インデックス」に連動するETFです。米国の情報技術セクターの大型、中型、小型株の330銘柄以上に投資され、上位10銘柄で約60%を占めています。<br />
                    <br />
                    信託報酬は0.1%<br />
                  </p>
                </div>
                <div className="block">
                  <div className='inline-block'>
                    <Link href=".">
                      <Image
                        src="/svg/7i.svg"
                        alt="top"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className='inline-block text-2xl text-left m-4 border-l-0 border-blue-400 border-2'>バンガード・米ドル建て新興国政府債券ETF</div>
                  </div>
                </div>
                <div className=' text-center block' >
                  <p className='text-left inline-block'>
                    「ブルームバーグ・バークレイズ米ドル建て新興市場政府債RIC基準インデックス」に連動するETFです。新興国の国債、政府系機関債および社債を投資対象としており約700銘柄という幅広い銘柄に投資を行っています。<br />
                    信託報酬は0.25%と新興国債券ETFとしては極めて低いといえます<br />
                  </p>
                </div>
              </div>

            </div>
          </Etf>
        ) : id == "investment_china_etf_detail" ? (
          <Etf>
            <div className="text-center w-3/4">
              <div className="text-center">
                <div className="text-3xl m-4">
                  ETF主要銘柄一覧
                </div>


                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">02800 トラッカー・ファンド・オブ・ホンコン</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">連動指数:Hang Seng Index</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">運用会社:State Street Global Advisors Asia Ltd.</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">上場:1999/11/12</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">売買単位(口):500</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">発行口数(百万口):3,897.99</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">純資産(百万HK$):97,432.44</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">投資口価格(HK$):25.08</p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">02801 iシェアーズ・コアMSCIチャイナETF</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">連動指数:MSCI China Index</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">運用会社:BlackRock Asset Management North Asia Ltd.</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">上場:2001/11/28</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">売買単位(口):200</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">発行口数(百万口):153.90</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">純資産(百万HK$):4,457.60</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">投資口価格(HK$):28.92</p>
                    </div>
                  </div>
                </div>


                <div class="flex">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">02802 iシェアーズMSCIエマージングアジアETF</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">連動指数:MSCI Emerging Asia Index</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">運用会社:BlackRock Asset Management North Asia Ltd.</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">上場:2009/4/23</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">売買単位(口):200</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">発行口数(百万口):2.20</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">純資産(百万HK$):146.12</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">投資口価格(HK$):66.02</p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">02823 iシェアーズFTSE A50チャイナETF</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">連動指数:FTSE China A50 Index</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">運用会社:BlackRock Asset Management North Asia Ltd.</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">上場:2004/11/18</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">売買単位(口):100</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">発行口数(百万口):956.00</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">純資産(百万HK$):14,449.23</p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">投資口価格(HK$):18.26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Etf>
        ) : id == "investment_america_etf_detail" ? (
          <Etf>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                GAFAM(グーグル・アップル・フェイスブック・アマゾン・マイクロソフト)を筆頭に巨大企業が並ぶハイテク関連、電気自動車や自動運転分野で急成長を遂げるテスラ、ほかにも
                世界規模で事業を展開するコカ・コーラやヘルスケア分野の巨人ジョンソン&ジョンソンなど米国企業にまとめて投資できるのが米国株式ETFです。

                米国株の中でも高い株式指数にNASDAQ100指数があります。この指数に連動しているQQQというETFは注目の急成長企業にまとめて投資できる


                VTIは「CRSP USトータルマーケット・インデックス」に連動したパフォーマンスを目指すETFです。
                SPY・IVV・VOOはS&P500に連動したパフォーマンスを目指す。
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>順位</th> <th>内容</th><th>発生頻度</th>
                    </tr>
                    <tr>
                      <th>1</th> <td>アップル</td> <td>5.94%</td>
                    </tr>
                    <tr>
                      <th>2</th> <td>マイクロソフト</td> <td>5.55%</td>
                    </tr>
                    <tr>
                      <th>3</th> <td>アマゾン</td> <td>4.06%</td>
                    </tr>
                    <tr>
                      <th>4</th> <td>フェイスブック</td> <td>2.05%</td>
                    </tr>
                    <tr>
                      <th>5</th> <td>アルファベット ClassA</td> <td>1.93%</td>
                    </tr>
                    <tr>
                      <th>6</th> <td>アルファベット ClassC</td> <td>1.87%</td>
                    </tr>
                    <tr>
                      <th>7</th> <td>テスラ</td> <td>1.61%</td>
                    </tr>
                    <tr>
                      <th>8</th> <td>バークシャー・ハサウェイClassB</td> <td>1.46%</td>
                    </tr>
                    <tr>
                      <th>9</th> <td>JPモルガン・チェース</td> <td>1.30%</td>
                    </tr>
                    <tr>
                      <th>10</th> <td>ジョンソン&ジョンソン</td> <td>1.24%</td>
                    </tr>

                  </table>
                </div>
                VTIの組み入れ上位10社
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>順位</th> <th>内容</th><th>発生頻度</th>
                    </tr>
                    <tr>
                      <th>1</th> <td>アップル</td> <td>4.47%</td>
                    </tr>
                    <tr>
                      <th>2</th> <td>マイクロソフト</td> <td>4.31%</td>
                    </tr>
                    <tr>
                      <th>3</th> <td>アマゾン</td> <td>3.21%</td>
                    </tr>
                    <tr>
                      <th>4</th> <td>フェイスブック</td> <td>1.72%</td>
                    </tr>
                    <tr>
                      <th>5</th> <td>アルファベット ClassA</td> <td>1.50%</td>
                    </tr>
                    <tr>
                      <th>6</th> <td>アルファベット ClassC</td> <td>1.40%</td>
                    </tr>
                    <tr>
                      <th>7</th> <td>テスラ</td> <td>1.24%</td>
                    </tr>
                    <tr>
                      <th>8</th> <td>JPモルガン・チェース</td> <td>1.12%</td>
                    </tr>
                    <tr>
                      <th>9</th> <td>バークシャー・ハサウェイClassB</td> <td>1.10%</td>
                    </tr>
                    <tr>
                      <th>10</th> <td>ジョンソン&ジョンソン</td> <td>1.05%</td>
                    </tr>

                  </table>
                </div>
                VTIとS&P500の上位組み入れ銘柄には大きな違いはありません。
                80%同じ銘柄に投資されており、VTIはS&P500に組み入れられていない銘柄に20%を投資している

                銘柄のセクターは情報技術セクターが約4分の1と大きな割合を示している

                VTIとS&P500のリターンを2007年から2021年6月末まで見ると
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>銘柄</th> <th>初期投資額(ドル)</th><th>最終資産額(ドル)</th><th>年率リターン</th><th>リスク(標準偏差)</th><th>最も良かった年の上昇率</th><th>最も悪かった年の下落率</th><th>最大下落率</th><th>シャープ・レシオ</th><th>米国株市場との相関係数</th>
                    </tr>
                    <tr>
                      <th>VTI</th> <td>100</td> <td>421</td><td>10.42%</td><td>15.93%</td><td>33.45%</td><td>-36.98%</td><td>-50.84%</td><td>0.65%</td><td>1.00</td>
                    </tr>
                    <tr>
                      <th>S&P500</th> <td>100</td> <td>404</td><td>10.11%</td><td>15.35%</td><td>32.31%</td><td>-36.81%</td><td>-50.80%</td><td>0.65</td><td>1.00</td>
                    </tr>
                  </table>
                </div>
                最大下落率はいずれもリーマンショックの際に記録したもの




                VTIとS&P500の分配金利回りは1%台後半から2%台前半で推移している
                分配金はリーマンショック時に減配しているがそれ以降は順調に増加している




                NASDAQ100指数はNASDAQに上場している企業のうち金融業界の銘柄を除く時価総額が上位100社で構成され、QQQのベンチマークとなっています。
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>銘柄</th> <th>価格</th><th>保有銘柄数</th><th>運用管理費用(%)</th><th>純資産総額(兆円)</th><th>運用期間(年)</th>
                    </tr>
                    <tr>
                      <th>QQQ</th> <td>357.96</td> <td>103</td><td>0.20</td><td>20.7</td><td>22.6</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <div className="text-center text-3xl m-4">
                    米国ETF
                  </div>
                  <div class="flex flex-nowrap">
                    <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                      <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VBK(Vanguard Small-Cap Growth ETF)</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                        <a href="https://perpetualtravelerchoja.com/tmv%e3%83%87%e3%82%a3%e3%82%af%e3%83%ac%e3%82%a4%e3%82%b7%e3%83%a7%e3%83%b320%e5%b9%b4%e8%b6%85%e7%b1%b3%e5%9b%bd%e5%82%b5%e3%83%99%e3%82%a23%e5%80%8detf/1353/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                      </div>
                    </div>
                    <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                      <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VBR(Vanguard Small-Cap Value ETF)</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the bigges chronological order.</p>
                        <a href="https://perpetualtravelerchoja.com/%e6%b1%ba%e7%ae%97%e7%9f%ad%e4%bf%a1%e3%83%9a%e3%83%83%e3%83%91%e3%83%bc%e3%83%95%e3%83%bc%e3%83%89%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b92021-03/1338/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                      </div>
                    </div>
                    <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                      <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VUG(Vanguard Growth ETF)</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enter reverse chronological order.</p>
                        <a href="https://perpetualtravelerchoja.com/%e6%b1%ba%e7%ae%97%e7%9f%ad%e4%bf%a1%e3%83%9a%e3%83%83%e3%83%91%e3%83%bc%e3%83%95%e3%83%bc%e3%83%89%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b92021-03/1338/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                      </div>
                    </div>
                    <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                      <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VTV(Vanguard Value ETF)</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggestn reverse chronological order.</p>
                        <a href="https://perpetualtravelerchoja.com/%e6%b1%ba%e7%ae%97%e7%9f%ad%e4%bf%a1%e3%83%9a%e3%83%83%e3%83%91%e3%83%bc%e3%83%95%e3%83%bc%e3%83%89%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b92021-03/1338/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Etf>
        ) : id == "investment_etf_net_detail" ? (
          <Etf>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                近年、ネット証券では熾烈な手数料引き下げ競争が続いています<br />
                その競争で一歩先を行くのはネット証券最王手のSBI証券と楽天証券です。<br />
                ETFに投資をする場合、コストを抑えられる証券会社、利便性の高い証券会社を選ぶのであればこの2社のいずれかが候補になります。
                国内ETFの売買手数料はSBI証券、楽天証券とも無料です。取り扱い銘柄数はSBI証券が119銘柄、楽天証券は112銘柄<br />


                VTIは「CRSP USトータルマーケット・インデックス」に連動したパフォーマンスを目指すETFです。<br />
                SPY・IVV・VOOはS&P500に連動したパフォーマンスを目指す。<br />
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>順位</th> <th>内容</th><th>発生頻度</th>
                    </tr>
                    <tr>
                      <th>1</th> <td>アップル</td> <td>5.94%</td>
                    </tr>
                    <tr>
                      <th>2</th> <td>マイクロソフト</td> <td>5.55%</td>
                    </tr>
                    <tr>
                      <th>3</th> <td>アマゾン</td> <td>4.06%</td>
                    </tr>
                    <tr>
                      <th>4</th> <td>フェイスブック</td> <td>2.05%</td>
                    </tr>
                    <tr>
                      <th>5</th> <td>アルファベット ClassA</td> <td>1.93%</td>
                    </tr>
                    <tr>
                      <th>6</th> <td>アルファベット ClassC</td> <td>1.87%</td>
                    </tr>
                    <tr>
                      <th>7</th> <td>テスラ</td> <td>1.61%</td>
                    </tr>
                    <tr>
                      <th>8</th> <td>バークシャー・ハサウェイClassB</td> <td>1.46%</td>
                    </tr>
                    <tr>
                      <th>9</th> <td>JPモルガン・チェース</td> <td>1.30%</td>
                    </tr>
                    <tr>
                      <th>10</th> <td>ジョンソン&ジョンソン</td> <td>1.24%</td>
                    </tr>

                  </table>
                </div>
                VTIの組み入れ上位10社
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>順位</th> <th>内容</th><th>発生頻度</th>
                    </tr>
                    <tr>
                      <th>1</th> <td>アップル</td> <td>4.47%</td>
                    </tr>
                    <tr>
                      <th>2</th> <td>マイクロソフト</td> <td>4.31%</td>
                    </tr>
                    <tr>
                      <th>3</th> <td>アマゾン</td> <td>3.21%</td>
                    </tr>
                    <tr>
                      <th>4</th> <td>フェイスブック</td> <td>1.72%</td>
                    </tr>
                    <tr>
                      <th>5</th> <td>アルファベット ClassA</td> <td>1.50%</td>
                    </tr>
                    <tr>
                      <th>6</th> <td>アルファベット ClassC</td> <td>1.40%</td>
                    </tr>
                    <tr>
                      <th>7</th> <td>テスラ</td> <td>1.24%</td>
                    </tr>
                    <tr>
                      <th>8</th> <td>JPモルガン・チェース</td> <td>1.12%</td>
                    </tr>
                    <tr>
                      <th>9</th> <td>バークシャー・ハサウェイClassB</td> <td>1.10%</td>
                    </tr>
                    <tr>
                      <th>10</th> <td>ジョンソン&ジョンソン</td> <td>1.05%</td>
                    </tr>

                  </table>
                </div>
                VTIとS&P500の上位組み入れ銘柄には大きな違いはありません。
                80%同じ銘柄に投資されており、VTIはS&P500に組み入れられていない銘柄に20%を投資している

                銘柄のセクターは情報技術セクターが約4分の1と大きな割合を示している

                VTIとS&P500のリターンを2007年から2021年6月末まで見ると
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>銘柄</th> <th>初期投資額(ドル)</th><th>最終資産額(ドル)</th><th>年率リターン</th><th>リスク(標準偏差)</th><th>最も良かった年の上昇率</th><th>最も悪かった年の下落率</th><th>最大下落率</th><th>シャープ・レシオ</th><th>米国株市場との相関係数</th>
                    </tr>
                    <tr>
                      <th>VTI</th> <td>100</td> <td>421</td><td>10.42%</td><td>15.93%</td><td>33.45%</td><td>-36.98%</td><td>-50.84%</td><td>0.65%</td><td>1.00</td>
                    </tr>
                    <tr>
                      <th>S&P500</th> <td>100</td> <td>404</td><td>10.11%</td><td>15.35%</td><td>32.31%</td><td>-36.81%</td><td>-50.80%</td><td>0.65</td><td>1.00</td>
                    </tr>
                  </table>
                </div>
                最大下落率はいずれもリーマンショックの際に記録したもの




                VTIとS&P500の分配金利回りは1%台後半から2%台前半で推移している
                分配金はリーマンショック時に減配しているがそれ以降は順調に増加している




                NASDAQ100指数はNASDAQに上場している企業のうち金融業界の銘柄を除く時価総額が上位100社で構成され、QQQのベンチマークとなっています。
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>銘柄</th> <th>価格</th><th>保有銘柄数</th><th>運用管理費用(%)</th><th>純資産総額(兆円)</th><th>運用期間(年)</th>
                    </tr>
                    <tr>
                      <th>QQQ</th> <td>357.96</td> <td>103</td><td>0.20</td><td>20.7</td><td>22.6</td>
                    </tr>
                  </table>
                </div>
              </div>

            </div>
          </Etf>
        ) : id == "investment_etf_other" ? (
          <Etf>
            <div className="w-3/4">
              <div>
                <div className="text-center text-3xl m-4">
                  国債ETF
                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TMV(ディクレイション20年超米国債ベア3倍ETF)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/tmv%e3%83%87%e3%82%a3%e3%82%af%e3%83%ac%e3%82%a4%e3%82%b7%e3%83%a7%e3%83%b320%e5%b9%b4%e8%b6%85%e7%b1%b3%e5%9b%bd%e5%82%b5%e3%83%99%e3%82%a23%e5%80%8detf/1353/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/%e6%b1%ba%e7%ae%97%e7%9f%ad%e4%bf%a1%e3%83%9a%e3%83%83%e3%83%91%e3%83%bc%e3%83%95%e3%83%bc%e3%83%89%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b92021-03/1338/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center text-3xl m-4">
                  コモディティETF
                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBA(Invesco DB Agriculture Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/dbainvesco-db-base-metals-fund/1357/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBB(Invesco DB Base Metals Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/dbbinvesco-db-base-metals-fund/1363/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBC(Invesco DB Commodity Index Tracking Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/dbcinvesco-db-commodity-index-tracking-fund/1366/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBB(Invesco DB Base Metals Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/dbbinvesco-db-base-metals-fund/1363/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              <div>
                <div className="text-center text-3xl m-4">
                  レバレッジETF
                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">INDL(Direxion Daily MSCI India Bull 2X Shares)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/indldirexion-daily-msci-india-bull-2x-shares/1369/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBB(Invesco DB Base Metals Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/dbbinvesco-db-base-metals-fund/1363/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBC(Invesco DB Commodity Index Tracking Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/dbcinvesco-db-commodity-index-tracking-fund/1366/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBB(Invesco DB Base Metals Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/dbbinvesco-db-base-metals-fund/1363/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              <div>
                <div className="text-center text-3xl m-4">
                  東南アジアETF
                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EIDO(iシェアーズ MSCI インドネシア ETF)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/eidoi%e3%82%b7%e3%82%a7%e3%82%a2%e3%83%bc%e3%82%ba-msci-%e3%82%a4%e3%83%b3%e3%83%89%e3%83%8d%e3%82%b7%e3%82%a2-etf/1395/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EWM (iシェアーズ MSCI マレーシア ETF)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/ewm-i%e3%82%b7%e3%82%a7%e3%82%a2%e3%83%bc%e3%82%ba-msci-%e3%83%9e%e3%83%ac%e3%83%bc%e3%82%b7%e3%82%a2-etf/1398/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="flex flex-nowrap">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EPHE (iシェアーズ MSCI フィリピン ETF)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20年米国債の価格が低下すると3倍上昇する</p>
                      <a href="https://perpetualtravelerchoja.com/ephe-i%e3%82%b7%e3%82%a7%e3%82%a2%e3%83%bc%e3%82%ba-msci-%e3%83%95%e3%82%a3%e3%83%aa%e3%83%94%e3%83%b3-etf/1405/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DBB(Invesco DB Base Metals Fund)</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://perpetualtravelerchoja.com/dbbinvesco-db-base-metals-fund/1363/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Etf>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

