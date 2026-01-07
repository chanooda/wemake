import { supabase } from "~/common/api/supabase";

export const getTopics = async () => {
  const { data, error } = await supabase.from("topics").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("community_posts_view")
    .select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
