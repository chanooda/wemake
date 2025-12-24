import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { getMetadataTitle, LINK } from "~/common/config";
import { dailySchema } from "~/common/model/schema";
import { ProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/daily-leaderboards-page";

export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedData } = dailySchema.safeParse(params);
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

  const today = DateTime.now().startOf("day");
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

export const meta: Route.MetaFunction = ({ params }) => {
  const { success, data } = dailySchema.safeParse(params);
  let title = "The best products of today";
  if (success) {
    const date = DateTime.fromObject(data);
    title = `The best products of ${date.toLocaleString(DateTime.DATE_SHORT)}`;
  }
  return [
    {
      title: getMetadataTitle(title),
    },
  ];
};

export default function DailyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  const date = DateTime.fromObject(loaderData);
  const prevDate = date.minus({ days: 1 });
  const nextDate = date.plus({ days: 1 });
  const isToday = date.hasSame(DateTime.now(), "day");
  const prevUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("daily") +
    `/${prevDate.year}/${prevDate.month}/${prevDate.day}`;
  const nextUrl =
    LINK.PRODUCT_LEADERBOARDS_REDIRECT("daily") +
    `/${nextDate.year}/${nextDate.month}/${nextDate.day}`;

  return (
    <div>
      <PageTitle
        title={`The best products of ${date.toLocaleString(DateTime.DATE_SHORT)}`}
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
          <ProductCard
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
