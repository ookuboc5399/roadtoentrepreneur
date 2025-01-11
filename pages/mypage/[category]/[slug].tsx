import { ChapterMypage } from '../../../components/chapter/mypage/chapter_mypage'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../../lib/auth'
import { Target, PieChart, UserCircle, CheckCircle2, TrendingUp, ListTodo, Wallet2, Receipt, PiggyBank, LineChart, UserCog, Shield, Bell, DollarSign, AlertTriangle } from 'lucide-react'
import { IncomeChart, IncomeList } from '../../../components/mypage/finance/income-chart'
import { ExpenseChart, ExpenseList } from '../../../components/mypage/finance/expense-chart'
import { BudgetPieChart, BudgetProgress, BudgetForm } from '../../../components/mypage/finance/budget-chart'
import { AssetTrendChart, AssetBreakdownChart, AssetSummary } from '../../../components/mypage/finance/assets-chart'
import { ProfileForm } from '../../../components/mypage/account/profile-form'
import { SecuritySettings } from '../../../components/mypage/account/security-settings'
import { NotificationSettings } from '../../../components/mypage/account/notification-settings'
import { GoalForm } from '../../../components/mypage/goals/goal-form'
import { GoalProgress } from '../../../components/mypage/goals/goal-progress'
import { ActionPlan } from '../../../components/mypage/goals/action-plan'
import { withAuth } from '../../../lib/auth'
import { Header_mypage } from '../../../components/header/header'
import Layout from '../../../components/Layout'

interface PageContent {
  title: string;
  icon: JSX.Element;
  description: string;
  content: JSX.Element;
}

function MypageContent() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { category, slug } = router.query
  const { user, updateProfile } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const getPageContent = (): PageContent => {
    const contents = {
      // 夢の実現
      'goal-setting': {
        title: '目標設定',
        icon: <Target className="h-6 w-6" />,
        description: '具体的な目標を設定し、実現への道筋を立てましょう。',
        content: (() => {
          const handleSubmit = (goal: any) => {
            console.log('Goal created:', goal);
            // TODO: 目標作成のAPI呼び出し
          };

          return (
            <div className="max-w-3xl mx-auto">
              <GoalForm onSubmit={handleSubmit} />
            </div>
          );
        })()
      },
      'progress': {
        title: '進捗管理',
        icon: <CheckCircle2 className="h-6 w-6" />,
        description: '目標達成に向けた進捗を管理・確認できます。',
        content: (() => {
          // サンプルデータ
          const sampleGoals = [
            {
              id: '1',
              title: 'プログラミングスキルの向上',
              description: 'Webアプリケーション開発の技術を習得する',
              deadline: '2024-06-30',
              category: 'skill',
              priority: 'high' as const,
              status: 'in_progress' as const,
              progress: 60,
              milestones: [
                { id: '1-1', title: 'HTML/CSSの基礎を学ぶ', completed: true },
                { id: '1-2', title: 'JavaScriptの基礎を学ぶ', completed: true },
                { id: '1-3', title: 'Reactの基礎を学ぶ', completed: true },
                { id: '1-4', title: 'Next.jsでアプリを作成', completed: false },
                { id: '1-5', title: 'TypeScriptを導入', completed: false },
              ],
            },
            {
              id: '2',
              title: '資格取得',
              description: '業務に関連する資格を取得する',
              deadline: '2024-09-30',
              category: 'career',
              priority: 'medium' as const,
              status: 'not_started' as const,
              progress: 0,
              milestones: [
                { id: '2-1', title: '参考書を購入', completed: false },
                { id: '2-2', title: '学習計画を立てる', completed: false },
                { id: '2-3', title: '模擬試験を受験', completed: false },
              ],
            },
          ];

          const handleUpdateGoal = (goal: any) => {
            console.log('Goal updated:', goal);
            // TODO: 目標更新のAPI呼び出し
          };

          return (
            <div className="max-w-4xl mx-auto">
              <GoalProgress goals={sampleGoals} onUpdateGoal={handleUpdateGoal} />
            </div>
          );
        })()
      },
      'action-plan': {
        title: 'アクションプラン',
        icon: <ListTodo className="h-6 w-6" />,
        description: '目標達成のための具体的な行動計画を立てましょう。',
        content: (() => {
          // サンプルデータ
          const sampleGoals = [
            { id: '1', title: 'プログラミングスキルの向上', category: 'skill' },
            { id: '2', title: '資格取得', category: 'career' },
          ];

          const sampleActions = [
            {
              id: '1',
              title: 'Reactの公式チュートリアルを完了',
              description: 'Reactの基本概念と使い方を学ぶ',
              deadline: '2024-04-15',
              status: 'in_progress' as const,
              goalId: '1',
              priority: 'high' as const,
            },
            {
              id: '2',
              title: '参考書を購入して学習開始',
              description: '書店で参考書を購入し、学習計画を立てる',
              deadline: '2024-04-20',
              status: 'pending' as const,
              goalId: '2',
              priority: 'medium' as const,
            },
          ];

          const handleAddAction = (action: any) => {
            console.log('Action added:', action);
            // TODO: アクション追加のAPI呼び出し
          };

          const handleUpdateAction = (action: any) => {
            console.log('Action updated:', action);
            // TODO: アクション更新のAPI呼び出し
          };

          const handleDeleteAction = (actionId: string) => {
            console.log('Action deleted:', actionId);
            // TODO: アクション削除のAPI呼び出し
          };

          return (
            <div className="max-w-4xl mx-auto">
              <ActionPlan
                actions={sampleActions}
                goals={sampleGoals}
                onAddAction={handleAddAction}
                onUpdateAction={handleUpdateAction}
                onDeleteAction={handleDeleteAction}
              />
            </div>
          );
        })()
      },

      // 収支管理
      'income': {
        title: '収入管理',
        icon: <Wallet2 className="h-6 w-6" />,
        description: '収入の記録と分析を行います。',
        content: (() => {
          // サンプルデータ
          const sampleData = [
            { date: '2024-01-15', amount: 280000, category: '給与' },
            { date: '2024-01-20', amount: 50000, category: '副業' },
            { date: '2024-02-15', amount: 280000, category: '給与' },
            { date: '2024-02-22', amount: 45000, category: '副業' },
            { date: '2024-03-15', amount: 280000, category: '給与' },
            { date: '2024-03-25', amount: 60000, category: '副業' },
          ];

          return (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">月間収入推移</h3>
                  <p className="text-sm text-gray-500">過去3ヶ月の収入推移を表示しています</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  収入を追加
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <IncomeChart data={sampleData} />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">収入履歴</h3>
                <IncomeList data={sampleData} />
              </div>
            </div>
          );
        })()
      },
      'expense': {
        title: '支出管理',
        icon: <Receipt className="h-6 w-6" />,
        description: '支出の記録と分析を行います。',
        content: (() => {
          // サンプルデータ
          const sampleData = [
            { date: '2024-01-05', amount: 80000, category: '家賃' },
            { date: '2024-01-10', amount: 30000, category: '食費' },
            { date: '2024-01-15', amount: 15000, category: '交通費' },
            { date: '2024-02-05', amount: 80000, category: '家賃' },
            { date: '2024-02-12', amount: 35000, category: '食費' },
            { date: '2024-02-18', amount: 12000, category: '交通費' },
            { date: '2024-03-05', amount: 80000, category: '家賃' },
            { date: '2024-03-15', amount: 32000, category: '食費' },
            { date: '2024-03-20', amount: 18000, category: '交通費' },
          ];

          return (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">月間支出推移</h3>
                  <p className="text-sm text-gray-500">過去3ヶ月の支出推移を表示しています</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  支出を追加
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ExpenseChart data={sampleData} />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">支出履歴</h3>
                <ExpenseList data={sampleData} />
              </div>
            </div>
          );
        })()
      },
      'budget': {
        title: '予算設定',
        icon: <PiggyBank className="h-6 w-6" />,
        description: '月間・年間の予算を設定します。',
        content: (() => {
          // サンプルデータ
          const sampleData = [
            { name: '家賃', budget: 80000, spent: 80000, color: '#3B82F6' },
            { name: '食費', budget: 50000, spent: 32000, color: '#10B981' },
            { name: '交通費', budget: 20000, spent: 18000, color: '#F59E0B' },
            { name: '光熱費', budget: 15000, spent: 12000, color: '#6366F1' },
            { name: '娯楽費', budget: 30000, spent: 35000, color: '#EC4899' },
          ];

          return (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">カテゴリー別予算配分</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <BudgetPieChart data={sampleData} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">予算の設定</h3>
                  <BudgetForm />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">予算の進捗状況</h3>
                <BudgetProgress data={sampleData} />
              </div>
            </div>
          );
        })()
      },
      'assets': {
        title: '資産状況',
        icon: <LineChart className="h-6 w-6" />,
        description: '現在の資産状況を確認できます。',
        content: (() => {
          // サンプルデータ - 資産推移
          const trendData = [
            { date: '2024-01', total: 2500000, cash: 800000, stocks: 1200000, crypto: 300000, other: 200000 },
            { date: '2024-02', total: 2650000, cash: 750000, stocks: 1300000, crypto: 400000, other: 200000 },
            { date: '2024-03', total: 2800000, cash: 700000, stocks: 1400000, crypto: 450000, other: 250000 },
          ];

          // 最新の資産データ
          const currentData = trendData[trendData.length - 1];

          // 資産内訳データ
          const breakdownData = [
            { name: '現金', value: currentData.cash, color: '#10B981' },
            { name: '株式', value: currentData.stocks, color: '#F59E0B' },
            { name: '暗号資産', value: currentData.crypto, color: '#6366F1' },
            { name: 'その他', value: currentData.other, color: '#EC4899' },
          ];

          return (
            <div className="space-y-8">
              <AssetSummary data={currentData} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">資産推移</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <AssetTrendChart data={trendData} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">資産内訳</h3>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <AssetBreakdownChart data={breakdownData} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">資産運用アドバイス</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    現在の資産配分は以下のようになっています：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>現金比率: {((currentData.cash / currentData.total) * 100).toFixed(1)}%</li>
                    <li>株式比率: {((currentData.stocks / currentData.total) * 100).toFixed(1)}%</li>
                    <li>暗号資産比率: {((currentData.crypto / currentData.total) * 100).toFixed(1)}%</li>
                    <li>その他: {((currentData.other / currentData.total) * 100).toFixed(1)}%</li>
                  </ul>
                  <p className="text-gray-600">
                    長期的な資産形成のために、以下の点を検討することをお勧めします：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>定期的な投資の継続</li>
                    <li>ポートフォリオの定期的な見直し</li>
                    <li>リスク分散の維持</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })()
      },

      // アカウント情報
      'profile': {
        title: 'プロフィール',
        icon: <UserCog className="h-6 w-6" />,
        description: 'プロフィール情報の確認と編集ができます。',
        content: (() => {
          const handleSubmit = async (profile: any) => {
            const result = await updateProfile({
              firstName: profile.firstName,
              lastName: profile.lastName,
              bio: profile.bio,
              occupation: profile.occupation,
              location: profile.location,
              website: profile.website,
              twitter: profile.twitter,
            });

            if (result.success) {
              // 成功メッセージを表示するなどの処理
              console.log('Profile updated successfully');
            } else {
              // エラーメッセージを表示するなどの処理
              console.error('Failed to update profile:', result.message);
            }
          };

          return (
            <div className="max-w-3xl mx-auto">
              <ProfileForm onSubmit={handleSubmit} />
            </div>
          );
        })()
      },
      'security': {
        title: 'セキュリティ',
        icon: <Shield className="h-6 w-6" />,
        description: 'セキュリティ設定の確認と変更ができます。',
        content: (() => {
          // サンプルデータ
          const sampleSettings = {
            twoFactorEnabled: false,
            emailVerified: true,
            lastPasswordChange: '2024-03-15',
            loginHistory: [
              {
                date: '2024-03-20 15:30',
                device: 'MacBook Pro',
                location: '東京',
                status: 'success' as const,
              },
              {
                date: '2024-03-19 10:15',
                device: 'iPhone 13',
                location: '大阪',
                status: 'success' as const,
              },
              {
                date: '2024-03-18 22:45',
                device: 'Unknown Device',
                location: 'ソウル',
                status: 'failed' as const,
              },
            ],
          };

          const handleUpdateSettings = (settings: any) => {
            console.log('Settings updated:', settings);
            // TODO: セキュリティ設定更新のAPI呼び出し
          };

          return (
            <div className="max-w-3xl mx-auto">
              <SecuritySettings
                settings={sampleSettings}
                onUpdateSettings={handleUpdateSettings}
              />
            </div>
          );
        })()
      },
      'notifications': {
        title: '通知設定',
        icon: <Bell className="h-6 w-6" />,
        description: '通知の設定を管理します。',
        content: (() => {
          // サンプルデータ
          const channels = [
            {
              id: 'email',
              label: 'メール通知',
              description: 'メールで通知を受け取ります',
              enabled: true,
            },
            {
              id: 'push',
              label: 'プッシュ通知',
              description: 'ブラウザやモバイルでプッシュ通知を受け取ります',
              enabled: false,
            },
          ];

          const categories = [
            {
              id: 'finance',
              label: '収支管理',
              description: '収入・支出の記録や予算の達成状況に関する通知',
              icon: <DollarSign className="h-5 w-5" />,
              channels: { email: true, push: false },
            },
            {
              id: 'goals',
              label: '目標達成',
              description: '目標の進捗状況や期限に関する通知',
              icon: <Target className="h-5 w-5" />,
              channels: { email: true, push: true },
            },
            {
              id: 'security',
              label: 'セキュリティ',
              description: 'ログインや設定変更に関する通知',
              icon: <AlertTriangle className="h-5 w-5" />,
              channels: { email: true, push: true },
            },
          ];

          const handleUpdateChannel = (channelId: string, enabled: boolean) => {
            console.log('Channel updated:', { channelId, enabled });
            // TODO: 通知チャンネル設定更新のAPI呼び出し
          };

          const handleUpdateCategory = (
            categoryId: string,
            channel: 'email' | 'push',
            enabled: boolean
          ) => {
            console.log('Category updated:', { categoryId, channel, enabled });
            // TODO: カテゴリー通知設定更新のAPI呼び出し
          };

          return (
            <div className="max-w-3xl mx-auto">
              <NotificationSettings
                channels={channels}
                categories={categories}
                onUpdateChannel={handleUpdateChannel}
                onUpdateCategory={handleUpdateCategory}
              />
            </div>
          );
        })()
      }
    }

    return contents[slug as keyof typeof contents] || {
      title: '404',
      icon: <Target className="h-6 w-6" />,
      description: 'ページが見つかりません。',
      content: <div>このページは存在しません。</div>
    }
  }

  const pageContent = getPageContent()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="fixed h-[calc(100vh-7rem)]">
          {mounted && <ChapterMypage />}
        </div>
        <div className="flex-1 ml-64 p-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              {pageContent.icon}
              <h1 className="text-2xl font-bold ml-3">{pageContent.title}</h1>
            </div>
            <p className="text-gray-600 mb-8">{pageContent.description}</p>
            <div className="prose max-w-none">
              {pageContent.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// getLayoutを定義してHeader_mypageを使用
MypageContent.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={<Header_mypage />}>
      {page}
    </Layout>
  )
}

export default withAuth(MypageContent)
