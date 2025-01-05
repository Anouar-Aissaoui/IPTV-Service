export const getWebsiteSchema = () => ({
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "Best IPTV Service Provider",
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.iptvservice.site/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US",
  "breadcrumb": {
    "@id": "https://www.iptvservice.site/#breadcrumb"
  }
});