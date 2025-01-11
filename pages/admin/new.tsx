import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import { BookOpen, LineChart, PieChart, Brain, Target, Rocket, Bot, Globe, Headphones } from 'lucide-react'

// 投資・起業のカテゴリー
export const investerCategories = [
  { 
    id: 'stock', 
    name: '株式投資',
    icon: <LineChart className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '株式投資とは', slug: 'stock-detail' },
      { title: '株式投資の始め方', slug: 'stock-start' },
      { title: '銘柄の選び方', slug: 'stock-pick' },
      { title: 'チャート分析', slug: 'stock-chart' }
    ]
  },
  { 
    id: 'fx', 
    name: 'FX',
    icon: <LineChart className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '株式投資とは', slug: 'stock-detail' },
      { title: 'MT4の準備', slug: 'fx-start' },
      { title: '銘柄の選び方', slug: 'stock-pick' },
      { title: 'トレードサポート', slug: 'trade-support'  }
    ]
  },
  { 
    id: 'cryptocurrency', 
    name: '仮想通貨',
    icon: <LineChart className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '仮想通貨とは', slug: 'cryptocurrency-detail' },
      { title: '口座開設', slug: 'account-support' },
      { title: 'ビットコイン', slug: 'btc' },
      { title: 'イーサリアム', slug: 'eth' },
    ]
  },
  { 
    id: 'bond', 
    name: '債権・コモディディ',
    icon: <LineChart className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '債権について', slug: 'bond-detail'},
      { title: 'コモディティについて', slug: 'commodity-detail' },
      { title: '金', slug: 'gold' },
      { title: '銀', slug: 'silver' },
      { title: '石油', slug: 'oil' },
    ]
  },
  {
    id: 'system',
    name: 'システムトレード',
    icon: <PieChart className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'システムトレードの基礎', slug: 'system-basic' },
      { title: '自動売買の仕組み', slug: 'system-auto' },
      { title: '戦略の構築', slug: 'system-strategy' },
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
    id: 'mind',
    name: 'マインド',
    icon: <Brain className="h-5 w-5 mr-3" />,
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
  }
]

// サイドビジネスのカテゴリー
export const sidebusinessCategories = [
  {
    id: 'movie',
    name: '動画',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '動画編集について', slug: 'movie-detail' },
      { title: 'サムネイル', slug: 'thumbnail' }
    ]
  },
  {
    id: 'blog',
    name: 'ブログ',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'キーワード調査', slug: 'blog-detail' },
      { title: 'SEO対策', slug: 'blog-seo' },
      { title: 'ライティング', slug: 'blog-writing' },
      { title: '推敲', slug: 'blog-revision' },
      { title: '考え方', slug: 'blog-think' },
      { title: 'WordPress', slug: 'wordpress' }
    ]
  },
  {
    id: 'buppan',
    name: '物販',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '国内転売', slug: 'domestic-resale' },
      { title: 'eBay', slug: 'ebay' },
      { title: 'Shopify', slug: 'shopify' }
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '実務の表示形式', slug: 'excel-format' },
      { title: '日付や時刻を表す関数', slug: 'excel-date' },
      { title: '縦棒グラフ', slug: 'excel-bar-chart' },
      { title: '折れ線グラフ', slug: 'excel-line-chart' }
    ]
  },
  {
    id: 'design',
    name: 'デザイン',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'デザインの基礎', slug: 'design-basics' },
      { title: 'カラー', slug: 'design-color' },
      { title: 'レイアウト', slug: 'design-layout' }
    ]
  },
  {
    id: 'marketing',
    name: 'マーケティング',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'SNSマーケティング', slug: 'sns-marketing' },
      { title: 'Twitter', slug: 'twitter' },
      { title: '進化論マーケティング', slug: 'evolution' }
    ]
  },
  {
    id: 'real_estate',
    name: '不動産',
    icon: <Target className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '不動産投資', slug: 'real-estate-investment' },
      { title: '収益物件', slug: 'income-property' }
    ]
  }
]

// 未来の世界のカテゴリー
export const futureCategories = [
  {
    id: 'history',
    name: '世界の変遷',
    icon: <Bot className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '世界の変遷', slug: 'history' }
    ]
  },
  {
    id: 'ai',
    name: 'AI・人工知能',
    icon: <Bot className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'AIの基礎知識', slug: 'ai-basics' },
      { title: '機械学習入門', slug: 'machine-learning' },
      { title: 'ディープラーニング', slug: 'deep-learning' },
      { title: 'AIと倫理', slug: 'ai-ethics' }
    ]
  },
  {
    id: 'web3',
    name: 'Web3.0',
    icon: <Globe className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'ブロックチェーン基礎', slug: 'blockchain-basics' },
      { title: 'DeFi入門', slug: 'defi-intro' },
      { title: 'NFTの世界', slug: 'nft-world' },
      { title: 'DAOについて', slug: 'dao-intro' },
      { title: 'Fintech', slug: 'fintech' },
      { title: 'Saas', slug: 'saas' }
    ]
  },
  {
    id: 'metaverse',
    name: 'メタバース',
    icon: <Headphones className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'メタバースとは', slug: 'metaverse-intro' },
      { title: '仮想空間経済', slug: 'virtual-economy' },
      { title: 'アバターと身分証明', slug: 'avatar-identity' }
    ]
  }
]

// スラッグ生成関数を修正
async function generateUniqueSlug(category: string, subCategory: string, section: string): Promise<string> {
  // セクションに基づいてカテゴリーリストを選択
  let categories;
  if (section === 'invester') {
    categories = investerCategories;
  } else if (section === 'sidebusiness') {
    categories = sidebusinessCategories;
  } else {
    categories = futureCategories;
  }
  
  // 選択されたカテゴリーを見つける
  const selectedCategory = categories.find(cat => cat.id === category);
  if (!selectedCategory) {
    throw new Error('カテゴリーが見つかりません');
  }

  // 選択されたサブカテゴリーを見つける
  const selectedSubCategory = selectedCategory.subsections.find(sub => sub.title === subCategory);
  if (!selectedSubCategory) {
    throw new Error('サブカテゴリーが見つかりません');
  }

  // 定義されたスラグを使用
  const baseSlug = selectedSubCategory.slug;

  // 既存のスラグをチェック
  let slug = baseSlug;
  let counter = 1;
  let exists = true;

  while (exists) {
    const { data, error } = await supabase
      .from('articles')
      .select('slug')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      exists = false;
    } else {
      // スラグが存在する場合、数字を追加
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }

  return slug;
}

interface Reference {
  title: string;
  url: string;
}

type ContentBlock = {
  type: 'text' | 'link-card' | 'image' | 'code'
  content: string
  metadata?: {
    title?: string
    url?: string
    description?: string
    language?: string
  }
}

export default function NewArticle() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [section, setSection] = useState('invester') // 'invester', 'sidebusiness', or 'future'
  const [category, setCategory] = useState('stock')
  const [subCategory, setSubCategory] = useState('')

  // 現在のセクションに基づいてカテゴリを取得
  const getCurrentCategories = () => {
    switch (section) {
      case 'invester':
        return investerCategories;
      case 'sidebusiness':
        return sidebusinessCategories;
      case 'future':
        return futureCategories;
      default:
        return investerCategories;
    }
  }

  // セクション変更時の処理
  const handleSectionChange = (newSection: string) => {
    setSection(newSection)
    
    // セクションごとの初期カテゴリを設定
    let initialCategory;
    switch (newSection) {
      case 'invester':
        initialCategory = 'stock';
        break;
      case 'sidebusiness':
        initialCategory = 'movie';
        break;
      case 'future':
        initialCategory = 'ai';
        break;
      default:
        initialCategory = 'stock';
    }
    
    setCategory(initialCategory)
    setSubCategory('')
  }

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [references, setReferences] = useState<Reference[]>([])
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { type: 'text', content: '' }
  ]);

  // Get background color based on section
  const getBackgroundColor = () => {
    switch (section) {
      case 'invester':
        return 'bg-gradient-to-b from-blue-900 to-blue-950';
      case 'sidebusiness':
        return 'bg-gradient-to-b from-green-900 to-green-950';
      case 'future':
        return 'bg-gradient-to-b from-purple-900 to-purple-950';
      default:
        return 'bg-gradient-to-b from-blue-900 to-blue-950';
    }
  }

  // Get form element colors based on section
  const getFormColors = () => {
    switch (section) {
      case 'invester':
        return 'bg-blue-800/50 border border-blue-700';
      case 'sidebusiness':
        return 'bg-green-800/50 border border-green-700';
      case 'future':
        return 'bg-purple-800/50 border border-purple-700';
      default:
        return 'bg-blue-800/50 border border-blue-700';
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('Starting article creation process...')
      console.log('Current section:', section)
      console.log('Selected category:', category)
      console.log('Selected subCategory:', subCategory)

      // セッションチェック
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      if (sessionError) {
        console.error('Session error:', sessionError)
        throw new Error('認証エラー: ' + sessionError.message)
      }
      if (!session) {
        throw new Error('ログインが必要です')
      }
      console.log('Session check passed')

      let imageUrl = ''
      
      // 画像のアップロード
      if (imageFile) {
        console.log('Starting image upload...')
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        
        const { error: uploadError, data } = await supabase.storage
          .from('article-images')
          .upload(fileName, imageFile)

        if (uploadError) {
          console.error('Image upload error:', uploadError)
          throw new Error('画像のアップロードに失敗しました: ' + uploadError.message)
        }

        imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/article-images/${fileName}`
        console.log('Image uploaded successfully:', imageUrl)
      }

      // カテゴリーとセクションに基づいてスラグを生成
      console.log('Generating unique slug...')
      const uniqueSlug = await generateUniqueSlug(category, subCategory, section)
      console.log('Generated slug:', uniqueSlug)
      
      // 記事データの作成
      const articleData = {
        title,
        content,
        category,
        sub_category: subCategory,
        image_url: imageUrl,
        slug: uniqueSlug,
        blocks: blocks,
        section: section
      }
      console.log('Preparing to insert article:', articleData)

      console.log('Inserting article into database...')
      const insertResult = await supabase
        .from('articles')
        .insert([articleData])
        .select()
        .single()

      if (insertResult.error) {
        console.error('Article insertion error:', insertResult.error)
        throw new Error('記事の作成に失敗しました: ' + insertResult.error.message)
      }

      const insertedData = insertResult.data
      if (!insertedData) {
        console.error('No data returned after insertion')
        throw new Error('記事の作成に失敗しました: データが返されませんでした')
      }

      console.log('Article created successfully:', insertedData)
      
      try {
        // セクションに応じて遷移先を変更
        let redirectPath = '/'
        switch (section) {
          case 'invester':
            redirectPath = '/invester_entrepreneur'
            break
          case 'sidebusiness':
            redirectPath = '/sidebusiness'
            break
          case 'future':
            redirectPath = '/future_world'
            break
        }

        console.log('Preparing to redirect to:', redirectPath)
        
        // 成功メッセージを表示
        alert('記事が正常に作成されました！')
        
        // リダイレクト前にローディング状態を解除
        setLoading(false)
        
        // リダイレクトを実行
        window.location.href = redirectPath
      } catch (redirectError) {
        console.error('Redirect error:', redirectError)
        // リダイレクトに失敗した場合でも、記事は作成されているのでエラーメッセージは表示しない
        setLoading(false)
      }
    } catch (error: any) {
      console.error('Error in handleSubmit:', error)
      alert(error.message || '記事の作成中にエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  const addReference = () => {
    setReferences([...references, { title: '', url: '' }])
  }

  const updateReference = (index: number, field: keyof Reference, value: string) => {
    const newRefs = [...references]
    newRefs[index][field] = value
    setReferences(newRefs)
  }

  const addBlock = (type: ContentBlock['type']) => {
    setBlocks([...blocks, {
      type,
      content: '',
      metadata: type === 'link-card' ? { title: '', url: '', description: '' } : undefined
    }]);
  };

  const updateBlock = (index: number, data: Partial<ContentBlock>) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], ...data };
    setBlocks(newBlocks);
  };

  return (
    <div className={`min-h-screen text-white ${getBackgroundColor()}`}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">新規記事作成</h1>
        
        {/* セクション切り替えボタン */}
        <div className="flex space-x-4 mb-8">
          <button
            type="button"
            onClick={() => handleSectionChange('invester')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              section === 'invester'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-800/30 text-white/70 hover:bg-blue-800/50 hover:text-white'
            }`}
          >
            投資・起業
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange('sidebusiness')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              section === 'sidebusiness'
                ? 'bg-green-600 text-white'
                : 'bg-green-800/30 text-white/70 hover:bg-green-800/50 hover:text-white'
            }`}
          >
            サイドビジネス
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange('future')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              section === 'future'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-800/30 text-white/70 hover:bg-purple-800/50 hover:text-white'
            }`}
          >
            未来の世界
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">カテゴリ</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setSubCategory('')
              }}
              className={`w-full p-2 rounded ${getFormColors()}`}
            >
              {getCurrentCategories().map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">サブカテゴリ</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className={`w-full p-2 rounded ${getFormColors()}`}
            >
              <option value="">選択してください</option>
              {getCurrentCategories().find(cat => cat.id === category)?.subsections.map((sub) => (
                <option key={sub.slug} value={sub.title}>
                  {sub.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-2 rounded ${getFormColors()}`}
              required
            />
          </div>

          <div>
            <label className="block mb-2">内容 (Markdown形式)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className={`w-full p-2 rounded font-mono ${getFormColors()}`}
              required
            />
          </div>

          <div>
            <label className="block mb-2">画像</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full p-2"
            />
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">参考サイト</h3>
              <button
                type="button"
                onClick={addReference}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                リンクを追加
              </button>
            </div>
            
            {references.map((ref, index) => (
              <div key={index} className="space-y-4 mb-4">
                <input
                  type="text"
                  placeholder="サイト名"
                  value={ref.title}
                  onChange={(e) => updateReference(index, 'title', e.target.value)}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={ref.url}
                  onChange={(e) => updateReference(index, 'url', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {blocks.map((block, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                section === 'invester' 
                  ? 'bg-blue-800/30'
                  : section === 'sidebusiness'
                  ? 'bg-green-800/30'
                  : 'bg-purple-800/30'
              }`}>
                <div className="flex justify-between mb-4">
                  <select
                    value={block.type}
                    onChange={(e) => updateBlock(index, { type: e.target.value as ContentBlock['type'] })}
                    className={`rounded px-3 py-1 ${getFormColors()}`}
                  >
                    <option value="text">テキスト</option>
                    <option value="link-card">リンクカード</option>
                    <option value="image">画像</option>
                    <option value="code">コード</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => {
                      const newBlocks = [...blocks];
                      newBlocks.splice(index, 1);
                      setBlocks(newBlocks);
                    }}
                    className="text-red-400 hover:text-red-300"
                  >
                    削除
                  </button>
                </div>

                {block.type === 'text' && (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(index, { content: e.target.value })}
                    className={`w-full p-2 rounded ${getFormColors()}`}
                    rows={4}
                  />
                )}

                {block.type === 'link-card' && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="タイトル"
                      value={block.metadata?.title || ''}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, title: e.target.value }
                      })}
                      className={`w-full p-2 rounded ${getFormColors()}`}
                    />
                    <input
                      type="url"
                      placeholder="URL"
                      value={block.metadata?.url || ''}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, url: e.target.value }
                      })}
                      className={`w-full p-2 rounded ${getFormColors()}`}
                    />
                    <textarea
                      placeholder="説明"
                      value={block.metadata?.description || ''}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, description: e.target.value }
                      })}
                      className={`w-full p-2 rounded ${getFormColors()}`}
                      rows={2}
                    />
                  </div>
                )}

                {block.type === 'code' && (
                  <div className="space-y-3">
                    <select
                      value={block.metadata?.language || 'javascript'}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, language: e.target.value }
                      })}
                      className={`w-full p-2 rounded ${getFormColors()}`}
                    >
                      <option value="javascript">JavaScript</option>
                      <option value="typescript">TypeScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="sql">SQL</option>
                    </select>
                    <textarea
                      value={block.content}
                      onChange={(e) => updateBlock(index, { content: e.target.value })}
                      className={`w-full p-2 rounded font-mono ${getFormColors()}`}
                      rows={8}
                      placeholder="ここにコードを入力"
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => addBlock('text')}
                className={`px-4 py-2 rounded ${
                  section === 'invester'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : section === 'sidebusiness'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                テキストを追加
              </button>
              <button
                type="button"
                onClick={() => addBlock('link-card')}
                className={`px-4 py-2 rounded ${
                  section === 'invester'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : section === 'sidebusiness'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                リンクカードを追加
              </button>
              <button
                type="button"
                onClick={() => addBlock('code')}
                className={`px-4 py-2 rounded ${
                  section === 'invester'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : section === 'sidebusiness'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                コードを追加
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded transition-colors disabled:opacity-50 ${
              section === 'invester'
                ? 'bg-blue-600 hover:bg-blue-700'
                : section === 'sidebusiness'
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {loading ? '作成中...' : '記事を作成'}
          </button>
        </form>
      </div>
    </div>
  )
}
