import { z } from 'zod';
import { dateRangeSchema, idSchema, limitSchema, pageSchema, querySchema } from '~/common/model';

export const productsLeaderboardsSchema = z.object({
 ...querySchema.shape,
 ...pageSchema.shape,
});

export const getProductsByDateRangeSchema = z.object({
 ...dateRangeSchema.shape,
 ...limitSchema.shape,
 ...pageSchema.shape,
});

export const getProductsByCategorySchema = z.object({
 ...idSchema.shape,
 ...limitSchema.shape,
 ...pageSchema.shape,
});

export const getProductByQuerySchema = z.object({
 ...querySchema.shape,
 ...limitSchema.shape,
 ...pageSchema.shape,
});

export type GetProductsByDateRangeReq = z.infer<typeof getProductsByDateRangeSchema>;
export type GetProductsByCategoryReq = z.infer<typeof getProductsByCategorySchema>;
export type GetProductByQueryReq = z.infer<typeof getProductByQuerySchema>;
