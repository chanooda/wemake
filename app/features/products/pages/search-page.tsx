import { Form, data } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Pagination } from '~/common/components/pagination';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { LINK, metadata } from '~/common/config';
import { getProductByQuerySchema } from '~/entities/products';
import { getProductByQuery } from '~/entities/products/api/queries';
import { ProductCard } from '../ui/new-product-card';
import type { Route } from './+types/search-page';

export const meta: Route.MetaFunction = () => {
 return metadata[LINK.PRODUCT_SEARCH];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
 const url = new URL(request.url);
 const { success, data: parsedData } = getProductByQuerySchema.safeParse({
  ...Object.fromEntries(url.searchParams),
 });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 if (!parsedData.query) {
  return { products: { data: [], meta: { count: 0, pages: 1 } } };
 }

 const products = await getProductByQuery(parsedData);

 return { products };
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
 const { products } = loaderData;

 return (
  <div>
   <PageTitle title="Search" subTitle="Search for products by title or description" />
   <div className="mx-auto flex w-full max-w-screen-md flex-col gap-4">
    <Form className="mb-16">
     <div className="flex items-center gap-2">
      <Input placeholder="Search for products" name="query" />
      <Button>Search</Button>
     </div>
    </Form>
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
