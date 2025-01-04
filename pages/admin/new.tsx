import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import { BookOpen, LineChart, PieChart, Brain, Target, Rocket } from 'lucide-react'

// カテゴリの定義を export する
export const categories = [
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
      { title: '株式投資の始め方', slug: 'stock-start' },
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
  },
  { 
    id: 'future_world',
    name: '未来の世界',
    icon: <Rocket className="h-5 w-5 mr-3" />,
    subsections: [
      { title: '世界の変遷', slug: 'history' },
      { title: 'AIの基礎知識', slug: 'ai-basics' },
      { title: '機械学習入門', slug: 'machine-learning' },
      { title: 'ディープラーニング', slug: 'deep-learning' },
      { title: 'AIと倫理', slug: 'ai-ethics' },
    ]
  },
  { 
    id: 'web3',
    name: 'Web3.0',
    icon: <Rocket className="h-5 w-5 mr-3" />,
    subsections: [
        { title: 'ブロックチェーン基礎', slug: 'blockchain-basics' },
        { title: 'DeFi入門', slug: 'defi-intro' },
        { title: 'NFTの世界', slug: 'nft-world' },
        { title: 'DAOについて', slug: 'dao-intro' },
        { title: 'Fintech', slug: 'fintech' },
    ]
  },
  {
    id: 'metaverse',
    name: 'メタバース',
    icon: <Rocket className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'メタバースとは', slug: 'metaverse-intro' },
      { title: '仮想空間経済', slug: 'virtual-economy' },
      { title: 'アバターと身分証明', slug: 'avatar-identity' }
    ]
  },
  { 
    id: 'new_tecnology',
    name: '新しい技術',
    icon: <Rocket className="h-5 w-5 mr-3" />,
    subsections: [
      { title: 'Fintech', slug: 'fintech' },
    ]
  }
]

// スラッグ生成関数を修正
async function generateUniqueSlug(title: string): Promise<string> {
  let baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  // 既存のスラグをチェック
  let slug = baseSlug
  let counter = 1
  let exists = true

  while (exists) {
    const { data, error } = await supabase
      .from('articles')
      .select('slug')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      exists = false
    } else {
      // スラグが存在する場合、数字を追加
      slug = `${baseSlug}-${counter}`
      counter++
    }
  }

  return slug
}

type ContentBlock = {
  type: 'text' | 'link-card' | 'image' | 'code'  // codeを追加、imageを維持
  content: string
  metadata?: {
    title?: string
    url?: string
    description?: string
    language?: string  // コードの言語を指定
  }
}

export default function NewArticle() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('stock')
  const [subCategory, setSubCategory] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [references, setReferences] = useState<Reference[]>([])
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { type: 'text', content: '' }
  ]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // セッションチェック
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      if (sessionError) throw new Error('認証エラー: ' + sessionError.message)
      if (!session) throw new Error('ログインが必要です')

      let imageUrl = ''
      
      // 画像のアップロード
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        
        console.log('Uploading image...') // デバッグ用
        const { error: uploadError, data } = await supabase.storage
          .from('article-images')
          .upload(fileName, imageFile)

        if (uploadError) {
          console.error('Image upload error:', uploadError) // デバッグ用
          throw new Error('画像のアップロードに失敗しました: ' + uploadError.message)
        }

        imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/article-images/${fileName}`
      }

      // 選択されたサブカテゴリからslugを取得
      const selectedCategory = categories.find(cat => cat.id === category)
      const selectedSubCategory = selectedCategory?.subsections.find(sub => sub.title === subCategory)
      const slug = selectedSubCategory?.slug

      if (!slug) {
        throw new Error('無効なカテゴリまたはサブカテゴリです')
      }

      console.log('Inserting article...', { // デバッグ用
        title,
        category,
        sub_category: subCategory,
        slug,
        imageUrl
      })

      // ユニークなスラグを生成
      const uniqueSlug = await generateUniqueSlug(title)
      
      const { data: articleData, error: insertError } = await supabase
        .from('articles')
        .insert([
          {
            title,
            content,
            category,
            sub_category: subCategory,
            image_url: imageUrl,
            slug: uniqueSlug,
            blocks: blocks
          }
        ])
        .select()

      if (insertError) throw insertError

      alert('記事が正常に作成されました')
      router.push('/admin')
    } catch (error: any) {
      console.error('Error details:', error) // デバッグ用
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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-8">新規記事作成</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">カテゴリ</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setSubCategory('')
              }}
              className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
            >
              {categories.map((cat) => (
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
              className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
            >
              <option value="">選択してください</option>
              {categories.find(cat => cat.id === category)?.subsections.map((sub) => (
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
              className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">内容 (Markdown形式)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full p-2 rounded bg-blue-800/50 border border-blue-700 font-mono"
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
              <div key={index} className="bg-blue-800/30 p-4 rounded-lg">
                <div className="flex justify-between mb-4">
                <select
  value={block.type}
  onChange={(e) => updateBlock(index, { type: e.target.value as ContentBlock['type'] })}
  className="bg-blue-800/50 border border-blue-700 rounded px-3 py-1"
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
                    className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
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
                      className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
                    />
                    <input
                      type="url"
                      placeholder="URL"
                      value={block.metadata?.url || ''}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, url: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
                    />
                    <textarea
                      placeholder="説明"
                      value={block.metadata?.description || ''}
                      onChange={(e) => updateBlock(index, {
                        metadata: { ...block.metadata, description: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
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
                      className="w-full p-2 rounded bg-blue-800/50 border border-blue-700"
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
                      className="w-full p-2 rounded bg-blue-800/50 border border-blue-700 font-mono"
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
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                テキストを追加
              </button>
              <button
                type="button"
                onClick={() => addBlock('link-card')}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                リンクカードを追加
              </button>
              <button
                type="button"
                onClick={() => addBlock('code')}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                コードを追加
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition-colors disabled:opacity-50"
          >
            {loading ? '作成中...' : '記事を作成'}
          </button>
        </form>
      </div>
    </div>
  )
} 