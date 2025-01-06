import React from 'react';
import { Link } from 'react-router-dom';

export const QuickLinks = () => {
  return (
    <div className="container mx-auto px-4 py-12 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="brutal-border brutal-shadow bg-black p-6 transform hover:-rotate-1 transition-transform">
          <h2 className="text-xl font-black text-neon brutal-text mb-6 transform -rotate-2">Quick Links</h2>
          <div className="space-y-3">
            <Link to="/tutorials" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Setup Guides
            </Link>
            <Link to="/channels" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Channel List
            </Link>
            <Link to="/pricing" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Subscription Plans
            </Link>
            <Link to="/faq" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → FAQ
            </Link>
          </div>
        </div>
        <div className="brutal-border brutal-shadow bg-black p-6 transform hover:rotate-1 transition-transform">
          <h2 className="text-xl font-black text-neon brutal-text mb-6 transform rotate-2">Popular Tutorials</h2>
          <div className="space-y-3">
            <Link to="/tutorials/smart-tv" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Smart TV Setup
            </Link>
            <Link to="/tutorials/fire-tv" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Fire TV Setup
            </Link>
            <Link to="/tutorials/mobile" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → Mobile Setup
            </Link>
            <Link to="/tutorials/vlc-windows" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
              → VLC Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};