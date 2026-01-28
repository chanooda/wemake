import { DateTime } from 'luxon';
import { supabase } from '~/common/api/supabase';
import { getPageRange, getPages } from '~/common/lib/api-helper';
import type { DateRange, DateType, Id } from '~/common/model';
import type {
 GetProductByQueryReq,
 GetProductsByCategoryReq,
 GetProductsByDateRangeReq,
} from '../model/products-schema';

const PAGE_SIZE = 1;

export const productListSelect = `
  product_id,
  name,
  tagline,
  views: status->views,
  reviews: status->reviews,
  upvotes: status->upvotes,
  created_at,
  updated_at
`;

export const getProductsByDateRange = async ({
 from,
 to,
 limit,
 page = 1,
}: GetProductsByDateRangeReq) => {
 const [start, end] = getPageRange(page, limit);

 const { data, error } = await supabase
  .from('products')
  .select(productListSelect)
  .order('status->reviews', { ascending: false })
  .gte('created_at', from.toISO())
  .lte('created_at', to.toISO())
  .limit(limit)
  .range(start, end);

 if (error) {
  throw new Error(error.message);
 }

 return data;
};

export const getProductsAllCountByDateRange = async ({ from, to }: DateRange) => {
 const { count, error } = await supabase
  .from('products')
  .select(`product_id`, { count: 'exact', head: true })
  .gte('created_at', from.toISO())
  .lte('created_at', to.toISO());

 if (error) {
  throw new Error(error.message);
 }
 if (!count) return 0;

 return count;
};

export const getProductsPagesByDateRange = async ({ from, to }: DateRange) => {
 const count = await getProductsAllCountByDateRange({ from, to });
 const pages = Math.ceil(count / PAGE_SIZE) || 1;

 return pages;
};

export const getProductsByDate = async (dateType: DateType, limit = 7, page = 1) => {
 return getProductsByDateRange({
  from: DateTime.now().startOf(dateType),
  to: DateTime.now().endOf(dateType),
  limit,
  page,
 });
};

export const getCategories = async () => {
 const { data, error } = await supabase.from('categories').select(`
      category_id,
      name,
      description
    `);
 if (error) {
  throw new Error(error.message);
 }
 return data;
};

export const getCategory = async ({ id }: Id) => {
 const query = supabase
  .from('categories')
  .select(
   `
       category_id,
       name,
       description
    `,
  )
  .eq('category_id', Number(id))
  .single();

 const { data, error } = await query;

 if (error) {
  throw new Error(error.message);
 }
 return data;
};

export const getProductsByCategory = async ({ id, limit, page = 1 }: GetProductsByCategoryReq) => {
 const [start, end] = getPageRange(page, limit);
 const query = supabase
  .from('products')
  .select(productListSelect, { count: 'exact' })
  .eq('category_id', Number(id))
  .limit(limit)
  .range(start, end);

 const { data, error, count } = await query;
 if (error) {
  throw new Error(error.message);
 }

 return { data, meta: { count: count || 0, pages: getPages(count || 0, PAGE_SIZE) } };
};

export const getProductByQuery = async ({ query, limit, page = 1 }: GetProductByQueryReq) => {
 const [start, end] = getPageRange(page, limit);
 const productsByQuery = supabase
  .from('products')
  .select(productListSelect, { count: 'exact' })
  .or(`name.ilike.%${query}%, tagline.ilike.%${query}%`)
  .limit(limit)
  .range(start, end);

 const { data, error, count } = await productsByQuery;

 if (error) {
  throw new Error(error.message);
 }

 return { data, meta: { count: count || 0, pages: getPages(count || 0, PAGE_SIZE) } };
};
