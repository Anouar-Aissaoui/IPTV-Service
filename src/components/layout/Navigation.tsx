import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              IPTV Service
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link>
            <Link to="/channels" className="transition-colors hover:text-foreground/80">
              Channels
            </Link>
            <Link to="/iptv-free-trial-24-hours" className="transition-colors hover:text-foreground/80">
              Free Trial
            </Link>
            <Link to="/iptv-setup-tutorials" className="transition-colors hover:text-foreground/80">
              Tutorials
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};