import { useRouter } from 'next/router'
import React from 'react';
import {FxMethod} from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "fibo" ? (
          <FxMethod>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                ファンダメンタルは株式の適正価値はいくらかということだけに向けられる。
                この場合の適正価格は一株当たりの資産価値、利益と配当の期待成長率、金利、そしてリスクなどによって決まる。

                ファンダメンタル主義者の仕事は企業の成長率や他の様々な要素を予想しそれらに基づいて本質価値を推定することにある
              </div>
            </div>

            <div className="w-1/4">

            </div>
          </FxMethod>
        ) : id == "funda_rsi" ? (
          <FxMethod>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                ファンダメンタルは株式の適正価値はいくらかということだけに向けられる。
                この場合の適正価格は一株当たりの資産価値、利益と配当の期待成長率、金利、そしてリスクなどによって決まる。

                ファンダメンタル主義者の仕事は企業の成長率や他の様々な要素を予想しそれらに基づいて本質価値を推定することにある
              </div>
            </div>

            <div className="w-1/4">

            </div>
          </FxMethod>
        ) : id == "funda" ? (
          <FxMethod>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                ファンダメンタルは株式の適正価値はいくらかということだけに向けられる。
                この場合の適正価格は一株当たりの資産価値、利益と配当の期待成長率、金利、そしてリスクなどによって決まる。

                ファンダメンタル主義者の仕事は企業の成長率や他の様々な要素を予想しそれらに基づいて本質価値を推定することにある
              </div>
            </div>

            <div className="w-1/4">

            </div>
          </FxMethod>
        ) : id == "macd" ? (
          <FxMethod>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                ファンダメンタルは株式の適正価値はいくらかということだけに向けられる。
                この場合の適正価格は一株当たりの資産価値、利益と配当の期待成長率、金利、そしてリスクなどによって決まる。

                ファンダメンタル主義者の仕事は企業の成長率や他の様々な要素を予想しそれらに基づいて本質価値を推定することにある
              </div>
            </div>

            <div className="w-1/4">

            </div>
          </FxMethod>
        ) : id == "method" ? (
          <FxMethod>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                テクニカル分析とはチャートを分析すれば今後の相場動向を知る手がかりが得られるものと考えている
                第一原理は利益や配当、あるいは将来の企業業績などに関するあらゆる情報は過去の株価にすべて反映されているというものである。
                第二原理は株価はトレンドをもって動く傾向があるというもの。これは上昇トレンドにある株は上昇を続ける傾向があり、同じ水準で停滞している株はなかなか動こうとしない
              </div>
            </div>

            <div className="w-1/4">

            </div>
          </FxMethod>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
