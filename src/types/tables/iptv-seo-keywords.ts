export interface IPTVSEOKeywordsTable {
  Row: {
    id: string;
    keyword: string;
    relevance_score: number | null;
    search_volume: number | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id?: string;
    keyword: string;
    relevance_score?: number | null;
    search_volume?: number | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    keyword?: string;
    relevance_score?: number | null;
    search_volume?: number | null;
    created_at?: string;
    updated_at?: string;
  };
  Relationships: [];
}