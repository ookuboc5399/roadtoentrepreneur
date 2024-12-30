import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const web_scraping_detail = () => {
    return (
        <div>
            <div class="bg-gray-200 ">
                <div class="sticky top-0">
                    <Image
                        src="/svg/road to entrepreneur.svg"
                        alt="01:Pythonとは？"
                        width={150}
                        height={150}
                    />
                </div>
                <div class="">
                    <Link href="/wisdom_library/wisdom_library">
                        <div className="text-4xl pl-10 pt-4">
                            <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                        </div>
                    </Link>
                    <div class="text-center">
                        <h1>Web Scraping</h1>
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
                                    <span className="border-r-2 p-4 text-2xl">クローリング・スクレイピングとは</span>
                                    <div class="p-4">
                                        
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./1/scraping">
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
                                    <span className="border-r-2 p-4 text-2xl">クローリング・スクレイピング(Python)</span>
                                    <div class="p-4">
                                        人に頼む技術
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./2/scrapy">
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
                                    <span className="border-r-2 p-4 text-2xl">クローリング・スクレイピング(ライブラリ)</span>
                                    <div class="p-4">
                                        話し方・伝え方　説得力　洗脳 パフォーマンス
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./3/lib">
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
                                    <span className="border-r-2 p-4 text-2xl">日本輸入</span>
                                    <div class="p-4">
                                        ノーペイン・ノーゲイン　七匹の太った牛と七匹の痩せた牛
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./japan_import/japan_import_detail">
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
                                    <span className="border-r-2 p-4 text-2xl">クローリング・スクレイピング(実践)</span>
                                    <div class="p-4">
                                        
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./5/engineer_scraping5_1">
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
                                    <span className="border-r-2 p-4 text-2xl">Scrapy</span>
                                    <div class="p-4">
                                        お金の使い方
                                    </div>
                                    <div className="text-green-300 flex justify-end m-2">
                                        <Link href="./6/engineer_scraping6_1">
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

export default web_scraping_detail
