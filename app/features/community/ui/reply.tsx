import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  author: string;
  authorAvatarUrl: string;
  postedAt: string;
  content: string;
  topLevel?: boolean;
}

export const Reply = ({
  author,
  authorAvatarUrl,
  postedAt,
  content,
  topLevel = false,
}: ReplyProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleClickReply = () => {
    setIsReplyOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Avatar className="size-12">
          <AvatarFallback>CN</AvatarFallback>
          <AvatarImage src={authorAvatarUrl} />
        </Avatar>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{author}</span>
            <span>•</span>
            <span className="text-muted-foreground text-sm">{postedAt}</span>
          </div>
          <p className="text-foreground text-sm">{content}</p>
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" onClick={handleClickReply}>
              <MessageCircle size={4} /> Reply
            </Button>
          </div>
        </div>
      </div>
      {isReplyOpen && (
        <Form className="mt-4 flex gap-4">
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
      )}
      {topLevel && (
        <div className="pl-12">
          <Reply
            author="chanooda"
            authorAvatarUrl="https://github.com/chanooda.png"
            postedAt="12 hours ago"
            content="Hello, I'm looking for the best productivity tool for my work. I'm a developer and I need a tool that can help me with my work. and I need a tool that can help me with my work. and I need a tool that can help me with my work. for more information, please contact me at chanooda@gmail.com"
          />
        </div>
      )}
    </div>
  );
};
