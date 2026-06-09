import logo from "@/assets/awake-logo.png";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Awake — UBL Consulting" className="w-28 mb-6 opacity-90" />
          <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
            Insight. Strategy. Meaningful change. Psychology-informed coaching for women in transition.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/the-work" className="hover:text-[var(--tan)]">The Work</Link></li>
            <li><Link to="/about" className="hover:text-[var(--tan)]">About Anne</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--tan)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Get in touch</h4>
          <p className="text-sm text-primary-foreground/80">
            <a href="mailto:anne@awake-consulting.com" className="hover:text-[var(--tan)]">
              anne@awake-consulting.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Awake — UBL Consulting. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Insight · Strategy · Meaningful Change</span>
        </div>
      </div>
    </footer>
  );
}
