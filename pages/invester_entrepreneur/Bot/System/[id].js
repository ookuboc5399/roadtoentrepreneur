import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import {System} from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "system_detail" ? (
          <System>
            <div>
              <p>売買を行うための条件をあらかじめ決めておいて機械的に売買を判断するトレード</p>
              <p>人の感情に左右されないため売買ルールがブレないメリットがある</p>
              <p> 他にもFXは週末の土日を除いた5日間、24時間連続して取引を行うことができる</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ファイル形式</div>
              <p>拡張子が.mq4のファイルはソースファイルを意味する。コンピューターはこのmq4ファイルの内容を理解できません。.mq4ファイルをコンパイルすると.ex4ファイルが作成されこれが実行ファイルでありメタトレーダー上で実行されるファイルである。</p>
              <p>ex4ファイルではプログラムソースが見られません</p>
              <p></p>
              <p>拡張子が.mqhのファイルはインクルードファイル</p>
              <p>コンパイラーがソースコードをコンパイルするときには.mqhファイルの内容を.ex4ファイルのなかにインクルードする</p>
              <p>拡張子が.mqtのファイルはテンプレートファイルを意味する</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>自動売買プログラム</div>
              <p>自動売買プログラムは「Expert Adisors」で管理されている。        </p>
              <p>ファイルはProgram Files/MetaTrader 4/expertsに保存されている</p>

              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>インディケータープログラム</div>
              <p>インディケータープログラムは「Custom Indicators」で管理されている。        </p>
              <p>ファイルはProgram Files/MetaTrader 4/experts/indicatorsに保存されている</p>
              <p></p>
              <p>プログラムを記述したら「Compile」ボタンをクリックします。Compileとは人が書いたプログラムをコンピューターが読み込んで実行できる形式に変換する作業です</p>

              <p>「Expert Advisors」がオンになっていることを確認</p>
              <p></p>

              <p></p>
              <p></p>
            </div>
          </System>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

