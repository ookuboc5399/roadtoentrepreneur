import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'
import { withAdminAuth } from '../../lib/auth'
import { User } from '../../lib/supabase'
import LibraryManagement from '../../components/admin/LibraryManagement'
import { 
  Users, 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  LineChart,
  Brain,
  Target,
  BookOpen,
  DollarSign,
  Home
} from 'lucide-react'

interface Article {
  id: string
  title: string
  category: string
  sub_category: string
  slug: string
  created_at: string
}

interface UserData {
  id: string
  email: string
  first_name: string
  last_name: string
  role: string
  created_at: string
  subscription: any
}

interface AdminIndexProps {
  user?: User
}

// チャプター構造の定義
const chapterStructure = [
  {
    id: 'stock',
    title: '株式投資',
    icon: <LineChart className="h-4 w-4" />,
    subsections: [
      { title: '株式投資とは', slug: 'stock-detail' },
      { title: '株式投資の始め方', slug: 'stock-start' },
      { title: '銘柄の選び方', slug: 'stock-pick' },
      { title: 'チャート分析', slug: 'stock-chart' }
    ]
  },
  {
    id: 'fx',
    title: 'FX',
    icon: <LineChart className="h-4 w-4" />,
    subsections: [
      { title: 'FXとは', slug: 'fx-detail' },
      { title: 'MT4の準備', slug: 'fx-start' },
      { title: 'トレードサポート', slug: 'trade-support' }
    ]
  },
  {
    id: 'cryptocurrency',
    title: '仮想通貨',
    icon: <DollarSign className="h-4 w-4" />,
    subsections: [
      { title: '仮想通貨とは', slug: 'cryptocurrency-detail' },
      { title: '口座開設', slug: 'account-support' },
      { title: 'ビットコイン', slug: 'btc' },
      { title: 'イーサリアム', slug: 'eth' },
      { title: '仮想通貨リサーチ', slug: 'crypto-research' }
    ]
  },
  {
    id: 'bond',
    title: '債権・コモディディ',
    icon: <BookOpen className="h-4 w-4" />,
    subsections: [
      { title: '債権について', slug: 'bond-detail' },
      { title: 'コモディティについて', slug: 'commodity-detail' },
      { title: '金', slug: 'gold' },
      { title: '銀', slug: 'silver' },
      { title: '石油', slug: 'oil' }
    ]
  },
  {
    id: 'management',
    title: '経営',
    icon: <BookOpen className="h-4 w-4" />,
    subsections: [
      { title: '飲食店経営について', slug: 'restaurant-management' },
      { title: 'FL比率', slug: 'fl-ratio' },
      { title: 'プロダクトアウトとマーケットイン', slug: 'product-market' }
    ]
  },
  {
    id: 'mind',
    title: 'マインド',
    icon: <Brain className="h-4 w-4" />,
    subsections: [
      { title: 'お金持ちの思考法', slug: 'thinking-like-a-rich' },
      { title: '勝つための準備', slug: 'preparing-to-win' },
      { title: '他人に認めてもらう必要はない', slug: 'no-need-for-approval' },
      { title: '品格を備える', slug: 'cultivating-dignity' },
      { title: '孤独に耐える', slug: 'enduring-solitude' },
      { title: 'トレードで大事なこと', slug: 'important-in-trade' },
      { title: 'ビジョナリーカンパニー', slug: 'visionary-company' },
      { title: 'お金持ちになるために', slug: 'becoming-rich' },
      { title: '時代の潮流に乗る', slug: 'riding-the-trend' },
      { title: 'やってのける', slug: 'getting-it-done' },
      { title: '資金管理とリスクリワード', slug: 'fund-management-risk-reward' }
    ]
  },
  {
    id: 'ea',
    title: 'EA',
    icon: <Target className="h-4 w-4" />,
    subsections: [
      { title: 'EA1(MACD・Moving Average)', slug: 'ea_macd_ma' },
      { title: 'EA2(一目均衡表システム)', slug: 'ea_ichimoku' },
      { title: 'EA3', slug: 'ea3' },
      { title: 'EA4(平均足システム・NY_Box)', slug: 'ea4' },
      { title: 'EA5(「早起きは5ピップの得」システム)', slug: 'ea5' },
      { title: 'EA6(ボリンジャーバンドシステム)', slug: 'ea6' },
      { title: 'EA7(定型文)', slug: 'ea7' }
    ]
  },
  {
    id: 'tool',
    title: 'tool',
    icon: <Target className="h-4 w-4" />,
    subsections: [
      { title: '経済指標', slug: 'ecnomic_indicators' },
      { title: '自動売買', slug: 'auto_fx' },
      { title: '企業分析', slug: 'company_analysis' }
    ]
  }
]

function AdminIndex({ user }: AdminIndexProps) {
  const [activeTab, setActiveTab] = useState<'articles' | 'users' | 'library'>('articles')
  const [articles, setArticles] = useState<Article[]>([])
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedChapter, setSelectedChapter] = useState<string>('all')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      
      // 記事とユーザーの両方を取得
      const [articlesResult, usersResult] = await Promise.all([
        supabase.from('articles').select('*').order('created_at', { ascending: false }),
        supabase.from('users').select('*').order('created_at', { ascending: false })
      ])

      if (articlesResult.error) throw articlesResult.error
      if (usersResult.error) throw usersResult.error

      setArticles(articlesResult.data || [])
      setUsers(usersResult.data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  // チャプター別に記事をフィルタリング
  const filteredArticles = selectedChapter === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedChapter)

  // チャプター別の記事数を取得
  const getArticleCount = (category: string) => {
    return articles.filter(article => article.category === category).length
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">管理者ダッシュボード</h1>
              <Link 
                href="/" 
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <Home className="h-4 w-4 mr-2" />
                ホームに戻る
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin/new" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                新規記事作成
              </Link>
              <button
                onClick={async () => {
                  await supabase.auth.signOut()
                  window.location.href = '/admin/login'
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                ログアウト
              </button>
            </div>
          </div>
          {user && (
            <div className="text-center py-2">
              <p className="text-sm text-gray-600">
                ログイン中: {user.email} ({user.first_name} {user.last_name})
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full py-6 px-4 sm:px-6 lg:px-8">
        {/* タブ */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('articles')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === 'articles'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="h-4 w-4 mr-2" />
              記事管理 ({articles.length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="h-4 w-4 mr-2" />
              ユーザー管理 ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === 'library'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              図書館管理
            </button>
          </nav>
        </div>

        {/* 記事管理タブ */}
        {activeTab === 'articles' && (
          <div>
            {/* チャプター選択 */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <label className="text-sm font-medium text-gray-700">チャプター:</label>
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">全ての記事 ({articles.length})</option>
                  {chapterStructure.map((chapter) => (
                    <option key={chapter.id} value={chapter.id}>
                      {chapter.title} ({getArticleCount(chapter.id)})
                    </option>
                  ))}
                </select>
              </div>

              {/* チャプター別の記事一覧 */}
              {selectedChapter === 'all' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chapterStructure.map((chapter) => (
                    <div key={chapter.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center mb-4">
                        {chapter.icon}
                        <h3 className="text-lg font-semibold ml-2">{chapter.title}</h3>
                        <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {getArticleCount(chapter.id)}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {chapter.subsections.map((subsection) => {
                          const article = articles.find(a => a.slug === subsection.slug)
                          return (
                            <div key={subsection.slug} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{subsection.title}</span>
                              <div className="flex items-center space-x-2">
                                {article ? (
                                  <>
                                    <Link
                                      href={`/admin/edit/${article.id}`}
                                      className="text-blue-600 hover:text-blue-800"
                                    >
                                      <Edit className="h-3 w-3" />
                                    </Link>
                                    <Link
                                      href={`/invester_entrepreneur/${chapter.id}/${subsection.slug}`}
                                      target="_blank"
                                      className="text-green-600 hover:text-green-800"
                                    >
                                      <Eye className="h-3 w-3" />
                                    </Link>
                                  </>
                                ) : (
                                  <Link
                                    href={`/admin/new?category=${chapter.id}&slug=${subsection.slug}&title=${encodeURIComponent(subsection.title)}`}
                                    className="text-gray-400 hover:text-gray-600"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Link>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">
                      {chapterStructure.find(c => c.id === selectedChapter)?.title} の記事
                    </h3>
                  </div>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          タイトル
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          スラッグ
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          作成日
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredArticles.map((article) => (
                        <tr key={article.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{article.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{article.slug}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {new Date(article.created_at).toLocaleDateString('ja-JP')}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-3">
                              <Link 
                                href={`/admin/edit/${article.id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <Edit className="h-4 w-4" />
                              </Link>
                              <Link
                                href={`/invester_entrepreneur/${article.category}/${article.slug}`}
                                target="_blank"
                                className="text-green-600 hover:text-green-900"
                              >
                                <Eye className="h-4 w-4" />
                              </Link>
                              <button
                                onClick={() => {
                                  if (confirm('本当に削除しますか？')) {
                                    // 削除処理を実装
                                  }
                                }}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 図書館管理タブ */}
        {activeTab === 'library' && (
          <LibraryManagement />
        )}

        {/* ユーザー管理タブ */}
        {activeTab === 'users' && (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">ユーザー一覧</h3>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    名前
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    メールアドレス
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    権限
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    サブスクリプション
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    登録日
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.first_name} {user.last_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'admin' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role === 'admin' ? '管理者' : '一般ユーザー'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {user.subscription?.plan || 'free'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(user.created_at).toLocaleDateString('ja-JP')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => {
                          // ユーザー編集機能を実装
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        編集
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default withAdminAuth(AdminIndex) 