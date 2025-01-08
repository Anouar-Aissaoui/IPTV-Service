import React from 'react';
import { Link } from 'react-router-dom';

export const SEOContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Premium IPTV Service Features</h2>
        <p className="mb-4">
          Experience the ultimate streaming solution with our <Link to="/pricing" className="text-neon hover:underline">premium IPTV service</Link>. 
          Access over 40,000 live channels and 54,000+ VOD content in stunning HD and 4K quality. Our service provides comprehensive coverage of 
          <Link to="/channels" className="text-neon hover:underline"> sports, movies, TV shows, news</Link>, and international programming from around the globe.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Extensive <Link to="/channels" className="text-neon hover:underline">channel lineup</Link> with 40,000+ live channels</li>
          <li>Massive VOD library with 54,000+ movies and TV shows</li>
          <li>Premium sports coverage including PPV events</li>
          <li>24/7 <Link to="/faq" className="text-neon hover:underline">technical support</Link> and customer service</li>
          <li><Link to="/iptv-setup-tutorials" className="text-neon hover:underline">Compatible with all major streaming devices</Link></li>
          <li>99.9% uptime guarantee</li>
        </ul>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our IPTV Service?</h2>
        <p className="mb-4">
          Our <Link to="/pricing" className="text-neon hover:underline">IPTV subscription service</Link> stands out with its exceptional quality, 
          reliability, and comprehensive content offering. We provide a seamless streaming experience across all your devices, backed by our 
          commitment to customer satisfaction and technical excellence. Check our <Link to="/faq" className="text-neon hover:underline">FAQ section</Link> for 
          more details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p>
              Enjoy crystal-clear HD and 4K streaming quality, powered by our advanced streaming technology and
              global server network. View our <Link to="/channels" className="text-neon hover:underline">complete channel list</Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Device Compatibility</h3>
            <p>
              Stream on any device including Smart TVs, smartphones, tablets, Amazon Fire Stick, and more. Check our 
              <Link to="/iptv-setup-tutorials" className="text-neon hover:underline"> setup guides</Link> for detailed instructions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};