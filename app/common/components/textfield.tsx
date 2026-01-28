import type { ComponentPropsWithoutRef } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { TypographyMuted } from './ui/typography';

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
 label: string;
 description: string;
}

export const TextField = ({ label, description, ...rest }: TextFieldProps) => {
 return (
  <div className="flex flex-col gap-2">
   <div className="flex flex-col items-start justify-start">
    <Label className="flex flex-col font-semibold">{label}</Label>
    <TypographyMuted className="">{description}</TypographyMuted>
   </div>
   <Input {...rest} />
  </div>
 );
};
