export type BlockType = 'text' | 'code' | 'image';

export interface BlockData {
  type: BlockType;
  content: string;
  metadata?: {
    language?: string;
    alt?: string;
  };
}

export function convertMarkdownToBlocks(markdown: string): BlockData[] {
  const blocks: BlockData[] = [];
  const lines = markdown.split('\n');
  let currentBlock: BlockData | null = null;
  let isInCodeBlock = false;
  let codeLanguage = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // コードブロックの開始を検出
    if (line.startsWith('```')) {
      if (!isInCodeBlock) {
        // コードブロック開始
        isInCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        currentBlock = {
          type: 'code',
          content: '',
          metadata: {
            language: codeLanguage
          }
        };
      } else {
        // コードブロック終了
        isInCodeBlock = false;
        if (currentBlock) {
          blocks.push(currentBlock);
          currentBlock = null;
        }
      }
      continue;
    }

    // 画像の検出
    if (line.match(/!\[.*?\]\(.*?\)/)) {
      // 現在のテキストブロックを保存
      if (currentBlock && currentBlock.type === 'text' && currentBlock.content.trim()) {
        blocks.push(currentBlock);
      }

      // 画像情報を抽出
      const match = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, alt, src] = match;
        blocks.push({
          type: 'image',
          content: src,
          metadata: {
            alt: alt || ''
          }
        });
      }

      currentBlock = null;
      continue;
    }

    // コードブロック内の行を処理
    if (isInCodeBlock && currentBlock) {
      currentBlock.content += (currentBlock.content ? '\n' : '') + line;
      continue;
    }

    // テキストブロックの処理
    if (!isInCodeBlock) {
      if (!currentBlock || currentBlock.type !== 'text') {
        if (currentBlock) {
          blocks.push(currentBlock);
        }
        currentBlock = {
          type: 'text',
          content: line
        };
      } else {
        currentBlock.content += '\n' + line;
      }
    }
  }

  // 最後のブロックを追加
  if (currentBlock && currentBlock.content.trim()) {
    blocks.push(currentBlock);
  }

  return blocks;
}

export async function updateArticleBlocks(supabase: any, articleId: string, markdown: string) {
  const blocks = convertMarkdownToBlocks(markdown);
  
  const { error } = await supabase
    .from('articles')
    .update({
      blocks: blocks,
      content: markdown // オリジナルのMarkdownも保持
    })
    .eq('id', articleId);

  if (error) {
    throw error;
  }

  return blocks;
}
