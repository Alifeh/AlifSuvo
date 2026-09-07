import { createFileRoute, Link } from "@tanstack/react-router";

import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { byCategory, categoryCover } from "@/lib/work";

export const Route = createFileRoute("/families")({
  head: () => ({
    meta: [
      { title: "Family Photography in Lisbon — Mara Alves" },
      {
        name: "description",
        content:
          "Relaxed, documentary family photography sessions in Lisbon — at home, in the park, or by the sea.",
      },
      { property: "og:title", content: "Family Photography in Lisbon — Mara Alves" },
      {
        property: "og:description",
        content: "Relaxed, documentary family sessions photographed in natural light in Lisbon.",
      },
    ],
  }),
  component: Families,
});

function Families() {
  return (
    <>
      <PageHeader
        label="Families"
        title="The everyday, made permanent."
        intro="A family session is mostly play. We walk, they climb, someone gets tired — and in the middle of it all are the frames you'll still love in twenty years."
      />

      <ParallaxImage
        src={categoryCover.families.src}
        alt={categoryCover.families.alt}
        className="h-[60vh] w-full sm:h-[80vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">How it goes</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-3xl leading-[1.4]">
              Around ninety minutes, wherever your family is most itself. I direct softly — a walk
              here, a whispered secret there — and then step back and let it happen.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <li>90-minute session in Lisbon or nearby</li>
              <li>60+ gently edited photographs</li>
              <li>Private online gallery within two weeks</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <Gallery items={byCategory("families")} />
      </div>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Book a family session</h2>
          <Link
            to="/contact"
            className="mt-9 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Check availability
          </Link>
        </Reveal>
      </section>
    </>
  );
}
