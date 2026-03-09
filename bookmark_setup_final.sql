-- 最終版：ブックマーク機能のセットアップ
-- エラーを避けるため、段階的に実行

-- 1. user_bookmarks テーブルの作成
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    book_id UUID NOT NULL REFERENCES public.library_books(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, book_id)
);

-- 2. RLS を有効化
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;

-- 3. インデックスの作成
CREATE INDEX IF NOT EXISTS user_bookmarks_user_id_idx ON public.user_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS user_bookmarks_book_id_idx ON public.user_bookmarks(book_id);
CREATE INDEX IF NOT EXISTS user_bookmarks_created_at_idx ON public.user_bookmarks(created_at);

-- 4. handle_updated_at 関数の作成
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. トリガーの作成
DROP TRIGGER IF EXISTS handle_user_bookmarks_updated_at ON public.user_bookmarks;
CREATE TRIGGER handle_user_bookmarks_updated_at
    BEFORE UPDATE ON public.user_bookmarks
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 6. ポリシーの作成（段階的に実行）

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
    END IF;
END $$;

-- 7. 完了メッセージ
SELECT 'ブックマーク機能のセットアップが完了しました' as message;



