import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function future() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faAvocado} />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        西ドイツが急速に復興した要因は何かというと「そもそもドイツはもともとのポテンシャルが非常に高かった
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1937"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faAvocado} />}
                >
                    <h3 className="vertical-timeline-element-title">ウォール街大暴落</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>24日にゼネラルモーターズの株価が値下がりし、それを皮切りに市場は売り一色になった</p>
                    <p>  この暴落を受け、銀行による組織的な買い支えが行われたため、売りが売りを呼ぶ、という負の連鎖は一時的に免れました。しかし28日、29日にさらなる大暴落が起き、1929年11月13日には198.60の底値を付けることになったのです。</p>
                    <p>  1930年4月17日には294.07という高値を付けるところまで急速に回復しましたが、相場は再び下がり、1954年11月23日まで大暴落前の水準まで戻ることはありませんでした。                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faAvocado} />}
                >
                    <h3 className="vertical-timeline-element-title">住宅バブル</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p> 住宅に対する新しい需要の増加が住宅価格を押し上げるという「正のフィードバック」のループを作り上げた。負債レバレッジのなし崩し的な上昇は融資基準の劣化をもたらし、レバレッジはさらに高まっていった。バブルが膨らむにつれて個人も金融機関もどんどん破滅の淵に近づいていったのだ</p>
                    <p>   そしてバブルがはじけた途端にこれまで膨張を推進してきたループが逆回転し始める。住宅価格は急落し、多くの国民の財産価値は急激に減少に転じて気がつけば住宅の価値は抱えているローンの残高を大幅に下回っていたのだ。ローンの負担が重くのしかかり、財布のひもは固くならざるを得ない。</p>
                    <p> 過大な負債を抱え込んだ金融機関はレバレッジを正常な水準に戻そうと業務を急速に縮小し始める。それがもたらす信用収縮によって実体経済活動は一層冷え込んだ。こうした負のフィードバック・ループが働いて経済は深刻なリセッションに落ち込んでいくのだ。</p>
                    <p> こうして信用バブルがはじけるとその実体経済へのダメージは非常に深刻なものになる</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFlagUsa} />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>日清、日露戦争ではどちらも朝鮮半島が戦場になっている。  </p>
                    <p>中国と日本それぞれに朝鮮半島での利権を与え、そのうち両国が対立し戦争を始める。  </p>
                    <p>日本が勝つと朝鮮は今度はロシアに近寄り、今度は日本とロシアが対立することになり、日ロで戦争をすることになった  </p>
                    <p>戦後の韓国経済は日本の支援で成り立ってきたもの。国交回復時の請求権協定の支援金が韓国の奇跡の経済成長の一因になっている。  </p>
                    <p>それ以上に日本の技術支援が韓国経済を大きく成長させた。</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFlagUsa} />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>1945年以降、アメリカは韓国に対して年間2億~3億ドル、総額にして31億ドルという莫大な経済支援を行っている。  </p>
                    <p>戦後の韓国経済は完全にアメリカの支援に頼り切った体質になっていた。 </p>
                    <p>日本と韓国は1965年に国交を回復 </p>
                    <p>1960年代から韓国経済は急激に発展する。「漢江の奇跡」  </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1987"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFlagUsa} />}
                >
                    <h3 className="vertical-timeline-element-title">ブラックマンデー</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>  1987年10月19日の月曜日に、ニューヨーク証券取引所を発端に起こった史上最大規模の世界的株価の大暴落 </p>
                    <p>  NYダウ平均株価の終値が前週末より508ドルも暴落し、下落率は1929年のウォール街大暴落の12.8%を上回る22.6% </p>
                    <p>  1989年のバブルの悪が出たのが1997年北海道拓殖銀行の倒産 </p>
                    <p>相場の悪は金融機関にある。  </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">ギリシャ危機</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>EUの中には経済基盤の弱い国もあります。ユーロはそういう国をカバーしていかなければならない。</p>
                    <p>EUはEU内の危機に際して自分たちだけでは対応できず、アメリカに助力を求めた。</p>
                    <p>このギリシャ危機の後は世界の外貨準備におけるユーロのシェアは下がった</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>                    2013年11月にFRBのバーナンキ議長(当時)がそれまで非公式な存在だったビットコインを認める発言をしたことでビットコイン価格が跳ね上がりました。 </p>
                    <p>2021年9月には中国国内における仮想通貨関連事業の全面禁止が発表されました。 </p>
                    <p>また同月に中米のエルサルバドルが国家として初めてビットコインを法定通貨として認めました。 </p>
                    <p>これによりエルサルバドル国内の事業者はビットコインでの支払いを受け付ける義務が生じ、国民は納税を含む全ての支払いをビットコインで行えるようになります。 </p>
                    <p>国内の7割が銀行口座もクレジットカードも持たず、主にアメリカへの出稼ぎ組からの仕送りがGDPの2割を占めるとされる同国では稼いだ米ドルを母国に送金するときの手数料の高さがネックでした </p>
                    <p>そこで同国のブケレ大統領は銀行を通さずに送金でき、手数料も破格に安いビットコインに目を付けた </p>
                    <p>各証券会社の手数料                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2025"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2025"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        製造業における技術変化による雇用のミスマッチが拡大
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2027"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        リスキリング　学びなおしブーム</p>
                    <p> 今後のデジタル化の流れで雇用が伸びてくるデータアナリスト、AI技術者、デジタルマーケティング専門職、ITセキュリティー専門職</p>
                    <p>  特定の分野をやってきた技術者であれば、その分野と関連のある分野の技術を学んでいくのが、全く新しいものを学ぶよりも効果が上がりやすい</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2029"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2031"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        サラリーマンが誰しも同じような給与をもらい、同じような生活をしてきた時代は終わる</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2037"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        GDPランキングはi位中国、インド、アメリカ、インドネシア、ブラジル、ロシア、メキシコ</p>
                    <p>  2000年から20年の間に平均賃金の上昇率はアメリカ25.3% 韓国43.5%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2039"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        日本政府の政府債務比率(対GDP比)は2020年末には264% 債務残高は1216兆円</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2039"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        開業率は1960年代まで10%を超えていた　80年代からは5%前後</p>
                    <p>   日本人が相応に豊かになりあえて自ら起業してリスクをとらなくなったことが理由</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default future;