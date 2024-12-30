import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'
import { Button } from "../../../components/ui/button"
import { ArrowLeftCircle } from "lucide-react"

const back_marketing = "/sidebusiness/marketing_chapter"
const back_blog = "/sidebusiness/blog_chapter"
const back_movie= "/sidebusiness/movie_chapter"
const back_design = "/sidebusiness/design_chapter"
const back_real= "/sidebusiness/real_estate_chapter"
const back_buppan= "/sidebusiness/buppan_chapter"

export function Chapteramazon() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_buppan}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./movie_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">動画</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">動画</span>
                )}

              </div>
            </Link>
            <Link href="./real_estate_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/real_estate/real_estate' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">不動産</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">不動産</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptersidebusiness() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/sidebusiness/blog/blog">
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./movie_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">動画</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">動画</span>
                )}

              </div>
            </Link>
            <Link href="./buppan_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/buppan/buppan' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">物販</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">物販</span>
                )}

              </div>
            </Link>
            <Link href="./excel_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/excel/excel' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Excel</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Excel</span>
                )}

              </div>
            </Link>
            <Link href="./blog_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ブログ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ブログ</span>
                )}

              </div>
            </Link>
            <Link href="./marketing_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/marketing/marketing' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">マーケティング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">マーケティング</span>
                )}
              </div>
            </Link>
            <Link href="./design_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/design/design' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">デザイン</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">デザイン</span>
                )}
              </div>
            </Link>
            <Link href="./real_estate_chapter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/real_estate/real_estate' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">不動産</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">不動産</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterblog() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_blog}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./blog_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">キーワード調査</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">キーワード調査</span>
                )}

              </div>
            </Link>
            <Link href="./blog_seo">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_seo' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">SEO対策</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">SEO対策</span>
                )}

              </div>
            </Link>
            <Link href="./blog_writing">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_writing' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ライティング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ライティング</span>
                )}

              </div>
            </Link>
            <Link href="./blog_revision">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_revision' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">推敲</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">推敲</span>
                )}

              </div>
            </Link>
            <Link href="./blog_think">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_think' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">考え方</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">考え方</span>
                )}
              </div>
            </Link>
            <Link href="./wordpress">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">wordpress</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">wordpress</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterjapan() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_buppan}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./blog_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">キーワード調査</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">キーワード調査</span>
                )}

              </div>
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDomestic_resale() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_buppan}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./domestic_resale/domestic_resale_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/buppan/domestic_resale/domestic_resale_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">飲食店経営について</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">飲食店経営について</span>
                )}

              </div>
            </Link>
            <Link href="./domestic_resale_detail_search">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/sidebusiness/buppan/domestic_resale/domestic_resale_detail_search' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">検索</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">検索</span>
                )}

              </div>
            </Link>
        
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/entrepreneur/entrepreneur">
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./domestic_resale/domestic_resale_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/buppan/domestic_resale/domestic_resale_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">飲食店経営について</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">飲食店経営について</span>
                )}

              </div>
            </Link>
            <Link href="./domestic_resale_detail_search">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/sidebusiness/buppan/domestic_resale/domestic_resale_detail_search' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">検索</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">検索</span>
                )}

              </div>
            </Link>
        
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterebay() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_buppan}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./cryptocurrency_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/cryptocurrency/cryptocurrency_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">飲食店経営について</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">飲食店経営について</span>
                )}

              </div>
            </Link>
            <Link href="./cryptocurrency_detail_exchange">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/invester/cryptocurrency/cryptocurrency_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">転売リスト.excel</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">転売リスト.excel</span>
                )}

              </div>
            </Link>
        
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterShopify() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_buppan}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./shopify_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/buppan/shopify/shopify_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Shopifyとは</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Shopifyとは</span>
                )}

              </div>
            </Link>
            <Link href="./shopify_store_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/buppan/shopify/shopify_store_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ネットショップ制作</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ネットショップ制作</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterexcel() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/sidebusiness/blog/blog">
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./blog_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">実務の表示形式</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">実務の表示形式</span>
                )}

              </div>
            </Link>
            <Link href="./blog_seo_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_seo_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">日付や時刻を表す関数をマスターする</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">日付や時刻を表す関数をマスターする</span>
                )}

              </div>
            </Link>
            <Link href="./blog_writing_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_writing_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">グラフ攻略　縦棒グラフ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">グラフ攻略　縦棒グラフ</span>
                )}

              </div>
            </Link>
            <Link href="./blog_revision_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/blog/blog_revision_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">グラフ攻略　折れ線グラフ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">グラフ攻略　折れ線グラフ</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterReal() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_real}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./writting_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">文章校正</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">文章校正</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWrittinhg() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/sidebusiness/blog/blog">
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./writting_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">文章校正</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">文章校正</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterMarketing() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_marketing}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./marketing">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500"></span>
                ) : (
                  <span class="mx-3 text-2xl text-white"></span>
                )}
              </div>
            </Link>
            <Link href="./sns_marketing">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">SNSマーケティング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">SNSマーケティング</span>
                )}
              </div>
            </Link>
            <Link href="./twitter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Twitter</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Twitter</span>
                )}
              </div>
            </Link>
            <Link href="./evolution">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">進化論マーケティング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">進化論マーケティング</span>
                )}
              </div>
            </Link>
            <Link href="./1">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">マーケティング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">マーケティング</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterMovie() {
  const router = useRouter()
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href={back_movie}>
                <Button variant="ghost" size="icon" className="text-4xl">
                  <ArrowLeftCircle className="h-8 w-8 text-white" />
                </Button>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./writting_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500"></span>
                ) : (
                  <span class="mx-3 text-2xl text-white"></span>
                )}

              </div>
            </Link>
            <Link href="./thumbnail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/sidebusiness/blog/writting/writting_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">サムネイル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">サムネイル</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}