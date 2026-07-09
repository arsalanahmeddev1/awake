import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/awake-logo.png";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/the-work", label: "The Work" },
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const navLinkClass =
  "hover:text-primary transition-colors";
const navLinkActiveClass =
  "text-primary border-b border-[var(--tan-deep)] pb-1";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setLinksVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => setLinksVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  return (
    <header className="w-full border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Awake — UBL Consulting" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm tracking-wide text-primary/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={navLinkClass}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: navLinkActiveClass }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex text-xs tracking-[0.2em] uppercase text-primary border border-primary/40 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Schedule a Conversation
        </Link>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center text-primary p-1 -mr-1 hover:text-primary/80 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="w-[min(100%,20rem)] border-l border-border/60 p-0 flex flex-col [&>button]:hidden"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <img src={logo} alt="Awake — UBL Consulting" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-primary p-1 hover:text-primary/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col flex-1 px-8 py-6">
            {links.map((l, index) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "font-serif text-2xl tracking-wide text-primary py-4 border-b border-border/40",
                  "transition-all duration-500 ease-out",
                  linksVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                  navLinkClass,
                )}
                style={{ transitionDelay: linksVisible ? `${index * 75 + 100}ms` : "0ms" }}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: cn("text-primary", navLinkActiveClass) }}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={cn(
                "mt-auto text-xs tracking-[0.2em] uppercase text-center text-primary border border-primary/40 px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-colors",
                "transition-all duration-500 ease-out",
                linksVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
              )}
              style={{ transitionDelay: linksVisible ? `${links.length * 75 + 100}ms` : "0ms" }}
            >
              Schedule a Conversation
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
