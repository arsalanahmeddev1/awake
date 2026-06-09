import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Awake" },
      { name: "description", content: "Schedule a private conversation with Anne Ubl. Psychology-informed coaching for women in transition." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-36 pb-24 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="text-xs tracking-[0.3em] text-[var(--tan-deep)] uppercase mb-6">Contact</div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-8">
            Begin a conversation.
          </h1>
          <p className="text-lg text-primary/80 leading-[1.8] mb-10">
            If something here met you, please reach out. Anne reads every message personally and
            responds within a few days.
          </p>
          <div className="space-y-4 text-primary/85">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-[var(--tan-deep)] mb-1">Email</div>
              <a href="mailto:anne@awake-consulting.com" className="font-serif text-2xl text-primary hover:text-[var(--tan-deep)]">
                anne@awake-consulting.com
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-[var(--tan-soft)] p-10 md:p-14">
          {sent ? (
            <div className="text-center py-20">
              <h2 className="font-serif text-3xl text-primary mb-4">Thank you.</h2>
              <p className="text-primary/75 leading-relaxed max-w-md mx-auto">
                Your note has been received. Anne will be in touch within a few days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <Field label="Name">
                <input required type="text" className="w-full bg-background border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary" />
              </Field>
              <Field label="Email">
                <input required type="email" className="w-full bg-background border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary" />
              </Field>
              <Field label="What brings you here?">
                <textarea
                  rows={6}
                  className="w-full bg-background border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary resize-none"
                  placeholder="As much or as little as you would like to share."
                />
              </Field>
              <p className="text-xs text-primary/60 leading-relaxed">
                Your message is private and treated with the same care as a session.
              </p>
              <button
                type="submit"
                className="w-full text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                Send Note
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-primary/70 mb-2">{label}</span>
      {children}
    </label>
  );
}
