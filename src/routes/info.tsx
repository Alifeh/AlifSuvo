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
          "How a session works with Alif Suvo: the process, session information and answers to common questions.",
      },
      { property: "og:title", content: "Info — Alif Suvo" },
      {
        property: "og:description",
        content:
          "The process, session information and answers to common questions about working with Alif Suvo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alifsuvo.lovable.app/info" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://alifsuvo.lovable.app/info" }],
  }),
  component: Info,
});

const tiers = [
  { name: "The Short Story", price: "€145" },
  { name: "The Long Afternoon", price: "€240" },
  { name: "The Whole Day", price: "€475" },
];

const steps = [
  {
    title: "The first message",
    body: "You send an enquiry with a rough idea of what you have in mind. I reply personally, ask a few questions, and we work out whether the session suits what you are hoping for.",
  },
  {
    title: "Planning it together",
    body: "We agree on a date, a place and a rhythm for the day. No shot lists, no rehearsed poses — just enough of a plan that nobody has to think about logistics once we begin.",
  },
  {
    title: "The session itself",
    body: "We walk, talk and let things happen. I photograph mostly from a small distance, stepping in only when a quiet suggestion helps. Most people forget the camera within the first few minutes.",
  },
  {
    title: "Editing and your gallery",
    body: "I select the frames that hold the feeling of the day and edit them by hand, keeping tones natural. The finished images arrive in a private online gallery you can download and keep.",
  },
];

const faqs = [
  {
    q: "How do we choose a location?",
    a: "We talk about what the images are for and what feels like you — a street you walk often, somewhere with good light, or somewhere you have never been together. If you have no idea, I will suggest a few options and we decide together.",
  },
  {
    q: "Where are sessions available?",
    a: "I am currently working from Lisbon, so most sessions happen there and around it.",
  },
  {
    q: "Do you ever travel for work?",
    a: "Yes. I am available wherever the work takes me — mention where you are in your enquiry and we will discuss it.",
  },
  {
    q: "How long does delivery take?",
    a: "Editing is done by hand rather than in bulk, so it takes some time. I will confirm the timeframe for your session when we plan it, and you will always know where things stand.",
  },
  {
    q: "What happens after booking?",
    a: "We confirm the date, place and timing in writing, and stay in touch before the session about anything practical — weather, clothes, who is coming. On the day, you only need to show up.",
  },
  {
    q: "What if we are not comfortable in front of a camera?",
    a: "Most people say that. The session is built for it: nothing is posed, there is no rush, and the first part of the day is simply getting used to being around the camera.",
  },
];

function Info() {
  return (
    <>
      <PageHeader
        label="Info"
        title="How it works."
        intro="The process, the sessions, and the questions that come up most often."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <p className="label-caps">The process</p>
          </Reveal>
          <div className="space-y-14">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="border-t border-border pt-8">
                  <p className="label-caps">0{i + 1}</p>
                  <h2 className="mt-5 text-3xl">{step.title}</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <Reveal>
          <p className="label-caps">Sessions</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Three ways to work together. For anything outside these formats, get in touch.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120}>
              <div className="flex h-full flex-col border border-border p-10 transition-colors duration-500 hover:border-foreground">
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

      <section className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <p className="label-caps">Questions</p>
          </Reveal>
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl leading-snug">{faq.q}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-36 sm:px-10 sm:pb-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">Discuss your session.</h2>
          <Link
            to="/contact"
            className="mt-9 inline-block border border-foreground px-10 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
