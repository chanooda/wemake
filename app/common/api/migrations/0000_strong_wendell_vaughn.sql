CREATE TYPE "public"."job_type" AS ENUM('full-time', 'part-time', 'remote');--> statement-breakpoint
CREATE TYPE "public"."locations" AS ENUM('remote', 'in-person', 'hybrid');--> statement-breakpoint
CREATE TYPE "public"."salary_range" AS ENUM('0 - 50000', '50000 - 70000', '70000 - 100000', '100000 - 120000', '120000 - 150000', '150000 - 250000', '250000+');--> statement-breakpoint
CREATE TABLE "jobs" (
	"job_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "jobs_job_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"position" text NOT NULL,
	"overview" text NOT NULL,
	"responsibilities" text NOT NULL,
	"qualifications" text NOT NULL,
	"benefits" text NOT NULL,
	"skills" text NOT NULL,
	"company_name" text NOT NULL,
	"company_logo_url" text NOT NULL,
	"company_hq" text NOT NULL,
	"company_location" text NOT NULL,
	"apply_url" text NOT NULL,
	"job_type" "job_type" NOT NULL,
	"location" "locations" NOT NULL,
	"salary_range" "salary_range" NOT NULL
);
