import { z } from "zod";
import { dateRangeSchema, limitSchema, pageSchema, querySchema } from "~/common/model";

export const productsLeaderboardsSchema = z.object({
    ...querySchema.shape,
    ...pageSchema.shape,
})

export const getProductsByDateRangeSchema = z.object({
    ...dateRangeSchema.shape,
    ...limitSchema.shape,
    ...pageSchema.shape,
})

export type GetProductsByDateRangeReq = z.infer<typeof getProductsByDateRangeSchema>;