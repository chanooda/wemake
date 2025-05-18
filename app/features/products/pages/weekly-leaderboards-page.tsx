import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function WeeklyLeaderboardsPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Weekly Leaderboards</H2>
      <TypographyLarge>
        View the top products for a specific week.
      </TypographyLarge>
    </div>
  );
}
