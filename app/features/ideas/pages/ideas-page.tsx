import { PageTitle } from "~/common/components/page-title";
import { LINK, metadata } from "~/common/config";
import { IdeaCard } from "../ui/idea-card";

export const meta = () => {
  return metadata[LINK.IDEAS];
};

const IdeasPage = () => {
  return (
    <div>
      <PageTitle title="IdeasGPT" subTitle="Find your ideas" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 50 }, (_, i) => (
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
    </div>
  );
};

export default IdeasPage;
