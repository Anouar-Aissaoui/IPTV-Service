export interface KeywordPerformanceTable {
  Row: {
    id: string;
    keyword: string;
    page_path: string;
    position: number | null;
    impressions: number | null;
    last_updated: string | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id?: string;
    keyword: string;
    page_path: string;
    position?: number | null;
    impressions?: number | null;
    last_updated?: string | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    keyword?: string;
    page_path?: string;
    position?: number | null;
    impressions?: number | null;
    last_updated?: string | null;
    created_at?: string;
    updated_at?: string;
  };
}