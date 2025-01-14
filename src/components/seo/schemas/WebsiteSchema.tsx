export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "Best IPTV Service Provider",
  "description": "Premium IPTV service with 40,000+ channels and VOD content in HD & 4K quality",
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": [{
    "@type": "SearchAction",
    "target": "https://www.iptvservice.site/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }],
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString(),
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice",
    "https://instagram.com/iptvservice"
  ]
});