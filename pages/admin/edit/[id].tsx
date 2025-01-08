'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../utils/supabaseClient'

interface Block {
  type: 'text' | 'code' | 'image'
  content: string
  metadata?: {
    language?: string
    alt?: string
  }
}

// カテゴリの定義
const categories = [
  {
    id: 'stock',
    name: '株式投資',
    subsections: [
      { title: '株式投資の始め方', slug: 'how-to-start-stock' },
      { title: '株価指標', slug: 'stock-indicators' },
      { title: 'チャート分析', slug: 'chart-analysis' }
    ]
  },
  {
    id: 'ea',
    name: 'システムトレード',
    subsections: [
      { title: 'システムトレードの基礎', slug: 'system-trade-basics' },
      { title: 'MACD', slug: 'ea_macd_ma' },
      { title: 'RSI', slug: 'ea-rsi' }
    ]
  },
  {
    id: 'cryptocurrency',
    name: '仮想通貨',
    subsections: [
      { title: 'ビットコイン', slug: 'bitcoin' },
      { title: 'イーサリアム', slug: 'ethereum' },
      { title: 'アルトコイン', slug: 'altcoin' }
    ]
  },
  {
    id: 'bond',
    name: '債券・商品',
    subsections: [
      { title: '債券', slug: 'bonds' },
      { title: '金', slug: 'gold' },
      { title: '原油', slug: 'oil' }
    ]
  },
  {
    id: 'mind',
    name: 'マインド',
    subsections: [
      { title: 'トレードで大事なこと', slug: 'important-in-trade' },
      { title: 'お金持ちの思考法', slug: 'thinking-like-a-rich' }
    ]
  }
]

export default function EditArticle() {
  const router = useRouter()
  const { id } = router.query
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [blocks, setBlocks] = useState<Block[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) fetchArticle()
  }, [id])

  async function fetchArticle() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      setTitle(data.title)
      setContent(data.content)
      setCategory(data.category)
      setSubCategory(data.sub_category)
      setBlocks(data.blocks || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  // ブロックの追加
  const addBlock = (type: 'text' | 'code' | 'image') => {
    setBlocks([...blocks, {
      type,
      content: '',
      metadata: type === 'code' ? { language: 'javascript' } : {}
    }])
  }

  // ブロックの更新
  const updateBlock = (index: number, newBlock: Block) => {
    const newBlocks = [...blocks]
    newBlocks[index] = newBlock
    setBlocks(newBlocks)
  }

  // ブロックの削除
  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index))
  }

  // 選択されたカテゴリのサブカテゴリを取得
  const getSubCategories = () => {
    const selectedCategory = categories.find(cat => cat.id === category)
    return selectedCategory ? selectedCategory.subsections : []
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('articles')
        .update({
          title,
          content,
          category,
          sub_category: subCategory,
          blocks,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)

      if (error) throw error
      router.push('/admin')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">記事の編集</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">カテゴリ</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setSubCategory('') // カテゴリが変更されたらサブカテゴリをリセット
            }}
            className="w-full p-2 border rounded"
          >
            <option value="">カテゴリを選択</option>
            {categories.map(cat => (
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
            className="w-full p-2 border rounded"
            disabled={!category} // カテゴリが選択されていない場合は無効化
          >
            <option value="">サブカテゴリを選択</option>
            {getSubCategories().map(sub => (
              <option key={sub.slug} value={sub.title}>
                {sub.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => addBlock('text')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              テキスト追加
            </button>
            <button
              type="button"
              onClick={() => addBlock('code')}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              コード追加
            </button>
            <button
              type="button"
              onClick={() => addBlock('image')}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              画像追加
            </button>
          </div>

          {blocks.map((block, index) => (
            <div key={index} className="border p-4 rounded">
              <div className="flex justify-between mb-2">
                <span className="font-bold">{block.type}</span>
                <button
                  type="button"
                  onClick={() => removeBlock(index)}
                  className="text-red-500"
                >
                  削除
                </button>
              </div>

              {block.type === 'code' && (
                <div className="space-y-2">
                  <select
                    value={block.metadata?.language || 'javascript'}
                    onChange={(e) => updateBlock(index, {
                      ...block,
                      metadata: { ...block.metadata, language: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                  </select>
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(index, { ...block, content: e.target.value })}
                    className="w-full h-40 p-2 border rounded font-mono"
                  />
                </div>
              )}

              {block.type === 'text' && (
                <textarea
                  value={block.content}
                  onChange={(e) => updateBlock(index, { ...block, content: e.target.value })}
                  className="w-full h-40 p-2 border rounded"
                />
              )}

              {block.type === 'image' && (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateBlock(index, { ...block, content: e.target.value })}
                    placeholder="画像URL"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    value={block.metadata?.alt || ''}
                    onChange={(e) => updateBlock(index, {
                      ...block,
                      metadata: { ...block.metadata, alt: e.target.value }
                    })}
                    placeholder="代替テキスト"
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          更新
        </button>
      </form>
    </div>
  )
} 