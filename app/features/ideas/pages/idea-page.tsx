import { ArrowRightIcon, DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { DateTime } from "luxon";
import { data } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Button } from "~/common/components/ui/button";
import { TypographySmall } from "~/common/components/ui/typography";
import { getIdea } from "~/entities/ideas";
import type { Route } from "./+types/idea-page";

export const meta = ({ params: { ideaId }, data:{idea} }: Route.MetaArgs) => {
  return [
    { title: `Idea #${ideaId} | ${idea.idea}` },
    {
      name: "description",
      content: idea.idea,
    },
  ];
};

export const loader = async({params:{ideaId}}:Route.LoaderArgs) => {
  const idea = await getIdea({id:ideaId});

  if(!idea){
    throw data({error_code:"not Found"},{status:404});
  }

  return {idea}
}

const IdeaPage = ({ params: { ideaId }, loaderData:{idea} }: Route.ComponentProps) => {
  return (
    <div>
      <PageTitle title={`Idea #${idea.gpt_idea_id}`} />
      <div className="mx-auto max-w-screen-sm">
        <p className="italic">
          "{idea.idea}"
        </p>

        <div className="flex flex-col items-center">
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="text-muted-foreground flex items-center justify-center gap-1">
              <EyeIcon size={16} />
              <TypographySmall>{idea.views}</TypographySmall>
              <DotIcon size={16} />
              <TypographySmall>{DateTime.fromISO(idea.created_at).toRelative()}</TypographySmall>
            </div>
            <Button variant="outline">
              <HeartIcon />
              {idea.likes}
            </Button>
          </div>
          <Button className="mt-8">
            Claim idea now <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdeaPage;
