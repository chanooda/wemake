import { Outlet } from 'react-router';
import {
 Sidebar,
 SidebarContent,
 SidebarMenu,
 SidebarProvider,
} from '~/common/components/ui/sidebar';
import { MessageItem } from '~/features/users/ui/message-item';

const MessagesLayout = () => {
 return (
  <SidebarProvider className="h-[calc(100dvh-14rem)] min-h-[calc(100dvh-14rem)] overflow-hidden">
   <Sidebar className="pt-16" variant="floating">
    <SidebarContent>
     <SidebarMenu>
      {Array.from({ length: 20 }).map((_, index) => (
       <MessageItem
        key={index}
        userId={index.toString()}
        avatarSrc="https://github.com/shadcn.png"
        avatarFallback="CN"
        name="Chanooda"
        lastMessage="Last message 0"
       />
      ))}
     </SidebarMenu>
    </SidebarContent>
   </Sidebar>
   <Outlet />
  </SidebarProvider>
 );
};

export default MessagesLayout;
