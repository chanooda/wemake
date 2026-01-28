import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import {
 Card,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '~/common/components/ui/card';
import { TypographySmall } from '~/common/components/ui/typography';
import { LINK } from '~/common/config';

interface ProductCardProps {
 title: string;
 description: string;
 reviews: number;
 views: number;
 votes: number;
 id: string;
}

export function ProductCard({ id, title, description, reviews, views, votes }: ProductCardProps) {
 return (
  <Link to={LINK.PRODUCT(id)} className="w-full">
   <Card className="space-between flex flex-row gap-4 px-6">
    <CardHeader className="w-full p-0">
     <CardTitle className="text-lg">{title}</CardTitle>
     <CardDescription className="line-clamp-4">{description}</CardDescription>
     <div className="text-muted-foreground flex gap-2">
      <div className="flex items-center gap-1">
       <MessageCircleIcon size={16} />
       <TypographySmall>{reviews}</TypographySmall>
      </div>
      <div className="flex items-center gap-1">
       <EyeIcon size={16} />
       <TypographySmall>{views}</TypographySmall>
      </div>
     </div>
    </CardHeader>
    <CardFooter className="p-0">
     <Button
      variant="outline"
      className="flex h-12 flex-col gap-1"
      onClick={(e) => {
       e.preventDefault();
      }}
     >
      <ChevronUpIcon size={4} />
      <TypographySmall>{votes}</TypographySmall>
     </Button>
    </CardFooter>
   </Card>
  </Link>
 );
}
