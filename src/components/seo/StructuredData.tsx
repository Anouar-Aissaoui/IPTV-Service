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
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      url: baseUrl,
      ...getOrganizationSchema()
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: baseUrl,
      ...getWebsiteSchema()
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      url: baseUrl,
      ...getProductSchema(
        'Premium IPTV Subscription',
        'Access to 40,000+ live channels and VOD content',
        url,
        { low: '14.99', high: '99.99' }
      )
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      url: `${baseUrl}/faq`,
      ...getFAQSchema()
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      url: baseUrl,
      ...getServiceSchema()
    }
  ];

  if (pageType === 'article' && pageData) {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      url: pageData.url,
      ...getArticleSchema({
        title: pageData.title,
        description: pageData.description,
        url: pageData.url,
        image: pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
        datePublished: pageData.datePublished || new Date().toISOString(),
        dateModified: pageData.dateModified || new Date().toISOString(),
        author: pageData.author || 'IPTV Service'
      })
    });
  }

  if (pageType === 'tutorial' && pageData) {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      url: pageData.url,
      ...getTutorialSchema({
        title: pageData.title,
        description: pageData.description,
        url: pageData.url,
        steps: []
      })
    });
  }

  if (pageData?.breadcrumbs) {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      url: pageData.url,
      ...getBreadcrumbSchema(pageData.breadcrumbs)
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    '@graph': baseSchemas
  } as BaseSchema;
};