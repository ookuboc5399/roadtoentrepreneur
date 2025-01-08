/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ovkxytqxuxfbidxljhfc.supabase.co', // あなたのSupabaseプロジェクトのドメイン
    ],
  },
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
