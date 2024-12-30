import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'

export function Chapterchemical_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_chemical">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_chemical/stock_detail_brand_chemical' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">花王</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">花王</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_chemical_mitsui">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_chemical/stock_detail_brand_chemical_mitsui' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">三井化学</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">三井化学</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterelectronics_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_electronics">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_electronics/stock_detail_brand_electronics' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">三菱マテリアル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">三菱マテリアル</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_electronics_japan">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_electronics/stock_detail_brand_electronics_japan' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">日本ハネウェル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">日本ハネウェル</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterenergy_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_energy">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Exxon Mobil</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Exxon Mobil</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_energy_royal">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy_royal' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Royal Dutch shell</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Royal Dutch shell</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_energy_bp">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy_bp' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">BP</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">BP</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_energy_chevron">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy_chevron' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Chevron</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Chevron</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_energy_schlumberger">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy_schlumberger' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Schlumberger</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Schlumberger</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_energy_halliburton">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_energy/stock_detail_brand_energy_halliburton' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Halliburton</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Halliburton</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterfisheries_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_fisheries_forestry">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_fisheries_forestry/stock_detail_brand_fisheries_forestry' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ファーマーズ・ビジネス・ネットワーク(FBN)</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ファーマーズ・ビジネス・ネットワーク(FBN)</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_fisheries_forestry_oji">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_fisheries_forestry/stock_detail_brand_fisheries_forestry_oji' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">王子ホールディングス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">王子ホールディングス</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptergrocery_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_grocery">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_grocery/stock_detail_brand_grocery' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">キリンホールディングス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">キリンホールディングス</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_grocery_ajinomoto">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_grocery/stock_detail_brand_grocery_ajinomoto' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">味の素</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">味の素</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterrealstate_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_realestate">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_realestate/stock_detail_brand_realestate' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">三井不動産</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">三井不動産</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_realestate_sumitomo">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_realestate/stock_detail_brand_realestate_sumitomo' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">住友不動産</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">住友不動産</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterretailbusiness_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_retailbusiness">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/america/stock_detail_brand_retailbusiness/stock_detail_brand_retailbusiness' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">コストコ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">コストコ</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_retailbusiness_inditex">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_retailbusiness/stock_detail_brand_retailbusiness_inditex' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">INDITEX</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">INDITEX</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_retailbusiness_amazon">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_retailbusiness/stock_detail_brand_retailbusiness_amazon' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Amazon</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Amazon</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterservice_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_service">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_service/stock_detail_brand_service' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">日本郵政</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">日本郵政</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_service_recruit">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_service/stock_detail_brand_service_recruit' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">リクルートホールディングス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">リクルートホールディングス</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptershipping_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_shipping">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/america/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Tesla</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Tesla</span>
                )}
              </div>
            </Link>
            <Link href="stock_detail_brand_shipping_gm">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_shipping/stock_detail_brand_shipping_gm' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">GM</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">GM</span>
                )}
              </div>
            </Link>
            <Link href="stock_detail_brand_shipping_ford">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_shipping/stock_detail_brand_shipping_ford' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Ford</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Ford</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterbank_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_bank">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_bank/stock_detail_brand_bank' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ゆうちょ銀行</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ゆうちょ銀行</span>
                )}
              </div>
            </Link>
            <Link href="stock_detail_brand_bank_ufj">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_bank/stock_detail_brand_bank_ufj' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">三菱UFJ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">三菱UFJ</span>
                )}
              </div>
            </Link>
            <Link href="stock_detail_brand_bank_smfg">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_bank/stock_detail_brand_bank_smfg' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">三井住友フィナンシャルグループ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">三井住友フィナンシャルグループ</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptershipping_marine_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_shipping_marine">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping_marine/stock_detail_brand_shipping_marine' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">川崎汽船</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">川崎汽船</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_shipping_marine_mitsui">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping_marine/stock_detail_brand_shipping_marine_mitsui' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">商船三井</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">商船三井</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptersteel_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_steel">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_steel/stock_detail_brand_steel' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">JFEホールディングス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">JFEホールディングス</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_steel_japan">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_steel/stock_detail_brand_steel_japan' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">日本製鉄</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">日本製鉄</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptertechnology_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_technology">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/america/stock_detail_brand_telecommunications/stock_detail_brand_technology' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">スクエア</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スクエア</span>
                )}
              </div>
            </Link>
           
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptertelecommunications_america() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    
    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/invester/stock/stock_detail_brand_sector_america">
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./stock_detail_brand_telecommunications">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/invester/stock/japan/stock_detail_brand_telecommunications/stock_detail_brand_telecommunications' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">テンセント</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">テンセント</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_telecommunications_amc">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/america/stock_detail_brand_telecommunications/stock_detail_brand_telecommunications_amc' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">AMC Entertainment</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">AMC Entertainment</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_telecommunications_softbank">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 ">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_telecommunications/stock_detail_brand_telecommunications_softbank' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Softbank</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Softbank</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}