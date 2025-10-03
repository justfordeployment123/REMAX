'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-red-600">RE/MAX</Link>
          <span className="text-sm text-gray-500 ml-2">Above the Crowd</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {/* Buy Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <button
              className="text-blue-600 font-medium hover:text-blue-700 flex items-center py-2"
            >
              Buy
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-48 z-50">
                <div className="bg-white rounded-md shadow-lg border border-gray-200">
                  <div className="py-1">
                    <Link
                      href="/buying-guide"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    >
                      Buying Guide
                    </Link>
                    <Link
                      href="/search-property"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    >
                      Search Property
                    </Link>
                    <Link
                      href="/virtual-home-buying"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                    >
                      Virtual Home Buying
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 hover:text-red-600">Sell</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Rent</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Agents</a>
          <a href="#" className="text-gray-700 hover:text-red-600">More</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-blue-600 hover:underline">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
}