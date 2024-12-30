import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Marketing, Real } from '../../../components/layout/sidebusiness/sidebusiness';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "marketing" ? (
          <Marketing>
            <div className="">
              <p>「リードマネジメント(見込み客マネジメント)」つまり「自社ウェブサイトなどのオウンドメディアを核としたコンテンツ発信により、見込み客と関係性を作り、深め、顧客へと転換する仕組み」</p>
              <p>MAはリードマネジメントにおける業務効率を飛躍的に高めるとともに従来は机上の空論にとどまりがちであった「一人ひとりに寄り添う、きめ細やかコミュニケーション」を実現可能とするソリューション</p>
              <p>今のマーケティングが抱えている大きな課題の1つはマーケティング部門が十分な予算を獲得できないという現実。</p>
              <p>マーケティング施策を立案、実行する上では従来以上にその成果がいかに経営、事業に貢献できるかという明確な説明責任が求められる。そのために成果を評価するためのKPI(重要業績評価指標)およびKGI(重要目標達成指標)を設計し
                見込み客が受注や成約まで絞り込まれる過程を示すマーケティングファネルの設計を全体戦略として立案、共有する必然性が高まっている。
              </p>
              <p>もう1つは苦労して実施したマーケティングの施策の結果、営業担当に見込み客、すなわちリードを渡しても中には検討度が低い見込み客も多く含まれていて、それがすぐに成約などの成果に結びつきにくい現実である。</p>
              <p>電通の「日本の広告費」によれば2014年はテレビメディア広告費が1兆9564億円とずば抜けているものの、2位には1兆519億円と初めて1兆円を超えたインターネット広告費がつけている。</p>
              <p>新聞は6057億円、雑誌は2500億円、ラジオは1272億円</p>
              <p>デジタルデバイスの利用者が増えるとともに、インターネットを代表とするデジタルチャネルの広告も増加している。こうなると、従来型の広告や自社のWebサイトを用意しているというだけではデジタル時代の購買者に情報が届きにくくなってくる。</p>
              <p>デジタル化以前であれば、商品の購入意向を持った見込み客は情報を集めるために店頭に来店したり、営業担当者に連絡したり、カタログの請求をしたりといった行動を最初に取る必要があった。</p>
              <p>しかし、インターネットが一般化して20年、スマートフォンで各種の情報にアクセスできることが当たり前になった今ではそれが変化してしまった。</p>
              <p>商品の購入意向を持った見込み客はまず商品が掲載されている企業のWebサイトを訪れたり、比較サイトを見たりする。</p>
              <p>リアルのチャネルでは店頭に来店した客やカタログを請求した人、展示会で商品に興味を持った来場者に対してその後の一人ひとりの行動をとらえて営業担当者を貼り付けることは現実問題として難しい。</p>
              <p>しかし、デジタルチャネルを前提にすればどのようなデジタル広告からサイトを訪問したか、自社の商品紹介サイトの中でどのWebページに興味を持ったか、どんな種類のメールは開封し、その中のリンクをクリックしたか、
                飛んだ先のページの何の情報に興味を持ったのかといったことが把握できる。そして、一人ひとりの行動などの違いに対して、適切なコンテンツを提供することが出来る
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">チャネル</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="http://fxchoja.com/2021/05/23/%e3%83%81%e3%83%a3%e3%83%8d%e3%83%ab/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
          </Marketing>
        ) : id == "sns_marketing" ? (
          <Marketing>
            <div className="">
              <p>いいお客さんにだけ商品を販売し、中長期的に利益を最大化させる</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>SNS動画マーケティング</div>
              <p>現代においては動画こそが信頼を貯めるために最も適したツール</p>
              <p>ほとんどの人が商品の機能を見るのではなく信頼できる会社というイメージで商品を選んでいる</p>
              <p>販売の前にいかに価値提供をして信頼を積み上げ、ファンをつくるかが現代のSNSマーケティングでは非常に大事</p>
              <p>文字よりも動画、短い動画よりも長い動画のほうが信頼を貯めることができる</p>

              <p>YoutubeやTwitterなどのソーシャルメディアは動画やテキストなどの有益なコンテンツをアップしてファンを増やし集客するところ。</p>
              <p>セールスファネルはマーケティングで集めたお客様にセールスするしくみ</p>
              <p>お客様を集める「マーケティング」と、商品を販売する「セールス」を分けて考えて、それぞれを最適化していく必要がある</p>

              <p>大多数のお客様は一つの会社や個人に対して高額商品をリピート購入しない。</p>
              <p>お客様に成果を出してもらうと自然とリピート率が上がる</p>
              <p>最初に成果が出やすい高単価商品を販売したほうが一番「信頼残高」が高い状態で販売でき、受講する方々の成果も出やすいので結果的にのちの新規獲得コストが安くなります。</p>
              <p>・SNSや広告で無料オファーを使ってファンを自分のページに集める</p>
              <p>・ファンの人に一番成果が出やすい個別指導や講座の高額商品を販売する</p>
              <p>・2で購入しなかった人に低価格な本やオンライン講座を販売する</p>
              <p>・3の購入者に対してオンライン講座をアップセルする</p>
              <p>・最初にオファーした高額商品は未購入だが、その後、ダウンセル商品を買ってファンになった人に個別指導や講座の高額商品を再度販売する</p>

              <p>Youtubeを使ってそれを集客媒体として自社商品を販売する</p>
              <h4>価値あるコンテンツを量産する</h4>
              <p>動画をアップした時に一番重要なのは「どれくらいの視聴者に見てもらえるか」。動画のインプレッション数を増やすこと</p>
              <p>視聴者をなるべく長くプラットフォームに留まらせる配信者が優遇される</p>
              <p>長くプラットフォームにとどまっている状態が一番わかる基準は視聴維持率</p>
              <p>視聴維持率というのは視聴者が動画を何分見たのかを表すパーセンテージのこと。</p>
              <h4>視聴維持率を上げるための方法</h4>
              <h5>不要な部分を除く</h5>
              <h5>画面上に動きを付ける</h5>
              <p>テロップをつけると画面に動きが出るので視聴者は引き付けられます</p>
              <h5>動画の台本構成に気を付ける</h5>

              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">オープニング<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">冒頭のあいさつ.</p>
                </li>
                <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">興味付け</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">チャンネル登録誘導</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">ノウハウ</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">LINE登録</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">顧客リストを集める</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">エンディング</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>
              <h5>各プラットフォームに横展開</h5>
              <p>一つの動画を様々な形で横展開することによってYoutubeだけで動画をアップしていた時よりも別のプラットフォームにいるユーザーにリーチできる</p>
              <p>Youtubeの動画を一本作れば、書き起こしてブログに、そのブログを読んでVoicyなどの音声プラットフォームに、テキストならTwitterに、一部を切り取った動画ならTiktokやInstagramのリールにほとんど手間暇をかけずに、しかもクオリティを担保しつつ量産できる</p>
            </div>
          </Marketing>
        ) : id == "twitter" ? (
          <Marketing>
            <div className="">
              <p>Twitterの主な特徴は「拡散性が高い」「ユーザーの学習意欲が高い」「運用コストを低く抑えられる」</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
              <p>伸びるツイートを何度でも使いまわすことができる。</p>
              <p>Twitterがマーケティングに極めて適したプラットフォームである理由の一つに新規ユーザーにリーチしやすい</p>
              <p>一人のフォロワーが「いいね」や「リツイート」した場合、に多様な属性を持つそのフォロワーのフォロワーなどにずっとリーチしていく、拡散していく可能性がある</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Lステップとメルマガの両方を経由させることのメリット</div>
              <p>Lステップからさらにメルマガを経由させることによって、見込み客のリストは65%くらいに減ってしまいます。</p>
             <ul>
              <li>良いお客様のみに絞れる</li>
              <span></span>
             </ul>
             <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>マーケットアウト・マーケットスイッチ</div>
              
              <p></p>
              <p>動画をアップした時に一番重要なのは「どれくらいの視聴者に見てもらえるか」。動画のインプレッション数を増やすこと</p>
              <p>視聴者をなるべく長くプラットフォームに留まらせる配信者が優遇される</p>
              <p>視聴維持率というのは視聴者が動画を何分見たのかを表すパーセンテージのこと。</p>
              <h4>視聴維持率を上げるための方法</h4>
              <h5>不要な部分を除く</h5>
              <h5>画面上に動きを付ける</h5>
              <p>テロップをつけると画面に動きが出るので視聴者は引き付けられます</p>
              <h5>動画の台本構成に気を付ける</h5>

              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">オープニング<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">冒頭のあいさつ.</p>
                </li>
                <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">興味付け</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">チャンネル登録誘導</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">ノウハウ</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">LINE登録</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">顧客リストを集める</p>
                </li>
                <li class="ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">エンディング</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>
              <h5>各プラットフォームに横展開</h5>
              <p>一つの動画を様々な形で横展開することによってYoutubeだけで動画をアップしていた時よりも別のプラットフォームにいるユーザーにリーチできる</p>
              <p>Youtubeの動画を一本作れば、書き起こしてブログに、そのブログを読んでVoicyなどの音声プラットフォームに、テキストならTwitterに、一部を切り取った動画ならTiktokやInstagramのリールにほとんど手間暇をかけずに、しかもクオリティを担保しつつ量産できる</p>
            </div>
          </Marketing>
        ) : id == "evolution" ? (
          <Marketing>
            <div className="">
              <p>Twitterの主な特徴は「拡散性が高い」「ユーザーの学習意欲が高い」「運用コストを低く抑えられる」</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>チョイス・ブラインドネス</div>
              <p></p>
              <p>人間の選択は状況によってころころ変わる</p>
              <p>自らの選択の理由を明確に理解できる人は少ない</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>本能</div>
             
             <ul>
              <li>生殖:自分のDNAを後世に受け継がせたい欲望</li>
              <li>生存:個体としての自分を長生きさせたい欲望</li>
             </ul>
             <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>人が持つ8つの基礎本能</div>
              
              <p>安らぐ:心身の危険から離れて不安や恐怖から逃れたい本能</p>
              <p>進める:明確なゴールを設定し、それをクリアしたい本能</p>
              <p>決する:自分の行動や目標を自分で決めて実行したい本能</p>
              <p>有する:生存に役立つ物や情報を蓄積したい本能</p>
              <p>属する:特定のグループやコミュニティに入りたい本能</p>
              <p>高める:特定の集団の中でより上の地位につきたい本能</p>
              <p>伝える:周囲の人間に自分の特性をアピールしたい本能</p>
              <p>物語る:自分の人生に大きな意味を感じたい本能</p>
              <h4>安らぐ</h4>
              <p>自分に危害を及ぼすものを避けたいと思う欲求のことで、このシステムが活性化した人は不安が高まり、警戒心が強くなる</p>
              <p>安らぐ本能は身の回りの危険に応じて活性化し、私たちの消費行動に影響を及ぼします。</p>
              <h4>進める</h4>
              <p>明確なゴールに近づくことで喜びを覚える本能で生存に必要なリソースを</p>
              <p>作業が進んだという感覚さえ得られれば、私たちのモチベーションは大きく上がる</p>
              <h4>決する</h4>
              <p>仕事とプライベートを自分でコントロールしたい」や自分の思いつきを形にしてみたい」という欲望を引き起こします。</p>
              <p>自分の作業を自分で決められる職場ほど満足度が高く、離職する可能性も低かった。</p>
              <p>Googleは独自のプロジェクトに取り組む時間を従業員に与えたり、本業とは別のプロダクトを奨励したり、エンジニアのモチベーションを高めている</p>
              <h4>有する</h4>
              <p>良いものを手元に置いておきたい」や「手に入れたモノを失いたくない」といった気持ちを掻き立てる本能</p>
              <h4>属する</h4>
              <p>自分を受け入れてくれる味方や友人を作り、身の安全を確保したい気持ちをブーストさせる本能</p>
              <h4>高める</h4>
              <p>他人から尊敬されたいや集団の中で上の地位につきたいという気持ちを働かせ権力欲や支配欲を生み出します</p>
              <p>地位のある人ほど健康なのはステータスを得た者は他人からのサポートを受けやすく、質が高い医療や健康的な食事へのアクセスも豊富で自尊心が高いから</p>
              <h4>伝える</h4>
              <p>仲間に自分の良いところを見せたいや恋愛の見込みがある相手にアピールしたいという欲望を引き起こします。</p>
              <p>生存と生殖の欲望を満たすためには自分がいかに集団の反映に役立つ人間なのか、そして自分がいかに恋人のパートナーとしてふさわしい人間なのかを周囲に見せつけねばなりません。</p>
            <p>交際相手に効率よくアピールできるマッチングアプリ。無限の自己アピールを許してくれるSNS。見た目のコンプレックスを刺激してくるエステや化粧品は潜在的な仲間や交際相手に自分の魅力を伝えるためのサービス</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>本能を見極める</div>
            <p>あなたの商品が刺さる本能のパターンを明確にするのが進化論マーケティングの基本</p>
            <p>続いてもっとっ去る本能の種類を増やせないかを考える</p>
            <h4>共感力こそが商売における最強の武器</h4>
            <p>商品の成功は決して偶然の産物ではなく、共感力を使うことでヒットの可能性は確実に高まる</p>
            <h5>没入アプローチ</h5>
            <p>あなたの商品を使うユーザーがどのような人たちなのかを考えます。</p>
            <h5>共感マップ</h5>
            <p>架空の人物を創造するトレーニングを行った参加者はみな共感力が高まり、他者の感情や思考を読むのが上手くなった。</p>
            <p>どのSNSも「伝える」「高める」「属する」も訴えかけやすい傾向があるがシステムの違いによって刺さりやすい本能には濃淡が出ます。</p>
            <p>フェイスブック:実生活の人間関係を再現する目的で運営されているため、特定のコミュニティの中で自慢をしたい欲望(高める本能)が強くなりやすい</p>
            <p>twitter:実生活の関係よりも趣味が近いユーザーでつながりやすいシステムであり、気が合う人を探したい欲望(属する本能
              )が強くなりやすい。</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
            </div>
          </Marketing>
        ) : id == "1" ? (
          <Marketing>
            <div className="">
              <p>ネットが本格的に登場する前、事業を成長させるための決定打は「テレビCMを出せるかどうか」だった。</p>
              <p>CMを出せば会社の認知度が高まる。その結果、顧客は店頭でその会社の商品から買い物かごに入れるし、その会社の営業マンが訪問してくれば信頼してドアを開いたからだ</p>
              <p>うまくいくかどうかは市場が決定する。それにもかかわらず多くの人が商品・サービスありきで事業を考える。これが大変な苦労をおびき寄せる。</p>
              <p>お客を探す。そしてその後にそのお客が欲しがる商品を提供する。</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
              <p>人間は「新たなメリットを得る」ために行動するよりも「現在あるデメリットを回避する」ために行動する動機の方が強い</p>
              <p>たとえば「この学習法を知れば、成績は倍になる」という話よりは「もっと成績が良くて当たり前なのに、この学習法を知らないために本来の半分の成績しか得られない」という話の方がより感情を揺り動かす</p>
            
              <p>顧客満足の基本は自分がお客だったら、何をされればうれしいか。これをリストアップする。</p>
              <li>お客はどうしてここに集まっているのか？何を探しているのか？</li>
              <li>お客が嫌っていることは何か？</li>
              <li>どうして嫌っているのか？</li>
              <li>お客は何に悩んでいるのか？</li>
              <li>どうして悩んでいるのか？</li>
              <li>お客が恐れていることは何か？</li>
              <li>どうして恐れているのか？</li>
              <p>お客の頭の中を考えることは極めて重要</p>
              
              <p>「今買わないと損する」という緊急性をどう真実味を持って伝えるか。それができると本来買う必要がなかったお客まで買うようになる。</p>
              <p>安らぐ本能は身の回りの危険に応じて活性化し、私たちの消費行動に影響を及ぼします。</p>
              <h4>進める</h4>
              <p>明確なゴールに近づくことで喜びを覚える本能で生存に必要なリソースを</p>
              <p>作業が進んだという感覚さえ得られれば、私たちのモチベーションは大きく上がる</p>
              <h4>決する</h4>
              <p>仕事とプライベートを自分でコントロールしたい」や自分の思いつきを形にしてみたい」という欲望を引き起こします。</p>
              <p>自分の作業を自分で決められる職場ほど満足度が高く、離職する可能性も低かった。</p>
              <p>Googleは独自のプロジェクトに取り組む時間を従業員に与えたり、本業とは別のプロダクトを奨励したり、エンジニアのモチベーションを高めている</p>
              <h4>有する</h4>
              <p>良いものを手元に置いておきたい」や「手に入れたモノを失いたくない」といった気持ちを掻き立てる本能</p>
              <h4>属する</h4>
              <p>自分を受け入れてくれる味方や友人を作り、身の安全を確保したい気持ちをブーストさせる本能</p>
              <h4>高める</h4>
              <p>他人から尊敬されたいや集団の中で上の地位につきたいという気持ちを働かせ権力欲や支配欲を生み出します</p>
              <p>地位のある人ほど健康なのはステータスを得た者は他人からのサポートを受けやすく、質が高い医療や健康的な食事へのアクセスも豊富で自尊心が高いから</p>
              <h4>伝える</h4>
              <p>仲間に自分の良いところを見せたいや恋愛の見込みがある相手にアピールしたいという欲望を引き起こします。</p>
              <p>生存と生殖の欲望を満たすためには自分がいかに集団の反映に役立つ人間なのか、そして自分がいかに恋人のパートナーとしてふさわしい人間なのかを周囲に見せつけねばなりません。</p>
            <p>交際相手に効率よくアピールできるマッチングアプリ。無限の自己アピールを許してくれるSNS。見た目のコンプレックスを刺激してくるエステや化粧品は潜在的な仲間や交際相手に自分の魅力を伝えるためのサービス</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>本能を見極める</div>
            <p>あなたの商品が刺さる本能のパターンを明確にするのが進化論マーケティングの基本</p>
            <p>続いてもっとっ去る本能の種類を増やせないかを考える</p>
            <h4>共感力こそが商売における最強の武器</h4>
            <p>商品の成功は決して偶然の産物ではなく、共感力を使うことでヒットの可能性は確実に高まる</p>
            <h5>没入アプローチ</h5>
            <p>あなたの商品を使うユーザーがどのような人たちなのかを考えます。</p>
            <h5>共感マップ</h5>
            <p>架空の人物を創造するトレーニングを行った参加者はみな共感力が高まり、他者の感情や思考を読むのが上手くなった。</p>
            <p>どのSNSも「伝える」「高める」「属する」も訴えかけやすい傾向があるがシステムの違いによって刺さりやすい本能には濃淡が出ます。</p>
            <p>フェイスブック:実生活の人間関係を再現する目的で運営されているため、特定のコミュニティの中で自慢をしたい欲望(高める本能)が強くなりやすい</p>
            <p>twitter:実生活の関係よりも趣味が近いユーザーでつながりやすいシステムであり、気が合う人を探したい欲望(属する本能
              )が強くなりやすい。</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
            </div>
          </Marketing>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
