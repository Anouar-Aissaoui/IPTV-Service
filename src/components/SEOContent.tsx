import React from 'react';

export const SEOContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Premium IPTV Service Features</h2>
        <p className="mb-4">
          Experience the ultimate <strong>IPTV subscription</strong> solution with our premium service. Access over 40,000 live channels
          and 54,000+ VOD content in stunning HD and 4K quality. As a leading <strong>IPTV provider</strong>, we deliver comprehensive coverage of sports,
          movies, TV shows, news, and international programming from around the globe.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Best IPTV service with 40,000+ live channels</li>
          <li>Massive VOD library for IPTV subscribers</li>
          <li>Premium sports coverage including PPV events</li>
          <li>24/7 technical support for IPTV services</li>
          <li>Compatible with all major streaming devices</li>
          <li>99.9% uptime guarantee for IPTV subscriptions</li>
        </ul>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our IPTV Service?</h2>
        <p className="mb-4">
          Our <strong>IPTV subscription</strong> service stands out among other <strong>IPTV providers</strong> with exceptional quality, reliability, and comprehensive content
          offering. When you <strong>buy IPTV</strong> from us, you get a seamless streaming experience across all your devices, backed by our commitment to
          customer satisfaction and technical excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p>
              As a premium <strong>IPTV service</strong> provider, we deliver crystal-clear HD and 4K streaming quality, powered by our advanced streaming technology and
              global server network.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Device Compatibility</h3>
            <p>
              <strong>IPTV subscribe</strong> to stream on any device including Smart TVs, smartphones, tablets, Amazon Fire Stick, and more with our
              versatile service. Our <strong>IPTV suppliers</strong> ensure maximum compatibility across platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8" aria-label="IPTV Service Benefits">
        <h2 className="text-2xl font-bold mb-4">IPTV Service Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-neon rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Extensive Content Library</h3>
            <p>Access the best IPTV content with our premium subscription packages.</p>
          </div>
          <div className="p-4 border border-neon rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Reliable Streaming</h3>
            <p>Experience stable IPTV services with our robust infrastructure.</p>
          </div>
          <div className="p-4 border border-neon rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Premium Support</h3>
            <p>Get expert assistance from our dedicated IPTV sub support team.</p>
          </div>
        </div>
      </section>
    </div>
  );
};