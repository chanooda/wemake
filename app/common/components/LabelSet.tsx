import { Label } from "./ui/label";
import { TypographyMuted } from "./ui/typography";

export const LabelSet = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Label className="flex flex-col font-semibold">{label}</Label>
      <TypographyMuted className="">{description}</TypographyMuted>
    </div>
  );
};
