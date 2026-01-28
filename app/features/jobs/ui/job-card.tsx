import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { DateTime } from 'luxon';
import { Link } from 'react-router';
import { AvatarFallback } from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographyMuted } from '~/common/components/ui/typography';
import { LINK } from '~/common/config';

interface JobCardProps {
 id: string;
 company: string;
 companyLogoUrl: string;
 companyHq: string;
 title: string;
 postedAt: string;
 type: string;
 positionLocation: string;
 salaryRange: string;
}

export const JobCard = ({
 company,
 companyLogoUrl,
 companyHq,
 title,
 postedAt,
 type,
 positionLocation,
 salaryRange,
 id,
}: JobCardProps) => {
 return (
  <Link to={LINK.JOB(id)}>
   <Card>
    <CardHeader className="gap-4">
     <div className="flex items-center gap-3">
      <Avatar className="size-8 shrink-0">
       <AvatarImage src={companyLogoUrl} />
       <AvatarFallback>{company.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="space-x-2">
       <span className="text-accent-foreground font-semibold">{company}</span>
       <span className="text-muted-foreground text-xs">
        {DateTime.fromISO(postedAt).toRelative()}
       </span>
      </div>
     </div>
     <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
     <div className="flex flex-wrap items-center gap-1.5">
      <Badge variant="outline">{type}</Badge>
      <Badge variant="outline">{positionLocation}</Badge>
     </div>
    </CardContent>
    <CardFooter className="justify-between">
     <div className="flex flex-col">
      <TypographyMuted className="text-xs">{salaryRange}</TypographyMuted>
      <TypographyMuted className="text-xs">{companyHq}</TypographyMuted>
     </div>
     <Button className="cursor-pointer" variant="secondary">
      Apply now
     </Button>
    </CardFooter>
   </Card>
  </Link>
 );
};
