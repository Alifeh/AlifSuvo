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
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "The Short Story",
    price: "€145",
    length: "45 minutes",
    images: "25+ edited images",
    delivery: "Gallery in 10 days",
    lines: [],
  },
  {
    name: "The Long Afternoon",
    price: "€240",
    length: "90 minutes",
    images: "60+ edited images",
    delivery: "Gallery in 14 days",
    lines: [],
    featured: true,
  },
  {
    name: "The Whole Day",
    price: "€475",
    length: "4 hours",
    images: "150+ edited images",
    delivery: "Gallery in 21 days",
    lines: [],
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
                className={`flex h-full flex-col border p-10 transition-colors duration-500 ${
                  tier.featured
                    ? "border-foreground bg-secondary"
                    : "border-border hover:border-foreground"
                }`}
              >
                <p className="label-caps">{tier.featured ? "Most chosen" : `0${i + 1}`}</p>
                <h2 className="mt-6 text-3xl">{tier.name}</h2>
                <p className="mt-6 font-display text-5xl">{tier.price}</p>

                <dl className="mt-10 space-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
                  <div className="flex justify-between gap-4">
                    <dt>Length</dt>
                    <dd className="text-foreground">{tier.length}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Images</dt>
                    <dd className="text-foreground">{tier.images}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Delivery</dt>
                    <dd className="text-foreground">{tier.delivery}</dd>
                  </div>
                </dl>

                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

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
