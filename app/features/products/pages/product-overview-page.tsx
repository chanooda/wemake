import { useOutletContext } from 'react-router';
import { H2, TypographyMuted } from '~/common/components/ui/typography';
import type { getProduct } from '~/entities/products/api/queries';
import type { Route } from './+types/product-overview-page';

export default function ProductOverviewPage({}: Route.ComponentProps) {
 const { product } = useOutletContext<{ product: Awaited<ReturnType<typeof getProduct>> }>();

 return (
  <>
   <div>
    <H2 className="border-0 text-lg">What is this product</H2>
    <TypographyMuted className="text-base">{product.description}</TypographyMuted>
   </div>
   <div>
    <H2 className="border-0 text-lg">Key Features</H2>
    <TypographyMuted className="text-base">{product.how_it_works}</TypographyMuted>
   </div>
  </>
 );
}
