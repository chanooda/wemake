import type { ReactNode } from "react";

interface PageLayoutProps {
  title: ReactNode;
  subTitle?: string;
}

export const PageTitle = ({ title, subTitle }: PageLayoutProps) => {
  return (
    <div className="from-background to-primary/10 flex flex-col items-center justify-center rounded-md bg-gradient-to-t py-20">
      <h1 className="text-center text-5xl font-bold whitespace-pre-wrap">
        {title}
      </h1>
      {subTitle && (
        <p className="text-foreground text-2xl font-light">{subTitle} </p>
      )}
    </div>
  );
};
