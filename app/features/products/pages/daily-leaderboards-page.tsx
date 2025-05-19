import { DateTime } from "luxon";
import { data, isRouteErrorResponse } from "react-router";
import { z } from "zod";
import { H2, TypographyLarge } from "~/common/components/ui/typography";
import type { Route } from "./+types/daily-leaderboards-page";

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid parameters",
      },
      { status: 400 },
    );
  }

  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 },
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      { status: 400 },
    );
  }

  return new Response();
}

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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown Error</div>;
}
