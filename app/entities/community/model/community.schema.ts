import { z } from 'zod';
import { limitSchema, pageSchema, periodSchema, querySchema } from '~/common/model';

export const communitySortEnum = z.enum(['newest', 'popular']);

export const communitySchema = z.object({
 sort: communitySortEnum.default('newest'),
 topic: z.string().optional(),
 ...periodSchema.shape,
 ...pageSchema.shape,
 ...querySchema.shape,
 ...limitSchema.shape,
});
export type CommunitySchema = z.infer<typeof communitySchema>;
