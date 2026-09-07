import type { ReactNode } from "react";

import { Reveal } from "@/components/site/Reveal";

export function PageHeader({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1400px] px-6 pt-40 pb-16 sm:px-10 sm:pt-48 sm:pb-24">
      <Reveal>
        <p className="label-caps">{label}</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
        {intro ? (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </Reveal>
    </header>
  );
}
