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
        title: "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
        description: "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 40,000+ channels and 54,000+ VOD content. Subscribe now!",
        keywords: seoKeywords,
        imageUrl: "https://iptvsubscription.news/iptv-subscription.png"
      };

      const { title, metaTags } = generateDynamicMetaTags(pageData);
      const structuredData = getStructuredData();

      trackPageSEO({
        route: location.pathname,
        title: title,
        description: metaTags.description,
        canonicalUrl: `https://iptvsubscription.news${location.pathname}`,
        metaTags: metaTags,
        structuredData: structuredData
      });
    }
  }, [location.pathname, isPreviewDomain]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content="Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 40,000+ channels and 54,000+ VOD content. Subscribe now!" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://iptvsubscription.news${location.pathname}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best IPTV Service Provider | Premium Channels & VOD Content" />
        <meta property="og:description" content="Access 40,000+ channels and 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, multiple device support, and 24/7 customer service." />
        <meta property="og:image" content="https://iptvsubscription.news/iptv-subscription.png" />
        <meta property="og:url" content={`https://iptvsubscription.news${location.pathname}`} />
        <meta property="og:site_name" content="Best IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IPTV Service Provider | Premium Channels & VOD Content" />
        <meta name="twitter:description" content="Access 40,000+ channels and 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, multiple device support, and 24/7 customer service." />
        <meta name="twitter:image" content="https://iptvsubscription.news/iptv-subscription.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Best IPTV Service Provider" />
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
                Premium IPTV Subscription Service
              </h1>
              
              <meta itemProp="datePublished" content="2024-03-19" />
              <meta itemProp="dateModified" content="2024-03-19" />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                The Ultimate IPTV Experience in 2024
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Experience the future of television with our premium IPTV subscription service. Access an extensive library of 
                  <strong className="text-neon"> 40,000+ live channels</strong> and 
                  <strong className="text-neon"> 54,000+ VOD content</strong> in stunning 4K and HD quality. Whether you're a 
                  sports enthusiast, movie buff, or TV show fanatic, our comprehensive IPTV service delivers unmatched entertainment 
                  right to your preferred device.
                </p>
              </div>
            </section>

            <ServiceFeatures />

            <div className="bg-gradient-to-r from-dark-gray to-dark p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors text-center mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-neon">Ready to Transform Your Entertainment Experience?</h3>
              <p className="text-gray-300 text-lg">
                Start your journey with our risk-free trial and discover why thousands of customers trust us as their 
                IPTV service provider. Join the streaming revolution today!
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};