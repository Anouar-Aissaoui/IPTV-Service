export interface BuyerInfoTable {
  Row: {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    selected_plan: string;
    message: string | null;
    created_at: string | null;
  };
  Insert: {
    id?: string;
    full_name: string;
    email: string;
    phone?: string | null;
    selected_plan: string;
    message?: string | null;
    created_at?: string | null;
  };
  Update: {
    id?: string;
    full_name?: string;
    email?: string;
    phone?: string | null;
    selected_plan?: string;
    message?: string | null;
    created_at?: string | null;
  };
}