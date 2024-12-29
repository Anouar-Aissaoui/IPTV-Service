export interface CacheTable {
  Row: {
    id: string;
    key: string;
    value: Json;
    created_at: string;
    expires_at: string;
    last_accessed: string;
  };
  Insert: {
    id?: string;
    key: string;
    value: Json;
    created_at?: string;
    expires_at: string;
    last_accessed?: string;
  };
  Update: {
    id?: string;
    key?: string;
    value?: Json;
    created_at?: string;
    expires_at?: string;
    last_accessed?: string;
  };
}