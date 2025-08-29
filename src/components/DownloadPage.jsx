import React from 'react';
import { FileText, DownloadCloud } from 'lucide-react';

const downloadItems = [
  {
    id: 1,
    title: "Ringkasan Sirah Nabawiyah",
    description: "PDF ringkas mengenai perjalanan hidup Nabi Muhammad ﷺ dari lahir hingga wafat.",
    fileSize: "2.5 MB",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    title: "Peta Perjalanan Hijrah",
    description: "Peta visual yang menggambarkan rute hijrah Nabi Muhammad ﷺ dari Makkah ke Madinah.",
    fileSize: "1.8 MB",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    title: "Infografis Perang Badar",
    description: "Infografis detail mengenai kronologi, strategi, dan hasil dari Perang Badar.",
    fileSize: "3.1 MB",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
];

const DownloadPage = () => {
  return (
    <div className="py-12 md:py-20 px-4 container mx-auto bg-[#E5E7EB] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#A67C52] mb-4">
          Materi Unduhan
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Unduh materi-materi bermanfaat dalam format PDF.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {downloadItems.map(item => (
          <div
            key={item.id}
            className="bg-[#E5E7EB] p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6"
            style={{ boxShadow: '12px 12px 24px #bebebe, -12px -12px 24px #ffffff' }}
          >
            <div
              className="flex-shrink-0 p-5 rounded-2xl"
              style={{ boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff' }}
            >
              <FileText className="w-16 h-16 text-[#A67C52]" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#A67C52]">{item.title}</h3>
              <p className="text-gray-700 mt-1 text-sm">{item.description}</p>
              <p className="text-xs text-gray-600 mt-2 opacity-80">PDF | {item.fileSize}</p>
            </div>
            <a
              href={item.fileUrl}
              download
              className="w-full md:w-auto bg-[#A67C52] hover:bg-[#936A45] text-white px-6 py-3 rounded-xl text-base transition-all duration-300 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}
            >
              <DownloadCloud className="w-5 h-5 mr-2"/>
              Unduh
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;
