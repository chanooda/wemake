import { Avatar } from "@radix-ui/react-avatar";
import { Rating } from "~/common/components/rating";
import { AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { H2 } from "~/common/components/ui/typography";

export default function ProductReviewsPage() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center justify-between">
        <H2 className="border-0 pb-0 text-lg">10 Reviews</H2>
        <Button variant="outline">Write a review</Button>
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
              <span className="text-muted-foreground text-xs">
                @username • 2 days ago
              </span>
            </div>
          </div>
          <div>
            <Rating />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">
              This product is amazing! It has changed the way I work and has
              significantly improved my productivity. Highly recommend it to
              anyone looking for a solution to their problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
