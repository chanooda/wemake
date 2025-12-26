import { bigint, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import {
  JOBS_FILTER_LOCATION,
  JOBS_FILTER_TYPE,
  JOBS_SALARY_RANGE,
} from "../config/jobs-filter";

export const job_type = pgEnum(
  "job_type",
  JOBS_FILTER_TYPE.map((type) => type.value) as [string, ...string[]],
);

export const locations = pgEnum(
  "locations",
  JOBS_FILTER_LOCATION.map((location) => location.value) as [
    string,
    ...string[],
  ],
);

export const salary_range = pgEnum(
  "salary_range",
  JOBS_SALARY_RANGE.map((range) => range.value) as [string, ...string[]],
);

export const jobs = pgTable("jobs", {
  job_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  position: text().notNull(),
  overview: text().notNull(),
  responsibilities: text().notNull(),
  qualifications: text().notNull(),
  benefits: text().notNull(),
  skills: text().notNull(),
  company_name: text().notNull(),
  company_logo_url: text().notNull(),
  company_hq: text().notNull(),
  company_location: text().notNull(),
  apply_url: text().notNull(),
  job_type: job_type().notNull(),
  location: locations().notNull(),
  salary_range: salary_range().notNull(),
});
