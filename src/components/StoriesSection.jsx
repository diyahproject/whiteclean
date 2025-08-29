import React from 'react';
import { Sun, Heart, Star } from 'lucide-react';
import Card from './Card';
import CardContent from './CardContent';
import Button from './Button';

const StoriesSection = () => {
  const featuredStories = [
    {
      title: "Kelahiran Sang Pembawa Cahaya",
      description: "Kisah kelahiran Rasulullah ﷺ yang membawa berkah dan cahaya bagi seluruh alam.",
      icon: Sun,
      year: "571 M",
      image: "https://images.unsplash.com/photo-1519973641773-7c87c073a5a7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Dibesarkan di Bani Sa'ad",
      description: "Masa kanak-kanak Rasulullah ﷺ yang dihabiskan di gurun bersama keluarga Halimah.",
      icon: Heart,
      year: "573 M",
      image: "https://images.unsplash.com/photo-1590703875322-c3a9a3b6387d?q=80&w=1935&auto=format&fit=crop"
    },
    {
      title: "Wafatnya Ibunda Tercinta",
      description: "Kehilangan yang mengajarkan kesabaran dan ketabahan sejak usia dini.",
      icon: Star,
      year: "577 M",
      image: "https://images.unsplash.com/photo-1473520550444-625b84d43449?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#E5E7EB] to-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#A67C52] mb-6">
            Kisah Favorit
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Cerita-cerita menginspirasi dari perjalanan hidup Rasulullah ﷺ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredStories.map((story, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <Card
                className="bg-[#E5E7EB] border-none overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff'
                }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {story.year}
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div
                      className="bg-white/90 p-3 rounded-xl"
                      style={{
                        boxShadow: '4px 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <story.icon className="w-8 h-8 text-[#A67C52]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#A67C52] mb-3 group-hover:text-[#B99B7E] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {story.description}
                  </p>
                  <Button
                    className="w-full bg-[#F3F4F6] hover:bg-[#A67C52] text-[#A67C52] hover:text-white border-none transition-all duration-300"
                    style={{
                      boxShadow: '6px 6px 12px #bebebe, -6px -6px 12px #ffffff'
                    }}
                  >
                    Baca Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-[#A67C52] hover:bg-[#936A45] text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
            Lihat Semua Kisah
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
