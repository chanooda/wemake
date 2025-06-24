import { StarIcon } from "lucide-react";

export const Rating = () => {
  return (
    <div className="gap-01 flex">
      {new Array(5).fill(0).map((_, index) => {
        return (
          <StarIcon
            key={index}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        );
      })}
    </div>
  );
};
