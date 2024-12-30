import { Clock, Milestone } from 'lucide-react'

export function FutureTimeline() {
  const timelineEvents = [
    {
      year: '1990年代',
      title: 'インターネットの普及',
      description: 'World Wide Webの誕生と普及が始まる',
      icon: <Clock className="w-6 h-6" />
    },
    {
      year: '2000年代',
      title: 'Web2.0の時代',
      description: 'SNSやクラウドサービスの台頭',
      icon: <Clock className="w-6 h-6" />
    },
    // ... 現在までの歴史
    {
      year: '2020年代',
      title: 'AI革命',
      description: 'GPTやディープラーニングの進化',
      isPresent: true,
      icon: <Clock className="w-6 h-6" />
    },
    // ... 未来の予測
    {
      year: '2030年代',
      title: 'メタバース社会',
      description: '仮想空間と現実の融合',
      isFuture: true,
      icon: <Milestone className="w-6 h-6" />
    },
    // さらに未来の予測を追加
  ]

  return (
    <div className="relative">
      {/* 中央の時間軸ライン */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />
      
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`relative flex items-center ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}>
            {/* イベントカード */}
            <div className={`w-5/12 ${
              index % 2 === 0 ? 'pr-8' : 'pl-8'
            }`}>
              <div className={`p-4 rounded-lg ${
                event.isFuture 
                  ? 'bg-purple-900/30 border border-purple-500/50' 
                  : event.isPresent
                    ? 'bg-blue-900/30 border border-blue-500/50'
                    : 'bg-gray-900/30 border border-gray-500/50'
              }`}>
                <div className="flex items-center space-x-2">
                  {event.icon}
                  <span className="text-lg font-semibold text-white/90">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-2 text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-white/70">
                  {event.description}
                </p>
              </div>
            </div>

            {/* 中央のドット */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500" />
          </div>
        ))}
      </div>
    </div>
  )
} 