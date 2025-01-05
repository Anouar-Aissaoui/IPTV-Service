import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebsiteSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';
import { getArticleSchema } from './schemas/ArticleSchema';
import { getTutorialSchema } from './schemas/TutorialSchema';

export const getStructuredData = (pageType?: string, pageData?: any) => {
  const baseSchemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getProductSchema(),
    getFAQSchema(),
    getServiceSchema()
  ];

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