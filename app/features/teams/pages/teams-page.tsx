import { PageTitle } from "~/common/components/page-title";
import { LINK, metadata } from "~/common/config/sitemap";
import { TeamCard } from "../ui/team-card";

export const meta = () => {
  return metadata[LINK.TEAMS];
};

const TeamsPage = () => {
  return (
    <div>
      <PageTitle title="Teams" subTitle="Find teams in our community" />
      <div className="grid grid-cols-4 gap-4">
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
};

export default TeamsPage;
