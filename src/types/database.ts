import { Json } from './shared';
import { BuyerInfoTable } from './tables/buyer-info';
import { CacheTable } from './tables/cache';
import { ContactMessagesTable } from './tables/contact-messages';
import { ImagesTable } from './tables/images';
import { PerformanceMetricsTable } from './tables/performance-metrics';
import { PSEOVariationsTable } from './tables/pseo-variations';
import { SEOBulkPagesTable } from './tables/seo-bulk-pages';
import { SEOMetricsTable } from './tables/seo-metrics';
import { SEOPerformanceTable } from './tables/seo-performance';
import { SEOTemplatesTable } from './tables/seo-templates';
import { SEOUrlParamsTable } from './tables/seo-url-params';

export interface Database {
  public: {
    Tables: {
      buyer_info: BuyerInfoTable;
      cache: CacheTable;
      contact_messages: ContactMessagesTable;
      images: ImagesTable;
      performance_metrics: PerformanceMetricsTable;
      pseo_variations: PSEOVariationsTable;
      seo_bulk_pages: SEOBulkPagesTable;
      seo_metrics: SEOMetricsTable;
      seo_performance: SEOPerformanceTable;
      seo_templates: SEOTemplatesTable;
      seo_url_params: SEOUrlParamsTable;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}