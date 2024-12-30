import { useRouter } from 'next/router'
import React from 'react';
import { Future_japan,Future } from '../../../../components/layout/future_world/future_world';


const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "detail" ? (
                    <Future_japan>
                        <p>IMFが公表している購買力平価ベースの1人あたりGDPで日本は2018年に韓国に抜かれてしまった。それ以降差は年々拡大して2021年は日本4万1507ドル、韓国4万3780ドル、2022年は日本4万2730ドル、韓国4万4981ドルになると予想されている</p>
                        <p>厚生労働省の「賃金構造基本統計調査」によると日本の一般労働者の2020年の平均月給は30万7700円で2001年の30万5800円から1900円しか上がっていない。しかも2008年から2013年までは29万円台に下がってしまっている。

                        </p>
                        <ol class="relative border-l border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">安倍晋三 <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">記事へ</a>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">菅義偉</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">岸田</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                <a href="https://perpetualtravelerchoja.com/%e5%b2%b8%e7%94%b0%e6%96%87%e9%9b%84/1446/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">記事へ</a>

                            </li>
                        </ol>
                        <p>日本は規制撤廃と構造改革を断行し個人も企業も自由に動けるようにすること以外に経済が前進する力は生まれてこない。</p>
                        <p>成長しないと分配を増やすことはできない</p>
                        <p>日本は全国銀行データ通信システムとCAFISというガラパゴス連合の呪縛があるためBNPLやオンライン決済はなかなか普及しない</p>
                        <p>人間が処理している定型作業をロボットで自動化するRPAツールや最新のパッケージソフトを導入して間接業務改革を実行すれば労働生産性が飛躍的に高まって企業の競争力は大幅に向上する</p>
                        <p>しかし、その結果9割のホワイトカラーが不要になって失業するので多くの日本企業はDXのメリットを享受できない</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Future_japan>
                ) : id == "sight" ? (
                    <Future_japan>
                        <p>。</p>
                        <p>日本における合計特殊出生率は2019年の統計で「1.36」</p>

                        <p>2020年は84万人、2021年(推計)は75万人と新型コロナの影響もあって出生数が激減しました。</p>
                        <p>もともと人口問題研究所の推計では出生数が75万人になるのは2039年ごろと考えられていました。したがって18年も前倒しで出生数が減ってしまったことになります</p>
                        <p>この少子化がもたらす影響というのはまず経済的な影響としては国内市場が小さくなる。それから労働供給、働き手が減少します。</p>
                        <p>さらに社会保障の負担をしなくてはいけない現役世代が減って代わりに高齢者が増えるので現役世代の負担が非常に増えます</p>
                        <p>そして経済成長率は当然低下して税収も減少しますから国債の乱発、ハイパーインフレのリスクが高まる。</p>

                    </Future_japan>
                ) : id == "edu" ? (
                    <Future_japan>
                        <p>韓国は1997年の「IMF危機」の屈辱をきっかけに1998年に就任した金大中大統領が英語教育とIT教育を強化して人材のグローバル化を推し進めた。それがその後の労働生産性向上と経済成長の原動力になった</p>
                        <p>日本における合計特殊出生率は2019年の統計で「1.36」</p>

                        <p>2020年は84万人、2021年(推計)は75万人と新型コロナの影響もあって出生数が激減しました。</p>
                        <p>もともと人口問題研究所の推計では出生数が75万人になるのは2039年ごろと考えられていました。したがって18年も前倒しで出生数が減ってしまったことになります</p>
                        <p>この少子化がもたらす影響というのはまず経済的な影響としては国内市場が小さくなる。それから労働供給、働き手が減少します。</p>
                        <p>さらに社会保障の負担をしなくてはいけない現役世代が減って代わりに高齢者が増えるので現役世代の負担が非常に増えます</p>
                        <p>そして経済成長率は当然低下して税収も減少しますから国債の乱発、ハイパーインフレのリスクが高まる。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>少子化対策海外事例</div>
                        <p>少子化問題に対して各国がどれくらいお金を使っているかOECD平均は2.34%。それに対して日本は1.79%</p>
                        <p>世界各国の少子化対策は大きく分けて4つあります。</p>
                        <p>1つは外国から来た移民の流入によって人口が増加している</p>
                        <p>2つは少子化が起きたが政策によって転換した国でフランス、スウェーデン,オランダ、ハンガリーなどが相当します。</p>
                        <p>3つめは少子化が起きたものの移民でしのいでいる国。ドイツ、イタリア、スペイン、カナダ</p>
                        <p>4つめの少子化が起きて現在も進行している国にはアジアの日本、中国、韓国、台湾、タイ</p>
                        <p></p>
                        <p>フランスの「N分N乗方式」は子だくさんな世帯ほど税金が優遇される仕組み
                        </p>
                        <p>ドイツの場合はドイツ人女性の合計特殊出生率は1.43と非常に低いのですが外国からの移民を受け入れることで人口減少に歯止めをかけました</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Future_japan>
                ) : id == "birthrate" ? (
                    <Future_japan>
                        <p>日本の少子化はものすごい勢いで加速している。</p>
                        <p>日本における合計特殊出生率は2019年の統計で「1.36」</p>

                        <p>2020年は84万人、2021年(推計)は75万人と新型コロナの影響もあって出生数が激減しました。</p>
                        <p>もともと人口問題研究所の推計では出生数が75万人になるのは2039年ごろと考えられていました。したがって18年も前倒しで出生数が減ってしまったことになります</p>
                        <p>この少子化がもたらす影響というのはまず経済的な影響としては国内市場が小さくなる。それから労働供給、働き手が減少します。</p>
                        <p>さらに社会保障の負担をしなくてはいけない現役世代が減って代わりに高齢者が増えるので現役世代の負担が非常に増えます</p>
                        <p>そして経済成長率は当然低下して税収も減少しますから国債の乱発、ハイパーインフレのリスクが高まる。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>少子化対策海外事例</div>
                        <p>少子化問題に対して各国がどれくらいお金を使っているかOECD平均は2.34%。それに対して日本は1.79%</p>
                        <p>世界各国の少子化対策は大きく分けて4つあります。</p>
                        <p>1つは外国から来た移民の流入によって人口が増加している</p>
                        <p>2つは少子化が起きたが政策によって転換した国でフランス、スウェーデン,オランダ、ハンガリーなどが相当します。</p>
                        <p>3つめは少子化が起きたものの移民でしのいでいる国。ドイツ、イタリア、スペイン、カナダ</p>
                        <p>4つめの少子化が起きて現在も進行している国にはアジアの日本、中国、韓国、台湾、タイ</p>
                        <p></p>
                        <p>フランスの「N分N乗方式」は子だくさんな世帯ほど税金が優遇される仕組み
                        </p>
                        <p>ドイツの場合はドイツ人女性の合計特殊出生率は1.43と非常に低いのですが外国からの移民を受け入れることで人口減少に歯止めをかけました</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Future_japan>
                ) : id == "birthrate" ? (
                    <Future>
                    <div className="text-center text-3xl m-4">
                        アフリカ
                    </div>
                    アフリカ大陸の面積はインドの10倍ある
                    ルワンダの首都キガリやケニアの首都ナイロビは高地なのでとても過ごしやすい
                    1年じゅう夏の軽井沢状態。
                    アフリカの全人口は現在約13億人。日本の中位年齢は48.4歳、最も人口の多いナイジェリアは18.1歳。他にもケニア20.1歳、エチオピア19.5歳、タンザニア18.0歳、コンゴは17.0歳

                    現在(2019)約13億人の人口が2050年にはほぼ2倍の約25億人になると予測されている
                    <div className='text-2xl'>
                        生産年齢人口比率
                    </div>
                    全人口のうち15歳から64歳までの働ける人口がどれだけいるかというのが生産年齢人口比率。
                    日本は1960年代から1980年代の終わりくらいまで70%前後だった
                    今、まさにピークを迎えているのが中国。2000年ごろから70%を超えて下落に転じている
                    これからピークを迎えるのがインドや中東です。インドは2040年くらいにピークを打って落ちていくことになる
                    そしてその後ピークを迎えるのがアフリカ
                    生産年齢人口とその国の経済のピークはリンクすると言われている
                    <div className='text-2xl'>
                        生活環境
                    </div>
                    アフリカの成人は全員といっても過言ではないほどにみんなスマホやケータイをすでに持っている
                    プリペイド方式が中心でパパママショップやコンビニ、M-PESAショップでお金をチャージする
                    <div className='text-2xl'>
                        社会・地域・経済
                    </div>
                    eコマースの発達と新型コロナウイルスの流行で人々が実店舗で買い物をしなくなり外食からも距離を置くようになった
                    <div className='text-2xl'>
                        地政学・外交・貿易
                    </div>

                    親米でスンニ派のアラブ諸国にはイスラエルによって占領されたパレスチナの解放とパレスチナ難民の帰還というアラブの大義がある
                    2020年9月にイスラエルとUAEの国交正常化
                    この後バーレーンもイスラエルとの国交正常化に合意した。
                    シーア派のイランはおもしろくない
                    同じシーア派のシリアは旧ソ連時代にロシアと友好協力条約を締結しており


                    新型コロナウイルスの感染流行によって世界経済は2008年のリーマンショック以来のマイナス成長となり、2009年が-0.1%で2020年賀-4.4%

                    コロナによる景気の悪化に対処するため世界各国で大規模な財政出動と金融緩和が行われている。
                    先進国の公的債務の対GDP日は123%と第二次世界大戦のころとほぼ同じ水準。
                    新興国は63%
                    緩和マネーの行き先が株式市場だ
                    コロナ禍における企業の業績は右肩上がりの上昇組と下降組の2つに分かれている。
                    その割合は前者が1に対し、後者が2で悪くなっている企業の方が多いのだ。しかし主要国株式指数は軒並み上昇。
                    本来株価は企業が将来生み出すであろう富の現在価値である。ところが生み出す富がこの先減るのはほぼ確実だというのに今は反対に株価が上昇している
                    完全に実体経済と乖離している



                    <div className="text-center text-3xl m-4">
                        中国
                    </div>
                    政府シンクタンクの中国情報通信研究所の試算によれば中国のデジタルエコノミー規模は2002年の約19兆円から2018年に500兆円にまで増加し、その後も拡大し続けている
                    さらにGDPに占めるデジタルエコノミーの割合は2018年の3割弱から2030年には8割に達すると予測されている
                    <div className='text-2xl'>

                    </div>
                    1970年代までの中国は人民公社の建設を中核とする計画経済政策を推し進めていましたが、1978年の鄧小平の登場で「改革・開放」
                    計画経済から社会主義市場経済
                    <div className='text-2xl'>

                    </div>
                    2010年には米国に次ぐ世界第2位の経済規模に登りつめ、2000年にはわずか960ドルに過ぎなかった中国の国民一人当たりのGDPは2019年には10倍以上の10000ドル超に達した
                    <div className='text-2xl'>
                        チャイナイノベーション
                    </div>
                    「グランドデザイン」と「地域間競争」「民間活力」によって1990年代以降の高度成長を実現させた
                    グランドデザインとは中央政府による長期的な成長戦略と推進政策、規制政策の策定
                    地域間競争により地域間で繰り広げられた競争が中国の経済成長をけん引してきた
                    そして最も重視されているのが民間活力の活用です。
                    民営経済は税収の50%超、GDPの60%以上、科学技術の成果の70%以上を占め、さらには都市部の雇用の80%以上を提供し、企業数の90%以上を占める
                    <div className='text-2xl'>

                    </div>
                    ビットコインに代表差される仮想通貨で活用されるブロックチェーン技術関連の特許の75%を生活用品などあらゆるものに小型デジタルデバイスを搭載し相互をインターネットでつなぐことで情報を共有するIoT
                    への投資の半分を、クラウドコンピューティング市場規模の75%以上を、プラットフォーマー上位70社の株式時価総額の約9割を米中が占有しています。
                    <table className='border-collapse'>
                        <tr>
                            <th>項目</th> <th>米中の割合</th><th>米国</th><th>中国</th><th>その他</th>
                        </tr>
                        <tr>
                            <th>ブロックチェーン技術関連の特許</th> <td>75%</td> <td>25%</td> <td>25%</td> <td>25%</td>
                        </tr>
                        <tr>
                            <th>IoT(モノのインターネット)への投資額</th> <td>50%</td> <td>26%</td> <td>24%</td> <td>50%</td>
                        </tr>
                        <tr>
                            <th>クラウドコンピューティング市場</th> <td>＞75%</td> <td>66%</td> <td>9%</td> <td>＜25%</td>
                        </tr>
                        <tr>
                            <th>上位70社のプラットフォーマーの時価総額</th> <td>90%</td> <td>-</td> <td>-</td> <td>10%</td>
                        </tr>


                    </table>
                    <div className='text-2xl'>

                    </div>
                    ユニコーン企業とは評価額が10億米ドル以上で設立10年以内の未上場の企業のことでその多くはデジタルエコノミーに関連するテクノロジー企業です。
                    米国の調査会社CBInsights社が公表するデータによると2020年6月16日現在で世界には473社のユニコーン企業があり、総評価額は1兆3950億ドルに及んでいます。
                    うち、米国発の企業は225社、中国発の企業は124社で米中が全体の約74%を占めています。



                    <div className="text-center text-3xl m-4">
                        日本
                    </div>
                    コロナウイルスの影響で人々の生活様式は根本的に変わってしまった。
                    どこの会社でもオフィスから離れた場所で仕事を行うテレワークが常態化し、「通勤から解放されたビジネスパーソンが都心を離れて地方に移住しはじめる」という現象が起こっている。
                    世界の株価は連日のように最高値を更新。2021年2月16日に日経平均株価は3万467円を記録し、バブル期以来30年ぶりに3万円台をつけた。
                    これは各国政府が傷ついた自国の実体経済を救うために補助金などの財政支出を増やしているのが原因である。その資金が行き場がなくなって株式市場に流れ込んできた結果「企業実績が落ちているのに株価が上がる」という官製バブル相場の様相を呈している
                    アメリカ国内のトランプ氏が富裕層を優遇し、白人至上主義を煽った結果二極化と分断がかつてないほど進んでしまった。

                    2019年11月に中国の湖北省武漢市で検出された新型コロナウイルスは瞬く間に全世界に感染が広がり、翌2020年3月には世界保健機関(WHO)がパンデミックを宣言
                    2021年4月15日現在のアメリカ国内における新型コロナウイルスによる死亡者数は約56万4000人にものぼる。これは第二次世界大戦期間中の戦闘による死者数29万1557人の2倍に迫っている。

                    今回の新型コロナウイルスのようなパンデミックは100年前にも起こっている。
                    スペイン風邪だ
                    1918年3月にアメリカとスペインで感染が始まり、1920年に収束するまでの3年間に3度の流行を繰り返し、世界中で約5億人が感染。5000万人以上の命が奪われた。
                    <div className='text-2xl'>
                        産業構造
                    </div>
                    既存体制の保護規制が少ない中国とアメリカが様々な分野でトップに躍り出た
                    反対に旧産業を保護するための仕掛けが出来上がっているEUや日本はその仕掛けが新しいことに挑戦する足かせとなり先の両大国に完全においていかれてしまっている
                    <div className='text-2xl'>
                        生活環境
                    </div>
                    今後は通勤という概念すらなくなっていくだろう
                    毎日会社に行かなくてもいいのであればもっと環境のいい場所に引っ越そうと考える人々が増えているのだ
                    仕事を終えたら同僚と一杯飲みに行くという文化も早晩消えていくに違いない
                    <div className='text-2xl'>
                        社会・地域・経済
                    </div>
                    eコマースの発達と新型コロナウイルスの流行で人々が実店舗で買い物をしなくなり外食からも距離を置くようになった
                    <div className='text-2xl'>
                        地政学・外交・貿易
                    </div>

                    親米でスンニ派のアラブ諸国にはイスラエルによって占領されたパレスチナの解放とパレスチナ難民の帰還というアラブの大義がある
                    2020年9月にイスラエルとUAEの国交正常化
                    この後バーレーンもイスラエルとの国交正常化に合意した。
                    シーア派のイランはおもしろくない
                    同じシーア派のシリアは旧ソ連時代にロシアと友好協力条約を締結しており


                    新型コロナウイルスの感染流行によって世界経済は2008年のリーマンショック以来のマイナス成長となり、2009年が-0.1%で2020年賀-4.4%

                    コロナによる景気の悪化に対処するため世界各国で大規模な財政出動と金融緩和が行われている。
                    先進国の公的債務の対GDP日は123%と第二次世界大戦のころとほぼ同じ水準。
                    新興国は63%
                    緩和マネーの行き先が株式市場だ
                    コロナ禍における企業の業績は右肩上がりの上昇組と下降組の2つに分かれている。
                    その割合は前者が1に対し、後者が2で悪くなっている企業の方が多いのだ。しかし主要国株式指数は軒並み上昇。
                    本来株価は企業が将来生み出すであろう富の現在価値である。ところが生み出す富がこの先減るのはほぼ確実だというのに今は反対に株価が上昇している
                    完全に実体経済と乖離している




                </Future>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
