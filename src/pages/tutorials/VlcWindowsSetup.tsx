import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const VlcWindowsSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on VLC Media Player (Windows) - Step by Step Guide"
        description="Learn how to setup and watch IPTV on VLC Media Player for Windows with our detailed step-by-step guide. Free tutorial with screenshots and instructions."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on VLC Media Player (Windows)</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default VlcWindowsSetup;