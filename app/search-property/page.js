'use client';
import { useState } from 'react';
import HomeNavigation from '../../components/HomeNavigation';

export default function SearchProperty() {
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [bedsMin, setBedsMin] = useState('');
  const [bedsMax, setBedsMax] = useState('');
  const [bathsAny, setBathsAny] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeNavigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Homes for Sale</h1>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="space-y-6">
            {/* Address Search */}
            <div>
              <input
                type="text"
                placeholder="Address, City, ZIP, and More"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PRICE</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="No Min"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="No Max"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Beds */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">BEDS</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded focus:ring-2 focus:ring-blue-500">
                    NO MIN
                  </button>
                  <div className="flex justify-between mt-2 text-sm">
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">1</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">4</button>
                  </div>
                </div>
                <div>
                  <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded focus:ring-2 focus:ring-blue-500">
                    NO MAX
                  </button>
                  <div className="flex justify-between mt-2 text-sm">
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">1</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">4</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Baths */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">BATHS</label>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-blue-500 text-white rounded focus:ring-2 focus:ring-blue-500">
                  ANY
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                  1+
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                  2+
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                  3+
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                  4+
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button className="text-blue-600 hover:underline">CLEAR FILTERS</button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-medium">
                SEARCH HOMES
              </button>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Popular Searches</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Condos for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Mobile Homes for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Newest Homes for Sale</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Townhomes for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Farms for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Browse Homes for Sale</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Multi-Family Homes for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Land for Sale</a>
              <a href="#" className="block text-blue-600 hover:underline">Open Houses</a>
            </div>
          </div>
        </div>

        {/* Real Estate Listings By City */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Listings By City</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Atlanta</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Nashville</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Phoenix</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in San Francisco</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Austin</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in New York</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Orlando</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Seattle</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Denver</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Raleigh</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in Tampa</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes for sale in San Antonio</a>
            </div>
          </div>
        </div>

        {/* Popular Searches Nearby New York, NY */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Searches Nearby New York, NY</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">New Listings Near Me</a>
              <a href="#" className="block text-blue-600 hover:underline">Virtual Tours Near Me</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Open Houses Near Me</a>
              <a href="#" className="block text-blue-600 hover:underline">Homes For Sale Near Me</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Price Reductions Near Me</a>
            </div>
          </div>
        </div>

        {/* Search Homes For Sale By State */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Homes For Sale By State</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Alabama Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Arkansas Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Connecticut Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Georgia Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">View All</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Alaska Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">California Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Delaware Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Hawaii Real Estate</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Arizona Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Colorado Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Florida Real Estate</a>
              <a href="#" className="block text-blue-600 hover:underline">Idaho Real Estate</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - City Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Real Estate Listings By City</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Atlanta</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Austin</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Denver</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Nashville</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in New York</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Orlando</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Phoenix</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Seattle</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Property Search</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Homes For Sale</a></li>
                <li><a href="#" className="hover:text-white">New Listings</a></li>
                <li><a href="#" className="hover:text-white">Open Houses</a></li>
                <li><a href="#" className="hover:text-white">Virtual Tours</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Buyer's Guide</a></li>
                <li><a href="#" className="hover:text-white">Seller's Guide</a></li>
                <li><a href="#" className="hover:text-white">Market Trends</a></li>
                <li><a href="#" className="hover:text-white">Real Estate Articles</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About RE/MAX</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Leadership</a></li>
                <li><a href="#" className="hover:text-white">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p className="mb-2">Each office independently owned and operated.</p>
            <p>© 2025 RE/MAX, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}