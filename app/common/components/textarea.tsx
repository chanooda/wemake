import type { ComponentPropsWithoutRef } from "react";
import { Label } from "./ui/label";
import { Textarea as ShadcnTextarea } from "./ui/textarea";
import { TypographyMuted } from "./ui/typography";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  description: string;
}

export const Textarea = ({ label, description, ...rest }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start justify-start">
        <Label className="flex flex-col font-semibold">{label}</Label>
        <TypographyMuted className="">{description}</TypographyMuted>
      </div>
      <ShadcnTextarea {...rest} />
    </div>
  );
};
