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
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--tan-soft)]">
            <img src="/anne-headshot.jpeg" alt="Anne Ubl" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-6">Anne Elizabeth Ubl, M.A.</div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-8">
          Founder, AWAKE Wardrobe
          </h1>
          <div className="space-y-6 text-lg text-primary/85 leading-[1.8]">
            <p>
            hroughout her career and personal life, Anne became increasingly fascinated by the ways women adapt to changing roles and responsibilities. She observed that while careers evolve, children grow, relationships shift, and priorities transform, wardrobes often remain tethered to earlier versions of ourselves. The result is frequently a quiet but persistent sense of disconnect.
            </p>
            <p>
            AWAKE Wardrobe was created to address that gap.
            </p>
            <p>
            Drawing from principles of psychology, identity development, and self-authorship, Anne helps women refine their wardrobes so they reflect who they have become rather than who they once needed to be. Her approach is thoughtful, highly individualized, and focused on alignment rather than trends, helping clients cultivate wardrobes that feel elegant, effortless, and deeply authentic.
            </p>
            <p>
            Anne's work is especially resonant for accomplished women navigating significant transitions—empty nesters, executives, entrepreneurs, caregivers, and women entering a new chapter of life. Through her signature Quiet Power Method™, she guides clients through a process of editing, refining, and redefining personal style as an expression of earned self-worth.
            </p>
            <p>
            Anne divides her time between Florida, California, and Maryland. She is also the founder of AWAKE, a broader body of work focused on self-authorship, identity, discernment, and meaningful transitions.
            </p>
            <p>
            Her philosophy is simple:
            </p>
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
