import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Avoid creating a client with empty strings at build time (Vercel) – defer until envs exist
  if (typeof console !== "undefined") {
    console.warn("Supabase environment variables are not set. Features depending on Supabase are disabled until configured.");
  }
}

export { supabase };
export default supabase;
