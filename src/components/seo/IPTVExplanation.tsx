import React from 'react';

export const IPTVExplanation = () => {
  return (
    <section className="py-16 px-4 bg-dark" id="iptv-explanation">
      <div className="container mx-auto max-w-4xl">
        <div className="brutal-border brutal-shadow bg-black p-8 transform hover:rotate-1 transition-transform">
          <h2 className="text-3xl md:text-4xl font-black text-neon brutal-text mb-8 transform -rotate-2">
            Premium IPTV Service Provider
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Looking to <span className="text-neon font-bold">buy IPTV</span>? Experience the future of television with our 
              <span className="text-neon font-bold"> premium IPTV subscription</span> service. As a leading 
              <span className="text-neon font-bold"> IPTV provider</span>, we deliver an extensive collection of channels worldwide, 
              including live sports, entertainment, news, and educational content in crystal-clear HD and 4K quality.
            </p>

            <div className="brutal-border p-6 bg-dark/50 transform hover:-rotate-1 transition-transform">
              <h3 className="text-xl font-bold text-white mb-4 transform rotate-1">
                Why Choose Our IPTV Service?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>40,000+ Live TV Channels Worldwide</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>54,000+ VOD Content Library</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>Premium Sports Package Access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>HD & 4K Streaming Quality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-neon">✓</span>
                  <span>Multi-Device Compatibility</span>
                </li>
              </ul>
            </div>

            <div className="brutal-border p-6 bg-dark/50 transform hover:rotate-1 transition-transform">
              <h3 className="text-xl font-bold text-white mb-4">
                Complete IPTV Solutions
              </h3>
              <p className="leading-relaxed">
                Choose our reliable <span className="text-neon font-bold">IPTV subscription</span> for the ultimate streaming experience. 
                With the <span className="text-neon font-bold">best IPTV service</span> in the market, you'll get access to premium content, 
                live TV streaming, and an extensive collection of on-demand entertainment. Our affordable 
                <span className="text-neon font-bold"> IPTV subscriptions</span> cater to every budget while maintaining exceptional quality.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                *Available worldwide with dedicated servers for USA, UK, Canada, and international streaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};