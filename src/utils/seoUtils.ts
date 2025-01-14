import { supabase } from "@/integrations/supabase/client";
import type { SEOPageData } from "@/types/seo";

export const trackSEOMetrics = async (pageData: SEOPageData) => {
  try {
    const { data: existingRecord } = await supabase
      .from('seo_metrics')
      .select()
      .eq('route', window.location.pathname)
      .maybeSingle();

    const seoData = {
      route: window.location.pathname,
      title: pageData.title,
      description: pageData.description,
      canonical_url: `https://www.iptvservice.site${window.location.pathname}`,
      meta_tags: {
        keywords: pageData.keywords.join(', '),
        'og:type': pageData.pageType || 'website',
        'og:title': pageData.title,
        'og:description': pageData.description,
        'og:url': `https://www.iptvservice.site${window.location.pathname}`,
        'og:image': pageData.imageUrl || 'https://www.iptvservice.site/iptv-subscription.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': pageData.title,
        'twitter:description': pageData.description,
        'twitter:image': pageData.imageUrl || 'https://www.iptvservice.site/iptv-subscription.png',
        'content-language': pageData.locale || 'en'
      },
      structured_data: {
        '@context': 'https://schema.org',
        '@type': pageData.pageType || 'WebPage',
        name: pageData.title,
        description: pageData.description,
        url: `https://www.iptvservice.site${window.location.pathname}`,
        image: pageData.imageUrl || 'https://www.iptvservice.site/iptv-subscription.png',
        inLanguage: pageData.locale || 'en',
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.iptvservice.site${window.location.pathname}`
        },
        publisher: {
          '@type': 'Organization',
          name: 'IPTV Service',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iptvservice.site/iptv-subscription.png'
          }
        }
      }
    };

    if (existingRecord) {
      const { error: updateError } = await supabase
        .from('seo_metrics')
        .update(seoData)
        .eq('route', window.location.pathname);

      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase
        .from('seo_metrics')
        .insert([seoData]);

      if (insertError) throw insertError;
    }

    return true;
  } catch (error) {
    console.error('Error tracking SEO metrics:', error);
    return false;
  }
};

export const generateDynamicMetaTags = (pageData: SEOPageData) => {
  const baseUrl = 'https://www.iptvservice.site';
  const currentUrl = window.location.pathname;
  
  return {
    title: pageData.title,
    metaTags: {
      description: pageData.description,
      keywords: pageData.keywords.join(', '),
      'og:type': pageData.pageType || 'website',
      'og:title': pageData.title,
      'og:description': pageData.description,
      'og:url': `${baseUrl}${currentUrl}`,
      'og:image': pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
      'twitter:title': pageData.title,
      'twitter:description': pageData.description,
      'twitter:image': pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
      'content-language': pageData.locale || 'en'
    }
  };
};