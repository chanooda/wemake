import { z } from "zod";
import { limitSchema } from "~/common/model";

export const ideasSchema = z.object({
    ...limitSchema.shape
});

export type Ideas = z.infer<typeof ideasSchema>