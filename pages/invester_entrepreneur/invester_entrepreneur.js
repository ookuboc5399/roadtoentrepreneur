import { Header } from '../../components/header/header'
import { Chapterinvester } from '../../components/chapter/invester/chapter_invester'
import { useState, useEffect } from 'react'

export default function InvesterEntrepreneur() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <div className="w-64 flex-shrink-0">
          {mounted && <Chapterinvester />}
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">投資家・起業家へようこそ</h1>
          <div className="prose max-w-none">
            <p>
              このセクションでは、投資や起業に関する重要な知識や
              実践的なアプローチについて探求します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}