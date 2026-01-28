import { supabase } from '~/common/api';
import { type Id } from '~/common/model';

import type { Ideas } from '..';

export const getIdeas = async ({ limit }: Ideas) => {
 const { data, error } = await supabase.from('ideas_views').select('*').limit(limit);

 if (error) {
  throw new Error(error.message);
 }

 return data;
};

export const getIdea = async ({ id }: Id) => {
 const { data, error } = await supabase
  .from('ideas_views')
  .select('*')
  .eq('gpt_idea_id', Number(id))
  .single();

 if (error) {
  throw new Error(error.message);
 }

 return data;
};
