import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  Browser,
  SiteMock,
  Eyebrow,
  FinalCTA,
  ArrowLink,
} from "@/components/studio/shared";
import { Comparison } from "@/components/studio/interactions";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.name} — Design Study` : "Project not found",
    alternates: { canonical: `/work/${slug}` },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects.find((x) => x.slug !== slug)!;
  return (
    <main id="main" className="case-page">
      <section className="case-hero section-pad">
        <a href="/#work" className="text-link">
          ← Selected work
        </a>
        <Eyebrow>CONCEPT STUDY / {p.industry.toUpperCase()}</Eyebrow>
        <h1>
          {p.name}
          <span>↗</span>
        </h1>
        <p>{p.headline}</p>
        <div className="case-meta">
          <div>
            <small>CLIENT DIRECTION</small>
            <b>{p.name}</b>
          </div>
          <div>
            <small>INDUSTRY</small>
            <b>{p.industry}</b>
          </div>
          <div>
            <small>SERVICES</small>
            <b>{p.tags.join(" / ")}</b>
          </div>
        </div>
        <p className="concept-note">
          Illustrative design study. These are proposed layouts, not a claim of
          completed client work or measured results.
        </p>
      </section>
      <section className={`case-main-preview ${p.theme}`}>
        <Browser label={p.name}>
          <SiteMock theme={p.theme} />
        </Browser>
      </section>
      <section className="case-narrative section-pad">
        <Eyebrow index="01">THE CHALLENGE</Eyebrow>
        <h2>{p.challenge}</h2>
        <div>
          <h3>Creative direction</h3>
          <p>{p.direction}</p>
        </div>
      </section>
      <section className="section-pad case-original">
        <Eyebrow index="02">THE STARTING POINT</Eyebrow>
        <h2>
          A familiar problem.
          <br />A different possibility.
        </h2>
        <p>
          Illustrative legacy layout. Replace with the original client
          screenshot when available.
        </p>
        <Browser label="Illustrative original layout">
          <SiteMock old theme={p.theme} />
        </Browser>
      </section>
      <section className="section-pad case-desktop">
        <Eyebrow index="03">THE DESKTOP EXPERIENCE</Eyebrow>
        <h2>
          Space for the work
          <br />
          to speak.
        </h2>
        <Browser label={p.name}>
          <SiteMock theme={p.theme} />
        </Browser>
      </section>
      <section className="case-mobile-section section-pad">
        <div>
          <Eyebrow index="04">THE MOBILE EXPERIENCE</Eyebrow>
          <h2>
            Small screen.
            <br />
            Same presence.
          </h2>
          <p>
            Navigation simplifies. Type stays readable.
            <br />
            The important next step stays close.
          </p>
        </div>
        <div className="case-phone">
          <div className="phone-camera" />
          <SiteMock theme={p.theme} />
        </div>
      </section>
      {p.slug === "ccptx" ? (
        <section className="section-pad">
          <Eyebrow index="05">BEFORE / AFTER</Eyebrow>
          <Comparison />
        </section>
      ) : (
        <section className="section-pad">
          <Eyebrow index="05">THEN / NEXT</Eyebrow>
          <div className="case-pair">
            <Browser label="Illustrative legacy layout">
              <SiteMock old theme={p.theme} />
            </Browser>
            <Browser label="Proposed direction">
              <SiteMock theme={p.theme} />
            </Browser>
          </div>
        </section>
      )}
      <section className="case-design section-pad">
        <Eyebrow index="06">DESIGN DETAILS</Eyebrow>
        <div>
          <h2>
            Character,
            <br />
            in the details.
          </h2>
          <div>
            <div className="case-swatches">
              {p.colors.map((c) => (
                <span style={{ background: c }} key={c}>
                  <small>{c}</small>
                </span>
              ))}
            </div>
            <p className="type-sample">Aa Bb Cc</p>
            <p>{p.type}</p>
          </div>
        </div>
        <p className="case-result">{p.result}</p>
        <p className="concept-note">
          Final website link will be added when the client project is available.
        </p>
      </section>
      <section className="next-project section-pad">
        <Eyebrow>KEEP EXPLORING</Eyebrow>
        <a href={`/work/${next.slug}`}>
          <h2>{next.name}</h2>
          <span>↗</span>
        </a>
      </section>
      <FinalCTA />
    </main>
  );
}
