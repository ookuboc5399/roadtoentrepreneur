import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router'

export default function Dashboard() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <div className="bg-gray-200">
            <div className="bg-gray-900">
                <div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                            </svg>
                            <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
                        </div>
                    </div>
                    <nav className="">
                    <Link href="./dream_image">
                            <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                {router.pathname == '/mypage/dream_image' ? (
                                    <span class="mx-3 text-2xl text-white bg-gray-500">夢の実現</span>
                                ) : (
                                    <span class="mx-3 text-2xl text-white">夢の実現</span>
                                )}
                            </div>
                        </Link>
                        <Link href="./balancesheet">
                            <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                                </svg>
                                {router.pathname == '/mypage/balancesheet' ? (
                                    <span class="mx-3 text-2xl text-white bg-gray-500">収支管理</span>
                                ) : (
                                    <span class="mx-3 text-2xl text-white">収支管理</span>
                                )}
                            </div>
                        </Link>
                        <Link href="./account">
                            <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                {router.pathname == '/mypage/account' ? (
                                    <span class="mx-3 text-2xl text-white bg-gray-500">アカウント情報</span>
                                ) : (
                                    <span class="mx-3 text-2xl text-white">アカウント情報</span>
                                )}
                            </div>
                        </Link>
                        <Link href="./book">
                            <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                {router.pathname == '/mypage/book' ? (
                                    <span class="mx-3 text-2xl text-white bg-gray-500">Books</span>
                                ) : (
                                    <span class="mx-3 text-2xl text-white">Books</span>
                                )}
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}