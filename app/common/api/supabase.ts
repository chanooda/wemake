import { createClient } from "@supabase/supabase-js";
import type { MergeDeep, SetFieldType, SetNonNullable } from "type-fest";
import type { Database as SupabaseDatabase } from "./database.types";
type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_posts_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_posts_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
        ideas_views: {
          Row: 
          SetNonNullable<
            SupabaseDatabase["public"]["Views"]["ideas_views"]["Row"]
          >
        }
      };
    };
  }
>;

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!,
);
