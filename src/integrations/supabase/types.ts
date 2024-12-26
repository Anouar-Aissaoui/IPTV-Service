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
      buyer_info: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string | null
          selected_plan: string
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone?: string | null
          selected_plan: string
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string | null
          selected_plan?: string
        }
        Relationships: []
      }
      cache: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          key: string
          last_accessed: string
          value: Json
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          key: string
          last_accessed?: string
          value: Json
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          key?: string
          last_accessed?: string
          value?: Json
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          content_type: string
          created_at: string | null
          file_name: string
          file_path: string
          id: string
          size: number
        }
        Insert: {
          content_type: string
          created_at?: string | null
          file_name: string
          file_path: string
          id?: string
          size: number
        }
        Update: {
          content_type?: string
          created_at?: string | null
          file_name?: string
          file_path?: string
          id?: string
          size?: number
        }
        Relationships: []
      }
      performance_metrics: {
        Row: {
          cls: number
          created_at: string
          fcp: number
          id: string
          lcp: number
          load_time: number
          route: string
          ttfb: number
        }
        Insert: {
          cls: number
          created_at?: string
          fcp: number
          id?: string
          lcp: number
          load_time: number
          route: string
          ttfb: number
        }
        Update: {
          cls?: number
          created_at?: string
          fcp?: number
          id?: string
          lcp?: number
          load_time?: number
          route?: string
          ttfb?: number
        }
        Relationships: []
      }
      pseo_variations: {
        Row: {
          alternate_urls: Json | null
          content: Json
          created_at: string
          description: string
          h1: string
          id: string
          indexing_status: string | null
          is_indexed: boolean
          keywords: string[]
          last_indexed: string | null
          locale: string | null
          meta_tags: Json
          page_type: string | null
          priority: number
          schema_org: Json | null
          slug: string
          social_tags: Json | null
          structured_data: Json
          template_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          alternate_urls?: Json | null
          content?: Json
          created_at?: string
          description: string
          h1: string
          id?: string
          indexing_status?: string | null
          is_indexed?: boolean
          keywords?: string[]
          last_indexed?: string | null
          locale?: string | null
          meta_tags?: Json
          page_type?: string | null
          priority?: number
          schema_org?: Json | null
          slug: string
          social_tags?: Json | null
          structured_data?: Json
          template_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          alternate_urls?: Json | null
          content?: Json
          created_at?: string
          description?: string
          h1?: string
          id?: string
          indexing_status?: string | null
          is_indexed?: boolean
          keywords?: string[]
          last_indexed?: string | null
          locale?: string | null
          meta_tags?: Json
          page_type?: string | null
          priority?: number
          schema_org?: Json | null
          slug?: string
          social_tags?: Json | null
          structured_data?: Json
          template_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pseo_variations_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "seo_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_metrics: {
        Row: {
          canonical_url: string
          crawl_status: string | null
          created_at: string
          description: string
          id: string
          last_crawled: string | null
          meta_tags: Json
          route: string
          structured_data: Json
          title: string
          updated_at: string
        }
        Insert: {
          canonical_url: string
          crawl_status?: string | null
          created_at?: string
          description: string
          id?: string
          last_crawled?: string | null
          meta_tags?: Json
          route: string
          structured_data?: Json
          title: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string
          crawl_status?: string | null
          created_at?: string
          description?: string
          id?: string
          last_crawled?: string | null
          meta_tags?: Json
          route?: string
          structured_data?: Json
          title?: string
          updated_at?: string
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
      seo_templates: {
        Row: {
          content_template: Json
          created_at: string | null
          description_template: string
          id: string
          keywords: string[]
          route: string
          title_template: string
          updated_at: string | null
        }
        Insert: {
          content_template: Json
          created_at?: string | null
          description_template: string
          id?: string
          keywords?: string[]
          route: string
          title_template: string
          updated_at?: string | null
        }
        Update: {
          content_template?: Json
          created_at?: string | null
          description_template?: string
          id?: string
          keywords?: string[]
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
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
