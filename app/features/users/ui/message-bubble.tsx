import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
import { cn } from '~/common/lib/utils';

interface MessageBubbleProps {
 avatarSrc?: string;
 avatarFallback: string;
 message: string;
 isOwn?: boolean;
}

export const MessageBubble = ({
 avatarSrc,
 avatarFallback,
 message,
 isOwn = false,
}: MessageBubbleProps) => {
 return (
  <div className={cn('flex items-end gap-4', isOwn ? 'flex-row-reverse' : '')}>
   <Avatar className="size-10">
    <AvatarImage src={avatarSrc} />
    <AvatarFallback>{avatarFallback}</AvatarFallback>
   </Avatar>

   <div
    className={cn(
     'bg-accent flex w-1/4 flex-col gap-2 rounded-xl p-4',
     isOwn ? 'bg-primary text-primary-foreground ml-auto rounded-br-none' : 'rounded-bl-none',
    )}
   >
    <p>{message}</p>
   </div>
  </div>
 );
};
