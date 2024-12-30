import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const engineer_detail = () => {
    return (
        <div>
            <div class="bg-gray-200 ">
                <div class="sticky top-0 bg-gray-900">
                    <Image
                        src="/road to entrepreneur_white.png"
                        alt="01:Pythonとは？"
                        width={150}
                        height={150}
                    />
                </div>
                <div class="">
                    <Link href="./invester">
                    <div className="text-4xl pl-10 pt-4">
                        <FontAwesomeIcon icon={faArrowCircleLeft} size="lg"/>
                    </div>
                    </Link>
                    <div class="language-show__header text-center pt-10">
                        <h1>perpetualtraveler提供コンテンツ

                        </h1>
                    </div>
                    <div className="">
                        <div className="flex-1 max-w-5xl m-auto ">
                            <div className="pt-30">
                                <div className="bg-white">
                                    <div className="">
                                        <div>
                                            <Link href="http://lp.perpetualtravelerchoja.com/">
                                                <div className="">
                                                    <img src="/images/head001_bg2shuusei.jpg" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="border-r-2 p-10 text-2xl">
                                            FX長者入門
                                        </div>
                                        <div class=" text-2xl p-10">
                                            世界で勝ち抜くFXトレーダーへ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex-1 max-w-5xl m-auto ">
                            <div className="pt-40">
                                <div className="bg-white">
                                    <div className="">
                                        <div>
                                            <Link href="http://lp.perpetualtravelerchoja.com/">
                                                <div className="">
                                                    <img src="/images/Turning point trader.png" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="inline-block text-center">
                                        <span className="border-r-2 p-4 text-2xl">Turning Point Trader</span>
                                        <div class="">
                                            WEBページはHTML、CSSという言語に
                                        </div>
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
