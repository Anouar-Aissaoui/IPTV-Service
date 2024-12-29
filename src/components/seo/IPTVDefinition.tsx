import React from 'react';

export const IPTVDefinition = () => {
  return (
    <section className="space-y-6">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-neon mb-6">
          Premium IPTV Service - #1 Streaming Solution in 2024
        </h2>
        
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-neon/20 mb-8">
          <p className="text-xl font-medium text-white leading-relaxed mb-4">
            Experience the next generation of television with our premium IPTV service. 
            As the leading provider in the USA, we deliver:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 my-6">
            <li className="flex items-center gap-2 text-white">
              <span className="text-neon">✓</span> 40,000+ Live TV Channels
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="text-neon">✓</span> 54,000+ Movies & TV Shows
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="text-neon">✓</span> Crystal Clear HD & 4K Quality
            </li>
            <li className="flex items-center gap-2 text-white">
              <span className="text-neon">✓</span> Premium Sports Coverage
            </li>
          </ul>
          
          <p className="text-gray-300 leading-relaxed">
            Whether you're searching for entertainment, live sports, or international content, 
            our <span className="text-neon">affordable IPTV subscription packages</span> are 
            designed to transform your viewing experience. Get instant access to premium 
            content across all your devices with our reliable streaming service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-dark-gray/30 p-4 rounded-lg border border-neon/10">
            <h3 className="text-lg font-semibold text-neon mb-2">Unmatched Content</h3>
            <p className="text-gray-300">
              Access thousands of channels and VOD content from around the world
            </p>
          </div>
          
          <div className="bg-dark-gray/30 p-4 rounded-lg border border-neon/10">
            <h3 className="text-lg font-semibold text-neon mb-2">Premium Quality</h3>
            <p className="text-gray-300">
              Enjoy crystal-clear HD and 4K streaming on all your devices
            </p>
          </div>
          
          <div className="bg-dark-gray/30 p-4 rounded-lg border border-neon/10">
            <h3 className="text-lg font-semibold text-neon mb-2">24/7 Support</h3>
            <p className="text-gray-300">
              Get instant assistance from our dedicated support team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};