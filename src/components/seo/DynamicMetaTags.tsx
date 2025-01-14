import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface DynamicMetaTagsProps {
  path: string;
  defaultTitle: string;
  defaultDescription: string;
  imageUrl?: string;
  type?: string;
}

export const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({
  path,
  defaultTitle,
  defaultDescription,
  imageUrl = '/iptv-subscription.png',
  type = 'website'
}) => {
  const { data: seoData } = useQuery({
    queryKey: ['seo-data', path],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', path)
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  const title = seoData?.title || defaultTitle;
  const description = seoData?.description || defaultDescription;
  const canonicalUrl = `https://www.iptvservice.site${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`https://www.iptvservice.site${imageUrl}`} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.iptvservice.site${imageUrl}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="IPTV Service" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} IPTV Service`} />
    </Helmet>
  );
};