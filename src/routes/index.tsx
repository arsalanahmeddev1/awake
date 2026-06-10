import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awake — A calm place to think clearly about your life" },
      { name: "description", content: "Psychology-informed coaching for accomplished women navigating transition, identity shifts, and the quiet process of becoming more fully themselves." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img src="/hero-photo.jpg" alt="Calm light through a quiet interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-[var(--primary)]/70 to-[var(--primary)]/40" />
        </div>
        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-32 md:py-40 w-full">
          <div className="text-xs tracking-[0.3em] text-[var(--tan)] uppercase mb-8">
            Psychology-Informed Coaching
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-primary-foreground leading-[1.05] max-w-4xl">
            A calm place<br />
            to think clearly<br />
            <em className="text-[var(--tan)] font-light">about your life.</em>
          </h1>
          <p className="mt-10 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
            A reflective practice for women navigating transition, identity shifts, and the quiet
            process of becoming more fully themselves.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center text-sm tracking-[0.2em] uppercase bg-[var(--tan)] text-primary px-8 py-4 hover:bg-[var(--tan-deep)] transition-colors">
              Schedule a Conversation
            </Link>
            <Link to="/the-work" className="inline-flex items-center text-sm tracking-[0.2em] uppercase text-primary-foreground border border-primary-foreground/30 px-8 py-4 hover:border-primary-foreground transition-colors">
              Explore the Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--tan)]/40" />
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-4">For women in transition</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            You don't need to translate yourself here.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-primary/80 text-lg leading-[1.8]">
          <p>
            Many women arrive here carrying identities that once helped them survive or succeed. The
            capable one. The reasonable one. The caretaker. Often these identities were adaptive —
            necessary, even. But over time, they can become so practiced that a woman loses contact
            with her own interior life beneath them.
          </p>
          <p>
            Awake is a space for that contact to return. Not as crisis. Not as performance. As a slow,
            honest conversation with someone trained to meet complexity without flinching.
          </p>
        </div>
      </section>

      <section className="bg-[var(--tan-soft)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-4">How Awake works</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              Psychological depth, not surface-level advice.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-primary/80 text-lg leading-[1.8]">
            <p>
              The work draws on narrative therapy, depth psychology, and decades of listening
              carefully to the lives of accomplished women. Sessions are unhurried, private, and
              grounded in respect for your intelligence.
            </p>
            <p>
              We work toward clarity and coherence — not reinvention. The goal is not a different
              woman. The goal is contact with the one already here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
        <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-4">What we work on together</div>
        <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-3xl mb-16">
          The quiet questions that don't resolve on their own.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            ["Identity beneath the roles", "Recovering a sense of self after years inside the capable, reasonable, caretaking version of you."],
            ["Relational uncertainty", "Honest reflection on partnership, unresolved betrayal, or quiet disconnection."],
            ["Caregiver depletion", "Naming the cost of over-functioning and finding sustainable shape again."],
            ["Transition and reinvention", "The unfinished interior work of empty nesting, career shifts, divorce, or grief."],
            ["Loneliness inside success", "The gap between what you've achieved and how alive you feel."],
            ["Becoming coherent", "Living more consciously, more honestly, more like yourself."],
          ].map(([title, body]) => (
            <div key={title} className="border-l border-[var(--tan)] pl-6">
              <h3 className="font-serif text-2xl text-primary mb-2">{title}</h3>
              <p className="text-primary/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[var(--tan-soft)]">
              <img src="/anne-headshot.jpeg" alt="Anne Ubl" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="font-serif text-4xl md:text-5xl text-secondary leading-tight mb-4">Anne Elizabeth Ubl, M.A.</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Founder, AWAKE Wardrobe
            </h2>
            <div className="space-y-5 text-primary-foreground/80 text-lg leading-[1.8]">
              <p>
                Anne Elizabeth Ubl, M.A., is the founder of AWAKE Wardrobe, a psychology-informed wardrobe refinement practice for women in transition.
              </p>
              <p>
                A former healthcare executive, writer, and graduate of the University of Virginia and Pepperdine University’s master's program in psychology, Anne brings a unique perspective to the intersection of identity, personal style, and life transitions. Her work is grounded in the belief that clothing is more than appearance—it is one of the most visible expressions of who we are and how we move through the world.
              </p>
            </div>
            <Link to="/about" className="mt-10 inline-flex text-sm tracking-[0.2em] uppercase text-primary-foreground border border-primary-foreground/40 px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-colors">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-4">Offerings</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            How we work together.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-10">
          <div className="border-t border-[var(--tan)] pt-8">
            <h3 className="font-serif text-3xl text-primary mb-3">Private Sessions</h3>
            <p className="text-primary/75 leading-relaxed text-lg mb-4">
              One-on-one virtual conversations, scheduled in unhurried rhythm. Each session is a
              dedicated, confidential hour of psychologically grounded reflection.
            </p>
            <Link to="/contact" className="text-sm tracking-[0.2em] uppercase text-[var(--tan-deep)] hover:text-primary">
              Inquire about availability →
            </Link>
          </div>
          <div className="border-t border-[var(--tan)] pt-8 opacity-70">
            <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-2">In development</div>
            <h3 className="font-serif text-3xl text-primary mb-3">Writing groups, workshops, companion journals</h3>
            <p className="text-primary/75 leading-relaxed text-lg">
              Additional offerings are taking shape — quiet, intentional, in keeping with the practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--tan-soft)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-28 md:py-36 text-center">
          <p className="font-serif text-3xl md:text-4xl text-primary leading-[1.4] italic">
            "You do not need to have everything figured out before beginning. Sometimes the first
            shift is simply having a place where you no longer have to translate yourself."
          </p>
          <Link to="/contact" className="mt-12 inline-flex text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors">
            Schedule a Conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
