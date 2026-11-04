import { FeaturedCase, FinalCta, Faq, Hero, Process, ProofStrip, Services, Why, WorkGrid } from "@/components/home/sections";
import { faq } from "@/data/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProofStrip />
      <FeaturedCase />
      <WorkGrid />
      <Services />
      <Process />
      <Why />
      <Faq />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
