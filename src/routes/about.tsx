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
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-6">About Anne</div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-8">
            Anne Ubl
          </h1>
          <div className="space-y-6 text-lg text-primary/85 leading-[1.8]">
            <p>
              Anne is a psychology-informed coach with a background in clinical training and
              narrative therapy. For more than two decades she has worked closely with women — many
              of them accomplished, capable, exhausted — who arrived needing something more honest
              than advice.
            </p>
            <p>
              Her practice grew from a conviction that women in transition rarely need a strategy.
              They need a steady, intelligent witness. Someone who can hold what they are carrying
              without trying to lighten it prematurely.
            </p>
            <p>
              Anne lives and works between client sessions, writing, and the quiet study of how
              women come back into contact with themselves. Awake is the name she has given to that
              work.
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
