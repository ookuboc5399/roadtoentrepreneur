-- 安全なブックマーク機能のセットアップ
-- 既存のテーブルやポリシーを確認してから実行

-- 1. 既存のテーブルを確認
DO $$ 
BEGIN
    -- user_bookmarks テーブルが存在しない場合のみ作成
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'user_bookmarks'
    ) THEN
        CREATE TABLE public.user_bookmarks (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
            book_id UUID NOT NULL REFERENCES public.library_books(id) ON DELETE CASCADE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            UNIQUE(user_id, book_id)
        );
        
        -- RLS を有効化
        ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
        
        -- インデックスを作成
        CREATE INDEX user_bookmarks_user_id_idx ON public.user_bookmarks(user_id);
        CREATE INDEX user_bookmarks_book_id_idx ON public.user_bookmarks(book_id);
        CREATE INDEX user_bookmarks_created_at_idx ON public.user_bookmarks(created_at);
        
        RAISE NOTICE 'user_bookmarks テーブルを作成しました';
    ELSE
        RAISE NOTICE 'user_bookmarks テーブルは既に存在します';
    END IF;
END $$;

-- 2. ポリシーを安全に作成
-- 既存のポリシーがある場合はスキップ

-- SELECT ポリシー
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_bookmarks' 
        AND policyname = 'Users can view own bookmarks'
    ) THEN
        CREATE POLICY "Users can view own bookmarks" ON public.user_bookmarks
            FOR SELECT USING (auth.uid() = user_id);
        RAISE NOTICE 'SELECT ポリシーを作成しました';
    ELSE
        RAISE NOTICE 'SELECT ポリシーは既に存在します';
    END IF;
END $$;

-- INSERT ポリシー
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_bookmarks' 
        AND policyname = 'Users can insert own bookmarks'
    ) THEN
        CREATE POLICY "Users can insert own bookmarks" ON public.user_bookmarks
            FOR INSERT WITH CHECK (auth.uid() = user_id);
        RAISE NOTICE 'INSERT ポリシーを作成しました';
    ELSE
        RAISE NOTICE 'INSERT ポリシーは既に存在します';
    END IF;
END $$;

-- UPDATE ポリシー
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_bookmarks' 
        AND policyname = 'Users can update own bookmarks'
    ) THEN
        CREATE POLICY "Users can update own bookmarks" ON public.user_bookmarks
            FOR UPDATE USING (auth.uid() = user_id);
        RAISE NOTICE 'UPDATE ポリシーを作成しました';
    ELSE
        RAISE NOTICE 'UPDATE ポリシーは既に存在します';
    END IF;
END $$;

-- DELETE ポリシー
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_bookmarks' 
        AND policyname = 'Users can delete own bookmarks'
    ) THEN
        CREATE POLICY "Users can delete own bookmarks" ON public.user_bookmarks
            FOR DELETE USING (auth.uid() = user_id);
        RAISE NOTICE 'DELETE ポリシーを作成しました';
    ELSE
        RAISE NOTICE 'DELETE ポリシーは既に存在します';
    END IF;
END $$;

-- 3. handle_updated_at 関数の作成
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. updated_at トリガーの作成（存在しない場合のみ）
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'handle_user_bookmarks_updated_at'
    ) THEN
        EXECUTE 'CREATE TRIGGER handle_user_bookmarks_updated_at
            BEFORE UPDATE ON public.user_bookmarks
            FOR EACH ROW
            EXECUTE FUNCTION public.handle_updated_at()';
        RAISE NOTICE 'updated_at トリガーを作成しました';
    ELSE
        RAISE NOTICE 'updated_at トリガーは既に存在します';
    END IF;
END $$;

-- 4. 設定完了メッセージ
SELECT 'ブックマーク機能のセットアップが完了しました' as message;
