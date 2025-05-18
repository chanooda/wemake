import type { ComponentPropsWithoutRef } from "react";
import { cn } from "~/common/lib/utils";

export function H2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn([
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      ])}
      {...props}
    />
  );
}

export function P({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn(["leading-7", className])} {...props} />;
}

export function TypographyMuted({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(["text-muted-foreground text-sm", className])}
      {...props}
    />
  );
}

export function TypographySmall({
  className,
  ...props
}: ComponentPropsWithoutRef<"small">) {
  return (
    <small className={cn(["text-sm font-medium", className])} {...props} />
  );
}

export function TypographyLarge({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn(["text-lg font-semibold", className])} {...props} />
  );
}
