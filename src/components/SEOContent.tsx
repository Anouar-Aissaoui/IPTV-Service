import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { seoKeywords } from './seo/Keywords';
import { getStructuredData } from './seo/StructuredData';
import { ServiceFeatures } from './seo/ServiceFeatures';
import { trackPageSEO, generateDynamicMetaTags } from '@/utils/seoUtils';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { PSEOVariation, SEOPageData } from '@/types/seo';

export const SEOContent = () => {
  const location = useLocation();
  const isPreviewDomain = window.location.hostname.includes('preview--clone-landing-tech.lovable.app');
  
  const { data: pseoData } = useQuery({
    queryKey: ['pseo', location.pathname],
    queryFn: async () => {
      const slug = location.pathname.slice(1) || 'best-iptv-service-usa';
      const { data, error } = await supabase
        .from('pseo_variations')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching pSEO data:', error);
        return null;
      }
      
      return data as PSEOVariation;
    }
  });

  useEffect(() => {
    if (!isPreviewDomain && pseoData) {
      const pageData: SEOPageData = {
        title: pseoData.title || "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
        description: pseoData.description || "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!",
        keywords: pseoData.keywords || seoKeywords,
        imageUrl: "https://www.iptvservice.site/iptv-subscription.png",
        locale: pseoData.locale || 'en',
        pageType: pseoData.page_type || 'article',
        alternateUrls: pseoData.alternate_urls as Record<string, string> || {}
      };

      const { title, metaTags } = generateDynamicMetaTags(pageData);
      const structuredData = pseoData.schema_org || getStructuredData();

      trackPageSEO({
        route: location.pathname,
        title: title,
        description: metaTags.description,
        canonicalUrl: `https://www.iptvservice.site${location.pathname}`,
        metaTags: metaTags,
        structuredData: structuredData,
        socialTags: pseoData.social_tags || {}
      });
    }
  }, [location.pathname, isPreviewDomain, pseoData]);

  const seoTitle = pseoData?.title || "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide";
  const seoDescription = pseoData?.description || "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!";
  const seoKeywordsList = pseoData?.keywords || seoKeywords;
  const seoH1 = pseoData?.h1 || "Premium IPTV Service Provider";
  const content = pseoData?.content || {} as PSEOContent;
  const alternateUrls = pseoData?.alternate_urls as Record<string, string> || {};

  return (
    <>
      <Helmet>
        <html lang={pseoData?.locale || "en"} />
        <title>{seoTitle}</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywordsList.join(', ')} />
        <link rel="canonical" href={`https://www.iptvservice.site${location.pathname}`} />
        
        {/* Alternate language URLs */}
        {Object.entries(alternateUrls).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type || "website"} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${location.pathname}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(pseoData?.schema_org || getStructuredData())}
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
                {seoH1}
              </h1>
              
              <meta itemProp="datePublished" content="2024-03-19" />
              <meta itemProp="dateModified" content="2024-03-19" />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                Elite IPTV Streaming Experience in 2025
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {content.main_content || `Elevate your entertainment with our premium IPTV subscription service. Gain unlimited access to an extensive library of 
                  40,000+ live channels and 54,000+ VOD content in stunning 4K and HD quality. Our comprehensive IPTV service 
                  delivers unmatched entertainment across all your devices, featuring premium sports channels, international content, and the 
                  latest movies and TV shows.`}
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