import { PageTitle } from '~/common/components/page-title';
import { LINK, metadata } from '~/common/config';
import { getCategories } from '~/entities/products/api/queries';
import { CategoryCard } from '../ui/category-card';
import type { Route } from './+types/categories-page';

export const meta: Route.MetaFunction = () => {
 return metadata[LINK.PRODUCT_CATEGORIES];
};

export const loader = async () => {
 const categories = await getCategories();
 return { categories };
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
 const { categories } = loaderData;

 return (
  <div className="flex flex-col gap-8 px-20 py-10">
   <PageTitle title="Categories" subTitle="Browse Products by category" />
   <div className="grid auto-rows-fr grid-cols-4 gap-10">
    {categories.map((category) => (
     <CategoryCard
      key={category.category_id}
      id={String(category.category_id)}
      title={category.name}
      description={category.description}
     />
    ))}
   </div>
  </div>
 );
}
