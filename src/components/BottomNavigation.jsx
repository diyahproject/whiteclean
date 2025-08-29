import React from 'react';
import { Home, BookOpen, HelpCircle, Download, Settings } from 'lucide-react';

const BottomNavigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { icon: Home, label: "Home", page: "home" },
    { icon: BookOpen, label: "Timeline", page: "timeline" },
    { icon: HelpCircle, label: "Quiz", page: "quiz" },
    { icon: Download, label: "Download", page: "download" },
    { icon: Settings, label: "Setting", page: "settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#E5E7EB]/90 backdrop-blur-md border-t border-[#bebebe] z-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className="flex flex-col items-center p-2 rounded-xl transition-all duration-300 w-16"
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#D1D5DB]" : ""
                  }`}
                  style={{
                    boxShadow: isActive
                      ? 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff'
                      : '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'
                  }}
                >
                  <item.icon className={`w-6 h-6 transition-colors duration-300 text-[#A67C52]`} />
                </div>
                <span className={`text-xs font-medium mt-1 transition-colors duration-300 ${
                  isActive ? "text-[#A67C52]" : "text-[#B99B7E]"
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
