ALTER TABLE "jobs" ALTER COLUMN "salary_range" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."salary_range";--> statement-breakpoint
CREATE TYPE "public"."salary_range" AS ENUM('0-50000', '50000-70000', '70000-100000', '100000-120000', '120000-150000', '150000-250000', '250000+');--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "salary_range" SET DATA TYPE "public"."salary_range" USING "salary_range"::"public"."salary_range";