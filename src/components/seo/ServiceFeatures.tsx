import React from 'react';

export const ServiceFeatures = () => {
  return (
    <section className="mt-12 space-y-8" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-3xl font-semibold text-neon">Key Features of Our IPTV Service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4" itemScope itemType="https://schema.org/ListItem">
          <h3 className="text-xl font-semibold text-white">Premium Content Library</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>40,000+ Live TV Channels</li>
            <li>54,000+ Movies and TV Shows</li>
            <li>Premium Sports Channels</li>
            <li>International Content</li>
          </ul>
        </div>

        <div className="space-y-4" itemScope itemType="https://schema.org/ListItem">
          <h3 className="text-xl font-semibold text-white">Technical Excellence</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>4K & HD Quality Streaming</li>
            <li>Multi-device Compatibility</li>
            <li>99.9% Uptime Guarantee</li>
            <li>Anti-buffering Technology</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions About Our IPTV Service</h2>
        
        <div itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name" className="text-xl font-semibold">What devices are compatible with your IPTV service?</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p itemProp="text">Our IPTV service is compatible with a wide range of devices including Smart TVs (Samsung, LG, Android TV), smartphones (iOS and Android), tablets, Amazon Fire Stick, MAG devices, and more. You can enjoy seamless streaming across multiple devices simultaneously.</p>
          </div>
        </div>

        <div itemScope itemType="https://schema.org/Question" className="mt-6">
          <h3 itemProp="name" className="text-xl font-semibold">How reliable is your IPTV streaming service?</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p itemProp="text">We maintain a 99.9% uptime guarantee with our premium servers located globally. Our anti-buffering technology ensures smooth streaming experience, and we provide 24/7 technical support to address any concerns immediately.</p>
          </div>
        </div>

        <div itemScope itemType="https://schema.org/Question" className="mt-6">
          <h3 itemProp="name" className="text-xl font-semibold">What content is included in the subscription?</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p itemProp="text">Our comprehensive content library includes 40,000+ live channels, 54,000+ VOD content including latest movies and TV shows, premium sports channels, news networks, and international channels from various countries. All content is available in HD and 4K quality where applicable.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Streaming Quality</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 4K Ultra HD Support (2160p)</li>
              <li>• Full HD 1080p</li>
              <li>• HD 720p</li>
              <li>• Adaptive Bitrate Streaming</li>
            </ul>
          </div>
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Network Requirements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Minimum 10 Mbps for HD</li>
              <li>• 25+ Mbps for 4K content</li>
              <li>• Stable Internet Connection</li>
              <li>• Low Latency Optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};