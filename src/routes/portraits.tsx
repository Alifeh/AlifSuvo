import { createFileRoute, Link } from "@tanstack/react-router";

import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { byCategory, categoryCover } from "@/lib/work";

export const Route = createFileRoute("/portraits")({
  head: () => ({
    meta: [
      { title: "Portrait Photography in Lisbon — Mara Alves" },
      {
        name: "description",
        content:
          "Natural-light portrait sessions in Lisbon for personal, creative and professional images that still look like you.",
      },
      { property: "og:title", content: "Portrait Photography in Lisbon — Mara Alves" },
      {
        property: "og:description",
        content: "Natural-light portrait sessions in Lisbon that still look like you.",
      },
    ],
  }),
  component: Portraits,
});

function Portraits() {
  return (
    <>
      <PageHeader
        label="Portraits"
        title="A quiet look at you."
        intro="For a new chapter, a milestone, or simply because it has been too long since anyone photographed you properly."
      />

      <ParallaxImage
        src={categoryCover.portraits.src}
        alt={categoryCover.portraits.alt}
        className="h-[60vh] w-full sm:h-[80vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">How it goes</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-3xl leading-[1.4]">
              One hour, one or two locations, and a lot of conversation. The photographs come out of
              the talking, not the posing.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <li>60-minute session, studio or street</li>
              <li>40+ gently edited photographs</li>
              <li>Wardrobe guidance beforehand</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <Gallery items={byCategory("portraits")} />
      </div>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Book a portrait session</h2>
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
