import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { YouTubeVideo } from '../../data/youtubeVideos';

interface YouTubeSectionProps {
  videos: YouTubeVideo[];
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
      staggerChildren: 0.1
    }
  }
};

const YouTubeSection: React.FC<YouTubeSectionProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '投資': return 'bg-blue-100 text-blue-800';
      case '起業': return 'bg-green-100 text-green-800';
      case '経済': return 'bg-purple-100 text-purple-800';
      case '暗号通貨': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center mb-12"
        >
        </motion.div>

        {/* 動画プレーヤーエリア */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getYouTubeEmbedUrl(selectedVideo)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                ← 動画一覧に戻る
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={staggerChildren}
          className={`grid gap-6 ${selectedVideo ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={video.thumbnail}
                  alt={video.title}
                  onError={(e) => {
                    // サムネイルが読み込めない場合のフォールバック
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTAwTDIwMCAxNDBMMTYwIDE4MFYxMDBaIiBmaWxsPSIjNjM2NkY3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpIiBmb250LXNpemU9IjE0Ij5Zb3VUdWJlPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>
                    {video.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{video.views} views</span>
                  <span>{video.publishedAt}</span>
                </div>
                
                <button 
                  onClick={() => setSelectedVideo(video.youtubeUrl)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  動画を再生
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!selectedVideo && (
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
              もっと見る
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default YouTubeSection;
