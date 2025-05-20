import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { LINK } from "~/common/config";
import { NewProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/monthly-leaderboards-page";

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
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

  const date = DateTime.fromObject(parsedData);
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 },
    );
  }

  const today = DateTime.now().startOf("month");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      { status: 400 },
    );
  }

  return { ...parsedData };
}

export default function DailyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  console.log(loaderData);
  const date = DateTime.fromObject(loaderData);
  const prevMonth = date.minus({ month: 1 });
  const nextMonth = date.plus({ month: 1 });
  const isToday = date.hasSame(DateTime.now(), "month");
  const prevUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("monthly") +
    `/${prevMonth.weekYear}/${prevMonth.month}`;
  const nextUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("monthly") +
    `/${nextMonth.weekYear}/${nextMonth.month}`;

  return (
    <div>
      <PageTitle
        title={`The best products of\n${date.toLocaleString({
          year: "numeric",
          month: "short",
        })}`}
      />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
        <div className="flex w-full items-center justify-center gap-4">
          <Button variant="ghost" asChild>
            <Link to={prevUrl}>
              &larr; {prevMonth.toLocaleString(DateTime.DATE_SHORT)}
            </Link>
          </Button>
          {!isToday && (
            <Button variant="ghost" asChild>
              <Link to={nextUrl}>
                {nextMonth.toLocaleString(DateTime.DATE_SHORT)} &rarr;
              </Link>
            </Button>
          )}
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <NewProductCard
            key={i}
            id={String(i)}
            title="Product"
            description="This is a description of the product. It provides information about"
            comments={12}
            views={4}
            votes={120}
          />
        ))}
        <Pagination totalPage={10} />
      </div>
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
