import { Header } from '../../components/header/header'
import { ChapterMypage } from '../../components/chapter/mypage/chapter_mypage'
import { useState, useEffect } from 'react'

export default function Mypage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <div className="fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterMypage />}
        </div>
        <div className="flex-1 ml-64 p-8">
          <h1 className="text-3xl font-bold mb-8">マイページへようこそ</h1>
          <div className="prose max-w-none">
            <p>
              このセクションでは、目標設定、進捗管理、収支管理など、
              あなたの成長をサポートするための様々な機能を提供します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
