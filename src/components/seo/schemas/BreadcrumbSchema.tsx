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
      "@type": "ReadAction",
      "target": ["https://www.iptvservice.site"]
    }
  ],
  "copyrightYear": new Date().getFullYear(),
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice"
  ],
  "breadcrumb": {
    "@id": "https://www.iptvservice.site/#breadcrumb"
  },
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.iptvservice.site${crumb.item}`
  })),
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://www.iptvservice.site/#website"
  }
});