import React from 'react';
import { Star, Moon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="h-[45vh] bg-gradient-to-br from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-3 h-3 text-[#A67C52]" />
            ) : (
              <Moon className="w-2 h-2 text-[#B99B7E]" />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        {/* Main Title */}
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#A67C52] mb-2 tracking-wide leading-tight">
            الأرجوزة المئية
          </h1>
          <div className="text-3xl md:text-5xl font-serif text-[#A67C52] mb-3">
            Jejak Cahaya
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          "Jejak Kehidupan Sang Utusan"
          <br />
          <span className="text-base md:text-lg text-gray-700 italic opacity-80">
            Menelusuri perjalanan hidup Rasulullah ﷺ
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
