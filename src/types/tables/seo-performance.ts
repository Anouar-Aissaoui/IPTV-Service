export interface SEOPerformanceTable {
  Row: {
    id: string;
    url: string;
    visits: number | null;
    bounce_rate: number | null;
    avg_time_on_page: number | null;
    created_at: string | null;
    updated_at: string | null;
  };
  Insert: {
    id?: string;
    url: string;
    visits?: number | null;
    bounce_rate?: number | null;
    avg_time_on_page?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
  };
  Update: {
    id?: string;
    url?: string;
    visits?: number | null;
    bounce_rate?: number | null;
    avg_time_on_page?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
  };
}