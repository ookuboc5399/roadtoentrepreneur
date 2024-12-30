import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Doughnutstock_japan,Doughnutstock_america ,Doughnutstock_euro} from '../../../../components/chart/Doughnut';
import { Stock } from '../../../../components/layout/invester/invester';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "stock_detail_market" ? (
          <Stock>
            <div className="text-center w-3/4">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                株式の方は変動が大きい
                債権は変動が少ない

                株：銀行の金利などよりも利回りがいい
                株価が上がれば配当や株主優待などでも利益が上がる
                証券取引所を通じて取引される→証券会社に口座を開かなければならない
                買いや売りにかかわらず一回ごとに手数料がかかる

                株主優待を受け取るためには権利確定日(会社の決済日)に株式を保有していなければならない
                株主として権利確定日に名簿に登録されるには３営業日前までに株を購入する必要がある。


              </div>
              <p>個人の金融資産に現金・預金が占める割合はアメリカで13.3%、ユーロ圏で34.3%となっています。</p>
              アメリカの個人が現金・預金を保有している割合は日本の約4分の1にとどまっています。
              一方株式などに投資している割合はアメリカで37.8%、ユーロ圏が18.2%。
              投資信託に投資している割合はアメリカで13.2%、ユーロ圏が9.6%
              アメリカの個人が株式などに投資している割合は日本の3.5倍以上です
              <div>
                <div className="inline-block w-1/4 m-4">
                  <Doughnutstock_japan />
                </div>
                <div className="inline-block w-1/4 m-4">
                  <Doughnutstock_america />
                </div>
                <div className="inline-block w-1/4 m-4">
                  <Doughnutstock_euro />
                </div>
              </div>
            </div>
          </Stock>
        ) : id == "stock_detail_bank" ? (
          <Stock>
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

            <div className="w-1/4">
              <div className="text-3xl m-4">
                <Link href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%a2%e3%83%87%e3%82%a3%e3%83%86%e3%82%a3%e3%81%ae%e4%b8%8a%e6%98%87%e3%81%af%e6%ad%a2%e3%81%be%e3%82%89%e3%81%aa%e3%81%84/1285/">
                  コモディティの上昇は止まらない
                </Link>
              </div>
              <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                <iframe src="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%a2%e3%83%87%e3%82%a3%e3%83%86%e3%82%a3%e3%81%ae%e4%b8%8a%e6%98%87%e3%81%af%e6%ad%a2%e3%81%be%e3%82%89%e3%81%aa%e3%81%84/1285/" width="750" height="300" frameboader="0"></iframe>
              </div>
            </div>
          </Stock>
        ) : id == "stock_detail_long" ? (
          <Stock>
            <div className="text-center w-2/4">
              <div className="text-3xl m-4">
                キャッシュフロー
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                財務諸表上には営業キャッシュフロー、財務キャッシュフロー、投資キャッシュフローがある
                安定したキャッシュフローは強い営業力があってはじめて成り立つ
                損益計算書では営業利益が大幅な赤字だとしてもキャッシュフローさえしっかりしていればその会社は倒産しないとさえ言われている
              </div>
              <div className='border-collapse justify-center flex mb-4'>
                <table className='border-collapse'>
                  <tr>
                    <th>銘柄名</th> <th>最安値</th><th>最高値</th><th>倍率</th><th>年数</th>
                  </tr>
                  <tr>
                    <th>レアジョブ(6096)</th> <td>200円(2018年12月)</td> <td>3145円(2019年12月)</td><td>約16倍</td><td>1年</td>
                  </tr>
                  <tr>
                    <th>レーザーテック(6920)</th> <td>130円(2012年7月)</td> <td>29650(2021年9月)</td><td>約228倍</td><td>9年</td>
                  </tr>
                  <tr>
                    <th>ディップ(2379)</th> <td>30円(2011年3月)</td> <td>4440円(2021年9月)</td><td>約148倍</td><td>10年</td>
                  </tr>
                  <tr>
                    <th>MonotaRO(3064)</th> <td>7円(2008年1月)</td> <td>3470円(2021年2月)</td><td>約496倍</td><td>13年</td>
                  </tr>
                  <tr>
                    <th>神戸物産(3038)</th> <td>25円(2008年10月)</td> <td>4660円(2021年9月)</td><td>約186倍</td><td>13年</td>
                  </tr>
                </table>
              </div>

            </div>

            <div className="w-1/4">

            </div>
          </Stock>
        ) : id == "stock_detail" ? (
          <Stock>
            <div className="">
              <div className="text-3xl m-4">
                チャートパターン
              </div>
              <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <p></p>
                <p></p>株は1株から買えるわけではなく、最低の単位が決まっています。
                <p></p>「単元株数」を確認してみましょう。
                <p></p>たとえば1株494円で単元株が100株になっている場合、4万9400円+手数料が購入に必要な金額です
                <p></p>株を購入する資金が足りない場合は「単元未満株」といった商品もあります。
                <p></p><p></p>これは単元株数の10分の1などで購入できる商品でSBI証券、マネックス証券などで取り扱いがあります。
                <p></p>例えば単元株100株で1株4000円の場合は40万円が必要になりますが、それを「ミニ株」で買うとすると10株から買えるため必要な資金は4万円で済みます。

                <p></p> TOPIXに採用されている銘柄のうち時価総額で上位1000銘柄の株価の上昇率とTOPIXの上昇率を比較する。
                <p></p>過去10年間でTOPIXに比べて個別銘柄が勝つ勝率は半々だった。
                <p></p>さらに勝率を60%に引き上げると1000銘柄のうち22銘柄しかない。
                <div className='text-xl'>
                  TOPIXに60%の確率で勝っている22銘柄
                </div>

                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>コード</th> <th>銘柄</th><th>勝率</th><th>合計</th><th>勝ち</th><th>負け</th>
                    </tr>
                    <tr>
                      <th>7780</th> <td>メニコン</td> <td>67.2%</td> <td>64</td> <td>43</td> <td>21</td>
                    </tr>
                    <tr>
                      <th>8876</th> <td>リログループ</td> <td>65.0%</td> <td>120</td> <td>78</td> <td>42</td>
                    </tr>
                    <tr>
                      <th>3064</th> <td>MonotaRO</td> <td>64.2%</td> <td>120</td> <td>77</td> <td>43</td>
                    </tr>
                    <tr>
                      <th>2127</th> <td>日本M&Aセンター</td> <td>63.3%</td> <td>120</td> <td>76</td> <td>44</td>
                    </tr>
                    <tr>
                      <th>4612</th> <td>日本ペイメントホールディングス</td> <td>63.3%</td> <td>120</td> <td>76</td> <td>44</td>
                    </tr>
                    <tr>
                      <th>6035</th> <td>アイ・アールジャパンホールディングス</td> <td>63.2%</td> <td>68</td> <td>43</td> <td>25</td>
                    </tr>
                    <tr>
                      <th>6200</th> <td>インソース</td> <td>62.7%</td> <td>51</td> <td>32</td> <td>19</td>
                    </tr>
                    <tr>
                      <th>2175</th> <td>エス・エム・エス</td> <td>62.5%</td> <td>120</td> <td>75</td> <td>45</td>
                    </tr>
                    <tr>
                      <th>4684</th> <td>オービック</td> <td>62.5%</td> <td>120</td> <td>75</td> <td>45</td>
                    </tr>
                    <tr>
                      <th>7956</th> <td>ピジョン</td> <td>62.5%</td> <td>120</td> <td>75</td> <td>45</td>
                    </tr>
                    <tr>
                      <th>3635</th> <td>コーエーテクモホールディングス</td> <td>61.7%</td> <td>120</td> <td>74</td> <td>46</td>
                    </tr>
                    <tr>
                      <th>7747</th> <td>朝日インテック</td> <td>61.7%</td> <td>120</td> <td>74</td> <td>46</td>
                    </tr>
                    <tr>
                      <th>6028</th> <td>テクノブロ・ホールディングス</td> <td>61.4%</td> <td>70</td> <td>43</td> <td>27</td>
                    </tr>
                    <tr>
                      <th>3288</th> <td>オープンハウス</td> <td>61.2%</td> <td>85</td> <td>52</td> <td>33</td>
                    </tr>
                    <tr>
                      <th>3762</th> <td>テクマトリックス</td> <td>60.8%</td> <td>120</td> <td>73</td> <td>47</td>
                    </tr>
                    <tr>
                      <th>6861</th> <td>キーエンス</td> <td>60.8%</td> <td>120</td> <td>73</td> <td>47</td>
                    </tr>
                    <tr>
                      <th>6920</th> <td>レーザーテック</td> <td>60.8%</td> <td>120</td> <td>73</td> <td>47</td>
                    </tr>
                    <tr>
                      <th>7453</th> <td>良品計画</td> <td>60.8%</td> <td>120</td> <td>73</td> <td>47</td>
                    </tr>
                    <tr>
                      <th>9090</th> <td>丸和運輸機関</td> <td>60.3%</td> <td>78</td> <td>47</td> <td>31</td>
                    </tr>
                    <tr>
                      <th>2413</th> <td>エムスリー</td> <td>60.0%</td> <td>120</td> <td>72</td> <td>48</td>
                    </tr>
                    <tr>
                      <th>4768</th> <td>大塚商会</td> <td>60.0%</td> <td>120</td> <td>72</td> <td>48</td>
                    </tr>
                    <tr>
                      <th>9435</th> <td>光通信</td> <td>60.0%</td> <td>120</td> <td>72</td> <td>48</td>
                    </tr>
                  </table>
                </div>
                <p></p>勝率60%に入った22銘柄に共通点は安定成長型で比較的キャッシュフローがしっかりしている企業が多い
                <p></p>製造業の場合景気が良くなれば作ったものが売れて業績が回復、株価も上昇するが景気が悪くなるとモノが売れなくなって業績が悪化。株価も下落するというサイクルを繰り返す
                <div className='text-xl'>
                  流動性
                </div>
                <p></p>流動性は出来高が3万3500株、株価が512円の場合約1715万円と求めることができる
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>

            </div>

            <div className="w-1/4">

            </div>
          </Stock>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
