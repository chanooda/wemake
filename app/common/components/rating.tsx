import { StarIcon } from 'lucide-react';
import { cn } from '../lib';

export const Rating = ({ value }: { value: number }) => {
 return (
  <div className="gap-01 flex">
   {new Array(5).fill(0).map((_, index) => {
    return (
     <StarIcon
      key={index}
      size={20}
      className={cn(
       'fill-yellow-400 text-yellow-400',
       index < value ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-400 text-gray-400',
      )}
     />
    );
   })}
  </div>
 );
};
