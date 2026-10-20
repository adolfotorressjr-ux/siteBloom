"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Browser, SiteMock, Eyebrow } from "./shared";
import { CcptxShowcase } from "./ccptx-showcase";
import { services } from "@/data/services";
export function MotionSetup() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
export function HeroComposition() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="hero-art"
      ref={ref}
      onPointerMove={(e) => {
        if (
          e.pointerType !== "mouse" ||
          matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          "--rx",
          `${(e.clientY - r.top - r.height / 2) / 90}deg`,
        );
        ref.current?.style.setProperty(
          "--ry",
          `${(e.clientX - r.left - r.width / 2) / 80}deg`,
        );
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
      }}
    >
      <svg
        className="hero-ribbon"
        viewBox="0 0 900 600"
        fill="none"
        aria-hidden="true"
      >
        {["#1499C6", "#075D73", "#E74432", "#F47A24", "#F6B51B"].map((c, i) => (
          <path
            key={c}
            d={`M 920 ${145 + i * 19} H 730 C 570 ${145 + i * 19}, 660 ${480 + i * 19}, 400 ${480 + i * 19} H -80`}
            stroke={c}
            strokeWidth="13"
          />
        ))}
      </svg>
      <div className="hero-browser">
        <Browser label="a better first impression">
          <SiteMock theme="landscape" priority />
        </Browser>
      </div>
      <div className="hero-phone">
        <div className="phone-camera" />
        <SiteMock />
        <span className="phone-home" />
      </div>
      <div className="craft-note">
        <span>↖</span> Built with a little
        <br />
        extra everything.
      </div>
      <div className="hero-art-footer">
        <span className="live-dot" /> SMALL STUDIO. BIG POSSIBILITIES.
      </div>
    </div>
  );
}
export function Comparison({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState(48);
  return (
    <div className={`comparison ${compact ? "compact" : ""}`}>
      <div className="comparison-labels">
        <span>Before siteBloom</span>
        <span>After siteBloom ↗</span>
      </div>
      <Browser label="Same business. A whole new feeling.">
        <div className="compare-stage">
          <div className="compare-after">
            <CcptxShowcase />
          </div>
          <div
            className="compare-before"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <SiteMock old />
          </div>
          <div className="compare-line" style={{ left: `${value}%` }}>
            <span>← →</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            onInput={(e) => setValue(Number(e.currentTarget.value))}
            aria-label="Before and after comparison"
            aria-valuetext={`${value}% before, ${100 - value}% after`}
          />
        </div>
      </Browser>
      <div className="comparison-caption">
        <span>ILLUSTRATIVE REDESIGN / CCPTX</span>
        <span>
          Drag to see the difference <span aria-hidden="true">↔</span>
        </span>
      </div>
    </div>
  );
}
function ServicePreview({ kind }: { kind: string }) {
  const [day, setDay] = useState(16);
  const [count, setCount] = useState(0);
  if (kind === "business" || kind === "redesign")
    return (
      <SiteMock theme={kind === "business" ? "landscape" : "industrial"} />
    );
  if (kind === "store")
    return (
      <div className="service-store">
        <div className="demo-nav">
          SUNROOM GOODS <span>Bag ({count})</span>
        </div>
        <p>GOOD THINGS FOR EVERY DAY.</p>
        <h3>
          Made for
          <br />
          slow mornings.
        </h3>
        <div className="store-bottom">
          <div className="ceramic" />
          <div>
            <b>The everyday mug</b>
            <p>$28 · Sandstone</p>
            <button onClick={() => setCount(count + 1)}>
              {count ? "Add another +" : "Add to bag +"}
            </button>
            <small aria-live="polite">
              {count
                ? `${count} item${count > 1 ? "s" : ""} in demo bag`
                : "Interactive store demo"}
            </small>
          </div>
        </div>
      </div>
    );
  if (kind === "booking")
    return (
      <div className="service-booking">
        <div className="demo-nav">
          A LITTLE TIME FOR YOU. <span>↗</span>
        </div>
        <h3>
          Let’s make
          <br />a date.
        </h3>
        <p>Choose a day to explore this booking demo.</p>
        <div className="calendar">
          {Array.from({ length: 21 }, (_, i) => (
            <button
              className={day === i + 1 ? "chosen" : ""}
              onClick={() => setDay(i + 1)}
              key={i}
              aria-pressed={day === i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <span className="demo-confirm" aria-live="polite">
          Day {day} selected · 10:00 AM available
        </span>
      </div>
    );
  if (kind === "landing")
    return (
      <div className="service-landing">
        <small>THE DESERT TABLE / A CONCEPT</small>
        <h3>
          Good food.
          <br />
          Great company.
          <br />
          One night.
        </h3>
        <span>FRIDAY AT SUNSET</span>
        <a href="/start">Build a page like this ↗</a>
      </div>
    );
  return (
    <div className="service-custom">
      <small>SMALL INTERACTION. BIG PERSONALITY.</small>
      <h3>Room to play.</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="play-orbit"
        aria-label="Change the interactive color composition"
        style={{ transform: `rotate(${count * 45}deg)` }}
      >
        <i />
        <i />
        <i />
        <i />
      </button>
      <p>Give it a spin ↗</p>
    </div>
  );
}
export function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="services section-pad">
      <Eyebrow index="03">MADE FOR YOUR NEXT CHAPTER</Eyebrow>
      <h2>
        Whatever your business
        <br />
        needs to do online.
      </h2>
      <div className="services-layout">
        <div
          className="service-list"
          role="tablist"
          aria-label="Explore services"
          aria-orientation="vertical"
        >
          {services.map((s, i) => (
            <button
              key={s.kind}
              role="tab"
              id={`service-tab-${i}`}
              aria-selected={active === i}
              aria-controls="service-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (
                  [
                    "ArrowDown",
                    "ArrowUp",
                    "ArrowLeft",
                    "ArrowRight",
                    "Home",
                    "End",
                  ].includes(e.key)
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 5
                        : (active +
                            (e.key === "ArrowDown" || e.key === "ArrowRight"
                              ? 1
                              : 5)) %
                          6;
                  setActive(next);
                  document.getElementById(`service-tab-${next}`)?.focus();
                }
              }}
            >
              <span>0{i + 1}</span>
              {s.name}
              <i>↗</i>
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id="service-panel"
          aria-labelledby={`service-tab-${active}`}
          tabIndex={0}
        >
          <Browser label="Ideas, made real." className="service-browser">
            <ServicePreview
              key={services[active].kind}
              kind={services[active].kind}
            />
          </Browser>
          <div className="service-description">
            <h3>{services[active].title}</h3>
            <p>{services[active].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ResponsiveShowcase() {
  const [device, setDevice] = useState(0);
  const root = useRef<HTMLElement>(null);
  const manual = useRef(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scroll = () => {
      if (manual.current || !root.current) return;
      const r = root.current.getBoundingClientRect();
      const progress = (innerHeight - r.top) / (innerHeight + r.height);
      setDevice(Math.min(3, Math.max(0, Math.floor(progress * 4))));
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <section ref={root} className="responsive-section section-pad">
      <div className="responsive-heading">
        <div>
          <Eyebrow index="07">GOOD DESIGN GOES EVERYWHERE</Eyebrow>
          <h2>
            One website.
            <br />
            Every screen.
          </h2>
        </div>
        <p>
          Same personality.
          <br />A perfect fit, wherever it lands.
        </p>
      </div>
      <div
        className="device-controls"
        role="group"
        aria-label="Preview screen sizes"
      >
        {["Desktop", "Laptop", "Tablet", "Phone"].map((s, i) => (
          <button
            key={s}
            aria-pressed={device === i}
            onClick={() => {
              manual.current = true;
              setDevice(i);
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="device-stage">
        <div className={`responsive-device device-${device}`}>
          <Browser label="accent landscape">
            <SiteMock theme="landscape" />
          </Browser>
        </div>
      </div>
      <p className="device-note">Built to adapt. Never just squeezed to fit.</p>
    </section>
  );
}
export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const scroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      ref.current.style.setProperty(
        "--progress",
        `${Math.max(0, Math.min(1, (innerHeight * 0.7 - r.top) / r.height))}`,
      );
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  const steps = [
    [
      "Discover",
      "We learn your business, customers, goals, and what isn’t working.",
    ],
    [
      "Direction",
      "We establish the visual direction before disappearing into development.",
    ],
    ["Design + Build", "The design becomes a real, responsive website."],
    ["Refine", "We polish the details together."],
    ["Launch", "Domain, deployment, and final checks handled."],
  ];
  return (
    <section className="process section-pad" id="process">
      <div>
        <Eyebrow index="05">GOOD WORK. NO MYSTERY.</Eyebrow>
        <h2>
          From “we need
          <br />a better website”
          <br />
          to{" "}
          <em>
            “wait…
            <br />
            that’s ours?”
          </em>
        </h2>
        <p>
          A small studio means a direct line.
          <br />
          You’re part of the process, start to finish.
        </p>
      </div>
      <ol className="timeline" ref={ref}>
        {steps.map(([title, text], i) => (
          <li key={title}>
            <span>0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
