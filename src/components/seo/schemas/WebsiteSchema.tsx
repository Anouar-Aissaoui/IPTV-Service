export const getWebsiteSchema = () => ({
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "Best IPTV Service Provider",
  "description": "Premium IPTV service with 40,000+ channels worldwide, HD & 4K quality, and 24/7 support",
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://www.iptvservice.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "ReadAction",
      "target": [
        {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.iptvservice.site/channels",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        }
      ]
    }
  ],
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "14.99",
    "highPrice": "49.99",
    "offerCount": "4"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice",
    "https://instagram.com/iptvservice"
  ],
  "breadcrumb": {
    "@id": "https://www.iptvservice.site/#breadcrumb"
  }
});