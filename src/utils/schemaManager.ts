import type { WithContext, Thing, WebPage, BreadcrumbList, SearchAction, FAQPage } from 'schema-dts';

interface SchemaData {
  type: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{name: string, item: string}>;
  faq?: Array<{question: string, answer: string}>;
}

export const generateDynamicSchema = (pageData: SchemaData): Record<string, any> => {
  const schemas: Array<Record<string, any>> = [];

  // Base WebPage schema
  const baseSchema = {
    "@type": "WebPage",
    "@id": `https://www.iptvservice.site${pageData.url}#webpage`,
    "url": `https://www.iptvservice.site${pageData.url}`,
    "name": pageData.title,
    "description": pageData.description,
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.iptvservice.site/#organization"
    },
    "inLanguage": "en-US",
    "potentialAction": [{
      "@type": "SearchAction",
      "target": `https://www.iptvservice.site/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }]
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
    const breadcrumbsSchema = {
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
    const faqSchema = {
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

  return schemas[0]; // Return the first schema as the main one
};