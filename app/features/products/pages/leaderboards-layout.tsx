import { Outlet, data } from "react-router";
import { productsLeaderboardsSchema } from "~/entities/products";
import type { Route } from "./+types/leaderboards-layout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);

  const { success } = productsLeaderboardsSchema.safeParse(
    Object.fromEntries(url.searchParams),
  );

  if (!success) {
    throw data({
      error_code: "invalid_params",
      message: "Invalid parameters",
    });
  }
};

export default function LeaderboardsLayout({ }: Route.ComponentProps) {
  return <Outlet />;
}
