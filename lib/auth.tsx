import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, createContext, useContext } from 'react';
import type { ComponentType, FC, ReactElement } from 'react';
import { supabase, type User, createUser, getUser, updateSubscription, updateUser } from './supabase';

interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  occupation?: string;
  location?: string;
  website?: string;
  twitter?: string;
  avatar_url?: string;
  subscription?: {
    plan: string;
    status: 'active' | 'inactive';
  };
}

export interface AuthResponse {
  success: boolean;
  message?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  signup: (params: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<AuthResponse>;
  updateProfile: (updates: Partial<AuthUser>) => Promise<AuthResponse>;
  updateSubscription: (plan: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    // 初期認証状態の確認
    const initAuth = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          return;
        }
        
        if (session?.user) {
          const userData = await getUser(session.user.id);
          if (userData) {
            setUser({
              id: userData.id,
              email: userData.email,
              firstName: userData.first_name,
              lastName: userData.last_name,
              bio: userData.bio,
              occupation: userData.occupation,
              location: userData.location,
              website: userData.website,
              twitter: userData.twitter,
              avatar_url: userData.avatar_url,
              subscription: userData.subscription,
            });
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    // 認証状態の変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session);
      
      setIsLoading(true);

      if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      if (!session?.user) {
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        // セッションの確認
        const { data: currentSession } = await supabase.auth.getSession();
        if (!currentSession.session) {
          throw new Error('No active session');
        }

        // ユーザーデータの取得
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (userError) {
          throw userError;
        }

        if (userData) {
          setUser({
            id: userData.id,
            email: userData.email,
            firstName: userData.first_name,
            lastName: userData.last_name,
            bio: userData.bio,
            occupation: userData.occupation,
            location: userData.location,
            website: userData.website,
            twitter: userData.twitter,
            avatar_url: userData.avatar_url,
            subscription: userData.subscription,
          });
          setIsAuthenticated(true);
        } else if (event === 'SIGNED_IN') {
          // ユーザーデータがない場合は作成
          const { data: newUser, error: createError } = await supabase
            .from('users')
            .insert([
              {
                id: session.user.id,
                email: session.user.email,
                first_name: '',
                last_name: '',
              }
            ])
            .select()
            .single();

          if (createError) {
            throw createError;
          }

          if (newUser) {
            setUser({
              id: newUser.id,
              email: newUser.email,
              firstName: newUser.first_name,
              lastName: newUser.last_name,
              subscription: newUser.subscription,
            });
            setIsAuthenticated(true);
          }
        }
      } catch (error: any) {
        console.error('Error in auth state change:', error);
        setUser(null);
        setIsAuthenticated(false);
        
        // セッションエラーの場合はサインアウト
        if (error?.message === 'No active session') {
          await supabase.auth.signOut();
        }
      } finally {
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      console.log('Starting login process for:', email);

      // ログイン試行
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error('Login error:', authError);
        if (authError.message.includes('Invalid login credentials')) {
          return {
            success: false,
            message: 'メールアドレスまたはパスワードが正しくありません',
          };
        }
        if (authError.message.includes('Email not confirmed')) {
          return {
            success: false,
            message: 'メールアドレスの確認が必要です。確認メールをご確認ください。',
          };
        }
        return {
          success: false,
          message: `認証エラー: ${authError.message}`,
        };
      }

      if (!authData.user) {
        console.error('No user data returned');
        return {
          success: false,
          message: 'ユーザー情報が見つかりません',
        };
      }

      // セッションの確認
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session) {
        console.error('Session error:', sessionError);
        return {
          success: false,
          message: 'セッションの取得に失敗しました',
        };
      }

      // ユーザーデータの取得
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (userError) {
        console.error('Error fetching user data:', userError);
        return {
          success: false,
          message: 'ユーザーデータの取得に失敗しました',
        };
      }

      if (userData) {
        console.log('User data found:', {
          id: userData.id,
          email: userData.email,
          firstName: userData.first_name,
          lastName: userData.last_name,
        });

        // ユーザー状態を更新
        setUser({
          id: userData.id,
          email: userData.email,
          firstName: userData.first_name,
          lastName: userData.last_name,
          bio: userData.bio,
          occupation: userData.occupation,
          location: userData.location,
          website: userData.website,
          twitter: userData.twitter,
          avatar_url: userData.avatar_url,
          subscription: userData.subscription,
        });
        setIsAuthenticated(true);

        return { success: true };
      }

      // ユーザーデータがない場合は作成
      console.log('Creating new user data...');
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email: authData.user.email,
            first_name: '',
            last_name: '',
          }
        ])
        .select()
        .single();

      if (createError) {
        console.error('Error creating user:', createError);
        return {
          success: false,
          message: 'ユーザーデータの作成に失敗しました',
        };
      }

      if (newUser) {
        setUser({
          id: newUser.id,
          email: newUser.email,
          firstName: newUser.first_name,
          lastName: newUser.last_name,
          subscription: newUser.subscription,
        });
        setIsAuthenticated(true);
        return { success: true };
      }

      return {
        success: false,
        message: 'ユーザーデータの作成に失敗しました',
      };
    } catch (error: any) {
      console.error('Login process failed:', error);
      return {
        success: false,
        message: error.message || 'ログイン処理中にエラーが発生しました',
      };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setIsAuthenticated(false);
      setUser(null);
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const signup = async (params: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<AuthResponse> => {
    try {
      console.log('Attempting signup with:', { email: params.email });
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: params.email,
        password: params.password,
        options: {
          data: {
            first_name: params.firstName,
            last_name: params.lastName,
          },
        },
      });

      if (authError) {
        console.error('Signup auth error:', authError);
        return {
          success: false,
          message: authError.message,
        };
      }

      if (!authData.user) {
        console.error('No user data returned from signup');
        return {
          success: false,
          message: 'アカウントの作成に失敗しました',
        };
      }

      console.log('Auth successful, creating user data');
      const newUser = await createUser({
        id: authData.user.id,
        email: params.email,
        first_name: params.firstName,
        last_name: params.lastName,
      });

      if (!newUser) {
        console.error('Failed to create user data');
        return {
          success: false,
          message: 'ユーザーデータの作成に失敗しました',
        };
      }

      setUser({
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.first_name,
        lastName: newUser.last_name,
        subscription: newUser.subscription,
      });
      setIsAuthenticated(true);

      return { success: true };
    } catch (error: any) {
      console.error('Signup failed:', error);
      return {
        success: false,
        message: error.message || 'アカウントの作成に失敗しました',
      };
    }
  };

  const updateProfile = async (updates: Partial<AuthUser>): Promise<AuthResponse> => {
    try {
      if (!user) {
        return {
          success: false,
          message: 'ユーザーが認証されていません',
        };
      }

      // Supabaseのusersテーブルを更新
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update({
          first_name: updates.firstName,
          last_name: updates.lastName,
          bio: updates.bio,
          occupation: updates.occupation,
          location: updates.location,
          website: updates.website,
          twitter: updates.twitter,
          avatar_url: updates.avatar_url,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        return {
          success: false,
          message: 'プロフィールの更新に失敗しました',
        };
      }

      // ローカルのユーザー状態を更新
      setUser({
        ...user,
        firstName: updatedUser.first_name,
        lastName: updatedUser.last_name,
        bio: updatedUser.bio,
        occupation: updatedUser.occupation,
        location: updatedUser.location,
        website: updatedUser.website,
        twitter: updatedUser.twitter,
        avatar_url: updatedUser.avatar_url,
      });

      return {
        success: true,
        message: 'プロフィールを更新しました',
      };
    } catch (error: any) {
      console.error('Profile update failed:', error);
      return {
        success: false,
        message: error.message || 'プロフィールの更新に失敗しました',
      };
    }
  };

  const updateUserSubscription = async (plan: string) => {
    try {
      if (!user) {
        console.error('No user found');
        return false;
      }

      const updatedUser = await updateSubscription(user.id, plan);
      if (!updatedUser) {
        console.error('Failed to update subscription');
        return false;
      }

      setUser({
        ...user,
        subscription: updatedUser.subscription,
      });

      return true;
    } catch (error) {
      console.error('Subscription update failed:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
        signup,
        updateProfile,
        updateSubscription: updateUserSubscription,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  const WithAuthComponent = (props: P): ReactElement | null => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        const currentPath = router.asPath;
        router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      }
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithAuthComponent;
}

export function withSubscription<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  const WithSubscriptionComponent = (props: P): ReactElement | null => {
    const { isAuthenticated, isLoading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) {
          const currentPath = router.asPath;
          router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
        } else if (!user?.subscription || user.subscription.status !== 'active') {
          router.push('/auth/payment');
        }
      }
    }, [isLoading, isAuthenticated, user]);

    if (isLoading || !isAuthenticated || !user?.subscription || user.subscription.status !== 'active') {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithSubscriptionComponent.displayName = `withSubscription(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithSubscriptionComponent;
}

export default AuthProvider;
