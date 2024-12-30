import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Header_only } from '../../../components/header/header';


const engineer_detail = () => {
    return (
        
        <div>
            <div class="bg-gray-200 ">
            <Header_only />
                <div class="">
                    <Link href="/wisdom_library/wisdom_library">
                        <div className="text-4xl pl-10 pt-4">
                            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                        </div>
                    </Link>
                    <div class="text-center">
                        <h1>生き方と考え方</h1>
                    </div>
                    <div className="flex flex-wrap m-4 mb-5 justify-around">
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">習慣を変える</span>
                                    <div class="p-4">
                                        フローを作り出す　GIVE&TAKE やり抜く力
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./habit/life_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">人に頼む技術</span>
                                    <div class="p-4">
                                        人に頼む技術
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./request/request_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">話し方・伝え方</span>
                                    <div class="p-4">
                                        話し方・伝え方　説得力　洗脳 パフォーマンス
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./speak/speak_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">タルムード</span>
                                    <div class="p-4">
                                        ノーペイン・ノーゲイン　七匹の太った牛と七匹の痩せた牛
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./talmud/life_talmud">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">お金</span>
                                    <div class="p-4">
                                        お金の使い方
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./money/life_money">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">ハーバードの人生を変える授業</span>
                                    <div class="p-4">
                                        感謝する・失敗から学ぶ　習慣化する・完璧主義を手放す　運動をする・価値ある行動をする　仕事への考え方を変える　意義を見出す・安全圏から出る
                                        困難から学ぶ・一貫性を持つ　親切な行動をする・良いところを探す　「ありがとう」を言う
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./harvard/life_detail_harvard">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">不条理な会社人生から自由になる方法</span>
                                    <div class="p-4">
                                        知識や人脈を惜しげもなく共有
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./akira/life_akira">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">読書</span>
                                    <div class="p-4">
                                        速読のウソ　多読のウソ　選書のウソ　脳と感情の操り方を知る
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./read/read_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">パフォーマンス</span>
                                    <div class="p-4">
                                        パフォーマンス
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./performance/performance_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">税金</span>
                                    <div class="p-4">
                                        税金
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./tax/tax_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">エッセンシャル思考</span>
                                    <div class="p-4">
                                        エッセンシャル　セルフコンパッション　先延ばしを防ぐためのノート術　先延ばしの心理学
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./essentialism/think_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">シンプルルール</span>
                                    <div class="p-4">
                                        生活におけるシンプルルール　ボトルネックを見つける
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./simple_rule/simple_rule_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">モチベーション</span>
                                    <div class="p-4">
                                    モチベーション　変化する 変われない会社
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./motivation/motivation_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-4 mb-5 w-1/4">
                            <div className="bg-white">
                                <div className="bg-green-300 h-full items-center">
                                    <Image
                                        src="/svg/20.svg"
                                        alt="01:Pythonとは？"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="m-10">
                                    <span className="border-r-2 p-4 text-2xl">成功者に学ぶ</span>
                                    <div class="p-4">
                                    ウォーレンバフェット
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./successful/successful_detail">
                                            <div>
                                                <button className="w-36 bg-green-300 text-white mb-2">
                                                    レッスン詳細へ
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default engineer_detail
