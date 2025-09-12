import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import { Header } from '../../../components/header/header';
import { Chapterinvester } from '../../../components/chapter/invester/chapter_invester';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { Value } from 'react-calendar/dist/cjs/shared/types';

interface EconomicEvent {
  time: string;
  country: string;
  event: string;
  impact: 'high' | 'medium' | 'low';
  actual?: string;
  forecast?: string;
  previous?: string;
}

type Impact = 'high' | 'medium' | 'low';

export default function EconomicIndicators() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [allEvents, setAllEvents] = useState<{ [key: string]: EconomicEvent[] }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedImpacts, setSelectedImpacts] = useState<Impact[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EconomicEvent | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const countries = ['日本', '米国', 'ユーロ圏'];
  const impacts: { value: Impact; label: string }[] = [
    { value: 'high', label: '重要' },
    { value: 'medium', label: '中程度' },
    { value: 'low', label: '軽度' }
  ];

  useEffect(() => {
    fetchEconomicCalendar();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchEconomicCalendar = async () => {
    try {
      const response = await fetch('/api/external/economic-calendar');
      if (!response.ok) throw new Error('Failed to fetch economic calendar');
      const data = await response.json();
      setAllEvents(data);
      
      // 現在の日付のイベントを設定
      const currentDateStr = selectedDate.toISOString().split('T')[0];
      setEvents(data[currentDateStr] || []);
    } catch (error) {
      console.error('Error fetching economic calendar:', error);
      // エラーが発生した場合、ダミーデータを生成
      const dummyData = generateDummyData();
      setAllEvents(dummyData);
      
      const currentDateStr = selectedDate.toISOString().split('T')[0];
      setEvents(dummyData[currentDateStr] || []);
    } finally {
      setLoading(false);
    }
  };

  const generateDummyData = () => {
    const today = new Date();
    const dummyData: { [key: string]: EconomicEvent[] } = {};

    // 今日から30日分のダミーデータを生成
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      
      // 各日に1-3個のイベントをランダムに生成
      const events: EconomicEvent[] = [];
      const eventCount = Math.floor(Math.random() * 3) + 1;
      
      for (let j = 0; j < eventCount; j++) {
        const eventTypes = [
          { name: '消費者物価指数', country: '日本', impact: 'high' as Impact },
          { name: '非農業部門雇用者数', country: '米国', impact: 'high' as Impact },
          { name: 'GDP成長率', country: '日本', impact: 'medium' as Impact },
          { name: '失業率', country: '米国', impact: 'medium' as Impact },
          { name: '小売売上高', country: '日本', impact: 'low' as Impact },
          { name: '製造業PMI', country: '米国', impact: 'medium' as Impact },
          { name: '消費者信頼感指数', country: '日本', impact: 'low' as Impact },
          { name: '住宅着工件数', country: '米国', impact: 'low' as Impact },
          { name: '貿易収支', country: '日本', impact: 'medium' as Impact },
          { name: '鉱工業生産指数', country: '米国', impact: 'medium' as Impact }
        ];
        
        const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        events.push({
          time: time,
          country: randomEvent.country,
          event: randomEvent.name,
          impact: randomEvent.impact,
          actual: Math.random() > 0.7 ? (Math.random() * 10).toFixed(1) + '%' : undefined,
          forecast: (Math.random() * 10).toFixed(1) + '%',
          previous: (Math.random() * 10).toFixed(1) + '%'
        });
      }
      
      dummyData[dateStr] = events;
    }

    return dummyData;
  };

  const handleDateChange = (value: Value, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      const dateStr = value.toISOString().split('T')[0];
      updateFilteredEvents(dateStr);
    } else if (Array.isArray(value) && value.length === 2) {
      console.log('範囲選択', value);
      // 必要に応じて範囲選択の処理を追加
    }
  };

  const updateFilteredEvents = (dateStr: string) => {
    let filteredEvents = allEvents[dateStr] || [];
    
    if (selectedCountries.length > 0) {
      filteredEvents = filteredEvents.filter(event => 
        selectedCountries.includes(event.country)
      );
    }
    
    if (selectedImpacts.length > 0) {
      filteredEvents = filteredEvents.filter(event => 
        selectedImpacts.includes(event.impact)
      );
    }
    
    // イベントを時間順にソート
    setEvents(filteredEvents.sort((a, b) => {
      const timeA = a.time.split(':').map(Number);
      const timeB = b.time.split(':').map(Number);
      return (timeA[0] * 60 + timeA[1]) - (timeB[0] * 60 + timeB[1]);
    }));
  };

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => {
      const newSelection = prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country];
      
      const dateStr = selectedDate.toISOString().split('T')[0];
      setTimeout(() => updateFilteredEvents(dateStr), 0);
      return newSelection;
    });
  };

  const toggleImpact = (impact: Impact) => {
    setSelectedImpacts(prev => {
      const newSelection = prev.includes(impact)
        ? prev.filter(i => i !== impact)
        : [...prev, impact];
      
      const dateStr = selectedDate.toISOString().split('T')[0];
      setTimeout(() => updateFilteredEvents(dateStr), 0);
      return newSelection;
    });
  };

  const getImpactColor = (impact: Impact) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout header={<Header />}>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          <Chapterinvester />
          <div className="flex-1 px-4 py-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">経済指標カレンダー</h1>
        
        {/* フィルターセクション */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">フィルター</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 国フィルター */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">国</h4>
              <div className="flex flex-wrap gap-2">
                {countries.map(country => (
                  <button
                    key={country}
                    onClick={() => toggleCountry(country)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                      ${selectedCountries.includes(country)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* 重要度フィルター */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">重要度</h4>
              <div className="flex flex-wrap gap-2">
                {impacts.map(impact => (
                  <button
                    key={impact.value}
                    onClick={() => toggleImpact(impact.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                      ${selectedImpacts.includes(impact.value)
                        ? getImpactColor(impact.value)
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {impact.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツエリア */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* カレンダー */}
          <div className="xl:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">カレンダー</h3>
              <Calendar
                onChange={(value, event) => handleDateChange(value, event)}
                value={selectedDate}
                className="w-full"
                tileClassName={({ date }) => {
                  const dateStr = date.toISOString().split('T')[0];
                  return allEvents[dateStr] ? 'has-events' : '';
                }}
              />
            </div>
          </div>

          {/* イベントリスト */}
          <div className="xl:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                {selectedDate.toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}のイベント
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : events.length === 0 ? (
                <p className="text-gray-500">この日の経済指標はありません</p>
              ) : (
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowModal(true);
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-lg font-semibold text-gray-900">{event.time}</div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(event.impact)}`}>
                            {event.impact === 'high' ? '重要' : event.impact === 'medium' ? '中程度' : '軽度'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.country}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-900 mb-4">
                        {event.event}
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">実績</div>
                          <div className="text-lg font-semibold text-gray-900">{event.actual || '-'}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">予想</div>
                          <div className="text-lg font-semibold text-gray-900">{event.forecast || '-'}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">前回</div>
                          <div className="text-lg font-semibold text-gray-900">{event.previous || '-'}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* イベント詳細モーダル */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{selectedEvent.event}</h3>
                <div className="flex items-center mt-2">
                  <span className="font-medium text-gray-700">{selectedEvent.country}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600">{selectedEvent.time}</span>
                  <span className="mx-2">•</span>
                  <span className={`px-2 py-1 rounded-full text-sm ${getImpactColor(selectedEvent.impact)}`}>
                    {selectedEvent.impact === 'high' ? '重要' : selectedEvent.impact === 'medium' ? '中程度' : '軽度'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">実績</div>
                <div className="text-lg font-semibold">{selectedEvent.actual || '-'}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">予想</div>
                <div className="text-lg font-semibold">{selectedEvent.forecast || '-'}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">前回</div>
                <div className="text-lg font-semibold">{selectedEvent.previous || '-'}</div>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                この経済指標は{selectedEvent.impact === 'high' ? '市場に大きな影響を与える可能性がある重要な指標' : 
                  selectedEvent.impact === 'medium' ? '市場に中程度の影響を与える可能性がある指標' : 
                  '市場への影響は限定的な指標'}です。
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.has-events) {
          background-color: #e5edff;
          border-radius: 50%;
        }
        
        :global(.react-calendar) {
          border: none;
          width: 100%;
          font-family: inherit;
        }
        
        :global(.react-calendar__navigation) {
          margin-bottom: 1rem;
        }
        
        :global(.react-calendar__navigation button) {
          min-width: 44px;
          background: none;
          font-size: 16px;
          margin-top: 8px;
        }
        
        :global(.react-calendar__navigation button:enabled:hover),
        :global(.react-calendar__navigation button:enabled:focus) {
          background-color: #e6e6e6;
        }
        
        :global(.react-calendar__month-view__weekdays) {
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.75em;
          margin-bottom: 0.5rem;
        }
        
        :global(.react-calendar__month-view__weekdays__weekday) {
          padding: 0.5rem;
        }
        
        :global(.react-calendar__month-view__days__day) {
          padding: 0.75rem 0.5rem;
          font-size: 14px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        :global(.react-calendar__month-view__days__day--weekend) {
          color: #d32f2f;
        }
        
        :global(.react-calendar__month-view__days__day--neighboringMonth) {
          color: #757575;
        }
        
        :global(.react-calendar__tile) {
          max-width: 100%;
          padding: 10px 6.6667px;
          background: none;
          text-align: center;
          line-height: 16px;
          font: inherit;
          font-size: 0.833em;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        :global(.react-calendar__tile:enabled:hover),
        :global(.react-calendar__tile:enabled:focus) {
          background-color: #e6e6e6;
          color: #000;
        }
        
        :global(.react-calendar__tile--active) {
          background: #2563eb !important;
          color: white;
        }
        
        :global(.react-calendar__tile--now) {
          background: #dbeafe;
          color: #000;
        }
        
        :global(.react-calendar__tile--hasActive) {
          background: #76baff;
        }
        
        :global(.react-calendar__tile--hasActive:enabled:hover),
        :global(.react-calendar__tile--hasActive:enabled:focus) {
          background: #a9d4ff;
        }
        
        :global(.react-calendar__tile--active:enabled:hover),
        :global(.react-calendar__tile--active:enabled:focus) {
          background: #1087ff;
        }
        
        :global(.react-calendar--selectRange .react-calendar__tile--hover) {
          background-color: #e6e6e6;
        }
      `}</style>
        </div>
      </div>
    </Layout>
  );
}
