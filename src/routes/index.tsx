import { createFileRoute, Link } from "@tanstack/react-router";

import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { categoryCover, photos } from "@/lib/work";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Alves — Family & Couple Photographer in Lisbon" },
      {
        name: "description",
        content:
          "Cinematic family, couple and portrait photography in Lisbon. Capturing moments you'll want to relive.",
      },
      { property: "og:title", content: "Mara Alves — Family & Couple Photographer in Lisbon" },
      {
        property: "og:description",
        content:
          "Cinematic family, couple and portrait photography in Lisbon. Capturing moments you'll want to relive.",
      },
    ],
  }),
  component: Index,
});

const sections = [
  {
    to: "/families" as const,
    label: "01",
    title: "Families",
    copy: "Unhurried afternoons, real noise, small hands.",
    photo: categoryCover.families,
  },
  {
    to: "/couples" as const,
    label: "02",
    title: "Couples",
    copy: "The look you give each other when no one is watching.",
    photo: categoryCover.couples,
  },
  {
    to: "/portraits" as const,
    label: "03",
    title: "Portraits",
    copy: "Quiet, honest frames of who you are right now.",
    photo: categoryCover.portraits,
  },
];

function Index() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <ParallaxImage
          src={hero}
          alt="A family walking a Lisbon street at golden hour"
          priority
          strength={0.22}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/35 via-foreground/10 to-foreground/55" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24">
          <div className="mx-auto w-full max-w-[1400px]">
            <p className="animate-fade-in text-[0.68rem] tracking-[0.34em] text-background/75 uppercase">
              Lisboa · Portugal
            </p>
            <h1 className="mt-6 max-w-4xl animate-fade-in text-5xl leading-[1.02] text-background sm:text-7xl lg:text-[5.5rem]">
              Capturing moments you'll want to relive.
            </h1>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/portfolio"
                className="border border-background/70 px-8 py-3.5 text-[0.7rem] tracking-[0.28em] text-background uppercase transition-colors duration-500 hover:bg-background hover:text-foreground"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">The approach</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-3xl leading-[1.35] sm:text-4xl">
              I photograph the in-between — the second before the laugh, the hand that reaches out,
              the light in a Lisbon doorway. No stiff poses, no forced smiles. Just your people, as
              they actually are.
            </p>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground">
              Sessions happen where you feel most yourself: at home, on the tiles of Alfama, or with
              your feet in the Atlantic. You get gently edited, timeless images made to be printed
              and kept.
            </p>
          </Reveal>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.to} className="px-6 pb-32 sm:px-10 sm:pb-44">
          <div
            className={`mx-auto flex max-w-[1400px] flex-col gap-10 lg:items-end lg:gap-20 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <Reveal className="lg:w-[62%]">
              <Link to={section.to} className="group block overflow-hidden">
                <ParallaxImage
                  src={section.photo.src}
                  alt={section.photo.alt}
                  strength={0.1}
                  className="aspect-[4/5] w-full lg:aspect-[3/2]"
                />
              </Link>
            </Reveal>
            <Reveal delay={140} className="lg:w-[38%] lg:pb-6">
              <p className="label-caps">{section.label}</p>
              <h2 className="mt-5 text-4xl sm:text-5xl">{section.title}</h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                {section.copy}
              </p>
              <Link
                to={section.to}
                className="link-underline mt-8 inline-block text-[0.7rem] tracking-[0.28em] uppercase"
              >
                View gallery
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-t border-border px-6 py-32 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label-caps">Recent frames</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {photos.slice(0, 4).map((photo, i) => (
              <Reveal key={photo.src} delay={i * 90}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <Link
              to="/portfolio"
              className="link-underline mt-12 inline-block text-[0.7rem] tracking-[0.28em] uppercase"
            >
              Full portfolio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-6xl">Let's make something you'll keep.</h2>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Sessions are limited each month so every story gets the time it deserves.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Book a session
          </Link>
        </Reveal>
      </section>
    </>
  );
}
