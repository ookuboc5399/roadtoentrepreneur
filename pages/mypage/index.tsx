import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withAuth } from '../../lib/auth'
import { Header_mypage } from '../../components/header/header'
import Layout from '../../components/Layout'

function MypageIndex() {
  const router = useRouter()

  useEffect(() => {
    // デフォルトでプロフィールページにリダイレクト
    router.replace('/mypage/account/profile')
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* リダイレクト中のローディング表示 */}
      <div className="flex justify-center items-center pt-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeader_mypageを使用
MypageIndex.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header_mypage />}>
      {page}
    </Layout>
  )
}

export default withAuth(MypageIndex)
