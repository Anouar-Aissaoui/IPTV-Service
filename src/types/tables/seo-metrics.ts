export interface SEOMetricsTable {
  Row: {
    id: string;
    route: string;
    title: string;
    description: string;
    canonical_url: string;
    meta_tags: Json;
    structured_data: Json;
    crawl_status: string | null;
    last_crawled: string | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id?: string;
    route: string;
    title: string;
    description: string;
    canonical_url: string;
    meta_tags?: Json;
    structured_data?: Json;
    crawl_status?: string | null;
    last_crawled?: string | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    route?: string;
    title?: string;
    description?: string;
    canonical_url?: string;
    meta_tags?: Json;
    structured_data?: Json;
    crawl_status?: string | null;
    last_crawled?: string | null;
    created_at?: string;
    updated_at?: string;
  };
}