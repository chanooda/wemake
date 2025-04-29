import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the top categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: "/products/promote",
        isPaid: true,
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job in our community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find an internship in our community",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: "/jobs/submit",
        isPaid: true,
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export const Navigation = () => {
  return (
    <nav className="w-full flex items-center h-16 fixed top-0 left-0 bg-background/50 backdrop-blur px-20">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => {
              if ((menu?.items?.length || 0) > 0)
                return (
                  <NavigationMenuItem key={menu.to}>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="w-[600px] grid grid-cols-2 gap-4">
                        {menu.items?.map((item) => {
                          return (
                            <NavigationMenuItem key={item.to}>
                              <NavigationMenuLink href={item.to} asChild>
                                <Link to={item.to}>
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
                  <NavigationMenuItem>
                    <NavigationMenuLink key={menu.to} href={menu.to}>
                      {menu.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
