import type { Metadata } from "next";
import { TallyEmbed } from "@/components/start/tally-embed";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell siteBloom about your business and the website you need. We'll set up a quick call and send you a quote.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <main id="main">
      <section aria-labelledby="start-title" className="shell start-head">
        <p className="eyebrow eyebrow-teal">Start a project</p>
        <h1 id="start-title" className="h-xl">
          Let&apos;s build your better website.
        </h1>
        <p className="lead">
          Tell us a little about your business. No perfect brief needed. We&apos;ll set up a quick call, then send you a
          quote.
        </p>
      </section>
      <section className="shell start-form">
        <div className="card start-card">
          <TallyEmbed />
        </div>
      </section>
    </main>
  );
}
