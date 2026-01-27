import { PageTitle } from "~/common/components/page-title";
import { LINK, metadata } from "~/common/config/sitemap";
import { getTeams } from "~/entities/teams";
import { TeamCard } from "../ui/team-card";
import type { Route } from "./+types/teams-page";

export const meta = () => {
  return metadata[LINK.TEAMS];
};

export const loader = async () => {
  const teams = await getTeams({limit:12})
  return { teams }
}

const TeamsPage = ({ loaderData }: Route.ComponentProps) => {
  const { teams } = loaderData
  return (
    <div>
      <PageTitle title="Teams" subTitle="Find teams in our community" />
      <div className="grid grid-cols-4 gap-4">
        {teams.map((team) => (
          <TeamCard
            key={team.team_id}
            id={String(team.team_id)}
            leaderName={team.team_leader.username}
            leaderAvatarUrl={team.team_leader.avatar}
            positions={team.roles.split(",")}
            projectDescription={team.product_description}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
