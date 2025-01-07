import React from 'react';
import type { 
  BaseSchema,
  WebPageSchema,
  ProductSchema,
  FAQSchema,
  ArticleSchema,
  OrganizationSchema,
  BreadcrumbSchema
} from '@/types/schema';

interface SchemaManagerProps {
  schemas: BaseSchema[];
}

export const SchemaManager: React.FC<SchemaManagerProps> = ({ schemas }) => {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string
): WebPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url,
  name: title,
  description,
  isPartOf: {
    '@type': 'WebSite',
    name: 'IPTV Service',
    url: 'https://www.iptvservice.site'
  }
});

export const generateProductSchema = (
  name: string,
  description: string,
  url: string,
  priceRange: { low: string; high: string }
): ProductSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  url,
  name,
  description,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: priceRange.low,
    highPrice: priceRange.high,
    offerCount: '4'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1250'
  }
});

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>,
  url: string
): FAQSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url,
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateOrganizationSchema = (
  name: string,
  url: string,
  logoUrl: string,
  socialLinks: string[]
): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url,
  name,
  logo: {
    '@type': 'ImageObject',
    url: logoUrl
  },
  sameAs: socialLinks
});

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
  baseUrl: string
): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  url: baseUrl,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});