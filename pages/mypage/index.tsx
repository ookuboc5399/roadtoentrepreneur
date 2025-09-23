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
        {/* デスクトップ用サイドバー */}
        <div className="hidden lg:block fixed h-[calc(100vh-4rem)]">
          {mounted && <ChapterMypage />}
        </div>
        
        {/* メインコンテンツエリア */}
        <div className="flex-1 lg:ml-64 p-4 lg:p-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">マイページへようこそ</h1>
          <div className="prose max-w-none">
            <p className="text-sm lg:text-base">
              このセクションでは、目標設定、進捗管理、収支管理など、
              あなたの成長をサポートするための様々な機能を提供します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
