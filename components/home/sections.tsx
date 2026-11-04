import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@/components/brand";
import { BeforeAfter } from "@/components/work/before-after";
import { BrowserFrame, PhoneFrame } from "@/components/work/frames";
import { QuoteBlock, WorkCard } from "@/components/work/work-card";
import { faq, process, proof, why } from "@/data/content";
import { plans, pricingNote } from "@/data/pricing";
import { site } from "@/data/site";
import { featuredProject, projects } from "@/data/work";

const stripeColors = ["var(--red)", "var(--orange)", "var(--gold)", "var(--ocean)", "var(--teal)"];

export function Hero() {
  const p = featuredProject;
  return (
    <section aria-labelledby="hero-title" className="shell hero">
      <div className="hero-copy">
        <p className="hero-badge">
          <span aria-hidden="true" className="stripe" style={{ width: 28, height: 10, borderRadius: 3 }} />
          Web design studio · El Paso, TX
        </p>
        <h1 id="hero-title" className="h-xl">
          Good businesses deserve better websites.
        </h1>
        <p className="lead hero-sub">
          We build fast, modern websites for businesses that have outgrown their old one. You work directly with the
          founder, start to finish.
        </p>
        <div className="btn-row">
          <Link href={site.startHref} className="btn btn-gold">
            Start a Project <ArrowRight />
          </Link>
          <Link href="#work" className="btn btn-cream">
            See Our Work
          </Link>
        </div>
      </div>
      <div className="hero-art">
        <span aria-hidden="true" className="sun hero-sun" />
        {p.cover && (
          <div className="hero-laptop">
            <BrowserFrame shot={p.cover} url="rodriguezplasticsinc.com" eager sizes="(min-width: 1240px) 560px, (min-width: 900px) 46vw, 86vw" />
          </div>
        )}
        {p.mobile && (
          <div className="hero-phone">
            <PhoneFrame shot={{ ...p.mobile, alt: "" }} sizes="160px" />
          </div>
        )}
        <p className="hero-caption">
          Our latest launch: <Link href={`/work/${p.slug}`}>{p.name}</Link>
        </p>
      </div>
    </section>
  );
}

export function ProofStrip() {
  return (
    <section aria-label="About siteBloom" className="bg-ink proof">
      <ul className="shell proof-list">
        {proof.map((item, i) => (
          <li key={item} lang={item === "Hablamos español" ? "es" : undefined}>
            <span aria-hidden="true" className="proof-dot" style={{ background: stripeColors[i] }} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FeaturedCase() {
  const p = featuredProject;
  const cs = p.caseStudy!;
  return (
    <section id="case-study" aria-labelledby="cs-title" className="bg-teal on-dark section">
      <div className="shell stack-48">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Featured case study · Live client</p>
          <h2 id="cs-title" className="h-lg gold-heading">
            {p.name}
          </h2>
          <p className="lead">{cs.about}</p>
        </div>

        <div className="cs-grid">
          <div className="cs-copy" data-reveal>
            <div className="stack-10">
              <h3 className="h-md">The problem</h3>
              <p>{cs.problem.body[0]}</p>
            </div>
            <div className="stack-14">
              <h3 className="h-md">What we built</h3>
              <ul className="built-list">
                {cs.built.items.map((item) => (
                  <li key={item.title}>
                    <Check color="var(--gold)" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {cs.beforeAfter && (
            <div className="cs-compare" data-reveal style={{ "--delay": "120ms" } as React.CSSProperties}>
              <BeforeAfter before={cs.beforeAfter.before} after={cs.beforeAfter.after} sizes="(min-width: 1240px) 640px, (min-width: 900px) 52vw, 92vw" />
            </div>
          )}
        </div>

        <QuoteBlock quote={cs.quote} />

        <div className="btn-row">
          <Link href={`/work/${p.slug}`} className="btn btn-cream">
            Read the case study <ArrowRight />
          </Link>
          {p.liveUrl && (
            <a href={p.liveUrl} className="text-link" target="_blank" rel="noopener noreferrer">
              Visit the live site <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function WorkGrid() {
  return (
    <section id="work" aria-labelledby="work-title" className="shell section stack-40">
      <div className="split-head" data-reveal>
        <h2 id="work-title" className="h-lg">
          Our work
        </h2>
        <p className="split-note">Real clients, labeled honestly. Concepts are design studies, not client sites.</p>
      </div>
      <ul className="work-grid">
        {projects.map((p) => (
          <WorkCard key={p.slug} project={p} />
        ))}
      </ul>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="svc-title" className="bg-ocean ruled section">
      <div className="shell stack-40">
        <div className="section-head" data-reveal>
          <h2 id="svc-title" className="h-lg">
            Straightforward pricing.
          </h2>
          <p className="lead strong">Starting prices, so you know where you stand. {pricingNote}</p>
        </div>
        <ul className="plan-grid">
          {plans.map((plan, i) => (
            <li
              key={plan.name}
              className={`card card-hover plan ${plan.addOn ? "plan-addon" : ""}`}
              data-reveal
              style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">
                <span className="plan-lead">{plan.lead}</span>
                <span className="display plan-amount">{plan.price}</span>
              </p>
              <p className="plan-desc">{plan.description}</p>
            </li>
          ))}
        </ul>
        <div>
          <Link href={site.startHref} className="btn btn-gold">
            Get a quote <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="proc-title" className="shell section stack-44">
      <h2 id="proc-title" className="h-lg" data-reveal>
        How it works
      </h2>
      <ol className="process-grid">
        {process.map((step, i) => (
          <li key={step.name} className="step" data-reveal style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
            <span aria-hidden="true" className={`step-num display ${i === 4 ? "on-teal" : ""}`} style={{ background: stripeColors[i] }}>
              {i + 1}
            </span>
            <h3 className="step-name">
              <span className="sr-only">Step {i + 1}: </span>
              {step.name}
            </h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Why() {
  return (
    <section aria-labelledby="why-title" className="bg-ink on-dark section">
      <div className="shell stack-44">
        <h2 id="why-title" className="h-lg" data-reveal>
          Why siteBloom
        </h2>
        <ul className="why-grid">
          {why.map((item, i) => (
            <li key={item.title} data-reveal style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
              <span aria-hidden="true" className="why-bar" style={{ background: stripeColors[i] }} />
              <h3 className="why-title" lang={"lang" in item ? item.lang : undefined}>
                {item.title}
              </h3>
              <p className="muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="shell narrow section stack-32">
      <h2 id="faq-title" className="h-lg">
        Questions, answered
      </h2>
      <div className="faq">
        {faq.map((item) => (
          <details key={item.q}>
            <summary>
              <h3 className="faq-q">{item.q}</h3>
              <span aria-hidden="true" className="faq-plus">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="faq-a">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Ready for a website that works as hard as you do?",
  body = "Tell us about your business. We'll set up a quick call and send you a quote.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-gold final-cta">
      <span aria-hidden="true" className="stripe cta-stripe" />
      <div className="shell cta-inner" data-reveal>
        <h2 id="cta-title" className="h-xl cta-title">
          {title}
        </h2>
        <p className="lead strong">{body}</p>
        <Link href={site.startHref} className="btn btn-ink btn-lg">
          Start a Project <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
