import { ArrowRightIcon, DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { PageTitle } from "~/common/components/page-title";
import { Button } from "~/common/components/ui/button";
import { TypographySmall } from "~/common/components/ui/typography";
import { getMetadataTitle } from "~/common/config";
import type { Route } from "./+types/idea-page";

export const meta = ({ params: { ideaId } }: Route.MetaArgs) => {
  return [
    { title: getMetadataTitle(`IdeasGPT#${ideaId}`) },
    {
      name: "description",
      content: `This is the details page for idea #${ideaId}`,
    },
  ];
};

const IdeaPage = ({ params: { ideaId } }: Route.ComponentProps) => {
  return (
    <div>
      <PageTitle title={`IdeasGPT#${ideaId}`} />
      <div className="mx-auto max-w-screen-sm">
        <p className="italic">
          "This is the details page for idea. Here you can find more information
          about the idea, its creator, and any discussions or comments related
          to it."
        </p>

        <div className="flex flex-col items-center">
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="text-muted-foreground flex items-center justify-center gap-1">
              <EyeIcon size={16} />
              <TypographySmall>123</TypographySmall>
              <DotIcon size={16} />
              <TypographySmall>12 hours ago</TypographySmall>
            </div>
            <Button variant="outline">
              <HeartIcon />
              45
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
