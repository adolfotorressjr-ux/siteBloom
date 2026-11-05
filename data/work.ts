/**
 * All portfolio work lives here. The homepage grid, featured case study,
 * /work/[slug] pages and sitemap are generated from this list.
 *
 * To add a project: copy an entry, change the fields, done.
 * - status "live"    = a real, launched client site
 * - status "soon"    = a real client, not launched yet (no case study page)
 * - status "concept" = a design study, NOT a client site. Always labeled as such.
 * Never invent clients, quotes or numbers.
 */

export type WorkStatus = "live" | "soon" | "concept";
export type CardColor = "teal" | "ocean" | "orange" | "gold";
export type Shot = { src: string; alt: string; width: number; height: number };

export type CaseStudy = {
  headline: string;
  /** One or two sentences about the business, used on the homepage. */
  about: string;
  intro: string;
  facts: { label: string; value: string }[];
  problem: { title: string; body: string[] };
  built: { title: string; items: { title: string; body: string; shot?: Shot }[] };
  beforeAfter?: { before: Shot; after: Shot };
  /** Leave null until the client approves a quote. A placeholder shows meanwhile. */
  quote: { text: string; name: string; role: string } | null;
};

export type Project = {
  slug: string;
  name: string;
  status: WorkStatus;
  industry: string;
  summary: string;
  liveUrl?: string;
  color: CardColor;
  cover?: Shot;
  mobile?: Shot;
  featured?: boolean;
  caseStudy?: CaseStudy;
};

const rp = "/work/rodriguez-plastics";

export const projects: Project[] = [
  {
    slug: "rodriguez-plastics",
    name: "Rodriguez Plastics Inc.",
    status: "live",
    industry: "Countertops · El Paso area",
    summary:
      "Family-owned since 1968. A new site with services, project galleries, testimonials and quote forms.",
    liveUrl: "https://rodriguezplasticsinc.com",
    color: "teal",
    featured: true,
    cover: { src: `${rp}/after-desktop.jpg`, alt: "The new Rodriguez Plastics homepage", width: 1440, height: 900 },
    mobile: { src: `${rp}/after-mobile.jpg`, alt: "The new Rodriguez Plastics homepage on a phone", width: 390, height: 844 },
    caseStudy: {
      headline: "A 1968 family business, finally online like it should be.",
      about:
        "A family-owned countertop company serving the El Paso area since 1968. Granite, marble, quartz and laminate.",
      intro:
        "Rodriguez Plastics Inc. builds countertops for homes and businesses around El Paso. Granite, marble, quartz and laminate. We rebuilt their website from the ground up.",
      facts: [
        { label: "Since", value: "1968, family-owned" },
        { label: "Serving", value: "El Paso area" },
        { label: "Materials", value: "Granite, marble, quartz, laminate" },
      ],
      problem: {
        title: "Great work, hidden behind an old website.",
        body: [
          "Rodriguez Plastics has decades of countertop work behind them, but the old site didn't show it. It looked dated and generic, and it gave customers no easy way to ask for a quote.",
        ],
      },
      built: {
        title: "A site that sells the work and makes quoting easy.",
        items: [
          {
            title: "Service pages",
            body: "Clear pages for each service and material, so customers find what they need fast.",
            shot: { src: `${rp}/services.jpg`, alt: "Rodriguez Plastics services page", width: 1440, height: 900 },
          },
          {
            title: "Project galleries",
            body: "Real kitchens, slabs and showroom photos, organized so the work speaks for itself.",
            shot: { src: `${rp}/gallery.jpg`, alt: "Rodriguez Plastics gallery page", width: 1440, height: 900 },
          },
          {
            title: "Testimonials",
            body: "Words from real customers, right where people are deciding.",
            shot: { src: `${rp}/testimonials.jpg`, alt: "Rodriguez Plastics testimonials page", width: 1440, height: 900 },
          },
          {
            title: "Quote and contact forms",
            body: "A free estimate form and a quick-question form, both one tap from every page.",
            shot: { src: `${rp}/contact.jpg`, alt: "Rodriguez Plastics free estimate form", width: 1440, height: 900 },
          },
          {
            title: "Mobile-ready",
            body: "Every page works on a phone, where most customers look first.",
            shot: { src: `${rp}/gallery-mobile.jpg`, alt: "Rodriguez Plastics gallery on a phone", width: 390, height: 844 },
          },
        ],
      },
      beforeAfter: {
        before: { src: `${rp}/before-desktop.jpg`, alt: "The old Rodriguez Plastics website", width: 1440, height: 900 },
        after: { src: `${rp}/after-desktop.jpg`, alt: "The new Rodriguez Plastics website", width: 1440, height: 900 },
      },
      quote: null,
    },
  },
  {
    slug: "hermes-staffing",
    name: "Hermes Staffing",
    status: "soon",
    industry: "Staffing",
    summary: "A new website for a staffing company. Launching soon.",
    color: "ocean",
    cover: { src: "/work/hermes-staffing/home-desktop.jpg", alt: "The new Hermes Staffing homepage", width: 1440, height: 900 },
  },
  {
    slug: "ccptx",
    name: "CCPTX",
    status: "concept",
    industry: "Concept · Custom crates & pallets",
    summary: "A design concept for a crate and pallet manufacturer. Not a client site.",
    color: "orange",
    cover: { src: "/images/ccptx-pallets.webp", alt: "Stacked wooden pallets from the CCPTX concept", width: 1920, height: 1080 },
    caseStudy: {
      headline: "Built strong. Presented stronger.",
      about: "A design concept for a crate and pallet manufacturer.",
      intro:
        "A design concept for an established crate and pallet manufacturer. This is a design study, not a client project.",
      facts: [
        { label: "Type", value: "Design concept" },
        { label: "Industry", value: "Manufacturing" },
        { label: "Focus", value: "Redesign, mobile, quote path" },
      ],
      problem: {
        title: "The challenge",
        body: [
          "An established manufacturing company deserves a website that communicates the care and capability behind its work.",
        ],
      },
      built: {
        title: "The direction",
        items: [
          { title: "Keep the industrial character", body: "Practical, dependable and true to the work on the shop floor." },
          { title: "Clear services", body: "Each product and service explained in plain language." },
          { title: "A direct path to a quote", body: "One obvious next step on every page, on every screen." },
        ],
      },
      quote: null,
    },
  },
  {
    slug: "accent-landscape",
    name: "Accent Landscape",
    status: "concept",
    industry: "Concept · Landscaping",
    summary: "A design concept for a landscaping company. Not a client site.",
    color: "gold",
    caseStudy: {
      headline: "A better first impression. Naturally.",
      about: "A design concept for a landscape services company.",
      intro: "A design concept for a landscape services company. This is a design study, not a client project.",
      facts: [
        { label: "Type", value: "Design concept" },
        { label: "Industry", value: "Landscape services" },
        { label: "Focus", value: "Service structure, mobile" },
      ],
      problem: {
        title: "The challenge",
        body: [
          "Good outdoor work needs a place online where its attention to detail can be seen and understood.",
        ],
      },
      built: {
        title: "The direction",
        items: [
          { title: "Lead with open space", body: "Warm, natural tones that let the work be the focus." },
          { title: "Services connected to next steps", body: "Each service leads straight to asking for an estimate." },
          { title: "An inviting mobile experience", body: "Easy to browse from the yard, on a phone." },
        ],
      },
      quote: null,
    },
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const caseStudyProjects = projects.filter((p) => p.caseStudy);

export const statusLabel: Record<WorkStatus, string> = {
  live: "Live",
  soon: "Launching soon",
  concept: "Concept",
};
