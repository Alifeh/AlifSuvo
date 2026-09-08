import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mara Alves — Lisbon Photographer" },
      {
        name: "description",
        content:
          "Mara Alves is a Lisbon-based photographer making unhurried, natural-light family, couple and portrait pictures.",
      },
      { property: "og:title", content: "About Mara Alves — Lisbon Photographer" },
      {
        property: "og:description",
        content: "Unhurried, natural-light photography made in Lisbon and along the coast.",
      },
    ],
  }),
  component: About,
});

const places = [
  "Alfama & Graça",
  "Príncipe Real",
  "Praia do Guincho",
  "Sintra woodland",
  "Your own home",
  "Cais das Colunas",
];

function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="I'd rather you forget I'm there."
        intro="I'm Mara — born in Porto, at home in Lisbon for the last twelve years. I photograph people the way I'd want my own family photographed: softly, patiently, without direction they can feel."
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-28 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-24 lg:pb-40">
        <Reveal>
          <ParallaxImage
            src={about}
            alt="Portrait of Mara Alves holding her camera in a Lisbon doorway"
            strength={0.1}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
        <Reveal delay={140} className="lg:pt-16">
          <p className="font-display text-3xl leading-[1.4] sm:text-4xl">
            A photograph should feel like a memory, not a performance.
          </p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I started with film and a darkroom in my parents' laundry room, and something of that
              slowness stayed with me. I shoot in available light, edit with a gentle hand, and
              never ask anyone to say cheese.
            </p>
            <p>
              Sessions usually run ninety minutes and feel more like a walk than a shoot. Children
              are allowed to be children. Couples are allowed to be quiet. What comes back are
              pictures you recognise as your own life.
            </p>
            <p>
              I work in Portuguese and English, travel across Portugal, and take a limited number of
              sessions each month so nothing feels rushed.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="border-t border-border px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-28">
          <Reveal>
            <p className="label-caps">Where we shoot</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-4 text-lg sm:grid-cols-2">
              {places.map((place) => (
                <li key={place} className="border-b border-border pb-4 font-display text-2xl">
                  {place}
                </li>
              ))}
            </ul>
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
