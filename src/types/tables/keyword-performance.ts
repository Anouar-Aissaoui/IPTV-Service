export interface KeywordPerformanceTable {
  Row: {
    id: string;
    keyword: string;
    page_path: string;
    position: number | null;
    impressions: number | null;
    last_updated: string | null;
  };
  Insert: {
    id?: string;
    keyword: string;
    page_path: string;
    position?: number | null;
    impressions?: number | null;
    last_updated?: string | null;
  };
  Update: {
    id?: string;
    keyword?: string;
    page_path?: string;
    position?: number | null;
    impressions?: number | null;
    last_updated?: string | null;
  };
}