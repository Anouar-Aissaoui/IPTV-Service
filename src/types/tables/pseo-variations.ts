import { Json } from '../shared';

export interface PSEOVariationsTable {
  Row: {
    id: string;
    slug: string;
    title: string;
    description: string;
    h1: string;
    keywords: string[];
    content: Json;
    page_type: string;
    locale: string | null;
    alternate_urls: Json | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id?: string;
    slug: string;
    title: string;
    description: string;
    h1: string;
    keywords?: string[];
    content?: Json;
    page_type?: string;
    locale?: string | null;
    alternate_urls?: Json | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    slug?: string;
    title?: string;
    description?: string;
    h1?: string;
    keywords?: string[];
    content?: Json;
    page_type?: string;
    locale?: string | null;
    alternate_urls?: Json | null;
    created_at?: string;
    updated_at?: string;
  };
}