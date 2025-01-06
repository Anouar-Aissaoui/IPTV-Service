import React from 'react';
import { Link } from 'react-router-dom';

export const ProgrammaticSEO: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none mt-16">
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Premium IPTV Service Provider</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Why Choose Our IPTV Service?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access to 40,000+ live channels worldwide</li>
              <li>54,000+ movies and TV shows on demand</li>
              <li>Premium sports packages including PPV events</li>
              <li>HD and 4K quality streaming</li>
              <li>99.9% uptime guarantee</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Features & Benefits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Multi-device compatibility</li>
              <li>No buffering technology</li>
              <li>Regular content updates</li>
              <li>Easy setup process</li>
              <li>Affordable pricing plans</li>
              <li>Secure streaming</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-white">IPTV Service Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Sports</h3>
            <p className="text-gray-300">
              Watch live sports events, including NFL, NBA, MLB, NHL, UFC, Boxing, and international sports leagues.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Entertainment</h3>
            <p className="text-gray-300">
              Access premium entertainment channels, movies, TV shows, documentaries, and kids' content.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">News</h3>
            <p className="text-gray-300">
              Stay updated with 24/7 news coverage from major networks worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Getting Started with IPTV</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Ready to experience premium IPTV service? Check our 
            <Link to="/pricing" className="text-[#F97316] hover:underline"> subscription plans</Link> or learn more about our 
            <Link to="/features" className="text-[#F97316] hover:underline"> features</Link>.
          </p>
          <p>
            Need help? Visit our 
            <Link to="/tutorials" className="text-[#F97316] hover:underline"> setup guides</Link> or 
            <Link to="/support" className="text-[#F97316] hover:underline"> contact our support team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};