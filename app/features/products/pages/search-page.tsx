import { Form } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { LINK, metadata } from "~/common/config";
import { searchSchema } from "~/common/model/schema";
import { ProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/search-page";

export const meta: Route.MetaFunction = () => {
  return metadata[LINK.PRODUCT_SEARCH];
};

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data } = searchSchema.safeParse(
    Object.fromEntries(url.searchParams),
  );

  if (!success) {
    throw new Error("Invalid parameters");
  }

  return data;
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <PageTitle
        title="Search"
        subTitle="Search for products by title or description"
      />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
        <Form className="mb-16">
          <div className="flex items-center gap-2">
            <Input placeholder="Search for products" name="query" />
            <Button>Search</Button>
          </div>
        </Form>
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
