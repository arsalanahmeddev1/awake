import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anne — Awake" },
      { name: "description", content: "Anne Ubl is a psychology-informed coach for women in transition. Quiet, sophisticated, and deeply confidential." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-36 pb-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 sticky top-[90px] self-start">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--tan-soft)]">
            <img src="/anne-headshot.jpeg" alt="Anne Ubl" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-6">Anne Elizabeth Ubl, M.A.</div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-8">
          Founder, AWAKE
          </h1>
          <div className="space-y-6 text-lg text-primary/85 leading-[1.8]">
            <p>
            Throughout her career in healthcare leadership, graduate work in psychology, and years of studying human development, Anne became increasingly fascinated by the ways people evolve across a lifetime. Careers change. Families change. Relationships change. Loss reshapes us. Success reshapes us. Yet many people continue living from identities they formed years or even decades earlier.
            </p>
            <p>
            AWAKE was created to explore that space between who we have been and who we are becoming.
            </p>
            <p>
            Drawing from psychology, identity development, and the practice of self-authorship, Anne’s work helps people navigate life’s transitions with greater clarity, discernment, and authenticity. Rather than offering formulas or quick answers, she creates frameworks that invite deeper reflection, helping individuals make decisions that are aligned with their values, their lived experience, and the person they are becoming.
            </p>
            <p>
            Her writing and teaching are especially meaningful for accomplished adults navigating significant transitions; career reinvention, empty nesting, caregiving, grief, recovery, relationship change, and the often-overlooked work of creating a meaningful second half of life.
            </p>
            <p>
            Whether writing, speaking, leading conversations, or developing educational resources, Anne’s work centers on one enduring question:
            </p>
            <h3 className="font-semibold font-sans">How do we become more fully ourselves?</h3>
            <p>
            Anne divides her time between Florida, California, and Maryland.
            </p>
            <p>
            Her philosophy is simple:
            </p>
            <h3 className="font-semibold font-sans">You do not need to become someone new. You need the courage to live as who you have become.</h3>
            <p>
            The right outfit does not make you someone else.
            </p>
          </div>
          <Link to="/contact" className="mt-12 inline-flex text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors">
            Begin a Conversation
          </Link>
        </div>
      </section>

      <section className="bg-[var(--tan-soft)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-primary leading-[1.5]">
            "Insight. Strategy. Meaningful change."
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
