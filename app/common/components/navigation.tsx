import { Link } from "react-router";
import { menus } from "../config";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

interface NavigationProps {
  isLoggedIn: boolean;
}

export const Navigation = ({ isLoggedIn }: NavigationProps) => {
  return (
    <nav className="bg-background/50 fixed top-0 left-0 flex h-16 w-full items-center justify-between px-20 backdrop-blur">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold tracking-tighter">
          WEMAKE
        </Link>
        <Separator orientation="vertical" className="ml-4 !h-6" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => {
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
                            <NavigationMenuItem
                              key={item.to}
                              className={cn([item.isPaid && "col-span-2"])}
                            >
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.to}
                                  className={cn([
                                    "select-none, rounded-md",
                                    item.isPaid &&
                                      "bg-primary/10 hover:bg-primary/30 focus:bg-primary/30",
                                  ])}
                                >
                                  <span className="font-bold">{item.name}</span>
                                  <p className="text-muted-foreground">
                                    {item.description}
                                  </p>
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
                  <NavigationMenuItem
                    key={menu.name}
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to={menu.to}>{menu.name}</Link>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/signup">Join</Link>
          </Button>
        </div>
      ) : null}
    </nav>
  );
};
