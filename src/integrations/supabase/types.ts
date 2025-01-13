export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          author: string | null
          category: string | null
          content: Json
          created_at: string | null
          description: string
          id: string
          is_featured: boolean | null
          keywords: string[] | null
          meta_tags: Json | null
          published_at: string | null
          reading_time: number | null
          related_articles: string[] | null
          slug: string
          status: string | null
          structured_data: Json | null
          tags: string[] | null
          title: string
          updated_at: string | null
          views_count: number | null
        }
        Insert: {
          author?: string | null
          category?: string | null
          content: Json
          created_at?: string | null
          description: string
          id?: string
          is_featured?: boolean | null
          keywords?: string[] | null
          meta_tags?: Json | null
          published_at?: string | null
          reading_time?: number | null
          related_articles?: string[] | null
          slug: string
          status?: string | null
          structured_data?: Json | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          views_count?: number | null
        }
        Update: {
          author?: string | null
          category?: string | null
          content?: Json
          created_at?: string | null
          description?: string
          id?: string
          is_featured?: boolean | null
          keywords?: string[] | null
          meta_tags?: Json | null
          published_at?: string | null
          reading_time?: number | null
          related_articles?: string[] | null
          slug?: string
          status?: string | null
          structured_data?: Json | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          views_count?: number | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
          updated_at?: string | null
        }
        Relationships: []
      }
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
      iptv_seo_keywords: {
        Row: {
          created_at: string
          id: string
          keyword: string
          relevance_score: number | null
          search_volume: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          keyword: string
          relevance_score?: number | null
          search_volume?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          keyword?: string
          relevance_score?: number | null
          search_volume?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      keyword_performance: {
        Row: {
          created_at: string | null
          id: string
          impressions: number | null
          keyword: string
          last_updated: string | null
          page_path: string
          position: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          impressions?: number | null
          keyword: string
          last_updated?: string | null
          page_path: string
          position?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          impressions?: number | null
          keyword?: string
          last_updated?: string | null
          page_path?: string
          position?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      legal_content: {
        Row: {
          content: Json
          created_at: string | null
          id: string
          last_updated: string | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          content?: Json
          created_at?: string | null
          id?: string
          last_updated?: string | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          content?: Json
          created_at?: string | null
          id?: string
          last_updated?: string | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      page_content: {
        Row: {
          channels_content: Json
          created_at: string | null
          faq_content: Json
          features_content: Json
          hero_content: Json
          id: string
          movies_content: Json
          page_path: string
          pricing_content: Json
          sports_content: Json
          updated_at: string | null
        }
        Insert: {
          channels_content?: Json
          created_at?: string | null
          faq_content?: Json
          features_content?: Json
          hero_content?: Json
          id?: string
          movies_content?: Json
          page_path: string
          pricing_content?: Json
          sports_content?: Json
          updated_at?: string | null
        }
        Update: {
          channels_content?: Json
          created_at?: string | null
          faq_content?: Json
          features_content?: Json
          hero_content?: Json
          id?: string
          movies_content?: Json
          page_path?: string
          pricing_content?: Json
          sports_content?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      pseo_variations: {
        Row: {
          alternate_urls: Json | null
          content: Json | null
          created_at: string
          description: string
          h1: string
          id: string
          keywords: string[] | null
          locale: string | null
          page_type: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          alternate_urls?: Json | null
          content?: Json | null
          created_at?: string
          description: string
          h1: string
          id?: string
          keywords?: string[] | null
          locale?: string | null
          page_type?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          alternate_urls?: Json | null
          content?: Json | null
          created_at?: string
          description?: string
          h1?: string
          id?: string
          keywords?: string[] | null
          locale?: string | null
          page_type?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_keywords: {
        Row: {
          created_at: string | null
          difficulty_score: number | null
          id: string
          keyword: string
          page_path: string
          position: number | null
          search_volume: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          difficulty_score?: number | null
          id?: string
          keyword: string
          page_path: string
          position?: number | null
          search_volume?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          difficulty_score?: number | null
          id?: string
          keyword?: string
          page_path?: string
          position?: number | null
          search_volume?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_metrics: {
        Row: {
          canonical_url: string
          crawl_status: string | null
          created_at: string | null
          description: string
          id: string
          last_crawled: string | null
          meta_tags: Json | null
          route: string
          structured_data: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          canonical_url: string
          crawl_status?: string | null
          created_at?: string | null
          description: string
          id?: string
          last_crawled?: string | null
          meta_tags?: Json | null
          route: string
          structured_data?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          canonical_url?: string
          crawl_status?: string | null
          created_at?: string | null
          description?: string
          id?: string
          last_crawled?: string | null
          meta_tags?: Json | null
          route?: string
          structured_data?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_performance: {
        Row: {
          avg_time_on_page: number | null
          bounce_rate: number | null
          created_at: string | null
          id: string
          updated_at: string | null
          url: string
          visits: number | null
        }
        Insert: {
          avg_time_on_page?: number | null
          bounce_rate?: number | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          url: string
          visits?: number | null
        }
        Update: {
          avg_time_on_page?: number | null
          bounce_rate?: number | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          url?: string
          visits?: number | null
        }
        Relationships: []
      }
      seo_performance_metrics: {
        Row: {
          canonical_url: string | null
          core_web_vitals: Json | null
          created_at: string | null
          id: string
          last_crawled: string | null
          meta_description: string
          meta_robots: string | null
          open_graph: Json | null
          page_path: string
          page_speed_score: number | null
          page_title: string
          structured_data: Json | null
          twitter_card: Json | null
          updated_at: string | null
        }
        Insert: {
          canonical_url?: string | null
          core_web_vitals?: Json | null
          created_at?: string | null
          id?: string
          last_crawled?: string | null
          meta_description: string
          meta_robots?: string | null
          open_graph?: Json | null
          page_path: string
          page_speed_score?: number | null
          page_title: string
          structured_data?: Json | null
          twitter_card?: Json | null
          updated_at?: string | null
        }
        Update: {
          canonical_url?: string | null
          core_web_vitals?: Json | null
          created_at?: string | null
          id?: string
          last_crawled?: string | null
          meta_description?: string
          meta_robots?: string | null
          open_graph?: Json | null
          page_path?: string
          page_speed_score?: number | null
          page_title?: string
          structured_data?: Json | null
          twitter_card?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_performance_tracking: {
        Row: {
          avg_time_on_page: number | null
          backlinks_count: number | null
          bounce_rate: number | null
          canonical_url: string | null
          core_web_vitals: Json | null
          created_at: string | null
          id: string
          keyword_rankings: Json | null
          last_crawled: string | null
          meta_description: string
          meta_robots: string | null
          open_graph: Json | null
          organic_traffic: number | null
          page_path: string
          page_speed_score: number | null
          page_title: string
          structured_data: Json | null
          twitter_card: Json | null
          updated_at: string | null
        }
        Insert: {
          avg_time_on_page?: number | null
          backlinks_count?: number | null
          bounce_rate?: number | null
          canonical_url?: string | null
          core_web_vitals?: Json | null
          created_at?: string | null
          id?: string
          keyword_rankings?: Json | null
          last_crawled?: string | null
          meta_description: string
          meta_robots?: string | null
          open_graph?: Json | null
          organic_traffic?: number | null
          page_path: string
          page_speed_score?: number | null
          page_title: string
          structured_data?: Json | null
          twitter_card?: Json | null
          updated_at?: string | null
        }
        Update: {
          avg_time_on_page?: number | null
          backlinks_count?: number | null
          bounce_rate?: number | null
          canonical_url?: string | null
          core_web_vitals?: Json | null
          created_at?: string | null
          id?: string
          keyword_rankings?: Json | null
          last_crawled?: string | null
          meta_description?: string
          meta_robots?: string | null
          open_graph?: Json | null
          organic_traffic?: number | null
          page_path?: string
          page_speed_score?: number | null
          page_title?: string
          structured_data?: Json | null
          twitter_card?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_templates: {
        Row: {
          content_template: Json | null
          created_at: string | null
          description_template: string
          id: string
          keywords: string[] | null
          route: string
          title_template: string
          updated_at: string | null
        }
        Insert: {
          content_template?: Json | null
          created_at?: string | null
          description_template: string
          id?: string
          keywords?: string[] | null
          route: string
          title_template: string
          updated_at?: string | null
        }
        Update: {
          content_template?: Json | null
          created_at?: string | null
          description_template?: string
          id?: string
          keywords?: string[] | null
          route?: string
          title_template?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      seo_url_params: {
        Row: {
          created_at: string | null
          id: string
          param_key: string
          param_values: string[]
          template_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          param_key: string
          param_values: string[]
          template_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          param_key?: string
          param_values?: string[]
          template_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seo_url_params_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "seo_templates"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      orioledb_index: {
        Row: {
          datoid: unknown | null
          description: string | null
          index_relnode: unknown | null
          index_reloid: unknown | null
          index_type: string | null
          name: string | null
          table_relnode: unknown | null
          table_reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_index_descr: {
        Row: {
          datoid: unknown | null
          refcnt: unknown | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_table: {
        Row: {
          datoid: unknown | null
          description: string | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
      orioledb_table_descr: {
        Row: {
          datoid: unknown | null
          refcnt: unknown | null
          relnode: unknown | null
          reloid: unknown | null
        }
        Relationships: []
      }
    }
    Functions: {
      orioledb_commit_hash: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      orioledb_compression_max_level: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      orioledb_evict_pages: {
        Args: {
          relid: unknown
          maxlevel: number
        }
        Returns: undefined
      }
      orioledb_get_evicted_trees: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_get_index_descrs: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_get_table_descrs: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_has_retained_undo: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_idx_structure: {
        Args: {
          relid: unknown
          tree_name: string
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_index_description: {
        Args: {
          datoid: unknown
          relid: unknown
          relnode: unknown
          index_type: string
        }
        Returns: Record<string, unknown>
      }
      orioledb_index_oids: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_index_rows: {
        Args: {
          relid: unknown
        }
        Returns: Record<string, unknown>
      }
      orioledb_page_stats: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_parallel_debug_start: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      orioledb_parallel_debug_stop: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      orioledb_recovery_synchronized: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_relation_size: {
        Args: {
          relid: unknown
        }
        Returns: number
      }
      orioledb_sys_tree_check: {
        Args: {
          num: number
          force_map_check?: boolean
        }
        Returns: boolean
      }
      orioledb_sys_tree_rows: {
        Args: {
          num: number
        }
        Returns: Json[]
      }
      orioledb_sys_tree_structure: {
        Args: {
          num: number
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_table_description:
        | {
            Args: {
              datoid: unknown
              relid: unknown
              relnode: unknown
            }
            Returns: string
          }
        | {
            Args: {
              relid: unknown
            }
            Returns: string
          }
      orioledb_table_oids: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      orioledb_table_pages: {
        Args: {
          relid: unknown
        }
        Returns: Record<string, unknown>[]
      }
      orioledb_tableam_handler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      orioledb_tbl_are_indices_equal: {
        Args: {
          idx_oid1: unknown
          idx_oid2: unknown
        }
        Returns: boolean
      }
      orioledb_tbl_bin_structure: {
        Args: {
          relid: unknown
          print_bytes?: boolean
          depth?: number
        }
        Returns: string
      }
      orioledb_tbl_check: {
        Args: {
          relid: unknown
          force_map_check?: boolean
        }
        Returns: boolean
      }
      orioledb_tbl_compression_check: {
        Args: {
          level: number
          relid: unknown
          ranges?: number[]
        }
        Returns: string
      }
      orioledb_tbl_indices: {
        Args: {
          relid: unknown
        }
        Returns: string
      }
      orioledb_tbl_structure: {
        Args: {
          relid: unknown
          options?: string
          depth?: number
        }
        Returns: string
      }
      orioledb_ucm_check: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      orioledb_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      orioledb_write_pages: {
        Args: {
          relid: unknown
        }
        Returns: undefined
      }
      pg_stopevent_reset: {
        Args: {
          eventname: string
        }
        Returns: boolean
      }
      pg_stopevent_set: {
        Args: {
          eventname: string
          condition: unknown
        }
        Returns: undefined
      }
      pg_stopevents: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      s3_get: {
        Args: {
          objectname: string
        }
        Returns: string
      }
      s3_put: {
        Args: {
          objectname: string
          filename: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
