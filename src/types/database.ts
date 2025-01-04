import { Json } from './shared';
import { PSEOVariationsTable } from './tables/pseo-variations';

export interface Database {
  public: {
    Tables: {
      pseo_variations: PSEOVariationsTable;
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
