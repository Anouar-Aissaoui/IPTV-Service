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
        title: pseoData.title || "Best IPTV Service Provider 2024 | Premium IPTV Subscription USA & UK",
        description: pseoData.description || "Access 40,000+ live channels & 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, instant activation, 24/7 support. Try risk-free today!",
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

  return (
    <>
      <Helmet>
        <html lang={pseoData?.locale || "en"} />
        <title>Best IPTV Service Provider 2024 | Premium IPTV Subscription USA & UK</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content="Access 40,000+ live channels & 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, instant activation, 24/7 support. Try risk-free today!" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://www.iptvservice.site${currentPath}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type || "website"} />
        <meta property="og:title" content="Best IPTV Service Provider 2024 | Premium IPTV Subscription USA & UK" />
        <meta property="og:description" content="Access 40,000+ live channels & 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, instant activation, 24/7 support." />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${currentPath}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IPTV Service Provider 2024 | Premium IPTV Subscription USA & UK" />
        <meta name="twitter:description" content="Access 40,000+ live channels & 54,000+ VOD content with our premium IPTV subscription. HD & 4K quality, instant activation, 24/7 support." />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />

        {/* Geo Targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Premium IPTV Service Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#F97316" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Premium IPTV Service" />
        <meta name="apple-mobile-web-app-title" content="Premium IPTV Service" />
        <meta name="msapplication-TileColor" content="#F97316" />
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
                Premium IPTV Service Provider | Best Streaming Experience
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
                  Experience premium entertainment with our comprehensive IPTV subscription service. 
                  Access an extensive library of 40,000+ live channels and 54,000+ VOD content in stunning 4K and HD quality. 
                  Our service delivers unmatched streaming across all your devices, featuring premium sports channels, 
                  international content, and the latest movies and TV shows.
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