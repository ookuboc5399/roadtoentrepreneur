import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '../../../components/header/header';
import { supabase } from '../../../lib/supabase';
import { 
  BookOpen, 
  Play, 
  Headphones, 
  Star, 
  Clock, 
  Eye, 
  Share2, 
  Bookmark,
  ArrowLeft,
  PlayCircle,
  Pause,
  Volume2,
  SkipBack,
  SkipForward
} from 'lucide-react';
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
  fullSummary: string;
  videoUrl?: string;
  audioUrl?: string;
  chapters: Chapter[];
}

interface Chapter {
  id: string;
  title: string;
  content: string;
  duration: number;
}

const mockBooks: Book[] = [
  {
    id: '1',
    title: '投資の基本と実践',
    author: '山田太郎',
    summary: '初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーした一冊。',
    coverImage: '/images/book.png',
    category: '投資・経済',
    rating: 4.5,
    readTime: 15,
    views: 1240,
    hasAudio: true,
    hasVideo: true,
    tags: ['投資', '株式', '初心者向け', 'ポートフォリオ'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    audioUrl: '/audio/sample.mp3',
    fullSummary: `
# 投資の基本と実践

## はじめに

投資は現代社会において、資産形成と経済的自由を実現するための重要な手段です。本書では、初心者から上級者まで、投資の基本から実践的な戦略まで幅広くカバーします。

## 第1章：投資の基礎知識

### 投資とは何か

投資とは、現在の資金を将来の利益を期待して運用することです。株式、債券、不動産、商品など、様々な投資対象があります。

### リスクとリターン

投資において最も重要な概念は、リスクとリターンの関係です。一般的に、高いリターンを期待する投資ほど、リスクも高くなります。

### 分散投資の重要性

「卵を一つの籠に盛るな」という格言があるように、分散投資はリスクを軽減する重要な戦略です。

## 第2章：株式投資入門

### 株式とは

株式は企業の所有権を表す証券です。株式を購入することで、その企業の株主となり、配当や株価上昇による利益を得ることができます。

### 株式投資のメリット

- 高いリターンの可能性
- インフレヘッジ効果
- 配当による継続的な収入

### 株式投資のリスク

- 株価の変動リスク
- 企業の倒産リスク
- 市場全体の下落リスク

## 第3章：債券投資の基礎

### 債券とは

債券は企業や政府が資金調達のために発行する証券です。定期的な利息支払いと満期時の元本返済が約束されています。

### 債券の種類

- 国債：政府が発行する債券
- 社債：企業が発行する債券
- 地方債：地方自治体が発行する債券

## 第4章：不動産投資のポイント

### 不動産投資の特徴

不動産投資は、賃料収入と資産価値の上昇による二重の利益が期待できる投資です。

### 投資対象の選び方

- 立地条件
- 建物の状態
- 賃料相場
- 将来性

## 第5章：ポートフォリオ理論

### アセットアロケーション

資産配分は投資成果を決定する最も重要な要素の一つです。年齢、リスク許容度、投資目的に応じて最適な配分を決定します。

### リバランス

定期的なポートフォリオの見直しと調整により、リスクを管理し、期待リターンを最適化します。

## 第6章：リスク管理手法

### ストップロス

損失を限定するための重要な手法です。事前に決めた価格で売却することで、大きな損失を防ぎます。

### ポジションサイジング

一度に投資する金額を適切に管理することで、リスクをコントロールします。

## 第7章：実践的投資戦略

### 長期投資の重要性

時間を味方につけることで、複利効果を活用し、大きな利益を得ることができます。

### 定額投資法

定期的に一定額を投資することで、平均購入単価を下げ、リスクを軽減します。

## まとめ

投資は知識と経験を積み重ねることで、誰でも習得できるスキルです。本書で学んだ知識を実践に活かし、着実に資産を築いていきましょう。

### 重要なポイント

1. **分散投資**：リスクを軽減する基本戦略
2. **長期視点**：時間を味方につけた投資
3. **継続学習**：市場の変化に対応する柔軟性
4. **リスク管理**：損失を限定する仕組み作り
5. **感情コントロール**：市場の波に流されない冷静さ

投資の世界は常に変化しています。本書で学んだ基礎知識を土台に、継続的に学習を重ね、自分に最適な投資スタイルを見つけていきましょう。
    `,
    chapters: [
      {
        id: '1',
        title: '投資の基礎知識',
        content: '投資とは何か、リスクとリターンの関係、分散投資の重要性について解説します。',
        duration: 300
      },
      {
        id: '2',
        title: '株式投資入門',
        content: '株式の基本概念、メリット・デメリット、投資戦略について詳しく説明します。',
        duration: 450
      },
      {
        id: '3',
        title: '債券投資の基礎',
        content: '債券の種類、特徴、投資方法について学びます。',
        duration: 360
      }
    ]
  }
];

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState<'summary' | 'video' | 'audio'>('summary');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      const { data, error } = await supabase
        .from('library_books')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        // フォールバックとしてモックデータを使用
        const foundBook = mockBooks.find(b => b.id === id);
        setBook(foundBook || null);
        return;
      }

      // チャプターも取得
      const { data: chapters } = await supabase
        .from('library_chapters')
        .select('*')
        .eq('book_id', id)
        .order('order_index');

      setBook({
        ...data,
        chapters: chapters || []
      });
    } catch (error) {
      console.error('Error fetching book:', error);
      // フォールバックとしてモックデータを使用
      const foundBook = mockBooks.find(b => b.id === id);
      setBook(foundBook || null);
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">本が見つかりませんでした</p>
            <Link href="/library">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                図書館に戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 戻るボタン */}
        <Link href="/library">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6">
            <ArrowLeft className="w-4 h-4" />
            図書館に戻る
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左側：本の基本情報 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              {/* カバー画像 */}
              <div className="mb-6">
                <img
                  src={book.cover_image || '/images/book.png'}
                  alt={book.title}
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* 基本情報 */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{book.author}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{book.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{book.readTime}分</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{book.views.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{book.summary}</p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* アクションボタン */}
                <div className="flex gap-2 mb-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    ブックマーク
                  </button>
                  <button className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：コンテンツ */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* タブ */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('summary')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'summary'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    要約
                  </button>
                  {book.has_video && (
                    <button
                      onClick={() => setActiveTab('video')}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'video'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      動画
                    </button>
                  )}
                  {book.has_audio && (
                    <button
                      onClick={() => setActiveTab('audio')}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'audio'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Headphones className="w-4 h-4 inline mr-2" />
                      オーディオ
                    </button>
                  )}
                </nav>
              </div>

              {/* タブコンテンツ */}
              <div className="p-6">
                {activeTab === 'summary' && (
                  <div>
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: (book.full_summary || book.summary).replace(/\n/g, '<br>') }} />
                    </div>
                  </div>
                )}

                {activeTab === 'video' && book.has_video && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">動画解説</h3>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src={book.video_url}
                        title={book.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'audio' && book.has_audio && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">オーディオブック</h3>
                    
                    {/* オーディオプレイヤー */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                        >
                          {isPlaying ? <Pause className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-600">00:00</span>
                            <div className="flex-1 bg-gray-300 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                            <span className="text-sm text-gray-600">15:30</span>
                          </div>
                        </div>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="text-gray-600 hover:text-gray-800">
                          <SkipBack className="w-5 h-5" />
                        </button>
                        <span className="text-sm text-gray-600">1.5倍速</span>
                        <button className="text-gray-600 hover:text-gray-800">
                          <SkipForward className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* チャプター一覧 */}
                    <div>
                      <h4 className="font-semibold mb-3">チャプター</h4>
                      <div className="space-y-2">
                        {book.chapters.map(chapter => (
                          <div key={chapter.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <h5 className="font-medium">{chapter.title}</h5>
                              <p className="text-sm text-gray-600">{chapter.content}</p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {Math.floor(chapter.duration / 60)}:{(chapter.duration % 60).toString().padStart(2, '0')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
