import HomeNavigation from '../../components/HomeNavigation';

export default function VirtualHomeBuying() {
  return (
    <main className="min-h-screen bg-white">
      <HomeNavigation />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="w-full">
            <img
              src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/Virtual-Home-Buying-Guide.jpg"
              alt="Virtual Home Buying Guide"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Welcome Content */}
          <div className="px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Welcome to REMAX's Virtual Home Buying Guide!
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Did you know that you can buy your dream home from anywhere in the world, with convenience and confidence? 
                  Whether you're relocating across the country, navigating a disability, or you're simply exploring options 
                  to make the purchasing process less stressful and more efficient, here's what you need to know about buying 
                  a home virtually.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  <strong>Virtual Home Buying, Step By Step</strong>
                </h2>
                
                {/* Interactive Carousel Placeholder - Ceros Embed */}
                <div className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
                  <div style={{
                    position: 'relative',
                    width: 'auto',
                    paddingBottom: '33.59%',
                    height: 0,
                    margin: '0',
                    border: '0 none'
                  }}>
                    <iframe 
                      allowFullScreen
                      src="https://view.ceros.com/remax/virtual-buying?mobileHeightOverride=1500"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        margin: 0,
                        padding: 0,
                        border: '0 none',
                        height: '100%',
                        width: '100%',
                        minHeight: '100%',
                        minWidth: '100%'
                      }}
                      frameBorder="0"
                      className="ceros-experience"
                      title="Virtual Home Buying Guide"
                      scrolling="no"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Go Virtual Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <strong>Why Go Virtual?</strong>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              As technology evolves, clients should be able to stay ahead of the curve. There are times when buyers 
              can't be present in person to view a property, but with REMAX's cutting-edge home buying tools, everything 
              can be done seamlessly from your phone, computer, or tablet. Experienced REMAX{' '}
              <a href="https://blog.remax.com/why-you-should-never-buy-or-sell-without-an-agent/" 
                 className="text-blue-600 hover:underline">
                real estate agents
              </a>{' '}
              dedicate their time to providing you with all the details you need about your property, ensuring you feel 
              informed and confident, even from a distance.
            </p>
            
            <div className="text-center">
              <a 
                href="https://www.remax.com/real-estate-agents"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                Find A REMAX Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Real Estate Listings By City</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/homes-for-sale/ga/atlanta/city/1304000" className="text-blue-600 hover:underline">
              Homes for sale in Atlanta
            </a>
            <a href="/homes-for-sale/tx/austin/city/4805000" className="text-blue-600 hover:underline">
              Homes for sale in Austin
            </a>
            <a href="/homes-for-sale/co/denver/city/0820000" className="text-blue-600 hover:underline">
              Homes for sale in Denver
            </a>
            <a href="/homes-for-sale/tn/nashville/city/4752006" className="text-blue-600 hover:underline">
              Homes for sale in Nashville
            </a>
            <a href="/homes-for-sale/ny/new-york/city/3651000" className="text-blue-600 hover:underline">
              Homes for sale in New York
            </a>
            <a href="/homes-for-sale/fl/orlando/city/1253000" className="text-blue-600 hover:underline">
              Homes for sale in Orlando
            </a>
            <a href="/homes-for-sale/az/phoenix/city/0455000" className="text-blue-600 hover:underline">
              Homes for sale in Phoenix
            </a>
            <a href="/homes-for-sale/nc/raleigh/city/3755000" className="text-blue-600 hover:underline">
              Homes for sale in Raleigh
            </a>
            <a href="/homes-for-sale/tx/san-antonio/city/4865000" className="text-blue-600 hover:underline">
              Homes for sale in San Antonio
            </a>
            <a href="/homes-for-sale/ca/san-francisco/city/0667000" className="text-blue-600 hover:underline">
              Homes for sale in San Francisco
            </a>
            <a href="/homes-for-sale/wa/seattle/city/5363000" className="text-blue-600 hover:underline">
              Homes for sale in Seattle
            </a>
            <a href="/homes-for-sale/fl/tampa/city/1271000" className="text-blue-600 hover:underline">
              Homes for sale in Tampa
            </a>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Searches Nearby New York, NY</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="text-blue-600 hover:underline">New Listings Near Me</a>
            <a href="#" className="text-blue-600 hover:underline">Open Houses Near Me</a>
            <a href="#" className="text-blue-600 hover:underline">Price Reductions Near Me</a>
            <a href="#" className="text-blue-600 hover:underline">Virtual Tours Near Me</a>
            <a href="#" className="text-blue-600 hover:underline">Homes For Sale Near Me</a>
          </div>
        </div>
      </section>

      {/* State Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Search Homes For Sale By State</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
              'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
              'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
              'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
              'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
              'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 
              'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ].map(state => (
              <a key={state} href={`/homes-for-sale/${state.toLowerCase().replace(' ', '-')}`} 
                 className="text-blue-600 hover:underline">
                {state} Real Estate
              </a>
            ))}
          </div>
          <button className="mt-6 text-blue-600 hover:underline font-semibold">
            View All
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-sm">
            <p className="mb-2">Each office independently owned and operated.</p>
            <p>© 2025 RE/MAX, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}