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