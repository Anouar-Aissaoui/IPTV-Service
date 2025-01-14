import type { BreadcrumbList, FAQPage, WebPage, WithContext } from "schema-dts";

export const generateDynamicSchema = (pageData: {
  type: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{name: string, item: string}>;
  faq?: Array<{question: string, answer: string}>;
}): Array<WithContext<WebPage | BreadcrumbList | FAQPage>> => {
  const schemas: Array<WithContext<WebPage | BreadcrumbList | FAQPage>> = [];

  // Base WebPage schema
  const baseSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": pageData.type,
    "@id": `https://www.iptvservice.site${pageData.url}#${pageData.type.toLowerCase()}`,
    "url": `https://www.iptvservice.site${pageData.url}`,
    "name": pageData.title,
    "description": pageData.description,
    "publisher": {
      "@id": "https://www.iptvservice.site/#organization"
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.iptvservice.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "breadcrumb": {
      "@id": "https://www.iptvservice.site/#breadcrumb"
    }
  };

  if (pageData.datePublished) {
    baseSchema.datePublished = pageData.datePublished;
  }
  if (pageData.dateModified) {
    baseSchema.dateModified = pageData.dateModified;
  }
  if (pageData.imageUrl) {
    baseSchema.image = pageData.imageUrl;
  }

  schemas.push(baseSchema);

  // Generate breadcrumbs schema if available
  if (pageData.breadcrumbs) {
    const breadcrumbsSchema: WithContext<BreadcrumbList> = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": pageData.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `https://www.iptvservice.site${crumb.item}`
      }))
    };
    schemas.push(breadcrumbsSchema);
  }

  // Generate FAQ schema if available
  if (pageData.faq) {
    const faqSchema: WithContext<FAQPage> = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pageData.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
    schemas.push(faqSchema);
  }

  return schemas;
};