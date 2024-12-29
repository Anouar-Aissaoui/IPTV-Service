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
  const locale = currentPath.split('/')[1] || 'en';
  
  const { data: pseoData } = useQuery({
    queryKey: ['pseo', locale],
    queryFn: async () => {
      let slug;
      switch(locale) {
        case 'es':
          slug = 'mejor-servicio-iptv-espana';
          break;
        case 'de':
          slug = 'bester-iptv-dienst-deutschland';
          break;
        case 'fr':
          slug = 'meilleur-service-iptv-france';
          break;
        default:
          slug = 'best-iptv-service-usa';
      }

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

  const defaultTitle = "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide";
  const defaultDescription = "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!";

  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{pseoData?.title || defaultTitle}</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content={pseoData?.description || defaultDescription} />
        <meta name="keywords" content={pseoData?.keywords.join(', ')} />
        <link rel="canonical" href={`https://www.iptvservice.site${currentPath}`} />
        
        {/* Alternate language links */}
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/en" />
        <link rel="alternate" hrefLang="es" href="https://www.iptvservice.site/es" />
        <link rel="alternate" hrefLang="de" href="https://www.iptvservice.site/de" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type || "website"} />
        <meta property="og:title" content={pseoData?.title || defaultTitle} />
        <meta property="og:description" content={pseoData?.description || defaultDescription} />
        <meta property="og:image" content="https://www.iptvservice.site/iptv-subscription.png" />
        <meta property="og:url" content={`https://www.iptvservice.site${currentPath}`} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pseoData?.title || defaultTitle} />
        <meta name="twitter:description" content={pseoData?.description || defaultDescription} />
        <meta name="twitter:image" content="https://www.iptvservice.site/iptv-subscription.png" />
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
                {pseoData?.content?.main_content || "Revolutionize Your Viewing Experience with IPTV"}
              </h2>
              
              <div itemProp="articleBody">
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