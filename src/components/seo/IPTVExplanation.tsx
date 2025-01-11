import React from 'react';
import { Link } from 'react-router-dom';

export const IPTVExplanation = () => {
  return (
    <section className="py-8 px-4 bg-dark">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Premium IPTV Service</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Experience Next-Generation TV</h2>
            <p className="text-gray-300">
              Looking to buy IPTV? Experience the future of television with our premium IPTV service. We offer an extensive 
              collection of channels from around the world, including <Link to="/sports" className="text-[#F97316] hover:underline">live sports</Link>, 
              <Link to="/entertainment" className="text-[#F97316] hover:underline"> entertainment</Link>, 
              <Link to="/news" className="text-[#F97316] hover:underline"> news</Link>, and educational content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our Service?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Unmatched Content Library</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>40,000+ live channels worldwide</li>
                  <li>54,000+ movies and TV shows on demand</li>
                  <li>Premium sports packages including PPV events</li>
                  <li>International channels in multiple languages</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Technical Excellence</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>HD and 4K quality streaming</li>
                  <li>99.9% uptime guarantee</li>
                  <li>Anti-buffering technology</li>
                  <li>Multi-device compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
            <p className="text-gray-300 mb-4">
              Ready to transform your entertainment experience? Check our 
              <Link to="/pricing" className="text-[#F97316] hover:underline"> subscription plans</Link> or learn more about our 
              <Link to="/features" className="text-[#F97316] hover:underline"> features</Link>. Need help? Visit our 
              <Link to="/tutorials" className="text-[#F97316] hover:underline"> setup guides</Link> or 
              <Link to="/support" className="text-[#F97316] hover:underline"> contact our support team</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};