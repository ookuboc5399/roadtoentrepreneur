import { useState } from 'react';
import { Bell, Mail, Smartphone, DollarSign, Target, AlertTriangle } from 'lucide-react';

interface NotificationChannel {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface NotificationCategory {
  id: string;
  label: string;
  description: string;
  icon: JSX.Element;
  channels: {
    email: boolean;
    push: boolean;
  };
}

interface NotificationSettingsProps {
  channels: NotificationChannel[];
  categories: NotificationCategory[];
  onUpdateChannel: (channelId: string, enabled: boolean) => void;
  onUpdateCategory: (categoryId: string, channel: 'email' | 'push', enabled: boolean) => void;
}

export function NotificationSettings({
  channels,
  categories,
  onUpdateChannel,
  onUpdateCategory,
}: NotificationSettingsProps) {
  return (
    <div className="space-y-8">
      {/* 通知チャンネル設定 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">通知チャンネル</h3>
        <div className="space-y-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  {channel.id === 'email' ? (
                    <Mail className="h-5 w-5" />
                  ) : (
                    <Smartphone className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{channel.label}</h4>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={channel.enabled}
                  onChange={(e) => onUpdateChannel(channel.id, e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* カテゴリー別通知設定 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">通知設定</h3>
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h4 className="font-medium">{category.label}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
              <div className="ml-12 grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">メール通知</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={category.channels.email}
                      onChange={(e) =>
                        onUpdateCategory(category.id, 'email', e.target.checked)
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">プッシュ通知</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={category.channels.push}
                      onChange={(e) =>
                        onUpdateCategory(category.id, 'push', e.target.checked)
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 通知頻度設定 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">通知頻度</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="realtime">リアルタイム</option>
              <option value="daily">1日1回</option>
              <option value="weekly">週1回</option>
            </select>
          </div>
          <p className="text-sm text-gray-600">
            ※重要な通知は、この設定に関係なく即時に配信されます
          </p>
        </div>
      </div>
    </div>
  );
}
