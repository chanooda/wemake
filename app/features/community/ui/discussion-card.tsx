import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "react-router";
import { AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { TypographySmall } from "~/common/components/ui/typography";
import { LINK } from "~/common/config";

interface DiscussionCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
}

export function DiscussionCard({
  authorAvatarUrl,
  title,
  author,
  category,
  postedAt,
  id,
}: DiscussionCardProps) {
  return (
    <Link to={LINK.COMMUNITY(id)}>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Avatar className="size-10 shrink-0">
            <AvatarFallback>{author}</AvatarFallback>
            <AvatarImage src={authorAvatarUrl} alt={`${author} avatar`} />
          </Avatar>
          <div className="flex flex-col justify-center gap-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <div className="text-muted-foreground flex gap-1">
              <TypographySmall>{author}</TypographySmall>
              <TypographySmall>{category}</TypographySmall>
              <TypographySmall>·</TypographySmall>
              <TypographySmall>{postedAt}</TypographySmall>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button className="cursor-pointer" variant="link">
            reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
