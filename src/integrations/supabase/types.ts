import { KeywordPerformanceTable } from '@/types/tables/keyword-performance';
import { PSEOVariationsTable } from '@/types/tables/pseo-variations';

export interface Database {
  public: {
    Tables: {
      error_404_logs: {
        Row: {
          hits: number | null
          id: string
          ip_address: string | null
          redirect_url: string | null
          referrer: string | null
          resolved: boolean | null
          timestamp: string | null
          url: string
          user_agent: string | null
        }
        Insert: {
          hits?: number | null
          id?: string
          ip_address?: string | null
          redirect_url?: string | null
          referrer?: string | null
          resolved?: boolean | null
          timestamp?: string | null
          url: string
          user_agent?: string | null
        }
        Update: {
          hits?: number | null
          id?: string
          ip_address?: string | null
          redirect_url?: string | null
          referrer?: string | null
          resolved?: boolean | null
          timestamp?: string | null
          url?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      keyword_performance: KeywordPerformanceTable
      pseo_variations: PSEOVariationsTable
    }
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
    }
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
