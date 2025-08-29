import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import Button from './Button';

const SearchBar = ({ sampleEvents }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const lowercasedValue = value.toLowerCase();
      const filteredSuggestions = sampleEvents.filter(event =>
        event.title.toLowerCase().includes(lowercasedValue) ||
        event.subtitle.toLowerCase().includes(lowercasedValue) ||
        event.location.toLowerCase().includes(lowercasedValue) ||
        event.parties_involved.some(party => party.toLowerCase().includes(lowercasedValue))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestionTitle) => {
    setQuery(suggestionTitle);
    setSuggestions([]);
  };

  return (
    <div className="py-12 bg-[#E5E7EB] flex justify-center">
      <div className="relative w-full max-w-xl px-4" ref={searchRef}>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari peristiwa, tokoh, atau tempat..."
            className="w-full py-4 pl-12 pr-28 rounded-2xl text-[#A67C52] bg-[#E5E7EB] focus:outline-none placeholder-[#B99B7E]"
            style={{
              boxShadow: 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff'
            }}
            value={query}
            onChange={handleInputChange}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#B99B7E]" />
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#A67C52] text-sm font-semibold rounded-lg py-2"
            style={{
              boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'
            }}
          >
            Cari
          </Button>
        </div>
        {suggestions.length > 0 && (
          <ul
            className="absolute z-10 w-[calc(100%-2rem)] mt-2 bg-[#F3F4F6] rounded-2xl"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
            {suggestions.map(suggestion => (
              <li
                key={suggestion.id}
                className="p-4 cursor-pointer hover:bg-[#E5E7EB] rounded-2xl text-[#A67C52]"
                onClick={() => handleSuggestionClick(suggestion.title)}
              >
                <p className="font-bold">{suggestion.title}</p>
                <p className="text-sm text-gray-600">{suggestion.subtitle}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
