import { DateTime } from "luxon";
import { data, redirect } from "react-router";
import { LINK } from "~/common/config";
import type { Route } from "./+types/leaderboards-redirection-page";

export function loader({ params }: Route.LoaderArgs) {
  const { period } = params;
  let url = "";
  const today = DateTime.now().setZone("Asia/Seoul");

  if (period === "daily") {
    url = `${LINK.PRODUCT_LEADERBOARDS}/daily/${today.year}/${today.month}/${today.day}`;
  } else if (period === "weekly") {
    url = `${LINK.PRODUCT_LEADERBOARDS}/weekly/${today.year}/${today.weekNumber}`;
  } else if (period === "monthly") {
    url = `${LINK.PRODUCT_LEADERBOARDS}/monthly/${today.year}/${today.month}`;
  } else if (period === "yearly") {
    url = `${LINK.PRODUCT_LEADERBOARDS}/yearly/${today.year}`;
  } else {
    return data(null, { status: 400 });
  }

  return redirect(url);
}
