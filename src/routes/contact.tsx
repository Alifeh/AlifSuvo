import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { notifyInquiry } from "@/lib/inquiries.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alif Suvo" },
      {
        name: "description",
        content:
          "Send an enquiry to Alif Suvo about photography, creative work and commissions.",
      },
      { property: "og:title", content: "Contact — Alif Suvo" },
      {
        property: "og:description",
        content: "Send an enquiry to Alif Suvo about photography and creative work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alifsuvo.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://alifsuvo.lovable.app/contact" }],
  }),
  component: Contact,
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-foreground";

const labelClass = "label-caps block";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim().slice(0, 100),
      email: String(data.get("email") ?? "").trim().slice(0, 255),
      session_type: String(data.get("session_type") ?? "").trim().slice(0, 100) || null,
      preferred_date: String(data.get("preferred_date") ?? "").trim().slice(0, 100) || null,
      location: String(data.get("location") ?? "").trim().slice(0, 200) || null,
      message: String(data.get("message") ?? "").trim().slice(0, 2000),
    };

    if (!payload.name || !payload.email || !payload.message) return;

    setStatus("sending");
    const { error } = await supabase.from("inquiries").insert(payload);

    if (error) {
      setStatus("error");
      return;
    }

    notifyInquiry({ data: payload }).catch((notifyError) => {
      console.error("Inquiry notification failed", notifyError);
    });

    form.reset();
    setStatus("sent");
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
            {status === "sent" ? (
              <div className="border-t border-border pt-12">
                <p className="font-display text-3xl leading-[1.35] sm:text-4xl">
                  Thank you for reaching out. I will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="link-underline mt-10 inline-block text-[0.7rem] tracking-[0.28em] uppercase"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-12">
                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="name">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Your name"
                    />
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
                      maxLength={255}
                      className={fieldClass}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="grid gap-12 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="session_type">
                      Type of session
                    </label>
                    <input
                      id="session_type"
                      name="session_type"
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Portrait, couple, family, other"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className={labelClass} htmlFor="preferred_date">
                      Preferred date
                    </label>
                    <input
                      id="preferred_date"
                      name="preferred_date"
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Date or rough timing"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className={labelClass} htmlFor="location">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    maxLength={200}
                    className={fieldClass}
                    placeholder="City, or a place you have in mind"
                  />
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
                    maxLength={2000}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell me a little about what you have in mind"
                  />
                </div>

                <div className="space-y-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="border border-foreground px-12 py-4 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending" : "Send enquiry"}
                  </button>
                  {status === "error" ? (
                    <p className="text-sm text-muted-foreground">
                      Something went wrong sending your enquiry. Please try again, or write to
                      Alifpicster@gmail.com.
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={140} className="space-y-12">
            <div>
              <p className="label-caps">Or write directly</p>
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
              <p className="label-caps">Location</p>
              <p className="mt-4 font-display text-2xl">Wherever the work takes me.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sessions are available in different places throughout the year — mention where you
                are in your enquiry.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
