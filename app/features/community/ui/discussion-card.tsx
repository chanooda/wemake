import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronUpIcon } from "lucide-react";
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
import { cn } from "~/common/lib/utils";

interface DiscussionCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
  expanded?: boolean;
  votes?: number;
}

export function DiscussionCard({
  authorAvatarUrl,
  title,
  author,
  category,
  postedAt,
  id,
  expanded = false,
  votes = 0,
}: DiscussionCardProps) {
  return (
    <Link to={LINK.COMMUNITY(id)}>
      <Card
        className={cn([
          expanded ? "flex flex-row items-center justify-start" : "",
        ])}
      >
        <CardHeader className="flex w-full items-center gap-4">
          <Avatar className="size-10 shrink-0 overflow-hidden rounded-full shadow-md">
            <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
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
        {expanded && (
          <CardFooter className="justify-end pb-0">
            <Button
              variant="outline"
              className="flex h-12 flex-col gap-1"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <ChevronUpIcon size={4} />
              <TypographySmall>{votes}</TypographySmall>
            </Button>
          </CardFooter>
        )}
        {!expanded && (
          <CardFooter className="justify-end">
            <Button className="cursor-pointer" variant="link">
              reply &rarr;
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
