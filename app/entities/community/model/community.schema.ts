import { z } from "zod";
import { periodSchema } from "~/common/model";


export const communitySortSchema = z.enum(["newest", "popular"]);

export const communitySchema = z.object({
    sort: communitySortSchema.default("newest"),
    topic: z.string().optional(),
    ...periodSchema.shape,
})