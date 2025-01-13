import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const MagSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on MAG Box - Configuration Guide"
        description="Complete guide for setting up IPTV on your MAG box. Learn portal configuration, channel setup, and optimization tips."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on MAG Box</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default MagSetup;