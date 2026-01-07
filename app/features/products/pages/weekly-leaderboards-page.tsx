import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { getMetadataTitle, LINK } from "~/common/config";
import { weeklySchema } from "~/common/model/reqSchema";
import {
  getProductsByDateRange,
  getProductsPagesByDateRange,
} from "~/entities/products/api/queries";
import { ProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/weekly-leaderboards-page";

export const meta: Route.MetaFunction = ({ params }) => {
  const { success, data } = weeklySchema.safeParse(params);
  let title = "The best products of this week";
  if (success) {
    const date = DateTime.fromObject({
      weekYear: data.year,
      weekNumber: data.week,
    });
    title = `The best products of ${date
      .startOf("week")
      .toLocaleString(DateTime.DATE_SHORT)} - ${date
      .endOf("week")
      .toLocaleString(DateTime.DATE_SHORT)}`;
  }
  return [
    {
      title: getMetadataTitle(title),
    },
  ];
};

export async function loader({ params, request }: Route.LoaderArgs) {
  const { success, data: parsedData } = weeklySchema.safeParse(params);
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

  const url = new URL(request.url);

  const products = await getProductsByDateRange({
    from: date.startOf("week"),
    to: date.endOf("week"),
    limit: 15,
    page: Number(url.searchParams.get("page") || "1"),
  });

  const pages = await getProductsPagesByDateRange({
    from: date.startOf("week"),
    to: date.endOf("week"),
  });

  return { parsedData, products, pages };
}

export default function DailyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  const { parsedData, products, pages } = loaderData;

  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
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

  console.log(products);

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
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={String(product.product_id)}
            title={product.name}
            description={product.description}
            reviews={product.reviews as number}
            views={product.views as number}
            votes={product.upvotes as number}
          />
        ))}
        <Pagination totalPage={pages} />
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
