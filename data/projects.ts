export const projects = [
  {
    slug: "ccptx",
    name: "CCPTX",
    subtitle: "Custom Crates & Pallets",
    industry: "Manufacturing",
    theme: "industrial",
    tags: ["Website Redesign", "Responsive Design", "Brand Modernization"],
    headline: "Built strong. Presented stronger.",
    challenge:
      "An established manufacturing company deserves a website that communicates the care and capability behind its work.",
    direction:
      "Keep the industrial character. Bring clarity to the services, confidence to the typography, and a direct path to requesting a quote.",
    result:
      "A proposed digital presence built around the actual business: practical, dependable, and ready for every screen.",
    colors: ["#1c322b", "#d3dd8f", "#f4f0e5"],
    type: "Manrope / bold and built to last",
  },
  {
    slug: "accent-landscape",
    name: "Accent Landscape",
    subtitle: "Spaces worth stepping outside for.",
    industry: "Landscape Services",
    theme: "landscape",
    tags: ["Website Redesign", "Service Architecture", "Mobile Experience"],
    headline: "A better first impression. Naturally.",
    challenge:
      "Good outdoor work needs a place online where its attention to detail can be seen and understood.",
    direction:
      "Lead with open space, warm natural tones, and a clear structure that connects each service to the customer’s next step.",
    result:
      "A proposed experience that makes the work the focus, with straightforward service navigation and an inviting mobile experience.",
    colors: ["#344c3c", "#d9c6a4", "#f7f2e8"],
    type: "Manrope + Georgia / grounded and welcoming",
  },
] as const;
export type Project = (typeof projects)[number];
