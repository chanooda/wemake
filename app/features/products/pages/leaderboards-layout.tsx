import { Outlet, data } from "react-router";
import { searchSchema } from "~/common/model";
import type { Route } from "./+types/leaderboards-layout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);

  const { success } = searchSchema.safeParse(
    Object.fromEntries(url.searchParams),
  );

  if (!success) {
    throw data({
      error_code: "invalid_params",
      message: "Invalid parameters",
    });
  }
};

export default function LeaderboardsLayout({}: Route.ComponentProps) {
  return <Outlet />;
}
