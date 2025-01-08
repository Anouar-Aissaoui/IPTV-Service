export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.iptvservice.site/#organization",
  "name": "Best IPTV Service Provider",
  "url": "https://www.iptvservice.site",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/iptv-subscription.png",
    "width": 1200,
    "height": 630,
    "caption": "Premium IPTV Service Provider Logo"
  },
  "description": "Premium IPTV service provider offering 40,000+ channels and 54,000+ VOD content worldwide with 4K quality streaming",
  "sameAs": [
    "https://twitter.com/iptvsubscription",
    "https://facebook.com/iptvsubscription",
    "https://instagram.com/iptvsubscription",
    "https://linkedin.com/company/iptvsubscription"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "French", "Arabic"],
      "email": "support@iptvservice.site",
      "areaServed": ["US", "UK", "CA", "AU", "EU"],
      "hoursAvailable": "Mo-Su 00:00-24:00"
    },
    {
      "@type": "ContactPoint",
      "contactType": "technical support",
      "availableLanguage": ["English", "Spanish", "French"],
      "email": "tech@iptvservice.site",
      "areaServed": ["US", "UK", "CA", "AU", "EU"],
      "hoursAvailable": "Mo-Su 00:00-24:00"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "CA"
  },
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50+"
  },
  "slogan": "Premium IPTV Service for Quality Entertainment",
  "award": "Best IPTV Service Provider 2024"
});