import { Header } from '../../components/header/header'
import { Chapterinvester } from '../../components/chapter/invester/chapter_invester'
import YouTubeSection from '../../components/youtube/YouTubeSection'
import { youtubeVideos } from '../../data/youtubeVideos'
import { useState, useEffect } from 'react'

export default function InvesterEntrepreneur() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <div className="w-64 flex-shrink-0">
          {mounted && <Chapterinvester />}
        </div>
        <div className="flex-1">
          {/* メインコンテンツエリア */}
          <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">投資・起業コンテンツへようこそ</h1>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                このセクションでは、投資や起業に関する重要な知識や
                実践的なアプローチについて探求します。
                専門家による教育動画で、あなたの投資・起業スキルを向上させましょう。
              </p>
            </div>
          </div>
          
          {/* YouTube動画セクション */}
          <YouTubeSection videos={youtubeVideos} />
          
          {/* 追加情報セクション */}
          <div className="p-8 bg-white border-t">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">学習のポイント</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">基礎から応用まで</h3>
                  <p className="text-blue-700">
                    初心者向けの基本概念から、上級者向けの高度な戦略まで、段階的に学習できます。
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">実践的な内容</h3>
                  <p className="text-green-700">
                    理論だけでなく、実際の投資・起業に役立つ実践的なノウハウを提供します。
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">最新トレンド</h3>
                  <p className="text-purple-700">
                    暗号通貨、DeFi、最新の投資手法など、時代の先端を行く情報を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}