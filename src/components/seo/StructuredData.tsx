import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebsiteSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';
import { getArticleSchema } from './schemas/ArticleSchema';
import { getTutorialSchema } from './schemas/TutorialSchema';
import { getBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generateDynamicSchema } from '@/utils/schemaManager';

export const getStructuredData = (pageType?: string, pageData?: any) => {
  const baseSchemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getProductSchema(),
    getServiceSchema()
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
    baseSchemas.push(...dynamicSchemas);
  }

  if (pageType === 'article' && pageData) {
    baseSchemas.push(getArticleSchema(pageData));
  }

  if (pageType === 'tutorial' && pageData) {
    baseSchemas.push(getTutorialSchema(pageData));
  }

  return {
    "@context": "https://schema.org",
    "@graph": baseSchemas
  };
};