import { Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronUpIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { Rating } from "~/common/components/rating";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { P, TypographyMuted } from "~/common/components/ui/typography";
import { LINK } from "~/common/config";
import { cn } from "~/common/lib/utils";
import type { Route } from "./+types/product-layout";

const ProductLayout = ({ params: { productId } }: Route.ComponentProps) => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="bg-primary/50 size-42 rounded-2xl" />
        <div className="flex flex-col justify-between py-2">
          <div>
            <h1 className="text-3xl font-bold">Product Title</h1>
            <P className="text-xl">Product Description</P>
          </div>
          <div className="flex items-center gap-2">
            <Rating />
            <TypographyMuted>100 Reviews</TypographyMuted>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Button size="lg" variant="secondary" className="w-42 text-base">
          Visit Website
        </Button>
        <Button size="lg" className="w-42 text-base">
          <ChevronUpIcon /> UpVote (100)
        </Button>
      </div>
      <Separator className="mt-4" />
      <div className="mt-8">
        <div className="flex gap-8">
          <NavLink
            end
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                isActive && "text-primary font-bold",
              )
            }
            to={LINK.PRODUCT_OVERVIEW(productId ?? "")}
          >
            Overview
          </NavLink>

          <NavLink
            end
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                isActive && "text-primary font-bold",
              )
            }
            to={LINK.PRODUCT_REVIEWS(productId ?? "")}
          >
            Reviews
          </NavLink>
        </div>
        <div className="mt-4 flex flex-col gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
