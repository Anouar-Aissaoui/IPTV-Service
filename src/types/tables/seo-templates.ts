export interface SEOTemplatesTable {
  Row: {
    id: string;
    route: string;
    title_template: string;
    description_template: string;
    keywords: string[];
    content_template: Json;
    created_at: string | null;
    updated_at: string | null;
  };
  Insert: {
    id?: string;
    route: string;
    title_template: string;
    description_template: string;
    keywords?: string[];
    content_template: Json;
    created_at?: string | null;
    updated_at?: string | null;
  };
  Update: {
    id?: string;
    route?: string;
    title_template?: string;
    description_template?: string;
    keywords?: string[];
    content_template?: Json;
    created_at?: string | null;
    updated_at?: string | null;
  };
}