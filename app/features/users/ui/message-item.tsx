import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/common/components/ui/sidebar";
import { TypographyMuted } from "~/common/components/ui/typography";
import { LINK } from "~/common/config";

interface MessageItemProps {
  userId: string;
  avatarSrc?: string;
  avatarFallback: string;
  name: string;
  lastMessage: string;
}

export const MessageItem = ({
  userId,
  avatarSrc,
  avatarFallback,
  name,
  lastMessage,
}: MessageItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="h-16" asChild>
        <Link to={LINK.MY_MESSAGE(userId)}>
          <div className="flex items-center gap-2">
            <Avatar className="size-12">
              <AvatarImage src={avatarSrc} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <span>{name}</span>
              <TypographyMuted>{lastMessage}</TypographyMuted>
            </div>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

