import { ArrowLink } from "@/components/studio/shared";
export default function NotFound() {
  return (
    <main id="main" className="section-pad not-found">
      <p className="eyebrow">404 / A LITTLE OFF THE PATH</p>
      <h1>
        Nothing growing
        <br />
        here. Yet.
      </h1>
      <p>Let’s get you back to something good.</p>
      <ArrowLink href="/">Back to siteBloom</ArrowLink>
    </main>
  );
}
