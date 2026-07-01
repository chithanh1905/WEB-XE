import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface KhachHangTiemNang {
  ho_ten: string;
  so_dien_thoai: string;
  dia_chi?: string;
  xe_quan_tam?: string;
  ghi_chu?: string;
}
