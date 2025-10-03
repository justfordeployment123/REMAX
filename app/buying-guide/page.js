import HomeNavigation from '../../components/HomeNavigation';

export default function BuyingGuide() {
  return (
    <main className="min-h-screen bg-white">
      <HomeNavigation />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="w-full">
            <img
              src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/REMAX-Home-Buyers-Guide.jpg?w=1500&format=auto"
              alt="REMAX Home Buyers Guide"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Welcome Content */}
          <div className="px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to the REMAX Home Buyer's Guide!
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Buying a home can be one of the most exciting experiences of your life. With the right support system and the help of a trusted{' '}
                <a href="https://www.remax.com/real-estate-agents" className="text-blue-600 hover:underline">
                  REMAX professional
                </a>
                , you will make the most informed decisions. The <em>REMAX Home Buyer's Guide</em> breaks down the buying process step by step, 
                so you can start your journey feeling confident and prepared. From creating a budget to signing your name on the dotted line, 
                here's what you need to know about the home-buying process.
              </p>
              
              <div className="text-center mb-12">
                <a 
                  href="https://peak-static-prod.remax.eng.remax.tech/web/pdf/24_206_US_home_buyers_guide.pdf"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
                >
                  Download The REMAX Home Buyer's Guide
                </a>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <strong>Buying a Home, Step by Step</strong>
              </h2>
              
              {/* Interactive Carousel Placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
                <p className="text-gray-600">
                  [Interactive Step-by-Step Guide Carousel]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tips Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top Tips for Working With Your Buying Agent
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A home is likely the biggest investment you'll make in your lifetime, so it can feel overwhelming. 
              Your REMAX agent is here to answer your questions and take the guesswork out of the transaction. 
              These three tips will help you maximize the agent-client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/Utilize-Local-Market-Knowledge.jpg?w=300"
                alt="Find the Right Agent"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Find the Right Agent.</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Research real estate agents online, read reviews and solicit recommendations from family and friends. 
                  Look for experience. An experienced, full-time real estate professional will likely have already 
                  experienced market ups and downs, and will know how to navigate current conditions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/Communicate.jpg?w=300"
                alt="Communicate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Communicate.</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Choose an agent who you feel has your best interests in mind and will help you navigate 
                  the process with effective and timely communication. Be sure to discuss your home-hunting goals 
                  with your REMAX agent. Be sure to cover topics such as your budget, your lifestyle, and your five-year plan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://blog.remax.com/wp-content/uploads/sites/4/2025/04/Process.jpg?w=300"
                alt="Trust the Process"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Trust the Process.</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This may be your first time buying a home, but an experienced real estate agent has done this many, 
                  many times. Ask lots of questions to ensure you understand the process, and then trust that your agent 
                  has your best interests in mind. Let them do what they do best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <strong>Tools to Help You Find Your Home</strong>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Once you've defined your home search goals, discussed them with your REMAX agent, and have spoken with a 
              mortgage professional to see what your buying power is, you're ready to find your dream home! In addition 
              to local knowledge on the current market, REMAX offers online tools that can help make your initial search 
              as easy as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Find a Home Using Our Interactive Map Search
                </h3>
                <p className="text-gray-700">
                  We know that location plays an important role in the home buying process. Use the map search available 
                  on our website to view homes located in or near the area you love.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Get to Know the Neighborhood
                </h3>
                <p className="text-gray-700">
                  Feel confident and informed about your neighborhood choice! On any listing page, you can learn more 
                  about the communities you are interested in, including a breakdown of the local population, school 
                  ratings and more.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Create an Account on Our Website
                </h3>
                <p className="text-gray-700">
                  Sign up for an account on our website to save searches, favorite homes you love, receive real time 
                  property alerts, and more!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">We're Here For You.</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Buying a home can seem like a lot – because it is. But you're not alone. With the right experience and tools, a{' '}
              <a href="https://www.remax.com/real-estate-agents" className="text-blue-600 hover:underline">
                REMAX agent
              </a>{' '}
              can help you find the home of your dreams.
            </p>

            <div className="text-center">
              <a 
                href="https://www.remax.com/real-estate-agents"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                Find a REMAX Agent Today!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer's Guide Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Buyer's Guide</h3>
            <p className="text-gray-600 mb-6">
              Ready for your next move? Let's find your perfect neighborhood, home and price.
            </p>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Zip Code<span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  maxLength="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <p className="text-xs text-gray-500 mb-4">
                  By clicking "Submit Request" below, you are agreeing to the Terms of Use and Privacy Policy 
                  and are agreeing to receive marketing email messages from RE/MAX, LLC and/or marketing emails, 
                  calls or texts placed by or on behalf of your local RE/MAX franchised office.
                </p>
                <button 
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors w-full md:w-auto"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Real Estate Listings By City</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Atlanta</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Austin</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Denver</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Nashville</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in New York</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Orlando</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Phoenix</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Raleigh</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in San Antonio</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in San Francisco</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Seattle</a>
            <a href="#" className="text-blue-600 hover:underline">Homes for sale in Tampa</a>
          </div>
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