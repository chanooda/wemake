import { StarIcon } from 'lucide-react';
import { useState } from 'react';
import { data, useOutletContext } from 'react-router';
import { LabelSet } from '~/common/components/LabelSet';
import { Textarea } from '~/common/components/textarea';
import { Button } from '~/common/components/ui/button';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from '~/common/components/ui/dialog';
import { H2 } from '~/common/components/ui/typography';
import { idSchema } from '~/common/model';
import { getProductReviews, type getProduct } from '~/entities/products/api/queries';
import { ReviewCard } from '../ui/review-card';
import type { Route } from './+types/product-reviews-page';

export const loader = async ({ params }: Route.LoaderArgs) => {
 const { productId } = params;

 const { success, data: parsedData } = idSchema.safeParse({ id: productId });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const reviews = await getProductReviews({ id: parsedData.id });
 return { reviews };
};

export default function ProductReviewsPage({ loaderData }: Route.ComponentProps) {
 const { product } = useOutletContext<{ product: Awaited<ReturnType<typeof getProduct>> }>();
 const { reviews } = loaderData;

 const [rating, setRating] = useState(0);
 const [hoveredRating, setHoveredRating] = useState(0);

 return (
  <div className="w-full max-w-xl">
   <div className="flex items-center justify-between">
    <H2 className="border-0 pb-0 text-lg">{product.reviews} Reviews</H2>
    <Dialog>
     <DialogTrigger asChild>
      <Button variant="outline">Write a review</Button>
     </DialogTrigger>
     <DialogContent>
      <DialogHeader>
       <DialogTitle>What do you think of the product?</DialogTitle>
       <DialogDescription className="text-base">
        Share your thoughts and help others make informed decisions.
       </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">
       <div>
        <LabelSet label="Rating" description="What would you rate this product?" />
        <div className="mt-2 flex items-center">
         {[1, 2, 3, 4, 5].map((value) => {
          return (
           <label
            className="p-2"
            key={value}
            htmlFor={`rating-${value}`}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
           >
            <StarIcon
             size={24}
             className="text-yellow-500"
             fill={hoveredRating >= value || rating >= value ? 'currentColor' : 'none'}
            />
            <input
             hidden
             type="radio"
             id={`rating-${value}`}
             name="rating"
             value={value}
             onChange={() => setRating(value)}
            />
           </label>
          );
         })}
        </div>
       </div>
       <div>
        <Textarea className="h-24" label="Review" description="Maximum 1000 characters" />
       </div>
      </div>
      <DialogFooter className="justify-end">
       <Button type="button" variant="default">
        Submit
       </Button>
      </DialogFooter>
     </DialogContent>
    </Dialog>
   </div>
   <div className="mt-4 flex flex-col gap-4">
    {reviews.map((review) => (
     <ReviewCard
      key={review.review_id}
      name={review.profile.name}
      username={review.profile.username}
      avatar={review.profile.avatar}
      created_at={review.created_at}
      rating={review.rating}
      content={review.review}
     />
    ))}
   </div>
  </div>
 );
}
