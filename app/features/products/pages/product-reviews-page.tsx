import { Avatar } from '@radix-ui/react-avatar';
import { StarIcon } from 'lucide-react';
import { useState } from 'react';
import { LabelSet } from '~/common/components/LabelSet';
import { Rating } from '~/common/components/rating';
import { Textarea } from '~/common/components/textarea';
import { AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
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

export default function ProductReviewsPage() {
 const [rating, setRating] = useState(0);
 const [hoveredRating, setHoveredRating] = useState(0);

 return (
  <div className="w-full max-w-xl">
   <div className="flex items-center justify-between">
    <H2 className="border-0 pb-0 text-lg">10 Reviews</H2>
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
    <div className="flex flex-col gap-4">
     <div className="flex items-center gap-2">
      <Avatar className="h-10 w-10">
       <AvatarFallback />
       <AvatarImage src="https://github.com/facebook.png" />
      </Avatar>
      <div className="flex flex-col">
       <span className="text-sm font-semibold">John Doe</span>
       <span className="text-muted-foreground text-xs">@username • 2 days ago</span>
      </div>
     </div>
     <div>
      <Rating />
     </div>
     <div>
      <p className="text-muted-foreground text-sm">
       This product is amazing! It has changed the way I work and has significantly improved my
       productivity. Highly recommend it to anyone looking for a solution to their problems.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
