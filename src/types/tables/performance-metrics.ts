export interface PerformanceMetricsTable {
  Row: {
    id: string;
    route: string;
    load_time: number;
    ttfb: number;
    fcp: number;
    lcp: number;
    cls: number;
    created_at: string;
  };
  Insert: {
    id?: string;
    route: string;
    load_time: number;
    ttfb: number;
    fcp: number;
    lcp: number;
    cls: number;
    created_at?: string;
  };
  Update: {
    id?: string;
    route?: string;
    load_time?: number;
    ttfb?: number;
    fcp?: number;
    lcp?: number;
    cls?: number;
    created_at?: string;
  };
}