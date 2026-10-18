"use client";

import Script from "next/script";

const questionnaireUrl = "https://tally.so/r/xVxolv";
const embedUrl =
  "https://tally.so/embed/xVxolv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

function loadQuestionnaire() {
  const tallyWindow = window as Window & {
    Tally?: { loadEmbeds: () => void };
  };
  tallyWindow.Tally?.loadEmbeds();
}

export default function Inquiry() {
  return (
    <section className="inquiry-form" aria-label="Project questionnaire">
      <iframe
        data-tally-src={embedUrl}
        loading="lazy"
        width="100%"
        height="300"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="siteBloom customer intake questionnaire"
        style={{ display: "block", width: "100%", border: 0 }}
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onReady={loadQuestionnaire}
      />
      <p style={{ marginTop: 24, fontSize: 14 }}>
        Having trouble with the form?{" "}
        <a
          className="text-link"
          href={questionnaireUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the questionnaire in a new tab ↗
        </a>
      </p>
    </section>
  );
}
