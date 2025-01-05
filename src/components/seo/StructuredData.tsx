import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebsiteSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';
import { getArticleSchema } from './schemas/ArticleSchema';
import { getTutorialSchema } from './schemas/TutorialSchema';

type SchemaType = ReturnType<typeof getOrganizationSchema> | 
                  ReturnType<typeof getWebsiteSchema> | 
                  ReturnType<typeof getProductSchema> | 
                  ReturnType<typeof getFAQSchema> | 
                  ReturnType<typeof getServiceSchema> | 
                  ReturnType<typeof getArticleSchema> | 
                  ReturnType<typeof getTutorialSchema>;

export const getStructuredData = (pageType?: string, pageData?: any) => {
  const baseSchemas: SchemaType[] = [
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