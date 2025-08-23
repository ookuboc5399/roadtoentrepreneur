-- Supabase users テーブルの作成とセットアップ
-- このSQLをSupabaseのSQL Editorで実行してください

-- 1. usersテーブルの作成
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    first_name TEXT DEFAULT '',
    last_name TEXT DEFAULT '',
    bio TEXT,
    occupation TEXT,
    location TEXT,
    website TEXT,
    twitter TEXT,
    avatar_url TEXT,
    birth_date DATE,
    subscription JSONB DEFAULT '{"plan": "free", "status": "inactive"}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. RLS (Row Level Security) を有効化
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 3. 既存のポリシーを削除（もしあれば）
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;

-- 4. 新しいポリシーの作成
-- ユーザーは自分のデータのみ参照可能
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

-- 認証済みユーザーは自分のデータを挿入可能（サインアップ時）
CREATE POLICY "Users can insert own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

-- ユーザーは自分のデータのみ更新可能
CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- 4. インデックスの作成
CREATE INDEX IF NOT EXISTS users_email_idx ON public.users(email);
CREATE INDEX IF NOT EXISTS users_created_at_idx ON public.users(created_at);

-- 5. updated_at の自動更新トリガー
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 6. 新規ユーザー登録時の自動プロフィール作成
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, first_name, last_name)
    VALUES (NEW.id, NEW.email, '', '');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- ========================================
-- デバッグ用：RLSを一時的に無効にする場合は以下を実行
-- ========================================
-- ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- ========================================
-- RLSを再度有効にする場合は以下を実行
-- ========================================
-- ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
