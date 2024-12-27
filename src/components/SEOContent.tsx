import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { seoKeywords } from './seo/Keywords';
import { getStructuredData } from './seo/StructuredData';
import { ServiceFeatures } from './seo/ServiceFeatures';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { trackPageSEO, generateDynamicMetaTags } from '@/utils/seoUtils';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { PSEOVariation, SEOPageData, PSEOContent } from '@/types/seo';

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
        description: pseoData.description || "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 40K+ channels and 54K+ VOD content. Subscribe now!",
        keywords: pseoData.keywords || seoKeywords,
        imageUrl: "https://www.iptvservice.site/iptv-subscription.png",
        locale: pseoData.locale || 'en',
        pageType: pseoData.page_type || 'website',
        alternateUrls: pseoData.alternate_urls as Record<string, string> || {}
      };

      const { title, metaTags } = generateDynamicMetaTags(pageData);
      const structuredData = pseoData.schema_org || getStructuredData();

      trackPageSEO({
        route: currentPath,
        title: title,
        description: metaTags.description,
        canonicalUrl: `https://www.iptvservice.site${currentPath}`,
        metaTags: metaTags,
        structuredData: structuredData,
        socialTags: pseoData.social_tags || {}
      });
    }
  }, [currentPath, isPreviewDomain, pseoData]);

  const seoTitle = pseoData?.title || "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide";
  const seoDescription = pseoData?.description || "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 40K+ channels and 54K+ VOD content. Subscribe now!";
  const seoKeywordsList = pseoData?.keywords || seoKeywords;
  const seoH1 = pseoData?.h1 || "Premium IPTV Service Provider";
  const content = pseoData?.content || {} as PSEOContent;

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
        <link rel="canonical" href={`https://www.iptvservice.site${currentPath}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type || "website"} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${currentPath}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Premium IPTV Service Provider",
            "url": "https://www.iptvservice.site",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.iptvservice.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Premium IPTV Subscription",
            "description": "Access to 40,000+ live channels and 54,000+ VOD content with HD and 4K quality",
            "brand": {
              "@type": "Brand",
              "name": "Best IPTV Service Provider"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "14.99",
              "highPrice": "59.99",
              "offerCount": "4",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "7520",
              "bestRating": "5",
              "worstRating": "1"
            }
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
                {seoH1}
              </h1>
              
              <meta itemProp="datePublished" content={new Date().toISOString().split('T')[0]} />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                Elite IPTV Streaming Experience in {new Date().getFullYear()}
              </h2>
              
              <div itemProp="articleBody">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {content.main_content || `Experience premium entertainment with our comprehensive IPTV subscription service. 
                  Access an extensive library of 40,000+ live channels and 54,000+ VOD content in stunning 4K and HD quality. 
                  Our service delivers unmatched streaming across all your devices, featuring premium sports channels, 
                  international content, and the latest movies and TV shows.`}
                </p>
              </div>
            </section>

            <ServiceFeatures />
          </article>
        </div>
      </div>
    </>
  );
};