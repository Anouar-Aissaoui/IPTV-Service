export interface SEOUrlParamsTable {
  Row: {
    id: string;
    template_id: string | null;
    param_key: string;
    param_values: string[];
    created_at: string | null;
  };
  Insert: {
    id?: string;
    template_id?: string | null;
    param_key: string;
    param_values: string[];
    created_at?: string | null;
  };
  Update: {
    id?: string;
    template_id?: string | null;
    param_key?: string;
    param_values?: string[];
    created_at?: string | null;
  };
}