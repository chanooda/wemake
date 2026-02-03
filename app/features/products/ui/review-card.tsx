import { Avatar } from '@radix-ui/react-avatar';
import { DateTime } from 'luxon';
import { Rating } from '~/common/components/rating';
import { AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';

interface ReviewCardProps {
 name: string;
 username: string;
 avatar: string | null;
 created_at: string;
 rating: number;
 content: string;
}

export function ReviewCard({
 name,
 username,
 avatar,
 created_at,
 rating,
 content,
}: ReviewCardProps) {
 return (
  <div className="flex flex-col gap-4">
   <div className="flex items-center gap-2">
    <Avatar className="h-10 w-10 overflow-hidden rounded-full">
     <AvatarFallback>{name.charAt(0)}</AvatarFallback>
     {avatar && <AvatarImage src={avatar} />}
    </Avatar>
    <div className="flex flex-col">
     <p className="text-lg font-bold">{name}</p>
     <p className="text-muted-foreground text-sm">{username}</p>
    </div>
   </div>
   <div>
    <Rating value={rating} />
   </div>
   <div>
    <p className="text-muted-foreground">{content}</p>
    <p className="text-muted-foreground mt-2 text-xs">
     {DateTime.fromISO(created_at).toRelative()}
    </p>
   </div>
  </div>
 );
}
