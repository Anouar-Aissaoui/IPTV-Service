import type { BreadcrumbList } from "schema-dts";

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
}) => {
  const baseSchema = {
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
    "datePublished": pageData.datePublished || new Date().toISOString(),
    "dateModified": pageData.dateModified || new Date().toISOString(),
    "image": pageData.imageUrl || "https://www.iptvservice.site/iptv-subscription.png"
  };

  // Generate breadcrumbs schema if available
  if (pageData.breadcrumbs) {
    const breadcrumbsSchema: BreadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": pageData.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `https://www.iptvservice.site${crumb.item}`
      }))
    };
    return [baseSchema, breadcrumbsSchema];
  }

  // Generate FAQ schema if available
  if (pageData.faq) {
    const faqSchema = {
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
    return [baseSchema, faqSchema];
  }

  return [baseSchema];
};