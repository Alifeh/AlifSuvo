import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alif Suvo" },
      {
        name: "description",
        content:
          "Contact Alif Suvo about photography, creative work and commissions.",
      },
      { property: "og:title", content: "Contact — Alif Suvo" },
      {
        property: "og:description",
        content: "Contact Alif Suvo about photography and creative work.",
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-foreground";

const labelClass = "label-caps block";

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Start a conversation."
        intro="Tell me a little about what you have in mind."
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-36 sm:px-10 sm:pb-48">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-28">
          <Reveal>
            {sent ? (
              <div className="border border-border p-12 text-center">
                <h2 className="text-3xl sm:text-4xl">Thank you.</h2>
                <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Your message has been noted. You can also email me directly at Alifpicster@gmail.com.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="link-underline mt-10 text-[0.7rem] tracking-[0.28em] uppercase"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-12">
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="name">
                      Your name
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                  </div>
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                       placeholder="Email"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="session">
                      Session type
                    </label>
                    <select id="session" name="session" className={fieldClass} defaultValue="Family">
                      <option>Family</option>
                      <option>Couple</option>
                      <option>Portrait</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="date">
                      Preferred date
                    </label>
                    <input id="date" name="date" type="date" className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className={labelClass} htmlFor="message">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-none`}
                     placeholder="Tell me a little about what you have in mind"
                  />
                </div>

                <button
                  type="submit"
                  className="border border-foreground px-12 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={140} className="space-y-12">
            <div>
              <p className="label-caps">Email</p>
              <a
                href="mailto:Alifpicster@gmail.com"
                className="link-underline mt-4 inline-block font-display text-2xl"
              >
                Alifpicster@gmail.com
              </a>
            </div>
            <div>
              <p className="label-caps">Instagram</p>
              <a
                href="https://instagram.com/Alif_Suvo"
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-4 inline-block font-display text-2xl"
              >
                @Alif_Suvo
              </a>
            </div>
            <div>
              <p className="label-caps">Based in</p>
              <p className="mt-4 font-display text-2xl">Currently working from Lisbon.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Available wherever the work takes me.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
