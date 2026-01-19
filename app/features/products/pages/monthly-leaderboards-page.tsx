import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { getMetadataTitle, LINK } from "~/common/config";
import { monthlySchema } from "~/common/model/req.schema";
import {
  getProductsByDateRange,
  getProductsPagesByDateRange,
} from "~/entities/products/api/queries";
import { ProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/monthly-leaderboards-page";

export const meta: Route.MetaFunction = ({ params }) => {
  const { success, data } = monthlySchema.safeParse(params);
  let title = "The best products of this month";
  if (success) {
    const date = DateTime.fromObject(data);
    title = `The best products of ${date.toFormat("yyyy.MM")}}`;
  }
  return [
    {
      title: getMetadataTitle(title),
    },
  ];
};

export async function loader({ params, request }: Route.LoaderArgs) {
  const { success, data: parsedData } = monthlySchema.safeParse(params);
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

  const url = new URL(request.url);

  const products = await getProductsByDateRange({
    from: date.startOf("month"),
    to: date.endOf("month"),
    limit: 15,
    page: Number(url.searchParams.get("page") || "1"),
  });

  const pages = await getProductsPagesByDateRange({
    from: date.startOf("month"),
    to: date.endOf("month"),
  });

  return { parsedData, products, pages };
}

export default function DailyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  const { parsedData, products, pages } = loaderData;
  const date = DateTime.fromObject(parsedData);
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
      <PageTitle title={`The best products of\n${date.toFormat("yyyy.MM")}`} />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
        <div className="flex w-full items-center justify-center gap-4">
          <Button variant="ghost" asChild>
            <Link to={prevUrl}>&larr; {prevMonth.toFormat("yyyy.MM")}</Link>
          </Button>
          {!isToday && (
            <Button variant="ghost" asChild>
              <Link to={nextUrl}>{nextMonth.toFormat("yyyy.MM")} &rarr;</Link>
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
