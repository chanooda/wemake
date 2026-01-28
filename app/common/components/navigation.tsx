import { BellIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router';
import { LINK, dropdownMenus, linkMenus } from '../config';
import { cn } from '../lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { Separator } from './ui/separator';

interface NavigationProps {
 isLoggedIn: boolean;
 hasNotifications?: boolean;
 hasMessages?: boolean;
}

export const Navigation = ({ isLoggedIn, hasMessages, hasNotifications }: NavigationProps) => {
 return (
  <nav className="bg-background/50 fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-20 backdrop-blur">
   <div className="flex items-center">
    <Link to="/" className="text-lg font-bold tracking-tighter">
     WEMAKE
    </Link>
    <Separator orientation="vertical" className="ml-4 !h-6" />
    <NavigationMenu>
     <NavigationMenuList>
      {linkMenus.map((menu) => {
       if ((menu?.items?.length || 0) > 0)
        return (
         <NavigationMenuItem key={menu.name}>
          <Link to={menu.to}>
           <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
           <ul className="grid w-[600px] grid-cols-2 gap-4 p-2">
            {menu.items?.map((item) => {
             return (
              <NavigationMenuItem key={item.to} className={cn([item.isPaid && 'col-span-2'])}>
               <NavigationMenuLink asChild>
                <Link
                 to={item.to}
                 className={cn([
                  'select-none, rounded-md',
                  item.isPaid && 'bg-primary/10 hover:bg-primary/30 focus:bg-primary/30',
                 ])}
                >
                 <span className="font-bold">{item.name}</span>
                 <p className="text-muted-foreground">{item.description}</p>
                </Link>
               </NavigationMenuLink>
              </NavigationMenuItem>
             );
            })}
           </ul>
          </NavigationMenuContent>
         </NavigationMenuItem>
        );
       else {
        return (
         <NavigationMenuItem key={menu.name} className={navigationMenuTriggerStyle()}>
          <Link to={menu.to}>{menu.name}</Link>
         </NavigationMenuItem>
        );
       }
      })}
     </NavigationMenuList>
    </NavigationMenu>
   </div>
   {isLoggedIn ? (
    <div className="flex items-center gap-2">
     <Button size="icon" variant="ghost" asChild>
      <Link to={LINK.MY_NOTIFICATIONS} className="relative">
       {hasNotifications && (
        <span className="absolute top-1 right-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-xs text-white" />
       )}
       <BellIcon />
      </Link>
     </Button>
     <Button size="icon" variant="ghost" asChild>
      <Link to={LINK.MY_MESSAGES} className="relative">
       {hasMessages && (
        <span className="absolute top-1 right-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-xs text-white" />
       )}
       <MessageCircleIcon />
      </Link>
     </Button>
     <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
       <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
       </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
       <DropdownMenuLabel>
        <p>chanooda</p>
        <p className="text-xs text-gray-400">@chanooda</p>
       </DropdownMenuLabel>
       <DropdownMenuSeparator />
       {dropdownMenus('').map((menu, index) => {
        return (
         <DropdownMenuGroup key={index}>
          {menu.items.map((item) => {
           return (
            <DropdownMenuItem asChild key={item.to}>
             <Link className="flex w-full cursor-pointer items-center gap-2" to={item.to}>
              {item.icon}
              {item.name}
             </Link>
            </DropdownMenuItem>
           );
          })}
          {index !== menu.items.length && <DropdownMenuSeparator />}
         </DropdownMenuGroup>
        );
       })}
      </DropdownMenuContent>
     </DropdownMenu>
    </div>
   ) : (
    <div className="flex items-center gap-4">
     <Button asChild variant="secondary">
      <Link to="/auth/login">Login</Link>
     </Button>
     <Button asChild>
      <Link to="/auth/signup">Join</Link>
     </Button>
    </div>
   )}
  </nav>
 );
};
