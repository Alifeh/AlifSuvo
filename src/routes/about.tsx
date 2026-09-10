import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alif Suvo" },
      {
        name: "description",
        content:
          "About Alif Suvo, an independent photographer and visual storyteller currently working from Lisbon.",
      },
      { property: "og:title", content: "About — Alif Suvo" },
      {
        property: "og:description",
        content: "Independent photography and visual storytelling by Alif Suvo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alifsuvo.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://alifsuvo.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="Alif Suvo"
        intro="Independent photographer and visual storyteller. Currently working from Lisbon."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-40">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">The approach</p>
          </Reveal>
          <Reveal delay={120} className="max-w-2xl">
            <p className="font-display text-3xl leading-[1.4] sm:text-4xl">Keep the feeling.</p>
            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Photography for people, places and moments that deserve more than a memory.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I work quietly. Sessions are unhurried and unposed, built around how people actually
              are together rather than a list of arrangements. Light, distance and timing do most of
              the work; direction is minimal, and only when it helps someone feel at ease.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The editing follows the same idea — natural tones, nothing overworked, images that
              still look like the day they were made.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Say hello.</h2>
          <Link
            to="/contact"
            className="mt-9 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
