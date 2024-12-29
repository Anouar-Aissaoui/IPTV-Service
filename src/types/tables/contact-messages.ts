export interface ContactMessagesTable {
  Row: {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status: string | null;
    created_at: string;
  };
  Insert: {
    id?: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    status?: string | null;
    created_at?: string;
  };
  Update: {
    id?: string;
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    status?: string | null;
    created_at?: string;
  };
}