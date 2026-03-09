-- ブックマーク機能のためのテーブル作成
-- SupabaseのSQL Editorで実行してください

-- 1. user_bookmarks テーブルの作成
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    book_id UUID NOT NULL REFERENCES public.library_books(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, book_id) -- ユーザーごとに同じ本を1回だけブックマーク可能
);

-- 2. RLS (Row Level Security) を有効化
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;

-- 3. 既存のポリシーを確認してから新しいポリシーを作成
-- 既存のポリシーがある場合はスキップし、ない場合のみ作成

-- ユーザーは自分のブックマークのみ参照可能
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

-- 認証済みユーザーは自分のブックマークを挿入可能
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

-- ユーザーは自分のブックマークのみ更新可能
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

-- ユーザーは自分のブックマークのみ削除可能
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

-- 5. インデックスの作成
CREATE INDEX IF NOT EXISTS user_bookmarks_user_id_idx ON public.user_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS user_bookmarks_book_id_idx ON public.user_bookmarks(book_id);
CREATE INDEX IF NOT EXISTS user_bookmarks_created_at_idx ON public.user_bookmarks(created_at);

-- 6. updated_at の自動更新トリガー
CREATE TRIGGER handle_user_bookmarks_updated_at
    BEFORE UPDATE ON public.user_bookmarks
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
