import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/the-work")({
  head: () => ({
    meta: [
      { title: "The Work — Awake" },
      { name: "description", content: "How Awake works: psychology-informed coaching grounded in narrative therapy, depth psychology, and unhurried conversation." },
    ],
    links: [{ rel: "canonical", href: "/the-work" }],
  }),
  component: TheWork,
});

function TheWork() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 md:px-10 pt-24 md:pt-36 pb-16">
        <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-6">The Work</div>
        <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.05] mb-10">
          A different kind<br />of conversation.
        </h1>
        <p className="text-xl text-primary/75 leading-[1.7] max-w-2xl">
          The work is quiet, sustained, and psychologically grounded. It is not designed to fix you.
          It is designed to return you to yourself.
        </p>
      </section>

      <section className="bg-[var(--tan-soft)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 space-y-10 text-lg text-primary/85 leading-[1.85]">
          <p>
            Awake is shaped by narrative therapy and depth psychology. The premise is simple: the
            stories we have told about ourselves — about who we are, who we must be, what we owe —
            are not neutral. They were authored, often early, often by circumstance. They can be read
            again. They can be edited. They can be set down.
          </p>
          <p>
            Sessions are an hour of focused, confidential attention. There is no curriculum, no
            protocol of self-improvement, no homework you must perform. There is a steady, trained
            listener, a set of careful questions, and a slow process of noticing what you have not
            had room to notice.
          </p>
          <p>
            Most women come weekly or biweekly. Some come for a season. Some stay for years. The
            cadence is yours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-16 max-w-2xl">
          What you can expect.
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["Confidentiality", "Every conversation is private. Nothing is shared, recorded, or referenced beyond our hour together."],
            ["Unhurried pace", "Sessions are spacious. There is room to pause, to be uncertain, to change your mind."],
            ["Trained attention", "A clinically informed listener who can hold complexity without simplifying it."],
          ].map(([t, b]) => (
            <div key={t}>
              <div className="hairline mb-6" />
              <h3 className="font-serif text-2xl text-primary mb-3">{t}</h3>
              <p className="text-primary/75 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 text-center">
          <p className="font-serif text-2xl md:text-3xl italic leading-[1.5] mb-10">
            "The first shift is often simply having a place where you no longer have to translate yourself."
          </p>
          <Link to="/contact" className="inline-flex text-sm tracking-[0.2em] uppercase border border-primary-foreground/40 px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-colors">
            Schedule a Conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
