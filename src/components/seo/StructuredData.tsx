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
  canonicalUrl?: string;
}

export const getStructuredData = (pageType?: string, pageData?: PageData): BaseSchema => {
  const baseUrl = 'https://www.iptvservice.site';
  const url = pageData?.url || baseUrl;

  const baseSchemas: BaseSchema[] = [
    getOrganizationSchema(),
    getWebsiteSchema(
      pageData?.title || 'IPTV Service',
      pageData?.description || 'Premium IPTV Service',
      url
    ),
    getProductSchema(
      'Premium IPTV Subscription',
      'Access to 40,000+ live channels and VOD content',
      url,
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
      image: pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
      datePublished: pageData.datePublished || new Date().toISOString(),
      dateModified: pageData.dateModified || new Date().toISOString(),
      author: pageData.author || 'IPTV Service'
    }));
  }

  if (pageType === 'tutorial' && pageData) {
    baseSchemas.push(getTutorialSchema({
      title: pageData.title,
      description: pageData.description,
      url: pageData.url,
      steps: []
    }));
  }

  if (pageData?.breadcrumbs) {
    baseSchemas.push(getBreadcrumbSchema(pageData.breadcrumbs));
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    '@graph': baseSchemas
  } as BaseSchema;
};