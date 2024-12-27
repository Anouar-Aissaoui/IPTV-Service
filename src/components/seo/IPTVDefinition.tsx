import React from 'react';

export const IPTVDefinition = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-white">What is IPTV?</h3>
      <p className="text-gray-300 mb-8">
        <a 
          href="https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9vision_IP" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neon hover:underline"
        >
          IPTV (Internet Protocol Television)
        </a>{' '}
        is a digital television broadcasting technology that streams TV content over the internet. 
        Unlike traditional cable or satellite TV, IPTV provides live channels, Video On Demand (VOD), 
        and interactive features directly through your internet connection.
      </p>
    </div>
  );
};