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
  meta_tags: Record<string, any>;
  social_tags?: Record<string, any>;
  schema_org?: Record<string, any>;
  page_type?: string;
  locale?: string;
  alternate_urls?: Record<string, string>;
  target_location?: string;
  target_service_type?: string;
  target_features?: string[];
  target_audience?: string[];
}

export interface SEOPageData {
  title: string;
  description: string;
  keywords: string[];
  imageUrl?: string;
  locale?: string;
  pageType?: string;
  alternateUrls?: Record<string, string>;
}