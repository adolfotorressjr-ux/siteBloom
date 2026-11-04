import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/brand";
import { statusLabel, type Project } from "@/data/work";

export function WorkCard({ project }: { project: Project }) {
  const href = project.caseStudy ? `/work/${project.slug}` : undefined;
  return (
    <li className="card card-hover work-card">
      <div className={`work-cover cover-${project.color}`}>
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt=""
            width={project.cover.width}
            height={project.cover.height}
            sizes="(min-width: 1240px) 290px, (min-width: 640px) 45vw, 92vw"
            className="cover-img top"
          />
        ) : (
          <span aria-hidden="true" className="work-cover-name display">
            {project.name}
          </span>
        )}
        <span className={`pill pill-${project.status} work-pill`}>{statusLabel[project.status]}</span>
      </div>
      <div className="work-body">
        <p className="work-industry">{project.industry}</p>
        <h3 className="work-name">
          {href ? (
            <Link href={href} className="stretched">
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="work-summary">{project.summary}</p>
        {href && (
          <span aria-hidden="true" className="work-more">
            {project.status === "concept" ? "See the concept" : "Read the case study"} <ArrowRight size={18} />
          </span>
        )}
      </div>
    </li>
  );
}

export function QuoteBlock({ quote }: { quote: { text: string; name: string; role: string } | null }) {
  if (!quote) {
    // Placeholder until the client approves a quote. Kept deliberately plain.
    return (
      <figure className="quote quote-pending">
        <blockquote className="display">A word from Monica is on the way.</blockquote>
        <figcaption>Client quote coming soon · Rodriguez Plastics Inc.</figcaption>
      </figure>
    );
  }
  return (
    <figure className="quote">
      <blockquote className="display">“{quote.text}”</blockquote>
      <figcaption>
        {quote.name} · {quote.role}
      </figcaption>
    </figure>
  );
}
