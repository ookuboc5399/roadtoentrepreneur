import { Header } from '../../../components/header/header'
import { ChapterFuture } from '../../../components/chapter/future/chapter_future'
import { FutureTimeline } from '../../../components/timeline/future-timeline'
import { useState, useEffect } from 'react'

export default function HistoryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="flex">
        <div className="w-64 flex-shrink-0">
          {mounted && <ChapterFuture />}
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8 text-white">世界の変遷</h1>
          <div className="max-w-4xl mx-auto">
            <FutureTimeline />
          </div>
        </div>
      </div>
    </div>
  )
} 