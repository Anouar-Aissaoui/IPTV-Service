import { Json } from './shared';
import { IPTVSEOKeywordsTable } from '@/types/tables/iptv-seo-keywords';
import { PSEOVariationsTable } from '@/types/tables/pseo-variations';
import { SEOKeywordsTable } from '@/types/tables/seo-keywords';
import { SEOMetricsTable } from '@/types/tables/seo-metrics';
import { SEOPerformanceTable } from '@/types/tables/seo-performance';
import { SEOPerformanceMetricsTable } from '@/types/tables/performance-metrics';
import { SEOTemplatesTable } from '@/types/tables/seo-templates';
import { SEOUrlParamsTable } from '@/types/tables/seo-url-params';

export interface Database {
  public: {
    Tables: {
      iptv_seo_keywords: IPTVSEOKeywordsTable;
      pseo_variations: PSEOVariationsTable;
      seo_keywords: SEOKeywordsTable;
      seo_metrics: SEOMetricsTable;
      seo_performance: SEOPerformanceTable;
      seo_performance_metrics: SEOPerformanceMetricsTable;
      seo_templates: SEOTemplatesTable;
      seo_url_params: SEOUrlParamsTable;
    };
    Views: {
      orioledb_index: {
        Row: {
          datoid: unknown | null;
          description: string | null;
          index_relnode: unknown | null;
          index_reloid: unknown | null;
          index_type: string | null;
          name: string | null;
          table_relnode: unknown | null;
          table_reloid: unknown | null;
        };
        Relationships: [];
      };
      orioledb_index_descr: {
        Row: {
          datoid: unknown | null;
          refcnt: unknown | null;
          relnode: unknown | null;
          reloid: unknown | null;
        };
        Relationships: [];
      };
      orioledb_table: {
        Row: {
          datoid: unknown | null;
          description: string | null;
          relnode: unknown | null;
          reloid: unknown | null;
        };
        Relationships: [];
      };
      orioledb_table_descr: {
        Row: {
          datoid: unknown | null;
          refcnt: unknown | null;
          relnode: unknown | null;
          reloid: unknown | null;
        };
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;
