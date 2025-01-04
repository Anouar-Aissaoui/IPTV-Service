import React from 'react';

export const IPTVExplanation = () => {
  return (
    <section className="py-8 px-4 bg-dark">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Premium IPTV Service</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            Experience the future of television with our premium IPTV service. We offer an extensive collection of channels 
            from around the world, including live sports, entertainment, news, and educational content. Our service provides 
            crystal-clear HD and 4K quality streaming, ensuring you never miss a moment of your favorite shows.
          </p>
          <p className="text-gray-300">
            With our reliable IPTV subscription, you'll have access to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Live TV channels from USA, UK, Canada, and worldwide</li>
            <li>Premium sports packages including NFL, NBA, MLB, and international leagues</li>
            <li>Extensive video-on-demand library with latest movies and TV shows</li>
            <li>24/7 technical support and regular content updates</li>
          </ul>
        </div>
      </div>
    </section>
  );
};