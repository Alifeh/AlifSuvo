import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/families", label: "Families" },
  { to: "/couples", label: "Couples" },
  { to: "/portraits", label: "Portraits" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/testimonials", label: "Words" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          className={cn(
            "font-display text-xl tracking-[0.18em] uppercase transition-colors duration-700",
            solid ? "text-foreground" : "text-background",
          )}
        >
          Mara Alves
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "link-underline text-[0.7rem] tracking-[0.26em] uppercase transition-colors duration-700",
                solid ? "text-muted-foreground hover:text-foreground" : "text-background/80 hover:text-background",
              )}
              activeProps={{
                className: solid ? "text-foreground" : "text-background",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "border px-6 py-2.5 text-[0.7rem] tracking-[0.26em] uppercase transition-colors duration-500",
              solid
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-background/70 text-background hover:bg-background hover:text-foreground",
            )}
          >
            Book
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={cn(
            "text-[0.7rem] tracking-[0.26em] uppercase lg:hidden",
            solid ? "text-foreground" : "text-background",
          )}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {[...links, { to: "/contact", label: "Book a session" } as const].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm tracking-[0.22em] text-foreground uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
