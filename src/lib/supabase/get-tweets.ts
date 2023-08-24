import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../supasbase.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
export const revalidate = 0;
export async function getTweet() {
  if (supabaseUrl && supabaseSecretKey) {
    const supabaseServer = new SupabaseClient(supabaseUrl, supabaseSecretKey);
    return await supabaseServer
      .from("tweets")
      .select(`*, profiles(full_name, username)`)
      .returns<
        (Database["public"]["Tables"]["tweets"]["Row"] & {
          profiles: Pick<
            Database["public"]["Tables"]["profiles"]["Row"],
            "full_name" | "username"
          >;
        })[]
      >();
  }
}
