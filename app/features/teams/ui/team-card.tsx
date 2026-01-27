import { AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router";
import { Avatar, AvatarFallback } from "~/common/components/ui/avatar";
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
  leaderAvatarUrl: string | null;
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
    <Link to={`${LINK.TEAM(id)}`} className="h-full">
      <Card className="h-full">
        <CardHeader className="h-full">
          <CardTitle className="text-base leading-loose h-full">
            <Badge variant="secondary">
              <span className="text-base">@{leaderName}</span>
              <Avatar className="size-5">
                <AvatarFallback>{leaderName.slice(0, 2)}</AvatarFallback>
                {leaderAvatarUrl && <AvatarImage src={leaderAvatarUrl} />}
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {positions.map((position, idx) => (
              <Badge key={idx} className="text-base">
                {position}
              </Badge>
            ))}
            <span className="break-all line-clamp-2"> to {projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end mt-auto">
          <Button className="cursor-pointer" variant="link">
            Join Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
