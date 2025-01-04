import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, User } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className='h-20'>
        <nav className="flex justify-between h-full px-6 items-center space-x-4 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/svg/road to entrepreneur.svg"
                alt="top"
                width={120}
                height={120}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex flex-col items-center"
              >
                <Menu className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Contents</span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-[480px] bg-white rounded-lg shadow-xl z-20 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    <div>
                      <ul className="space-y-4">
                        <li>
                          <Link href="/invester_entrepreneur/invester_entrepreneur" className="group">
                            <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                              <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                              </svg>
                              <span className="font-medium">投資・起業</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="./sidebusiness/sidebusiness" className="group">
                            <div className='flex items-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap'>
                              <svg className="mr-3 w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                              </svg>
                              <span className="font-medium">サイドビジネス</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        <li>
                          <Link href="./future_world/future_world" className="group">
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

            <Link href="/mypage/dream_image" className="group">
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
          </div>
        </nav>
      </div>
    </header>
  )
}

export function Header_mypage() {
  return (
    <div className="h-28">
      <nav className="flex justify-between h-full pr-4 items-center space-x-4 bg-white text-xl">
        <div>
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/svg/road to entrepreneur.svg"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/mypage/dream_image">
            <div className="text-center cursor-pointer">
              <span className="font-medium text-gray-700">マイページ</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export function Header_sidebusiness() {
  return (
    <div className="h-28">
      <nav className="flex justify-between h-full pr-4 items-center space-x-4 bg-white text-xl">
        <div>
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/svg/road to entrepreneur.svg"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/mypage/dream_image">
            <div className="text-center cursor-pointer">
              <span className="font-medium text-gray-700">マイページ</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export function Header_invester() {
  return (
    <header className="h-16 bg-gradient-to-r from-blue-900 to-blue-950 border-b border-blue-800/50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/road to entrepreneur.png"
                  alt="Road to Entrepreneur Logo"
                  fill
                  priority
                  className="rounded-full bg-white/10 p-1 object-cover"
                />
              </div>
              <span className="text-lg font-medium text-white/90">Road to Entrepreneur</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-4">
            <Link href="/mypage/mypage">
              <div className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors">
                マイページ
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}