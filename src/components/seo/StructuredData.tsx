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

const baseUrl = 'https://www.iptvservice.site';

export const getStructuredData = (pageType?: string, pageData?: PageData): BaseSchema => {
  const url = pageData?.url || baseUrl;
  const context = 'https://schema.org';

  const baseSchemas: BaseSchema[] = [
    {
      '@context': context,
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'IPTV Service',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/iptv-subscription.png`,
        width: 600,
        height: 60,
        caption: 'IPTV Service Logo'
      },
      description: 'Premium IPTV Service Provider',
      sameAs: [
        'https://facebook.com/iptvservice',
        'https://twitter.com/iptvservice'
      ],
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: '+1-234-567-8900',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
        hoursAvailable: 'Mo-Su 00:00-24:00'
      }],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      award: 'Best IPTV Service Provider 2024'
    },
    {
      '@context': context,
      '@type': 'FAQPage',
      url: `${baseUrl}/faq`,
      mainEntity: [{
        '@type': 'Question',
        name: 'What devices are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our IPTV service supports Smart TVs, mobile devices, tablets, and streaming devices.'
        }
      }]
    }
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

  // Add website schema
  baseSchemas.push(getWebsiteSchema());

  return {
    '@context': context,
    '@type': 'WebPage',
    url,
    '@graph': baseSchemas
  } as BaseSchema;
};