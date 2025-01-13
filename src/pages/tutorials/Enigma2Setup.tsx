import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const Enigma2Setup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on Enigma2 - Configuration Guide"
        description="Complete guide for setting up IPTV on Enigma2 receivers. Learn how to configure channels, EPG, and optimize your IPTV experience."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on Enigma2</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default Enigma2Setup;