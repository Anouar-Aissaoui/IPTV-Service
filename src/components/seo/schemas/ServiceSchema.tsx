import type { ServiceSchema } from '@/types/schema';

export const getServiceSchema = (): ServiceSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.iptvservice.site/#service',
  url: 'https://www.iptvservice.site',
  name: 'IPTV Streaming Service',
  serviceType: 'Streaming Service',
  provider: {
    '@id': 'https://www.iptvservice.site/#organization'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Worldwide'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IPTV Subscription Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium IPTV Subscription'
        }
      }
    ]
  }
});