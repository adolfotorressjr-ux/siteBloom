import {
  ArrowLink,
  Browser,
  Eyebrow,
  FinalCTA,
  SiteMock,
  Stripes,
} from "@/components/studio/shared";
import {
  Comparison,
  HeroComposition,
  MotionSetup,
  Process,
  ResponsiveShowcase,
  Services,
} from "@/components/studio/interactions";
import { projects } from "@/data/projects";
export default function Home() {
  return (
    <main id="main">
      <MotionSetup />
      <section className="hero">
        <div className="hero-topline">
          <span>
            <i /> INDEPENDENT WEB DESIGN & DEVELOPMENT STUDIO
          </span>
          <span>EL PASO, TX — BUILDING EVERYWHERE ↗</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1>
              Good businesses
              <br />
              deserve{" "}
              <span>
                better
                <br />
                <span className="hero-word">
                  websites
                  <svg
                    viewBox="0 0 470 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 15 Q 220 1 466 9"
                      stroke="currentColor"
                      strokeWidth="7"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
              .
            </h1>
            <p>
              We design and build modern websites for
              <br className="desktop-only" /> businesses ready to outgrow the
              one they have.
            </p>
            <div className="hero-actions">
              <ArrowLink href="/start">Start a Project</ArrowLink>
              <a className="text-link" href="#work">
                See Our Work <span>↓</span>
              </a>
            </div>
          </div>
          <HeroComposition />
        </div>
        <div className="hero-bottom">
          <div>
            WEB DESIGN <span>✳</span> DEVELOPMENT <span>✳</span> REDESIGN
          </div>
          <p>A better website. A bigger possibility.</p>
          <a href="#transformation" aria-label="Scroll to the transformation">
            ↓
          </a>
        </div>
      </section>
      <section className="transformation section-pad" id="transformation">
        <div className="section-heading">
          <div>
            <Eyebrow index="01">A FRESH PERSPECTIVE</Eyebrow>
            <h2>
              Same business.
              <br />
              <span className="teal">
                Completely different
                <br />
                first impression.
              </span>
            </h2>
          </div>
          <p>
            You’ve done the hard part.
            <br />
            You built a good business.
            <br />
            Let’s make sure people see it.
          </p>
        </div>
        <Comparison />
        <div className="transformation-bottom">
          <span className="asterisk" aria-hidden="true">
            ✳
          </span>
          <p>
            You don’t need a new business.
            <br />
            Sometimes you just need a website that finally looks like it.
          </p>
        </div>
      </section>
      <section id="work" className="work section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow index="02">SELECTED DIRECTIONS</Eyebrow>
            <h2>
              Things we’ve
              <br />
              helped <em>bloom.</em>
            </h2>
          </div>
          <p>
            Different businesses. Different personalities.
            <br />
            The same attention to every last detail.
            <br />
            <small>Concept previews · Client assets coming soon</small>
          </p>
        </div>
        {projects.map((project, i) => (
          <article className={`project project-${i} reveal`} key={project.slug}>
            <a
              href={`/work/${project.slug}`}
              className={`project-stage ${project.theme}`}
              aria-label={`Explore ${project.name} concept project`}
            >
              <div className="project-number">
                0{i + 1} / {project.industry.toUpperCase()}
              </div>
              <div className="project-desktop">
                <Browser label={project.name}>
                  <SiteMock theme={project.theme} />
                </Browser>
              </div>
              <div className="project-mobile">
                <div className="phone-camera" />
                <SiteMock theme={project.theme} />
              </div>
              <span className="project-round-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="stage-caption">
                A siteBloom design direction
              </span>
            </a>
            <div className="project-info">
              <div>
                <h3>{project.name}</h3>
                <p>{project.subtitle}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="text-link" href={`/work/${project.slug}`}>
                View Project ↗
              </a>
            </div>
          </article>
        ))}
      </section>
      <Services />
      <section className="proof section-pad">
        <Eyebrow index="04">THE PROOF IS IN THE SCROLL</Eyebrow>
        <p className="proof-question">What can siteBloom build?</p>
        <h2 className="reveal">
          You’re
          <br />
          <em>looking</em> at it<span>.</span>
        </h2>
        <div className="proof-annotations">
          <span>↖ Typography with personality</span>
          <span>↗ Custom interactions</span>
          <span>↓ Built for every screen</span>
        </div>
        <p className="proof-foot">
          Every little detail on this site is an example
          <br />
          of the care we can bring to yours.
        </p>
        <Stripes />
      </section>
      <Process />
      <section className="why section-pad">
        <Eyebrow index="06">SMALL STUDIO. HIGH STANDARDS.</Eyebrow>
        <div className="why-heading">
          <h2>
            Good looks.
            <br />
            Good instincts.
            <br />
            <em>No shortcuts.</em>
          </h2>
          <span className="why-seal" aria-hidden="true">
            MADE WITH
            <br />
            <b>care.</b>
            <br />
            NOT A TEMPLATE
          </span>
        </div>
        <div className="principles">
          {[
            [
              "CUSTOM, NOT COOKIE-CUTTER.",
              "Your business shouldn’t look like everybody else’s template.",
            ],
            [
              "BUILT FOR PHONES.",
              "Because that’s where many customers meet you first.",
            ],
            ["FAST.", "No six-month agency maze."],
            [
              "BUILT WITH PURPOSE.",
              "Pretty isn’t enough. The website needs to help the business.",
            ],
            [
              "WE HANDLE THE TECHNICAL STUFF.",
              "Responsive behavior, deployment, domains, and launch.",
            ],
          ].map(([title, body], i) => (
            <div key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <ResponsiveShowcase />
      <section className="case-teaser section-pad">
        <div className="case-intro">
          <Eyebrow index="08">A CLOSER LOOK / CONCEPT STUDY</Eyebrow>
          <h2>
            Industrial roots.
            <br />A stronger
            <br />
            digital presence.
          </h2>
          <a href="/work/ccptx" className="text-link">
            Explore the CCPTX Project →
          </a>
        </div>
        <div className="case-details">
          {[
            [
              "THE PROBLEM",
              "An established manufacturing business needs a website that reflects the quality of its work.",
            ],
            [
              "THE GOAL",
              "Modernize the presentation without losing its industrial character.",
            ],
            [
              "THE DIRECTION",
              "Confident typography, clear service information, and a practical path from first impression to first conversation.",
            ],
          ].map(([h, p]) => (
            <div key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
          <div className="design-sample">
            <span>
              Aa
              <br />
              <small>MANROPE</small>
            </span>
            <div className="swatches">
              {projects[0].colors.map((c) => (
                <i key={c} style={{ background: c }} title={c} />
              ))}
            </div>
          </div>
        </div>
        <div className="case-teaser-comparison">
          <Comparison compact />
        </div>
      </section>
      <section className="industries section-pad">
        <Eyebrow index="09">SOUND LIKE YOU?</Eyebrow>
        <h2>
          We like good businesses
          <br />
          with websites that
          <br />
          <em>haven’t caught up yet.</em>
        </h2>
        <div className="industry-list">
          {[
            "Contractors",
            "Manufacturers",
            "Landscapers",
            "Restaurants",
            "Professional Services",
            "Local Businesses",
            "Growing Companies",
          ].map((x, i) => (
            <span key={x}>
              {x}
              <i
                style={{
                  color: [
                    "#1499C6",
                    "#075D73",
                    "#E74432",
                    "#F47A24",
                    "#F6B51B",
                  ][i % 5],
                }}
              >
                ✳
              </i>
            </span>
          ))}
        </div>
      </section>
      <section id="about" className="about section-pad">
        <div className="about-photo">
          <img
            src="/images/desert.webp"
            srcSet="/images/desert-400.webp 400w, /images/desert-700.webp 700w, /images/desert.webp 1000w"
            sizes="(max-width: 600px) 90vw, 40vw"
            alt="Warm desert landscape, a nod to the studio’s El Paso roots"
            width="1000"
            height="662"
            loading="lazy"
          />
          <span>
            ROOTED IN EL PASO.
            <br />
            OPEN TO EVERYWHERE.
          </span>
        </div>
        <div>
          <Eyebrow index="10">A SIMPLE THOUGHT</Eyebrow>
          <h2>
            Great businesses.
            <br />
            Better websites.
            <br />
            <em>That’s the idea.</em>
          </h2>
          <p>
            There are thousands of great businesses with websites that make them
            look worse than they actually are.
          </p>
          <p>We’re fixing that.</p>
          <p className="about-location">
            Based in El Paso, Texas.
            <br />
            Building for businesses everywhere.
          </p>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
