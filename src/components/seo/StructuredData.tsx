export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium IPTV Subscription Service",
  "description": "High-quality IPTV service offering 40,000+ channels and 54,000+ VOD content in 4K & HD quality",
  "brand": {
    "@type": "Brand",
    "name": "Premium IPTV Service"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "14.99",
    "highPrice": "59.99",
    "offerCount": "4",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "image": "https://iptvsubscription.news/og-image.png",
  "url": "https://iptvsubscription.news",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Number of Channels",
      "value": "40000+"
    },
    {
      "@type": "PropertyValue",
      "name": "VOD Content",
      "value": "54000+"
    },
    {
      "@type": "PropertyValue",
      "name": "Streaming Quality",
      "value": "4K & HD"
    }
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://iptvsubscription.news"
  }
});