import { SendIcon } from "lucide-react";
import { Form } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { TypographyMuted } from "~/common/components/ui/typography";
import { MessageBubble } from "~/features/users/ui/message-bubble";

export const meta = () => {
  return [
    { title: "Message | Wemake" },
    { name: "description", content: "View message" },
  ];
};

const MessagePage = () => {
  return (
    <div className="flex w-full flex-col">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Avatar className="size-18">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-lg font-bold">Chanooda</span>
              <TypographyMuted>2 days ago</TypographyMuted>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <div className="flex h-full flex-col justify-start gap-4 overflow-y-scroll py-8">
        {Array.from({ length: 1 }).map((_, index) => (
          <MessageBubble
            key={index}
            avatarSrc="https://github.com/shadcn.png"
            avatarFallback="CN"
            message="this is a message from steve jobs in heaven, make sure to reply because if you don't, you will be punished by the gods."
            isOwn={index % 2 === 0}
          />
        ))}
      </div>
      <Form className="flex items-center gap-4">
        <Textarea
          placeholder="Write a message..."
          className="resize-none"
          rows={4}
        />
        <Button size="icon">
          <SendIcon size={4} />
        </Button>
      </Form>
    </div>
  );
};

export default MessagePage;
