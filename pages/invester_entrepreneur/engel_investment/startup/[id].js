import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Start, Startup_india } from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "startup_investment_detail" ? (
          <Start>
            <div className="">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="m-4">
                <p>近年の有力スタートアップが展開するサービスは少し使っただけでは競合サービスと見分けがつかないけれど、その実、圧倒的な競争力を持ち
                  いつの間にか多くの人が使っているようなサービスであったり、何がすごいのか一般の人にはよくわからないけれど業界の先見性のある
                  人々から見れば革新的なサービスであったりする場合がほとんどです。</p>
                <p>スタートアップはビジネスが軌道に乗り仕組み化されているわけではないため、何よりもまず強力な実行力が欠かせません。</p>
                <p>実行力を評価するためにVCが観察すべきものはスタートアップのマネジメントチームです。</p>
                <p>ビジネスを評価するにたる能力を有したメンバーがそろっているのかどうかをシビアに確認します。</p>
                <p>次に見るのは競争力です。</p>
                <h4>実行力の評価</h4>
                <p className='text-red-400'>投資先を評価するポイント</p>
                <div className='inline-block'>
                  <table>
                    <tr>
                      <th>チーム</th> <td>47</td>
                    </tr>
                    <tr>
                      <th>ビジネスモデル</th> <td>10</td>
                    </tr>
                    <tr>
                      <th>プロダクト</th> <td>13</td>
                    </tr>
                    <tr>
                      <th>マーケット</th> <td>8</td>
                    </tr>
                    <tr>
                      <th>インダストリー</th> <td>6</td>
                    </tr>
                    <tr>
                      <th>バリュエーション</th> <td>1</td>
                    </tr>
                    <tr>
                      <th>付加価値を生む力</th> <td>2</td>
                    </tr>
                    <tr>
                      <th>ファンドとの適合</th> <td>14</td>
                    </tr>
                  </table>
                </div>
                <p>ベンチャー投資ではビジネスモデルやプロダクトといったビジネス面よりも人の評価が重視されていることが分かる</p>
                <p>マネジメントチームの何を見るべきなのか。</p>
                <p>業界の実務上の深い知見を持つメンバーでマネジメントチームが固められているかどうかを重視</p>
                <p>陳腐化しにくい付加価値は業界の細かい専門知識や複雑な交渉、売込みにおける勘所、人的なネットワークなど、経験でしか手に入らないポイントなのです。</p>
                <p>米国のスタートアップはDEOは比較的若くても、脇を固めるマネジメントチームは50歳を超えたメンバーが少なからず混じっている</p>
                <p>それぞれの機能としてそれなりの経験がないとビジネスを遂行することは不可能だからです。</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                <p></p>

                <p></p>
              </div>

            </div>

          </Start>
        ) : id == "businessplan" ? (
          <Start>
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                ゼロから富を作り出す8つの方法
              </div>
              <div>

                <p></p>
                <p></p>他人があなたの運命を支配していたり、他人があなたのビジネスに口出しできる状況に置かれていたりするのならあなたは自分のビジネスをしているとは言えない。
                <p></p>自分がコントロールできないことを最小限にするのがミリオネアになる秘訣の1つである。
                <p className='text-xl'>①成功したやり方をコピーして数を増やしていく</p>
                <p></p>単純なアイデア、商品、サービスをうまくコピーしてその数を増やせばお金持ちになれる
                <p></p>
                <p className='text-xl'>②ダイレクトに売る</p>
                <p></p>ダイレクトマーケティングは急成長しているビジネスカテゴリーの1つである。
                <p></p>従来の複雑な販路を使わず、製造業者や卸売業者、仲介者、小売業者、広告業者などへのコストをかけることなく直接消費者に販売する。
                <p></p>
                <p className='text-xl'>③情報をお金に換える</p>
                <p></p>今最も人々が求め、消費し、貴重だと思っている商品は宝石でもなく石油でもなく不動産でもない。
                <p></p>それは専門的な情報だ。いたるところで様々な形で自分の知識やノウハウを売って利益を上げている人々がいる
                <p></p>
                <p></p>
                <p className='text-xl'>③</p>
                <p></p>自分の知名度を上げることでどんな広告を出すよりも効果的に多くのお金を稼ぐことができる
                <p></p>
                <p></p>
                <p></p>
                <p className='text-xl'>③ありふれたビジネス</p>
                <p></p>配管工や塗装業のようなごく普通のビジネスで大金持ちになるにはどうすればいいのだろうか。その答えはラリー・ハーモンが教えてくれる
                <p></p>ラリーの小さなありふれた会社　デマー社は配管工事や冷暖房機器のサービスを扱うビジネスで画期的な試
                <p></p>デマー社では他社と同じような通常の社員研修だけでなく社員の士気を高めるためのミーティングを週3回行う。
                <p></p>また、サービスアドバイザーと呼ばれる社員にデール・カーネギー・コースを受講させ業績に応じて成果報酬として1人当たり年間5万～6万ドルを支払っている
                <p></p>デマー社は地域で最も高い価格設定をしているにも関わらず1989年からの売上の伸びは300%、実に300万ドル以上になる。
                <p></p>提示した価格が納得されないのはそれだけの価値がないと思われているからだ。競合他社より価格設定を高くしても納得してもらうにはサービスの質で他社を打ち負かす
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>

              <div className="text-center text-3xl m-4">
                3つのビジネスタイプ
              </div>
              <p></p>「商品牽引型」、「市場牽引型」、「メディア牽引型」の3つのタイプに分類できる
              <p></p>「商品牽引型」ビジネスは商品自体がとても魅力的でユニークなので宣伝がしやすい
              <p></p>強力な商品を開発することは容易ではないがそれができれば世界はあなたのものになる。
              <p></p>「メディア牽引型」ビジネスは主要なメディアを使って商品やサービスの販売を行うものである。
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Start>
        ) : id == "businessplan_strategy" ? (
          <Start>
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                全ての成功の達成は決断から始まる<br />パッとしない人生のほとんどは決断を決定的に欠いている
              </div>
              <div>

                <p></p>
                <p></p>成功している起業家は自分が望む方向に物事を変え、何かを実現させるためには想像以上に断定的で前衛的かつ創造性に富んだ決断を下す必要があることを知っている。
                <p></p>あの人があんなに成功するのはもっともだ。あれだけのことをすべてやるんだから。
                <p></p>それこそが前米国民の約5%しか25万ドルを超える年収を得ていない理由だ。チャンスがないのではない。ただ自分でやらないと決めただけ
                <p></p>自分の決断が成功を伴うものかどうか、成功につながるタイプの決断かどうかそしてとても重要な決断を下しその決断に基づいて生きていく覚悟があるのかどうか
                <p></p>真剣に自分に問いかけてみよう。これはそうするだけの価値がある質問なのだ
                <p></p>
                <p></p>
                <p className='text-xl'>良い仲間とクリエイティブな時間</p>
                <p></p>自分の行動や決意が自分が読んでいるものや聞いているもの、一緒に時を過ごす相手を通じて変化する
                <p></p>アール・ナイチンゲールは「私たちは最もよく頭に思い描くものになる」と。並外れた成功をおさめる起業家になりたいのならそうなることを真剣に思い描く必要がある。
                <p></p>人は関わり合いのある人の持つアイデアの影響を受けずに済むことはない。物事を限定するような考え、非生産的な考え、ビジネスや成功に反する考えから
                <p></p>身を守るワクチンは存在しない。だからこそあなたは自分の目標や夢が同調している人々と深く付き合うべきなのだ
                <p></p>
                <p></p>
                <p className='text-xl'>仕事をしている限り裕福にはなれない</p>
                <p></p>誰よりも長く働くことは起業家にとって最高の道ではない。実際には最高の価値を作り出し最高の生産性を上げることに集中して人より少なく働く方法を見つける
                <p></p>ことの方がずっと役に立つ。他人に任せられる仕事を自分でやってしまう時間を減らせば自分にしかできないことをやる時間が増え収入が上がる。
                <p></p>あるいは興味のないこと、達成感の感じられない仕事が多すぎると思うならそれを減らして楽しいと思えることを多くやるようにすれば収入が上がる
                <p className='text-xl'>リスクを管理する</p>
                <p></p>情報収集は起業家にとって非常に重要な仕事だ。退屈でなかなか進まない仕事のように思われるが蓄積してじっくり検討した情報の質が最終的に下す決断に大きな影響を与えるのは間違いない
                <p></p>
                <p></p>
                <p></p>
                <p className='text-xl'>③</p>
                <p></p>自分の知名度を上げることでどんな広告を出すよりも効果的に多くのお金を稼ぐことができる
                <p></p>
                <p></p>
                <p></p>
                <p className='text-xl'>③ありふれたビジネス</p>
                <p></p>配管工や塗装業のようなごく普通のビジネスで大金持ちになるにはどうすればいいのだろうか。その答えはラリー・ハーモンが教えてくれる
                <p></p>ラリーの小さなありふれた会社　デマー社は配管工事や冷暖房機器のサービスを扱うビジネスで画期的な試
                <p></p>デマー社では他社と同じような通常の社員研修だけでなく社員の士気を高めるためのミーティングを週3回行う。
                <p></p>また、サービスアドバイザーと呼ばれる社員にデール・カーネギー・コースを受講させ業績に応じて成果報酬として1人当たり年間5万～6万ドルを支払っている
                <p></p>デマー社は地域で最も高い価格設定をしているにも関わらず1989年からの売上の伸びは300%、実に300万ドル以上になる。
                <p></p>提示した価格が納得されないのはそれだけの価値がないと思われているからだ。競合他社より価格設定を高くしても納得してもらうにはサービスの質で他社を打ち負かす
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>

              <div className="text-center text-3xl m-4">
                3つのビジネスタイプ
              </div>
              <p></p>「商品牽引型」、「市場牽引型」、「メディア牽引型」の3つのタイプに分類できる
              <p></p>「商品牽引型」ビジネスは商品自体がとても魅力的でユニークなので宣伝がしやすい
              <p></p>強力な商品を開発することは容易ではないがそれができれば世界はあなたのものになる。
              <p></p>「メディア牽引型」ビジネスは主要なメディアを使って商品やサービスの販売を行うものである。
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Start>
        ) : id == "business" ? (
          <Start>
            <div className="w-3/4">
              <div className="text-center text-3xl m-4">
                仕入れ販売モデルとSPAモデルの比較
              </div>
              <div className="flex justify-center">
                <div className='inline-block border-2 border-yellow-500 m-2'>
                  <Image
                    src="/images/SPA.png"
                    alt=""
                    width={600}
                    height={200}
                  />
                </div>
                <div className='inline-block border-2 border-blue-500 m-2'>
                  <Image
                    src="/images/siire.png"
                    alt=""
                    width={600}
                    height={200}
                  />
                </div>
              </div>
              <div>


                <p></p>SPAと仕入れのうち利益率が低くなるのは仕入れ販売モデルです。
                <p></p>商品を入手するフローの中でマージン(利益)を載せられるポイントが複数あるため安く売ることが難しいのです
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>

              <div className="text-center text-3xl m-4">
                棚卸資産回転期間
              </div>
              <p></p>棚卸資産回転期間とは商品を保有してから販売するまでにどの程度の期間を要するかを見る指標
              <p></p>この回転期間が短いほど販売するのが早く、長いほど販売するのにかかる日数が多いということになります
              <p></p>基本的にこの棚卸資産回転期間は短ければ短い方がよいとされています。
              <p></p>
            </div>
          </Start>
        ) : id == "startup_detail" ? (
          <Start>
            <div className="w-2/4">
              <div className="text-3xl m-4">

              </div>
              <div className="justify-center">
                <p></p>


                <p></p>スタートアップが成功できるか失敗して消えてしまうかそれを決める基準はProduct Market Fitを達成できるかできないかという点にある
                <p></p>スタートアップがプロダクトを生み出してもそれがPMFを達成して顧客から熱烈に求められるものでなければ成長はできない
                <p></p>ではなぜ多くのスタートアップはPMFを達成できずに失敗してしまうのか
                <p></p>それはプロダクトを作る前の段階でアイデアが十分検証できていないいからだ
                <p></p>ではスタートアップニアおいて最も重要なアイデアは何か。それは課題の質にフォーカスすることである
                <p></p>世の中にはたくさんのアイデアがあるが目指すべきは課題の質とそのソリューションの質がいずれも高いアイデアである
                <p></p>その両方がそろうからこそ市場で輝きを放つ価値あるアイデアになる
                <p></p>「課題の質を上げてからソリューションの質を上げる」
                <p></p>今検討しているアイデアは顧客にとって本当に痛みのある課題なのか？
                <p></p>「このアイデアの妥当な代替案が既に市場に存在していないか？」
                <p></p>このように様々な角度からアイデアの深堀りを繰り返していくことで課題の質が上がる。
                <p></p>課題の質は何によって決まるのだろうか？それは創業者が次の3つの要素をどれだけ持つかに依存する
                <li>
                  高い専門性
                  業界の知識
                  市場環境の変化に対する理解度
                </li>
                <p></p>課題の質を高めるにはターゲットとする課題が自分事であるかどうかも重要
                <p></p>自分自身が課題の当事者でなかったり、深い共感を持っていなかったりしたらどこまで本気で課題の磨きこみができるだろうか。
                <p></p>自分事の課題になっているかどうかを別の言い方で自問するならその課題にストーリー(原体原)があるか
                <p></p>ミドリムシを活用したバイオベンチャーのユーグレナを経営する出雲充社長は東京大学に在学中の夏休みに体験したインターンシップが創業の原点だ
                <p></p>バングラデシュを訪問した際、栄養失調に苦しんでいる人々と出会ったのだ
                <p></p>この体験から出雲氏はこうした人々を救うことこそ自分の使命と考えた。そうして東大の文学部から農学部に転部し、人間にとってより良い農業のあり方の研究を始めたのである
                <p></p>投資家のピーター・ティールは「競争は負け犬がすることだ」と喝破している
                <p></p>顧客を奪い合うと価格競争に陥りやすくなる。顧客一人から得られる利益LTV(Life Time Value)はみるみる下がり、そこから先はリソースやオペレーションの質で競うしかなくなる。
                <p></p>競争の中で顧客を獲得するには広告費用などのCPA(顧客獲得コスト)も上がる
                <p></p>そして何よりも市場のシェアを激しく奪い合う消耗戦になるとリソースの多い大企業が圧倒的に有利になり、スタートアップに勝ち目はない。
                <p></p>スタートアップは誰が聞いてもよいアイデアを選ぶべきではない
                <p></p>スタートアップではハードなことをするほうが実は近道である。簡単な道を選ぶことは結果として遠回りになる

                <p></p>クレージーなアイデアで大成功を収めたスタートアップの代表格は何といっても宿泊予約のAirbnbだろう
                <p></p>同サービスが立ち上がったのは2008年。犯罪大国のアメリカでは赤の他人の家に泊まる、他人を自宅に泊めるという行為はまさにバッドアイデアそのものだった。
                <p></p>Airbnbに限らずUberは全く知らない人の車に乗って移動するサービスだ
                <p></p>乗車場所と降車場所をそれぞれ2タップで選ぶと速くて1,2分で目の前に登録ドライバーの車が来てくれる。
                <p></p>あなたはUberのように誰もが当たり前と思ってきたことに疑問を投げかけることができるだろうか。
                <p></p>この問いができるかどうかがあなたのスタートアップが世界を変える存在になれるかどうかの最初の分かれ道になる
                <p></p>インスタカートはスマホを2タップするだけで野菜や果物を自宅などに届けてくれるサービスを展開している
                <p></p>デリバリーしてほしい場所の郵便番号を入れると半径5マイル以内にあるスーパーが表示される。好きな店舗をクリックすると商品一覧が出てくる。
                <p></p>商品を選んでチェックアウトすると「ショッパー」と言われる同サービスに登録している一般人が注文した人の代わりに店まで買い物に行き、45分以内に自宅まで届けるという仕組みだ
                <p></p>創業者のアプールバ・メータ氏はアマゾンの物流システムを開発するエンジニアで物流と小売りに関して高い専門性があり、市場の流れをつかんでいた。
                <p></p>彼自身が家庭で使う食料品や日用品の買い出しは自分で行うものという通例に疑問を持った視点こそが重要である
                <p></p>見知らぬ人に直接口に入れる食料品の買い出しを頼んで大丈夫なのか、見知らぬ配達人に自分の住所を教えてよいのか。そんな不安がつきまとう。
                <p></p>そこでインスタカートは経歴チェックやトレーニングプログラムの仕組みを導入。
                <p></p>配達人に対するカスタマーレビューを使った管理体制も実装し、懸念を払拭した
                <p></p>このサービスは一気に広がり、2017年3月時点で全米の1200都市で利用できるまでに成長した
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ユニット・エコノミクス</div>
                <p>ユニット・エコノミクスとは商品・サービスが1単位売れることでどれだけの利益が出るかを示す指標</p>
                <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">ユニット・エコノミクス=サービス1単位の売上高-1単位の販売にかかったコスト</span>
                  </div>
                </div>
                <p>ズームやパランティア、そして国際物流分野の巨大データプラットフォームとして近年注目を集めつつあるフレックスポートはユニットエコノミクスが初期の段階から以上に優れていた</p>
                <p>サービス1単位の売上高とは例えば一般的なSaaS企業であればARPU(Average Revenue Per Unit:1人当たり売上高)</p>
                <p>ARPUから原価(売上高に比例する変動費)とサービスを売るためにかかるコストを差し引いた後に残るものがユニット・エコノミクスです。</p>
                <h3>練習問題</h3>
                <p>クラウド上にデータを保管し、共有もできるサービスを展開するDropboxを例にユニット・エコノミクスを計算します。</p>
                <div className='m-4 w-1/3'>
                  <p className='text-xl'></p>
                  <table class="table-auto border-2 border-green-400">
                    <tbody>
                      <tr>
                        <td>売上高(ARPU)</td>
                        <td>128.4</td>
                      </tr>
                      <tr>
                        <td>直接費用</td>
                        <td>27.8</td>
                      </tr>
                      <tr>
                        <td>粗利</td>
                        <td>100.6</td>
                      </tr>
                      <tr>
                        <td>セールス関連費用</td>
                        <td>28.4</td>
                      </tr>
                      <tr>
                        <td>ユニット・エコノミクス</td>
                        <td>72.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>ユニットエコノミクスは収益性を保ちながら事業をスケールさせていくための指標であることが分かります。</p>
                <p>28.4ドルのセールス費用をかけて100.6ドルの粗利を生む顧客を新規に獲得し、その粗利100.6ドルのうち28.4ドルをセールス費用に回し、新たに100.6ドルの粗利を生む顧客を獲得する</p>
                <p>こうした拡大サイクルが回り、やがて間接費(研究開発費と一般管理費)をブレイクすることになる。</p>
                <p>ドロップボックスのあ愛ユニット・エコノミクスは72.2ドルなので仮に間接費が10億ドルであれば有料ユーザー約1385万人が黒字化の分岐点となります。</p>
                <p>2020年12月期のドロップボックスの間接費は研究開発費7億2750万ドルと一般管理費2億2780万ドルを合計した9億5530万ドルです。</p>
                <p></p>
                <h3>練習問題2</h3>
                <p>架空のソフトウェア企業A社についてユニット・エコノミクスを計算します。</p>
                <p>A社は広告にコストをかけない代わりに無料で一定のサービスを利用してもらい、気に入った一部ユーザーが有料ユーザーに転換するフリーミアムというビジネスモデルを採用しています。</p>
                <p>無料ユーザーにかかるストレージ費用(1人当たり1.5ドル)はA社にとってのマーケティング・コストと考える事ができます。</p>
                <p></p>

                <div className='m-4 border-2 border-green-400 p-4'>
                  <p className='text-xl bg-green-400 mt-4'>ソフトウェアA社のユーザー数</p>
                  <table class="table-auto w-1/2">
                    <tbody>
                      <tr>
                        <td>登録ユーザー</td>
                        <td className='text-right'>800万人</td>
                      </tr>
                      <tr>
                        <td>うち有料ユーザー</td>
                        <td className='text-right'>20万人</td>
                      </tr>
                      <tr>
                        <td>無料ユーザー</td>
                        <td className='text-right'>780万人</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className='text-xl bg-green-400 mt-4'>ソフトウェアA社の各種データ</p>
                  <table class="table-auto  w-1/2">
                    <tbody>
                      <tr>
                        <td>売上高</td>
                        <td className='text-right'>2400万</td>
                      </tr>
                      <tr>
                        <td>1有料ユーザー当たり売上高(ARPU)</td>
                        <td className='text-right'>120</td>
                      </tr>
                      <tr>
                        <td>1ユーザー当たり直接費用(ストレージ費用)</td>
                        <td className='text-right'>40</td>
                      </tr>
                      <tr>
                        <td>1ユーザー当たり費用(ストレージ費用)</td>
                        <td className='text-right'>1.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>全登録ユーザーのうち2.5%が有料ユーザーに切り替わります。つまり、40人の登録ユーザーのうち1ユーザーが有料、39ユーザーが無料ということになります。</p>
                <p>有料ユーザー1人が無料ユーザー39人分の費用を支えていることになります。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                <p>誰に支持されているかを知ることはサービスの競争力を知るうえで想像以上に重要です。</p>
                <p>違いが分かる賢いエンドユーザーは簡単に他社が真似できるような質の低いサービスは使わないものです。</p>
                <p>ユーザーをデータベース化しておくことはVCの競争力になります。</p>
                <div className="text-center">
                  <div className="text-3xl m-4">
                    関連記事
                  </div>
                  <div class="flex flex-nowrap">
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                      <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zoom</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/07/10/django-summernote/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                        <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                        <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>

            </div>
          </Start>
        ) : id == "startup_india_detail" ? (
          <Start>
            <div className="text-3xl m-4">
              過去記事
            </div>


            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">INVEST INDIA</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="https://www.investindia.gov.in/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            </Start>
        ) : id == "lean" ? (
          <Start>
        <div className="w-2/4">
          <div className="text-3xl m-4">
          
          </div>
          <div className="justify-center">
            <p></p>


            <p></p>リーンスタートアップは最低限の商品やサービスを短期間で作って改善を繰り返すことで失敗を減らす手法
            <p></p>・
            <p></p>
            <p></p>・
          </div>

        </div>
          </Start>
        ) : id == "startup_other_detail" ? (
          <Start>
            <div className="text-3xl m-4">
              デンマーク
            </div>


            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ユニティ・テクノロジーズ</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="https://www.investindia.gov.in/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zendesk</h5>
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
            </Start>
        ) : id == "media_detail" ? (
          <Start>
       
            </Start>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
