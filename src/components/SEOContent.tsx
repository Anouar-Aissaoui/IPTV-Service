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

      const { data } = await supabase
        .from('pseo_variations')
        .select('*')
        .eq('slug', slug)
        .single();
      
      return data as PSEOVariation;
    }
  });

  const defaultTitle = "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide";
  const defaultDescription = "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!";
  
  // Construct the canonical URL based on the current path and locale
  const baseUrl = 'https://www.iptvservice.site';
  let canonicalUrl = `${baseUrl}${currentPath}`;
  
  // Remove trailing slash if present, except for the root path
  if (canonicalUrl.length > baseUrl.length + 1 && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  // For the root path, redirect to the default locale
  if (currentPath === '/') {
    canonicalUrl = `${baseUrl}/en`;
  }

  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{pseoData?.title ?? defaultTitle}</title>
        {isPreviewDomain ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        <meta name="description" content={pseoData?.description ?? defaultDescription} />
        <meta name="keywords" content={pseoData?.keywords?.join(', ') ?? ''} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Alternate language links */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pseoData?.page_type ?? "website"} />
        <meta property="og:title" content={pseoData?.title ?? defaultTitle} />
        <meta property="og:description" content={pseoData?.description ?? defaultDescription} />
        <meta property="og:image" content={`${baseUrl}/iptv-subscription.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Premium IPTV Service Provider" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pseoData?.title ?? defaultTitle} />
        <meta name="twitter:description" content={pseoData?.description ?? defaultDescription} />
        <meta name="twitter:image" content={`${baseUrl}/iptv-subscription.png`} />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#F97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance & Security Headers */}
        <meta http-equiv="X-DNS-Prefetch-Control" content="on" />
        <link rel="dns-prefetch" href={baseUrl} />
        <link rel="preconnect" href={baseUrl} />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        
        {/* PWA Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="IPTV Service" />
        <meta name="apple-mobile-web-app-title" content="IPTV Service" />
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
                {pseoData?.h1 ?? "Buy IPTV Subscription"}
              </h1>
              
              <meta itemProp="datePublished" content={new Date().toISOString().split('T')[0]} />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </header>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                {pseoData?.content?.main_content ?? "Revolutionize Your Viewing Experience with IPTV"}
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