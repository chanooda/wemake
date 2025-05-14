import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { H2, P } from "~/common/components/ui/typography";
import { LINK, metadata } from "~/common/config";
import { DiscussionCard } from "~/pages/community/ui/discussion-card";
import { NewProductCard } from "~/pages/product/ui/new-product-card";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return metadata[LINK.HOME];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <div className="grid grid-cols-3 gap-4 px-20">
        <div className="flex flex-col">
          <H2>Today's Products</H2>
          <P>The best products made by our community today.</P>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.PRODUCT_LEADERBOARDS} className="text-lg">
              Explore all products &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <NewProductCard
            id={String(i)}
            title="Product"
            description="This is a description of the product. It provides information about"
            comments={12}
            views={4}
            votes={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 px-20">
        <div className="flex flex-col">
          <H2>Latest Discussion</H2>
          <P>The Latest Discussion from our community.</P>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.COMMUNITIES} className="text-lg">
              Explore all discussions &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <DiscussionCard
            key={i}
            id={String(i)}
            authorAvatarUrl="https://github.com/apple.png"
            title="What is very productivity tool"
            author="chan on"
            category="productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
    </div>
  );
}
