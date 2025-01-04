import React from 'react';

export const ServiceFeatures = () => {
  return (
    <section className="mt-12 space-y-8" itemScope itemType="https://schema.org/ItemList">
      <h2 className="text-3xl font-semibold text-neon" itemProp="name">Key Features of Our IPTV Service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4" itemScope itemType="https://schema.org/ItemList">
          <h3 className="text-xl font-semibold text-white" itemProp="name">Premium Content Library</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li itemProp="itemListElement">40,000+ Live TV Channels</li>
            <li itemProp="itemListElement">54,000+ Movies and TV Shows</li>
            <li itemProp="itemListElement">Premium Sports Channels</li>
            <li itemProp="itemListElement">International Content</li>
          </ul>
        </div>

        <div className="space-y-4" itemScope itemType="https://schema.org/ItemList">
          <h3 className="text-xl font-semibold text-white" itemProp="name">Technical Excellence</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li itemProp="itemListElement">4K & HD Quality Streaming</li>
            <li itemProp="itemListElement">Multi-device Compatibility</li>
            <li itemProp="itemListElement">99.9% Uptime Guarantee</li>
            <li itemProp="itemListElement">Anti-buffering Technology</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-gray p-6 rounded-lg" itemScope itemType="https://schema.org/ItemList">
            <h3 className="text-lg font-semibold mb-3" itemProp="name">Streaming Quality</h3>
            <ul className="space-y-2 text-gray-300">
              <li itemProp="itemListElement">• 4K Ultra HD Support (2160p)</li>
              <li itemProp="itemListElement">• Full HD 1080p</li>
              <li itemProp="itemListElement">• HD 720p</li>
              <li itemProp="itemListElement">• Adaptive Bitrate Streaming</li>
            </ul>
          </div>
          <div className="bg-dark-gray p-6 rounded-lg" itemScope itemType="https://schema.org/ItemList">
            <h3 className="text-lg font-semibold mb-3" itemProp="name">Network Requirements</h3>
            <ul className="space-y-2 text-gray-300">
              <li itemProp="itemListElement">• Minimum 10 Mbps for HD</li>
              <li itemProp="itemListElement">• 25+ Mbps for 4K content</li>
              <li itemProp="itemListElement">• Stable Internet Connection</li>
              <li itemProp="itemListElement">• Low Latency Optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};