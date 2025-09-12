export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
  category: '投資' | '起業' | '経済' | '暗号通貨';
  youtubeUrl: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: '投資・起業に関する教育動画',
    description: '投資や起業に関する重要な知識と実践的なアプローチについて学べる教育動画です。',
    thumbnail: 'https://img.youtube.com/vi/h7xVcRvd0xY/maxresdefault.jpg',
    duration: '動画',
    views: '視聴回数',
    publishedAt: '公開日',
    category: '投資',
    youtubeUrl: 'https://youtu.be/h7xVcRvd0xY?si=3h5dE8VSITY39rzV'
  }
];
