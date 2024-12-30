import { useRouter } from 'next/router'
import React from 'react';
import { Tax } from '../../../../components/layout/wisdom_library/wisdom_library';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "tax" ? (
          <Tax>
            <div className="text-3xl m-4">
              消費税
            </div>
            <div className="justify-center">
              <p>1947 シャウプ税制　間接税から直接税　　財政法で赤字国債の発行を禁止した</p>
              <p>高橋是清　赤字国債を禁止した。二二六事件で暗殺。</p>
              <p>1965 オリンピック不況で国債を発行</p>
              <p>1973 オイルショック　二度目の赤字国債の発行</p>
              <p>野田佳彦　8%→10%</p>
              <p>安倍晋三　10% 軽減税率</p>
              <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>オフショア</div>
              <p>オフショアとは法人所得税率25%以下</p>
              <p>子会社を設立して優遇された税制を享受する</p>
              <p>オフショアにある金融商品に投資する</p>
              <h3>マン島</h3>
              <p>金融商品の価値の90%までをマン島が保証</p>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>源泉徴収票</div>
            <p>源泉徴収税額が所得税</p>
            <p>社会保険料が健康保険と年金</p>
            <p></p>
            <p>フリーランスの所得税は「申告納税制度」といって自分で税金を計算して申告し納税することになっている</p>
            <p>開業前に使った仕事関連の経費は後々「開業準備費用」ということで確定申告に反映できる</p>
            <p>確定申告をすれば源泉徴収で引かれすぎた税金が戻ってくるチャンス</p>
            <h4>所得税</h4>
            <p></p>
            <p></p>
            <h4>住民税</h4>
            <p>自分が住んでいる都道府県&市町村に払う税金</p>
            <p>所得に対して税率は原則一律10%なので住んでいる場所は関係ない</p>
            <h4>事業税</h4>
            <h4>消費税</h4>
            <table class="table-auto border-2 border-black">
              <thead className='mb-4'>
                <tr className='mb-4'>
                  <th class="px-4 py-2 bg-blue-300 mb-4"></th>
                  <th class="px-4 py-2 bg-blue-300">所得税</th>
                  <th class="px-4 py-2 bg-blue-300">住民税</th>
                  <th class="px-4 py-2 bg-blue-300">事業税</th>
                  <th class="px-4 py-2 bg-blue-300">消費税</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>税金の行き先</td>
                  <td className='border px-4 py-2'>国</td>
                  <td>地方自治体</td>
                  <td>地方自治体</td>
                  <td>国・地方自治体</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>税率</td>
                  <td className='border px-4 py-2'>5~45%(累進課税)</td>
                  <td>原則一律10%</td>
                  <td>0~5%(職種別)</td>
                  <td>前前年の売上が1千万円を超えた場合に計算</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>税金計算</td>
                  <td className='border px-4 py-2'>自分で計算して税務署に確定申告</td>
                  <td>確定申告を元に自治体が計算</td>
                  <td></td>
                  <td>自分で計算して税務署に確定申告</td>

                </tr>
                <tr>
                  <td className='border px-4 py-2'>納付期限</td>
                  <td className='border px-4 py-2'>翌年3月15日</td>
                  <td>翌年6・8・10月、翌々年1月</td>
                  <td>翌年8・11月</td>
                  <td>翌年3月31日</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>控除</div>
            <h4>基礎控除</h4><p></p>
            <h4>社会保険料控除</h4>
            <p></p>
            <h4>配偶者控除・配偶者特別控除</h4>
            <p></p>
            <h4>扶養控除</h4>
            <p></p>
            <h4>扶養控除</h4>
            <p></p>
          </Tax>
        ) : id == "aoiro" ? (
          <Tax>
           
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Tax>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
