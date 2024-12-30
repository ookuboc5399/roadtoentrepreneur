import { useRouter } from 'next/router'
import React from 'react';
import { Child } from '../../../../components/layout/invester/mind/mind';
import { Harvard, Simple, Speak } from '../../../../components/layout/wisdom_library/wisdom_library';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "brainwashing" ? (
          <Speak>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                洗脳のテクニック
              </div>
              <div className="justify-center">
                <p>ひらがな:漢字7:3</p>


                ネームコーリング:自分の知らないことについてネームコーリングの影響を受けやすい
                グラッドワード:重要に聞こえるが実は意味がない単語
                トランスファー:もうすでに良い印象があるものを使ってアイデアを伝える



              </div>

            </div>
          </Speak>
        ) : id == "performance" ? (
          <Speak>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                洗脳のテクニック
              </div>
              <div className="justify-center">
                <p></p>


                利き手が右だった場合考えれば考えるほど右から左に流れていく
                日本人は口に出やすい
                端から2番目が引かれやすい




              </div>

            </div>
          </Speak>
        ) : id == "persuasion" ? (
          <Speak>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                説得力
              </div>
              <div className="justify-center">
                <p></p>


                軽い罵倒やブラックジョークは影響力が上がる→聞いている人が集中する


                自慢話は相手の集中しづらい環境でする


                スピーチ
                スピーチの時間の90%以上をオーディエンスを見て話している
                説得力が出る


                敵には早口で新情報を与える　影響力が高い
                味方にはゆっくり納得させるように話す　説得力が高くなる

                会議で最初に発言する人は重要人物だと思われやすい

                声のピッチを1～3語低くする




              </div>

            </div>
          </Speak>
        ) : id == "detail" ? (
          <Speak>

          </Speak>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
