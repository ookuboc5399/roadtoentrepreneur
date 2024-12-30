import { useRouter } from 'next/router'
import React from 'react';
import { Blog } from '../../../components/layout/sidebusiness/sidebusiness';
import { Blog_c } from '../../../components/Blog_comp';
import Image from 'next/image';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "blog_detail" ? (
          <Blog>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>読者のニーズを知る</div>
            <div>
              <p>検索ボリュームとはあるキーワードが1ヵ月に平均何回検索されるのかをいいます。</p>
              <p>検索ボリュームが大きく検索順位が1位に近づくほどその記事が読まれた回数(ページビュー数)は増えていくことになります。</p>
            </div>

            <div class="flex flex-nowrap">
              <div>
                <h3 className='text-center'>関連キーワード検索</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ラッコキーワード</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>


              <div>
                <h3 className='text-center'>検索ボリュームを調べる</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">キーワードプランナー</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">「検索のボリュームと予測のデータを確認する」をクリックした後ラッコキーワードでコピーしたキーワードを貼り付けて開始します。</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-center'>その他キーワード調査ツール</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">keyword Tool</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">「検索のボリュームと予測のデータを確認する」をクリックした後ラッコキーワードでコピーしたキーワードを貼り付けて開始します。</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <p>モバイルユーザーからのレイアウトを意識して書くべき理由がWebサイトの閲覧デバイスに占めるモバイルの割合の多さです。</p>
              <p>Googleアナリティクスの「ユーザー」→「モバイル」→「概要」で閲覧デバイスの比率を確認することができます。</p>
              <p className='border-b-4 border-blue-400'>PCで書いた文章をスマホで確認する習慣をつけ、モバイルユーザーからの見やすさを意識することが大切です</p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <p>Google。</p>
              <p>Googleアナリティクスの「ユーザー」→「モバイル」→「概要」で閲覧デバイスの比率を確認することができます。</p>
              <p className='border-b-4 border-blue-400'>PCで書いた文章をスマホで確認する習慣をつけ、モバイルユーザーからの見やすさを意識することが大切です</p>
            </div>
          </Blog>
        ) : id == "blog_seo" ? (
          <Blog>
            <p>2020~2021年にかけて行われたGoogleアルゴリズムアップデートは運営者の権威性や信頼性がより重視されるようになり、検索結果には企業が運営しているサイトがとても多く出るようになりました。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>SEO対策</div>
            <div>
              <p>Googleの検索エンジンはロボット型検索エンジンと呼ばれるものですが、ここにはあらゆるWebサイトを巡回するBotが存在します。</p>
              <p>クローラーがWebサイトを巡回してインデックスし、検索時に様々な評価をもとにランキングするというのが検索結果一覧の順位付けの大まかな仕組みです。</p>
              <p>キャッシュの更新頻度が低いページをリライトしたり、更新頻度の高いページに統合することで必要なページにクローラーのリソースが割けるようになります。</p>
              <p>Googleアナリティクスの「ユーザー」→「モバイル」→「概要」で閲覧デバイスの比率を確認することができます。</p>
              <p>ブログやアフィリエイトを始めとするWebサイト上の記事はほとんどの読者はざっと流し読み・飛ばし読みをし、自分の欲しい情報だけを探します。</p>
              <p>最初から最後までじっくりと読むことはしません。</p>
              <p>キャッシュの更新頻度が低いページをリライトしたり、更新頻度の高いページに統合することで必要なページにクローラーのリソースが割けるようになります。</p>
              <h3>本音と建て前</h3>
              <p>理想と現実のギャップが大きくなればなるほどその人を動かす強いエネルギーに変わります。この本音と建て前を相手の心を動かすトリガーとして使います</p>
              <p>このギャップに相手の心を動かすエネルギーが詰まっていてここにカチッとはまるような内容を文章で示して行動させる</p>
              <h3>悩み</h3>
              <p>そこに悩みを解消してくれる「何か」があると期待をしてしまうから飛びついてしまう。悩みは人の心を動かすフックになるのです。</p>
              <p>悩みの9割は「HARM」に分類できる。</p>
              <p>HARMのHはHealth、健康のこと。ダイエット、外見の変化、病気、加齢など、心身にまつわる健康はすべてここに含まれます。</p>
              <p>「A」は「Ambition」、野心や大望という意味ですがここでは将来の夢やかなえたい希望と解釈します。理想の仕事、出世したいという願望なども含まれる</p>
              <p>「R」は「Relation」、人間関係。会社での人間関係、友人、知人、恋人、結婚、離婚も含めます。</p>
              <p>「M」は「Money」、ずばりお金にまつわる悩みです。収入の増減、借金、年金、住宅の購入など大きな買い物も含まれます</p>
              <p>10代の悩みはダイエット、身長、肌荒れなど主に外見にまつわるものが中心です。</p>
              <p>これが20代になると仕事などのストレスによる不調や肩こり、腰痛といったトラブルも増えていきます</p>
              <p>30代、女性ならば出産について真剣に考える年齢に差し掛かっていきます。男性も体力の衰えや薄毛、肥満などの問題を抱えフィットネスや健康食品などへの関心が高まります</p>
              <p>これが40代になれば内科系の病気への心配が増え、がん保険などの商品にも目が行くようになっていきます</p>
              <p>そして50代、60代はまさに健康の悩みが抱えている悩みの中心になってくる世代。</p>
              <p>70代、80代へと進むと「終活」への関心度も上がり死というものを間近にとらえるようになります。</p>
            </div>

            <div class="flex flex-nowrap">
              <div>
                <h3 className='text-center'>関連キーワード検索</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ラッコキーワード</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>


              <div>
                <h3 className='text-center'>検索ボリュームを調べる</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">キーワードプランナー</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">「検索のボリュームと予測のデータを確認する」をクリックした後ラッコキーワードでコピーしたキーワードを貼り付けて開始します。</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-center'>その他キーワード調査ツール</h3>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">keyword Tool</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">「検索のボリュームと予測のデータを確認する」をクリックした後ラッコキーワードでコピーしたキーワードを貼り付けて開始します。</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <p>現在のGoogle検索結果はクエリに応じて上位表示するコンテンツの種類が多岐にわたり、読者が最も見やすいであろう形式で表示してくれます。</p>
              <p>これを提供する側の立場で考えるとテキスト情報だけにこだわるのではなく、読者が求める最前の形で提供することを心掛けないと「検索結果画面の1ページ目に入らない」のです。</p>
              <div class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium text-xl">SEOのメリット</span>
                  <li>検索順位さえキープできれば安定した集客が見込めて商品が売れ続ける</li>
                  <li>広告費をかけずに集客の導線ができる</li>
                  <li>価値を示すことができる</li>
                </div>
              </div>
              <h4>Google検索順位とクリック率に関係</h4>

              <p>1位のクリック率は30%近くありますが4位以下になると10%未満にまで落ち込んでいます。このことからもキーワードの種類や記事タイトルによる差異はあるものの基本的には1~3位に入らないとある程度の検索流入が得られないことがわかります。</p>
              <div class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                  <span class="font-medium text-xl">Googleコアアルゴリズムアップデート</span>
                  <p>SEOと向き合ううえで欠かせないのが検索エンジンの定期的なアルゴリズム変更です。数か月~半年ごとに1回実施され評価要素の重みづけを見直し、各記事の順位付けの方法を変えるというもの</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>コンテンツSEO</div>
            <div>
              <p>SEOのベースはコンテンツ、すなわち記事の内容です。</p>
              <p>Google公式の「検索エンジン最適化スターターガイド」でも謳われているとおり、SEOで最も大事なのは「ユーザーに有益なコンテンツであること」。</p>



              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ターゲットとなる検索キーワードを決める</h3>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                  <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">そのクエリで1ページ目に表示する他サイトの記事見出しを列挙する</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">検索意図を深く掘り下げ、関連キーワードと再検索キーワードで捕捉する</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">検索意図をふまえた回答を用意する</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">検索意図とその回答、他サイトの記事見出しも参考にして見出しを作る</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>
              <p className='border-b-4 border-blue-400'>PCで書いた文章をスマホで確認する習慣をつけ、モバイルユーザーからの見やすさを意識することが大切です</p>
            </div>
            <div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>内部SEO</div>
              <p>Webサイトの記事の体裁を整え、検索エンジンから評価されやすい形にするうえで欠かせない施策が「内部SEO」です</p>
              <p>記事には検索エンジンのクローラーが巡回し、その評価結果をもとに検索順位が決定します。検索エンジンがクローリングしやすいサイト構造を作るうえで内部SEOは欠かせません。</p>
              <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">内部SEO</h5>
                </div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            タイトル
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            見出し
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            メタディスクリプション
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            画像のalt属性
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            内部リンク
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            発リンク
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            サイトマップ
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            構造化データ
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>外部SEO</div>
            <p>他のWebサイトからリンクを受けることで自サイトならびに記事の評価を高める手法が「外部SEO」です</p>
            <p>近年のSEOでは外部SEOの比重が高まっており、「自サイトがどんなWebサイトなのか」を検索エンジンに示すうえで関連するWebサイトから被リンクを獲得することがとても重要になってきています。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>メタディスクリプション</div>
            <p>メタディスクリプションとは「記事の説明文を100文字程度で要約したもの」です。検索結果上ではこのように記事タイトルの下に表示されます。</p>
            <p>メタディスクリプションがあると読者が記事を読む前にその内容を把握でき、目的とする情報が掲載されているとわかれば記事のクリック率を高めることにつながります。</p>
            <p>ただし、メタディスクリプションはGoogle検索セントラルブログでも記載されているとおり、それ自体が検索順位に直接影響を及ぼす要素ではありません。</p>
            <p>検索エンジンはタイトル・見出し・メタディスクリプションを含む主要なタグを用い、その記事をどのキーワードで評価するか判断しています。</p>
            <p>なお、メタディスクリプションが未設定である場合、記事の冒頭100文字程度がメタディスクリプションの代わりに検索結果に表示されます。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>E-A-T</div>
            <p>E-A-Tとは「Expertise(専門性)、Authoritativeness(権威性)、Trustworthiness(信頼性)」の頭文字を取った単語でGoogleが情報の信頼性を測るための概念と言われています。</p>
            <p>Googleの「検索品質評価ガイドライン」と呼ばれる公式文書に繰り返し出てくる単語で2018年のコアアルゴリズムアップデート以降多くのSEO担当者がこれに注目しています。</p>
            <p>Googleのアルゴリズムは時代の流れとともに変化していますが、かつては被リンク一辺倒だった時代やコンテンツの情報量が重視される時代もありました。</p>
            <p>その変遷を経て現在重視されているのが「E-A-T」であり、情報の信頼性です発信する情報そのものの信頼性はもちろん、どこがそのサイトを運営していて誰がそのコンテンツの制作者なのかといった発信者側の専門性や権威性も含めて重視されるようになってきました。</p>
            <p>とくにYMYL(Your Money or Your Life)と呼ばれるお金や健康など人生に大きな影響を与えるジャンルではコンテンツの品質評価がより厳格になっています。</p>
            <p>たとえば「クレジットカード　おすすめ」の検索結果では保険代理店・大手の口コミサイト・大手出版社・クレジットカード会社のサイトが並び個人サイトが上位に来ることはまずありません。</p>
            <p>検索した際に信頼できない情報が上位に表出し、ユーザーの人生にネガティブなインパクトを与えてしまわないよう、アルゴリズムによって厳しく統制されているのです。</p>
            <h3>E-A-Tを高めるために</h3>
            <p>E-A-Tは「運営元レベル」「ドメインレベル」「ページレベル」の3つの精度で評価されるといわれています。そのサイトをどの企業(もしくは個人)が運営しているのか、ドメインの所有者は誰なのか、
              そのページの作成者(著者)は誰なのかをGoogleが判断し、評価するという流れです。      </p>
            <p>サイト運営者はまず誰が運営・所有・作成しているかの透明性を高めるところから始めます。具体的には「構造化データ」と呼ばれるコードで検索エンジンとのコミュニケーションのために情報を提供することです。</p>
            <h3>動画の構造化データの作成方法</h3>
            <p></p>
            <p>構造化データと合わせ、Webサイトが法人による運営であれば、ドメインの「Whois情報公開代行」をオフにすることをおすすめします。Whois情報公開代行はそのドメインを誰が所有しているかを示すもので
              検索エンジンがWebサイトの運営者情報を判断する材料の一つでもあります。
            </p>
            <p>E-A-Tを推し量る一つの指標になるのがナレッジパネルの表出です。ナレッジパネルが出現することはGoogleがその人物を特定分野における権威性があると認定している証でもあります。</p>
            <p>SNS活動や第三者サイトでの言及に加え、書籍を出版し「Amazon著者セントラル」に登録することがポイントであるといわれています。</p>
            <h3>動画の構造化データの作成方法</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <p></p>
          </Blog>
        ) : id == "blog_writing" ? (
          <Blog>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ブログタイトル</div>
            <div>
              <p>狙いたいキーワードが含まれている・なるべく短いタイトルである・オリジナリティがある</p>
              <h5>狙いたいキーワードが含まれている</h5>
              <p>どんなキーワードでリンクされているのかが検索順位に大きく影響を与える</p>
              <p>例えば引っ越しサイトであれば「引越し」や「見積もり」などの上位表示したいキーワードはなるべくタイトルに入れておくべき。</p>
              <p>ただし、キーワードを入れるとしても1つだけにしておくべき</p>
              <h5>なるべく短いタイトルである</h5>
              <p>短いブログタイトルはシンプルで覚えやすく、人にも伝えやすいです</p>
              <h5>オリジナリティがある</h5>
              <p>オリジナリティがあると読者に覚えてもらいやすい上、ブログ自体も差別化しやすくなります。</p>
            </div>
            <h3 className='text-center'>読みやすい文章の黄金比は「2:7:1」</h3>
            <div class="flex flex-nowrap">
              <div>
                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">漢字が多い例文</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">次郎は昨日、ブログに上げる写真を撮る為に近所の公園に行きました。公園の中では沢山の人達が野球をしたり、自転車に乗って遊んでいました。周辺には沢山の三茶花の花が咲いており、とても美しい写真を撮る事が出来ました。</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">理想的に近い比率の例文</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">次郎は昨日、ブログにあげる写真を撮るために近所の公園に行きました。公園のなかではたくさんの人たちが野球をしたり、サイクリングをして遊んでいました。あたりにはたくさんのサザンカの花が咲いており、とてもきれいな写真を撮ることができました</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>結論ファースト</div>
            <div>
              <p>ライティングを行う際に最も大切なのは「結論」です。読者が知りたい情報を提供すること読者が抱える悩みや問題を解決することがゴールであり、存在意義といえます。</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>手順</div>
              <Blog_c />
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <li>ブログを1ヵ月以上続ける人は全体の70%</li>
              <li>ブログを6ヵ月以上続ける人は全体の24%</li>
              <p>つまりブログを始めた人の4人のうち3人は半年以内にブログを更新しなくなるということです。逆に言えばブログで成功している人は「継続している人」</p>
              <p>ブログのアクセスのほとんど(通常70~90%)は検索からの流入です。</p>
              <p>だからブログを成功させるにはSEOがとても重要になっています。しかし、ブログを新しく開設して記事を増やしていき、それらが検索エンジンに認知＆評価されるようになるにはある程度の時間を要します</p>
            </div>
          </Blog>
        ) : id == "blog_revision" ? (
          <Blog>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>文章を読んでもらうための13の視点</div>
            <ol className="list-decimal">
              <li className='text-xl m-2'>結論が先に来ているか</li>
              <p>Webライティングの基本はとにかく「結論を先に書く」です。</p>
              <p>Webの文章では小説や論文のように読者に最初から最後までじっくりと読まれることは稀です。スキマ時間などにざっと流し読みされることが中心になるでしょう。</p>
              <p>したがって手っ取り早く読者に目的を達成してもらうため、まずは「結論」「答え」を先に書くことが重要なのです。</p>
              <li className='text-xl m-2'>論理的でわかりやすい見出し構成か</li>
              <p>わかりやすい論理的な見出し構成は記事の全体像がユーザーや検索エンジンに伝わりやすいだけでなく、運営者自身も文章が書きやすくなるといったメリットがあります。</p>
              <p>h1を複数のh2で支え、さらに各h2を複数のh3・h4で支えている木の枝葉のような構図になっているか。</p>

              <li className='text-xl m-2'>上位競合のトピックが網羅されているか</li>
              <p>読者が何を求めてそのキーワードで検索したかが最も顕著に表れるのは現時点で検索結果の上位にある競合サイトのページです。</p>
              <p>つまり検索意図を反映した記事を作るためには、上位競合のページに書かれている話題を、自身の書くページでも網羅する必要があるということです。</p>
              <p></p>
              <li className='text-xl m-2'>オリジナルのトピックが30%以上含まれているか</li>
              <p>検索意図を満たした文章にするためには検索上位にある競合ページのトピックを網羅する必要があります。しかし、完全に同じ情報を書いてしまっては単なるパクりですし、オリジナリティがなければ検索エンジンに評価されません。</p>
              <p>目安はオリジナルの情報が少なくとも30%以上含まれているようにしましょう。</p>
              <li className='text-xl m-2'>するすると読みやすい文章になっているか</li>
              <p>よどみなく、するすると読みやすい文章になっているかも重要な要素です。</p>
              <p>読みやすさをチェックするには実際に声に出して読んでみるのが一番</p>
              <li className='text-xl m-2'>語尾・副詞・表現が重複していないか</li>
              <p>「～ます。」「～ます。」「～ます。」など同じ語尾が連続している文章はなんとなく稚拙な印象になってしまいます。</p>
              <p>また「ゆっくりと僕はその赤いスポーツカーにゆっくりと近づいた」のように同じような副詞・表現が重複することもミス</p>
              <li className='text-xl m-2'>適度な装飾が行われているか</li>
              <p>文章の装飾は文章を読みやすくしたり、大切な箇所を強調するために役立ちます。</p>

              <li className='text-xl m-2'>強調する箇所を誤っていないか</li>
              <p>強調した部分だけを呼んでもその文章の陽転や内容が正しく伝わるようになっていれば合格です。</p>
              <li className='text-xl m-2'>適度な空白・ビジュアル要素があるか</li>
              <p>文章の中に適度なタイミングで小休止(空白やビジュアル要素)が入っていることも重要です。テキストだけがダラダラと長く続いてしまっていないか途中で見せ方を変えて、読者が集中力を保てるような工夫がなされているか、をチェックします。</p>
              <li className='text-xl m-2'>読みにくい漢字・専門用語はないか</li>
              <p>文章の中に読めない漢字や知らない専門用語が頻繁に含まれていると、読者にストレスがかかり最悪の場合は離脱されてしまいます。</p>
              <p>難しい漢字や外国語がないかどうかをチェックし、ある場合にはよみがな・ふりがなを付け加えましょう。</p>
              <li className='text-xl m-2'>魅力的なタイトルになっているか</li>
              <p>読者が最初に目にする箇所、それが文章のタイトルです。タイトルはその文章の顔であり、タイトル次第でその文章が読まれるかどうかが決まってしまいます。</p>
              <li className='text-xl m-2'>読者のニーズが解決されているか</li>
              <p>Webライティングにとって最も重要なのは、読者のニーズ(悩み・問題・欲求)が解決されること、解決できるような答えを提示すること。</p>
              <li className='text-xl m-2'>正確な情報かどうか</li>
              <p>商品名・サービス名などの商標、人名や地名などの固有名詞に誤りがないかを確認することはもちろん、そこに書かれている内容が真実なのかを念入りに確認し、必要があれば再調査して情報の正確性を担保するようにする</p>
            </ol>
            <div>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>文章を読んでもらうための13の視点</div>
              <ol className="list-decimal">
                <li className='text-xl m-2'>検索意図からのズレを修正する</li>
                <p></p>
                <p></p>
                <li className='text-xl m-2'>必要な内容を担保しながら余計な文節を削る</li>
                <p></p>
                <p></p>
                <li className='text-xl m-2'>同じ意味合いの文章はできるだけなくす</li>
                <p></p>
                <p></p>
                <li className='text-xl m-2'>必要のない接続詞を入れていないかどうか</li>
                <p></p>
                <p></p>
              </ol>


              <p>そして50代、60代はまさに健康の悩みが抱えている悩みの中心になってくる世代。</p>
              <p>70代、80代へと進むと「終活」への関心度も上がり死というものを間近にとらえるようになります。</p>
              <div class="">
                <Image
                  src="/images/sidebusiness/Relation.png"
                  alt="01:Pythonとは？"
                  width={760}
                  height={428}
                />
              </div>
            </div>
            <h3 className='text-center'>読みやすい文章の黄金比は「2:7:1」</h3>
            <div class="flex flex-nowrap">
              <div>
                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">漢字が多い例文</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">次郎は昨日、ブログに上げる写真を撮る為に近所の公園に行きました。公園の中では沢山の人達が野球をしたり、自転車に乗って遊んでいました。周辺には沢山の三茶花の花が咲いており、とても美しい写真を撮る事が出来ました。</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">理想的に近い比率の例文</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">次郎は昨日、ブログにあげる写真を撮るために近所の公園に行きました。公園のなかではたくさんの人たちが野球をしたり、サイクリングをして遊んでいました。あたりにはたくさんのサザンカの花が咲いており、とてもきれいな写真を撮ることができました</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>結論ファースト</div>
            <div>
              <p>ライティングを行う際に最も大切なのは「結論」です。読者が知りたい情報を提供すること読者が抱える悩みや問題を解決することがゴールであり、存在意義といえます。</p>
              <p></p>
              <p className='border-b-4 border-blue-400'></p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <li>ブログを1ヵ月以上続ける人は全体の70%</li>
              <li>ブログを6ヵ月以上続ける人は全体の24%</li>
              <p>つまりブログを始めた人の4人のうち3人は半年以内にブログを更新しなくなるということです。逆に言えばブログで成功している人は「継続している人」</p>
              <p>ブログのアクセスのほとんど(通常70~90%)は検索からの流入です。</p>
              <p>だからブログを成功させるにはSEOがとても重要になっています。しかし、ブログを新しく開設して記事を増やしていき、それらが検索エンジンに認知＆評価されるようになるにはある程度の時間を要します</p>
            </div>
          </Blog>
        ) : id == "blog_think" ? (
          <Blog>
            <p>一度良いサイクルに入ると記事を書くたびにアクセスが伸びるようになり、どんどんとブログは強化され、収益も比例して増えていきます。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>アフィリエイト</div>
            <div>
              <p>ブログに掲載した広告がクリックされたり、商品の購入やサービスの登録が行われたりすることで報酬を得ることができます。</p>
              <h4>クリック報酬型アフィリエイト</h4>
              <p>Googleアドセンスが最も有名。</p>
              <p>自分が運営しているブログにGoogleアドセンスの広告タグを貼り付けるだけで、記事内容と訪問ユーザーに合わせて自動で最適な広告を表示してくれますうからお金を稼げない。</p>
              <p>1クリック当たりの平均単価はジャンルによっても変動しますが、大体1クリック40円前後となっている。</p>
              <h4>物販型アフィリエイト</h4>
              <p>Amazonや楽天市場などの商品広告を掲載し、販売した金額の数%を報酬としてもらう形のアフィリエイト広告です。</p>
              <p>報酬率はかなり低く、「クリック報酬型」「成果報酬型」と比べても物販型アフィリエイトで稼ぐのは非常に難易度が高いです。</p>
              <h4>成果報酬型アフィリエイト</h4>
              <p>ASPと呼ばれる広告代理店が提示する広告から好きなものを選び、ブログに掲載します。  </p>
              <p>その広告を通して「商品の購入」や「サービスへの登録」等のアクションが起きるたびに報酬を稼ぐことができます。</p>
              <p>効率よく収益化するためには成果報酬型メインで稼ぎながら、Googleアドセンスと組み合わせていくのが「ブログで稼ぐための最適解」</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ブログとYoutube</div>
              <p>ブログの方が商品が購入されやすい。例えばキャンプグッズを検索する場合、Googleで検索した人は広告リンクを踏んでそのままAmazonなどで商品を購入してくれる可能性が高いです。</p>
              <p>一方、Youtubeで検索した人は動画の概要欄を開いてアフィリエイトリンクをクリックする人は少なく、購入するときはYoutubeを閉じ、自分でショッピングサイトを開く人がほとんどです。</p>
              <p>このようにCVR(成約率)においては、Youtubeよりもブログの方が圧倒的に高くなっています。</p>
              <p>また、ブログはいつでもリライトができる。元がどれだけ古いページであっても最新情報を追加してリライトをすることで記事を生まれ変わらせることができるため、コンテンツの資産性をキープしやすい。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>特化ブログ</div>
              <p>特化ブログの方が収益化はしやすいです。</p>
              <h5>成約率の高い記事に誘導しやすい</h5>
              <p>特化ブログであれば、成約率の高い記事にすべての記事から内部リンクを貼って誘導していくことができる。</p>
              <h5>広告主から特別単価をもらいやすい</h5>
              <p>企業はASPに対して30%前後の手数料を支払っているため、例えば月100万円以上の報酬であれば直接提携するだけで30万円以上の広告費を浮かせることができる。</p>
              <h5>専門性が高いためファンができやすい</h5>
              <p>Googleの検索上位を取るためにも「同ジャンルからの被リンクの獲得」は重要な要素の1つ。</p>
              <h5>少ないアクセスでも収益が出しやすい</h5>
              <p></p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ブログジャンル</div>
              <p>特化ブログにはメリットがいくつもありますが、ジャンルを間違えてしまうと稼げない。</p>
              <h5>SEOトレンドをつかむ</h5>
              <p>YMYL(Your Money or Your Life)ジャンルは厳しく評価される。</p>
              <p>EAT。</p>
              <p>個人ブログが上がらないようになっている</p>
              <p>特定分野の。熱量を込めた</p>
              <p>質の高い、関連度の高い被リンクを獲得するころが一番SEOに効果ある</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>読者ターゲット</div>
              <p>ターゲットを絞り込むことでより読者に響き、行動を起こさせる文章を書きやすくなる</p>
              <p>「30代男性」等のアバウトなターゲットではなく、年齢・性別・職業・家族構成など細かい属性まで考えていきます。</p>
              <h5>ターゲットの悩みをリストアップ</h5>
              <p>今抱えている問題や悩みは何か？</p>
              <p>どうすれば問題を解決できそうか？</p>
              <p>問題を解決した後の本当のゴールは？</p>
              <h5>提供できるベネフィットを考える</h5>
              <p>この商品を手に入れたらどんな未来が手に入るのか？この問題が解決したら、どんな未来が手に入るのか？</p>
              <p>質の高い、関連度の高い被リンクを獲得するころが一番SEOに効果ある</p>
              <p></p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>読者ファースト</div>
            <div>
              <p>読者の悩みを解決することが重要です。自分が書きたいことを書くのではなく、読者の悩みを解決する記事を書くことを忘れない</p>
              <p>ブログ記事がいくら役に立つ内容だったとしても、それを読者が読んで納得できなければ意味がありません。</p>
              <p>ブログでお金を稼げる理由を考える。</p>
              <p>ブログで価値提供をする。価値提供をした対価としてお金をもらえる。</p>
              <p>読者ファーストだからこそお金を稼げるのがブログなのに自分ファーストでやってしまうからお金を稼げない。</p>
              <p>自分のブログ、記事を客観的に考える。</p>
              <p>いきなりその記事を読んでも内容がしっかり理解できるような書き方をしないといけない。</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>戦略</div>
              <p>そもそもSEOで上位表示されるってどういうことなんだろう。</p>
              <p>記事を書いたら何がどうなってSEOで上位表示されるんだろう。</p>
              <p>どこからお金が出てきてどうしてブログでお金をもらえるんだろう。</p>
              <p>ブログでお金を稼ぐって一体どういうことなのか？本質を考える必要がある</p>
              <p>高品質な記事を書く。これがブログとかSEOの根幹になるもの</p>
              <p></p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>小さく始める</div>
              <p>小さなブログの定義は50記事以下のブログ。</p>
              <p></p>

              <p></p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>文章力を</div>
            <div>
              <p>ブログは文章で集客して商品を売る仕事。文章は絶対にうまい必要がある。</p>
              <p>文章力を鍛えようと思ったら必要なプロセスがある。</p>

              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">文章を書く</h3>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">文章を書いたら改善点、反省点を見つける。</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">検索意図をふまえた回答を用意する</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">検索意図とその回答、他サイトの記事見出しも参考にして見出しを作る</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>
              <p>第三者に意見をもらう</p>
              <p></p>
              <p></p>
            </div>
          </Blog>
        ) : id == "wordpress" ? (
          <Blog>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>独自ドメインを使うメリット</div>
            <div>

            </div>
          </Blog>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
