import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import { InfraError } from "../../error";
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
console.log(supabaseUrl);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new InfraError("Supabaseの環境変数が見つかりません");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);