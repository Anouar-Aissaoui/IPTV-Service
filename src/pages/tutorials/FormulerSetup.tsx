import React from 'react';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const FormulerSetup = () => {
  return (
    <ContentWrapper>
      <OptimizedHelmet
        title="How to Setup IPTV on Formuler Z8 - Setup Guide"
        description="Step-by-step guide for configuring IPTV on your Formuler Z8 box. Learn how to setup channels, EPG, and optimize your viewing experience."
        type="tutorial"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How to Setup IPTV on Formuler Z8</h1>
        {/* Content will be added later */}
      </div>
    </ContentWrapper>
  );
};

export default FormulerSetup;