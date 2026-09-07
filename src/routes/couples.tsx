import { createFileRoute, Link } from "@tanstack/react-router";

import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { byCategory, categoryCover } from "@/lib/work";

export const Route = createFileRoute("/couples")({
  head: () => ({
    meta: [
      { title: "Couple & Engagement Photography in Lisbon — Mara Alves" },
      {
        name: "description",
        content:
          "Intimate couple and engagement sessions photographed at golden hour in Lisbon's viewpoints and old streets.",
      },
      { property: "og:title", content: "Couple & Engagement Photography in Lisbon — Mara Alves" },
      {
        property: "og:description",
        content: "Intimate couple sessions photographed at golden hour in Lisbon.",
      },
    ],
  }),
  component: Couples,
});

function Couples() {
  return (
    <>
      <PageHeader
        label="Couples"
        title="Closeness, not poses."
        intro="Engagements, anniversaries, or no reason at all. We wander at golden hour and I photograph the way you already are with each other."
      />

      <ParallaxImage
        src={categoryCover.couples.src}
        alt={categoryCover.couples.alt}
        className="h-[60vh] w-full sm:h-[80vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">How it goes</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-3xl leading-[1.4]">
              We start where the light is best and simply walk. Ninety minutes later you'll have
              forgotten the camera was there.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <li>90-minute golden-hour session</li>
              <li>50+ gently edited photographs</li>
              <li>Location scouting included</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <Gallery items={byCategory("couples")} />
      </div>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Book a couple session</h2>
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
