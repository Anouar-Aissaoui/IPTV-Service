import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebsiteSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';
import { getArticleSchema } from './schemas/ArticleSchema';
import { getTutorialSchema } from './schemas/TutorialSchema';
import { getBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generateDynamicSchema } from '@/utils/schemaManager';

export const getStructuredData = (pageType?: string, pageData?: any): Record<string, any> => {
  // Convert all schema objects to plain JSON objects for database compatibility
  const baseSchemas = [
    JSON.parse(JSON.stringify(getOrganizationSchema())),
    JSON.parse(JSON.stringify(getWebsiteSchema())),
    JSON.parse(JSON.stringify(getProductSchema())),
    JSON.parse(JSON.stringify(getServiceSchema()))
  ];

  if (pageData) {
    const dynamicSchemas = generateDynamicSchema({
      type: pageType || 'WebPage',
      title: pageData.title,
      description: pageData.description,
      url: pageData.url || '/',
      imageUrl: pageData.image,
      datePublished: pageData.datePublished,
      dateModified: pageData.dateModified,
      breadcrumbs: pageData.breadcrumbs,
      faq: pageData.faq
    });
    baseSchemas.push(JSON.parse(JSON.stringify(dynamicSchemas)));
  }

  if (pageType === 'article' && pageData) {
    baseSchemas.push(JSON.parse(JSON.stringify(getArticleSchema(pageData))));
  }

  if (pageType === 'tutorial' && pageData) {
    baseSchemas.push(JSON.parse(JSON.stringify(getTutorialSchema(pageData))));
  }

  // Convert to plain object for JSON compatibility
  return {
    "@context": "https://schema.org",
    "@graph": baseSchemas
  };
};