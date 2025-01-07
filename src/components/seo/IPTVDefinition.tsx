import React from 'react';

export const IPTVDefinition = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.05)_25%,rgba(249,115,22,0.05)_50%,transparent_50%,transparent_75%,rgba(249,115,22,0.05)_75%)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Title Block */}
          <div className="mb-12 transform -rotate-2">
            <div className="bg-neon p-6 brutal-border brutal-shadow inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black brutal-text">
                What is IPTV?
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Definition Block */}
            <div className="bg-white p-6 md:p-8 brutal-border brutal-shadow transform rotate-1">
              <p className="text-black text-lg md:text-xl font-bold leading-relaxed">
                <span className="text-neon">IPTV (Internet Protocol Television)</span> is your gateway to next-generation entertainment. 
                Our premium <strong className="text-neon">IPTV subscription</strong> revolutionizes how you watch TV, delivering 
                crystal-clear content directly through your internet connection. Experience the future of television with our 
                cutting-edge streaming platform.
              </p>
            </div>

            {/* Features Block */}
            <div className="bg-black p-6 md:p-8 brutal-border border-neon brutal-shadow transform -rotate-1">
              <h3 className="text-2xl md:text-3xl font-black text-neon mb-6 brutal-text">
                Why Choose Our IPTV Service?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">40,000+ Live Channels Worldwide</span>
                </li>
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">54,000+ Movies & TV Shows</span>
                </li>
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">Stunning 4K & HD Quality</span>
                </li>
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">Universal Device Support</span>
                </li>
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">24/7 Expert Support</span>
                </li>
                <li className="flex items-start space-x-3 text-white">
                  <span className="text-neon text-xl">→</span>
                  <span className="font-bold">Instant Activation</span>
                </li>
              </ul>
            </div>

            {/* Call to Action Block */}
            <div className="bg-white p-6 md:p-8 brutal-border brutal-shadow transform rotate-1">
              <p className="text-black text-lg md:text-xl font-bold leading-relaxed">
                When you <strong className="text-neon">buy IPTV</strong> from us, you're not just getting a service – 
                you're upgrading to the future of entertainment. As leading <strong className="text-neon">IPTV providers</strong>, 
                we've optimized every aspect of our <strong className="text-neon">IPTV services</strong> to deliver an 
                unmatched streaming experience that keeps you coming back for more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};