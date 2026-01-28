import { Link } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Button } from '~/common/components/ui/button';
import { H2, TypographyLarge } from '~/common/components/ui/typography';
import { LINK, metadata } from '~/common/config';
import { getProductsByDate } from '~/entities/products/api/queries';
import { ProductCard } from '../ui/new-product-card';
import type { Route } from './+types/leaderboards-page';

export const meta: Route.MetaFunction = () => {
 return metadata[LINK.PRODUCT_LEADERBOARDS];
};

export const loader = async () => {
 const [dailyProducts, weeklyProducts, monthlyProducts, yearlyProducts] = await Promise.all([
  getProductsByDate('day'),
  getProductsByDate('week'),
  getProductsByDate('month'),
  getProductsByDate('year'),
 ]);
 return { dailyProducts, weeklyProducts, monthlyProducts, yearlyProducts };
};

export default function LeaderboardsPage({ loaderData }: Route.ComponentProps) {
 const { dailyProducts, weeklyProducts, monthlyProducts, yearlyProducts } = loaderData;

 return (
  <div>
   <PageTitle title="Leaderboards" subTitle="The most popular products on wemake" />
   <div className="flex flex-col gap-24">
    <div className="grid auto-rows-fr grid-cols-3 gap-4">
     <div className="flex flex-col">
      <H2>Daily Products</H2>
      <TypographyLarge>The most popular products on wemake by day.</TypographyLarge>
     </div>
     {dailyProducts.map((product) => (
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
     <div className="flex flex-col items-center justify-center">
      <Button variant="link" className="w-max p-0">
       <Link to={LINK.PRODUCT_LEADERBOARDS_REDIRECT('daily')} className="text-lg">
        Explore all daily products &rarr;
       </Link>
      </Button>
     </div>
    </div>
    <div className="grid auto-rows-fr grid-cols-3 gap-4">
     <div className="flex flex-col">
      <H2>Weekly Products</H2>
      <TypographyLarge>The most popular products on wemake by week.</TypographyLarge>
     </div>
     {weeklyProducts.map((product) => (
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
     <div className="flex flex-col items-center justify-center">
      <Button variant="link" className="w-max p-0">
       <Link to={LINK.PRODUCT_LEADERBOARDS_REDIRECT('weekly')} className="text-lg">
        Explore all weekly products &rarr;
       </Link>
      </Button>
     </div>
    </div>
    <div className="grid auto-rows-fr grid-cols-3 gap-4">
     <div className="flex flex-col">
      <H2>Monthly Products</H2>
      <TypographyLarge>The most popular products on wemake by month.</TypographyLarge>
     </div>
     {monthlyProducts.map((product) => (
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
     <div className="flex flex-col items-center justify-center">
      <Button variant="link" className="w-max p-0">
       <Link to={LINK.PRODUCT_LEADERBOARDS_REDIRECT('monthly')} className="text-lg">
        Explore all monthly products &rarr;
       </Link>
      </Button>
     </div>
    </div>
    <div className="grid auto-rows-fr grid-cols-3 gap-4">
     <div className="flex flex-col">
      <H2>Yearly Products</H2>
      <TypographyLarge>The most popular products on wemake by year.</TypographyLarge>
     </div>
     {yearlyProducts.map((product) => (
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
     <div className="flex flex-col items-center justify-center">
      <Button variant="link" className="w-max p-0">
       <Link to={LINK.PRODUCT_LEADERBOARDS_REDIRECT('yearly')} className="text-lg">
        Explore all yearly products &rarr;
       </Link>
      </Button>
     </div>
    </div>
   </div>
  </div>
 );
}
