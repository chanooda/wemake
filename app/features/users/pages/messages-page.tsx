import { MessageCircleIcon } from 'lucide-react';

export const meta = () => {
 return [{ title: 'Messages | Wemake' }, { name: 'description', content: 'Your messages' }];
};

const MessagesPage = () => {
 return (
  <div className="flex w-full items-center justify-center">
   <div className="flex flex-col items-center justify-center gap-4">
    <MessageCircleIcon className="text-muted-foreground size-48" />
    <h1 className="text-muted-foreground text-2xl font-medium">
     Click on a message to start a conversation
    </h1>
   </div>
  </div>
 );
};

export default MessagesPage;
