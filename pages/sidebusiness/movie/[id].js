import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Movie } from '../../../components/layout/sidebusiness/sidebusiness';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "movie" ? (
          <Movie>
            <div classNameName='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <div>
              <p>視聴者の属性がそろっているチャンネルは広告出稿者にとって好都合。</p>
              <p>動画投稿者は動画によって視聴者の問題を解決する必要がある。</p>
            </div>


            <div classNameName='text-2xl text-center m-4 border-b-4 border-blue-400'>動画投稿者が投稿すべき動画</div>
            <div>
              <p>広告出稿者が広告を出したくなるような動画</p>
              <p>Google社が喜んで広告出稿者の広告をつけたくなるような動画</p>
              <p classNameName='border-b-4 border-blue-400'>PCで書いた文章をスマホで確認する習慣をつけ、モバイルユーザーからの見やすさを意識することが大切です</p>
            </div>
            <div classNameName='text-2xl text-center m-4 border-b-4 border-blue-400'>モバイルユーザーを最優先に考える</div>
            <div>
              <p>Youtubeで動画とチャンネルを伸ばすにはアルゴリズムに気に入られるしかない</p>
              <p>トラフィックソースとはあなたの動画を観た人が動画にどうやってたどり着いたのかというデータ</p>
              <p>ブラウジング機能：Youtubeのホーム画面に表示されるもの</p>
              <p>関連動画：動画視聴中の画面や動画再生後に表示されるもの</p>
              <p>Youtubeが解きたい問題は新たに投稿された動画がよい動画なのか、そうでない動画なのか分類すること</p>
              <p>Youtubeが持っている過去に投稿された動画や視聴者の反応などに関する膨大なデータを利用し、その特徴を抽出してモデル化</p>
              <p>予測フェーズ</p>
              <p>今までYoutubeに投稿された良い動画の傾向をもとにあなたの動画がどの程度その傾向に当てはまるのか判断する</p>
              <p>過去にある程度成功している他人のチャンネルを参考にすることでアルゴリズムからの高評価がもらいやすくなる</p>
              <p>内部スコア =チャンネルのポテンシャル×動画のポテンシャル</p>

              <p>インプレッション数とはYoutubeのホーム画面や関連動画欄におすすめ表示される回数</p>
              <p>インプレッションに対する視聴者のクリック率、視聴維持率が高い動画が良い動画として検知されている</p>
              <p>良い動画を今までたくさん出していればYoutube側から信頼され、評価も落ちにくくなる。</p>

              <p>チャンネルを開設する→動画を100本程度投稿する→どれか1本の動画が伸びたら→伸びた動画からチャンネルに人が流入する→流入した人が他の動画を観る→ほかの動画も面白ければさらに動画に人が流入</p>

              <p>インプレッション数の増減は動画の再生回数にダイレクトに影響</p>


              <p>チャンネル登録していない人による再生回数が全体の94%である</p>
              <p>淡々と自分のチャンネルの動画に興味を持ってくれるような属性の人だけにチャンネル登録してもらえるようにYoutubeの中だけで人を集めていく</p>

              <p>ファンができるまでの流れ</p>
              <p>1.まずはジャンルを絞って動画投稿を続けてチャンネルを成長させる</p>
              <p>2.視聴者はYoutuber自体に親近感を覚えるようになる</p>
              <p>3.どんな企画の動画をやっても再生されるチャンネルになる</p>

              <p>8分以上の尺の動画には途中に広告を入れることができるので、1再生当たりの単価を高くすることが可能</p>
              <p></p>
              <p></p>
              <p></p>
              <p classNameName='border-b-4 border-blue-400'>チャンネルアイコン</p>
              <h4>チャンネル概要欄</h4>
              <p>・あなたに興味を持ってくれた視聴者が動画を何本か見た後「このチャンネルはどんなチャンネルだろう？」という気持ちで読む場所がチャンネル概要欄</p>
              <p>どうジャンルで動画を投稿している先駆者のテーマを真似る</p>
              <p>あなたの動画を誰かが真似した場合、その動画の関連動画欄にあなたの動画がっ表示される可能性が高まります。</p>
              <p>動画が再生される前に関係しているのは「タイトル」と「サムネイル」しかない。</p>
              再生リストは3種類設定しておく
              1.人気動画リスト
              2.全動画リスト
              3.ジャンル別リスト
            </div>
          </Movie>
        ) : id == "thumbnail" ? (
          <Movie>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <div>
              <p>。</p>
            </div>


            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
            <div>
              <p>Youtubeにおいてサムネイルは非常に重要です</p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>3つのテクニック</div>
            <div>

              <div className="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                  <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                      <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">短期的快楽</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">視聴者に「短期間で変われる」という期待を抱かせる</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">逆説/衝撃の事実</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">人は常識を否定されると興味がわく</dd>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">ネガティブ訴求</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">人は「得をしたい」よりも「損をしたくない」という気持ちの方が強い</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>


              <p>インプレッション数とはYoutubeのホーム画面や関連動画欄におすすめ表示される回数</p>
              <p>インプレッションに対する視聴者のクリック率、視聴維持率が高い動画が良い動画として検知されている</p>
              <p>良い動画を今までたくさん出していればYoutube側から信頼され、評価も落ちにくくなる。</p>

              <p>チャンネルを開設する→動画を100本程度投稿する→どれか1本の動画が伸びたら→伸びた動画からチャンネルに人が流入する→流入した人が他の動画を観る→ほかの動画も面白ければさらに動画に人が流入</p>

              <p>インプレッション数の増減は動画の再生回数にダイレクトに影響</p>


              <p>チャンネル登録していない人による再生回数が全体の94%である</p>
              <p>淡々と自分のチャンネルの動画に興味を持ってくれるような属性の人だけにチャンネル登録してもらえるようにYoutubeの中だけで人を集めていく</p>

              <p>ファンができるまでの流れ</p>
              <p>1.まずはジャンルを絞って動画投稿を続けてチャンネルを成長させる</p>
              <p>2.視聴者はYoutuber自体に親近感を覚えるようになる</p>
              <p>3.どんな企画の動画をやっても再生されるチャンネルになる</p>

              <p>8分以上の尺の動画には途中に広告を入れることができるので、1再生当たりの単価を高くすることが可能</p>
              <p></p>
              <p></p>
              <p></p>
              <p className='text-2xl text-center m-4 border-b-4 border-blue-400'>PASTORフォーミュラ</p>

              <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Problem(問題の特定)</h3>
                    <p class="my-4 font-light">悩みの代弁</p>
                    <div>視聴者の「こうなりたい」という思いに共感</div>
                  </blockquote>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Amplify(問題の拡大)</h3>
                    <p class="my-4 font-light">問題の重大さを提示</p>
                    <div>問題を放置した結果を具体的に提示する</div>
                  </blockquote>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solve(解決策)</h3>
                    <p class="my-4 font-light">問題の具体的な解決策を提示</p>
                    <div>視聴者が信頼しやすい状態に</div>
                  </blockquote>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Transformation with testimony(変革と証明)</h3>
                    <p class="my-4 font-light">実績の提示</p>
                    <div>事実をもとに話の信憑性を付与する</div>
                  </blockquote>
                
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Offer(提案)</h3>
                    <p class="my-4 font-light">視聴者への呼びかけ</p>
                    <div>視聴者に実際のアクションを呼びかける</div>
                  </blockquote>
                  
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Response(返答の呼びかけ)</h3>
                    <p class="my-4 font-light">視聴者からのレスポンスを求める</p>
                    <div>視聴者にチャンネル登録をするよう呼びかける</div>
                  </blockquote>
                 
                </figure>
              </div>
             
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Youtubeで成功する人</div>
              <ol>
                <li>もともと性格がYoutubeに向いている人</li>
                <li>Youtube用にキャラを使ってコツコツ努力できる人</li>
                <li>背景の実績が元々すごい人</li>
              </ol>
              <p></p>
            </div>
          </Movie>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
