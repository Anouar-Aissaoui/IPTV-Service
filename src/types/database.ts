export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

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