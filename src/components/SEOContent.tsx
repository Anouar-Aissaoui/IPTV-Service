import React from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { ServiceFeatures } from './seo/ServiceFeatures';
import { IPTVDefinition } from './seo/IPTVDefinition';
import { IPTVBenefits } from './seo/IPTVBenefits';
import { IPTVExplanation } from './seo/IPTVExplanation';
import { IPTVFAQs } from './seo/IPTVFAQs';
import type { PSEOVariation } from '@/types/seo';

export const SEOContent = () => {
  const location = useLocation();
  const isPreviewDomain = window.location.hostname.includes('preview--clone-landing-tech.lovable.app');
  const currentPath = location?.pathname || '/';
  
  const { data: pseoData } = useQuery({
    queryKey: ['pseo', currentPath],
    queryFn: async () => {
      const slug = currentPath.slice(1) || 'best-iptv-service-usa';
      const { data, error } = await supabase
        .from('pseo_variations')
        .select('*, content, meta_tags, social_tags, schema_org')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching pSEO data:', error);
        return null;
      }
      
      return data as PSEOVariation;
    }
  });

  const targetFeatures = pseoData?.target_features || [];
  const targetAudience = pseoData?.target_audience || [];

  return (
    <>
      <Helmet>
        <html lang={pseoData?.locale || "en"} />
        <title>{pseoData?.title || "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide"}</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content={pseoData?.description} />
        <meta name="keywords" content={pseoData?.keywords?.join(', ')} />
        <link rel="canonical" href={`https://www.iptvservice.site${currentPath}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type || "website"} />
        <meta property="og:title" content={pseoData?.title} />
        <meta property="og:description" content={pseoData?.description} />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${currentPath}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pseoData?.title} />
        <meta name="twitter:description" content={pseoData?.description} />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />

        {/* Location and Service Type */}
        {pseoData?.target_location && (
          <meta name="geo.placename" content={pseoData.target_location} />
        )}
        
        {/* Dynamic meta tags from database */}
        {pseoData?.meta_tags && Object.entries(pseoData.meta_tags).map(([key, value]) => (
          <meta key={key} property={key} content={String(value)} />
        ))}

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": pseoData?.page_type || "Product",
            "name": pseoData?.title,
            "description": pseoData?.description,
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "14.99",
              "highPrice": "59.99",
              "offerCount": "4",
              "availability": "https://schema.org/InStock"
            },
            ...(pseoData?.schema_org || {})
          })}
        </script>
      </Helmet>

      <div className="bg-dark-gray py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          <article className="prose prose-invert max-w-none" itemScope itemType="https://schema.org/Article">
            <header>
              <h1 
                className="text-5xl font-bold mb-10 text-white bg-gradient-to-r from-neon to-white bg-clip-text text-transparent"
                itemProp="headline"
              >
                {pseoData?.h1 || "Buy IPTV Subscription"}
              </h1>
              
              <meta itemProp="datePublished" content={new Date().toISOString().split('T')[0]} />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                {pseoData?.content?.main_content ? 
                  "Premium IPTV Service for " + pseoData.target_location :
                  "Revolutionize Your Viewing Experience with IPTV"}
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {pseoData?.content?.main_content || 
                    "Buy IPTV Subscription from the world's #1 provider and explore a world of entertainment. Our IPTV service delivers 4K live streaming, global channels, popular shows, live sports, movies, and documentaries — all in one package."}
                </p>

                {targetFeatures.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Key Features for {pseoData?.target_location}</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {targetFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {targetAudience.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Perfect For</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <IPTVDefinition />
                <IPTVBenefits />
                <IPTVExplanation />
                <IPTVFAQs />
                <ServiceFeatures />
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};