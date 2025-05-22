import { PageTitle } from "~/common/components/page-title";
import { LINK, metadata } from "~/common/config";
import { CategoryCard } from "../ui/category-card";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => {
  return metadata[LINK.PRODUCT_CATEGORIES];
};

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <PageTitle title="Categories" subTitle="Browse Products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }, (_, i) => (
          <CategoryCard
            key={i}
            id={i + ""}
            title={`Category ${i}`}
            description="Category description"
          />
        ))}
      </div>
    </div>
  );
}
