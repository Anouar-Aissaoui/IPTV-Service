export const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, item: string}>) => ({
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvservice.site/#breadcrumb",
  "name": "Breadcrumb",
  "url": "https://www.iptvservice.site",
  "description": "Navigation path for IPTV Service website",
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://www.iptvservice.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
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
  },
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.iptvservice.site${crumb.item}`
  }))
});