import { DateTime } from "luxon";
import { supabase } from "~/common/api/supabase";
import type { DateType, GetByDateRangeLimitReq } from "~/common/model";

export const getProductsByDateRange = async ({
  from,
  to,
  limit,
}: GetByDateRangeLimitReq) => {
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
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getProductsByDate = async (
  dateType: DateType,
  limit: number = 7,
) => {
  return getProductsByDateRange({
    from: DateTime.now().startOf(dateType),
    to: DateTime.now().endOf(dateType),
    limit,
  });
};
