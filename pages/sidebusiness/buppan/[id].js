import { useRouter } from 'next/router'
import React from 'react';
import { Domestic_resale, Shopify, Ebay, Search, Amazon, Japan } from '../../../components/layout/sidebusiness/sidebusiness';
import Form_Serch from '../../../components/form.js/search_detail';
import Form_Serch_Yahoo from '../../../components/form.js/search_detail_yahoo';
import Form_Domestic from '../../../components/form.js/search_detail';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "ebay" ? (
          <Ebay>
            <div className="text-center">
              <div className="text-3xl m-4">
                https://1drv.ms/x/s!Ao3yF_e0f-GBgeRELES-bm34ZRB4XA?e=nFgNZx
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </Ebay>
        ) : id == "domestic_resale" ? (
          <Domestic_resale>
            <Form_Domestic />
          </Domestic_resale>
        ) : id == "search" ? (
          <Search>
            <div className='flex w-full min-w-full '>
              <div className='m-10'>
                <Form_Serch />
              </div>
              <div className='m-10'>
                <Form_Serch_Yahoo />
              </div>
            </div>
          </Search>
        ) : id == "shopify" ? (
          <Shopify>
            <p>Shopifyは本格的なネットショップを簡単に開設できSNSとの連携やオムニチャンネルにも対応するカナダで開発されたECプラットフォームです。</p>
            <p></p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      プラン名
                    </th>
                    <th scope="col" class="px-6 py-3">
                      月額費用
                    </th>
                    <th scope="col" class="px-6 py-3">
                      特徴
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      ライト
                    </th>
                    <td class="px-6 py-4">
                      9ドル
                    </td>
                    <td class="px-6 py-4">
                      ネットショップは利用できず管理画面だけを利用できる。外部のブログやSNSなどでShopifyのカート機能を利用可能
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      ベーシック
                    </th>
                    <td class="px-6 py-4">
                      29ドル
                    </td>
                    <td class="px-6 py-4">
                      レポート機能、外部サービスの計算済み配送料、国別ドメインなどを除く機能が利用可能。小規模な事業者や個人ストアにおすすめ
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      スタンダード
                    </th>
                    <td class="px-6 py-4">
                      79ドル
                    </td>
                    <td class="px-6 py-4">
                      外部サービスの計算済み配送料、国際価格機能を除く機能が利用可能。中規模な事業者や売上が増えてきた事業者におすすめ
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      プレミアム
                    </th>
                    <td class="px-6 py-4">
                      299ドル
                    </td>
                    <td class="px-6 py-4">
                      チェックアウト画面のカスタマイズ以外のすべての機能が利用可能。大規模なチームで運営する事業者におすすめ
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Shopify Plus
                    </th>
                    <td class="px-6 py-4">
                      2000~ドル
                    </td>
                    <td class="px-6 py-4">
                      Shopifyの最上位プラン。チェックアウト画面のカスタマイズや同一ブランドで10サイトまで運営できる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>多くの「D2C」ブランドがShopifyを利用しています。「D2C」とは「Direct to Consumer」の略で顧客と直接つながることです。</p>
            <p>Shopifyでは管理画面の販売チャネルに新たなチャネルを追加するだけでSNSなど様々な場所での販売が可能になります</p>
            <p>現在ネットショップへ訪問する消費者は約70~80%がスマートフォンからアクセスしています。Shopifyで利用できるデザインテーマはタブレットやスマートフォンなどにも自動的に対応するレスポンシブサイトとなっており、スマートフォンに対応するための設定や手間は必要ありません。</p>
            <p>さらに集客のための広告やメールマガジンはもちろん、ブログなどのコンテンツもShopifyで実装できます。</p>
            <p>米国では「ユニリーバ」や「バドワイザー」「ネスレ」「ゼネラル・エレクトリック」等の大企業がネットショップを開設しています。</p>
            <p>日本でも大手企業がShopifyをECプラットフォームとして採用する事例が増えてきています。家具やインテリア雑貨などを扱う「Franfranc」や越境ECサイト「とらや」「土屋鞄製造所」などもShopifyを採用しています</p>
            <p>Shopifyの大きな利点の一つは「越境ECを簡単に実現できる」ことです</p>
            <p>Shopifyにはネットショップのトラフィック等を確認できる「ストア分析機能」がある</p>
            <p></p>
            <p></p>
            <div className="text-center">
              <div className="text-3xl m-4">
                分析機能
              </div>
              <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ダッシュボード</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ダッシュボードでは商品、ネットショップへの訪問者、アクセスしたデバイスなどのデータを日付および期間を指定して確認でき、主に下記データを確認できる</p>
                    <li>ネットショップの売り上げを指定した期間と比較</li>
                    <li>ネットショップの訪問者がどのチャネルから訪問しているか／リピーターの数</li>
                    <li>購入率とカート内への商品追加から購入完了までの数</li>
                  </div>
                </div>


                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">レポート</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Shopifyのレポート機能では以下のようなデータをより細かく確認できる。プレミアムプラン以上ではカスタムレポートの利用も可能</p>
                    <p>財務レポート/製品分析/集客レポート/在庫レポート/行動レポート/マーケティングレポート/販売レポート/POS販売レポート/利益レポート/顧客レポート/カスタムレポート</p>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ライブビュー</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Shopifyのライブビューでは「リアルタイムでどこから何人の訪問者が着ているか」や「チェックアウト画面で現在どういったステータスに何人が進んでいるのか」を確認できる。世界地図上に表示されるためセール期間中などお客様が増える時期にも非常に便利</p>

                  </div>
                </div>
              </div>

            </div>
            <p></p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Shopify POSについて</div>
            <p>実店舗がある場合ネットショップと実店舗でお客様の情報や過去の購入履歴などを一元管理できると便利です。ネットショップと実店舗の両方で購入するお客様の年間平均購入金額はどちらか一方だけでの購入より約1.8倍高くなると言われています</p>
            <p>情報を一元管理できればOne to Oneの接客が可能になりお客様の購買体験も大きく変わってきます。</p>
            <p>Shopify POSを利用すればネットショップをオープンしたその日から実店舗と情報を一元管理できるようになるのです</p>
            <div className="text-center">
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
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">shopify~誰もが自分のお店を持つ時代</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://zakki.perpetualtravelerchoja.com/2021/02/13/shopify/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
          </Shopify>
        ) : id == "japan_import" ? (
          <Japan>

          </Japan>
        ) : id == "amazon" ? (
          <Amazon>

          </Amazon>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
