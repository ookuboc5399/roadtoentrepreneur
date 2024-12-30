import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book, Option } from '../../../components/layout/invester/invester';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "option_detail" ? (
          <Option>


          </Option>
        ) : id == "book_detail" ? (
          <Book>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                一般口座と特定口座
              </div>
              <div className="text-xl m-4">
                株式で利益が出たら所得税や住民税などの税金がかかります
                <p>ここで一般口座を選ぶと確定申告を自分で行う必要があります</p>
                <p>特定口座、源泉徴収ありを選べば確定申告などの手続きは証券会社が行ってくれます</p>
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>


              </div>

            </div>

          </Book>
        ) : id == "book_detail2" ? (
          <Book>
            <div className="">
              <div className="text-3xl m-4">Alternative Match Goals              </div>
              これは試合が終了した時点で両チームの得点の合計が何点以下になるかを予想するという賭けです。
              <p>例えばUnder3.5に賭けた場合、両チームの得点の合計が3点以下であれば勝ちとなる</p>
              <p>試合の途中でこの賭けから降りることができます。これを「キャッシュアウト」といいます。</p>
              <div></div>
              <div className="text-xl">エントリー条件              <div>
                <li>経過時間:65~70分にベット開始</li>
                <li>互いの点数の合計:3点以下</li>
                <li>レッドカード数:両チームゼロ</li>
                <div></div>
                <p>経過時間65~70分の間というのがほぼ結果も予想でき、かつそれなりに高いオッズでかけられるベストタイミング</p>  ぃ
              </div>
                <li>On Targetの両チーム合計が5本以下、かつ決定率が100%でない</li>
                <li>Off Targetの両チーム合計が14本以下</li>
                <li>Attacksの両チーム合計が150以下</li>
                <li>Dangerous Attacksの両チーム合計が50以下、かつ偏りがない。</li>
                <li>コーナーキックの数が両チーム合計10回以下</li>
                <li>イエローカードが両チーム合計8枚以下</li>
              </div>
            </div>
          </Book>
        ) : id == "book_detail3" ? (
          <Book>
            <div className="">
              <div className="text-3xl m-4">Alternative Match Goals              </div>
              これは試合が終了した時点で両チームの得点の合計が何点以下になるかを予想するという賭けです。
              <p>例えばUnder3.5に賭けた場合、両チームの得点の合計が3点以下であれば勝ちとなる</p>
              <div>
                    <table class="table-auto border-2 border-green-400">
                      <thead>
                        <tr>
                          <th class="px-4 py-2">Match Winner</th>
                          <th class="px-4 py-2">どちらの選手がそのセットを取るかという賭け方</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Set Winner</td>
                          <td className='border px-4 py-2'>どちらの選手がそのセットを取るかという賭け方</td>
                        </tr>
                        <tr>
                          <td>Game Winner</td>
                          <td className='border px-4 py-2'>どちらの選手がそのゲームを取るかという賭け方。テニスは1セット取るのに6ゲーム勝たなくてはならない</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              <div className="text-xl">エントリー条件              <div>
                <li>序盤にもかかわらず、Match Winnerのオッズに開きがある(例えば選手Aのオッズが1.08に対し選手Bのオッズが10など)試合</li>
                <p className='text-red-500'>→Game Winnerへのベットを検討</p>
                <li>オッズの開きがない試合</li>
                <p className='text-red-500'>→Total Games In Setへのベットを検討</p>
                <li>あと1ゲームでそのセットが決まりそうな試合</li>
                <p className='text-red-500'>→Set Winnerへのベットを検討</p>
                <div></div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Game Winner</div>
                <p>試合序盤にMatch Winnerのオッズに開きがあるということは両選手の実力にかなりの格差があるということを意味している。</p>
                <p>このような絶好のチャンスを見つけたら格上選手のGama Winnerにベットしましょう。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Total Games In Set</div>
                <p>1セットにおいてゲームスコアは6-0、6-1、6-2、6-3、6-4、7-5、7-6以外ありえないので「Over6.5」がかなりの確率で的中します</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Set Winner</div>
                <li>選手A対選手Bのゲームカウントが5-0、5-1、5-2のいずれかである</li>
                <li>選手Aのサーブである</li>
                <li>選手Aの方がランキングが高い</li>
                <p>この3条件を満たしてればSet Winnerにベットしても高確率で勝てるはずです。</p>
                <p></p>
                <p></p>

              </div>
                <li>On Targetの両チーム合計が5本以下、かつ決定率が100%でない</li>
                <li>Off Targetの両チーム合計が14本以下</li>
                <li>Attacksの両チーム合計が150以下</li>
                <li>Dangerous Attacksの両チーム合計が50以下、かつ偏りがない。</li>
                <li>コーナーキックの数が両チーム合計10回以下</li>
                <li>イエローカードが両チーム合計8枚以下</li>
              </div>
            </div>
          </Book>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
