import { z } from "zod";

export const dailyParamSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const weeklyParamSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const monthlyParamSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const yearlyParamSchema = z.object({
  year: z.coerce.number(),
});
