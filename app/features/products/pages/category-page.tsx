import { data } from 'react-router';
import { z } from 'zod';
import { PageTitle } from '~/common/components/page-title';
import { Pagination } from '~/common/components/pagination';
import { getMetadataTitle } from '~/common/config';
import { idSchema } from '~/common/model/req.schema';
import { getCategory, getProductsByCategory } from '~/entities/products/api/queries';
import { getProductsByCategorySchema } from '~/entities/products/model/products-schema';
import { ProductCard } from '../ui/new-product-card';
import type { Route } from './+types/category-page';

export const meta: Route.MetaFunction = ({ data }) => {
 return [
  { title: getMetadataTitle(data.category.name) },
  { name: 'description', content: data.category.description },
 ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
 const { category: categoryId } = params;

 const url = new URL(request.url);

 const categoryPageParamsSchema = z.object({
  ...idSchema.shape,
  ...getProductsByCategorySchema.shape,
 });

 const { success, data: parsedData } = categoryPageParamsSchema.safeParse({
  ...params,
  id: categoryId,
  ...Object.fromEntries(url.searchParams),
 });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const categoryPromise = getCategory({ id: parsedData.id });
 const productsPromise = getProductsByCategory(parsedData);

 const [category, products] = await Promise.all([categoryPromise, productsPromise]);

 if (!category) {
  throw data({ error_code: 'not Found' }, { status: 404 });
 }

 return { category, products };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
 const { category, products } = loaderData;

 console.log(products);

 return (
  <div>
   <PageTitle title={category.name} subTitle={category.description} />
   <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
    {products.data.map((product) => (
     <ProductCard
      key={product.product_id}
      id={String(product.product_id)}
      title={product.name}
      description={product.tagline}
      reviews={product.reviews as number}
      views={product.views as number}
      votes={product.upvotes as number}
     />
    ))}
    <Pagination totalPage={products.meta.pages} />
   </div>
  </div>
 );
}
