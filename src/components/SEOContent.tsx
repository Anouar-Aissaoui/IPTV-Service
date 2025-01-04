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

  // Construct the canonical URL based on the current path and locale
  const baseUrl = 'https://www.iptvservice.site';
  let canonicalUrl = `${currentPath}`;
  
  // Remove trailing slash if present, except for the root path
  if (canonicalUrl.length > 1 && canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  // For the root path, redirect to the default locale
  if (currentPath === '/') {
    canonicalUrl = '/en';
  }

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
      >
        {/* Alternate language links */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      </OptimizedHelmet>

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