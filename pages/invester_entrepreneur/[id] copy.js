import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Header_only } from '../../components/header/header';
import { Option, Engel, FX, Mind, Bot, Bond, Stock, Cryptocurrency, Analysis } from '../../components/invester_entrepreneur';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const back= "/invester_entrepreneur/invester_entrepreneur"

    const analysiss = [
        { id: 1, name: "オンラインストア", title: "", href: "./online_detail" },
        { id: 2, name: "飲食店経営", title: "", href: "./restaurant_detail" },
        { id: 3, name: "農業", title: "", href: "./agrical_detail" },
        { id: 4, name: "ファッション", title: "", href: "./fashion_detail" },
        { id: 3, name: "B to B", title: "", href: "./BtoB_detail" },
        { id: 4, name: "B to C", title: "", href: "./BtoC_detail" },
        { id: 3, name: "クリエイター・メディア", title: "", href: "./media_detail" },
        { id: 4, name: "マッチング", title: "", href: "./matching_detail" },
    ];

    const options = [
        { id: 1, name: "オプションについて", title: "'", href: "./option/option_detail" },
        { id: 2, name: "React初級編1", title: "", href: "./money_detail" },
        { id: 3, name: "React初級編2", title: "", href: "./child_detail" },
        { id: 4, name: "ブックメーカー", title: "", href: "./option/book_detail" },
    ];

    const bots = [
        { id: 1, name: "システムトレードとは", title: "'", href: "./Bot/System/system_detail" },
        { id: 2, name: "MT4システムトレード", title: "", href: "./Bot/soft_detail_program/soft_detail" },
        { id: 3, name: "EA", title: "", href: "./Bot/ea_detail_program/1" },
        { id: 4, name: "クローリング&スクレイピング", title: "", href: "./Bot/programing/programing_detail" },
    ];

    const bonds = [
        { id: 1, name: "債券/金利とは", title: "'", href: "./bonds/bonds/bonds_detail" },
        { id: 2, name: "コモディティ", title: "", href: "./bonds/commodity/commodity" },
        { id: 3, name: "", title: "", href: "./Bot/ea_detail_program/1" },
        { id: 4, name: "", title: "", href: "./Bot/programing/programing_detail" },
    ];

    const cryptocurrencys = [
        { id: 1, name: "仮想通貨とは", title: "", href: "./cryptocurrency/cryptocurrency/cryptocurrency_detail" },
        { id: 2, name: "ビットコイン", title: "", href: "./cryptocurrency/btc/btc_detail" },
        { id: 3, name: "イーサリアム", title: "", href: "./cryptocurrency/eth_detail" },
        { id: 4, name: "アルトコイン", title: "", href: "./cryptocurrency/altcoin/altcoin_detail" },
    ];

    const engels = [
        { id: 1, name: "ベンチャーキャピタル", title: "", href: "./engel_investment/venture/1" },
        { id: 2, name: "スタートアップ", title: "", href: "./engel_investment/startup/startup_investment_detail" },
    ];

    const fxs = [
        { id: 1, name: "FXとは", title: "Djangoブログシステム構築", href: "./fx/fx_detail" },
        { id: 2, name: "手法", title: "Djangoブログ新機能追加", href: "./method/method" },
        { id: 3, name: "チャートパターン", title: "ポートフォリオ構築", href: "./chartpattern/chartpattern" },
        { id: 4, name: "為替四季報", title: "カスタムユーザー構築", href: "./sikihou/gold" },
        { id: 5, name: "歴史から学ぶ", title: "書籍検索システム構築", href: "./history/history_gold" }
    ];

    const minds = [
        { id: 1, name: "トレードで大事なこと", title: "Djangoブログシステム構築", href: "./mind/mind/mind" },
        { id: 2, name: "お金持ちになるために", title: "Djangoブログ新機能追加", href: "./mind/money/money" },
        { id: 3, name: "わが子に教える", title: "ポートフォリオ構築", href: "./mind/child/child_detail" },
    ];

    const stocks = [
        { id: 1, name: "株式市場", title: "", href: "./stock/stock/stock_detail_market" },
        { id: 2, name: "複利・企業分析", title: "", href: "./stock/compound/compound" },
        { id: 3, name: "投資信託・ETF", title: "", href: "./stock/etf/investment_trust_detail" },
        { id: 4, name: "会社四季報(日本・アメリカ・中国)", title: "", href: "./stock/stock_detail_brand_sector" },
        { id: 5, name: "成長株・小型株・高配当株投資", title: "", href: "./stock/dividend/stock_detail_growth" },
        { id: 6, name: "バリュー株・業績回復株投資・優良株・老舗株投資・バフェット保有銘柄", title: "", href: "./stock/value/value_detail" },
    ];


    return (
        <div>
            {
                id == "option_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4  cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>オプション</h1>
                                    <p>Djangojs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {options && options.map((option) => <Option key={option.id} option={option} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engel_investment_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>ベンチャーキャピタル・エンジェル投資・スタートアップ</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {engels && engels.map((engel) => <Engel key={engel.id} engel={engel} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "fx_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>FX</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {fxs && fxs.map((fx) => <FX key={fx.id} fx={fx} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "mind_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>マインド</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {minds && minds.map((mind) => <Mind key={mind.id} mind={mind} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "stock_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>株式投資</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {stocks && stocks.map((stock) => <Stock key={stock.id} stock={stock} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "bot_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>システムトレード</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {bots && bots.map((bot) => <Bot key={bot.id} bot={bot} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "bond_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>債券と金利、コモディティ</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {bonds && bonds.map((bond) => <Bond key={bond.id} bond={bond} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "cryptocurrency" ? (
                            <div className='min-h-screen'>
                                <Header_only />
                                <div className='flex justify-start'>
                                    <Link href={back}>
                                        <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                        </div>
                                    </Link>
                                </div>
                                <div className='flex justify-center'>
                                    <div className="w-1/2 m-10 ">
                                        <div className='text-center'>
                                            <h1>仮想通貨</h1>
                                            <p>Django+React+Nextjs</p>
                                        </div>
                                        <div className="flex flex-col mb-5">
                                            {cryptocurrencys && cryptocurrencys.map((cryptocurrency) => <Cryptocurrency key={cryptocurrency.id} cryptocurrency={cryptocurrency} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                ) : id == "analysis" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4 cursor-pointer">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>企業分析</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {analysiss && analysiss.map((analysis) => <Analysis key={analysis.id} analysis={analysis} />)}
                                </div>
                            </div>
                        </div>
                    </div>
              
        ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
