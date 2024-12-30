import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { Icons } from "@/components/ui/icons"; 

export default function Footer_stock_detail_brand() {
    return (
        <div>
            <footer className="bg-gray-800">
                <div className='h-10 bg-gray-200'></div>
                <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://portfolio-yt-2-0-94v55fbeb-ookuboc5399.vercel.app/" className="hover:underline">ポートフォリオサイト</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                {/* <a href="#" className="hover:underline">Facebook */}
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">お問い合わせ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">プログラミング</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="https://zenn.dev/" className="hover:underline">Zenn</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Google Colaboratory</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://paiza.jp/works/mypage" className="hover:underline">paizaラーニング</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://company.dotinstall.com/" className="hover:underline">ドットインストール</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindui.com/" className="hover:underline">tailwindUI</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
                        <ul className="text-gray-300">
                            <li className="mb-4">
                                <a href="https://zenn.dev/" className="hover:underline">note</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.canva.com/" className="hover:underline">Canva</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://secure.xserver.ne.jp/xapanel/login/xserver/?request_page=xserver%2Findex" className="hover:underline">Xserver</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-xl text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com">roadtoentreprenuer.</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-1 space-x-6 justify-center md:mt-0">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Icons.facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Icons.instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Icons.twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
      </Link>
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Icons.github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
      </Link>
    </div>
                </div>
            </footer>
        </div>
    )
}
