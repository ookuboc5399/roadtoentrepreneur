import { Header } from '../../components/header/header'
import { ChapterFuture } from '../../components/chapter/future/chapter_future'
import { useState, useEffect } from 'react'

export default function FutureWorld() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-16">
        <div className="fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterFuture />}
        </div>
        <div className="flex-1 ml-64 p-8">
          <h1 className="text-3xl font-bold mb-8">未来の世界へようこそ</h1>
          <div className="prose max-w-none">
            <p>
              このセクションでは、AI、Web3.0、メタバースなど、
              私たちの未来を形作る重要な技術トレンドについて探求します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
