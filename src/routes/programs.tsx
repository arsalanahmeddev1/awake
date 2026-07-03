import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Pricing — Awake" },
      {
        name: "description",
        content:
          "Private sessions, deep-dive packages, ongoing advisory, AWAKE Circle, and AWAKE Salon — psychology-informed offerings for women navigating life's transitions.",
      },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

type Offering = {
  id: string;
  name: string;
  meta: string;
  price: string;
  description: string;
  body?: string;
  includes: readonly string[];
  featured?: boolean;
};

const privateOfferings: Offering[] = [
  {
    id: "reflection",
    name: "AWAKE Reflection Session",
    meta: "90 minutes",
    price: "$350",
    featured: true,
    description:
      "A private psychology-informed conversation for women navigating life's transitions.",
    body: "Whether you're facing an empty nest, career reinvention, relationship change, retirement, caregiving, or simply sensing that you've outgrown an earlier version of yourself, this session offers space to pause, reflect, and move forward with greater clarity.",
    includes: [
      "90-minute Zoom or in-person session",
      "Thoughtful questions and guided reflection",
      "Personalized follow-up email summarizing key themes, insights, and next steps",
    ],
  },
  {
    id: "deep-dive",
    name: "AWAKE Deep Dive",
    meta: "Three sessions",
    price: "$950",
    description: "For women seeking a more intentional exploration over several weeks.",
    includes: [
      "Three 90-minute sessions",
      "Email support between meetings",
      "Personalized reflection exercises",
      "Written summary and integration guide",
    ],
  },
  {
    id: "advisory",
    name: "Ongoing Advisory",
    meta: "Monthly",
    price: "$500",
    description: "One 90-minute session each month plus email support.",
    body: "Ideal for women who value having a trusted thought partner as they navigate meaningful life decisions.",
    includes: [],
  },
];

const circleTopics = [
  "Identity beyond achievement",
  "The stories we've inherited",
  "Discernment and decision-making",
  "Friendship and belonging",
  "Marriage, family, and changing roles",
  "Beauty, aging, and authenticity",
  "Designing the second half of life",
] as const;

const salonQuestions = [
  "What does it mean to become ourselves?",
  "What are we ready to let go of?",
  "What does a beautiful life look like now?",
  "What is enough?",
] as const;

function Programs() {
  const featured = privateOfferings.find((o) => o.featured)!;
  const others = privateOfferings.filter((o) => !o.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-photo.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/92 via-[var(--primary)]/85 to-[var(--primary)]/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-28 md:pt-40 pb-20 md:pb-28">
          <div className="text-xs tracking-[0.3em] text-[var(--tan)] uppercase mb-6">Programs</div>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground leading-[1.05] max-w-3xl mb-12">
            Pricing
          </h1>
          <nav className="flex flex-wrap gap-3" aria-label="Program sections">
            {[
              { href: "#circle", label: "AWAKE Circle" },
              { href: "#salon", label: "AWAKE Salon" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-primary-foreground/90 border border-primary-foreground/25 px-5 py-2.5 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--tan)]/40" />
      </section>

      {/* Private work */}
      <section id="private" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          {/* Featured offering */}
          <article className="bg-primary text-primary-foreground">
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-primary-foreground/15 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">{featured.name}</h3>
                  <div className="text-sm tracking-[0.15em] uppercase text-primary-foreground/60">
                    {featured.meta}
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-primary-foreground/15">
                  <div className="font-serif text-5xl md:text-6xl text-[var(--tan)] leading-none">
                    {featured.price}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 p-10 md:p-14 space-y-6">
                <p className="text-lg text-primary-foreground/90 leading-[1.8]">{featured.description}</p>
                {featured.body && (
                  <p className="text-primary-foreground/75 leading-[1.8]">{featured.body}</p>
                )}
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[var(--tan)] mb-4">
                    Includes
                  </div>
                  <IncludesList items={featured.includes} variant="dark" />
                </div>
                <Link
                  to="/contact"
                  className="inline-flex text-sm tracking-[0.2em] uppercase border border-primary-foreground/30 px-8 py-3.5 hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Inquire about this session
                </Link>
              </div>
            </div>
          </article>

          {/* Other private offerings */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {others.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </div>
        </div>
      </section>

      {/* AWAKE Circle — featured group experience */}
      <section id="circle" className="scroll-mt-24 bg-[var(--tan-soft)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-4">
                AWAKE Circle
              </h2>
              <p className="text-sm tracking-[0.15em] uppercase text-[var(--tan-deep)] mb-8">
                A psychology-informed conversation for women in transition
              </p>
              <div className="inline-flex flex-col gap-1 mb-8">
                <span className="text-xs tracking-[0.2em] uppercase text-primary/60">
                  6 women · 6 weeks
                </span>
                <span className="font-serif text-5xl text-primary leading-none">$750</span>
                <span className="text-sm text-primary/60">per person</span>
              </div>
              <p className="text-primary/85 leading-[1.8] mb-8">
                A small, confidential gathering for women navigating life's next chapter. Each week
                we explore one aspect of identity, transition, and self-authorship through
                conversation, reflection, and thoughtfully selected readings.
              </p>
              <Link
                to="/contact"
                className="inline-flex text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                Join the next circle
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-12">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-[var(--tan-deep)] mb-6">
                  Topics may include
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {circleTopics.map((topic, i) => (
                    <li
                      key={topic}
                      className="flex gap-4 text-primary/80 leading-relaxed border-l border-[var(--tan)] pl-5"
                    >
                      <span className="font-serif text-[var(--tan-deep)] text-lg shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-[var(--tan)]/40 p-8 md:p-10">
                <div className="text-xs tracking-[0.2em] uppercase text-[var(--tan-deep)] mb-6">
                  Includes
                </div>
                <IncludesList
                  items={[
                    "Six 90-minute live sessions",
                    "Reflection journal prompts",
                    "Curated readings, poems, and essays",
                    "Private online community (optional)",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWAKE Salon */}
      <section id="salon" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6">
              AWAKE Salon
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
              <span className="text-sm tracking-[0.15em] uppercase text-[var(--tan-deep)]">
                One evening
              </span>
              <span className="font-serif text-4xl text-primary">$100</span>
            </div>
            <div className="text-lg text-primary/80 leading-[1.8] space-y-6">
              <p>An intimate gathering of 8–12 women.</p>
              <p>Hosted in someone's home or virtually.</p>
              <p>
                Each salon centers on one meaningful question, followed by guided conversation.
              </p>
            </div>
          </div>

          <div className="text-xs tracking-[0.2em] uppercase text-[var(--tan-deep)] mb-6 text-center">
            Examples
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            {salonQuestions.map((question) => (
              <blockquote
                key={question}
                className="relative bg-[var(--tan-soft)] p-8 md:p-10 text-left"
              >
                <span
                  className="font-serif text-6xl text-[var(--tan)] leading-none absolute top-4 left-6 select-none"
                  aria-hidden
                >
                  "
                </span>
                <p className="font-serif text-xl md:text-2xl text-primary italic leading-snug relative z-10 pt-6 pl-4">
                  {question}
                </p>
              </blockquote>
            ))}
          </div>

          <p className="text-center font-serif text-xl text-primary/60 italic mb-10">
            Wine, tea, candles, conversation.
          </p>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex text-sm tracking-[0.2em] uppercase text-[var(--tan-deep)] hover:text-primary transition-colors"
            >
              Host or attend a salon →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center">
          <p className="font-serif text-2xl md:text-3xl italic leading-[1.5] mb-4">
            Not sure which offering is right for you?
          </p>
          <p className="text-primary-foreground/75 leading-relaxed max-w-lg mx-auto mb-10">
            Anne reads every inquiry personally. A brief conversation can help you find the right
            starting point.
          </p>
          <Link
            to="/contact"
            className="inline-flex text-sm tracking-[0.2em] uppercase border border-primary-foreground/40 px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Schedule a Conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function IncludesList({
  items,
  variant = "light",
}: {
  items: readonly string[];
  variant?: "light" | "dark";
}) {
  const textClass = variant === "dark" ? "text-primary-foreground/80" : "text-primary/80";
  const markerClass = variant === "dark" ? "bg-[var(--tan)]" : "bg-[var(--tan-deep)]";

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${textClass}`}>
          <span className={`mt-2.5 h-px w-4 shrink-0 ${markerClass}`} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function OfferingCard({ offering }: { offering: Offering }) {
  const isMonthly = offering.id === "advisory";

  return (
    <article className="group flex flex-col bg-background border border-[var(--tan)]/50 p-8 md:p-10 hover:border-[var(--tan-deep)] transition-colors">
      <div className="flex-1">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--tan-deep)] mb-3">
          {offering.meta}
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-4">
          {offering.name}
        </h3>
        <p className="text-primary/85 leading-[1.8] mb-4">{offering.description}</p>
        {offering.body && (
          <p className="text-primary/70 leading-[1.8] mb-6">{offering.body}</p>
        )}
        {offering.includes.length > 0 && (
          <div className="mb-6">
            <div className="text-xs tracking-[0.2em] uppercase text-[var(--tan-deep)] mb-4">
              Includes
            </div>
            <IncludesList items={offering.includes} />
          </div>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-[var(--tan)]/60 flex items-end justify-between gap-4">
        <div>
          <span className="font-serif text-4xl text-primary leading-none">{offering.price}</span>
          {isMonthly && (
            <span className="text-sm text-primary/60 ml-1">/month</span>
          )}
        </div>
        <Link
          to="/contact"
          className="text-xs tracking-[0.2em] uppercase text-[var(--tan-deep)] hover:text-primary transition-colors shrink-0"
        >
          Inquire →
        </Link>
      </div>
    </article>
  );
}
