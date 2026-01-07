import { z } from "zod";

export const dailySchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const weeklySchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const monthlySchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const yearlySchema = z.object({
  year: z.coerce.number(),
});

export const searchSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().min(1).optional().default(1),
});
