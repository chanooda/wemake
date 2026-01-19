import type { DateTime } from "luxon";
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

export const querySchema = z.object({
  query: z.string().optional().default(""),
});

export const pageSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const limitSchema = z.object({
  limit: z.coerce.number().min(1).optional().default(10),
});

export const dateRangeSchema = z.object({
  from: z.custom<DateTime>(),
  to: z.custom<DateTime>(),
});

export const dateTypeEnum = z.enum(["day", "week", "month", "year"]);

export const periodEnum = z.enum(["all", "day", "week", "month", "year"]);

export const periodSchema = z.object({
  period: periodEnum.default("all"),
});

export const dateTypeSchema = z.object({
  dateType: dateTypeEnum.default("day"),
})

export type DateType = z.infer<typeof dateTypeEnum>;
export type PeriodType = z.infer<typeof periodEnum>;
export type DateRange = z.infer<typeof dateRangeSchema>;