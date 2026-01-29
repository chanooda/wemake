import { Separator } from '@radix-ui/react-dropdown-menu';
import { ChevronUpIcon } from 'lucide-react';
import { NavLink, Outlet, data } from 'react-router';
import { Rating } from '~/common/components/rating';
import { Button, buttonVariants } from '~/common/components/ui/button';
import { P, TypographyMuted } from '~/common/components/ui/typography';
import { LINK, getMetadataTitle } from '~/common/config';
import { cn } from '~/common/lib/utils';
import { idSchema } from '~/common/model';
import { getProduct } from '~/entities/products/api/queries';
import type { Route } from './+types/product-layout';

export const meta: Route.MetaFunction = ({ data }) => {
 return [
  {
   title: getMetadataTitle(`${data.product.name} Overview`),
  },
  {
   name: 'description',
   content: data.product.description,
  },
 ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
 const { productId } = params;

 const { success, data: parsedData } = idSchema.safeParse({ id: productId });
 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const product = await getProduct({ id: parsedData.id });
 return { product };
};

const ProductLayout = ({ loaderData }: Route.ComponentProps) => {
 const { product } = loaderData;

 return (
  <div>
   <div className="flex gap-4">
    <div className="bg-primary/50 size-42 rounded-2xl">
     <img src={product.icon} alt={product.name} width={168} height={168} />
    </div>
    <div className="flex flex-col justify-between py-2">
     <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <P className="text-xl">{product.tagline}</P>
     </div>
     <div className="flex items-center gap-2">
      <Rating value={product.rating} />
      <TypographyMuted>{product.reviews} Reviews</TypographyMuted>
     </div>
    </div>
   </div>
   <div className="mt-4 flex items-center gap-2">
    <Button size="lg" variant="secondary" className="w-42 text-base">
     Visit Website
    </Button>
    <Button size="lg" className="w-42 text-base">
     <ChevronUpIcon /> UpVote ({product.upvotes})
    </Button>
   </div>
   <Separator className="mt-4" />
   <div className="mt-8">
    <div className="flex gap-8">
     <NavLink
      end
      className={({ isActive }) =>
       cn(buttonVariants({ variant: 'ghost', size: 'lg' }), isActive && 'text-primary font-bold')
      }
      to={LINK.PRODUCT_OVERVIEW(product.product_id.toString())}
     >
      Overview
     </NavLink>

     <NavLink
      end
      className={({ isActive }) =>
       cn(buttonVariants({ variant: 'ghost', size: 'lg' }), isActive && 'text-primary font-bold')
      }
      to={LINK.PRODUCT_REVIEWS(product.product_id.toString())}
     >
      Reviews
     </NavLink>
    </div>
    <div className="mt-4 flex flex-col gap-8">
     <Outlet context={{ product }} />
    </div>
   </div>
  </div>
 );
};

export default ProductLayout;
