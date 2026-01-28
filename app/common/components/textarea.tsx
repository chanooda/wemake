import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../lib/utils';
import { LabelSet } from './LabelSet';
import { Textarea as ShadcnTextarea } from './ui/textarea';

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
 label: string;
 description: string;
}

export const Textarea = ({ label, description, className, ...rest }: TextareaProps) => {
 return (
  <div className="flex flex-col gap-2">
   <LabelSet label={label} description={description} />
   <ShadcnTextarea className={cn(['resize-none', className])} {...rest} />
  </div>
 );
};
