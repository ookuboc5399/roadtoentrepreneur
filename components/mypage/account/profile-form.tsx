import { useState, useEffect } from 'react';
import { useAuth } from '../../../lib/auth';
import { supabase } from '../../../lib/supabase';
import { Camera } from 'lucide-react';
import Image from 'next/image';

interface ProfileFormProps {
  onSubmit: (profile: any) => void;
}

export function ProfileForm({ onSubmit }: ProfileFormProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    bio: user?.bio || '',
    occupation: user?.occupation || '',
    location: user?.location || '',
    website: user?.website || '',
    twitter: user?.twitter || '',
    avatar_url: user?.avatar_url || null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        bio: user.bio || '',
        occupation: user.occupation || '',
        location: user.location || '',
        website: user.website || '',
        twitter: user.twitter || '',
        avatar_url: user.avatar_url || null,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      if (!e.target.files || !e.target.files[0] || !user) return;

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      
      // 許可する拡張子をチェック
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      if (!fileExt || !allowedExtensions.includes(fileExt)) {
        setMessage({ 
          type: 'error', 
          text: '画像形式は jpg, jpeg, png のみ対応しています'
        });
        return;
      }

      // ファイルサイズチェック（5MB以下）
      if (file.size > 5 * 1024 * 1024) {
        setMessage({
          type: 'error',
          text: 'ファイルサイズは5MB以下にしてください'
        });
        return;
      }

      const fileName = `avatar_${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      // 画像をアップロード
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { 
          upsert: true,
          contentType: `image/${fileExt}`
        });

      if (uploadError) {
        throw uploadError;
      }

      // 公開URLを取得
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // usersテーブルのavatar_urlを更新
      const { error: updateError } = await supabase
        .from('users')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      setFormData(prev => ({ ...prev, avatar_url: publicUrl }));
      setMessage({ type: 'success', text: 'プロフィール画像を更新しました' });

      // 親コンポーネントに変更を通知
      onSubmit({ ...formData, avatar_url: publicUrl });
    } catch (error) {
      console.error('Error uploading avatar:', error);
      setMessage({ type: 'error', text: '画像のアップロードに失敗しました' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // usersテーブルを更新
      const { error: updateError } = await supabase
        .from('users')
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          bio: formData.bio,
          occupation: formData.occupation,
          location: formData.location,
          website: formData.website,
          twitter: formData.twitter,
        })
        .eq('id', user?.id);

      if (updateError) {
        throw updateError;
      }

      setMessage({ type: 'success', text: 'プロフィールを更新しました' });
      onSubmit(formData);
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'プロフィールの更新に失敗しました' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* アバター画像 */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          {formData.avatar_url ? (
            <Image
              src={formData.avatar_url}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-4xl">{formData.firstName.charAt(0)}</span>
            </div>
          )}
          <label
            htmlFor="avatar-upload"
            className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors"
          >
            <Camera className="h-5 w-5 text-white" />
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </label>
        </div>
        <p className="text-sm text-gray-500">
          クリックして画像をアップロード
        </p>
      </div>

      {message && (
        <div className={`p-4 rounded-md ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      {/* 名前 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            姓
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            名
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          disabled
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
        />
        <p className="mt-1 text-sm text-gray-500">
          メールアドレスは変更できません
        </p>
      </div>

      {/* 自己紹介 */}
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          自己紹介
        </label>
        <textarea
          name="bio"
          id="bio"
          rows={4}
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* 職業 */}
      <div>
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
          職業
        </label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* 居住地 */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          居住地
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Webサイト */}
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Webサイト
        </label>
        <input
          type="url"
          name="website"
          id="website"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Twitter */}
      <div>
        <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
          Twitter
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            @
          </span>
          <input
            type="text"
            name="twitter"
            id="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 送信ボタン */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? '更新中...' : '保存する'}
        </button>
      </div>
    </form>
  );
}
