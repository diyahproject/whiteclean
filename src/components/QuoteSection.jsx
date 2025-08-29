import React from 'react';
import { BookOpen, Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-[#F3F4F6] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + i * 2}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
            }}
          >
            <BookOpen className="w-6 h-6 text-[#A67C52]" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-[#E5E7EB] p-12 rounded-3xl"
            style={{
              boxShadow: '16px 16px 32px #bebebe, -16px -16px 32px #ffffff'
            }}
          >
            <div className="mb-8">
              <Quote className="w-16 h-16 text-[#B99B7E] mx-auto mb-6" />
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#A67C52] mb-6 leading-relaxed">
                لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-4">
                "Sungguh, pada kisah-kisah mereka terdapat pelajaran bagi orang-orang yang berakal."
              </p>
              <p className="text-lg text-gray-700 opacity-80">
                (QS. Yusuf: 111)
              </p>
            </div>

            <div
              className="bg-[#F3F4F6] p-6 rounded-2xl"
              style={{
                boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff'
              }}
            >
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Ibrah dari sejarah adalah jembatan antara masa lalu dan masa depan. Karena setiap kejadian memiliki pola berulang. Cara pintas merusak umat adalah dengan mencabut generasi dari sejarah kebesarannya dan wilayah geografis kejayaan Islam, maka muncullah generasi yang malu pada Islam sebagai identitasnya."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
