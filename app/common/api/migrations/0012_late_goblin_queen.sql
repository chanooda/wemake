ALTER TABLE "teams" RENAME COLUMN "team_leader" TO "team_leader_id";--> statement-breakpoint
ALTER TABLE "teams" DROP CONSTRAINT "teams_team_leader_profiles_profile_id_fk";
--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_team_leader_id_profiles_profile_id_fk" FOREIGN KEY ("team_leader_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;