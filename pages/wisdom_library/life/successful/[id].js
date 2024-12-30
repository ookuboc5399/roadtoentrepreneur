import { useRouter } from 'next/router'
import React from 'react';
import { Successful } from '../../../../components/layout/wisdom_library/wisdom_library';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "jessica" ? (
          <Successful>
            <div className="flex justify-center">
              どうやって問題を解決するか、困難に向き合ったときにどうするか、どうやって新しいやり方を生み出すか。
              つまり前に進む力とやる気があるかどうか

            </div>
          </Successful>
        ) : id == "ladygaga" ? (
          <Successful>
            <div className="justify-center">
              <p>19歳のレディーガガはニューヨークでウエイトレスをしながらどうやってレコード契約にこぎつけたのだろうか？</p>
              ・お金
              ・学んだことを行動につなげる
              ・仕事の効率化
              <p>2　幸せを感じたり、満ち足りた気分になるとき</p>
              ・人の役に立ったとき
              ・欲しいものを買ったとき
              <p>3　何に対してストレスや恐怖を感じるか？</p>
              ・時間を無駄にした時
              ・仕事が思った通りに行かなかったとき
              ・将来の自分の姿(成功しているか、やりたいことができているか)
              <p>4　5年後、人生の終わりにしておけばよかったと後悔しそうなこと</p>
              ・投資
              ・旅をする
              ・勉強




            </div>
          </Successful>
        ) : id == "maya" ? (
          <Successful>
            <div className="flex justify-center">
              自分の前を行く人たちからできるだけ多くを吸収すること

              自分には力がある、人から学ぶことだってできる、だからやればできるんだって。
              自分ならもっといい仕事をこなせるし、もっと高いポジションを目指せると思えばいい。あなたが自信を見せれば周りの人はそれを見て安心するわ

              できるだけたくさんの知恵に出会うこと

            </div>
          </Successful>
        ) : id == "napoleon" ? (
          <Successful>
            <div className="text-center w-3/4">
              <div className=" m-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UF5tBrsJB0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="">

                <p></p>人生で成功をおさめるまでには誰もが例外なく一時的な挫折を味わい、時には失敗も経験するものだ。
                挫折に打ちのめされてしまったときにとるもっとも簡単で論理的な行動はあきらめだ
                大多数の人がまさにこの行動をとっている

                <p></p>成功は成功を意識する人に訪れる。
                失敗はいつのまにか失敗を意識してしまっている人に訪れる



              </div>
              <div className='flex'>
                <div className='w-3/4'>
                  <h2 className='text-center m-4 border-b-4 border-blue-400 '>願望</h2>
                  <p>富への願望をそれにふさわしい金額に生まれ変わらせるためには次のような6つの確固とした実践的な行動を起こせばよい。</p>
                  <p className=''>その1</p>
                  <p>望みの金額を正確に頭に刻む。ただ単に「有り余るほどの金銭が欲しい」では十分ではない。具体的な金額を確定する</p>
                  <p className=''>その2</p>
                  <p>望みの金銭を得た見返りを何にするのか、正確に決める</p>
                  <p className=''>その3</p>
                  <p>望みの金銭を手に入れる時期を明確に決める。</p>
                  <p className=''>その4</p>
                  <p>自分の願望を達成するための明確な計画を立て、その準備の状態がどうであってもすぐにその計画を行動に移す。</p>
                  <p className=''>その5</p>
                  <p>手に入れるつもりの金額について明解で簡潔な宣言を書きだす。その期限を決める。何を金銭の見返りにするのかを宣言する。そして金銭を蓄積するための計画を明確に表現する</p>
                  <p className=''>その6</p>
                  <p>書き出した文章を大きな声で読む。毎日二回、一回は寝る前、もう一回は朝、目が覚めたとき。読みながらその金銭をすでに手にしている自分自身の姿を見て感じてそして信じよう</p>
                  <p></p>

                  <p></p>
                  <p></p>
                </div>
                <div className="justify-center w-1/4">
                  <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl text-gray-900 dark:text-white">こうありたい、したいという<br />燃えるような願望は<br />夢見る人の出発点であり、<br />ここから飛び立たなければならない。<br />夢は無関心、怠惰、<br />あるいは大望の欠如からは<br />生まれてこない<br /></h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Successful>
        ) : id == "peterlynch" ? (
          <Successful>
            <div className="flex justify-between">
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/peter.png" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">ピーター・リンチは1970~1980年代に米国の投資信託会社フィデリティで「マゼランファンド」という投資信託のファンドマネジャーを務め、担当した13年間で年平均23.9%という驚異的なリターンを残した人物です</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">リンチの基本的な考え方はアマチュアだからこそプロの投資家に勝つことができるというものです。私たちの身の回りにあるモノを観察しそこから素晴らしい銘柄を見つけてプロよりも早く投資する</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">「全ての株の背後には会社がある」。企業の業績が株価に大きな影響を与えるため企業自体に注目すべき</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"> すでに成熟し成長率が小さくなっている銘柄を低成長株という。低成長株の利益成長率は2~3%ほどに留まる。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">配当や株主優待目当てであれば向いているがテンバガーを狙うのには向いていない。日本株でいうとトヨタ自動車やKDDIといった大企業</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                  </div>
                </div>

              </div>
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/steven.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">映画監督というエベレストの山頂にどうやって到達したのか</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">映画学校では認められなかった若者がどうやってハリウッド史上最年少で大手スタジオの監督になれたのか</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">彼はユニバーサル・スタジオ・ハリウッドのツアーバスに乗ってあちこちを回った後バスから飛び降りてこっそりトイレに行って、建物の陰に隠れた</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">ツアーバスが行ってしまうのを見計らって、その日1日そこで過ごした</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">あちこちをさまよい偶然出会ったのがユニバーサルで働いていたチャック・シルヴァーズだった。2人はしばらく話をしてシルヴァーズは監督になりたいというスピルバーグの熱意に押され、3日間のフリーパスを与えた。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">それから3日間スピルバーグはスタジオに通いつめ4日目にスーツ姿で父親のブリーフケースを持って現れた。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">スピルバーグは入り口まで行って手を振りながらやあ、スコッティと声をかけた。すると警備員が手を振り返した。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">それから3ヵ月間スピルバーグは入り口に行ってそんなふうに手を振りそのまま中に入った。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">スタジオ内ではハリウッドスターやプロデューサーに近づきランチに誘った</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">防音スタジオに忍び込み編集室に潜り込んでノウハウをしっかり吸収した。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">これは映画学校に合格できなかった若者が独力で学びを得た方法なのだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">ある日などはブリーフケースにもう1着スーツを入れて事務室に泊まり、翌朝新しいスーツに着替えてスタジオ内で活動を続けた。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チャック・シルヴァーズは結果的にスピルバーグのメンターになった</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">最も大事なステップはインサイドマンを見つけることだろう</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">その人は内部での自分の立場を使って僕らを中に入れてくれるからだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チャック・シルヴァーズがスピルバーグに3日間のフリーパスを与えなかったら、制作副部長に電話して映画を観るように促さなかったら、スピルバーグは契約にこぎつけることはなかっただろう。</h5>
                  </div>
                </div>
              </div>
            </div>
          </Successful>
        ) : id == "pitbull" ? (
          <Successful>
            <div className="flex justify-center">
              ピットブルの成功を維持するカギは常に見習いでいたいという姿勢にあった。
              それは学びに対して謙虚でいるということ

            </div>
          </Successful>
        ) : id == "qilu" ? (
          <Successful>
            <div className="flex justify-between">
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/bill.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">誰だって生きていれば何かしら経験する。それを面白おかしく語れるかどうかで違いが生まれるんだよ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">緊張に対する一番の特効薬はすぐ行動に移すことだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">エリオットが最初の広告枠を売ってちょうど10年が経ったとき彼と父親はビズノー・メディアをプライベートエクイティに5000万ドルで売却する</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">最強の交渉戦術とは純粋に信頼しあえる関係を築くこと</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">実力以上の仕事を引き受けろ、やり方は後から学べばいい</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">伝え方こそが大事なんだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">大半の人たちは直線の人生を生きる。大学に行ってインターンをやり、卒業して会社に入って昇進する。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">毎年の休暇に備えてお金を貯め、次の出世を目指して働きそうやって生涯を送る。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">直線の上を順番にゆっくりと敷かれたレールの上を生きていくんだ。でも成功する人間はそんな枠に収まらない。彼らは一足飛びの人生を選ぶ。直線状を一歩ずつじゃなくて段階を飛ばして進むんだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                  </div>
                </div>

              </div>
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/naval.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チー・ルーは中国上海の郊外にある電気も水道も通っていない村で育った。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チー・ルーが27歳の時、これまでで最高の月収を得た。7ドルだった。それから20年の間に彼は猛烈なスピードでマイクロソフトのオンラインサービスのプレジデントまで登りつめたのだ。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"> 1日8時間の睡眠を4時間に短縮すれば365日で使える時間が1460時間増えることになる。生産的な時間が年に2ヵ月増える計算になる</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チーは20代のころそうやって作り出した時間を研究論文を書いたり本を読むことに充てアメリカで勉強するという最大の夢に向けて奮闘していた</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">運はある時突然訪れるようなものではないと彼は言った。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">「バスみたいなものさ　1台逃しても必ず次のバスが来る。でも準備しておかないと飛び乗ることはできない」</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">カーネギー・メロン大学を卒業してから2年後IBMでeコマースのプラットフォームに携わっていた</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"> 3ヵ月間彼は睡眠時間を1日に1~2時間まで切り詰めた。ついに生み出したのが現在のヤフーショッピングなのだから</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">チー・タイムは単に睡眠を削ることではないと僕は知った。それは犠牲を払うことだ。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">ヤフーに参画してちょうど8年が経った頃チーは専務取締役となり3000人のエンジニアを統括するようになった</h5>
                  </div>
                </div>
              </div>
            </div>
          </Successful>
        ) : id == "quincy" ? (
          <Successful>
            <div className="flex justify-center">
              成長は失敗から生まれる
              失敗を大事にすればそこから学べる。失敗は最高の贈り物なんだ

            </div>
          </Successful>
        ) : id == "stevejobs" ? (
          <Successful>
            <div className="flex justify-center">
              未来に向かって(人生の)点と点をつなげていくことはできない。
              できるのは振り返ってつなげることだけだ
              だから僕らは信じるしかない。今していることがいつか何らかのかたちでつながっていくんだと

            </div>
          </Successful>
        ) : id == "sugarrayleonard" ? (
          <Successful>
            <div className="flex justify-between">
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/dean.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">不安が消えずに失敗が怖くて無理だと思うなら先駆者の助けを待てばいい。彼らのリードに従えばまずまずの仕事ができるよ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">でも先駆者の仲間入りをしたいなら彼らみたいに失敗して凍傷になる覚悟を決めて自分でやるしかないんだ。他の人に任せたりしないで</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">そういう覚悟がないならやらなきゃいいってだけのことだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">それでもいいんだよ。やりたい人は他にいくらでもいる。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">本当にビッグなことをやりたいなら、思ったより時間も費用もかかる。失敗だらけで傷ついて恥をかくことになるし、イライラだって募る。それは覚悟するしかない</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">その覚悟があるのならひたすらぬかるみを歩んでいけばいい</h5>
                  </div>
                </div>

              </div>
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/leonard.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">ある朝彼は学校の制服に着替えて兄弟姉妹と停留所に向かった。黄色いスクールバスが停車して他の子どもたちが乗り込んだのにレイは乗るのをやめた。バックパックをバスに投げ入れて靴ひもを結び走り出したバスの後を追いかけた</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">そうやって学校まで走った。下校の時も自宅までそうしてバスを追いかけた。翌日も同じように走った。その翌日も。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"> 暑い日も雨の日も。余りの寒さで顔に氷ができた日もあった。来る日も来る日も彼はバスを追いかけた</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">不可能な夢だなんて言わせておくな。ビジョンがあるならそれを掲げろ。戦い抜くんだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">もちろんしんどい戦いになるさ。「無理だ」って言われることもあるだろう。</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">でも貫き通せ。戦い続けろよ。「秘めた力」を使うんだ。</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">









            </div>
          </Successful>
        ) : id == "tonyhsieh" ? (
          <Successful>
            <div className="justify-center">
              <p>19歳のレディーガガはニューヨークでウエイトレスをしながらどうやってレコード契約にこぎつけたのだろうか？</p>
              ・お金
              ・学んだことを行動につなげる
              ・仕事の効率化
              <p>2　幸せを感じたり、満ち足りた気分になるとき</p>
              ・人の役に立ったとき
              ・欲しいものを買ったとき
              <p>3　何に対してストレスや恐怖を感じるか？</p>
              ・時間を無駄にした時
              ・仕事が思った通りに行かなかったとき
              ・将来の自分の姿(成功しているか、やりたいことができているか)
              <p>4　5年後、人生の終わりにしておけばよかったと後悔しそうなこと</p>
              ・投資
              ・旅をする
              ・勉強




            </div>
          </Successful>
        ) : id == "warren" ? (
          <Successful>
            <div className="flex justify-center">

              成功とは自分の欲求に優先順位を付けた結果なんだ

              お金を集めたければそれにふさわしい人間になることだ。そしてちゃんとした実績を身に着けるべきだね。その実績がちゃんと頭を使った
              結果であって、単に時代とか運に恵まれただけじゃないってことを周囲に納得させるんだ



            </div>
          </Successful>
        ) : id == "detail" ? (
          <Successful>
            <div className="flex justify-between">
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/bill.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">会議で売り込むための第一歩はまず相手の不信感を吹き飛ばすことで、そのための一番の方法は専門知識で相手を圧倒すること</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">短期の利益に飛びつくよりも長期的なポジショニングを選べということだ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">敵が恐れているものを知り、それを有利に活用すること</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"> 彼は交渉相手の素性を詳しく知ることがとても重要</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">最強の交渉戦術とは純粋に信頼しあえる関係を築くこと</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900"></h5>
                  </div>
                </div>

              </div>
              <div>
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src="/images/sidebusiness/naval.jpg" alt="" />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-4 text-xl font-bold text-gray-900">仮想通貨のポテンシャルを信じている</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">努力は正しい方向に向けなくてはならない</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">富とは君が寝ている間も稼いでくれる資産だ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">社会が求めているが手に入れる方法がまだ知られていないものの中で、君にとって自然にできること、君のスキルセットを使ってできること、君の能力を使ってできることを見つけなくてはならない</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">リッチになるための最重要スキルはいつまでも学び続ける能力だ</h5>
                    <h5 className="mb-4 text-xl font-bold text-gray-900">君のやっていることの中で無駄にならない1%が見つかったら君が残りの人生を傾けられる対象、君にとって意味のある対象が見つかったら他のことは忘れてそれに全身全霊を傾けよう</h5>
                  </div>
                </div>

              </div>







            </div>
          </Successful>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
