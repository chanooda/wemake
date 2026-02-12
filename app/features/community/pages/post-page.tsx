import { ChevronUpIcon } from 'lucide-react';
import { DateTime } from 'luxon';
import { Form, Link, data } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbSeparator,
} from '~/common/components/ui/breadcrumb';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/common/components/ui/card';
import { Textarea } from '~/common/components/ui/textarea';
import { TypographySmall } from '~/common/components/ui/typography';
import { LINK, getMetadataTitle } from '~/common/config';
import { idSchema } from '~/common/model';
import { getPost, getReplies } from '~/entities/community';
import { Reply } from '../ui/reply';
import type { Route } from './+types/post-page';

export const meta = ({ data: { post } }: Route.MetaArgs) => {
 return [
  { title: getMetadataTitle(post.title) },
  {
   name: 'description',
   content: `This is the details page for post ${post.title}`,
  },
 ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
 const { postId } = params;

 const { success, data: parsedData } = idSchema.safeParse({ id: postId });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const postFetch = getPost(parsedData.id);
 const repliesFetch = getReplies(parsedData.id);

 const [post, replies] = await Promise.all([postFetch, repliesFetch]);

 if (!replies) {
  throw data({ error_code: 'not Found' }, { status: 404 });
 }
 if (!post) {
  throw data({ error_code: 'not Found' }, { status: 404 });
 }

 return { post, replies };
};

const PostPage = ({ loaderData }: Route.ComponentProps) => {
 const { post, replies } = loaderData;
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
       <Link to={LINK.COMMUNITY_TOPIC(post.topic_slug)}>{post.topic_name}</Link>
      </BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator />
     <BreadcrumbItem>
      <BreadcrumbLink asChild>
       <Link to={LINK.COMMUNITY(post.post_id.toString())}>{post.title}</Link>
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
      <TypographySmall>{post.upvotes}</TypographySmall>
     </Button>
     <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2">
       <h1 className="text-3xl font-bold">{post.title}</h1>
       <div className="text-muted-foreground flex gap-2">
        <TypographySmall>{post.author_name}</TypographySmall>
        <TypographySmall>•</TypographySmall>
        <TypographySmall>{DateTime.fromISO(post.created_at).toRelative()}</TypographySmall>
        <TypographySmall>•</TypographySmall>
        <TypographySmall>{post.reply_count} replies</TypographySmall>
       </div>
       <p>{post.content}</p>
      </div>
      <Form className="flex gap-4">
       <Avatar className="size-12">
        <AvatarImage src={post.author_avatar} />
        <AvatarFallback>CN</AvatarFallback>
       </Avatar>
       <div className="flex w-full flex-col items-end gap-4">
        <Textarea className="max-h-[300px] resize-none" placeholder="Write" />
        <Button>Reply</Button>
       </div>
      </Form>
      <div>
       <span className="font-bold">{replies.length} Replies</span>
       <div className="mt-8 flex flex-col gap-4">
        {replies.map((reply) => (
         <Reply
          key={reply.post_reply_id}
          author={reply.user.name}
          authorAvatarUrl={reply.user.avatar}
          postedAt={reply.created_at}
          content={reply.reply}
          topLevel
          replies={reply.post_replies}
         />
        ))}
       </div>
      </div>
     </div>
    </div>
    <aside className="col-span-2">
     <Card>
      <CardHeader className="flex items-center gap-4">
       <Avatar className="size-12">
        <AvatarFallback>CN</AvatarFallback>
        <AvatarImage src={post.author_avatar} />
       </Avatar>
       <div className="flex flex-col">
        <span className="text-lg font-bold">{post.author_name}</span>
        <Badge variant="secondary" className="rounded-full font-semibold">
         {post.author_role}
        </Badge>
       </div>
      </CardHeader>
      <CardContent>
       <p className="text-sm">
        🎂 Joined {DateTime.fromISO(post.author_created_at).toRelative()} ago <br />
        🚀 Launched {post.author_product_count} projects <br />
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
