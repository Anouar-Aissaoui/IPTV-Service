import React from 'react';
import { Helmet } from "react-helmet";
import { seoKeywords } from './seo/Keywords';
import { getStructuredData } from './seo/StructuredData';
import { ServiceFeatures } from './seo/ServiceFeatures';

export const SEOContent = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Premium IPTV Service - Best USA Provider 2024</title>
        <meta name="description" content="Experience premium IPTV with 40,000+ channels and VOD content in 4K & HD quality. Get reliable streaming, 24/7 support, and affordable plans. Try our premium IPTV service today!" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href="https://iptvsubscription.news" />
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
                Best IPTV Subscription
              </h1>
              
              <meta itemProp="datePublished" content="2024-03-19" />
              <meta itemProp="dateModified" content="2024-03-19" />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                Ultimate Guide to Premium IPTV Service in 2024
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Looking for the best <a href="https://www.iptvservice.site/" className="text-neon hover:underline" rel="dofollow">IPTV subscription</a> in 2024? 
                  Our premium IPTV subscription offers an unparalleled streaming experience with over 40,000 channels and 54,000+ VOD content in stunning 4K and HD quality. 
                  Whether you're a sports enthusiast, movie buff, or TV show fanatic, our comprehensive IPTV service delivers entertainment right to your preferred device.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-neon pl-4">
                Why Choose Our IPTV Subscription?
              </h3>
              
              <ul className="list-none pl-6 text-gray-300 mb-8 space-y-4">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Extensive Content Library: Access to 40,000+ live channels and 54,000+ movies and TV shows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Premium Quality: Crystal clear 4K and HD streaming quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Multi-device Support: Watch on Smart TV, Android, iOS, Windows, and more</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>24/7 Customer Support: Round-the-clock technical assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>99.9% Uptime: Reliable service with minimal interruptions</span>
                </li>
              </ul>
            </section>

            <ServiceFeatures />

            <div className="bg-gradient-to-r from-dark-gray to-dark p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors text-center">
              <h4 className="text-2xl font-semibold mb-4 text-neon">Ready to Experience Premium IPTV?</h4>
              <p className="text-gray-300 text-lg">
                Start your journey with our risk-free trial and discover why thousands of customers trust us as their 
                <a href="https://www.iptvservice.site/" className="text-neon hover:underline mx-1" rel="dofollow">IPTV subscription</a> 
                provider. Join the streaming revolution today!
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};