import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { ServiceFeatures } from './seo/ServiceFeatures';
import { IPTVDefinition } from './seo/IPTVDefinition';
import { IPTVBenefits } from './seo/IPTVBenefits';
import { IPTVExplanation } from './seo/IPTVExplanation';
import { IPTVFAQs } from './seo/IPTVFAQs';
import OptimizedHelmet from './seo/OptimizedHelmet';
import { getStructuredData } from './seo/StructuredData';
import { toast } from 'sonner';
import type { PSEOVariation } from '@/types/seo';

export const SEOContent = () => {
  const location = useLocation();
  const isPreviewDomain = window.location.hostname.includes('preview--clone-landing-tech.lovable.app');
  const currentPath = location?.pathname || '/';
  const locale = 'en';
  
  const { data: pseoData, isError } = useQuery({
    queryKey: ['pseo', locale],
    queryFn: async () => {
      const slug = 'best-iptv-service-usa';

      const { data, error } = await supabase
        .from('pseo_variations')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching PSEO data:', error);
        toast.error('Failed to load page content');
        return null;
      }
      
      return data as PSEOVariation;
    },
    staleTime: 5 * 60 * 1000,
    retry: 2
  });

  const baseUrl = 'https://www.iptvservice.site';
  let canonicalUrl = `${currentPath}`;
  
  if (canonicalUrl.length > 1 && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  if (currentPath === '/') {
    canonicalUrl = '/en';
  }

  if (isError) {
    console.error('Error loading SEO content');
    return null;
  }

  const structuredData = getStructuredData();

  return (
    <>
      <OptimizedHelmet
        title={pseoData?.title}
        description={pseoData?.description}
        canonicalUrl={canonicalUrl}
        locale={locale}
        type={pseoData?.page_type}
        keywords={pseoData?.keywords}
        noindex={isPreviewDomain}
        structuredData={structuredData}
      >
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      </OptimizedHelmet>

      <main className="bg-dark-gray py-24" itemScope itemType="https://schema.org/WebPage">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          <article className="prose prose-invert max-w-none" itemScope itemType="https://schema.org/Article">
            <header>
              <h1 
                className="text-5xl font-bold mb-10 text-white bg-gradient-to-r from-neon to-white bg-clip-text text-transparent"
                itemProp="headline"
              >
                {pseoData?.h1 ?? "Premium IPTV Subscription Service"}
              </h1>
              
              <meta itemProp="datePublished" content={new Date().toISOString().split('T')[0]} />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
              <meta itemProp="author" content="Best IPTV Service Provider" />
              <meta itemProp="publisher" content="IPTV Service" />
            </header>
            
            <section itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content="Premium IPTV Subscription" />
              <meta itemProp="description" content={pseoData?.description} />
              <meta itemProp="brand" content="Best IPTV Service Provider" />
              
              <div itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
                <meta itemProp="priceCurrency" content="USD" />
                <meta itemProp="lowPrice" content="14.99" />
                <meta itemProp="highPrice" content="59.99" />
                <meta itemProp="offerCount" content="4" />
              </div>
              
              <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="reviewCount" content="7520" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
              </div>

              <div className="article-body" itemProp="articleBody">
                <IPTVDefinition />
                <IPTVBenefits />
                <IPTVExplanation />
                <IPTVFAQs />
                <ServiceFeatures />
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};