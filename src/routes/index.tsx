import { createFileRoute, Link } from "@tanstack/react-router";

import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { photos } from "@/lib/work";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alif Suvo — Photographer & Visual Storyteller" },
      {
        name: "description",
        content:
          "Photography for people, places and moments that deserve more than a memory.",
      },
      { property: "og:title", content: "Alif Suvo — Photographer & Visual Storyteller" },
      {
        property: "og:description",
        content:
          "Photography for people, places and moments that deserve more than a memory.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alifsuvo.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://alifsuvo.lovable.app/" }],
  }),
  component: Index,
});

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
              Photographer &amp; visual storyteller
            </p>
            <h1 className="mt-6 max-w-4xl animate-fade-in text-5xl leading-[1.02] text-background sm:text-7xl lg:text-[5.5rem]">
              Keep the feeling.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
              Photography for people, places and moments that deserve more than a memory.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/work"
                className="border border-background/70 px-8 py-3.5 text-[0.7rem] tracking-[0.28em] text-background uppercase transition-colors duration-500 hover:bg-background hover:text-foreground"
              >
                View work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">Alif Suvo</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-3xl leading-[1.35] sm:text-4xl">
              An independent photographer and visual storyteller, drawn to people, places and the
              moments that hold their feeling.
            </p>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground">
              Working wherever the work takes me.
            </p>
          </Reveal>
        </div>
      </section>

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
              to="/work"
              className="link-underline mt-12 inline-block text-[0.7rem] tracking-[0.28em] uppercase"
            >
              Explore the work
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-32 sm:px-10 sm:py-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label-caps">Field Notes</p>
            <h2 className="mt-6 max-w-2xl text-4xl leading-tight sm:text-5xl">
              Notes from behind the camera.
            </h2>
          </Reveal>

          <div className="mt-20 space-y-24 sm:space-y-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
              <Reveal>
                <p className="label-caps">Behind the frame</p>
              </Reveal>
              <div className="space-y-14">
                {[
                  {
                    photo: photos[1]!,
                    note: "The light lasted only a few minutes. They stopped talking without being asked, and the frame made itself.",
                  },
                  {
                    photo: photos[3]!,
                    note: "A small, ordinary gesture — the kind that disappears if you announce it first.",
                  },
                  {
                    photo: photos[6]!,
                    note: "Old steps, two sisters, no direction given. Some frames are simply noticed, not made.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.photo.src} delay={i * 100}>
                    <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        loading="lazy"
                        className="aspect-[4/5] w-40 object-cover"
                      />
                      <p className="max-w-md self-center text-base leading-relaxed text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
              <Reveal>
                <p className="label-caps">The feeling</p>
              </Reveal>
              <div className="space-y-12">
                {[
                  {
                    title: "Natural & playful",
                    body: "Nothing rehearsed. The best frames happen when people forget the camera and simply stay themselves.",
                  },
                  {
                    title: "Quiet & intimate",
                    body: "Photographed from a small distance, so the moments stay honest and unhurried.",
                  },
                  {
                    title: "Cinematic & expressive",
                    body: "Light, weather and atmosphere treated as part of the story — not a backdrop to it.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 100}>
                    <div className="border-t border-border pt-8">
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
              <Reveal>
                <p className="label-caps">Visual notes</p>
              </Reveal>
              <div className="space-y-10">
                {[
                  "Morning light through tall windows — worth arriving early for.",
                  "Wind is not a problem. It is movement the frame would otherwise lack.",
                  "The in-between moments — walking, waiting, laughing at nothing — carry the most feeling.",
                  "Overcast days make the softest portraits.",
                ].map((note, i) => (
                  <Reveal key={note} delay={i * 80}>
                    <p className="border-t border-border pt-6 font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                      {note}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-6xl">Let's make something you'll keep.</h2>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Contact
          </Link>
        </Reveal>
      </section>
    </>
  );
}
