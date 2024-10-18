import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types";

export const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseKey;

  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  return supabase;
};
