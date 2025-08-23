import { Header } from '../../components/header/header'
import { ChapterSidebusiness } from '../../components/chapter/sidebusiness/chapter_sidebusiness'
import { useState, useEffect } from 'react'

export default function Sidebusiness() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-16">
        <div className="fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterSidebusiness />}
        </div>
        <div className="flex-1 ml-64 p-8">
          <h1 className="text-3xl font-bold mb-8">副業の世界へようこそ</h1>
          <div className="prose max-w-none">
            <p>
              このセクションでは、動画制作、ブログ、物販、Excel、デザイン、マーケティング、不動産など、
              様々な副業の可能性について探求します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
