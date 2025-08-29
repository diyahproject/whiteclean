import React, { useState } from 'react';
import { Text, Bell, ChevronDown, Send } from 'lucide-react';
import Button from './Button';

const SettingsPage = ({ textSize, onTextSizeChange }) => {
  const [notifications, setNotifications] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const faqItems = [
    { q: "Dari mana sumber data aplikasi ini?", a: "Data sejarah dalam aplikasi ini diambil dari kitab-kitab Sirah Nabawiyah yang mu'tabar seperti Sirah Ibnu Hisyam dan Ar-Rahiq Al-Makhtum." },
    { q: "Apakah aplikasi ini gratis?", a: "Ya, aplikasi ini sepenuhnya gratis dan dibuat untuk tujuan edukasi dan dakwah." },
    { q: "Bagaimana cara melaporkan jika ada kesalahan data?", a: "Anda dapat menggunakan formulir 'Kritik & Saran' di bawah ini untuk melaporkan kesalahan atau memberikan masukan." }
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if(feedback.trim() === '') return;
    console.log("Feedback submitted:", feedback);
    setFeedbackSent(true);
    setFeedback('');
    setTimeout(() => setFeedbackSent(false), 3000);
  };

  return (
    <div className="py-12 md:py-20 px-4 container mx-auto bg-[#E5E7EB] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#A67C52] mb-4">
          Pengaturan
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Sesuaikan preferensi aplikasi Anda.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* General Settings */}
        <div className="bg-[#E5E7EB] p-6 rounded-2xl" style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}>
          <h2 className="text-2xl font-bold text-[#A67C52] mb-6">Umum</h2>

          {/* Text Size */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 p-4 rounded-lg" style={{boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff'}}>
            <div className="flex items-center text-gray-700 mb-3 sm:mb-0">
              <Text className="w-6 h-6 mr-3" />
              <span className="font-semibold">Ukuran Teks</span>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => onTextSizeChange('sm')} className={`p-2 rounded-full ${textSize === 'sm' ? 'bg-[#D1D5DB]' : 'bg-[#E5E7EB]'}`} style={{boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'}}><span className="text-xs font-bold">A</span></Button>
              <Button onClick={() => onTextSizeChange('base')} className={`p-2 rounded-full ${textSize === 'base' ? 'bg-[#D1D5DB]' : 'bg-[#E5E7EB]'}`} style={{boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'}}><span className="text-base font-bold">A</span></Button>
              <Button onClick={() => onTextSizeChange('lg')} className={`p-2 rounded-full ${textSize === 'lg' ? 'bg-[#D1D5DB]' : 'bg-[#E5E7EB]'}`} style={{boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'}}><span className="text-lg font-bold">A</span></Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex justify-between items-center p-4 rounded-lg" style={{boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff'}}>
            <div className="flex items-center text-gray-700">
              <Bell className="w-6 h-6 mr-3" />
              <span className="font-semibold">Notifikasi</span>
            </div>
            <button onClick={() => setNotifications(!notifications)} className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${notifications ? 'bg-[#A67C52]' : 'bg-[#D1D5DB]'}`} style={{boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'}}>
              <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${notifications ? 'transform translate-x-6' : ''}`} style={{boxShadow: '2px 2px 4px #bebebe, -2px -2px 4px #ffffff'}}></span>
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#E5E7EB] p-6 rounded-2xl" style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}>
          <h2 className="text-2xl font-bold text-[#A67C52] mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden" style={{boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'}}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-4 bg-[#E5E7EB] text-[#A67C52] font-semibold">
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-[#E5E7EB] text-gray-700" style={{boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'}}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About Team */}
        <div className="bg-[#E5E7EB] p-6 rounded-2xl" style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}>
          <h2 className="text-2xl font-bold text-[#A67C52] mb-6">Tentang Tim</h2>
          <div className="p-4 rounded-lg text-gray-700" style={{boxShadow: 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff'}}>
            <p className="italic text-left text-[#A67C52]">Di antara jejak masa, kami menulis dengan asa.<br />Di antara cahaya ilmu, kami menjaga amanah tanpa ragu.</p>

            <div className="my-6 space-y-3 text-left">
              <p><strong>Ustadz Nizar:</strong> Dewan syariat, yang menjaga jalur riwayat dan narasi tetap lurus sesuai shiroh nabi.</p>
              <p><strong>Mbak Ratih:</strong> Menenun kata penuh hikmah, agar sejarah berkilau indah.</p>
              <p><strong>Mbak Ella:</strong> Menulis dengan rasa, agar riwayat hidup kembali mempesona.</p>
              <p><strong>Mbak Ifa:</strong> Merangkai aksara, agar perjalanan agung tak sirna.</p>
              <p><strong>Mbak Veni:</strong> Menghadirkan makna, agar hikmah terpatri selamanya.</p>
              <p><strong>Mbak Rini:</strong> Menorehkan tinta, agar setiap kisah tak pernah sirna.</p>
              <p><strong>Mbak Ratna:</strong> Menyulam cerita, agar sirah hidup sepanjang masa.</p>
              <p><strong>Mbak Dee:</strong> Mengalirkan narasi, agar kebenaran tegak tanpa henti.</p>
              <p><strong>Pak Yudho:</strong> Merapikan bahasa, agar setiap kata berakhir dengan makna.</p>
            </div>

            <p className="italic text-center">Kami berpadu dalam satu tujuan,<br />Menghidupkan sirah sebagai tuntunan.<br />Bukan sekadar kenangan yang beku,<br />Melainkan cahaya yang membimbing waktu.</p>

            <p className="mt-6 font-semibold text-[#A67C52] text-center">“Sejarah adalah cermin jiwa,<br />yang menatapnya akan menemukan cahaya.”</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-[#E5E7EB] p-6 rounded-2xl" style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}>
          <h2 className="text-2xl font-bold text-[#A67C52] mb-6">Kritik & Saran</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="5"
              placeholder="Tuliskan masukan Anda di sini..."
              className="w-full p-4 rounded-2xl text-[#A67C52] bg-[#E5E7EB] focus:outline-none placeholder-[#B99B7E] resize-none"
              style={{ boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff' }}
            />
            <div className="text-right mt-4">
              <Button
                type="submit"
                className="bg-[#A67C52] hover:bg-[#936A45] text-white px-6 py-3 rounded-xl text-base"
                style={{ boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}
              >
                <Send className="w-5 h-5 mr-2"/>
                Kirim
              </Button>
            </div>
            {feedbackSent && <p className="text-green-600 text-center mt-4">Terima kasih atas masukan Anda!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
