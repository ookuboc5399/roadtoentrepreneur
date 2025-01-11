import React, { useState, useEffect } from 'react';
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
  }, []);

  const fetchEconomicCalendar = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api2/economic-calendar/`);
      if (!response.ok) throw new Error('Failed to fetch economic calendar');
      const data = await response.json();
      setAllEvents(data);
      
      // 現在の日付のイベントを設定
      const currentDateStr = selectedDate.toISOString().split('T')[0];
      setEvents(data[currentDateStr] || []);
    } catch (error) {
      console.error('Error fetching economic calendar:', error);
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen bg-gray-100 flex">
      <Header />
      <Chapterinvester />
      <div className="flex-1 ml-64 px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-8">経済指標カレンダー</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* カレンダー */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
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

          {/* フィルターとイベントリスト */}
          <div className="space-y-6">
            {/* フィルター */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">フィルター</h3>
              
              <div className="space-y-4">
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

            {/* イベントリスト */}
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
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowModal(true);
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">{event.time}</span>
                        <span className={`px-2 py-1 rounded-full text-sm ${getImpactColor(event.impact)}`}>
                          {event.impact === 'high' ? '重要' : event.impact === 'medium' ? '中程度' : '軽度'}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        <span className="font-semibold">{event.country}</span>
                        <span className="mx-2">•</span>
                        <span>{event.event}</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">実績</div>
                          <div className="font-medium">{event.actual || '-'}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">予想</div>
                          <div className="font-medium">{event.forecast || '-'}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">前回</div>
                          <div className="font-medium">{event.previous || '-'}</div>
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
        }
        
        :global(.react-calendar__tile--active) {
          background: #2563eb !important;
          color: white;
        }
        
        :global(.react-calendar__tile--now) {
          background: #dbeafe;
        }
      `}</style>
    </div>
  );
}
