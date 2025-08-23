import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
});

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  bio?: string;
  occupation?: string;
  location?: string;
  website?: string;
  twitter?: string;
  avatar_url?: string;
  birth_date?: string;
  subscription?: {
    plan: string;
    status: 'active' | 'inactive';
  };
  created_at?: string;
  updated_at?: string;
}

export interface CreateUserParams {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  subscription?: {
    plan: string;
    status: 'active' | 'inactive';
  };
}

export async function getUser(userId: string): Promise<User | null> {
  try {
    // セッションの確認
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Session error:', sessionError);
      return null;
    }

    if (!session) {
      console.log('No active session');
      return null;
    }

    // ユーザーデータの取得
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user data:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getUser:', error);
    return null;
  }
}

export async function createUser(params: CreateUserParams): Promise<User | null> {
  try {
    console.log('createUser called with params:', {
      id: params.id,
      email: params.email,
      first_name: params.first_name,
      last_name: params.last_name
    });

    // セッションの確認
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Session error in createUser:', sessionError);
      return null;
    }

    if (!session) {
      console.error('No active session in createUser');
      return null;
    }

    console.log('Session found, user ID:', session.user.id);

    const insertData = {
      id: params.id,
      email: params.email,
      first_name: params.first_name,
      last_name: params.last_name,
      subscription: params.subscription || { plan: 'free', status: 'inactive' },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    console.log('Attempting to insert user data:', insertData);

    const { data, error } = await supabase
      .from('users')
      .upsert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Error creating user:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return null;
    }

    console.log('User created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in createUser:', error);
    return null;
  }
}

// デバッグ用：RLSポリシーをバイパスしてユーザーを作成
export async function createUserDebug(params: CreateUserParams): Promise<User | null> {
  try {
    console.log('createUserDebug called with params:', params);

    // サービスロールキーを使用してRLSをバイパス
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const insertData = {
      id: params.id,
      email: params.email,
      first_name: params.first_name,
      last_name: params.last_name,
      subscription: params.subscription || { plan: 'free', status: 'inactive' },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    console.log('Attempting to insert user data with admin client:', insertData);

    const { data, error } = await supabaseAdmin
      .from('users')
      .upsert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Error in createUserDebug:', error);
      return null;
    }

    console.log('User created successfully with admin client:', data);
    return data;
  } catch (error) {
    console.error('Error in createUserDebug:', error);
    return null;
  }
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<User | null> {
  try {
    // セッションの確認
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Session error:', sessionError);
      return null;
    }

    if (!session) {
      console.log('No active session');
      return null;
    }

    const { data, error } = await supabase
      .from('users')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating user:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in updateUser:', error);
    return null;
  }
}

export async function updateSubscription(userId: string, plan: string): Promise<User | null> {
  try {
    // セッションの確認
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Session error:', sessionError);
      return null;
    }

    if (!session) {
      console.log('No active session');
      return null;
    }

    // まずユーザーが存在するか確認
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (fetchError || !existingUser) {
      console.error('Error fetching user for subscription update:', fetchError);
      return null;
    }

    // サブスクリプションを更新
    const { data, error } = await supabase
      .from('users')
      .update({
        subscription: {
          plan,
          status: 'active'
        },
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating subscription:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in updateSubscription:', error);
    return null;
  }
}

// セッション状態の監視を設定
if (typeof window !== 'undefined') {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      // セッションが明示的にサインアウトされた場合のみ処理
      console.log('User signed out');
    }
  });
}

// ストレージ関連の関数
export async function uploadAvatar(userId: string, file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${userId}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading avatar:', error);
    return null;
  }
}

export async function deleteAvatar(userId: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from('avatars')
      .remove([`${userId}/avatar`]);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error deleting avatar:', error);
    return false;
  }
}
