/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ovkxytqxuxfbidxljhfc.supabase.co', // あなたのSupabaseプロジェクトのドメイン
    ],
    unoptimized: true, // 静的エクスポート用
  },
  trailingSlash: true, // Azure Static Web Apps用
  async redirects() {
    return [
      {
        source: '/mypage',
        destination: '/mypage/goals/goal-setting',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
