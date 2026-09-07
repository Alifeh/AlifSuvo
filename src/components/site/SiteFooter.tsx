import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.14em] uppercase">Mara Alves</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Family, couple and portrait photography in Lisbon and along the Portuguese coast.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="mailto:hello@maraalves.pt" className="link-underline w-fit hover:text-foreground">
            hello@maraalves.pt
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="link-underline w-fit hover:text-foreground"
          >
            @maraalves.photo
          </a>
          <Link to="/contact" className="link-underline w-fit hover:text-foreground">
            Book a session
          </Link>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-[1400px] text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Mara Alves — Lisboa
      </p>
    </footer>
  );
}
