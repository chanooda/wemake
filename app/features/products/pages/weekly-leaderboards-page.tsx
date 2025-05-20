import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { LINK } from "~/common/config";
import { NewProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/weekly-leaderboards-page";

const paramSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
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

  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
  });
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 },
    );
  }

  const today = DateTime.now().startOf("week");
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
  const date = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const prevDate = date.minus({ weeks: 1 });
  const nextDate = date.plus({ weeks: 1 });
  const isToday = date.hasSame(DateTime.now(), "week");
  const prevUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("weekly") +
    `/${prevDate.weekYear}/${prevDate.weekNumber}`;
  const nextUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("weekly") +
    `/${nextDate.weekYear}/${nextDate.weekNumber}`;

  return (
    <div>
      <PageTitle
        title={`The best products of\n${date.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${date.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
        <div className="flex w-full items-center justify-center gap-4">
          <Button variant="ghost" asChild>
            <Link to={prevUrl}>
              &larr; {prevDate.toLocaleString(DateTime.DATE_SHORT)}
            </Link>
          </Button>
          {!isToday && (
            <Button variant="ghost" asChild>
              <Link to={nextUrl}>
                {nextDate.toLocaleString(DateTime.DATE_SHORT)} &rarr;
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
