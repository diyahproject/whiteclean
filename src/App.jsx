import React, { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import StoriesSection from './components/StoriesSection';
import QuoteSection from './components/QuoteSection';
import TimelinePage from './components/TimelinePage';
import QuizPage from './components/QuizPage';
import DownloadPage from './components/DownloadPage';
import SettingsPage from './components/SettingsPage';
import BottomNavigation from './components/BottomNavigation';

// Sample data for historical events
const sampleEvents = [
  {
    id: 1,
    hijri_year: 0,
    gregorian_year: 571,
    gregorian_month: "April",
    title: "Kelahiran Rasulullah ﷺ",
    subtitle: "Tahun Gajah di Makkah",
    description: "Muhammad ﷺ lahir pada hari Senin, 12 Rabiul Awwal tahun Gajah (571 M) di Makkah. Kelahirannya membawa berkah dan cahaya bagi seluruh alam. Ayahnya Abdullah telah wafat sebelum beliau lahir.",
    category: "keluarga",
    location: "Makkah",
    duration: "Hari Senin, 12 Rabiul Awwal",
    map_image_url: "https://images.unsplash.com/photo-1519973641773-7c87c073a5a7?q=80&w=1974&auto=format&fit=crop",
    parties_involved: ["Aminah binti Wahab (Ibu)", "Abdul Muthalib (Kakek)", "Bani Hasyim"],
    fun_fact: "Pada malam kelahiran Rasulullah ﷺ, api di kuil-kuil Persia padam dan istana Kisra berguncang.",
    references: ["Sirah Nabawiyah - Ibnu Hisyam", "Ar-Rahiq Al-Makhtum - Al-Mubarakfuri"]
  },
  {
    id: 2,
    hijri_year: 0,
    gregorian_year: 576,
    gregorian_month: "Agustus",
    title: "Wafatnya Aminah",
    subtitle: "Kehilangan Ibunda Tercinta",
    description: "Aminah binti Wahab, ibunda Rasulullah ﷺ, wafat ketika Muhammad berusia 6 tahun di Abwa dalam perjalanan pulang dari Madinah setelah mengunjungi makam suaminya.",
    category: "keluarga",
    location: "Abwa (antara Makkah dan Madinah)",
    duration: "1 hari",
    parties_involved: ["Aminah binti Wahab", "Muhammad ﷺ", "Umm Aiman (pengasuh)"],
    fun_fact: "Setelah wafatnya ibunda, Muhammad ﷺ diasuh oleh kakeknya Abdul Muthalib.",
    references: ["Sirah Nabawiyah - Ibnu Hisyam", "Tabaqat Ibnu Sa'd"]
  },
  {
    id: 3,
    hijri_year: 4,
    gregorian_year: 625,
    gregorian_month: "Agustus",
    title: "Perang Bani An-Nadhir",
    subtitle: "Pengusiran Bani Nadhir dari Madinah",
    description: "Pengepungan dan pengusiran suku Yahudi Bani Nadhir dari Madinah setelah mereka merencanakan untuk membunuh Nabi Muhammad ﷺ.",
    category: "perang",
    location: "Madinah",
    duration: "15 hari",
    parties_involved: ["Kaum Muslim", "Bani Nadhir"],
    fun_fact: "Harta rampasan dari Bani Nadhir menjadi fai' pertama yang diterima kaum Muslim.",
    references: ["Sirah Nabawiyah - Ibnu Hisyam", "Al-Quran Surah Al-Hasyr"]
  },
  {
    id: 4,
    hijri_year: 4,
    gregorian_year: 625,
    gregorian_month: "Maret",
    title: "Wafatnya Zainab binti Khuzaimah",
    subtitle: "Ummul Masakin",
    description: "Zainab binti Khuzaimah, salah satu istri Nabi yang dikenal dengan kedermawanannya, wafat hanya beberapa bulan setelah pernikahannya.",
    category: "keluarga",
    location: "Madinah",
    duration: "1 hari",
    parties_involved: ["Zainab binti Khuzaimah", "Rasulullah ﷺ"],
    fun_fact: "Beliau dijuluki 'Ummul Masakin' (Ibu orang-orang miskin) karena sifatnya yang sangat dermawan.",
    references: ["Tabaqat Ibnu Sa'd"]
  },
  {
    id: 5,
    hijri_year: 4,
    gregorian_year: 626,
    gregorian_month: "April",
    title: "Pernikahan Nabi dengan Ummu Salamah",
    subtitle: "Pernikahan dengan Janda Pahlawan Uhud",
    description: "Rasulullah ﷺ menikahi Hindun binti Abi Umayyah (Ummu Salamah), janda dari Abu Salamah yang gugur setelah Perang Uhud.",
    category: "keluarga",
    location: "Madinah",
    duration: "1 hari",
    parties_involved: ["Rasulullah ﷺ", "Ummu Salamah"],
    fun_fact: "Ummu Salamah dikenal karena kecerdasan dan kebijaksanaannya, dan meriwayatkan banyak hadits.",
    references: ["Sirah Nabawiyah - Ibnu Hisyam"]
  },
  {
    id: 6,
    hijri_year: 5,
    gregorian_year: 627,
    gregorian_month: "Maret",
    title: "Perang Al-Ahzab (Khandaq)",
    subtitle: "Perang Parit yang Menentukan",
    description: "Perang besar dimana kaum Muslim mempertahankan Madinah dengan menggali parit di sekeliling kota. Strategi ini berhasil mengalahkan koalisi suku-suku Arab dan Yahudi.",
    category: "perang",
    location: "Madinah",
    duration: "27 hari pengepungan",
    parties_involved: ["Kaum Muslim", "Suku Quraisy", "Suku Ghatafan", "Bani Quraizah"],
    fun_fact: "Ide menggali parit datang dari Salman al-Farisi yang terinspirasi dari tradisi Persia.",
    references: ["Shahih Bukhari", "Sirah Nabawiyah - Ibnu Hisyam"]
  },
  {
    id: 7,
    hijri_year: 5,
    gregorian_year: 627,
    gregorian_month: "Mei",
    title: "Pernikahan Nabi dengan Zainab binti Jahsy",
    subtitle: "Pernikahan yang Diperintahkan Allah",
    description: "Pernikahan Rasulullah ﷺ dengan Zainab binti Jahsy setelah bercerai dari Zaid bin Haritsah, yang menunjukkan bahwa anak angkat bukanlah anak kandung dalam hukum Islam.",
    category: "keluarga",
    location: "Madinah",
    duration: "1 hari",
    parties_involved: ["Rasulullah ﷺ", "Zainab binti Jahsy", "Zaid bin Haritsah"],
    fun_fact: "Pernikahan ini langsung diperintahkan Allah melalui wahyu dalam Al-Quran.",
    references: ["Surah Al-Ahzab ayat 37", "Shahih Bukhari"]
  },
  {
    id: 8,
    hijri_year: 5,
    gregorian_year: 627,
    gregorian_month: "Desember",
    title: "Perang Khandaq",
    subtitle: "Strategi Parit yang Mengagumkan",
    description: "Perang dimana kaum Muslim berhasil mempertahankan Madinah dari serangan gabungan suku-suku Arab dengan strategi menggali parit yang belum pernah ada sebelumnya di Arabia.",
    category: "perang",
    location: "Madinah",
    duration: "1 bulan",
    parties_involved: ["Kaum Muslim", "Koalisi Suku Arab", "Bani Nadhir"],
    fun_fact: "Angin kencang yang menghancurkan kemah musuh dianggap sebagai bantuan Allah.",
    references: ["Al-Quran Surah Al-Ahzab", "Sirah Nabawiyah"]
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [textSize, setTextSize] = useState('base');
  const storiesRef = useRef(null);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <HeroSection />
            <SearchBar sampleEvents={sampleEvents} />
            <div ref={storiesRef}>
              <StoriesSection />
            </div>
            <QuoteSection />
          </div>
        );
      case 'timeline':
        return <TimelinePage sampleEvents={sampleEvents} />;
      case 'quiz':
        return <QuizPage />;
      case 'download':
        return <DownloadPage />;
      case 'settings':
        return <SettingsPage textSize={textSize} onTextSizeChange={setTextSize} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-[#E5E7EB]">
            <div className="text-center p-8">
              <h2 className="text-3xl font-bold text-[#A67C52] mb-4">
                Halaman {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h2>
              <p className="text-gray-700">
                Fitur ini sedang dalam pengembangan
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-[#E5E7EB] text-${textSize}`}>
      <main className="pb-24">
        {renderCurrentPage()}
      </main>

      <BottomNavigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
