import Link from "next/link";
import { Logo } from "@/components/brand";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink on-dark site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-muted">{site.tagline} Made in El Paso, TX.</p>
          <p lang="es" className="footer-es">
            Hablamos español
          </p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link href={site.startHref}>Start a Project</Link>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="shell footer-legal">© 2026 siteBloom. El Paso, Texas.</div>
      <span aria-hidden="true" className="stripe" style={{ height: 10 }} />
    </footer>
  );
}
