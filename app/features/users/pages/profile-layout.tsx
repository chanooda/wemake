import { Form, Link, NavLink, Outlet } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button, buttonVariants } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { TypographyMuted } from "~/common/components/ui/typography";
import { LINK } from "~/common/config";
import { cn } from "~/common/lib/utils";
import type { Route } from "./+types/profile-layout";

const ProfileLayout = ({ params: { username } }: Route.ComponentProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <Avatar className="size-48">
          <AvatarImage src="https://github.com/chanooda.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">Chanooda</span>
            <Button asChild variant="outline">
              <Link to={LINK.MY_SETTINGS}>Edit Profile</Link>
            </Button>
            <Button variant="secondary">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                  <DialogDescription>
                    Send a message to Chanooda
                  </DialogDescription>
                  <Form className="flex flex-col gap-4">
                    <Textarea
                      placeholder="Enter your message"
                      className="resize-none"
                      rows={4}
                    />
                    <Button className="ml-auto">Send</Button>
                  </Form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <TypographyMuted>@chanooda</TypographyMuted>
            <Badge className="rounded-full" variant="secondary">
              Entrepreneur
            </Badge>
            <Badge className="rounded-full" variant="secondary">
              100 followers
            </Badge>
            <Badge className="rounded-full" variant="secondary">
              100 following
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {[
          { label: "About", link: LINK.USER(username ?? "") },
          { label: "Products", link: LINK.USER_PRODUCTS(username ?? "") },
          { label: "Posts", link: LINK.USER_POSTS(username ?? "") },
        ].map((item) => (
          <NavLink
            end
            key={item.label}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "outline" }),
                isActive && "bg-accent text-foreground",
              )
            }
            to={item.link}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="max-w-screen-md">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
