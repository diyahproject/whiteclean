import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Target, Book, Map } from 'lucide-react';
import Button from './Button';

const EventDetail = ({ event, onBack }) => {
  const mapImage = event.map_image_url || 'https://images.unsplash.com/photo-1563426472338-3c666e5a4853?q=80&w=1964&auto=format&fit=crop';

  return (
    <div
      className="p-6 bg-[#E5E7EB] rounded-2xl space-y-6"
      style={{
        boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff'
      }}
    >
      <Button
        onClick={onBack}
        className="bg-[#F3F4F6] border-none text-[#A67C52] mb-4 hover:bg-[#E5E7EB]"
        style={{
          boxShadow: '6px 6px 12px #bebebe, -6px -6px 12px #ffffff'
        }}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Daftar
      </Button>

      <div>
        <p className="text-sm text-gray-700 opacity-80">
          {event.hijri_year === 0 ? 'Sebelum Hijrah' : `${event.hijri_year} H`} / {event.gregorian_year} M - {event.gregorian_month}
        </p>
        <h2 className="text-3xl font-bold text-[#A67C52] mt-1">{event.title}</h2>
        <h3 className="text-xl font-semibold text-gray-600">{event.subtitle}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 text-base">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#A67C52] mt-1 flex-shrink-0" />
          <div>
            <strong className="block text-gray-600">Tempat:</strong>
            <span className="text-gray-700">{event.location}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#A67C52] mt-1 flex-shrink-0" />
          <div>
            <strong className="block text-gray-600">Durasi:</strong>
            <span className="text-gray-700">{event.duration}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-600 mb-2">Deskripsi Peristiwa</h4>
        <p className="text-gray-700 leading-relaxed text-base">{event.description}</p>
      </div>

      {mapImage && (
        <div>
          <h4 className="font-bold text-lg text-gray-600 mb-2 flex items-center gap-2">
            <Map className="w-5 h-5 text-[#A67C52]" />
            Visualisasi Peta
          </h4>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
            <img
              src={mapImage}
              alt={`Peta untuk ${event.title}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      <div>
        <h4 className="font-bold text-lg text-gray-600 mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#A67C52]" />
          Pihak Terlibat
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-base">
          {event.parties_involved?.map((party, i) => (
            <li key={i}>{party}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-600 mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#A67C52]" />
          Fakta Menarik
        </h4>
        <p
          className="text-gray-700 italic bg-[#E5E7EB] p-4 rounded-lg text-base"
          style={{
            boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'
          }}
        >
          {event.fun_fact}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-600 mb-2 flex items-center gap-2">
          <Book className="w-5 h-5 text-[#A67C52]" />
          Referensi
        </h4>
        <ul className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
          {event.references?.map((ref, i) => (
            <li key={i}>{ref}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDetail;
