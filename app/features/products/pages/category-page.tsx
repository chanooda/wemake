import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { ProductCard } from "../ui/new-product-card";
import type { Route } from "./+types/category-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "category title" },
    { name: "description", content: "category description" },
  ];
};

export default function CategoryPage() {
  return (
    <div>
      <PageTitle title="Category Title" subTitle="Category SubTitle" />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <ProductCard
            key={i}
            id={String(i)}
            title="Product"
            description="This is a description of the product. It provides information about"
            reviews={12}
            views={4}
            votes={120}
          />
        ))}
        <Pagination totalPage={10} />
      </div>
    </div>
  );
}
