import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function DailyLeaderboardsPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Daily Leaderboards</H2>
      <TypographyLarge>
        View the top products for a specific day.
      </TypographyLarge>
    </div>
  );
}
