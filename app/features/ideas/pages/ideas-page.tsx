import { PageTitle } from '~/common/components/page-title';
import { LINK, metadata } from '~/common/config';
import { getIdeas } from '~/entities/ideas';
import { IdeaCard } from '../ui/idea-card';
import type { Route } from './+types/ideas-page';

export const meta = () => {
 return metadata[LINK.IDEAS];
};

export const loader = async () => {
 const ideas = await getIdeas({ limit: 10 });

 return { ideas };
};

const IdeasPage = ({ loaderData }: Route.ComponentProps) => {
 const { ideas } = loaderData;

 return (
  <div>
   <PageTitle title="IdeasGPT" subTitle="Find your ideas" />
   <div className="grid grid-cols-4 gap-4">
    {ideas.map((idea, i) => (
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
  </div>
 );
};

export default IdeasPage;
