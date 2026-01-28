import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { ChevronUpIcon } from 'lucide-react';
import { DateTime } from 'luxon';
import { Link } from 'react-router';
import { AvatarImage } from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographySmall } from '~/common/components/ui/typography';
import { LINK } from '~/common/config';
import { cn } from '~/common/lib/utils';

interface DiscussionCardProps {
 id: string;
 title: string;
 author: string;
 authorAvatarUrl: string | null;
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
  <Link to={LINK.COMMUNITY(id)} className="h-full">
   <Card className={cn(['h-full', expanded ? 'flex flex-row items-center justify-start' : ''])}>
    <CardHeader className="flex h-full w-full items-start gap-4">
     <Avatar className="size-10 shrink-0 overflow-hidden rounded-full shadow-md">
      <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
      {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} alt={`${author} avatar`} />}
     </Avatar>
     <div className="flex h-full w-full flex-col justify-start gap-1">
      <CardTitle className="line-clamp-2 w-full text-lg">{title}</CardTitle>
      <div className="text-muted-foreground flex flex-wrap gap-1">
       <TypographySmall>{author}</TypographySmall>
       <TypographySmall>·</TypographySmall>
       <TypographySmall>{category}</TypographySmall>
       <TypographySmall>·</TypographySmall>
       <TypographySmall>{DateTime.fromISO(postedAt).toRelative()}</TypographySmall>
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
