import { DateTime } from 'luxon';
import { supabase } from '~/common/api/supabase';
import { getPageRange, getPages } from '~/common/lib';
import type { CommunitySchema } from '../model/community.schema';

const PAGE_SIZE = 2;

export const getTopics = async () => {
 const { data, error } = await supabase.from('topics').select('*');
 if (error) {
  throw new Error(error.message);
 }
 return data;
};

export const getPosts = async ({
 sort,
 topic,
 period,
 page,
 limit = 5,
 query,
}: CommunitySchema) => {
 const posts = supabase.from('community_posts_view').select('*', { count: 'exact' });

 if (period !== 'all') {
  posts.gte('created_at', DateTime.now().startOf(period));
 }

 if (sort === 'newest') {
  posts.order('created_at', { ascending: false });
 } else {
  posts.order('upvotes', { ascending: false });
 }

 if (topic) {
  posts.eq('topic_slug', topic);
 }

 if (query) {
  posts.ilike('title', `%${query}%`);
 }

 posts.limit(limit).range(...getPageRange(page, PAGE_SIZE));

 const { data, error, count } = await posts;

 if (error) {
  throw new Error(error.message);
 }
 return { data, meta: { total: count || 0, pages: getPages(count || 0, PAGE_SIZE) } };
};

export const getPost = async (postId: number) => {
 const { data, error } = await supabase
  .from('community_post_view')
  .select('*')
  .eq('post_id', postId)
  .single();

 console.log(data);

 if (error) {
  throw new Error(error.message);
 }

 return data;
};
