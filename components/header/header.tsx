import Link from 'next/link'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu, User, BarChart3 } from 'lucide-react'
import { MarketTicker } from './market-ticker'
import { useAuth } from '../../lib/auth';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  // ドロップダウンメニューの外側をクリックしたときの処理
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('dropdown-menu');
      const button = document.getElementById('dropdown-button');
      
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className='h-16'>
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src="/svg/road to entrepreneur.svg"
                  alt="top"
                  width={90}
                  height={90}
                />
              </Link>
            </div>

            <div className="flex-1 px-8">
              <MarketTicker />
            </div>

            <div className="flex items-center space-x-8">
              {isAuthenticated ? (
                // 認証済みの場合
                <>
                  <div className="relative">
                    <button
                      id="dropdown-button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="group flex flex-col items-center"
                    >
                      <Menu className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Contents</span>
                    </button>

                    {isOpen && (
                      <div id="dropdown-menu" className="absolute right-0 mt-2 w-[480px] bg-white rounded-lg shadow-xl z-20 border border-gray-100">
                        <div className="grid grid-cols-2 gap-6 p-6">
                          <div>
                            <ul className="space-y-4">
                              <li>
                                <Link 
                                  href="/invester_entrepreneur/invester_entrepreneur" 
                                  className="group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                                    <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                    </svg>
                                    <span className="font-medium">投資・起業</span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  href="/sidebusiness" 
                                  className="group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                                    <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                    <span className="font-medium">サイドビジネス</span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  href="/library" 
                                  className="group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                                    <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">図書館</span>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-4">
                              <li>
                                <Link 
                                  href="/future_world" 
                                  className="group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                                    <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">未来の世界</span>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link href="/dashboard" className="group">
                    <div className="flex flex-col items-center">
                      <BarChart3 className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Dashboard</span>
                    </div>
                  </Link>

                  <Link href="/mypage/account/profile" className="group">
                    <div className="flex flex-col items-center">
                      <User className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Mypage</span>
                    </div>
                  </Link>

                  <Link href="https://join.slack.com/t/w1630562732-cyn421787/shared_invite/zt-1kfpgy3wg-PQlOj6~xgI1qrfR5CA5eHw" className="group">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/svg/slack.svg"
                        alt="Slack"
                        width={24}
                        height={24}
                        className="group-hover:opacity-80 transition-opacity"
                      />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Slack</span>
                    </div>
                  </Link>
                </>
              ) : (
                // 未認証の場合
                <div className="flex items-center space-x-4">
                  <Link href="/auth/login">
                    <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                      サインイン
                    </button>
                  </Link>
                  <Link href="/auth/signup">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      サインアップ
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
