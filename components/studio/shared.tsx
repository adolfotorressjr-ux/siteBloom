import type { ReactNode } from "react";
export function Wordmark() {
  return (
    <span className="wordmark">
      site<span>Bloom</span>
      <i aria-hidden="true" />
    </span>
  );
}
export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`button ${light ? "button-light" : ""}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function Eyebrow({
  children,
  index,
}: {
  children: ReactNode;
  index?: string;
}) {
  return (
    <div className="eyebrow">
      {index && <span className="index">{index} /</span>}
      {children}
    </div>
  );
}
export function Stripes() {
  return (
    <div className="stripes" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
export function Browser({
  children,
  label = "A little window into what’s possible.",
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{label}</span>
        <span>↗</span>
      </div>
      {children}
    </div>
  );
}
export function SiteMock({
  theme = "industrial",
  old = false,
  priority = false,
}: {
  theme?: string;
  old?: boolean;
  priority?: boolean;
}) {
  if (old)
    return (
      <div className="old-site" role="img" aria-label={`${theme === 'landscape' ? 'Accent Landscape' : 'CCPTX'} illustrative legacy website, with a dense navigation bar and dated centered layout.`}>
        <div className="old-title">
          {theme === "landscape"
            ? "ACCENT LANDSCAPE"
            : "CUSTOM CRATES & PALLETS"}
        </div>
        <div className="old-nav">
          HOME &nbsp; | &nbsp; ABOUT US &nbsp; | &nbsp; PRODUCTS &nbsp; | &nbsp;
          CONTACT
        </div>
        <div className="old-content">
          <h3>Welcome to Our Website!</h3>
          <div className="old-photo">
            {theme === "landscape" ? (
              <img
                src="/images/architecture-400.webp"
                width="400"
                height="331"
                loading="lazy"
                alt="Illustrative home and lawn in a legacy website layout"
              />
            ) : (
              <Crate />
            )}
          </div>
          <p>
            {theme === "landscape"
              ? "Landscape services for your home and business."
              : "We offer custom wood crates and pallets for your business needs."}
          </p>
          <u>Click here to learn more &gt;&gt;</u>
          <p className="old-small">
            {theme === "landscape"
              ? "Call us to discuss your next outdoor project."
              : "Quality products. Dependable service."}
          </p>
        </div>
      </div>
    );
  if (theme === "landscape")
    return (
      <div className="mock landscape" role="img" aria-label="Accent Landscape concept website: warm editorial typography and modern home and lawn photography.">
        <div className="mock-nav">
          <b>
            accent<span> landscape</span>
          </b>
          <span>Our work &nbsp; Our approach &nbsp; Get in touch ↗</span>
        </div>
        <div className="landscape-image">
          <img
            src="/images/architecture.webp"
            srcSet="/images/architecture-400.webp 400w, /images/architecture-700.webp 700w, /images/architecture.webp 1400w"
            sizes="(max-width: 600px) 90vw, 65vw"
            alt="Modern home opening onto a landscaped courtyard, illustrative project photography"
            width="1400"
            height="1159"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
          <div>
            <small>OUTSIDE, REIMAGINED.</small>
            <h3>
              A little closer
              <br />
              to nature.
            </h3>
            <span className="mock-cta">Find your outside ↗</span>
          </div>
        </div>
        <div className="mock-bottom">
          Thoughtfully designed. Naturally yours.{" "}
          <span>01 — LANDSCAPE DESIGN</span>
        </div>
      </div>
    );
  return (
    <div className="mock industrial" role="img" aria-label="CCPTX concept website: bold industrial typography, dark green palette, and a custom wooden crate illustration.">
      <div className="mock-nav">
        <b>
          CCPTX<span> / CUSTOM CRATES & PALLETS</span>
        </b>
        <span>Our capabilities &nbsp; About &nbsp; Get a quote ↗</span>
      </div>
      <div className="industrial-body">
        <div>
          <small>BUILT AROUND YOUR BUSINESS.</small>
          <h3>
            Strong by design.
            <br />
            Built to deliver.
          </h3>
          <p>
            Custom wood packaging.
            <br />
            No one-size-fits-all thinking.
          </p>
          <span className="mock-cta">Let’s build your solution ↗</span>
        </div>
        <div className="crate-scene">
          <Crate />
          <span className="crate-stamp">
            MADE TO
            <br />
            MEASURE.
          </span>
        </div>
      </div>
      <div className="mock-bottom">
        Good work starts with a strong foundation. <span>EL PASO, TX ↗</span>
      </div>
    </div>
  );
}
export function Crate() {
  return (
    <div
      className="crate"
      aria-label="Illustration of a custom wooden shipping crate"
      role="img"
    >
      <div className="crate-front">
        <i />
        <i />
        <i />
        <i />
        <i />
        <b>CCPTX ↑↑</b>
      </div>
      <div className="crate-side" />
      <div className="crate-top" />
    </div>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <p>
          Websites for businesses
          <br />
          ready to grow.
        </p>
        <nav aria-label="Footer navigation">
          {["Work", "Services", "Process", "About"].map((x) => (
            <a key={x} href={`/#${x.toLowerCase()}`}>
              {x}
            </a>
          ))}
          <a href="/start">Contact ↗</a>
        </nav>
        <span>
          El Paso, Texas
          <br />
          Building everywhere.
        </span>
      </div>
      <a href="/" className="footer-wordmark" aria-label="siteBloom home">
        siteBloom<span>↗</span>
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} siteBloom</span>
        <span>A little different. A lot more you.</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <Stripes />
    </footer>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Eyebrow>A GOOD TIME FOR A FRESH START</Eyebrow>
      <h2>
        Your business grew.
        <br />
        Your website
        <br className="mobile-only" /> should too.
      </h2>
      <div>
        <p>
          Let’s build something you’re proud
          <br />
          to send people to.
        </p>
        <ArrowLink href="/start" light>
          Start Your Redesign
        </ArrowLink>
      </div>
      <span className="cta-orbit" aria-hidden="true" />
    </section>
  );
}
