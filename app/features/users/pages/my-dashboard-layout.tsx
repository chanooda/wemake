import { ChartColumnIcon, HomeIcon, LightbulbIcon } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router';
import {
 Sidebar,
 SidebarContent,
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarProvider,
} from '~/common/components/ui/sidebar';
import { LINK } from '~/common/config';
import { cn } from '~/common/lib/utils';

const MyDashboardLayout = () => {
 const location = useLocation();

 return (
  <SidebarProvider className="min-h-[calc(100dvh-14rem)]">
   <Sidebar className="pt-16" variant="floating">
    <SidebarContent>
     <SidebarGroup>
      <SidebarGroupContent>
       <SidebarMenu>
        <SidebarMenuItem>
         <SidebarMenuButton asChild>
          <Link
           to={LINK.MY_DASHBOARD}
           className={cn(location.pathname === LINK.MY_DASHBOARD && 'bg-accent')}
          >
           <HomeIcon />
           <span>Home</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
         <SidebarMenuButton asChild>
          <Link
           to={LINK.MY_DASHBOARD_IDEAS}
           className={cn(location.pathname === LINK.MY_DASHBOARD_IDEAS && 'bg-accent')}
          >
           <LightbulbIcon />
           <span>Ideas</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       </SidebarMenu>
      </SidebarGroupContent>
     </SidebarGroup>
     <SidebarGroup>
      <SidebarGroupContent>
       <SidebarGroupLabel>Product Analytics</SidebarGroupLabel>
       <SidebarMenu>
        <SidebarMenuItem>
         <SidebarMenuButton asChild>
          <Link
           to={LINK.MY_DASHBOARD_PRODUCT('1')}
           className={cn(location.pathname === LINK.MY_DASHBOARD_PRODUCT('1') && 'bg-accent')}
          >
           <ChartColumnIcon />
           <span>Product 1</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       </SidebarMenu>
      </SidebarGroupContent>
     </SidebarGroup>
    </SidebarContent>
   </Sidebar>
   <div className="w-full">
    <Outlet />
   </div>
  </SidebarProvider>
 );
};

export default MyDashboardLayout;
