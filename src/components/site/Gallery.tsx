import { useState } from "react";

import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import type { Photo } from "@/lib/work";
import { cn } from "@/lib/utils";

export function Gallery({ items }: { items: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
        {items.map((photo, i) => (
          <Reveal
            key={photo.src + i}
            delay={(i % 2) * 90}
            className={cn(photo.orientation === "landscape" && "sm:col-span-2")}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden bg-muted"
              aria-label={`View: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
                  photo.orientation === "landscape"
                    ? "aspect-[3/2]"
                    : "aspect-[4/5]",
                )}
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        photo={index === null ? null : (items[index] ?? null)}
        onClose={() => setIndex(null)}
        onPrev={() => setIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
        onNext={() => setIndex((i) => (i === null ? null : (i + 1) % items.length))}
      />
    </>
  );
}
