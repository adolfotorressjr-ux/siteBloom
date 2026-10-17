"use client";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./shared";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLElement>("a");
        if (!links) return;
        const first = links[0],
          last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (document.activeElement === toggle.current) {
          e.preventDefault();
          (e.shiftKey ? last : first)?.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <header
      className={`nav ${scrolled ? "scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <a
        href="/"
        className="logo-link"
        aria-label="siteBloom home"
        onClick={() => setOpen(false)}
      >
        <Wordmark />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {["Work", "Services", "Process", "About"].map((x) => (
          <a key={x} href={`/#${x.toLowerCase()}`}>
            {x}
          </a>
        ))}
      </nav>
      <a href="/start" className="nav-cta">
        Start a Project <span>↗</span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"} <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id="mobile-menu" ref={panel} className="mobile-menu">
          <span className="eyebrow">GOOD THINGS START HERE.</span>
          <nav aria-label="Mobile navigation">
            {["Work", "Services", "Process", "About"].map((x, i) => (
              <a
                key={x}
                href={`/#${x.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                <small>0{i + 1}</small>
                {x}
                <span>↗</span>
              </a>
            ))}
            <a href="/start" onClick={() => setOpen(false)}>
              <small>05</small>Let’s talk<span>↗</span>
            </a>
          </nav>
          <p>El Paso, Texas. Building everywhere.</p>
          <div className="menu-stripe" />
        </div>
      )}
    </header>
  );
}
