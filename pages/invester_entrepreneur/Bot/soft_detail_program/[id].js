import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { EA } from '../../../../components/layout/invester/bot/bot_detail_program';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Soft>
            <p>プロフィール編集画面</p>
            <p>プロフィール情報を編集するための画面を作成します。</p>
            <p>アプリケーションURL </p>
            <p>編集画面用のURLを作成します。</p>
            <Bot1 />
            <div className='text-xl text-red-600'>ポジションの更新</div>
            <p>UpdatePosition()関数はポジションをEA毎に区別するためのマジックナンバーの設定の準備をします。</p>
            <div className='text-xl text-red-600'>仕掛けシグナル</div>
            <p>EntrySignal()関数は「買いシグナル」、「売りシグナル」あるいは「シグナルなし」かを判別します。</p>
            <p>戻り値を「int型」として買いシグナルの場合「+1」、売りシグナルの場合「-1」、シグナルなしの場合「0」を返すようにします。</p>
            <p>仕掛けシグナルを「sig_entry」という変数に代入しておきます。</p>
            <div className='text-xl text-red-600'>仕掛けシグナルのフィルタ</div>
            <p>相場の状態が仕掛けシグナルに合わない局面ではそのシグナルを採用しないという機能が必要になってきます。</p>
            <p>それを実現するためにFilterSignal()という関数を使います。</p>
            <p>FilterSignal()の引数はEntrySignal()で求めた仕掛けシグナルである「sig_entry」です。</p>
            <p>FilterSignal()中でフィルタをかける条件を記述し、そのままシグナルを採用する場合は引数をそのまま返します。</p>
            <p>条件によりシグナルを不採用にする場合、「0」を出力します。</p>
            <p>FilterSignal()の引数はEntrySignal()で求めた仕掛けシグナルである「sig_entry」です。</p>
            <p>FilterSignal()の引数はEntrySignal()で求めた仕掛けシグナルである「sig_entry」です。</p>
            <div className='text-xl text-red-600'>コメント</div>
            <p>行末までのコメントにはスラッシュを2つ用いる。</p>
            <Bot2 />
            <p>コメントが複数行にわたる場合はコメント部分を/*と*/で囲う。</p>
            <Bot3 />
            <div className='text-xl text-red-600'>MQLのデータ型</div>
            <ul>
              <li>int 整数型(0,3,-5などの整数)整数型変数に代入した数字は最も近い整数に丸められる</li>
              <li>double 浮動小数点型(1.5765,0.03,-2.376などの小数)価格データや分数を含む数式に用いられる</li>
              <li>string 文字列型　文字列は""で囲わなければならない</li>
              <li>boolean ブール型(真と偽の2つの値を扱う)1(true)と0(false)で表してもいい。</li>
              <li>datetime 日付時刻型(2009.01.01 00:00)　MQLでは日付時刻型変数は1970年1月1日の午前0:00からの経過秒で表される</li>
              <li>color カラー型(Red) インディケーターやオブジェクトの色を変更するのに用いられる</li>
            </ul>
            <div className='text-xl text-red-600'>関数</div>
            <p>関数は現在のプログラミング言語の基本的な構成要素で注文を出したり、損切価格の計算といった特定の作業を実行するための流れをひとまとめにしたものである。MQLにはテクニカルインディケーター
              から注文を出すことまで様々な作業を実行するための関数が標準装備されている
            </p>
            <p className='text-red-400'>PipPoint</p>
            <Bot4 />
            <p>これは現在表示させているチャートの通貨ペアの小数点以下の桁数を計算するための関数。</p>
            <p>関数のデータ型は関数が返してくる戻り値のデータ型によって決まる。この関数は小数を返してくるので用いるデータ型は浮動小数点型。</p>
            <p>return演算子は変数UsePointの値を呼び出す関数に返すための演算子</p>
          </Soft>
        ) : id == 2 ? (
          <Soft>
            <h4>注文を出す手順</h4>
            <ul>
              <li>注文種別　買いか売りか。また、逆指値注文か、成行き注文か、指値注文か。</li>
              <li>売買する通貨ペア　</li>
              <li>ロット数</li>
              <li>仕掛け価格　</li>
              <li>損切り価格</li>
              <li>利食い価格　</li>
              <li>マジック番号</li>
            </ul>
            <div className='text-xl text-red-600'>関数OrderSend()</div>
            <p>関数OrderSend()はMQLで注文を出すときに用いられる関数。</p>
            <Bot5 />
            <p>Symbol 売買する通貨ペアを表す文字列(GBPUSD)。関数Symbol()は現在行事されているチャートの通貨ペアに対して用いられる</p>
            <p>Type 買いか売りか。成行き注文か逆指値注文か、指値注文か。次に示す整数値で表される。</p>
            <ul>
              <li>OP_BUY 買いの成行注文(整数値は0)</li>
              <li>OP_SELL 売りの成行注文(整数値は1)</li>
              <li>OP_BUYSTOP 買いの逆指値注文(整数値は2)</li>
              <li>OP_SELLSTOP 売りの逆指値注文(整数値は3)</li>
              <li>OP_BUYLIMIT 買いの指値注文(整数値は4)</li>
              <li>OP_SELLLIMIT 売りの指値注文(整数値は5)</li>
            </ul>
            <p>Lots 売買するロット数。</p>
            <p>Slippage 最大許容スリッページ。</p>
            <p>StopLoss 損切価格</p>
            <p>TakeProfit 利食い価格</p>
            <p>Comment 注文に対するコメントを文字列で表示することができる</p>
            <p>MagicNumber どのEAによって出された注文かを識別する整数値</p>
            <p>Expiration 待機注文の有効期限</p>
            <p>Arrow チャート上に仕掛け価格と時間を示す矢印の色を指定する。色を指定しなければ矢印は表示されない。</p>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数OrderSend()</h5>
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
            <h4>成行注文</h4>
            <p className='text-red-400'>買い</p>
            <Bot6 />
            <p>関数Symbol()は現在表示させているチャートのシンボルを返す。</p>
            <p>OP_BUYは買いの成行注文であることを示している。AskはMQLで事前に定義された関数で最新の売り気配値が保存されている。</p>
            <p>Slippageは外部変数を使って設定</p>
            <p>この注文には「Buy Order」というコメントをつけた。成行注文の場合は有効期限はないので有効期限のパラメーターは0に設定。チャート上に緑色の矢印が表示されるようにカラー定数としてGreenを指定</p>
            <p className='text-red-400'>売り</p>
            <Bot7 />
            <p>OP_SELLは売りの成行き注文であることを示している。</p>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 w-1/6">
              <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-1">
                <a href="/invester/Bot/ea_detail_program_2">
                  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">コード確認</h5>
                </a>
              </div>
            </div>
            <h4>逆指値注文</h4>
            <p className='text-red-400'>買い</p>
            <Bot8 />

            <p>待機注文の仕掛け価格には変数PendingPriceを使う。</p>
            <p>これはトレーディングアルゴリズムに基づいて計算してもよいし、外部パラメーターとして設定してもよい。</p>
            <p className='text-red-400'>売り</p>
            <Bot9 />

            <h4>指値注文</h4>
            <p className='text-red-400'>買い</p>
            <Bot10 />

            <p className='text-red-400'>売り</p>
            <Bot11 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>約定結果を受け取る</div>
            <p>約定結果をキャッチするために変数を用意します。</p>
            <p>約定結果は約定に成功した場合は「5010000」などの約定番号、失敗した場合は「-1」が通知されます。どちらにせよ整数です。</p>
            <p>整数を入れる場合の変数の宣言はintです。初期値は0としています。</p>
            <p>このプログラムではOrderSend関数で発注してFX業者から通知される約定結果を「Ticket_S」に入れるようにしています。</p>
            <p>約定に成功すれば「Ticket_S」には約定番号が入り、失敗すれば「-1」が入ります。</p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot12 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot13 />
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>1回のみ発注する</div>
            <p>エントリーif文の「()」内の条件は「Ticket_S==0」。つまりTicket_Sが0の場合に売り注文を出しています。</p>
            <p>発注をして約定に成功すれば「Ticket_S」には約定番号が入り、失敗すれば「-1」が入ります。。</p>
            <p>つまりTicket_Sに0がはいっているということはまだ一度も発注を行っていない状態であるということです。</p>
            <p></p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot14 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot15 />
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>約定に失敗した場合に再発注する</div>
            <p>もし一度も発注を行っていない、もしくは発注を行ったが約定に失敗した、いずれか一方の条件を満たした場合は売り注文を出すことになります。</p>
            <p>。</p>
            <p></p>
            <p></p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot16 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot17 />
              </div>
            </div>
            <p>買い注文を出したり、売りポジションを決済するときに使う価格が売り気配値で売り注文を出したり買いポジションを決済するときに使う価格が買い気配値</p>
            <p></p>
          </Soft>
        ) : id == 3 ? (
          <Soft>
            <h4>利食いと損切</h4>
            <p>損切と利食い価格の計算方法はいくつかある。最もよく使われる方法は仕掛け価格からの値幅をピップス数で指定するというもの。</p>
            <p>たとえば損切を50ピップスに指定したとすると損切は仕掛け価格から50pips離れた位置に置かれる</p>

            <p></p>
            <p></p>
            <p></p>
            <div className='text-xl text-red-600'>仕掛け価格からの値幅による計算</div>
            <p>損切価格を計算するときに最もよく用いられる方法はまず外部変数を使って損切価格や利食い価格を仕掛け価格からの値幅で指定しそれを損切価格に変換するもの。</p>
            <p>損切や利食いの設定には次の外部変数を用いる</p>
            <p></p>
            <Bot18 />
            <p>PointはMQLで事前に定義された変数で小数点以下何桁を用いるかに基づいて通貨の最小価格単位を返している</p>
            <p>例えば小数点以下4桁の通貨ペアの場合1ポイント=0.0001</p>
            <p>日本円ペアの場合1ポイント=0.01</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>成行注文</div>
            <h3>損切</h3>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <p className='text-red-400'>買ったポジションの損切</p>
                <p>現在の売り気配値(Ask)をOpenPriceに代入し、その値を仕掛け価格として用いる。このときStopLossは0より大きくなければならない。0よりも大きくない場合、BuyStopLossは0で初期化され、損切は設定されない。</p>
                <p>StopLossにPointをかけ、得られた値をOpenPriceから差し引く。得られた結果が変数BuyStopLossに代入される。</p>
                <Bot18 />
              </div>
              <div className='m-4 w-1/2'>
                <p className='text-red-400'>売ったポジションの損切</p>
                <Bot22 />
              </div>
            </div>
            <h3>インディケーターを使った例</h3>
            <p>損切りを移動平均線の位置に置きたい場合、変数MAが現在の足の移動平均の値になる。。</p>
            <p>したがって現在の移動平均の値を損切価格の変数に代入すればよい。</p>
            <p>現在の足の移動平均の値が1.6894だとするとその値が損切価格になる</p>
            <Bot29 />
            <h3>利食い</h3>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <p className='text-red-400'>買ったポジションの利食い</p>
                <Bot23 />
              </div>
              <div className='m-4 w-1/2'>
                <p className='text-red-400'>売ったポジションの利食い</p>

                <p></p>
                <Bot24 />
              </div>
            </div>
            <p className='text-red-400'>常に0.01または0.0001を返してくれる関数</p>
            <Bot19 />
            <p>文字列のパラメーターCurrencyはポイント値を計算する対象となる通貨ペアのシンボルである。</p>
            <p>関数MarketInfo()のパラメーターにMODE_DIGITSを入力するとその通貨ペアの小数点以下の桁数を返してくる。</p>
            <p>if-else文は小数点以下の桁数に基づいて変数CalcPointに適切なポイント値を代入する</p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <p>EURUSD</p>
                <p>結果は0.0001</p>
                <Bot20 />
              </div>
              <div className='m-4 w-1/2'>
                <p>USDJPY</p>
                <p>結果は0.01</p>
                <Bot21 />
              </div>
            </div>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数MarketInfo()</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="http://www.agile-software.site/2022/05/21/%e9%96%a2%e6%95%b0marketinfo%ef%bc%88%ef%bc%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            <p className='text-red-400'>売ったポジションの損切</p>

            <p>OP_SELLは売りの成行き注文であることを示している。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>逆指値注文</div>
            <p className='text-red-400'>買い</p>

            <p>。</p>
            <p>ry」です。</p>
            <p>Fy」です。</p>
            <p className='text-red-400'>売り</p>
            <Bot22 />

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>指値注文</div>
            <p className='text-red-400'>買い</p>
            <Bot23 />
            <p>Fy」です。</p>
            <p className='text-red-400'>売り</p>
            <Bot24 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>注文やポジションの情報の取得</div>
            <p>注文を出した後、注文の変更やポジションの決済を行うにはまずその注文やポジションの状態を調べる必要がある。</p>
            <p>そのためにはまず関数OrderSelect()を使って対象となる注文やポジションを選択しなければならない。</p>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数OrderSelect()</h5>
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
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スリッページ</div>
            <p className='text-red-400'>スリッページパラメータを調整するための関数</p>
            <Bot25 />
            <p>気配値に小数点以下3桁や5桁を用いるブローカーの場合、関数OrderSend()のスリッページパラメーターは正しいスリッページ値にするためには10倍しなければならない。</p>
            <p>通貨の気配値が小数点以下2桁や4桁で表示される場合、スリッページパラメーターにはSlippagepipsをそのまま使う</p>
            <p></p>
            <Bot26 />
            <p></p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <p>売買対象の通貨ペアのポイントやスリッページの適切な値を格納するグローバル変数を作成し、これらの値を参照したいときにいつでも使えるようにしておく</p>
            <Bot27 />
            <p></p>
            <p></p>

            <p></p>
            <p></p>
          </Soft>
        ) : id == 4 ? (
          <Soft>
            <p> EAは実際にトレードを行うプログラムなので想定した売買ルール通りに動かなかったり誤作動したりすると大きな損失を出す可能性がある。</p>
            <p>   そのためEAプログラム作成後すぐに実際のチャート上で動作させるのではなく過去のFXデータを使って様々な場面でトレードを疑似的に行うバックテストが必要</p>

            <p>    メタトレーダーにはEAをバックテストさせる機能が搭載されている。</p>
            <p>    ストラテジーテスターでバックテストをして問題がなければ今度は実際のチャートでEAを動かすことになる。</p>
            <p>    ただバックテストで問題なくても実際にチャートで動かすと誤動作を起こす可能性があるため最初は必ずデモ口座で実行する</p>
            <h4></h4>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>バックテスト設定</div>
            <h3>自動売買プログラムを選択</h3>
            <h3>通貨ペアを選択</h3>
            <h3>バックテストモデルを選択</h3>
            <li>Open prices only</li>
            <li>Control points</li>
            <li>Every tick</li>
            <h4>Open prices only</h4>
            <p>選択したタイムフレームのデータのみを利用します。</p>
            <p>例えば1時間足を選択した場合は1時間足の4本値と出来高のみを使ってバックテストします。バーの形成途中の価格変動は考慮されないのでバーの途中でのエントリーやエグジット
              をするシステムのバックテストには向いていません。ただし、4本値のみを使って指標の計算や条件判断を行うシステムであれば正確なバックテストが可能です
            </p>
            <h4>Control points</h4>
            <p>選択したタイムフレームよりも1つ短いタイムフレームも利用します。例えば1時間足を選択した場合は30分足のデータも利用します。</p>
            <p>1つ短いタイムフレームを利用することによってバーの形成途中の価格変動もある程度推定しながらバックテストをします。</p>
            <h4>Every tick</h4>
            <p>保有しているヒストリカルデータの中で最も短いタイムフレームを利用します。</p>
            <p>最も短いタイムフレームは1分足ですが通常メタトレーダーが保存している1分足データはごく短い期間に限られています。したがって1分足が利用できる期間は1分足を利用し、1分足のない
              期間は5分足を利用し、5分足のない期間は15分足を利用するというように保有しているデータを総動員します。
            </p>
            <p>バーの形成途中の価格変動を3つのモデルの中で最も正確に再現してバックテストをします。バーの途中でエントリーやエグジットを行うシステムであればこのモデルを使うのが適しています。</p>
            <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">モデルの違いは単に利用するデータの違いだけではありません。プログラムがいつ動作するのかについても異なってきます</span>
              </div>
            </div>
            <p>「Open prices only」ではバーが完成した時に1買いだけプログラムが動作します。対して「Every tick」では仮想的ですがティックごと(価格が動くたび)にプログラムが動作します</p>
            <h3>タイムフレームを選択</h3>
            <p>メタトレーダーが対応しているタイムフレームから選択します。</p>
            <h3>バックテスト期間を選択</h3>
            <p>「日付と時間を使用」にチェックを入れるとバックテスト期間を指定できます。チェックを入れない場合、メタトレーダーに保存されているヒストリカルデータの全期間でバックテストをします。</p>
            <h3>任意で「Visual mode」にチェック</h3>
            <p>「Visual mode」にチェックを入れるとリアrタイムで倍々を行っているかのように視覚的に再現したバックテストを行います。</p>
            <h3>パラメーターの値を設定</h3>
            <p>「Value」に書くパラメーターの値を入力します。</p>
            <p>プログラム上で「extern」を付けて宣言されたものは「パラメーターの入力」タにて変更することが出来ました。</p>
            <h3>バックテストを行う設定を確認</h3>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>バックテスト後</div>
            <h3>結果タブ</h3>
            <p>トレード履歴が表示されます</p>
            <h3>Graphタブ</h3>
            <p>資産曲線が表示されます</p>
            <h3>レポートタブ</h3>
            <p>パフォーマンスの詳細が表示されます</p>
            <div className='m-4 w-1/3'>
              <p className='text-xl'></p>
              <table class="table-auto border-2 border-green-400">
                <tbody>
                  <tr>
                    <td>Bars in test</td>
                    <td>テストをしたバーの数</td>
                  </tr>
                  <tr>
                    <td>Ticks modelled</td>
                    <td>テストで利用したティック数</td>
                  </tr>
                  <tr>
                    <td>Modelling quality</td>
                    <td>テストで利用したティックの割合</td>
                  </tr>
                  <tr>
                    <td>Initial deposit</td>
                    <td>初期投資額</td>
                  </tr>
                  <tr>
                    <td>Total net profit</td>
                    <td>総損失(総収益-総損失)</td>
                  </tr>
                  <tr>
                    <td>Gross profit</td>
                    <td>総収益</td>
                  </tr>
                  <tr>
                    <td>Gross loss</td>
                    <td>総損失</td>
                  </tr>
                  <tr>
                    <td>Profit factor</td>
                    <td>プロフィットファクター(総収益/総損失)</td>
                  </tr>
                  <tr>
                    <td>Expected payoff</td>
                    <td>期間損益(総損益/トレード回数)</td>
                  </tr>
                  <tr>
                    <td>Absolute drawdown</td>
                    <td>初期投資額からのドローダウン</td>
                  </tr>
                  <tr>
                    <td>Maximal drawdown</td>
                    <td>最大ドローダウン</td>
                  </tr>
                  <tr>
                    <td>Relative drawdown</td>
                    <td>最大ドローダウン比率</td>
                  </tr>
                  <tr>
                    <td>Total trades</td>
                    <td>トレード回数</td>
                  </tr>
                  <tr>
                    <td>Short positions(won%)</td>
                    <td>売りトレード数(勝率)</td>
                  </tr>
                  <tr>
                    <td>Long positions(won%)</td>
                    <td>買いトレード数(勝率)</td>
                  </tr>
                  <tr>
                    <td>Profit trades(% of total)</td>
                    <td>勝ちトレード数(比率)</td>
                  </tr>
                  <tr>
                    <td>Loss trades(% of total)</td>
                    <td>負けトレード数(比率)</td>
                  </tr>
                  <tr>
                    <td>Largest profit trade</td>
                    <td>1トレードでの最大収益</td>
                  </tr>
                  <tr>
                    <td>Largest loss trade</td>
                    <td>1トレードでの最大損失</td>
                  </tr>
                  <tr>
                    <td>Average profit trade</td>
                    <td>勝ちトレードの平均収益</td>
                  </tr>
                  <tr>
                    <td>Average loss trade</td>
                    <td>負けトレードの平均損失</td>
                  </tr>
                  <tr>
                    <td>Maximum consecutive wins(profit in money)</td>
                    <td>最大連続勝ちトレード数(収益)</td>
                  </tr>
                  <tr>
                    <td>Maximum consecutive losses(loss in money)</td>
                    <td>最大連続負けトレード数(損失)</td>
                  </tr>
                  <tr>
                    <td>Maximum consecutive profit(count of wins)</td>
                    <td>最大連続収益(勝ちトレード数)</td>
                  </tr>
                  <tr>
                    <td>Maximum consecutive loss(count of losses)</td>
                    <td>最大連続損失(負けトレード数)</td>
                  </tr>
                  <tr>
                    <td>Average consecutive wins</td>
                    <td>平均連続勝ちトレード数</td>
                  </tr>
                  <tr>
                    <td>Average consecutive losses</td>
                    <td>平均連続負けトレード数</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p></p>
            <p></p>
          </Soft>
        ) : id == 5 ? (
          <Soft>
            <h4>関数化</h4>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロット数を計算するための関数</div>
            <Bot30 />
            <p>この関数の名前をCalcLotSize()とする。</p>
            <p>DynamicLotSize, EquityPercentStopLoss,FixedLotSizeがここでは関数のパラメーターとして関数に引き渡す</p>
            <p>関数の最後のreturn文によってLotSizeの値が呼び出す関数に返される。</p>
            <p>この関数は関数start()と関数init()の間に置くか、外部インクルードファイルの中に入れておく。後者の場合、この関数をプログラムの中で使えるようにするにはプログラムの最初に#includeを宣言して取り込んでおく必要がある。</p>
            <p></p>
            <p></p>
            <p></p>
            <div className='text-xl text-red-600'>関数の呼び出し</div>
            <p>この行は関数start()の中に置く。</p>
            <Bot31 />
            <div className='text-xl text-red-600'>外部変数</div>
            <Bot32 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロット数を検証するための関数</div>
            <p>この関数には関数CalcLotSize()を使って計算したロット数を格納した変数(argLotSize)をパラメーターとして引き渡す</p>
            <p>パラメーターとして引き渡された変数argLotsizeは処理され、呼び出す関数に返される。</p>
            <Bot33 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>注文を出すための関数</div>
            <p>関数OrderSend()を使って現在の市場価格で買い注文を出すための関数を作成する。発注に失敗したらエラー処理ルーチンを実行する。</p>
            <p>注文番号であるチケット番号は呼び出す関数に返すが発注に失敗した場合は-1が返される。</p>
            <p>売買する通貨のシンボルは現在表示させているチャートの通貨シンボルをそのまま使うのではなく、パラメーターargSymbolを使って指定する。</p>
            <p>こうすれば現在表示させているチャートの通貨シンボル以外の通貨の注文を出すとき、簡単に注文を出すことが出来る。</p>
            <p>また、買い気配値や売り気配値は事前に定義された変数BidやAskは使わず、関数MarketInfo()にパラメーターとしてMODE_ASKやMODE_BIDを入力して取得する。</p>
            <p></p>

            <Bot34 />


            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>待機注文を出すための関数</div>

            <p>。</p>
            <p>関数MarketInfo()のパラメーターにMODE_DIGITSを入力するとその通貨ペアの小数点以下の桁数を返してくる。</p>
            <p>if-else文は小数点以下の桁数に基づいて変数CalcPointに適切なポイント値を代入する</p>
            <Bot35 />
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数MarketInfo()</h5>
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
            <p className='text-red-400'>売ったポジションの損切</p>

            <p>OP_SELLは売りの成行き注文であることを示している。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>逆指値注文</div>
            <p className='text-red-400'>買い</p>

            <p>。</p>
            <p>ry」です。</p>
            <p>Fy」です。</p>
            <p className='text-red-400'>売り</p>
            <Bot34 />

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>指値注文</div>
            <p className='text-red-400'>買い</p>
            <Bot35 />
            <p>。</p>
            <p></p>
            <p>Fy」です。</p>
            <p className='text-red-400'>売り</p>
            <Bot36 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>注文やポジションの情報の取得</div>
            <p>注文を出した後、注文の変更やポジションの決済を行うにはまずその注文やポジションの状態を調べる必要がある。</p>
            <p>そのためにはまず関数OrderSelect()を使って対象となる注文やポジションを選択しなければならない。</p>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数OrderSelect()</h5>
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
          </Soft>
        ) : id == 6 ? (
          <Soft>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>if文</div>
            <p>if文はプログラムの中で最も重要と言っても過言ではありません。</p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot46 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot47 />
              </div>
            </div>
            <p>具体的な条件を当てはめてみます。</p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot48 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot49 />
              </div>
            </div>
            <p>1本前のローソク足が上昇線という条件が「Open[1]＜Close[1]」というプログラムになっています。</p>
            <p>1本前のローソク足が上昇線ということは1本前のローソク足の始値より1本前のローソク足の終値が大きい</p>
            <p>1本前のローソク足の始値＜1本前のローソク足の終値</p>
            <p>もし3盆前のローソク足の終値を表示したいのであればClose[3]、2本前のローソク足の高値を表示したいのであればHigh[2]</p>
            <p>OrderSend関数はエントリー条件を満たしていれば価格が動くごとに発注を行います。つまり、価格が動くたびに条件を満たしているかどうかの判断をして条件を満たしていれば何度でもエントリーしてしまうのです。</p>
            <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div className='text-xl'>
                <span class="font-medium ">覚えること:</span>プログラムは価格が動くたびに動作する
              </div>
            </div>
            <p></p>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot50 />
              </div>
              <div className='m-4 w-1/2'>

              </div>
            </div>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数MarketInfo()</h5>
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


            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <p>ここでは関数OrderSelect()にforやwhileなどのループ演算子を併用してループ処理によって注文情報を取得する方法について学習する</p>
            <p>この方法は複数のポジションを同時に決済したり、トレイリングストップを設定したり、保有中のポジションの数を数えたりといったことに使える。</p>

            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ループ(繰り返し処理)</div>
            <div className='text-xl text-red-600'>for演算子</div>
            <p>for演算子は一定のブロックを決められた回数だけ繰り返すのに使われる。カウンターとして整数型の変数を宣言し、それにループの初期値を代入する。</p>
            <p>そしてループを開始するための条件を指定する。その条件がtrueのときにループが実行される。さらに、カウンター変数をいくつずつ増やすかも指定する。</p>
            <p></p>

            <Bot37 />
            <p>「int Counter=1」は変数Counterを値1から開始することを示している。2番目の式「Counter ＜= 3」はブレース({ })内のコードを実行するための条件を示している。</p>
            <p>この条件がtrueの間ループは継続し、falseになったらループから抜けてブレースの後のブロックに進む。</p>
            <p>「Counter++」は「Counterの値を1だけ増やす」ことを意味する。この部分が「Counter--」のときは「Counterの値を1だけ減らす」ことを意味し、「Counter+2」のときは「2だけ増やす」ことを意味する
            </p>
            <p>ループが1回終了するごとにCounter変数は指定した数だけ増減する。そして次のループに進む前に2番目のパラメーターがチェックされ条件を満たせば2回目のループが実行される。</p>
            <p>上の例ではループは3回実行される。それぞれのループが終了するとカウンターは1だけ増え、3回目のループが終了するとループは終了する。</p>

            <div className='text-xl text-red-600'>while演算子</div>
            <p>while演算子もfor演算子と同じくループ処理を行うためのものだがループする回数が事前に分かっている場合はfor演算子を使い、分かっていない場合はwhile演算子を使う。</p>
            <p>Somethingがtrueのときループが実行される。もちろんSomethingの値が変わらなければループは無限に続く。</p>
            <p>したがってSomethingの値を変化させるための条件をループ内に記述する必要がある。</p>
            <div className='flex'>
              <div className='m-4'>
                <Bot38 />
              </div>
              <div className='m-4'>
                <Bot39 />
              </div>
            </div>

            <div className='text-xl text-red-600'>オーダープールのループ処理</div>
            <Bot40 />
            <p>Counterの値を0に設定し、Counterの値が関数OrderTotal()の値-1以下になるまでループを繰り返す。この例ではループが1回終了するたびにCounterの値は1だけ増える。</p>
            <p>関数OrdersTotal()は現在保有中のポジションと待機注文の総数を返してくる。関数OrdersTotal()から1を差し引くのはなぜか。</p>
            <p>オーダープールには私たちのターミナルで現在保有中のポジションと待機注文が出した順番に並べられている。</p>
            <p>インデックス番号は0から始まる。したがって保有中のポジションか待機注文が1つの場合はそのインデックス番号は0になる。</p>
            <p>2番目の注文が発注されるとそのインデックス番号は2、といった具合だ。</p>
            <p className=' text-red-600'>関数OrdersTotal()は現在保有中のポジションと待機注文の総数を返してくる。</p>
            <p>しかしインデックス番号は0から始まるのでカウンター変数にカウントさせたいのは2までだ。</p>
            <p>したがってCounter変数の値をインデックス番号に一致させるためには関数OrdersTotal()から1を差し引かなければならない。</p>
            <p>オーダープール内の待機注文や保有しているポジションが1つクローズされたらプール内のそれよりも新しい注文のインデックス番号は1だけ少なくなる。例えばインデックス
              番号0のポジションが決済されたとするとインデックス番号1の注文のインデックス番号は0になり、インデックス番号2の注文のインデックス番号は1になる。
            </p>
            <p>関数OrderSelect()文はCounter変数の値をインデックス番号として用いる。前述のとおり、オーダープールのループ処理では古い注文から新しい注文の順にループする。</p>
            <p>SELECT_BY_POSパラメーターは注文をチケット番号ではなくオーダープールの中の位置(インデックス)で選ぶことを示している。</p>
            <p>最初のループではCounterの値は0なので関数OrderSelect()を使ってオーダープールのなかから最も古い注文を選ぶ。</p>
            <p>そして関数OrderTicket()や関数OrderStopLoss()等の関数を使って注文情報を調べ、必要に応じて待機注文のキャンセル、保有中のポジションの決済、および注文内容の変更をする</p>

            <Bot41 />


            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>取引種別ごとに待機注文と保有中のポジションの数を数えるための関数</div>
            <Bot42 />
            <p>関数TotalOrderCount()は関数のパラメーターとして引き渡したマジック番号に一致し指定したチャートの通貨シンボルの待機注文と保有中のポジションの総数を整数値で返してくる。</p>
            <p>まず変数OrderCountを宣言する。初期値を指定していないのでOrderCountは0で初期化される。</p>
            <p>オーダープールにはほかのEAから出した注文や保有中のポジションがすべて含まれるので対象となるEAが出した注文がどれなのかを知る必要がある。</p>
            <p>まず最初に選択した注文のOrderSymbol()を調べ、それがargSymbolパラメーターに一致することを確認する。次にその注文のマジック番号を調べる。</p>
            <p>OrderMagicNumber()がargMagicNumberパラメーターに一致すればこれが対象となるEAによって出された注文であることが分かる。</p>
            <p className='text-red-400'>成行き注文で買ったポジションだけを数える</p>
            <p>OP_BUYは買いの成行き注文を表す定数である。他の取引種別のポジションや待機注文の数を数えたいのであれば、OP_BUYの部分を数えたい取引種別のポジションや待機注文の定数に置き換え
              関数の名前をそのポジションや待機注文の取引種別を反映する名前に変えればよい。
            </p>
            <p></p>
            <p></p>

            <Bot43 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>トレイリングストップ</div>
            <p>ループ処理は複数の注文を変更するのにも使える。これの最も一般的な例はトレイリングストップ。</p>
            <p>トレイリングストップとは含み益が出ている状態において損切価格を切り上げたり切り下げたりすることで利益の上乗せを狙う。</p>
            <p>まずトレイリングストップの設定に用いる外部変数を宣言する。</p>
            <Bot44 />
            <p>成行き注文で建てた買いポジションをすべてチェックし、必要に応じて損切価格を変更する</p>
            <Bot45 />
            <p>Ordeて出された注文であることが分かる。</p>
            <p className='text-red-400'>成行き注文で買ったポジションだけを数える</p>
            <p>OP_BUYは買いの成行き注文を表す定数である。他の取引種別のポジションや待機注文の数を数えたいのであれば、OP_BUYの部分を数えたい取引種別のポジションや待機注文の定数に置き換え
              関数の名前をそのポジションや待機注文の取引種別を反映する名前に変えればよい。
            </p>

          </Soft>
        ) : id == 7 ? (
          <EA>
            <h4>注文を出す手順</h4>
            <div className='text-xl text-red-600'>定型パターン</div>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot17 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot18 />
              </div>

            </div>
            <p>関数OrderSend()はMQLで注文を出すときに用いられる関数。</p>
          </EA>
        ) : id == "soft_detail" ? (
          <Soft>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <iframe src="https://zakki.perpetualtravelerchoja.com/2021/05/22/%e5%b9%b8%e7%a6%8f%e3%81%ae%e8%b3%87%e6%9c%ac%e8%ab%96%e5%b9%b8%e3%81%9b%e3%81%ab%e7%94%9f%e3%81%8d%e3%81%a6%e3%81%84%e3%81%8f%e3%81%9f%e3%82%81%e3%81%ab/" width="750" height="600" frameboader="0"></iframe>
            <div>
              取引ソフトはメタトレーダーが利用されています
              メタトレーダーでは価格データと口座情報を同一ソフト内で参照することができます。また、独自のプログラム言語を搭載しており価格データから売買シグナルの生成、サーバへの注文発注までの流れを簡単なプログラムで記述することができる
              メタトレーダーのプログラム言語はC言語とC++言語をベースに開発されたものでMQL(MwtaQuotes Language)というプログラミング言語
              メタトレーダーはロシアのメタクオーツ社によって開発された取引ソフト
              バージョン4とバージョン5が公開されておりそれぞれMT4とMT5と呼ぶことにします。プログラミング言語もMQL4とMQL5と異なります
              MQL4とMQL5はライブラリ関数に互換性がないものがあるためMQL4で記述されたプログラムはそのままの形でMQL5プログラムとして動作しない。そのためMT5の普及があまり進んでいない現状

              メタエディターはメタトレーダーに搭載されたMQL言語用の統合開発環境(IDE)である。
            </div>


          </Soft >
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post



// 作成できるプログラムの種類
//             ・エキスパートアドバイザー
//             ・カスタム指標プログラム
//             ・スクリプトプログラム

// エキスパートアドバイザーはチャート上の価格の変化に応じて実際にトレードを行うプログラム。これが自動売買プログラムでEAと呼ばれます。
// カスタム指標プログラムはMT4にすでに組み込まれているテクニカル指標と同様にチャートに挿入することで独自に作成したテクニカル指標を表示させるプログラム
// スクリプトプログラムはエキスパートアドバイザーやカスタム指標のようにチャート上に常駐して自動売買やテクニカル指標の表示を続けるプログラムとは異なりプログラミングした処理を１回だけ実行して終わるプログラムです

// MQL4のソースプラグラムはmq4という拡張子がついたテキスト形式のファイルとして保存されます。このソースファイルをコンパイルすることでex4という拡張子のついた実行ファイルが作成される




// ・\experts\indicators　インディケーターのソースコードと実行ファイルが保存される
// ・\experts\include 　ソースコードのインクルードファイル(.mqhファイル)が保存される
// ・\experts\libraries　関数ライブラリーとDLLが保存される。
// ・\experts\scripts　スクリプトのソースコードと実行ファイルが保存される
// ・\experts\templates　ソースファイルのテンプレートが保存される
// ・\experts\logs  EAの実行結果がログファイルとして保存される


// コメント
// コメントの書き方
// //　This is a comment
// 複数行のコメントの書き方
// /*This is a comment block Everything here is commented out */

// 識別子
// MQLの識別子は小文字と大文字を区別する。
// StopLossとstoplossは異なる変数

// 変数
// 変数は他のプログラミング言語と同じく、データを一時的に記憶するのに用いられる

// int　整数型(0, 3などの整数)
// double　浮動小数点型(1.5765, 0.03などの少数)
// string　文字列型("The quick down brown fox jumped over the lazy dog") 文字列は二重引用符で囲わなければならない
// bloolean　ブール型(真[true]と偽[false]の2つの値だけを扱う)
// datetime　日付時刻型 MQLでは1970年1月1日の午前0: 00からの経過秒で表される
// color　カラー型　インディケーターやオブジェクトの色を変更するのに用いられる

// 定数
// 定数とはプログラムの実行期間を通じて変更されない値
// PERIOD_H1はチャートの1時間脚を表しOP_BUYは買いの成り行き注文、Redは赤色

// 関数の戻り値が常に1pipsになるようにする
// 浮動小数点型の変数を宣言(名前はUsePoint)
// 次に関数PipPoint()を呼び出してその結果を変数UsePointに代入する
// double UsePoint;
// UsePoint = PipPoint();

// 関数PipPont()のコード
{/* double PipPoint()
{
  if(Digits == 2|| Digits ==3) double UsePoint = 0.01;
  else if (Digits ==4 || Digits ==5) UsePoint = 0.0001;
  return(UsePoint);
} */}




const Bot1 = () => {
  const test = `
  //ティック時実行関数
  void OnTick()
  {
     UpdatePosition(); //ポジションの更新
  
     int sig_entry = EntrySignal(); //仕掛けシグナル
     
     //手仕舞いシグナルによるポジションの決済
     bool sig_exit = ExitSignal(sig_entry); //手仕舞いシグナル
     if(sig_exit) MyOrderClose(); //ポジションの決済
  
     sig_entry = FilterSignal(sig_entry); //仕掛けシグナルのフィルタ
  
     double lots = CalculateLots(); //売買ロット数
  
     //売買注文
     if(sig_entry > 0) MyOrderSend(OP_BUY, lots);  //買い注文
     if(sig_entry < 0) MyOrderSend(OP_SELL, lots); //売り注文
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Bot2 = () => {
  const test = `
  //This is a comment
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot3 = () => {
  const test = `
  /*This is a comment block
  Everything here is commented out */
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot4 = () => {
  const test = `
  double PipPoint()
      {
        if(Digits == 2 || Digits == 3) double UsePoint = 0.01;
        else if(Digits == 4 || Digits == 5) UsePoint = 0.001;
        return(UsePoint)
      }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot5 = () => {
  const test = `
  int OrderSend(string Symbol, int Type, double Lots, double Price, 
    int Slippage, double StopLoss, double TakeProfit, string Comment = NULL,
    int MagicNumber = 0, datetime Expiration = 0, color Arrow = CLR_NONE);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUY,LotSize,Ask,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot7 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELL,LotSize,Bid,Slippage,SellStopLoss,SellTakeProfit,"Sell Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot8 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUYSTOP,LotSize,PendingPrices,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Stop Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot9 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELLSTOP,LotSize,PendingPrice,Slippage,SellStopLoss,SellTakeProfit,"Sell Stop Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot10 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUYLIMIT,LotSize,PendingPrice,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Limit Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot11 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELLLIMIT,LotSize,PendingPrice,Slippage,SellStopLoss,SellTakeProfit,"Sell Limit Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot12 = () => {
  const test = `
  ini Ticket_S=0; //約定結果をキャッチする変数
  
  int start()
    {
      Ticket_S=OrderSend(Symbol(),OP_SELL,1,Bid,10,0,0,"必勝",4649,0,Blue);
    return(0);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot13 = () => {
  const test = `
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定します。

  メインのプログラムが始まります。
    {
      売り注文を出します。約定結果はTicket_Sに入れます。
    プログラムを終わります
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot14 = () => {
  const test = `
  ini Ticket_S=0; //約定結果をキャッチする変数
  
  int start()
    {
      if(Ticket_S==0)
      {
        Ticket_S=OrderSend(Symbol(),OP_SELL,1,Bid,10,0,0,"必勝",4649,0,Blue);
      }
    return(0);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot15 = () => {
  const test = `
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定します。

  メインのプログラムが始まります。
    {
      もし一度も発注を行っていない場合は
      {
        売り注文を出します。約定結果はTicket_Sに入れます。
      }
    プログラムを終わります
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot16 = () => {
  const test = `
  ini Ticket_S=0; //約定結果をキャッチする変数
  
  int start()
    {
      if(Ticket_S==0||Ticket_S==-1)
      {
        Ticket_S=OrderSend(Symbol(),OP_SELL,1,Bid,10,0,0,"必勝",4649,0,Blue);
      }
    return(0);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot17 = () => {
  const test = `
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定します。

  メインのプログラムが始まります。
    {
      もし一度も発注を行っていない、もしくは発注を行ったが約定に失敗した場合は
      {
        売り注文を出します。約定結果はTicket_Sに入れます。
      }
    プログラムを終わります
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot18 = () => {
  const test = `
  double OpenPrice =Ask;
  if(StopLoss > 0) double BuyStopLoss = OpenPrice - (StopLoss*Point);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot19 = () => {
  const test = `
  double PipPoint(string Currency)
  {
    int CalcDigits = MarketInfo(Currency,MODE_DIGITS);
    if(CalcDigits == 2 || CalcDigits == 3) double CalcPoint =0.01;
    else if(CalcDigits == 4 || CalcDigits ==5) CalcPoint = 0.0001;
    return(CalcPoint);
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot20 = () => {
  const test = `
  double UsePoint = PipPoint(EURUSD);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot21 = () => {
  const test = `
  double UsePoint = PipPoint(USDJPY);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot22 = () => {
  const test = `
  double OpenPrice = Bid;
  if(StopLoss>0" double SellStopLoss = OpenPrice + (StopLoss * UsePoint)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot23 = () => {
  const test = `
  if(TakeProfit > 0) double BuyTakeProfit = OpenPrice + (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot24 = () => {
  const test = `
  if(TakeProfit > 0) double SellTakeProfit = OpenPrice - (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot25 = () => {
  const test = `
  int GetSlippage(string Currency, int SlippagePips)
    {
      int CalcDigits = MarketInfo(Currency,MODE_DIGITS);
      if(CalcDigits ==2|| CalcDigits ==4) double CalcSlippage = SlippagePips;
      else if(CalcDigits == 3 || CalcDigits ==5) CalcSlippage = SlippagePips * 10;
      return(CalcSlippage);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot26 = () => {
  const test = `
  //外部パラメーター
  extern int Slippage=5;

  //注文の発注
  OrderSend(Symbol(),OP_BUY,LotSize,Ask,GetSlippage(Symbol(),Slippage),BuyStopLoss,BuyTakeprofit,"Buy Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot27 = () => {
  const test = `
  //グローバル変数
  double UsePoint;
  int UseSlippage;

  ini init()
    {
      UsePoint = PipPoint(Symbol());
      UseSlippage = GetSlippage(Symbol(),Slippage);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot28 = () => {
  const test = `
  extern int StopLoss = 50;
  extern int TakeProfit = 100;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot29 = () => {
  const test = `
  double BuyStopLoss = MA;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot30 = () => {
  const test = `
  double CalcLotSize(bool argDynamicLotSize, double argEquityPercent, double argStopLoss, double argFixedLotSize)
      {
        if(argDynamicLotSize == true)
            {
              double RiskAmount = AccountEquity() * (argEquityPercent/100);
              double TickValue = MarketInfo(Symbol(),MODE_TICKVALUE);
              if(Point == 0.001 || Point == 0.00001) TickValue *=10;
              double LotSize = (RiskAmount / argStopLoss) / TickValue;
            }
        else LotSize = argFixedLotSize;

        return(LotSize)
      }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot31 = () => {
  const test = `
  double LotSize = CalcLotSize(DynamicStopLoss,EquityPercent,StopLoss,fixedLotSize)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot32 = () => {
  const test = `
  extern bool DynamicLotSize = true;
  extern double EquityPercent = 2;
  extern double FixedLotSize = 0.1;
  extern double StopLoss = 50;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot33 = () => {
  const test = `
  double VerifyLotSize(double argLotSize)
    {
      if(argLotSize < MarketInfo(Symbol(),MODE_MINLOT))
        {
          argLot = MarketInfo(Symbol(),MODE_MINLOT);
        }
      else if(argLotSize > MarketInfo(Symbol(),MODE_MAXLOT))
        {
          argLotSize = MarketInfo(Symbol(),MAXLOT);
        }
      if(MarketInfo(Symbol(),MODE_LOTSTEP) == 0.1)
        {
          argLotSize = NormalizeDouble(argLotSize,1);
        }
      else argLotSize = NormalizeDouble(argLotSize,2);

      return(argLotSize);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot34 = () => {
  const test = `
  int OpenBuyOrder(string argSymbol, double argLotSize, double argSlippage, double argMagicNumber, string argComment = "Buy Order")
    {
      while(IsTradeContexBusy()) Sleep(10);

      //買い注文の発注
      int Ticket = OrderSend(argSymbol, OP_BUY,argLotSize,MarketInfo(argSymbol,MODE_ASK),argSlippage,0,0,argComment,argMagicNumber,0,Green);

      //エラー処理
      if(Ticket == -1)
        {
          int ErrorCode = GetLastError();
          string ErrDesc = ErrorDescription(ErrorCode);

          string ErrAlert = StringConcatenate("Open Buy Order - Error",ErrorCode,":",ErrDesc);
          Alert(ErrAlert);

          string ErrLog = StringConcatenate("Bid: ",MarketInfo(argSymbol,MODE_BID),"Ask: ",MarketInfo(argSymbol,MODE_ASK),"Lots: ",argLotSize);
          Print(ErrLog)
        }
      return(Ticket);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot35 = () => {
  const test = `
  if(TakeProfit > 0) double BuyTakeProfit = OpenPrice + (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot36 = () => {
  const test = `
  if(TakeProfit > 0) double SellTakeProfit = OpenPrice - (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot37 = () => {
  const test = `
  for(int Counter = 1; Counter <= 3; Counter++)
    {
      //ループ本体
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot38 = () => {
  const test = `
  while(Something == true)
    {
      //ループ本体
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot39 = () => {
  const test = `
  int Counter = 1;
  while(Counter <= 3)
    {
      Counter++;
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot40 = () => {
  const test = `
  for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
    {
      OrderSelect(Counter,SELECT_BY_POS);
      //条件の評価
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot41 = () => {
  const test = `
  int OpenBuyOrder(string argSymbol, double argLotSize, double argSlippage, double argMagicNumber, string argComment = "Buy Order")
    {
      while(IsTradeContexBusy()) Sleep(10);

      //買い注文の発注
      int Ticket = OrderSend(argSymbol, OP_BUY,argLotSize,MarketInfo(argSymbol,MODE_ASK),argSlippage,0,0,argComment,argMagicNumber,0,Green);

      //エラー処理
      if(Ticket == -1)
        {
          int ErrorCode = GetLastError();
          string ErrDesc = ErrorDescription(ErrorCode);

          string ErrAlert = StringConcatenate("Open Buy Order - Error",ErrorCode,":",ErrDesc);
          Alert(ErrAlert);

          string ErrLog = StringConcatenate("Bid: ",MarketInfo(argSymbol,MODE_BID),"Ask: ",MarketInfo(argSymbol,MODE_ASK),"Lots: ",argLotSize);
          Print(ErrLog)
        }
      return(Ticket);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot42 = () => {
  const test = `
  int BuyMarketCount(string argSymbol, int argMagicNumber)
    {
      int OrderCount;
      for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
        {
          OrderSelect(Counter,SELECT_BY_POS);
          if(OrderMagicNumber() == argMagicNumber && OrderSymbol() == argSymbol && OrderType() == OP_BUY)
          {
            OrderCount++;
          }
        }
      return(OrderCount);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot43 = () => {
  const test = `
  int BuyMarketCount(string argSymbol, int argMagicNumber)
    {
      int OrderCount;
      for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
        {
          OrderSelect(Counter,SELECT_BY_POS);
          if(OrderMagicNumber() == argMagicNumber && OrderSymbol() == argSymbol && OrderType() == OP_BUY)
          {
            OrderCount++;
          }
        }
      return(OrderCount);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot44 = () => {
  const test = `
  extern double TrailingStop = 50;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot45 = () => {
  const test = `
  extern double TrailingStop = 50;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot46 = () => {
  const test = `
  if(条件)
    {
      エントリーする;
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot47 = () => {
  const test = `
  if(条件)
  {
    エグジットする;
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot48 = () => {
  const test = `
  if(1本前のローソク足が上昇線)
  {
    エグジットする;
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot49 = () => {
  const test = `
  if(RSIが70以上)
  {
    エグジットする;
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot50 = () => {
  const test = `
  if(Open[1]<Close[1])
  {
    OrderSend(Symbol(),OP_SELL,1,Bid,10,0,0,"必勝",4649,0,Blue);
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};