import type { BaseSchema } from '@/types/schema';

export const getServiceSchema = () => ({
  "@type": "Service",
  "name": "IPTV Streaming Service",
  "serviceType": "Streaming Service",
  "provider": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IPTV Subscription Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium IPTV Subscription"
        }
      }
    ]
  }
}) as BaseSchema;