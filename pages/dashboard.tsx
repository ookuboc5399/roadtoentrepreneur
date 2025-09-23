import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';
import { Header } from '../components/header/header';
import { withAuth } from '../lib/auth';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  BookOpen,
  Target,
  Calendar,
  Bell,
  Star,
  Users,
  Building2,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface DashboardStats {
  totalInvestments: number;
  monthlyReturn: number;
  portfolioValue: number;
  activeTrades: number;
}

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  category: string;
}

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  subscription?: {
    plan: string;
    status: string;
  };
}

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalInvestments: 1250000,
    monthlyReturn: 85000,
    portfolioValue: 1335000,
    activeTrades: 3
  });
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.92, change: 2.45, changePercent: 1.34 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.50, change: -5.20, changePercent: -2.05 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.38, change: 1.12, changePercent: 0.79 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: 3.67, changePercent: 0.98 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.94, change: -1.23, changePercent: -0.80 }
  ]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
    fetchNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchUserData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/external/news?limit=4');
      if (response.ok) {
        const newsData = await response.json();
        setNews(newsData.slice(0, 4));
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // フォールバック用のダミーデータ
      setNews([
        {
          id: '1',
          title: '米国株、好決算で上昇基調',
          summary: '主要企業の決算発表を受け、米国株式市場が上昇基調を維持しています。',
          source: 'Bloomberg',
          publishedAt: '2024-12-30T10:00:00Z',
          category: '株式'
        },
        {
          id: '2',
          title: '仮想通貨市場、年末調整',
          summary: 'ビットコインを中心とした仮想通貨市場が年末の調整局面に入っています。',
          source: 'CoinDesk',
          publishedAt: '2024-12-30T09:30:00Z',
          category: '仮想通貨'
        },
        {
          id: '3',
          title: '日本銀行、金融政策会合を開催',
          summary: '日銀が年内最後の金融政策会合を開催し、市場関係者の注目を集めています。',
          source: 'Reuters',
          publishedAt: '2024-12-30T08:45:00Z',
          category: '経済'
        }
      ]);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Layout header={<Header />}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">ダッシュボードを読み込み中...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout header={<Header />}>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full py-6 px-4 sm:px-6 lg:px-8">
          {/* ヘッダー */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  おかえりなさい、{user?.first_name || 'ユーザー'}さん
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  今日の市場動向とあなたの投資状況を確認しましょう
                </p>
              </div>
              <div className="flex items-center justify-between sm:justify-end space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <div className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">オンライン</span>
                </div>
              </div>
            </div>
          </div>

          {/* 統計カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ポートフォリオ価値</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.portfolioValue)}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="ml-1 text-sm text-green-600">+6.8%</span>
                <span className="ml-2 text-sm text-gray-500">今月</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">月間リターン</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.monthlyReturn)}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="ml-1 text-sm text-green-600">+12.3%</span>
                <span className="ml-2 text-sm text-gray-500">前月比</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">総投資額</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalInvestments)}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="ml-1 text-sm text-blue-600">安定</span>
                <span className="ml-2 text-sm text-gray-500">リスク管理</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">アクティブ取引</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeTrades}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="ml-1 text-sm text-orange-600">進行中</span>
                <span className="ml-2 text-sm text-gray-500">3件</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 市場データ */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">主要市場</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {marketData.map((item) => (
                      <div key={item.symbol} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600">{item.symbol}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.symbol}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                          <div className={`flex items-center text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {item.change >= 0 ? (
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 mr-1" />
                            )}
                            {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)} ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ニュース */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">最新ニュース</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {news.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.source} • {formatDate(item.publishedAt)}
                          </p>
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                    すべてのニュースを見る →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* クイックアクション */}
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">クイックアクション</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => router.push('/invester_entrepreneur/tool/company_analysis')}
                    className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-blue-900">企業分析</span>
                  </button>
                  <button
                    onClick={() => router.push('/invester_entrepreneur/tool/ecnomic_indicators')}
                    className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-green-900">経済指標</span>
                  </button>
                  <button
                    onClick={() => router.push('/invester_entrepreneur/tool/auto_fx')}
                    className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm font-medium text-purple-900">自動FX</span>
                  </button>
                  <button
                    onClick={() => router.push('/library')}
                    className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    <BookOpen className="h-8 w-8 text-orange-600 mb-2" />
                    <span className="text-sm font-medium text-orange-900">図書館</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);
