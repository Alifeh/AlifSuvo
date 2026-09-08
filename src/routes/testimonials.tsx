import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Kind Words — Mara Alves Photography, Lisbon" },
      {
        name: "description",
        content:
          "What families and couples say about their photography sessions with Mara Alves in Lisbon.",
      },
      { property: "og:title", content: "Kind Words — Mara Alves Photography, Lisbon" },
      {
        property: "og:description",
        content: "Words from families and couples photographed in Lisbon.",
      },
    ],
  }),
  component: Testimonials,
});

const quotes = [
  {
    text: "We booked her for one hour and got back our whole family — the mess, the giggling, my son's tired face at the end. I cried opening the gallery.",
    name: "Inês & Tomás",
    detail: "Family session, Alfama",
  },
  {
    text: "Neither of us likes being photographed. Somehow we forgot she was there. These are the only pictures of us together that actually look like us.",
    name: "Sofia & Marc",
    detail: "Couple session, Guincho",
  },
  {
    text: "Calm, unhurried, endlessly patient with a two-year-old who refused to cooperate. The photographs are quiet and beautiful and completely ours.",
    name: "The Ferreira family",
    detail: "At home, Príncipe Real",
  },
  {
    text: "I needed portraits for work and expected an ordeal. It felt like coffee with a friend who happened to have a camera.",
    name: "Ana Lourenço",
    detail: "Portrait session, Graça",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % quotes.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <PageHeader label="Words" title="From the people in the pictures." />

      <section className="mx-auto max-w-[1400px] px-6 pb-32 sm:px-10 sm:pb-44">
        <Reveal>
          <div className="relative min-h-[22rem] border-y border-border py-16 sm:min-h-[20rem] sm:py-24">
            {quotes.map((quote, i) => (
              <figure
                key={quote.name}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-x-0 top-16 mx-auto max-w-3xl px-2 text-center transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:top-24",
                  i === active ? "opacity-100" : "pointer-events-none opacity-0",
                )}
              >
                <blockquote className="font-display text-2xl leading-[1.45] sm:text-4xl">
                  “{quote.text}”
                </blockquote>
                <figcaption className="mt-10 text-[0.68rem] tracking-[0.3em] text-muted-foreground uppercase">
                  {quote.name} — {quote.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center gap-3">
          {quotes.map((quote, i) => (
            <button
              key={quote.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show words from ${quote.name}`}
              className={cn(
                "h-px w-12 transition-colors duration-500",
                i === active ? "bg-foreground" : "bg-border hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Your turn.</h2>
          <Link
            to="/contact"
            className="mt-9 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Book a session
          </Link>
        </Reveal>
      </section>
    </>
  );
}
