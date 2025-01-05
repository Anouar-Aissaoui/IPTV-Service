export const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, item: string}>) => ({
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvservice.site/#breadcrumb",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.iptvservice.site${crumb.item}`
  }))
});