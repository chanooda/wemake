import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { H2, TypographyLarge } from "~/common/components/ui/typography";
import { LINK, metadata } from "~/common/config";
import { DiscussionCard } from "~/features/community/ui/discussion-card";
import { IdeaCard } from "~/features/ideas/ui/idea-card";
import { JobCard } from "~/features/jobs/ui/job-card";
import { ProductCard } from "~/features/products/ui/new-product-card";
import { TeamCard } from "~/features/teams/ui/team-card";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return metadata[LINK.HOME];
}

export const loader = async () => {
  return {};
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col">
          <H2>Today's Products</H2>
          <TypographyLarge>
            The best products made by our community today.
          </TypographyLarge>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.PRODUCT_LEADERBOARDS} className="text-lg">
              Explore all products &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <ProductCard
            key={i}
            id={String(i)}
            title="Product"
            description="This is a description of the product. It provides information about"
            comments={12}
            views={4}
            votes={120}
          />
        ))}
      </div>
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col">
          <H2>Latest Discussion</H2>
          <TypographyLarge>
            The Latest Discussion from our community.
          </TypographyLarge>
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
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col">
          <H2>IdeasGPT</H2>
          <TypographyLarge>Find ideas for your next project</TypographyLarge>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.COMMUNITIES} className="text-lg">
              Explore all ideas &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <IdeaCard
            claimed={i % 2 === 0}
            key={i}
            id={String(i)}
            title={`Idea Title ${i + 1}`}
            viewsCount={100 + i}
            postedAt="12 hours ago"
            likesCount={10 + i}
          />
        ))}
      </div>
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col">
          <H2>Latest Jobs</H2>
          <TypographyLarge>Find your dream job.</TypographyLarge>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.COMMUNITIES} className="text-lg">
              Explore all jobs &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <JobCard
            key={i}
            id={String(i)}
            company="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-time"
            positionLocation="Remote"
            salaryRange="$100,000 ~ $120,000"
          />
        ))}
      </div>
      <div className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col">
          <H2>Find a team mate</H2>
          <TypographyLarge>
            Join a team looking for a new member
          </TypographyLarge>
          <Button variant="link" className="w-max p-0">
            <Link to={LINK.COMMUNITIES} className="text-lg">
              Explore all teams &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <TeamCard
            key={i}
            id={String(i)}
            leaderName="chanoo"
            leaderAvatarUrl="https://github.com/chanooda.png"
            positions={[
              "React Developer",
              "Backed Developer",
              "Product Manager",
            ]}
            projectDescription="build a new social media platform."
          />
        ))}
      </div>
    </div>
  );
}
