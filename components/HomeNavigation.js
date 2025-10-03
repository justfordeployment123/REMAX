'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HomeNavigation() {
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* RE/MAX Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.remax.com/images/design-system/logo/remax/logotype_color.svg"
              alt="RE/MAX"
              className="h-8"
            />
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-1">
            <nav className="hidden md:flex items-center space-x-6">
              {/* Buy Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={dropdownRef}
              >
                <button
                  className="text-blue-700 hover:text-blue-800 font-medium flex items-center py-2"
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
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Sell</a>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Rent</a>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Agents</a>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">More</a>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium ml-4">Log In</a>
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 font-medium">
                Sign Up
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}