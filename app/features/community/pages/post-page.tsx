import { ChevronUpIcon } from "lucide-react";
import { Form, Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { TypographySmall } from "~/common/components/ui/typography";
import { LINK, getMetadataTitle } from "~/common/config";
import { Reply } from "../ui/Reply";
import type { Route } from "./+types/post-page";

export const meta = ({ params: { postId } }: Route.MetaArgs) => {
  return [
    { title: getMetadataTitle(postId) },
    {
      name: "description",
      content: `This is the details page for post #${postId}`,
    },
  ];
};

const PostPage = ({ params: { postId } }: Route.ComponentProps) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={LINK.COMMUNITIES}>Community</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={LINK.COMMUNITY_TOPIC("productivity")}>
                Productivity
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={LINK.COMMUNITY(postId)}>
                what is the best productivity tool
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 grid grid-cols-6 gap-32">
        <div className="col-span-4 flex gap-8">
          <Button
            variant="outline"
            className="flex h-12 flex-col gap-1"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ChevronUpIcon size={4} />
            <TypographySmall>100</TypographySmall>
          </Button>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">
                what is the best productivity tool
              </h1>
              <div className="text-muted-foreground flex gap-2">
                <TypographySmall>@chanooda</TypographySmall>
                <TypographySmall>•</TypographySmall>
                <TypographySmall>12 hours ago</TypographySmall>
                <TypographySmall>•</TypographySmall>
                <TypographySmall>12 replies</TypographySmall>
              </div>
              <p>
                Hello, I'm looking for the best productivity tool for my work.
                I'm a developer and I need a tool that can help me with my work.
                and I need a tool that can help me with my work. and I need a
                tool that can help me with my work. for more information, please
                contact me at chanooda@gmail.com and my phone number is
                01010101010. thank you for your time. best regards, chanooda
              </p>
            </div>
            <Form className="flex gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/chanooda.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex w-full flex-col items-end gap-4">
                <Textarea
                  className="max-h-[300px] resize-none"
                  placeholder="Write"
                />
                <Button>Reply</Button>
              </div>
            </Form>
            <div>
              <span className="font-bold">10 Replies</span>
              <div className="mt-8 flex flex-col gap-4">
                <Reply
                  topLevel
                  author="chanooda"
                  authorAvatarUrl="https://github.com/chanooda.png"
                  postedAt="12 hours ago"
                  content="Hello, I'm looking for the best productivity tool for my work. I'm a developer and I need a tool that can help me with my work. and I need a tool that can help me with my work. and I need a tool that can help me with my work. for more information, please contact me at chanooda@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-2">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarFallback>CN</AvatarFallback>
                <AvatarImage src="https://github.com/chanooda.png" />
              </Avatar>
              <div className="flex flex-col">
                <span className="text-lg font-bold">chanooda</span>
                <Badge
                  variant="secondary"
                  className="rounded-full font-semibold"
                >
                  Entrepreneur
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                🎂 Joined 12 hours ago <br />
                🚀 Launched 12 projects <br />
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Follow
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default PostPage;
