import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Info — Alif Suvo" },
      {
        name: "description",
        content:
          "Session information and pricing for photography by Alif Suvo.",
      },
      { property: "og:title", content: "Info — Alif Suvo" },
      {
        property: "og:description",
        content: "Session information and pricing for photography by Alif Suvo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alifsuvo.lovable.app/info" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://alifsuvo.lovable.app/info" }],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "The Short Story",
    price: "€145",
  },
  {
    name: "The Long Afternoon",
    price: "€240",
  },
  {
    name: "The Whole Day",
    price: "€475",
  },
];

function Pricing() {
  return (
    <>
      <PageHeader
        label="Info"
        title="Session information."
        intro="Three ways to work together. For anything outside these formats, get in touch."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-40">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120}>
              <div
                className="flex h-full flex-col border border-border p-10 transition-colors duration-500 hover:border-foreground"
              >
                <p className="label-caps">0{i + 1}</p>
                <h2 className="mt-6 text-3xl">{tier.name}</h2>
                <p className="mt-6 font-display text-5xl">{tier.price}</p>

                <Link
                  to="/contact"
                  className="mt-auto pt-10 text-[0.7rem] tracking-[0.28em] uppercase"
                >
                  <span className="link-underline">Enquire</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

      </section>
    </>
  );
}
