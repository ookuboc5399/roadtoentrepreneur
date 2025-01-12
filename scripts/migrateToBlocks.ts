import { createClient } from '@supabase/supabase-js';
import { convertMarkdownToBlocks } from '../utils/markdownToBlocks';
import * as dotenv from 'dotenv';

dotenv.config();

// Supabaseクライアントの設定
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateArticlesToBlocks() {
  try {
    // すべての記事を取得
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .is('blocks', null); // blocksがnullの記事のみを取得

    if (error) throw error;
    if (!articles) {
      console.log('No articles found to migrate');
      return;
    }

    console.log(`Found ${articles.length} articles to migrate`);

    // 各記事をブロック形式に変換
    for (const article of articles) {
      if (!article.content) {
        console.log(`Skipping article ${article.id}: No content`);
        continue;
      }

      console.log(`Converting article: ${article.title}`);
      const blocks = convertMarkdownToBlocks(article.content);

      // 記事を更新
      const { error: updateError } = await supabase
        .from('articles')
        .update({
          blocks: blocks,
          updated_at: new Date().toISOString()
        })
        .eq('id', article.id);

      if (updateError) {
        console.error(`Error updating article ${article.id}:`, updateError);
        continue;
      }

      console.log(`Successfully converted article: ${article.title}`);
      console.log('Blocks:', JSON.stringify(blocks, null, 2));
    }

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// スクリプトの実行
migrateArticlesToBlocks().then(() => process.exit(0));
