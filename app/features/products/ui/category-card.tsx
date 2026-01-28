import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '~/common/components/ui/card';
import { LINK } from '~/common/config';

interface CategoryCardProps {
 id: string;
 title: string;
 description: string;
}

export function CategoryCard({ id, title, description }: CategoryCardProps) {
 return (
  <Link to={LINK.PRODUCT_CATEGORY(id)} className="h-full">
   <Card className="h-full">
    <CardHeader>
     <CardTitle className="flex items-center">
      {title} <ChevronRightIcon />
     </CardTitle>
    </CardHeader>
    <CardContent>
     <CardDescription className="line-clamp-3">{description}</CardDescription>
    </CardContent>
   </Card>
  </Link>
 );
}
