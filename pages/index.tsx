import Layout from '../components/Layout';
import Link from 'next/link';
import React, { useEffect } from 'react';
import News from "../components/news/news";
import { getAllPostsData } from '../lib/newss';
import axios from 'axios';
import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from './_app';
import { ChevronRight, TrendingUp, BookOpen, Users } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface TradingViewNewsItem {
  title: string;
  description?: string;
  link: string;
  source: string;
  time: string;
}

interface HomeProps {
  newss: NewsItem[];
  tradingViewNews: TradingViewNewsItem[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: NextPageWithLayout<HomeProps> = ({ newss, tradingViewNews }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* ヒーローセクション */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="sm:text-center lg:text-left"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span className="block">投資の未来を</span>
                  <span className="block text-blue-600">あなたの手に</span>
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  最新の投資情報と分析ツールで、あなたの投資をサポートします。
                  プロフェッショナルの知見を活用し、より良い投資判断を。
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div className="rounded-md shadow">
                    <Link href="/auth/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300">
                      無料で始める
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-300">
                      詳しく見る
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ pointerEvents: 'none' }}
              src="/videos/Skyscrapers.mp4"
            />
          </motion.div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="lg:text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-base text-blue-600 font-semibold tracking-wide uppercase"
            >
              Features
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              投資をより賢く、より簡単に
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            >
              最新のテクノロジーと専門家の知見を組み合わせた、次世代の投資プラットフォーム
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="mt-10"
          >
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  icon: TrendingUp,
                  title: 'リアルタイム分析',
                  description: '市場データをリアルタイムで分析し、最適な投資タイミングを提案'
                },
                {
                  icon: BookOpen,
                  title: '専門家の知見',
                  description: '経験豊富な専門家による分析レポートと投資アドバイス'
                },
                {
                  icon: Users,
                  title: 'コミュニティ',
                  description: '投資家同士の情報交換と学び合いの場を提供'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ニュースセクション */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="lg:text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-base text-blue-600 font-semibold tracking-wide uppercase"
            >
              News
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              最新の金融ニュース
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {tradingViewNews && tradingViewNews.map((news, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <a 
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                      {news.title}
                    </p>
                    {news.description && (
                      <p className="mt-3 text-base text-gray-500 line-clamp-2">
                        {news.description}
                      </p>
                    )}
                  </a>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{news.source}</span>
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-500">{news.source.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {news.source}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={news.time}>{news.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* 金融関連ニュースのみを表示 */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 pt-4"
          >
            {newss && newss.map((news) => <News key={news.id} news={news} />)}
          </motion.div>
        </div>
      </div>

      {/* CTAセクション */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="bg-blue-700"
      >
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">投資の未来を始めましょう</span>
            <span className="block">今すぐ無料で始められます</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            プロフェッショナルの知見と最新のテクノロジーを活用して、
            あなたの投資をより良いものに。
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/auth/signup"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto transition-colors duration-300"
            >
              無料で始める
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// getLayoutを定義
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let newss: NewsItem[] = [];
  let tradingViewNews: TradingViewNewsItem[] = [];

  try {
    const allNews = await getAllPostsData();
    // 金融関連のニュースのみをフィルタリング
    newss = allNews.filter(news => news.category === '金融');
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await axios.get<TradingViewNewsItem[]>(`${baseUrl}/api/external/tradingview-news?limit=4`);
    if (response.data && Array.isArray(response.data)) {
      tradingViewNews = response.data;
    }
  } catch (error) {
    console.error('Error fetching trading view news:', error);
  }

  return {
    props: { 
      newss,
      tradingViewNews
    },
    revalidate: 300, // 5分ごとに再生成
  };
};

export default Home;
