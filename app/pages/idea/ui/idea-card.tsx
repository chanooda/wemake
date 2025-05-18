import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { TypographySmall } from "~/common/components/ui/typography";
import { LINK } from "~/common/config";
import { cn } from "~/common/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewsCount: number;
  postedAt: string;
  likesCount: number;
  claimed: boolean;
}

export const IdeaCard = ({
  id,
  title,
  viewsCount,
  postedAt,
  likesCount,
  claimed,
}: IdeaCardProps) => {
  return (
    <Link to={LINK.IDEA(id)}>
      <Card>
        <CardHeader>
          <CardTitle
            className={cn([
              claimed ? "bg-foreground selection:bg-foreground" : "",
            ])}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-1">
            <EyeIcon size={16} />
            <TypographySmall>{viewsCount}</TypographySmall>
            <DotIcon size={16} />
            <TypographySmall>{postedAt}</TypographySmall>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <HeartIcon /> {likesCount}
          </Button>
          {claimed ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              variant="secondary"
              className="cursor-not-allowed"
            >
              <LockIcon /> Claimed
            </Button>
          ) : (
            <Button className="cursor-pointer">Claim idea now &rarr;</Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
