import React from 'react';

export const IPTVExplanation = () => {
  return (
    <section className="py-12 px-4 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]" />
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto transform rotate-1">
          <div className="bg-[#F97316] brutal-border p-8 brutal-shadow">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-dark transform -rotate-1">
              Why Choose Our IPTV Service?
            </h2>
            
            <div className="space-y-6 text-dark">
              <p className="font-bold leading-relaxed transform rotate-1">
                As a <span className="bg-dark text-white px-2">premier IPTV provider</span>, 
                we offer comprehensive IPTV services that cater to all your entertainment needs. 
                Our <span className="bg-dark text-white px-2">IPTV subscriptions</span> include access to over 
                <span className="bg-dark text-white px-2">40,000 channels worldwide</span>, featuring live sports, 
                premium movies, and exclusive content.
              </p>
              
              <div className="bg-white/90 p-6 brutal-border brutal-shadow transform -rotate-1">
                <p className="font-black text-xl mb-4 text-dark">
                  Key benefits of our IPTV subscription:
                </p>
                <ul className="list-none space-y-3 text-dark font-bold">
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>Premium IPTV channels with 4K and HD quality streaming</span>
                  </li>
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>Extensive sports packages including PPV events</span>
                  </li>
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>Massive VOD library with latest movies and TV shows</span>
                  </li>
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>24/7 technical support for all IPTV subscribers</span>
                  </li>
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>Compatible with all major streaming devices</span>
                  </li>
                  <li className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform">
                    <span className="bg-dark text-white px-2">→</span>
                    <span>Affordable IPTV subscription plans</span>
                  </li>
                </ul>
              </div>
              
              <p className="font-bold leading-relaxed transform -rotate-1">
                Looking to <span className="bg-dark text-white px-2">buy IPTV</span>? 
                Our service stands out among <span className="bg-dark text-white px-2">IPTV suppliers</span> with 
                reliable streaming, high-quality content, and competitive pricing. Experience why thousands choose 
                us as their trusted <span className="bg-dark text-white px-2">IPTV service provider</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};