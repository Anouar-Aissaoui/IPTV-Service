import React from 'react';

export const ServiceFeatures = () => (
  <section>
    <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-neon pl-4">
      Features of Our IPTV Service
    </h3>
    
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-dark-gray/50 p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors">
        <h4 className="text-2xl font-semibold mb-6 text-white">
          Compatible Devices
        </h4>
        <ul className="list-none space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Smart TVs (Samsung, LG, Android TV)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Mobile devices (iOS and Android)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Streaming devices (Fire Stick, Apple TV, Roku)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Computers (Windows and Mac)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Gaming consoles</span>
          </li>
        </ul>
      </div>

      <div className="bg-dark-gray/50 p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors">
        <h4 className="text-2xl font-semibold mb-6 text-white">
          Premium Features
        </h4>
        <ul className="list-none space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Electronic Program Guide (EPG)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Catch-up TV functionality</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Multi-language support</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>PPV events included</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon rounded-full"></span>
            <span>Regular content updates</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);