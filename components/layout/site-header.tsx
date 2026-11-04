"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand";
import { site } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = [toggle.current, ...panel.current.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.innerWidth > 860 && setOpen(false);

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <span aria-hidden="true" className="stripe" style={{ height: 8 }} />
      <div className="shell header-row">
        <Logo onClick={close} />
        <nav aria-label="Main" className="header-nav">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={site.startHref} className="btn btn-gold btn-sm header-cta">
            Start a Project
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className={`burger ${open ? "is-open" : ""}`}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" ref={panel} className="mobile-menu">
          <nav aria-label="Mobile" className="shell mobile-nav">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="mobile-link">
                {item.label}
              </Link>
            ))}
            <Link href={site.startHref} onClick={close} className="btn btn-gold btn-lg">
              Start a Project
            </Link>
            <p lang="es" className="mobile-note">
              Hablamos español
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
