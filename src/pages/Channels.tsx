import React from 'react';
import { Navigation } from '@/components/Navigation';

const Channels = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">
          Our Channel List
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Channel Categories */}
          <div className="bg-dark-gray/30 backdrop-blur-lg rounded-xl p-6 border border-gray-800/30 hover:border-primary transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Entertainment</h2>
            <ul className="space-y-2">
              <li>HBO</li>
              <li>Netflix</li>
              <li>Disney+</li>
            </ul>
          </div>
          <div className="bg-dark-gray/30 backdrop-blur-lg rounded-xl p-6 border border-gray-800/30 hover:border-primary transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Sports</h2>
            <ul className="space-y-2">
              <li>ESPN</li>
              <li>NFL Network</li>
              <li>NBA TV</li>
            </ul>
          </div>
          <div className="bg-dark-gray/30 backdrop-blur-lg rounded-xl p-6 border border-gray-800/30 hover:border-primary transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">News</h2>
            <ul className="space-y-2">
              <li>CNN</li>
              <li>BBC</li>
              <li>Fox News</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;