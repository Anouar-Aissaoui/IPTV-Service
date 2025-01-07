export type SchemaType = 'WebPage' | 'Product' | 'FAQPage' | 'Article' | 'Organization' | 'BreadcrumbList' | 'Service' | 'HowTo';

export interface BaseSchema {
  '@context': string;
  '@type': SchemaType;
  '@id'?: string;
  url: string;
}

export interface WebPageSchema extends BaseSchema {
  '@type': 'WebPage';
  name: string;
  description: string;
  isPartOf?: {
    '@type': 'WebSite';
    name: string;
    url: string;
  };
}

export interface ProductSchema extends BaseSchema {
  '@type': 'Product';
  name: string;
  description: string;
  offers?: {
    '@type': 'AggregateOffer';
    priceCurrency: string;
    lowPrice: string;
    highPrice: string;
    offerCount: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: string;
  };
}

export interface FAQSchema extends BaseSchema {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  datePublished: string;
  dateModified: string;
}

export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization';
  name: string;
  logo?: {
    '@type': 'ImageObject';
    url: string;
  };
  sameAs?: string[];
}

export interface BreadcrumbSchema extends BaseSchema {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  serviceType: string;
  provider: {
    '@id': string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
}
