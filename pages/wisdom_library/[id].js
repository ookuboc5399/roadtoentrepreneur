import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Header_only } from '../../components/header/header';
import { Life, Skin } from '../../components/wisdom_library';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const back= "/invester_entrepreneur/invester_entrepreneur"

    const lifes = [
        { id: 1, name: "習慣を変える,モチベーション", title: "フローを作り出す　GIVE&TAKE やり抜く力 モチベーション　変化する 変われない会社", href: "./life/habit/life_detail" },
        { id: 2, name: "人に頼む技術", title: "人に頼む技術", href: "./request/request_detail" },
        { id: 3, name: "話し方・伝え方", title: "話し方・伝え方　説得力　洗脳 パフォーマンス", href: "./speak/speak_detail" },
        { id: 6, name: "ハーバードの人生を変える授業", title: " 感謝する・失敗から学ぶ　習慣化する・完璧主義を手放す　運動をする・価値ある行動をする　仕事への考え方を変える　意義を見出す・安全圏から出る 困難から学ぶ・一貫性を持つ　親切な行動をする・良いところを探す　「ありがとう」を言う", href: "./life/harvard/harvard" },
        { id: 8, name: "読書", title: " 速読のウソ　多読のウソ　選書のウソ　脳と感情の操り方を知る", href: "./life/read/read" },
        { id: 2, name: "税金", title: " 税金", href: "./life/tax/tax" },
        { id: 3, name: "エッセンシャル思考,タルムード", title: "エッセンシャル　セルフコンパッション　先延ばしを防ぐためのノート術　先延ばしの心理学ノーペイン・ノーゲイン　七匹の太った牛と七匹の痩せた牛", href: "./life/essentialism/think" },
        { id: 4, name: "シンプルルール", title: "生活におけるシンプルルール　ボトルネックを見つける", href: "./simple_rule/simple_rule_detail" },
        { id: 6, name: "成功者に学ぶ", title: "ウォーレンバフェット", href: "./life/successful/detail" },
    ];

    const skins = [
        { id: 1, name: "習慣を変える", title: "フローを作り出す　GIVE&TAKE やり抜く力", href: "./habit/life_detail" },
        { id: 2, name: "人に頼む技術", title: "人に頼む技術", href: "./request/request_detail" },
        { id: 3, name: "話し方・伝え方", title: "話し方・伝え方　説得力　洗脳 パフォーマンス", href: "./speak/speak_detail" },
    ];


    return (
        <div>
            {
                id == "life_chapter" ? (
                    <div>
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
                                    <h1>生き方と考え方</h1>
                                    <p>Djangojs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {lifes && lifes.map((life) => <Life key={life.id} life={life} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) :id == "skin_chapter" ? (
                    <div>
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
                                    <h1>生き方と考え方</h1>
                                    <p>Djangojs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {skins && skins.map((skin) => <Skin key={skin.id} skin={skin} />)}
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
