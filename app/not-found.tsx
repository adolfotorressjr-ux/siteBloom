import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="bg-ocean not-found">
      <div className="shell nf-grid">
        <div className="nf-copy">
          <p aria-hidden="true" className="display nf-code">
            404
          </p>
          <h1 className="h-lg">This page took a wrong turn on I‑10.</h1>
          <p className="lead strong">The page you&apos;re looking for moved or never existed. Let&apos;s get you back on the road.</p>
          <div className="btn-row">
            <Link href="/" className="btn btn-cream">
              Back to home
            </Link>
            <Link href={site.startHref} className="btn btn-gold">
              Start a Project
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="nf-art">
          <span className="sun nf-sun" />
        </div>
      </div>
    </main>
  );
}
