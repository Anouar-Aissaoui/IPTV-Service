export interface ImagesTable {
  Row: {
    id: string;
    file_path: string;
    file_name: string;
    content_type: string;
    size: number;
    created_at: string | null;
  };
  Insert: {
    id?: string;
    file_path: string;
    file_name: string;
    content_type: string;
    size: number;
    created_at?: string | null;
  };
  Update: {
    id?: string;
    file_path?: string;
    file_name?: string;
    content_type?: string;
    size?: number;
    created_at?: string | null;
  };
}