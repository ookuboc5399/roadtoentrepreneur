import { useState } from 'react';
import { Shield, Key, Smartphone, Mail, AlertTriangle } from 'lucide-react';

interface SecuritySettings {
  twoFactorEnabled: boolean;
  emailVerified: boolean;
  lastPasswordChange: string;
  loginHistory: Array<{
    date: string;
    device: string;
    location: string;
    status: 'success' | 'failed';
  }>;
}

interface SecuritySettingsProps {
  settings: SecuritySettings;
  onUpdateSettings: (settings: Partial<SecuritySettings>) => void;
}

export function SecuritySettings({ settings, onUpdateSettings }: SecuritySettingsProps) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('新しいパスワードと確認用パスワードが一致しません。');
      return;
    }
    // TODO: パスワード更新のAPI呼び出し
    console.log('Password update:', { currentPassword, newPassword });
    setShowPasswordForm(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-8">
      {/* 2段階認証設定 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Smartphone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">2段階認証</h3>
              <p className="text-gray-600">
                {settings.twoFactorEnabled
                  ? '2段階認証が有効です'
                  : '2段階認証を有効にして、アカウントのセキュリティを強化してください'}
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={settings.twoFactorEnabled}
              onChange={() =>
                onUpdateSettings({ twoFactorEnabled: !settings.twoFactorEnabled })
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* パスワード変更 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <Key className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-medium">パスワード</h3>
            <p className="text-gray-600">
              最終更新日: {settings.lastPasswordChange}
            </p>
          </div>
        </div>

        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            パスワードを変更
          </button>
        ) : (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                現在のパスワード
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                新しいパスワード
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                新しいパスワード（確認）
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                変更を保存
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </form>
        )}
      </div>

      {/* メール認証状態 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-medium">メール認証</h3>
            <p className="text-gray-600">
              {settings.emailVerified
                ? 'メールアドレスは認証済みです'
                : 'メールアドレスの認証が必要です'}
            </p>
          </div>
        </div>
      </div>

      {/* ログイン履歴 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">ログイン履歴</h3>
        <div className="space-y-4">
          {settings.loginHistory.map((log, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                log.status === 'failed' ? 'bg-red-50' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-4">
                {log.status === 'failed' ? (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                ) : (
                  <Shield className="h-5 w-5 text-green-500" />
                )}
                <div>
                  <p className="font-medium">
                    {log.device} - {log.location}
                  </p>
                  <p className="text-sm text-gray-500">{log.date}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  log.status === 'failed'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {log.status === 'failed' ? 'ログイン失敗' : 'ログイン成功'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
