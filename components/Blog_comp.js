import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'

export function File() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FileReader</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Nextauth() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nextauth</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function JWT() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JWTトークン</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Recoil() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recoil</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Map() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">mapメソッド</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Moralis() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Moralis</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Netlify() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Netlify</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Openbusiness() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">開業</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Blog_c() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ブログ</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Zustand() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React状態管理ライブラリZustand</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Pathname() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">usePathname</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function VSCode() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VS Codeの設定</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Nodejs() {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function Firebase() {
  const router = useRouter()
  console.log(router.pathname)
  return (
<div class="flex flex-nowrap">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FirebaseでWebアプリをデプロイする</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          記事を読む
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export function ChapterPython4() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_python_chapter">
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
            <Link href="./engineer_python_detail_fx">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/python/3/engineer_python_detail_fx' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">株価を取得、グラフチャート表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">株価を取得、グラフチャート表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_python_detail_settlement">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/python/3/engineer_python_detail_settlement' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">決算情報を取得</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">決算情報を取得</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_python_detail_industry">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/python/3/engineer_python_detail_industry' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">業種別の株価を一覧で確認</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">業種別の株価を一覧で確認</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterPython5() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_python_chapter">
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
            <Link href="./">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/python/3/engineer_python_detail_fx' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Streamlit</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Streamlit</span>
                )}
              </div>
            </Link>
          
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterNodejs() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_nodejs_chapter">
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
            <Link href="./engineer_nodejs_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Node.jsって何？</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Node.jsって何？</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_nodejs_detail_development">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail_development' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">開発環境の構築</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">開発環境の構築</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_nodejs_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_urls">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_urls' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">urls.pyファイル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>engineer_django_detail_urls
            <Link href="./engineer_django_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>engineer_django_detail_urls
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterExpress() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_nodejs_chapter">
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
            <Link href="./engineer_nodejs_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Expressって何？</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Expressって何？</span>
                )}
              </div>
            </Link>
            <Link href="./nodejs_detail_development">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail_development' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">開発環境の構築</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">開発環境の構築</span>
                )}
              </div>
            </Link>
            <Link href="./nodejs_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/nodejs/0/engineer_nodejs_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>
            <Link href="./nodejs_detail_ejs">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_nodejs_detail_ejs' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ejs</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ejs</span>
                )}
              </div>
            </Link>
            <Link href="./nodejs_detail_middle">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ミドルウェア</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ミドルウェア</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterjavascript() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <Link href="/engineer/engineer_javascript_chapter">
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
            <Link href="./javascript_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">JavaScriptとは</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">JavaScriptとは</span>
                )}
              </div>
            </Link>
            <Link href="./javascript_detail_trans">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_trans' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">モジュールバンドラー、トランスパイラ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">モジュールバンドラー、トランスパイラ</span>
                )}

              </div>
            </Link>
            <Link href="./javascript_detail_let">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_let' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">変数と定数</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">変数と定数</span>
                )}

              </div>
            </Link>
            <Link href="./javascript_detail_data">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_data' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">データ型の種類</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">データ型の種類</span>
                )}

              </div>
            </Link>
            <Link href="./javascript_detail_operator">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_operator' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">演算子の種類</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">演算子の種類</span>
                )}

              </div>
            </Link>
            <Link href="./javascript_detail_script">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_script' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">記述</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">記述</span>
                )}
              </div>
            </Link>
            <Link href="./javascript_detail_function">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_function' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">関数</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">関数</span>
                )}
              </div>
            </Link>
            <Link href="./javascript_detail_for">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_for' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">反復処理</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">反復処理</span>
                )}
              </div>
            </Link>
            <Link href="./javascript_detail_promise">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_promise' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">非同期処理</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">非同期処理</span>
                )}
              </div>
            </Link>
            <Link href="./javascript_detail_rest">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/javascript/javascript/engineer_javascript_detail_rest' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">REST</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">REST</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterjavascript_google() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_javascript_chapter">
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
          <Link href="./engineer_javascript_detail_google">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/javascript/google/engineer_javascript_detail_google' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Google Chart</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Google Chart</span>
                )}
                  </div>
                </Link>
                <Link href="./engineer_javascript_detail_onchart">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/javascript/google/engineer_javascript_detail_onchart' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">組織図</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">組織図</span>
                )}
              
                  </div>
                </Link>
                <Link href="./life_detail_harvard_exercise">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    {router.pathname == '/wisdom_library/life/harvard/life_detail_harvard_exercise' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">タイムライン</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">タイムライン</span>
                )}
      
                  </div>
                </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterJspreadsheet() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_javascript_chapter">
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
            <Link href="./engineer_jspreadsheet_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/jspreadsheet/engineer_jspreadsheet_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">スプレッドシートとJspreadsheet</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スプレッドシートとJspreadsheet</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_jspreadsheet2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/jspreadsheet/engineer_jspreadsheet2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">テーブルの内容を保存する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">テーブルの内容を保存する</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_jspreadsheet3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
               
                {router.pathname == '/engineer/jspreadsheet/engineer_jspreadsheet3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">CSVデータを読み込む</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">CSVデータを読み込む</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_jspreadsheet4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              
                {router.pathname == '/engineer/jspreadsheet/engineer_jspreadsheet4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">チャートデータの更新</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">チャートデータの更新</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">タイトルと凡例の表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">タイトルと凡例の表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">折れ線グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">折れ線グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">円グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">円グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">CSVファイルを利用する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">CSVファイルを利用する</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterChartjs() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_javascript_chapter">
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
            <Link href="./engineer_chartjs_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_chartjs_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Chart.jsでチャートを表示する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Chart.jsでチャートを表示する</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/engineer_chartjs2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">複数のデータセットを表示する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">複数のデータセットを表示する</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_chartjs3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">チャートのカラーを設定しよう</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">チャートのカラーを設定しよう</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              
                {router.pathname == '/engineer/engineer_chartjs4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">チャートデータの更新</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">チャートデータの更新</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">タイトルと凡例の表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">タイトルと凡例の表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">折れ線グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">折れ線グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">円グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">円グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">CSVファイルを利用する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">CSVファイルを利用する</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterLinux() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_site_chapter">
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
            <Link href="./linux_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/Linux/1/linux_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Linuxって何？</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Linuxって何？</span>
                )}
              </div>
            </Link>
            <Link href="./linux_detail2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/Linux/1/linux_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Linuxコマンド</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Linuxコマンド</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterHtml() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_html_chapter">
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
            <Link href="./engineer_html_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_html_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">HTMLに触れてみよう</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">HTMLに触れてみよう</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_shipping">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">見出しと段落</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">見出しと段落</span>
                )}
              </div>
            </Link>
            <Link href="./test4">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
               
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">リンク</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">リンク</span>
                )}
              </div>
            </Link>
            <Link href="./engel_investment/engel_investment">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">画像</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像</span>
                )}
              </div>
            </Link>
            <Link href="./option/option">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">リスト</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">リスト</span>
                )}
              </div>
            </Link>
            <Link href="./option/option">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">文字の色</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">文字の色</span>
                )}
              </div>
            </Link>
            <Link href="./option/option">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">文字の大きさと種類</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">文字の大きさと種類</span>
                )}
              </div>
            </Link>
            <Link href="./option/option">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">高さと幅と背景の色</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">高さと幅と背景の色</span>
                )}
              </div>
            </Link>
            <Link href="./option/option">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">タグに名前をつける</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">タグに名前をつける</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterHtml2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_html_chapter">
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
            <Link href="./engineer_html_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_html_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">エレメント</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">エレメント</span>
                )}
              </div>
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterGit() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_git_chapter">
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
            <Link href="./engineer_git_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_git_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">バージョン管理</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">バージョン管理</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_git_detail_repo">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_git_detail_repo' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">リポジトリ</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">リポジトリ</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterGit2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_python_chapter">
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
            <Link href="./engineer_git_detail_2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/git/2/engineer_git_detail_2' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Gitインストール</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Gitインストール</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_python_detail_jupyter">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/python/engineer_python_detail_jupyter' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Jupyter Notebook</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Jupyter Notebook</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_python_detail_function">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
               
                {router.pathname == '/engineer/python/engineer_python_detail_function' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">関数</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">関数</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              
                {router.pathname == '/engineer/python/engineer_python_detail_jupyter' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">チャートデータの更新</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">チャートデータの更新</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">タイトルと凡例の表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">タイトルと凡例の表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">折れ線グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">折れ線グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">円グラフの表示</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">円グラフの表示</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chartjs8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/engineer_chartjs8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">CSVファイルを利用する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">CSVファイルを利用する</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptergasscript() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          <Link href="./engineer_gas_detail_script">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_gas_detail_script' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">コンテナバインドスクリプトの作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">コンテナバインドスクリプトの作成</span>
                )}
                  </div>
                </Link>
                <Link href="./engineer_gas_detail_scripteditor">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_gas_detail_scripteditor' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">スクリプトエディタの使い方</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スクリプトエディタの使い方</span>
                )}
              
                  </div>
                </Link>
                <Link href="./life_detail_harvard_exercise">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    {router.pathname == '/wisdom_library/life/harvard/life_detail_harvard_exercise' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Spreadsheetサービス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Spreadsheetサービス</span>
                )}
      
                  </div>
                </Link>
                
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chaptergas() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          <Link href="./life_detail_harvard">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_gas_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Google Apps Scriptとは</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Google Apps Scriptとは</span>
                )}
                  </div>
                </Link>
                <Link href="./engineer_gas_script_detail">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_gas_script_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">スクリプトの種類</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スクリプトの種類</span>
                )}
              
                  </div>
                </Link>
                <Link href="./life_detail_harvard_exercise">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    {router.pathname == '/wisdom_library/life/harvard/life_detail_harvard_exercise' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">運動をする</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">運動をする</span>
                )}
      
                  </div>
                </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterGallery() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_site_chapter">
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
            <Link href="./engineer_gallery_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">はじめに</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">はじめに</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail2' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景に動画を設置する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景に動画を設置する</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
               
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail3' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">マルチカラムレイアウト</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">マルチカラムレイアウト</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail4">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail4' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">マルチカラムレイアウト2</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">マルチカラムレイアウト2</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail5">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail5' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">フィルターで画像の色を変える</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">フィルターで画像の色を変える</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail6">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail6' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">カーソルを合わせると画像を拡大</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">カーソルを合わせると画像を拡大</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail7">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail7' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">要素に影をつける</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">要素に影をつける</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail8">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail8' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ライトボックスで画面いっぱいに表</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ライトボックスで画面いっぱいに表</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail9">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail9' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">アニメーション</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">アニメーション</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_gallery_detail10">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                
                {router.pathname == '/engineer/site/gallery/engineer_gallery_detail10' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ダークモードに対応させる</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ダークモードに対応させる</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterdockerscript() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          <Link href="./engineer_docker_detail_script">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_docker_detail_script' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">コンテナバインドスクリプトの作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">コンテナバインドスクリプトの作成</span>
                )}
                  </div>
                </Link>
                <Link href="./engineer_docker_detail_scripteditor">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_docker_detail_scripteditor' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">スクリプトエディタの使い方</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スクリプトエディタの使い方</span>
                )}
              
                  </div>
                </Link>
                <Link href="./life_detail_harvard_exercise">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    {router.pathname == '/wisdom_library/life/harvard/life_detail_harvard_exercise' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Spreadsheetサービス</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Spreadsheetサービス</span>
                )}
      
                  </div>
                </Link>
                
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterdocker() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          <Link href="./life_detail_harvard">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_docker_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Google Apps Scriptとは</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Google Apps Scriptとは</span>
                )}
                  </div>
                </Link>
                <Link href="./engineer_docker_script_detail">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_docker_script_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">スクリプトの種類</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">スクリプトの種類</span>
                )}
              
                  </div>
                </Link>
                <Link href="./engineer_docker_detail_file">
                  <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                    </svg>
                    {router.pathname == '/engineer/engineer_docker_detail_file' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Dockerfile</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Dockerfile</span>
                )}
      
                  </div>
                </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDjangoREST() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_django_chapter">
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
            <Link href="./engineer_aws_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/Django/0/engineer_django_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Django REST Frameworkって何？</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Django REST Frameworkって何？</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_development">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_development' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">開発環境の構築</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">開発環境の構築</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>
          
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDjango() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_django_chapter">
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
            <Link href="./engineer_aws_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/Django/0/engineer_django_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Djangoって何？</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Djangoって何？</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_development">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_development' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">開発環境の構築</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">開発環境の構築</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_django_detail_urls">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_urls' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">urls.pyファイル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>engineer_django_detail_urls
            <Link href="./engineer_django_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/engineer/Django/0/engineer_django_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}
              </div>
            </Link>engineer_django_detail_urls
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_design_chapter">
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
            <Link href="./engineer_chapter1_1_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_1_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真下背景色のずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真下背景色のずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真の背景斜線ずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真の背景斜線ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真のドットパターン背景ずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真のドットパターン背景ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">被写体の影ずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">被写体の影ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真に斜線枠</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真に斜線枠</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">角に三角装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">角に三角装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">角に切り込み</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">角に切り込み</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ロゴ画像の白背景を透過させる</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ロゴ画像の白背景を透過させる</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_9_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_9_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真フィルター</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真フィルター</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_10_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_10_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">画像の形状を変える</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像の形状を変える</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_11_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_11_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">画像をテキストのかたちにクリッピング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像をテキストのかたちにクリッピング</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_design_chapter">
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
            <Link href="./engineer_chapter1_1_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_1_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">2色の線を重ねた見出し</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">2色の線を重ねた見出し</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">左右に線を配置した見出し</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真の背景斜線ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真のドットパターン背景ずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真のドットパターン背景ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">被写体の影ずらし装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">被写体の影ずらし装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真に斜線枠</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真に斜線枠</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">角に三角装飾</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">角に三角装飾</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">角に切り込み</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">角に切り込み</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ロゴ画像の白背景を透過させる</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ロゴ画像の白背景を透過させる</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_9_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_9_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真フィルター</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真フィルター</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_10_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_10_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">画像の形状を変える</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像の形状を変える</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter1_11_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/1/engineer_chapter1_11_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">画像をテキストのかたちにクリッピング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像をテキストのかたちにクリッピング</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign3() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_design_chapter">
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
            <Link href="./engineer_chapter3_1_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_1_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ずらした斜線背景と背景色</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ずらした斜線背景と背景色</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">ずらした枠線と背景色</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ずらした枠線と背景色</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">斜線枠と背景色</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">斜線枠と背景色</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">グラデーション</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">グラデーション</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色と線</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色と線</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色と点と線</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色と点と線</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_7_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_7_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色とシンプル矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色とシンプル矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_8_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_8_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色とシンプル矢印に丸背景</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色とシンプル矢印に丸背景</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_9_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_9_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色と矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色と矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_10_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_10_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色と別窓</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色と別窓</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_11_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_11_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">背景色と角に三角矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">背景色と角に三角矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_12_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_12_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">円とシンプル矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">円とシンプル矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_13_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_13_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">歪んだ円とシンプル矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">歪んだ円とシンプル矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_14_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_14_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">テキストに重ねた円とシンプル矢印</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">テキストに重ねた円とシンプル矢印</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter3_15_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/3/engineer_chapter3_15_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">円と線</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">円と線</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign4() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_design_chapter">
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
            <Link href="./engineer_chapter4_1_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_1_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Flexboxレイアウト</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Flexboxレイアウト</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter4_2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">写真だけ画面いっぱいに配置</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">写真だけ画面いっぱいに配置</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter4_3_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_3_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">Pinterest風カードレイアウト</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Pinterest風カードレイアウト</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter4_4_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_4_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">モダンな上下左右中央配置</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">モダンな上下左右中央配置</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter4_5_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_5_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">簡易カルーセルスライダー</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">簡易カルーセルスライダー</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter4_6_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/4/engineer_chapter4_6_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">簡易アコーディオン</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">簡易アコーディオン</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterDesign5() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_design_chapter">
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
            <Link href="./engineer_chapter5_1_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/5/engineer_chapter5_1_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">お問い合わせフォーム</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">お問い合わせフォーム</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_chapter5_2_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/web_design/5/engineer_chapter5_2_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">フッター</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">フッター</span>
                )}
              </div>
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterCommand() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
            <Link href="/engineer/engineer_html_chapter">
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
            <Link href="./engineer_html_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
               
                {router.pathname == '/engineer/engineer_html_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">HTMLに触れてみよう</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">HTMLに触れてみよう</span>
                )}
              </div>
            </Link>
            <Link href="./stock_detail_brand_shipping">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>

                {router.pathname == '/invester/stock/japan/stock_detail_brand_shipping/stock_detail_brand_shipping' ? (
                  <span class="mx-3 text-2xl text-white bg-red-500">VS Code ショートカット</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">VS Code ショートカット</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./1">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">クローリング・スクレイピング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">クローリング・スクレイピング</span>
                )}
              </div>
            </Link>
            <Link href="./scraping_wget">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Wget</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Wget</span>
                )}

              </div>
            </Link>  
            <Link href="./scraping">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Selenium</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Selenium</span>
                )}
              </div>
            </Link>        
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          <Link href="./python">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Python</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Python</span>
                )}
              </div>
            </Link>
            <Link href="./scrapy">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Scrapy</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Scrapy</span>
                )}
              </div>
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping3() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./1">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Beautiful Soup</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Beautiful Soup</span>
                )}
              </div>
            </Link>
            <Link href="./2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">XMLのスクレイピング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">XMLのスクレイピング</span>
                )}
              </div>
            </Link>
            <Link href="./3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">データベースに保存する</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">データベースに保存する</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping4() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./engineer_react_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Reactとは</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Reactとは</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_react_detail_project">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_project' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">プロジェクト作成</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">プロジェクト作成</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_base">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/1/engineer_scraping1_1' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Selenium</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Selenium</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_base_dom">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_base_dom' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">データベースに保存</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">データベースに保存</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_base_script">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_base_script' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">React基礎(スクリプト)</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">React基礎(スクリプト)</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_base_jsx">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_base_jsx' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">React基礎(JSX)</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">React基礎(JSX)</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_css">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_css' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">React(CSS)</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">React(CSS)</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_react_detail_use">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/react/0/engineer_react_detail_use' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">useState・useEffect</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">useState・useEffect</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping5() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./1">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_1' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">フレームワークScrapy</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">フレームワークScrapy</span>
                )}
              </div>
            </Link>
            <Link href="./2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_2' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">データセットの取得と活用</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">データセットの取得と活用</span>
                )}

              </div>
            </Link>
            <Link href="./3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_2' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">gihyo.jpのスクレイピング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">gihyo.jpのスクレイピング</span>
                )}

              </div>
            </Link> 
          </nav>
        </div>
      </div>
    </div>
  )
}

export function ChapterWebscraping6() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./engineer_scraping6_1">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_1' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">フレームワークScrapy</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">フレームワークScrapy</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_scraping6_2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_2' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Spiderの作成と実行</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Spiderの作成と実行</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_scraping6_3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_3' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">実践的なクローリング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">実践的なクローリング</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_scraping6_4">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_4' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">データベースに保存</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">データベースに保存</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_scraping6_5">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/web_scraping/6/engineer_scraping6_5' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">React基礎(スクリプト)</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">React基礎(スクリプト)</span>
                )}

              </div>
            </Link>
          
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterdatascience() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./engineer_datascience">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">統計学</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">統計学</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience2' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">統計学2</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">統計学2</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience3' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">統計学3</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">統計学3</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">Dockerの準備</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">Dockerの準備</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail_linear">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_linear' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">線形回帰</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">線形回帰</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_datascience_detail_normal">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_normal' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">正規方程式</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">正規方程式</span>
                )}

              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function Chapterdatascience2() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="bg-gray-200">
      <div className="bg-gray-900">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
            <Link href="./engineer_datascience_detail2">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail2' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">教師あり学習</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">教師あり学習</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail_linear">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_linear' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">線形回帰</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">線形回帰</span>
                )}

              </div>
            </Link>
            <Link href="./engineer_datascience_detail_normal">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_normal' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">正規方程式</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">正規方程式</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail_logistic">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_logistic' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">ロジスティック回帰モデル</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">ロジスティック回帰モデル</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail_image">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_image' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">画像解析</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">画像解析</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail3">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail3' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">教師なし学習</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">教師なし学習</span>
                )}
              </div>
            </Link>
            <Link href="./engineer_datascience_detail_scale">
              <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
                {router.pathname == '/engineer/datascience/1/engineer_datascience_detail_scale' ? (
                  <span class="mx-3 text-2xl text-white bg-gray-500">特徴量スケーリング</span>
                ) : (
                  <span class="mx-3 text-2xl text-white">特徴量スケーリング</span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}