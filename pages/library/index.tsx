import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { supabase } from '../../lib/supabase';
import { Search, Play, BookOpen, Headphones, Filter, Star, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  coverImage: string;
  category: string;
  rating: number;
  readTime: number;
  views: number;
  hasAudio: boolean;
  hasVideo: boolean;
  tags: string[];
}

const mockBooks: Book[] = [
  {
    id: '1',
    title: '投資の基本と実践',
    author: '山田太郎',
    summary: '初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーした一冊。株式、債券、不動産投資の基礎知識から、ポートフォリオ理論、リスク管理まで詳しく解説。',
    coverImage: '/images/book.png',
    category: '投資・経済',
    rating: 4.5,
    readTime: 15,
    views: 1240,
    hasAudio: true,
    hasVideo: true,
    tags: ['投資', '株式', '初心者向け', 'ポートフォリオ']
  },
  {
    id: '2',
    title: '暗号通貨完全ガイド',
    author: '佐藤花子',
    summary: 'ビットコインからDeFiまで、暗号通貨の世界を包括的に解説。ブロックチェーン技術の基礎から、主要な暗号通貨の特徴、投資戦略、セキュリティまで網羅。',
    coverImage: '/images/book.png',
    category: '暗号通貨・ブロックチェーン',
    rating: 4.7,
    readTime: 12,
    views: 890,
    hasAudio: true,
    hasVideo: false,
    tags: ['暗号通貨', 'ブロックチェーン', 'ビットコイン', 'DeFi']
  },
  {
    id: '3',
    title: 'サイドビジネス成功の法則',
    author: '田中一郎',
    summary: '副業・サイドビジネスで成功するための実践的ノウハウを紹介。時間管理、スキル開発、マーケティング戦略から税務処理まで詳しく解説。',
    coverImage: '/images/book.png',
    category: 'ビジネス・起業',
    rating: 4.3,
    readTime: 18,
    views: 1560,
    hasAudio: false,
    hasVideo: true,
    tags: ['副業', '起業', '時間管理', 'マーケティング']
  },
  {
    id: '4',
    title: 'AI投資の未来',
    author: '鈴木次郎',
    summary: '人工知能を活用した投資手法の最前線を紹介。機械学習アルゴリズム、量的投資戦略、ロボアドバイザーの仕組みまで詳しく解説。',
    coverImage: '/images/book.png',
    category: 'AI・テクノロジー',
    rating: 4.6,
    readTime: 20,
    views: 670,
    hasAudio: true,
    hasVideo: true,
    tags: ['AI', '機械学習', '量的投資', 'ロボアドバイザー']
  },
  {
    id: '5',
    title: 'グローバル投資戦略',
    author: '国際投資研究所',
    summary: '世界の金融市場を俯瞰した投資戦略を解説。地域別市場分析、通貨リスク管理、国際分散投資のポイントを詳しく紹介。',
    coverImage: '/images/book.png',
    category: '国際投資',
    rating: 4.4,
    readTime: 25,
    views: 930,
    hasAudio: false,
    hasVideo: true,
    tags: ['国際投資', '分散投資', '通貨', '新興市場']
  }
];

const categories = [
  'すべて',
  '投資・経済',
  '暗号通貨・ブロックチェーン',
  'ビジネス・起業',
  'AI・テクノロジー',
  '国際投資',
  '自己啓発',
  'マーケティング',
  'リーダーシップ'
];

export default function Library() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('library_books')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBooks(data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
      // フォールバックとしてモックデータを使用
      setBooks(mockBooks);
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'すべて' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      case 'readTime':
        return a.readTime - b.readTime;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">図書館</h1>
          <p className="text-gray-600">ビジネス書の要約、動画、オーディオブックで効率的に学ぼう</p>
        </div>

        {/* 検索・フィルター */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* 検索バー */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="本のタイトル、著者、タグで検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* カテゴリーフィルター */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* ソート */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">最新順</option>
                <option value="rating">評価順</option>
                <option value="views">人気順</option>
                <option value="readTime">読書時間順</option>
              </select>
            </div>
          </div>
        </div>

        {/* 本の一覧 */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedBooks.map(book => (
            <div key={book.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* カバー画像 */}
              <div className="relative">
                <img
                  src={book.coverImage || '/images/book.png'}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  {book.hasAudio && (
                    <div className="bg-blue-500 text-white p-1 rounded-full">
                      <Headphones className="w-4 h-4" />
                    </div>
                  )}
                  {book.hasVideo && (
                    <div className="bg-red-500 text-white p-1 rounded-full">
                      <Play className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {/* 本の情報 */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {book.summary}
                </p>

                {/* 統計情報 */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{book.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{book.readTime}分</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{book.views.toLocaleString()}</span>
                  </div>
                </div>

                {/* タグ */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {book.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* アクションボタン */}
                <div className="flex gap-2">
                  <Link href={`/library/book/${book.id}`}>
                    <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      要約を読む
                    </button>
                  </Link>
                  {book.hasAudio && (
                    <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
                      <Headphones className="w-4 h-4" />
                    </button>
                  )}
                  {book.hasVideo && (
                    <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            ))}
          </div>
        )}

        {/* 結果件数 */}
        <div className="mt-8 text-center text-gray-600">
          {sortedBooks.length}件の本が見つかりました
        </div>
      </div>
    </div>
  );
}
