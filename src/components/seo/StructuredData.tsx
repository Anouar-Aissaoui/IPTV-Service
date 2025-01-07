import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebPageSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';
import { getArticleSchema } from './schemas/ArticleSchema';
import { getTutorialSchema } from './schemas/TutorialSchema';
import { getBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import type { BaseSchema } from '@/types/schema';

export interface PageData {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export const getStructuredData = (pageType?: string, pageData?: PageData): BaseSchema => {
  const baseSchemas: BaseSchema[] = [
    getOrganizationSchema(),
    getWebsiteSchema(
      pageData?.title || 'IPTV Service',
      pageData?.description || 'Premium IPTV Service',
      pageData?.url || 'https://www.iptvservice.site'
    ),
    getProductSchema(
      'Premium IPTV Subscription',
      'Access to 40,000+ live channels and VOD content',
      pageData?.url || 'https://www.iptvservice.site',
      { low: '14.99', high: '99.99' }
    ),
    getFAQSchema(),
    getServiceSchema()
  ];

  if (pageType === 'article' && pageData) {
    baseSchemas.push(getArticleSchema({
      title: pageData.title,
      description: pageData.description,
      url: pageData.url,
      imageUrl: pageData.imageUrl,
      datePublished: pageData.datePublished,
      dateModified: pageData.dateModified,
      author: pageData.author
    }));
  }

  if (pageType === 'tutorial' && pageData) {
    baseSchemas.push(getTutorialSchema({
      title: pageData.title,
      description: pageData.description,
      url: pageData.url
    }));
  }

  if (pageData?.breadcrumbs) {
    baseSchemas.push(getBreadcrumbSchema(pageData.breadcrumbs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": baseSchemas
  } as BaseSchema;
};