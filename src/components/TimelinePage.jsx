import React, { useState } from 'react';
import { BookOpen, ChevronsRight } from 'lucide-react';
import EventDetail from './EventDetail';

const TimelinePage = ({ sampleEvents }) => {
  const [events] = useState(sampleEvents);
  const [selectedYear, setSelectedYear] = useState(5);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const years = ['Sebelum H', ...Array.from({ length: 11 }, (_, i) => i + 1)];

  const handleYearSelect = (year) => {
    setSelectedYear(year === 'Sebelum H' ? 0 : year);
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter(e => e.hijri_year === selectedYear);

  return (
    <div className="py-12 md:py-20 px-4 container mx-auto bg-[#E5E7EB] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#A67C52] mb-4">
          Timeline Sejarah
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Jelajahi peristiwa-peristiwa penting dari kehidupan Rasulullah ﷺ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Mobile Dropdown */}
        <div className="md:hidden mb-6">
          <div
            className="bg-[#E5E7EB] p-4 rounded-2xl"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
            <h3 className="font-bold text-lg text-[#A67C52] mb-4 text-center">
              Pilih Tahun Hijriyah
            </h3>
            <select
              value={selectedYear === 0 ? 'Sebelum H' : selectedYear.toString()}
              onChange={(e) => handleYearSelect(e.target.value === 'Sebelum H' ? 'Sebelum H' : parseInt(e.target.value))}
              className="w-full bg-[#F3F4F6] border-none text-[#A67C52] font-semibold p-3 rounded-lg"
              style={{
                boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'
              }}
            >
              {years.map((year) => (
                <option key={year} value={year.toString()}>
                  {year} {year !== 'Sebelum H' && 'Hijriyah'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block md:col-span-1">
          <div
            className="sticky top-20 bg-[#E5E7EB] p-4 rounded-2xl"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
            <h3 className="font-bold text-lg text-[#A67C52] mb-4 text-center">
              Tahun Hijriyah
            </h3>
            <div className="space-y-2">
              {years.map((year) => {
                const isActive = (selectedYear === year || (selectedYear === 0 && year === 'Sebelum H'));
                return (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 font-semibold text-[#B99B7E] ${isActive ? 'text-[#A67C52]' : ''}`}
                    style={{
                      boxShadow: isActive
                        ? 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'
                        : '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'
                    }}
                  >
                    {year} {year !== 'Sebelum H' && 'Hijriyah'}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 md:col-span-3">
          {selectedEvent ? (
            <EventDetail
              event={selectedEvent}
              onBack={() => setSelectedEvent(null)}
            />
          ) : (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#A67C52] mb-4">
                Peristiwa Tahun {selectedYear === 0 ? 'Sebelum Hijrah' : `${selectedYear} H`}
              </h2>
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="w-full p-4 bg-[#E5E7EB] rounded-xl transition-all duration-300 flex items-center justify-between text-left hover:bg-[#D1D5DB]"
                    style={{
                      boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-[#A67C52] flex-shrink-0"/>
                      <span className="font-semibold text-gray-700">{event.title}</span>
                    </div>
                    <ChevronsRight className="w-5 h-5 text-[#B99B7E]"/>
                  </button>
                ))
              ) : (
                <p
                  className="text-center text-gray-700 p-8 bg-[#E5E7EB] rounded-2xl"
                  style={{
                    boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff'
                  }}
                >
                  Tidak ada data peristiwa untuk tahun ini.
                </p>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TimelinePage;
