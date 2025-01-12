import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabaseClient'
import { investerCategories, sidebusinessCategories, futureCategories, type Category } from './categories'
import { ArrowUp, ArrowDown } from 'lucide-react'

// Types
interface ContentBlock {
  id: string
  type: 'text' | 'code' | 'image' | 'link-card'
  content: string
  metadata?: {
    language?: string
    alt?: string
    title?: string
    url?: string
    description?: string
  }
}

// Utility functions
function getBackgroundColor(section: string): string {
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

function getFormColors(section: string): string {
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

function getCurrentCategories(section: string): Category[] {
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
    console.error('Category not found:', { category, availableCategories: categories.map(c => c.id) });
    throw new Error(`カテゴリー「${category}」が見つかりません`);
  }

  // 選択されたサブカテゴリーを見つける
  const selectedSubCategory = selectedCategory.subsections.find(sub => sub.title === subCategory);
  if (!selectedSubCategory) {
    console.error('Subcategory not found:', { 
      subCategory, 
      category: selectedCategory.name,
      availableSubcategories: selectedCategory.subsections.map(s => s.title)
    });
    throw new Error(`サブカテゴリー「${subCategory}」が見つかりません`);
  }

  // 定義されたスラグを使用
  const baseSlug = selectedSubCategory.slug;

  // 既存のスラグをチェック
  let slug = baseSlug;
  let counter = 1;
  let exists = true;

  while (exists) {
    console.log('Checking slug availability:', slug);
    const { data, error } = await supabase
      .from('articles')
      .select('slug')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // レコードが見つからない = スラグが使用可能
        console.log('Slug is available:', slug);
        exists = false;
      } else {
        // その他のエラー
        console.error('Error checking slug:', error);
        throw new Error(`スラグのチェックに失敗しました: ${error.message}`);
      }
    } else if (data) {
      // スラグが存在する場合、数字を追加
      console.log('Slug exists, trying next number:', counter);
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }

  return slug;
}

export default function NewArticle() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [section, setSection] = useState('invester')
  const [category, setCategory] = useState('stock')
  const [subCategory, setSubCategory] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { id: Date.now().toString(), type: 'text', content: '' }
  ]);

  // セクション変更時の処理
  const handleSectionChange = (newSection: string) => {
    setSection(newSection)
    
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

  // ブロックの追加
  const addBlock = (type: ContentBlock['type']) => {
    setBlocks([...blocks, {
      id: Date.now().toString(),
      type,
      content: '',
      metadata: type === 'link-card' ? { title: '', url: '', description: '' } : undefined
    }]);
  };

  // ブロックの更新
  const updateBlock = (id: string, data: Partial<ContentBlock>) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, ...data } : block
    ));
  };

  // ブロックの削除
  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  // ブロックの順序変更
  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(block => block.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === blocks.length - 1)
    ) {
      return;
    }

    const newBlocks = [...blocks];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('1. Starting article creation process...')
      console.log('Current form state:', { title, category, subCategory, section })
      

      let imageUrl = ''
      if (imageFile) {
        console.log('2. Starting image upload process...')
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        console.log('Image details:', { fileName, fileType: imageFile.type, fileSize: imageFile.size })
        
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

      console.log('3. Generating unique slug...')
      const uniqueSlug = await generateUniqueSlug(category, subCategory, section)
      console.log('Generated slug:', uniqueSlug)
      
      // データのバリデーション
      if (!title.trim()) {
        throw new Error('タイトルを入力してください');
      }
      if (!subCategory) {
        throw new Error('サブカテゴリを選択してください');
      }
      if (!blocks.some(block => block.content.trim())) {
        throw new Error('少なくとも1つのブロックにコンテンツを入力してください');
      }

      console.log('4. Preparing blocks data...');
      // ブロックの正規化とバリデーション
      const blocksForDB = blocks
        .filter(block => block.content.trim() || (block.type === 'link-card' && block.metadata?.url))
        .map(({ id, ...block }) => {
          // 各ブロックの型チェックと正規化
          if (!['text', 'code', 'image', 'link-card'].includes(block.type)) {
            console.warn('Invalid block type:', block.type);
            return null;
          }

          const validBlock: ContentBlock = {
            id: Date.now().toString(), // 一時的なIDを付与
            type: block.type as ContentBlock['type'],
            content: block.content.trim(),
            ...(block.metadata && { metadata: block.metadata })
          };

          return validBlock;
        })
        .filter((block): block is ContentBlock => block !== null);

      if (blocksForDB.length === 0) {
        throw new Error('有効なコンテンツが入力されていません');
      }

      console.log('Normalized blocks:', {
        count: blocksForDB.length,
        types: blocksForDB.map(b => b.type),
        contentLengths: blocksForDB.map(b => b.content.length)
      });

      // 記事データの準備
      const articleData = {
        title: title.trim(),
        category,
        sub_category: subCategory,
        image_url: imageUrl || null,
        slug: uniqueSlug,
        blocks: blocksForDB,
        section,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: null
      };

      console.log('5. Prepared article data:', {
        ...articleData,
        blocks: `${blocksForDB.length} blocks`
      });

      // データベースへの保存
      console.log('6. Attempting to insert article into database...');
      const { error: insertError, data: insertedData } = await supabase
        .from('articles')
        .insert([articleData])
        .select()
        .single();

      if (insertError) {
        console.error('Database insert error:', {
          code: insertError.code,
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          data: articleData
        });
        throw new Error(`記事の作成に失敗しました: ${insertError.message}`);
      }

      if (!insertedData) {
        throw new Error('記事の作成に失敗しました: データが返されませんでした');
      }

      console.log('7. Article inserted successfully:', {
        id: insertedData.id,
        title: insertedData.title,
        slug: insertedData.slug,
        blockCount: insertedData.blocks?.length || 0
      });

      console.log('8. Determining redirect path...')
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

      alert('記事が正常に作成されました！')
      window.location.href = redirectPath

    } catch (error: any) {
      console.error('Error in handleSubmit:', error)
      alert(error.message || '記事の作成中にエラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`min-h-screen text-white ${getBackgroundColor(section)}`}>
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
              className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
            >
              {getCurrentCategories(section).map((cat) => (
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
              className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
            >
              <option value="">選択してください</option>
              {getCurrentCategories(section).find(cat => cat.id === category)?.subsections.map((sub) => (
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
              className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
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

          {/* ブロックエディタ */}
          <div className="space-y-6">
            {blocks.map((block, index) => (
              <div key={block.id} className={`p-4 rounded-lg ${
                section === 'invester' 
                  ? 'bg-blue-800/30'
                  : section === 'sidebusiness'
                  ? 'bg-green-800/30'
                  : 'bg-purple-800/30'
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <select
                      value={block.type}
                      onChange={(e) => updateBlock(block.id, { type: e.target.value as ContentBlock['type'] })}
                      className={`rounded px-3 py-1 text-gray-900 ${getFormColors(section)}`}
                    >
                      <option value="text">テキスト</option>
                      <option value="link-card">リンクカード</option>
                      <option value="image">画像</option>
                      <option value="code">コード</option>
                    </select>
                    
                    <div className="flex space-x-1">
                      <button
                        type="button"
                        onClick={() => moveBlock(block.id, 'up')}
                        disabled={index === 0}
                        className="p-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(block.id, 'down')}
                        disabled={index === blocks.length - 1}
                        className="p-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => removeBlock(block.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    削除
                  </button>
                </div>

                {block.type === 'text' && (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                    className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
                    rows={4}
                    placeholder="テキストを入力（Markdown形式で記述可能）"
                  />
                )}

                {block.type === 'link-card' && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="タイトル"
                      value={block.metadata?.title || ''}
                      onChange={(e) => updateBlock(block.id, {
                        metadata: { ...block.metadata, title: e.target.value }
                      })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
                    />
                    <input
                      type="url"
                      placeholder="URL"
                      value={block.metadata?.url || ''}
                      onChange={(e) => updateBlock(block.id, {
                        metadata: { ...block.metadata, url: e.target.value }
                      })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
                    />
                    <textarea
                      placeholder="説明"
                      value={block.metadata?.description || ''}
                      onChange={(e) => updateBlock(block.id, {
                        metadata: { ...block.metadata, description: e.target.value }
                      })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
                      rows={2}
                    />
                  </div>
                )}

                {block.type === 'code' && (
                  <div className="space-y-3">
                    <select
                      value={block.metadata?.language || 'javascript'}
                      onChange={(e) => updateBlock(block.id, {
                        metadata: { ...block.metadata, language: e.target.value }
                      })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
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
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                      className={`w-full p-2 rounded font-mono text-gray-900 ${getFormColors(section)}`}
                      rows={8}
                      placeholder="ここにコードを入力"
                    />
                  </div>
                )}

                {block.type === 'image' && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="画像のURL"
                      value={block.content}
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
                    />
                    <input
                      type="text"
                      placeholder="代替テキスト"
                      value={block.metadata?.alt || ''}
                      onChange={(e) => updateBlock(block.id, {
                        metadata: { ...block.metadata, alt: e.target.value }
                      })}
                      className={`w-full p-2 rounded text-gray-900 ${getFormColors(section)}`}
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
              <button
                type="button"
                onClick={() => addBlock('image')}
                className={`px-4 py-2 rounded ${
                  section === 'invester'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : section === 'sidebusiness'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                画像を追加
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
