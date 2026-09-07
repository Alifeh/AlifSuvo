import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import { photos, type Category } from "@/lib/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Mara Alves Photography, Lisbon" },
      {
        name: "description",
        content:
          "A gallery of family, couple and portrait sessions photographed in Lisbon and along the Portuguese coast.",
      },
      { property: "og:title", content: "Portfolio — Mara Alves Photography, Lisbon" },
      {
        property: "og:description",
        content: "Family, couple and portrait sessions photographed in Lisbon.",
      },
    ],
  }),
  component: Portfolio,
});

const filters: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "families", label: "Families" },
  { key: "couples", label: "Couples" },
  { key: "portraits", label: "Portraits" },
];

function Portfolio() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        label="Selected work"
        title="A record of real afternoons."
        intro="Every session is photographed on location, in natural light, and edited in a warm, timeless palette."
      >
        <div className="mt-12 flex flex-wrap gap-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={cn(
                "text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500",
                active === filter.key
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-[1400px] px-6 pb-36 sm:px-10 sm:pb-48">
        <Gallery items={items} />
      </div>
    </>
  );
}
