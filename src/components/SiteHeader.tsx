import { Link } from "@tanstack/react-router";
import logo from "@/assets/awake-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/the-work", label: "The Work" },
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Awake — UBL Consulting" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-primary/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary transition-colors"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary border-b border-[var(--tan-deep)] pb-1" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex text-xs tracking-[0.2em] uppercase text-primary border border-primary/40 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Schedule a Conversation
        </Link>
      </div>
    </header>
  );
}
