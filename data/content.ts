/** Homepage copy that is easier to edit as data: process, why, FAQ. */

export const process = [
  { name: "Discover", body: "A quick call about your business, your customers and what the site needs to do." },
  { name: "Direction", body: "We agree on pages, content and a look before any design starts." },
  { name: "Design + Build", body: "We design and build your site, mobile-first, and keep you in the loop." },
  { name: "Refine", body: "You review it on your phone and laptop. We adjust until it feels right." },
  { name: "Launch", body: "We connect your domain, go live and check that everything works." },
] as const;

export const why = [
  { title: "Direct line to the founder", body: "No account managers or hand-offs. You talk to the person building your site." },
  { title: "Built for phones first", body: "Most of your customers will find you on a phone. We design for that first." },
  { title: "Fast and easy to find", body: "Sites that load quickly and are set up so Google can find you." },
  { title: "Hablamos español", body: "We work in English or Spanish, whichever is easier for you.", lang: "es" },
] as const;

export const proof = ["Based in El Paso", "Built mobile-first", "Hablamos español", "Direct line to the founder"] as const;

/** TODO: confirm the timeline and the update terms before launch. */
export const faq = [
  {
    q: "How long does it take?",
    a: "It depends on the size of the site. You get a timeline with your quote, after our first call.",
  },
  {
    q: "Do I own my site?",
    a: "Yes. Your domain, your content and your website belong to you.",
  },
  {
    q: "Can you use my current domain?",
    a: "Yes. We connect your existing domain to the new site, so customers find you at the same address.",
  },
  {
    q: "Do you do updates after launch?",
    a: "Yes. When something needs to change, reach out and we'll take care of it.",
  },
  {
    q: "How do I start?",
    a: "Click Start a Project and fill out the short form. We set up a quick call, then send you a quote.",
  },
] as const;
