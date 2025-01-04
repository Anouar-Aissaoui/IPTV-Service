export interface SEOMetrics {
  id: string;
  route: string;
  title: string;
  description: string;
  canonical_url: string;
  meta_tags: Record<string, any>;
  structured_data: Record<string, any>;
  crawl_status: string | null;
  last_crawled: string | null;
  created_at: string;
  updated_at: string;
}

export interface SEOPerformanceMetric {
  url: string;
  visits: number;
  bounce_rate?: number;
  avg_time_on_page?: number;
}