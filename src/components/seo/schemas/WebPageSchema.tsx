import type { WebPageSchema } from '@/types/schema';

export const getWebsiteSchema = (
  title: string,
  description: string,
  url: string
): WebPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url,
  name: title,
  description,
  isPartOf: {
    '@type': 'WebSite',
    name: 'IPTV Service',
    url: 'https://www.iptvservice.site'
  }
});