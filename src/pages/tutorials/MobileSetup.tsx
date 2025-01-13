import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const MobileSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on Mobile Devices - iOS & Android Guide"
        description="Complete guide on setting up IPTV on your mobile devices. Step-by-step instructions for both iOS and Android smartphones and tablets."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on Mobile Devices</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default MobileSetup;