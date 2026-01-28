import { DotIcon, EyeIcon, HeartIcon, LockIcon } from 'lucide-react';
import { DateTime } from 'luxon';
import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographySmall } from '~/common/components/ui/typography';
import { LINK } from '~/common/config';
import { cn } from '~/common/lib/utils';

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
  <Link to={LINK.IDEA(id)} className="h-full">
   <Card className="h-full">
    <CardHeader className="h-full">
     <CardTitle
      className={cn([
       'line-clamp-3 h-full text-lg',
       claimed ? 'bg-foreground selection:bg-foreground' : '',
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
      <TypographySmall>{DateTime.fromISO(postedAt).toRelative()}</TypographySmall>
     </div>
    </CardContent>
    <CardFooter className="mt-auto justify-end gap-2">
     <Button
      variant="outline"
      className="cursor-pointer"
      onClick={(e) => e.preventDefault()}
      size="sm"
     >
      <HeartIcon /> {likesCount}
     </Button>
     {claimed ? (
      <Button
       size="sm"
       onClick={(e) => {
        e.preventDefault();
       }}
       variant="secondary"
       className="cursor-not-allowed"
      >
       <LockIcon /> Claimed
      </Button>
     ) : (
      <Button className="cursor-pointer" size="sm">
       Claim idea now &rarr;
      </Button>
     )}
    </CardFooter>
   </Card>
  </Link>
 );
};
