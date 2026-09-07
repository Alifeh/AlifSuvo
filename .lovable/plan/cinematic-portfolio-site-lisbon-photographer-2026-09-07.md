# Cinematic Portfolio Site — Lisbon Photographer

A calm, Apple-level polished photography site: generous white space, neutral palette, elegant serif headings paired with a clean sans, full-screen hero with subtle parallax, and slow fade/rise reveals as you scroll.

## Pages

- **Home** — full-screen hero image with the tagline "Capturing moments you'll want to relive", a short intro line, a preview strip of recent work, and a quiet invitation to book.
- **Portfolio** — the full gallery, filterable by Families / Couples / Portraits, in a refined layout with hover lift and a lightbox on click.
- **Families**, **Couples**, **Portraits** — one page each: a signature image, a few words about that kind of session, and a gallery.
- **About** — portrait of the photographer, story, approach, Lisbon locations.
- **Pricing** — three session tiers presented as clean cards (session length, number of edited images, delivery time, price), plus a note that custom sessions are possible.
- **Testimonials** — a small set of quotes with client names, presented as a slow, elegant slider.
- **Contact / Booking** — a simple booking form (name, email, session type, preferred date, message) plus email/Instagram/location.

## Look and feel

- Neutral palette: warm off-white, soft sand, deep charcoal text, one muted accent.
- Elegant display serif for headings, quiet sans for body; wide letter-spacing on small labels.
- Motion: parallax on hero and section images, gentle fade-and-rise on scroll, slow image zoom on hover. Nothing bouncy.
- Minimal fixed navigation that fades in after the hero.

## Images

All photography will be generated to match the tone (natural light, Lisbon settings, warm neutral grade, candid moments) — families, couples, portraits, plus a hero and an about portrait. You can swap in real photos later.

## Notes / assumptions

- Prices, tier names, testimonial quotes, email address, and Instagram handle will be realistic placeholders — send me the real ones and I'll drop them in.
- The booking form will validate and show a confirmation message, but won't send email yet. If you want submissions saved and emailed to you, that needs a backend — say the word and I'll add it.

## Technical

- TanStack Start routes: `/` (rewrite the placeholder index), `/portfolio`, `/families`, `/couples`, `/portraits`, `/about`, `/pricing`, `/testimonials`, `/contact`, each with its own `head()` metadata.
- Design tokens (colors, radii, fonts) defined in `src/styles.css` under `@theme inline`; fonts loaded via `<link>` in `__root.tsx`.
- Shared components: nav, footer, section wrapper, scroll-reveal wrapper, parallax image, gallery grid, lightbox, pricing card, testimonial slider, booking form.
- Motion via CSS transitions + IntersectionObserver, respecting `prefers-reduced-motion`.
