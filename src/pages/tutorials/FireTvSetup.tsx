import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const FireTvSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on Fire TV Stick - Installation Guide"
        description="Learn how to install and setup IPTV on your Amazon Fire TV Stick. Easy-to-follow guide with screenshots and troubleshooting tips."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on Fire TV Stick</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default FireTvSetup;