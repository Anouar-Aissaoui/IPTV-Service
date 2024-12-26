import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { seoKeywords } from './seo/Keywords';
import { getStructuredData } from './seo/StructuredData';
import { ServiceFeatures } from './seo/ServiceFeatures';
import { trackPageSEO, generateDynamicMetaTags } from '@/utils/seoUtils';
import { useLocation } from 'react-router-dom';

export const SEOContent = () => {
  const location = useLocation();
  const isPreviewDomain = window.location.hostname.includes('preview--clone-landing-tech.lovable.app');
  
  useEffect(() => {
    if (!isPreviewDomain) {
      const pageData = {
        title: "Premium IPTV Service Provider | Best IPTV Subscription 2024",
        description: "Experience the ultimate IPTV service with 40,000+ live channels & 54,000+ VOD content. Premium IPTV subscription with 4K quality, instant activation & 24/7 support. Try now!",
        keywords: seoKeywords,
        imageUrl: "https://www.iptvservice.site/iptv-subscription.png"
      };

      const { title, metaTags } = generateDynamicMetaTags(pageData);
      const structuredData = getStructuredData();

      trackPageSEO({
        route: location.pathname,
        title: title,
        description: metaTags.description,
        canonicalUrl: `https://www.iptvservice.site${location.pathname}`,
        metaTags: metaTags,
        structuredData: structuredData
      });
    }
  }, [location.pathname, isPreviewDomain]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Premium IPTV Service Provider | Best IPTV Subscription 2024</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content="Experience the ultimate IPTV service with 40,000+ live channels & 54,000+ VOD content. Premium IPTV subscription with 4K quality, instant activation & 24/7 support. Try now!" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://www.iptvservice.site${location.pathname}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Service Provider | Best IPTV Subscription 2024" />
        <meta property="og:description" content="Access 40,000+ premium channels & 54,000+ VOD content. HD & 4K quality streaming, instant setup, 24/7 support. Start your premium IPTV experience today!" />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${location.pathname}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Service Provider | Best IPTV Subscription 2024" />
        <meta name="twitter:description" content="Access 40,000+ premium channels & 54,000+ VOD content. HD & 4K quality streaming, instant setup, 24/7 support. Start your premium IPTV experience today!" />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        
        <meta name="author" content="Premium IPTV Service Provider" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>
      </Helmet>

      <div className="bg-dark-gray py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-invert max-w-none" itemScope itemType="https://schema.org/Article">
            <header>
              <h1 
                className="text-5xl font-bold mb-10 text-white bg-gradient-to-r from-neon to-white bg-clip-text text-transparent"
                itemProp="headline"
              >
                Premium IPTV Service Provider
              </h1>
              
              <meta itemProp="datePublished" content="2024-03-19" />
              <meta itemProp="dateModified" content="2024-03-19" />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                Elite IPTV Streaming Experience in 2024
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Elevate your entertainment with our premium IPTV subscription service. Gain unlimited access to an extensive library of 
                  <strong className="text-neon"> 40,000+ live channels</strong> and 
                  <strong className="text-neon"> 54,000+ VOD content</strong> in stunning 4K and HD quality. Our comprehensive IPTV service 
                  delivers unmatched entertainment across all your devices, featuring premium sports channels, international content, and the 
                  latest movies and TV shows.
                </p>
              </div>
            </section>

            <ServiceFeatures />

            <div className="bg-gradient-to-r from-dark-gray to-dark p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors text-center mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-neon">Ready to Experience Premium IPTV?</h3>
              <p className="text-gray-300 text-lg">
                Join thousands of satisfied customers worldwide. Start your journey with our risk-free trial and discover why we're the 
                leading IPTV service provider. Premium entertainment awaits!
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};