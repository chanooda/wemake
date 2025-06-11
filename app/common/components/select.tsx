import { useState, type ComponentPropsWithoutRef } from "react";
import { Label } from "./ui/label";
import * as ShadCnSelect from "./ui/select";
import { TypographyMuted } from "./ui/typography";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  description: string;
  value?: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
  dir?: "ltr" | "rtl";
  placeholder?: string;
}

export const Select = ({
  options,
  label,
  description,
  placeholder,
  ...rest
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-col items-start justify-start">
        <Label
          className="flex flex-col font-semibold"
          onClick={() => setIsOpen(true)}
        >
          {label}
        </Label>
        <TypographyMuted className="">{description}</TypographyMuted>
      </div>
      <ShadCnSelect.Select open={isOpen} onOpenChange={setIsOpen} {...rest}>
        <ShadCnSelect.SelectTrigger className="w-full">
          <ShadCnSelect.SelectValue placeholder={placeholder} />
        </ShadCnSelect.SelectTrigger>
        <ShadCnSelect.SelectContent>
          {options.map((option) => {
            return (
              <ShadCnSelect.SelectItem value={option.value} key={option.value}>
                {option.label}
              </ShadCnSelect.SelectItem>
            );
          })}
        </ShadCnSelect.SelectContent>
      </ShadCnSelect.Select>
    </div>
  );
};
