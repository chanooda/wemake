import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { H2, TypographyLarge } from '~/common/components/ui/typography';
import { LINK, metadata } from '~/common/config';
import { DiscussionCard } from '~/features/community/ui/discussion-card';
import { IdeaCard } from '~/features/ideas/ui/idea-card';
import { JobCard } from '~/features/jobs/ui/job-card';
import { ProductCard } from '~/features/products/ui/new-product-card';
import { TeamCard } from '~/features/teams/ui/team-card';
import type { Route } from './+types/home';
import { getPosts } from './entities/community';
import { getIdeas } from './entities/ideas';
import { getJobs } from './entities/jobs';
import { getProductsByDate } from './entities/products/api/queries';
import { getTeams } from './entities/teams/api/queries';

export function meta({}: Route.MetaArgs) {
 return metadata[LINK.HOME];
}

export const loader = async () => {
 const productsPromise = getProductsByDate('day');
 const jobsPromise = getJobs({ limit: 10 });
 const ideasPromise = getIdeas({ limit: 10 });
 const discussionsPromise = getPosts({ limit: 10, page: 1, period: 'all', sort: 'newest' });
 const teamsPromise = getTeams({ limit: 10 });

 const [products, jobs, ideas, discussions, teams] = await Promise.all([
  productsPromise,
  jobsPromise,
  ideasPromise,
  discussionsPromise,
  teamsPromise,
 ]);

 return { products, jobs, ideas, discussions, teams };
};

export default function Home({ loaderData }: Route.ComponentProps) {
 const { products, jobs, ideas, discussions, teams } = loaderData;

 console.log(teams);

 return (
  <div className="flex flex-col gap-24">
   <div className="3xl:grid-cols-5 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div className="flex flex-col">
     <H2>Today's Products</H2>
     <TypographyLarge>The best products made by our community today.</TypographyLarge>
     <Button variant="link" className="w-max p-0">
      <Link to={LINK.PRODUCT_LEADERBOARDS} className="text-lg">
       Explore all products &rarr;
      </Link>
     </Button>
    </div>
    {products.map((product) => (
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
   </div>
   <div className="3xl:grid-cols-5 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div className="flex flex-col">
     <H2>Latest Discussion</H2>
     <TypographyLarge>The Latest Discussion from our community.</TypographyLarge>
     <Button variant="link" className="w-max p-0">
      <Link to={LINK.COMMUNITIES} className="text-lg">
       Explore all discussions &rarr;
      </Link>
     </Button>
    </div>
    {discussions.data.map((discussion) => (
     <DiscussionCard
      key={discussion.post_id}
      id={String(discussion.post_id)}
      authorAvatarUrl={discussion.author_avatar}
      title={discussion.title}
      author={discussion.author_name}
      category={discussion.topic_name}
      postedAt={discussion.created_at}
     />
    ))}
   </div>
   <div className="3xl:grid-cols-5 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div className="flex flex-col">
     <H2>IdeasGPT</H2>
     <TypographyLarge>Find ideas for your next project</TypographyLarge>
     <Button variant="link" className="w-max p-0">
      <Link to={LINK.COMMUNITIES} className="text-lg">
       Explore all ideas &rarr;
      </Link>
     </Button>
    </div>
    {ideas.map((idea) => (
     <IdeaCard
      claimed={idea.is_claimed}
      key={idea.gpt_idea_id}
      id={String(idea.gpt_idea_id)}
      title={idea.idea}
      viewsCount={idea.views}
      postedAt={idea.created_at}
      likesCount={idea.likes}
     />
    ))}
   </div>
   <div className="3xl:grid-cols-5 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div className="flex flex-col">
     <H2>Latest Jobs</H2>
     <TypographyLarge>Find your dream job.</TypographyLarge>
     <Button variant="link" className="w-max p-0">
      <Link to={LINK.COMMUNITIES} className="text-lg">
       Explore all jobs &rarr;
      </Link>
     </Button>
    </div>
    {jobs.map((job) => (
     <JobCard
      key={job.job_id}
      id={String(job.job_id)}
      company={job.company_name}
      companyLogoUrl={job.company_logo_url}
      companyHq={job.company_hq}
      title={job.position}
      postedAt={job.created_at}
      type={job.job_type}
      positionLocation={job.location}
      salaryRange={job.salary_range}
     />
    ))}
   </div>
   <div className="3xl:grid-cols-5 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div className="flex flex-col">
     <H2>Find a team mate</H2>
     <TypographyLarge>Join a team looking for a new member</TypographyLarge>
     <Button variant="link" className="w-max p-0">
      <Link to={LINK.TEAMS} className="text-lg">
       Explore all teams &rarr;
      </Link>
     </Button>
    </div>
    {teams.map((team) => (
     <TeamCard
      key={team.team_id}
      id={String(team.team_id)}
      leaderName={team.team_leader.username}
      leaderAvatarUrl={team.team_leader.avatar}
      positions={team.roles.split(',')}
      projectDescription={team.product_description}
     />
    ))}
   </div>
  </div>
 );
}
