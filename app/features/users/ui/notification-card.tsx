import { EyeIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographyMuted } from '~/common/components/ui/typography';
import { cn } from '~/common/lib/utils';

interface NotificationCardProps {
 avatarUrl: string;
 avatarFallback: string;
 userName: string;
 message: string;
 timestamp: string;
 seen: boolean;
}

export const NotificationCard = ({
 avatarUrl,
 avatarFallback,
 userName,
 message,
 timestamp,
 seen,
}: NotificationCardProps) => {
 return (
  <Card className={cn(['w-1/3', !seen ? 'bg-red-400/20' : ''])}>
   <CardHeader className="flex flex-row items-start gap-4">
    <Avatar className="size-12">
     <AvatarImage src={avatarUrl} />
     <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
    <div className="mt-1 flex flex-col gap-1">
     <CardTitle>
      {userName} {message}
     </CardTitle>
     <TypographyMuted>{timestamp}</TypographyMuted>
    </div>
   </CardHeader>
   <CardFooter className="justify-end">
    <Button size="icon" variant="outline">
     <EyeIcon />
    </Button>
   </CardFooter>
  </Card>
 );
};
