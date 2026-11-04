import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@/components/brand";
import { FinalCta } from "@/components/home/sections";
import { BeforeAfter } from "@/components/work/before-after";
import { BrowserFrame } from "@/components/work/frames";
import { QuoteBlock } from "@/components/work/work-card";
import { caseStudyProjects, statusLabel } from "@/data/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

function find(slug: string) {
  return caseStudyProjects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = find(slug);
  if (!p?.caseStudy) return {};
  const isConcept = p.status === "concept";
  const title = isConcept ? `${p.name} (Concept)` : `${p.name} case study`;
  const description = isConcept ? p.caseStudy.intro : `${p.caseStudy.about} See how siteBloom rebuilt their website.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${title} | siteBloom`,
      description,
      url: `/work/${p.slug}`,
      ...(p.cover ? { images: [{ url: p.cover.src, width: p.cover.width, height: p.cover.height, alt: p.cover.alt }] } : {}),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const p = find(slug);
  if (!p?.caseStudy) notFound();
  const cs = p.caseStudy;
  const isConcept = p.status === "concept";
  const host = p.liveUrl?.replace(/^https?:\/\//, "");

  return (
    <main id="main">
      <section aria-labelledby="case-title" className={`${isConcept ? "bg-ink" : "bg-teal"} on-dark ruled case-hero`}>
        <div className="shell case-hero-grid">
          <div className="case-hero-copy">
            <nav aria-label="Breadcrumb" className="crumbs">
              <ol>
                <li>
                  <Link href="/#work">Work</Link>
                </li>
                <li aria-current="page">{p.name}</li>
              </ol>
            </nav>
            <p className="case-status">
              <span className={`pill pill-${p.status}`}>{statusLabel[p.status]}</span>
              <span>{p.name}</span>
            </p>
            <h1 id="case-title" className="h-xl gold-heading">
              {cs.headline}
            </h1>
            <p className="lead">{cs.intro}</p>
            <dl className="facts">
              {cs.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            {p.liveUrl && (
              <div>
                <a href={p.liveUrl} className="btn btn-cream" target="_blank" rel="noopener noreferrer">
                  Visit {host} <ArrowUpRight />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            )}
          </div>
          {p.cover && (
            <div className="case-hero-art">
              {host ? (
                <BrowserFrame shot={p.cover} url={host} priority sizes="(min-width: 1240px) 600px, (min-width: 900px) 48vw, 92vw" />
              ) : (
                <div className="card case-cover">
                  <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} priority sizes="(min-width: 1240px) 600px, 92vw" className="cover-img" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="problem-title" className="shell section case-split">
        <div className="stack-14">
          <p className="eyebrow eyebrow-teal">01 · {isConcept ? "The challenge" : "The problem"}</p>
          <h2 id="problem-title" className="h-lg">
            {cs.problem.title}
          </h2>
        </div>
        <div className="case-body">
          {cs.problem.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      {cs.beforeAfter && (
        <section aria-labelledby="ba-title" className="bg-ocean ruled section">
          <div className="shell stack-28">
            <h2 id="ba-title" className="h-lg">
              Before and after
            </h2>
            <BeforeAfter before={cs.beforeAfter.before} after={cs.beforeAfter.after} sizes="(min-width: 1240px) 1160px, 94vw" />
          </div>
        </section>
      )}

      <section aria-labelledby="built-title" className="shell section stack-40">
        <div className="section-head">
          <p className="eyebrow eyebrow-teal">02 · {isConcept ? "The direction" : "What we built"}</p>
          <h2 id="built-title" className="h-lg">
            {cs.built.title}
          </h2>
        </div>
        <ul className="feature-grid">
          {cs.built.items.map((item, i) => (
            <li key={item.title} className="card feature" data-reveal style={{ "--delay": `${(i % 3) * 70}ms` } as React.CSSProperties}>
              {item.shot && (
                <div className={`feature-shot ${item.shot.height > item.shot.width ? "is-phone" : ""}`}>
                  <Image
                    src={item.shot.src}
                    alt={item.shot.alt}
                    width={item.shot.width}
                    height={item.shot.height}
                    sizes="(min-width: 1240px) 380px, (min-width: 640px) 45vw, 92vw"
                    className="cover-img top"
                  />
                </div>
              )}
              <div className="feature-body">
                <span aria-hidden="true" className={`feature-bar bar-${i % 5}`} />
                <h3 className="feature-title">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {!isConcept && (
        <section aria-label="Client quote" className="bg-ink on-dark section">
          <div className="shell narrow">
            <QuoteBlock quote={cs.quote} />
          </div>
        </section>
      )}

      {isConcept && (
        <section aria-label="About concepts" className="shell narrow concept-note">
          <p>
            Concepts are design studies we make to explore an industry. They are not client projects.{" "}
            <Link href="/work/rodriguez-plastics" className="text-link">
              See a live client project <ArrowRight size={18} />
            </Link>
          </p>
        </section>
      )}

      <FinalCta title="Your business could be next." body="Tell us what you do. We'll set up a quick call and send you a quote." />
    </main>
  );
}
