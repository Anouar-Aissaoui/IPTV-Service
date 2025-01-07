export interface PSEOContent {
  main_content?: string;
  features?: string[];
}

export interface PSEOVariation {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  content: PSEOContent;
  social_tags?: Record<string, any>;
  schema_org?: Record<string, any>;
  page_type?: string;
  locale?: string;
  alternate_urls?: Record<string, string>;
}

export interface SEOPageData {
  title: string;
  description: string;
  keywords: string[];
  imageUrl?: string;
  locale?: string;
  pageType?: string;
  type?: string;
  alternateUrls?: Record<string, string>;
}