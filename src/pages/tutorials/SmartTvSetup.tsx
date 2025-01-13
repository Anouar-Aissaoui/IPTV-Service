import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const SmartTvSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on Smart TV - Complete Guide"
        description="Step-by-step guide on how to setup IPTV on your Smart TV. Learn to install and configure IPTV apps for the best streaming experience."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on Smart TV</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default SmartTvSetup;