import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Compound } from '../../../../components/layout/invester/invester';



const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "compound" ? (
          <Compound >
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                かつてアインシュタイン博士は複利の概念こそ人類最大の数学的発明だと言っている。
                あなたが今100ドルの資金を年10%で回る投資案件に2年間運用するとしよう。二年後の元利合計は121ドルになる。
                リターンは21%

                何年で価値が倍になるかを推定するには「七二の法則」に従って72を金利で割ればいい。例えば配当が年率15%で成長する場合には72/15 すなわち5年よりやや早く2倍になる


              </div>

            </div>
          </Compound >
        ) : id == "evaluation" ? (
          <Compound >
            <div className="w-3/4">
              <div className='flex items-start'>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    配当利回り
                  </div>
                  <div className="">
                    1年間の配当によるリターンが投資額の何%になるのか表したもの
                  </div>
                  <div>

                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    1株利益(EPS)
                  </div>
                  <div className="">
                    1年間にその会社がいくら稼いでいるのか1株あたりで表したもの
                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    株価収益率(PER)
                  </div>
                  <div className="m-2">
                    <p>株価が1年間の利益の何倍になっているか表したもの</p>
                    <p>株価収益率で表現することによって一株当たり利益や株価水準がいろいろ異なる多数の銘柄を共通の土俵で比較検討することができる
                      例えば投資を考えている銘柄の期待成長率が8.5%と予想されているとすると市場での平均的評価を知りたいとき期待成長率が近いGEの株価収益率は18倍
                      したがってその銘柄の株価収益率が仮に20倍になっているとすればその銘柄はやめてもっと低い株価収益のものを探した方がいい</p>
                  </div>
                </div>
              </div>
              <div className='flex items-start'>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    自己資本比率
                  </div>
                  <div className="">
                    負債及び純資産の合計額である「総資産」のうち返済不要の自己資本がどの程度占めているかを表す指標<br />
                    自己資本比率(%)=自己資本÷総資産(自己資本+他人資本)×100
                    自己資本は返済義務のないお金であり、他人資本は外部から調達した返済義務があるお金です
                  </div>
                  <div>

                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    グレアム指数
                  </div>
                  <div className="">
                    PER×PBR
                    5.0未満を割安と評価する
                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    株価純資産倍率(PBR)
                  </div>
                  <div className="m-2">
                    <p>企業の純資産に対して株価が高いか安いかを示すものでPBRが1倍なら純資産と時価総額が同額</p>
                    日本にはPBRが1倍未満の企業がたくさんあります。
                    PBRが1倍未満ということは市場は会社の事業価値をゼロ以下と判断しているということです。
                    PBR0.3の企業とは100億円の純資産がある会社が時価総額30億円で評価されているということ
                    低PBRの銘柄には銀行株が多いですが超低金利時代が継続する中で先行きの業績に対して明るい希望が持てないのと生命保険大手を中心に地方銀行株の売却を進める意向でしばらく株価は低迷する可能性がある
                    アメリカでは赤字の企業を除けばPBRが1倍未満の会社はほとんどありません
                  </div>
                </div>

              </div>
              <div className='flex items-start'>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    設備投資
                  </div>
                  <div className="">
                    設備投資に目を向けた投資例として有名なのはウォーレンバフェットが1972年に買収した「シーズ・キャンディ」
                    シーズ・キャンディはアメリカ西海岸の伝統的な企業で箱詰めされたチョコレートを製造販売しているお菓子メーカーです
                    当時は800万ドルの純有形固定資産を使って400万ドルの税引き前利益を出していました
                    お菓子メーカーは強力な定番商品があれば新たな設備投資が求められるような新製品を出し続けなくても済む<br />
                    自動車や半導体、液晶ディスプレイなどのメーカーは新製品を出し続けるために巨額の設備投資が求められます
                  </div>
                  <div>

                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    フリーキャッシュフロー
                  </div>
                  <div className="">
                    フリーキャッシュフローとは企業が自由に使えるお金で営業キャッシュフローから設備投資などの投資キャッシュフローを除いたものです
                    フリーキャッシュフローが黒字の会社は会社の資金繰りに問題はないので潰れることはほぼありません。
                    企業が自由に使えるお金が潤沢にあれば企業活動以外の株主への還元も高まる可能性があります
                    バフェット氏が三菱商事の株式を買った理由の1つは三菱商事が中期経営計画で「フリーキャッシュフローを7000億円まで増やす」ことを明記したからです
                  </div>
                </div>
                <div className="inline-block w-1/3 m-4">
                  <div className="text-3xl m-4">
                    PEGレシオ
                  </div>
                  <div className="m-2">
                    <p>PERをEPS成長率(1株あたりの当期純利益の成長率)で割って計算される</p>
                    2倍を超える銘柄は割高。1倍を超えているとやや割高、0.5~1倍であれば割安、0.5倍以下はお買い得の銘柄
                    PBRが1倍未満ということは市場は会社の事業価値をゼロ以下と判断しているということです。
                    アメリカでは赤字の企業を除けばPBRが1倍未満の会社はほとんどありません
                  </div>
                </div>

              </div>
              <div className="flex ">
                <div class="flex justify-between">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">株価評価の第一のルール</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p></p> 合理的な投資家は配当や利益の成長率が高ければ高いほど株式に対して高い価格を支払うはずである
                        <p></p> ・ダイナミックな高成長期にある企業の多くは利益のほとんどすべてを再投資するため配当は全くしないかほんのわずかでしかない
                        <p></p>  しかし、期待成長率が同じ程度の２つの企業を比べる場合には当然株主還元額の多いほうが株価は高くてしかるべきである。
                      </p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">株価評価の第二のルール</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p></p>  合理的な投資家は他の事情が等しければ企業の利益のうち現金配当ないしは自社株買い戻しで株主に還元される割合が多ければ多いほど高い株価をつけるはずである。
                        <p></p>    ある株式の価格変動が市場平均よりも大きいほどその株式のリスクは高いと考えられる
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">株価評価の第三のルール</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      合理的な投資家は他の事情が等しければその株式のリスクが低ければ低いほど高い価格を支払うはずである。
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">株価評価の第四のルール</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      投資家が合理的でほかの事情が等しければ金利水準が低ければ低いほど株価は高くなる
                    </p>
                  </div>
                </div>
              </div>
              <p></p>  ・将来についての期待が正しいかどうかは現時点では証明できない
              <p></p>  ・不完全なデータから正確な期待値を計算することはできない
              <p></p>  ・メスのガチョウにとって成長であることがオスのガチョウにとっても成長であるとは限らない

              <p></p>   2000年の始めにはナスダック100指数を構成する代表的な成長銘柄の平均株価収益率は100倍以上になっていた

              <p></p> 情報や分析が必ずしも正しいとは限らない
              <p></p> 情報が正しく、将来の成長率も適切に予想されるとしてもアナリストがそれに基づく株価評価を誤る可能性がある
              <p></p> 情報とそれに基づく推定結果のいずれもが正しいとしてもなおあなたの買った株の値段は下がるかもしれない


              <p></p>株式投資で成功するための最も重要な要素は長期の成長率
              <p></p>継続的な成長は利益と配当の増加だけでなく株価収益率も上昇させる

              <p></p>・利益成長率が今後5年以上にわたって市場平均以上の銘柄を買うこと
              <p></p>・株価がファンダメンタル価値以上になっている銘柄には手を出すな
              <p></p> ・投資家が「砂上の楼閣」を作れるようなストーリーが描ける銘柄を探そう

              <p></p> 市場にまだあまり知られておらず株価収益率が市場よりも極端に高くなっていないような成長株に投資する

              <p></p> PER=時価総額/当期純利益
              <p></p> その会社が1年間に稼ぎ出した純利益にたいして現在の株価が何倍なのか
              <p></p>  PERが低ければ低いほど割安

              <p></p>  配当性向=1株あたりの配当額/1株あたりの当期純利益 ×100

              <p></p>企業の価値はどのくらいの利益が出せるかとどのくらいの純資産があるかで決まります。
              <p></p>前者がPER、後者を見る指標がPBR
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400 '>企業価値</div>
              <p>企業価値とはその会社が将来にわたって生み出すと期待されるキャッシュフローの総額を現在価値に割り戻したもの</p>
              <h4>リスクプレミアム</h4>
              <p>将来の不確実性を考えると10年後に受け取る100万円は現在の100万円よりも価値が低いと考える。この不確実性による価値の差分のことをリスクプレミアムと呼ぶ</p>
            </div>
          </Compound >
        ) : id == "finance" ? (
          <Compound >
            <div className="w-2/4">
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400 '>ファイナンス</div>
              <div>
                <h4>外部からの資金調達</h4>
                <p>銀行から借り入れを行うデット・ファイナンスと株式を発行して投資家から資金を集めるエクイティ・ファイナンスの2種類がある。</p>
                <p>銀行からの借入(デット・ファイナンス)であれば負債の部の短期借入金や長期借入金、新たに株式を発行して資金を得た(エクイティ・ファイナンス)
                  であれば純資産の部の資本金・資本準備金の項目に計上されます。</p>
                <div className="flex ">
                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">デット・ファイナンス</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        デット・ファイナンスは返済義務のある資金調達方法です。
                        調達した資金額と金利に応じた利子を支払い、定められた期日に元本を返済する
                      </p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/2">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">エクイティ・ファイナンス</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        エクイティ・ファイナンスは返済義務のない資金調達方法です。
                      </p>
                    </div>
                  </div>
                </div>
                <p>資金調達がデット・ファイナンスに偏れば必ず返済しなくてはならないお金が多くなり、より安全性を重視した経営が求められます。</p>
                <p>逆にエクイティ・ファイナンスの比重が高まれば株式の価値向上を通じたリターンが期待されるという点で会社はより成長を求められる</p>
                <h4>資金の調達</h4>
                <p>事業を通じて売上が立つとBS状の資産の部に売掛金が計上されます。売掛金とは顧客に売った商品・サービスの代金の債権のことです。</p>
                <p>取引が成立して売上が立っても即座に会社にお金が入金されることは通常ありません。売掛金が増えるということは回収しなければいけない金額が増えているということ</p>

                <p>商品を製造するために仕入れた原料の対価のうち、まだ現金で支払っていない額が買掛金として計上されます。</p>
                <p>買掛金は支払期日に代金を支払わなければいけないという点で利子のない借金であるとも言えます。</p>
                <p>資金を創出するうえではなるべく売掛金を早く回収し、買掛金の支払期日を先延ばしにすると同時に在庫を必要な分量に保つことが資産を効率化する合理的な活動</p>
                <h4>資産の最適配分</h4>
                <h4>ステークホルダー・コミュニケーション</h4>
                <p>活動の意義や自社の将来に向けた事業方針を株主や債権者、顧客、従業員、取引先、地域社会といったステークホルダーに説明し、理解を得る活動がステークホルダー・コミュニケーションです。</p>

                <p>キャッシュをきちんとコントロールすることは企業価値を高める上で重要なポイントです。</p>
              </div>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400 '>ポートフォリオ</div>
              <div>
                <p>1つの投資先にすべての資金を集中した場合、期待通りに価格が上昇してくれれば大きく儲けることができます。投資した金額に対するリターンの割合でいえば集中投資に勝るものはありません。</p>
                <p>しかし、予想に反して価格が大幅に下落したときは損失も大きく膨らみます。そうした事態を回避するためにいくつかの投資先に分けて投資する</p>
                <p>ビジネスでは売上が上がったと見なされる瞬間と実際にお金が入ってくる瞬間にズレがあるケースが多くあります。</p>
                <p>一般的には商品が売れたと認識するタイミングでPL上は売上が計上されますが実際に支払いが行われるのはそれから1ヵ月~数か月先です。</p>
                <p>こうしたズレが生じることにより、PL状の利益と実際に会社に入ってくる現金の額は一致しないのです。</p>
                <p>もう1つズレの要因があります。それが減価償却です。冷蔵庫やパソコンなどはすぐに使い切るわけではなく数年間にわたって利用し続けるものです。</p>

                <p>このように事業運営に必要でなおかつ複数年にわたり利用し続けることができるBS上の資産を固定資産と呼びます。</p>
                <p>例えばパソコンの耐用年数を4年とした場合、4年間にわたって徐々にパソコンの価値が減っていくものとみなされます。</p>
                <p>もしも現金一括で20万円のパソコンを買ったとしたら、会社の口座から20万円がなくなります。</p>
                <p>キャッシュフロー計算書上では20万円が投資活動によるキャッシュフロー上に支出として計上されBS上では現金・預金が20万円減少し、代わりにパソコンの価値20万円分が有形固定資産として計上されます</p>
                <p>一方でPL上ではパソコンの価値が4年間にわたって5万円ずつ減少するとみなし、毎年5万円の減価償却費が費用として計上されるのです。</p>
                <p>BS上に記載されるパソコンの価値である有形固定資産20万円は減価償却費が差し引かれる分、翌年には15万円、その翌年には10万円と耐用年数に応じて年々価値が減っていきます。</p>
                <p>このように資産の購入費用を購入したタイミングではなくPL上で年度をまたいで徐々に費用として計上していくことを減価償却といいます。</p>
                <p></p>
              </div>
            </div>
          </Compound >
        ) : id == "financialstatements" ? (
          <Compound>
            <div className="">
              <div className="text-center text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <p>決算書を読むということは数字に目を通すだけではなく決算書から企業の戦略まで読み解くことを目指すべきです。</p>
                <p>そしてその目的のもとでは生きた財務諸表を使って、実際の戦略と決算書の数値を併せて見ていく必要があります</p>
                上場企業は年に1回決算書に事業内容の説明などを加えた書類である「有価証券報告書」を3ヵ月に1回。
                有価証券報告書の経過報告的位置づけの「四半期報告書」をそれぞれ提出することが求められています。
                決算書は一般的に
                <li>
                  貸借対照表
                  損益計算書
                  キャッシュフロー計算書
                  株主資本等変動計算書
                </li>
                <p>の4つからなります</p>
                <p></p>これらの書類を見れば会社がどのような資産を持っていて誰からお金を借りていて、自分のお金はどれくらいあるのかということや
                <p></p>今年はどれくらい売上があり、その売上を得るためにどのくらいの費用がかかったのか、そしてどのくらい利益が出たのか等の情報を確認することができます
                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書を読む目的　企業内部での目的
                </div>
                <p></p>企業は日々莫大な数の取引を行っていて、しっかりと成果測定をしなければなりません。また経営者はその成果測定の結果を受けて次の打ち手を考え実行していかなければなりません。
                <p></p>決算書から把握できる情報。現金があとどれくらいあるのか、数か月後に現金などになる権利である売掛金などがいくらあるのか企業の借金である借入金がいくら残っているのかということは今後の打ち手を考える上で考慮すべき重要な事項です
                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書を読む目的　銀行や投資家などの目的
                </div>
                <p></p>銀行であれば「利息」というリターン、投資家であれば「配当金」や「株価の値上がり益」等のリターンを期待するでしょう。
                <p></p>お金を貸したり投資したりすることの対価は将来こうしたリターンが見込めることが前提になるわけです
                <p></p>日本の証券市場は証券口座を開設することができる人であれば誰でも株式投資ができるようになっていますが、上場企業への株式投資を行うかどうかの判断を決算書だけで行っている人も数多くいます
                <p></p>そのぐらい決算書は投資する立場の人にとって有用なもの
                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書を読む目的　企業間の取引での目的
                </div>
                <p></p>他社へ製品を納入して後から代金を回収するというビジネスを行っている企業の場合、代金の回収までに取引先企業が潰れてしまうと代金を回収することができなくなってしまいます
                <p></p>これはビジネス上でかなり大きなリスクでできる限り避けなければなりません。こうした貸し倒れのリスクを抱えた企業を選別するためにも決算書をしっかりと見た上で取引を行うかどうかを判断する企業も少なくありません
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400 '>決算短信チェック</div>

              <div className='flex'>
                <div className='m-4 w-1/2'>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>売上と利益は増えたか</h2>
                  <p>レーザーテックの場合2020年7月1日から2021年3月31日まで1年間の売上は「70,248百万円」つまり、702億4800万円です。</p>
                  <p>その下には前期の売上が記載されていますが金額は455億7200万円で</p>
                  <p>レーザーテックは1960年創業で1990年に株式を店頭公開、2004年にジャスダック上場を果たし、2013年に東証1部に昇格した企業です。</p>
                  <p>この規模の会社の売上が1年で2倍になるのは珍しいことで成長性が非常に高いことが分かります</p>
                  <p>経常利益は264億8300万円で前年同期比74.9%。</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>純資産は増えたか</h2>
                  <p>純資産は会社の財務状況がどうなっているかを見る指標です。</p>
                  <p>レーザーテックの2021年決算短信の「連結財政状態」を見ると純資産は551.88億円。2020年6月期末は391.75億円なので</p>
                  <p></p>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>自己資本比率は適正か</h2>
                  <p>自己資本比率があまりに低いと負債すなわち借金をたくさんしてビジネスしていることになります。</p>
                  <p>自己資本比率が大きく減るのは純資産が大きく減少するか、借金が急増しているときです。</p>
                  <p>レーザーテックの自己資本比率は前年同期より低下し46.5%になっています。前2020年6月期は</p>
                  <p>ソフトバンクグループのように巨額の借金をして身の丈を超える投資事業を行い成長している企業もあります。</p>
                  <p>ソフトバンクグループの2021年3月期決算を見ると「親会社所有者帰属持分比率(自己資本比率)」は22.3%しかありません。</p>
                  <p></p>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>今期予想はどうか</h2>
                  <p>今期予想はその四半期が属する事業年度にどれくらい売上や利益を上げるか、会社自身が予想した数字です。</p>
                  <p>業績予想の修正は。</p>
                  <p>レーザーテックの自己資本比率は前年同期より低下し46.5%になっています。前2020年6月期は</p>
                  <p>ソフトバンクグループのように巨額の借金をして身の丈を超える投資事業を行い成長している企業もあります。</p>
                  <p>ソフトバンクグループの2021年3月期決算を見ると「親会社所有者帰属持分比率(自己資本比率)」は22.3%しかありません。</p>
                  <p></p>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>進捗率と四半期特性はどうか</h2>
                  <p>業種によっては四半期ごとの売上や利益に偏りがある企業もあります。</p>
                  <p>レーザーテックの場合は半導体製造装置という高額な製品を販売しているため売れる期と売れない期で売上・利益が大きく変動します。</p>
                  <p>例えばレーザーテックの2020年6月期の四半期ごとの売上は</p>
                  <p>第1四半期(19年7~9月)　55.4億円(13.7憶万円</p>
                  <p>第2四半期(19年10~12月)　144.1億円(65.8憶万円</p>
                  <p>第3四半期(20年1~3月)　56.5億円(9.7憶万円</p>
                  <p>第4四半期(20年4~6月)　169.7億円(62.0憶円</p>
                  <p>一方業種によっては売上が季節ごと規則的に変化する企業もあります。</p>
                  <p>例えばゲーム会社の任天堂の場合12月のクリスマスが入った第3四半期に突出して売上も利益も大きくなるという特徴があります</p>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>四季報予想と比べてどうか</h2>
                  <h2 className='text-2xl text-center m-4 border-b-4 border-blue-400'>決算状況、差異事由などを確認</h2>
                  <p>成長企業の特徴や強みを理解するための「定性分析」も重要。</p>
                  <p>「当四半期決算に関する定性的情報」の中でも「経営成績に関する説明」。</p>
                  <p>レーザーテックの2021年6月期第三四半期決算は売上、経常利益とも前期比2倍超の好決算でしたが4ページ目の「定性的情報」の文章を見ると経営成績に対する自社分析を確認できます</p>
                  <ul>
                    <li>レーザーテックが属する半導体業界では米中摩擦の高まりや半導体を特定の地域に依存する地政学リスクのため中長期的なサプライチェーンの再構築が進んでいること</li>
                    <li>足元では5Gのスマートフォンやリモートワークの広がりによるPC需要、データセンター向けの最先端半導体需要が堅調なこと。</li>
                    <li>ロジック、メモリデバイスメーカーが最先端のEUV(極端紫外線)リソグラフィを用いた半導体製造工程の能力増強を継続していること</li>
                    <li>マスクブランクスメーカーもEUV関連分野の投資に取り組んでおり、半導体関連装置市場は今後の拡大が見込まれていること</li>
                  </ul>
                  <p>などが記述されており</p>
                  <p>また同社の主力商品がEUVリソグラフィに使うマスクブランクスや半導体の設計回路の欠陥をEUV光源を使用して発見する検査装置だということが分かります。</p>
                  <p>この製品が世界中の半導体産業から引く手あまたの人気商品となり、前期比2倍超も売れていることが成長の原動力というわけです。</p>
                  <p>第4四半期(20年4~6月)　169.7億円(62.0憶円</p>
                  <p>一方業種によっては売上が季節ごと規則的に変化する企業もあります。</p>
                  <p>例えばゲーム会社の任天堂の場合12月のクリスマスが入った第3四半期に突出して売上も利益も大きくなるという特徴があります</p>
                </div>
                <div className='mr-4 w-1/2'>
                  <Image
                    src="/images/company/raser_point.png"
                    alt="01:Pythonとは？"
                    width={790}
                    height={1200}

                  />
                </div>
              </div>


              <div>

                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書には3つの決算基準がある
                </div>
                <p></p>企業は日々莫大な数の取引を行っていて、しっかりと成果測定をしなければなりません。また経営者はその成果測定の結果を受けて次の打ち手を考え実行していかなければなりません。
                <p></p>決算書から把握できる情報。現金があとどれくらいあるのか、数か月後に現金などになる権利である売掛金などがいくらあるのか企業の借金である借入金がいくら残っているのかということは今後の打ち手を考える上で考慮すべき重要な事項です
                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書を読む目的　銀行や投資家などの目的
                </div>
                <p></p>銀行であれば「利息」というリターン、投資家であれば「配当金」や「株価の値上がり益」等のリターンを期待するでしょう。
                <p></p>お金を貸したり投資したりすることの対価は将来こうしたリターンが見込めることが前提になるわけです
                <p></p>日本の証券市場は証券口座を開設することができる人であれば誰でも株式投資ができるようになっていますが、上場企業への株式投資を行うかどうかの判断を決算書だけで行っている人も数多くいます
                <p></p>そのぐらい決算書は投資する立場の人にとって有用なもの
                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書を読む目的　企業間の取引での目的
                </div>
                <p></p>他社へ製品を納入して後から代金を回収するというビジネスを行っている企業の場合、代金の回収までに取引先企業が潰れてしまうと代金を回収することができなくなってしまいます
                <p></p>これはビジネス上でかなり大きなリスクでできる限り避けなければなりません。こうした貸し倒れのリスクを抱えた企業を選別するためにも決算書をしっかりと見た上で取引を行うかどうかを判断する企業も少なくありません
              </div>

            </div>
          </Compound>
        ) : id == "analytics" ? (
          <Compound >
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                チャートパターン
              </div>
              <div>

                <div className='text-xl text-center m-4 border-b-4 border-blue-400 w-1/3'>
                  決算書には3つの決算基準がある
                </div>
                <p>決算書分析の基本は比較です。</p>
                <p>比較分析には大きく2つの方法があります。</p>
                <p>1つの企業を時系列で見る「時系列分析」と他の競合とを比較して見る「競合比較分析」です。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'> 時系列分析</div>
                <p>「時系列分析」は異なる年の業績を比較することによってその数値が大きくなっているのか、小さくなっているのか、その原因を探っていきます。</p>
                <p>売上と利益の5年分の推移を併せて比較した際、「売上は継続的に増加している一方で利益は継続的に減少している」などといった企業の業績のトレンドに気づくことができます</p>
                <p>時系列分析のポイントは2つあります。</p>
                <p>1つ目が転換点です。売上高が右肩上がりになっていたもののあるタイミングで減少トレンドに転じた企業があったとします。</p>
                <p>その場合、切り替わったタイミングに企業の中では絶対に何かが起こっているはずなのでそのポイントを見ていくというのが転換点の読み方です。</p>
                <p>もう1つが異常値です。例えば売上高の推移がずっと一定で動いていたにも関わらずあるタイミングでいきなり減少してしまった企業があったとします。</p>
                <p>他とは明らかに違う動きが出たときには、そこで何か異常なことが起こっているのではないかと考え、その年を重点的に見ていくことで企業で何が起こったのかが分かる。</p>
                <Image
                  src="/images/bspl/time.png"
                  alt=""
                  width={560}
                  height={200}
                />
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'> 競合比較分析</div>
                <p>時系列分析は1つの企業の財務数値を時系列で比べるという方法でしたが競合比較分析は企業と別の企業の数値を比べる分析手法です。</p>
                <p>企業と企業を比較することでその優劣やビジネスモデルの違いなどに気づくきっかけになります。</p>
              </div>

              <div>

              </div>

            </div>
          </Compound >
        ) : id == "profit" ? (
          <Compound>
            <div className="text-center w-3/4">

              <div className="text-3xl m-4">
                損益計算書ってなんだろう
              </div>
              <div className="border-b-2 border-blue-400">
                <div className='m-4 text-left w-1/2 inline-block'>
                  <p>損益計算書は売上から費用を引いた最終的な利益を表したものだ。</p>
                  <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
                  <p>左側に費用をまとめ、右側には収益をまとめます</p>
                  <p>借方と貸方は一致します</p>
                  <div>
                    <div className="inline-block m-4">
                      <h5>利益が出ている場合</h5>
                      <Image
                        src="/images/profit2.png"
                        alt=""
                        width={150}
                        height={250}
                      />
                    </div>
                    <div className="inline-block m-4">
                      <h5>損失が出ている場合</h5>
                      <Image
                        src="/images/profit3.png"
                        alt=""
                        width={150}
                        height={250}
                      />
                    </div>
                  </div>
                  <p>収益・・・企業が1年間に売り上げた金額。<br />収益には商品を販売し対価を得たときに発生する売上やお金を貸して利息を受け取った時に発生する受取利息が含まれます。
                  </p>
                  <p>費用・・・従業員の給料や広告費用など企業が1年間でかけた費用</p>
                  <p>利益や損失・・・収益と費用の差で計算する。この数字を見ることで<br />その企業が儲かっているかどうかが分かる</p>
                </div>
                <div className='m-4 inline-block '>
                  <div className="">
                    <Image
                      src="/images/profit.png"
                      alt=""
                      width={315}
                      height={550}
                    />
                  </div>
                  <div>
                    <p>損益計算書は売上から費用を引いた最終的な利益を表したものだ。</p>
                    <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>

                  </div>
                </div>

              </div>



              <div className='m-4 text-left w-1/2 border-b-2 border-blue-400'>
                <a className=" text-xl underline decoration-indigo-500">
                  利益の種類
                </a>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ①売上総利益とは<br />
                      売上総利益は売上高から原価を差し引いて算出されます。<br />
                      商品・サービスの強さを表す利益です。
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ②営業利益とは<br />
                      営業利益は売上総利益から販管費を差し引いて算出されます<br />
                      販管費には広告宣伝に使用した費用や従業員の給料が含まれる<br />
                      ビジネスモデルの強さ、事業の強さを表す利益
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ③経常利益とは<br />
                      会社の実力が一番反映される利益ともいわれています<br />
                      経常利益は本業で獲得した営業利益に本業以外で獲得した収益を加算し費用を控除して算出されます
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ④税引前当期純利益とは<br />
                      税引前当期純利益とは特定の機関に発生した全ての事象を加味して算出された利益です<br />
                      経常利益に特別損益といった毎期のように発生しない事象から発生した利益や損失を加算して算出されます
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div>
                  <p>売上総利益とは</p>
                  <p>売上総利益は売上高から原価を差し引いて算出されます</p>
                </div>
                <p>売上総利益とは</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
              </div>
              <div className='m-4 text-left border-b-2 border-blue-400'>
                <a className=" text-xl underline decoration-indigo-500">
                  利益の種類
                </a>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">売上高から各種の発生した費用を引いていき最後に当期純利益が残るイメージです</p>
                    <p>販売した商品を仕入れた金額は売上原価</p>
                    <p>商品を販売するために間接的に発生した費用を販管費といいます。<br />広告宣伝をしたり、商品を販売するための店舗を借りたり、店舗で販売するスタッフを採用したり</p>
                    <p>本業の営業活動以外で毎期継続的に発生するものを営業外損益項目といいます。たとえば副業の株式投資で得られる収益や費用、借入金の利息なども該当します</p>
                    <p>頻繁には発生しない特別な事象によって発生した科目は特別損益項目に分類されます。たとえば火災による損失や事業の売却収益など</p>
                    <p>最後に企業の稼いだ利益に応じて課された税金などが除かれて企業の手元に利益が残る</p>
                  </form>
                  <div class="flex-none relative">
                    <Image
                      src="/images/matome.png"
                      alt=""
                      width={760}
                      height={428}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-around'>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/japan_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “日本企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/america_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “米国企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/china_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “中国企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/china_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “インド企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Compound>
        ) : id == "balancesheet" ? (
          <Compound >
            <div>
              <div className="text-3xl m-4 text-center">
                貸借対照表
              </div>
              <div className="flex border-b-2 border-blue-400">
                <div className='m-4 text-left w-1/2 inline-block'>
                  <p>どの企業も運営するための資金調達をする必要があります。</p>
                  <p>調達の方法は①株主から調達する方法、②銀行等から借り入れて調達する方法です</p>
                  <p>株主から調達したお金は資本金(純資産)に計上されます。純資産は基本的に企業の自己資本と呼ばれ返済が不要な資金になります</p>
                  <p>株主から調達したお金は企業の成長のために様々な用途で使うことができます。例えば企業の商品を製造するための生産工場を建てるために使うなどです</p>
                  <p>2つ目の銀行などの金融機関から借り入れる方法の場合、借り入れたお金は借入金(負債)として計上され借入金は期限内に利息を付けて全額返済する必要があります</p>
                  <p>もちろん借り入れたお金であっても企業の成長のために様々な用途で使えることに変わりありません。例えば前述のように生産工場を建てることにも使えますし、材料を仕入れることにも使えます</p>
                  <p>このように貸借対照表は企業の運営に必要なお金をどのような手段で集めてきたのかそして集めたお金をどの様な用途で使ったのかということが一覧できる表になっているわけです</p>
                  <p></p>
                  <p></p>
                </div>
                <div className='m-4 inline-block '>
                  <div className="">
                    <Image
                      src="/images/bs/BS.png"
                      alt=""
                      width={560}
                      height={315}
                    />
                  </div>
                </div>

              </div>
              <div className="text-xl m-4">
                貸借対照表は財産の状況が分かる
              </div>
              <p>企業が保有している財産の残高を記録したものなので「この会社には一体いくらの財産があるの？」という情報を見ることができます。</p>
              <p>また、借金をしている企業の場合、いくら財産をたくさん保有していてもそれ以上に借金があれば実質財産はセロです</p>
              <p>こうした財産に関する情報をまとめたものが貸借対照表です</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>資産</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">資産:</span>会社の保有する財産。
                </div>
              </div>
              <p>資産は「流動資産」と「固定資産」という項目に分けられます。</p>
              <p>売掛金など比較的早期に現金化するようなものや販売すれば比較的短期間で現金になる商品は流動資産に含まれます。</p>
              <p>固定資産はすぐに現金に換金しないような会社が長期保有する項目がはいります。例えば建物や車、会社の設備などです。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>負債</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">負債:</span>会社が将来支払う義務があるもの。
                </div>
              </div>
              <p>負債も「流動負債」と「固定負債」という項目に分けられます。</p>
              <p>1年以内に返済しなければいけないものは流動負債です。短期の借入金や買掛金のようなもの</p>
              <p>一方で1年を超えて借り続けられるものは固定負債になります。長期の借入金や社債などです。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>純資産</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">純資産:</span>資産総額から負債総額を差し引いた残りの部分。大部分は株主資本。
                </div>
              </div>
              <p>純資産に関しては負債と異なって返済が不要な科目で構成されているので、純資産が厚ければ厚いほど会社の安全性は高くなりやすいとされています。</p>
              <p></p>
              <p></p>
              <div className="text-xl m-4">
                項目によって左右にグループを分ける
              </div>
              <p>バランスシートでは左側に資産をまとめ、右側には負債と純資産をまとめます</p>
              <div className="text-xl m-4">
                借方と貸方は一致する
              </div>
              <p>資産の合計額と負債と純資産の合計額は必ず一致します</p>
              <p>資産とは会社が持っている現金や預金、販売用の商品や土地、建物など財産や法的権利を意味します。</p>

              <p>負債とは銀行からの借入金や仕入れ先などに後日支払わなければならない法的義務を意味します</p>
              <p>純資産とは資産から負債を差し引いた正味の財産を意味します。</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス2020年3月期バランスシート</div>
              <div className='flex'>
                <div>
                  <Image
                    src="/images/bs/KFC_BS.png"
                    alt=""
                    width={760}
                    height={428}
                  />
                </div>
                <div>
                  <Image
                    src="/images/bs/KFC_grapth.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>例</div>
            <p>飲食業は総じて新型コロナウイルスによって苦境に立たされましたがテイクアウト需要をうまく取り込んだ日本KFCHDの財務基盤は盤石です。</p>
            <p>一方ロイヤルHDはレストラン事業で大打撃を受けただけでなく不運なことにほかの事業(機内食販売やホテル事業など)も新型コロナの影響を受けてしまい一気に経営危機に陥りました</p>
            <div className='flex'>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス</div>
                <Image
                  src="/images/bs/KFC202012_grapth.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:50.9%  <br />2020年10月期</p>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロイヤルホールディングス</div>
                <Image
                  src="/images/bs/royalHD_grapth.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:19.8%  <br />2020年10月期</p>
              </div>
            </div>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス2020年3月期バランスシート</div>
            <div className='flex'>
              <div>
                <Image
                  src="/images/bs/KFC_BS2.png"
                  alt=""
                  width={760}
                  height={428}
                />
              </div>
              <div>
                <Image
                  src="/images/bs/KFC_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p>流動資産とは資産のうち1年以内に現金化されるものを指します。たとえば現金や預金はもちろん販売用の商品も通常1年内に顧客に売って現金を手にすることができるので流動資産に含まれます</p>
            <p>固定資産とは資産のうち現金化するのに1年を超えるものを指します。たとえば製品を作るための機械装置や建物などは1年で売却することは考えにくくそれよりずっと長く使い続けるのが通常なので固定資産に含まれます</p>
            <p>流動負債とは1年内に支払わなければならない債務を指します。例えば返却期限が1年内に到来する借入金は流動負債に含まれます。</p>
            <p>固定負債とは支払期限が1年超の債務を指します。例えば5年後に返済期限が到来する借入金は固定負債に含まれます</p>
            <p></p>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>例</div>
            <p>日本KFCHDは流動負債よりも流動資産の方が大きいのに対し、ロイヤルHDは流動資産よりも流動負債のほうが大きいことが見て取れます。</p>
            <div className='flex'>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス</div>
                <Image
                  src="/images/bs/KFC202012_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>流動比率:158.3%  <br />2020年12月期</p>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロイヤルホールディングス</div>
                <Image
                  src="/images/bs/royalHD_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:54.7%  <br />2020年12月期</p>
              </div>
            </div>
          </Compound >
        ) : id == "profit&balancesheet" ? (
          <Compound>
            <div className="text-center">
              <div className='m-4 text-left border-b-2 border-blue-400'>
                <a className=" text-xl underline decoration-indigo-500">
                  利益の種類
                </a>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      製造した商品を顧客に売り渡し対価として現金を受け取ったとします。<br />
                      この時P/Lには受け取った対価が「売上高」として計上され売り渡した商品の原価が「売上原価」として計上されます。<br />
                      ここで商品代金である売上高と商品原価である売上原価には差が生じます。この差が利益または損失となるのです。<br />
                      計算された利益はB/S上の純資産として計上されます。つまり利益剰余金という項目は過去の利益または損益の積み重ねによるものなのです。<br />
                      またこのことから分かるように利益を出し続けている企業は純資産の金額がかなり大きくなります。<br />
                      貸借対照表と損益計算書は利益と純資産という部分でつながっている<br />
                      <br />
                    </p>
                  </form>
                  <div class="flex-none relative">
                    <Image
                      src="/images/bs/BS&PL.png"
                      alt=""
                      width={560}
                      height={315}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ②営業利益とは<br />
                      営業利益は売上総利益から販管費を差し引いて算出されます<br />
                      販管費には広告宣伝に使用した費用や従業員の給料が含まれる
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ③経常利益とは<br />
                      会社の実力が一番反映される利益ともいわれています<br />
                      経常利益は本業で獲得した営業利益に本業以外で獲得した収益を加算し費用を控除して算出されます
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      ④税引前当期純利益とは<br />
                      税引前当期純利益とは特定の機関に発生した全ての事象を加味して算出された利益です<br />
                      経常利益に特別損益といった毎期のように発生しない事象から発生した利益や損失を加算して算出されます
                    </p>
                  </form>
                  <div class="flex-none w-48 relative">
                    <Image
                      src="/images/profit3.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                </div>
                <div>
                  <p>売上総利益とは</p>
                  <p>売上総利益は売上高から原価を差し引いて算出されます</p>
                </div>
                <p>売上総利益とは</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
                <p>ぶっちゃけ今年、この企業は儲かったの？という企業の成績表を見ることができるもの</p>
              </div>
              <div className='m-4 text-left border-b-2 border-blue-400'>
                <a className=" text-xl underline decoration-indigo-500">
                  利益の種類
                </a>
                <div class="flex font-sans">
                  <form class="flex-auto p-6">
                    <p class="">
                      売上高から各種の発生した費用を引いていき最後に当期純利益が残るイメージです
                    </p>
                  </form>
                  <div class="flex-none relative">
                    <Image
                      src="/images/matome.png"
                      alt=""
                      width={760}
                      height={428}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-around'>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/japan_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “日本企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/america_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “米国企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/china_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “中国企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
                <div class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                  <div class="md:rounded-none rounded-full mx-auto">
                    <Image
                      href="/invester/stock/stock_detail_brand_sector"
                      src="/images/china_company.png"
                      alt=""
                      width={150}
                      height={250}
                    />
                  </div>
                  <div class="">
                    <p className='text-lg font-medium'>
                      “インド企業の損益計算書を見ていく”
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </Compound>
        ) : id == "cashflow" ? (
          <Compound>
            <div className="">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <p>キャッシュフロー計算書とはその企業の現金・預金がどれくらい増減したのかを計算する書類。</p>
                <p>企業の活動には大きく分けて「営業活動」「投資活動」「財務活動」の3つがあります。</p>
                <p></p>営業活動は本業の営業活動による現金預金の増減
                <p></p>投資活動は固定資産や株式などの投資による現金預金の増減
                <p></p>財務活動は資金調達や借入金の返済などによる現金預金の増減
                <p></p>営業キャッシュフローは「商品を販売して手に入れた現金」「材料を仕入れるために支払った現金」「広告宣伝費などの販管費の支払いの際に流出した現金」
                「税金コストの支払い」「災害に伴う保険金の受取」などが該当します。
                <p>キャッシュフロー計算書を図解する場合「ウォーター・フォール・チャート」にすると分かりやすくなります。</p>
                <p>このウォーター・フォール・チャートは期首に保有されていた現金が営業活動、投資活動、財務活動のそれぞれによってどれだけ増減したのかを示すグラフです。</p>
                <p>グラフの左から期首における現金残高、営業活動によるキャッシュフロー(営業CF)、投資活動によるキャッシュフロー(投資CF)、財務活動によるキャッシュフロー(財務CF)が示されています。、</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>営業キャッシュフロー</div>
                <p>本業で現金がどれだけ増減したのかを表しています。</p>
                <p></p>営業キャッシュフローがプラスの場合本業によってしっかりと現金預金が回る状態にあり、順調な状態であるとみることができます。
                <p></p>営業キャッシュフローがプラスであればその分を投資活動の財源にしたり株主への利益還元の財源にしたりすることができます
                <p></p>営業キャッシュフローがマイナスの場合他の投資活動や財務活動でそのマイナスを補う必要が出てきます
                <p></p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>投資活動によるキャッシュフロー</div>
                <p></p>投資キャッシュフローで見るべきポイントは営業活動や財務活動によって流入した現金を投資して事業拡大を目指した動きを取れているか
                <ul>
                  <li>投資の財源はどこから来ているのか？</li>
                  <li>投資先はどこなのか？</li>
                  <li>投資する市場はどのステージでどの程度の投資を行っているのか？</li>
                </ul>
                <p></p>企業の例を挙げるとソフトバンクは「財務活動(外部からの資金調達)によって得た現金で成長市場のベンチャー企業に投資している」一方、サイバーエージェントは
                <p></p>「営業活動で得た現金を成長市場に位置する新規事業に投資している」
                <p></p>どちらも成長市場に資金を投資していることに変わりありませんがソフトバンクは財務活動からサーバーエージェントは営業活動から資金を得ている。
                <p>企業が設備を買ったり、新規に子会社を買収した場合はお金が出ていくので投資活動によるキャッシュフローはマイナスになります。</p>
                <p>一方で自社が保有している設備や外部の企業の株式などを売却してお金が入ってきた場合はプラスになります。</p>
                <div className="block">
                  <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/3">
                    <div class="">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">投資の財源</h1>
                        <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">ポイント1</p>
                      </div>
                      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        投資を行うには必ず財源が必要です。この会社は投資の財源をどこから・どのように調達してきているのかについて考える必要があります。<br />
                        本業でちゃんとお金が作れているのであれば本業で稼いだお金を投資に回すことが可能です。
                      </p>
                    </div>
                  </main>

                  <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/3">
                    <div class="">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">何に投資をしているのか</h1>
                        <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">ポイント2</p>
                      </div>
                      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        投資する対象は大きく3つあります。
                        1つは事業用の資産。工場や店舗の増設などといった本業で使うための資産です。
                        次に外部の企業への投資。企業を買収する、ベンチャー企業へ投資する
                        もう1つは非事業用資産。株式のような金融商品や投資目的の不動産というようなもの。
                      </p>
                    </div>
                  </main>
                  <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/3">
                    <div class="">
                      <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">投資の規模</h1>
                        <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">ポイント3</p>
                      </div>
                      <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        投資額がどれぐらいなのかもチェックする必要があります。
                      </p>
                    </div>
                  </main>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>財務活動によるキャッシュフロー</div>
                <p>財務活動によるキャッシュフローは企業が株式や借入金を通して資金調達を行う際の調達と返済の状況が記載されます。</p>
                <p>銀行からお金を借りたり、新株を発行した場合は会社にお金が入ってくるのでプラス</p>
                <p>一方で返済したり、株主への配当などを支払ったりすると会社からお金が出ていくので矢印は下向きになります。</p>
                <p>財務活動によるキャッシュフローでよくあるパターンは営業活動の本業でお金を稼ぎ、その一部を投資に回し、残った金額を借金の返済や配当金に充てる。</p>
                <p>もう一例としては本業で稼いだ以上に投資にお金を回しているケースです。成長中の企業はこのようなケースが多いです。</p>
                <p>本業で足りない分の資金は財務活動で調達してきていることになります。</p>
                <div>
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>キャッシュフローパターン</div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>健全型キャッシュフロー</h5>
                    <p>本業で得た資金を投資や借入金の返済に充てている状態です</p>
                    <Image
                      src="/images/kenzen.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>積極型キャッシュフロー</h5>
                    <p>事業拡大フェーズの企業に多いキャッシュフローです。本業で得た資金を投資に回す一方足りない分を借入金などによって賄っている状態です。</p>
                    <Image
                      src="/images/sekkyoku.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>改善型キャッシュフロー</h5>
                    <p>事業を縮小しようとしている企業に多いキャッシュフローです。本業で得た資金に加え、固定資産などの売却で得た資金なども活用して借入金の返済などを行っている状態です。</p>
                    <p>投資活動が行われていない状態なので事業が縮小していくことが分かります</p>
                    <Image
                      src="/images/kaizen.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>衰退型キャッシュフロー</h5>
                    <p>事業が衰退している企業に多いキャッシュフローです。本業で資金が流出しており、固定資産などの売却で得た資金などで借入金の返済などを行っている状態です</p>
                    <Image
                      src="/images/suitai.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>勝負型キャッシュフロー</h5>
                    <p>資金繰りが厳しい企業に多いキャッシュフローです。本業で資金が流出している中、借入金などの資金調達で得た資金を投資に充てている状態です。</p>
                    <p>ベンチャー企業等でこの形がよく見られます。</p>
                    <Image
                      src="/images/shobu.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="inline-block m-4 w-1/5">
                    <h5 className='text-center'>救済型キャッシュフロー</h5>
                    <p>かなり厳しい企業に多いキャッシュフローです。本業で資金が流出しており固定資産などの売却を行っても資金が足りず追加で借入を行っている状態です。</p>
                    <p>2016年の東芝のC/Sはこのようになっていました</p>
                    <Image
                      src="/images/kyusai.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-2xl text-center m-4 border-b-4 border-blue-400'>銀行を子会社化した時のキャッシュフロー計算書</p>
                  <p>ヤフーはジャパンネット銀行(現:PayPay銀行)を子会社化しています</p>
                  <div className="inline-block m-4">
                    <p className='text-xl'>ヤフーの財務データの前当期比較</p>
                    <Image
                      src="/images/bs/yahoo.png"
                      alt=""
                      width={600}
                      height={200}
                    />
                  </div>
                  <div className="inline-block m-4">
                    <p className='text-xl'>ヤフーの連結キャッシュフロー計算書</p>
                    <Image
                      src="/images/cash/yahoo_cash.png"
                      alt=""
                      width={250}
                      height={250}
                    />

                  </div>
                  <p>買収先の銀行は多額の現金を持っています<br />
                    この現金は買収後にヤフーのキャッシュフローと合算されるため結果的にヤフーには多額のキャッシュフローが流入することになります。<br />
                    ジャパンネット銀行の買収に際して買収元のヤフーが買収の際に支出した金額よりジャパンネット銀行が買収直前に持っていた現金の額の方が多かったため結果的に<br />
                    買収後にキャッシュフローが増加するという特殊な事例となった。<br />
                  </p>
                </div>
                <p></p>
                <p></p>
                <p></p>
              </div>

            </div>
          </Compound >
        ) : id == "siki" ? (
          <Compound >
            <div className="">
              <div className="text-3xl m-4">
                四季報の見方
              </div>

              <div>
                <div className="text-xl m-4">
                  企業概要
                </div>
                <p>「特色」はどんな事業を行っているかを説明している項目です。その企業がどんな市場で事業を展開し、どんな強みを持っているかが分かります</p>
                <p>特色の欄に世界首位「業界首位」「シェア1番」などと書かれている企業はその分野で優位性を持っているということですから「優良株」の可能性を秘めています。</p>
                <p></p>
                <div className="text-xl m-4">
                  業績と今後の展望
                </div>
                <p>成長株を探す場合は「絶好調」「最高益」「続伸」「急進」「飛躍」といったポジティブな見出しを探していきます</p>
                <p>業績回復株を探す場合は足元の業績が悪化しているものを探すため「悪化」「赤字」などネガティブな見出しに注目します</p>
                <p></p>
                <div className="text-xl m-4">
                  業績と今後の展望
                </div>
                <p>「財務」の部分に貸借対照表の重要な数字が抜粋されています</p>
                <p>その中の自己資本比率は経営の健全性を表すもので「バリュー株」を探すときに使います</p>
                <p>「キャッシュフロー」は企業のお金のやりくり</p>
                <div className="text-xl m-4">
                  売上と利益の推移
                </div>
                <p>過去数年間の営業成績、今季・来季の四季報独自の予想が書かれています</p>   <p></p>
                <p>売上高の伸びを増収率といいこれこそが成長性であり、株価の値上がりが期待できる成長株を探す際の重要な手がかり</p>
                <p>売上高は顧客数×単価で表せるため増収率が高いときは顧客数が増えているか単価が上がっていると言えるので成長力があると判断できます</p>
                <div className="text-xl m-4">
                  株価の方向性と変化
                </div>
                <p>チャートは3年分強(41ヵ月)の値動きが確認できます</p>
                <p>ローソク足は月足。移動平均線は12か月平均と24ヵ月平均です。</p>
                <p>株価指標には株価の割安さの指標となるPERとPBRが書かれています。</p>
                <p></p>
                <div className="text-xl m-4">
                  大株主と持株比率
                </div>
                <p>株主には株主構成が書かれています。誰がどれくらいその企業の株を持っているかを示しています</p>
                <p>大化けする株はオーナー企業が多い</p>
                <p></p>
              </div>
              <div className="block">
                <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/4">
                  <div class="">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">投資の財源</h1>
                      <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">春号</p>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      春号には業績記事の半分以上が今期ではなく来期の動向の説明に割かれている。
                    </p>
                  </div>
                </main>

                <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/4">
                  <div class="">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">何に投資をしているのか</h1>
                      <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">夏号</p>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      夏号が軸足を置いているのは前期との比較、つまり「前期と今期で業績がどう変化するのか」
                      前期に比べ今期の売上高が増え利益も増える(増収増益)、売上高も利益も減る(減収減益)。
                      売上高は増えるのに利益が減る(増収減益)、売上高は減るが利益は増える(減収増益)
                      重要なのは業績予想がなぜそうなるのかの理由や背景を業績記事でチェックすること
                    </p>
                  </div>
                </main>
                <main class="py-3 px-4 sm:p-6 md:py-10 md:px-8 inline-block border-2 border-indigo-500 m-2 w-1/4">
                  <div class="">
                    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                      <h1 class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl dark:sm:text-white">投資の規模</h1>
                      <p class="text-xl leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">秋号</p>
                    </div>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                      秋号は夏号で立てた予想がその後どう変化したか
                    </p>
                  </div>
                </main>
              </div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400 '>第一四半期に早くも上方修正を発表した会社は第二四半期でも上方修正してくることが多い</div>
              <p>第一四半期に早くも上方修正を発表した会社は第二四半期でも上方修正してくることが多い。それもかなりの頻度で
                4月26日にキャノン(7751)が第一四半期決算発表と併せて通期の上方修正を発表した。
                その後第二四半期決算発表を10日後に控えた7月19日に2度目の上方修正を発表。

                ポンプの総合メーカーで半導体関連株としても人気の荏原(6361)
                荏原は5月14日の第一四半期決算発表時に通期業績見通しの上方修正を発表した。
                8月2日には今期2度目の上方修正を発表し、
                他にも自動車ガラスで世界トップのAGC(5201)や2輪世界大手のヤマハ発電機(7272)、特殊印刷のNISSHA(7915)、自転車部品で世界首位のシマノ(7309)など二四半期連続で上方修正を繰り返す企業が2021年は続出した。

                これに続いた3月期決算会社も海運3社(日本郵船(9101)、商船三井(9104)、川崎汽船(9107))を筆頭に日産自動車(7201)や三菱自動車(7211)、医薬品のエーザイ(4523)、エアコン世界首位のダイキン工業(6367)、内視鏡で世界シェア7割のオリンパス(7733)。半導体関連ではアドバンテスト(6857)など127社が二四半期連続で上方修正を発表している

                上方修正企業を見極める上では通期営業利益見通しに対する進捗率が役に立つ。
                直近四半期累計の進捗率が過去3期平均と比べて5%以上超過していれば早晩上方修正してくる可能性が高い。しかもその確率は景気回復局面ほど高くなる傾向がある。
                任天堂は2020年秋号での進捗率(第二四半期終了時点)が48.2%となった。
                過去3期平均は9.7%だったから実に40%近い超過達成だ。
                実際、その後に任天堂は上方修正を発表し、株価は急上昇を開始した。</p>
            </div>
          </Compound >
        ) : id == "balancesheet" ? (
          <Compound >
            <div>
              <div className="text-3xl m-4 text-center">
                貸借対照表
              </div>
              <div className="flex border-b-2 border-blue-400">
                <div className='m-4 text-left w-1/2 inline-block'>
                  <p>どの企業も運営するための資金調達をする必要があります。</p>
                  <p>調達の方法は①株主から調達する方法、②銀行等から借り入れて調達する方法です</p>
                  <p>株主から調達したお金は資本金(純資産)に計上されます。純資産は基本的に企業の自己資本と呼ばれ返済が不要な資金になります</p>
                  <p>株主から調達したお金は企業の成長のために様々な用途で使うことができます。例えば企業の商品を製造するための生産工場を建てるために使うなどです</p>
                  <p>2つ目の銀行などの金融機関から借り入れる方法の場合、借り入れたお金は借入金(負債)として計上され借入金は期限内に利息を付けて全額返済する必要があります</p>
                  <p>もちろん借り入れたお金であっても企業の成長のために様々な用途で使えることに変わりありません。例えば前述のように生産工場を建てることにも使えますし、材料を仕入れることにも使えます</p>
                  <p>このように貸借対照表は企業の運営に必要なお金をどのような手段で集めてきたのかそして集めたお金をどの様な用途で使ったのかということが一覧できる表になっているわけです</p>
                  <p></p>
                  <p></p>
                </div>
                <div className='m-4 inline-block '>
                  <div className="">
                    <Image
                      src="/images/bs/BS.png"
                      alt=""
                      width={560}
                      height={315}
                    />
                  </div>
                </div>

              </div>
              <div className="text-xl m-4">
                貸借対照表は財産の状況が分かる
              </div>
              <p>企業が保有している財産の残高を記録したものなので「この会社には一体いくらの財産があるの？」という情報を見ることができます。</p>
              <p>また、借金をしている企業の場合、いくら財産をたくさん保有していてもそれ以上に借金があれば実質財産はセロです</p>
              <p>こうした財産に関する情報をまとめたものが貸借対照表です</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>資産</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">資産:</span>会社の保有する財産。
                </div>
              </div>
              <p>資産は「流動資産」と「固定資産」という項目に分けられます。</p>
              <p>売掛金など比較的早期に現金化するようなものや販売すれば比較的短期間で現金になる商品は流動資産に含まれます。</p>
              <p>固定資産はすぐに現金に換金しないような会社が長期保有する項目がはいります。例えば建物や車、会社の設備などです。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>負債</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">負債:</span>会社が将来支払う義務があるもの。
                </div>
              </div>
              <p>負債も「流動負債」と「固定負債」という項目に分けられます。</p>
              <p>1年以内に返済しなければいけないものは流動負債です。短期の借入金や買掛金のようなもの</p>
              <p>一方で1年を超えて借り続けられるものは固定負債になります。長期の借入金や社債などです。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>純資産</div>
              <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium">純資産:</span>資産総額から負債総額を差し引いた残りの部分。大部分は株主資本。
                </div>
              </div>
              <p>純資産に関しては負債と異なって返済が不要な科目で構成されているので、純資産が厚ければ厚いほど会社の安全性は高くなりやすいとされています。</p>
              <p></p>
              <p></p>
              <div className="text-xl m-4">
                項目によって左右にグループを分ける
              </div>
              <p>バランスシートでは左側に資産をまとめ、右側には負債と純資産をまとめます</p>
              <div className="text-xl m-4">
                借方と貸方は一致する
              </div>
              <p>資産の合計額と負債と純資産の合計額は必ず一致します</p>
              <p>資産とは会社が持っている現金や預金、販売用の商品や土地、建物など財産や法的権利を意味します。</p>

              <p>負債とは銀行からの借入金や仕入れ先などに後日支払わなければならない法的義務を意味します</p>
              <p>純資産とは資産から負債を差し引いた正味の財産を意味します。</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス2020年3月期バランスシート</div>
              <div className='flex'>
                <div>
                  <Image
                    src="/images/bs/KFC_BS.png"
                    alt=""
                    width={760}
                    height={428}
                  />
                </div>
                <div>
                  <Image
                    src="/images/bs/KFC_grapth.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>例</div>
            <p>飲食業は総じて新型コロナウイルスによって苦境に立たされましたがテイクアウト需要をうまく取り込んだ日本KFCHDの財務基盤は盤石です。</p>
            <p>一方ロイヤルHDはレストラン事業で大打撃を受けただけでなく不運なことにほかの事業(機内食販売やホテル事業など)も新型コロナの影響を受けてしまい一気に経営危機に陥りました</p>
            <div className='flex'>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス</div>
                <Image
                  src="/images/bs/KFC202012_grapth.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:50.9%  <br />2020年10月期</p>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロイヤルホールディングス</div>
                <Image
                  src="/images/bs/royalHD_grapth.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:19.8%  <br />2020年10月期</p>
              </div>
            </div>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス2020年3月期バランスシート</div>
            <div className='flex'>
              <div>
                <Image
                  src="/images/bs/KFC_BS2.png"
                  alt=""
                  width={760}
                  height={428}
                />
              </div>
              <div>
                <Image
                  src="/images/bs/KFC_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <p>流動資産とは資産のうち1年以内に現金化されるものを指します。たとえば現金や預金はもちろん販売用の商品も通常1年内に顧客に売って現金を手にすることができるので流動資産に含まれます</p>
            <p>固定資産とは資産のうち現金化するのに1年を超えるものを指します。たとえば製品を作るための機械装置や建物などは1年で売却することは考えにくくそれよりずっと長く使い続けるのが通常なので固定資産に含まれます</p>
            <p>流動負債とは1年内に支払わなければならない債務を指します。例えば返却期限が1年内に到来する借入金は流動負債に含まれます。</p>
            <p>固定負債とは支払期限が1年超の債務を指します。例えば5年後に返済期限が到来する借入金は固定負債に含まれます</p>
            <p></p>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>例</div>
            <p>日本KFCHDは流動負債よりも流動資産の方が大きいのに対し、ロイヤルHDは流動資産よりも流動負債のほうが大きいことが見て取れます。</p>
            <div className='flex'>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>日本KFCホールディングス</div>
                <Image
                  src="/images/bs/KFC202012_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>流動比率:158.3%  <br />2020年12月期</p>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロイヤルホールディングス</div>
                <Image
                  src="/images/bs/royalHD_grapth2.png"
                  alt=""
                  width={300}
                  height={300}
                />
                <p>自己資本比率:54.7%  <br />2020年12月期</p>
              </div>
            </div>
          </Compound >
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

