import { DateTime } from "luxon";
import { supabase } from "~/common/api/supabase";
import type {
  DateType,
  GetByDateRangeReq,
  GetDefaultReq,
} from "~/common/model";

const PAGE_SIZE = 2;

export const getProductsByDateRange = async ({
  from,
  to,
  limit,
  page = 1,
}: GetDefaultReq) => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
        product_id,
        name,
        description,
        views: status->views,
        reviews: status->reviews,
        upvotes: status->upvotes,
        created_at,
        updated_at
    `,
    )
    .order("status->reviews", { ascending: false })
    .gte("created_at", from.toISO())
    .lte("created_at", to.toISO())
    .limit(limit)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getProductsAllCountByDateRange = async ({
  from,
  to,
}: GetByDateRangeReq) => {
  const { count, error } = await supabase
    .from("products")
    .select(`product_id`, { count: "exact", head: true })
    .gte("created_at", from.toISO())
    .lte("created_at", to.toISO());

  if (error) {
    throw new Error(error.message);
  }
  if (!count) return 0;

  return count;
};

export const getProductsPagesByDateRange = async ({
  from,
  to,
}: GetByDateRangeReq) => {
  const count = await getProductsAllCountByDateRange({ from, to });
  const pages = Math.ceil(count / PAGE_SIZE) || 1;

  return pages;
};

export const getProductsByDate = async (
  dateType: DateType,
  limit = 7,
  page = 1,
) => {
  return getProductsByDateRange({
    from: DateTime.now().startOf(dateType),
    to: DateTime.now().endOf(dateType),
    limit,
    page,
  });
};
