import React from 'react';
import { useLocation } from 'react-router-dom';

interface SchemaProps {
  type: 'WebPage' | 'Article' | 'Product' | 'Organization' | 'BreadcrumbList' | 'FAQPage';
  data: Record<string, any>;
}

export const SchemaManager: React.FC<SchemaProps> = ({ type, data }) => {
  const location = useLocation();
  const baseUrl = 'https://www.iptvservice.site';
  const currentUrl = `${baseUrl}${location.pathname}`;

  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      url: currentUrl,
      ...data,
    };

    // Add mainEntityOfPage for Articles
    if (type === 'Article') {
      baseSchema.mainEntityOfPage = {
        '@type': 'WebPage',
        '@id': currentUrl,
      };
    }

    // Add specific fields based on type
    switch (type) {
      case 'WebPage':
        return {
          ...baseSchema,
          potentialAction: {
            '@type': 'ReadAction',
            target: [currentUrl],
          },
        };
      case 'Product':
        return {
          ...baseSchema,
          offers: {
            '@type': 'AggregateOffer',
            ...data.offers,
          },
        };
      case 'Organization':
        return {
          ...baseSchema,
          sameAs: [
            'https://twitter.com/iptvservice',
            'https://facebook.com/iptvservice',
            'https://instagram.com/iptvservice',
          ],
        };
      default:
        return baseSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  );
};

// Helper function to generate WebPage schema
export const generateWebPageSchema = (title: string, description: string) => ({
  type: 'WebPage' as const,
  data: {
    name: title,
    description,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'IPTV Service',
      url: 'https://www.iptvservice.site',
    },
  },
});

// Helper function to generate Product schema
export const generateProductSchema = (
  name: string,
  description: string,
  price: { min: number; max: number },
  rating?: { value: number; count: number }
) => ({
  type: 'Product' as const,
  data: {
    name,
    description,
    offers: {
      priceCurrency: 'USD',
      lowPrice: price.min,
      highPrice: price.max,
      offerCount: '4',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.value,
        reviewCount: rating.count,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  },
});

// Helper function to generate FAQ schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  type: 'FAQPage' as const,
  data: {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
});