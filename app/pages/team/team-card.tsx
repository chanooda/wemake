import { AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router";
import { Avatar } from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { LINK } from "~/common/config";

interface TeamCardProps {
  id: string;
  leaderName: string;
  leaderAvatarUrl: string;
  positions: string[];
  projectDescription: string;
}

export const TeamCard = ({
  id,
  leaderName,
  leaderAvatarUrl,
  positions,
  projectDescription,
}: TeamCardProps) => {
  return (
    <Link to={`${LINK.TEAM(id)}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary">
              <span className="text-base">@{leaderName}</span>
              <Avatar className="size-5">
                <AvatarImage src={leaderAvatarUrl} />
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {positions.map((position, idx) => (
              <Badge key={idx} className="text-base">
                {position}
              </Badge>
            ))}
            <span> to {projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button className="cursor-pointer" variant="link">
            Join Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
