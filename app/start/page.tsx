import type { Metadata } from "next";
import Inquiry from "@/components/studio/inquiry";
import { Eyebrow } from "@/components/studio/shared";
export const metadata: Metadata = {
  title: "Start a Project",
  alternates: { canonical: "/start" },
};
export default function Start() {
  return (
    <main id="main" className="start-page section-pad">
      <div className="start-heading">
        <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h1>
          Let’s make your
          <br />
          website <em>bloom.</em>
        </h1>
        <div>
          <p>
            Tell us a little about your business.
            <br />
            We’ll take it from there.
          </p>
          <span>NO PERFECT BRIEF REQUIRED. ↙</span>
        </div>
      </div>
      <Inquiry />
    </main>
  );
}
