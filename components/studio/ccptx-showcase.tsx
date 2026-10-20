import styles from "./ccptx-showcase.module.css";

/** A presentation inside the comparison, not a second interactive website. */
export function CcptxShowcase({ presentation = "responsive" }: { presentation?: "responsive" | "desktop" | "phone" }) {
  return (
    <div className={`${styles.showcase} ${presentation === "desktop" ? styles.desktop : presentation === "phone" ? styles.phone : ""}`} role="img" aria-label="CCPTX redesigned website concept: real stacked pallets in a manufacturing facility, bold Custom Packaging. Built for Industry. headline, maroon quote button, and an illustrated engineering blueprint.">
      <div className={styles.navigation} aria-hidden="true">
        <div className={styles.wordmark}>CCPTX<span>CUSTOM CRATES & PALLETS, LTD.</span></div>
        <div className={styles.links}>Capabilities<span>Our company</span><b>Get a quote ↗</b></div>
      </div>
      <div className={styles.canvas} aria-hidden="true">
        <picture>
          <source media="(max-width: 600px)" srcSet="/images/ccptx-pallets-mobile.webp" />
          <img className={styles.photograph} src="/images/ccptx-pallets.webp" width="1920" height="1080" loading="lazy" alt="" />
        </picture>
        <div className={styles.shade} />
        <div className={styles.copy}>
          <div className={styles.eyebrow}><i />CUSTOM CRATES & PALLETS, LTD.</div>
          <h3><span>CUSTOM PACKAGING.</span><span>BUILT FOR INDUSTRY.</span></h3>
          <p>Your product. Your specifications. Our expertise.<br /><span>Custom wood packaging engineered around your business.</span></p>
          <span className={styles.quote}>REQUEST A QUOTE <b>↗</b></span>
        </div>
        <div className={styles.blueprint}>
          <div className={styles.drawingLabel}><span>01 / ENGINEERED TO FIT</span><span>+</span></div>
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
              <path d="M42 119 188 42 354 125 207 205Z M42 119v13l165 85 147-79v-13 M207 205v12" />
              <path d="m66 106 166 85m-143-97 166 85m-143-98 167 85m-143-98 167 85m-143-98 166 85m-144-97 168 83" />
              <path d="M42 159 207 244 354 165v-13l-147 79-165-85Zm0-13 18-9m147 94v13m147-92-18-9" />
              <path d="M54 138v24l12 6v-24m128 66v24l13 7v-24m117-63v23l12-6v-24M132 178v24l13 7v-24M271 183v23l12-6v-23" />
              <path d="M24 123 24 164m-5-39 10-5m-10 46 10-5M51 100 187 28m-138 67 5 10m130-81 5 10" strokeDasharray="3 4" opacity=".65" />
              <path d="m263 83 22-13V27m-179 85-30-16H30" opacity=".8" />
              <circle cx="263" cy="83" r="3" /><circle cx="106" cy="112" r="3" />
            </g>
            <g fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="1.7"><text x="268" y="18">LOAD</text><text x="18" y="87">TIMBER</text></g>
          </svg>
          <div className={styles.drawingFoot}>CUSTOM BY DESIGN<span>ILLUSTRATIVE GEOMETRY</span></div>
        </div>
        <div className={styles.bottom}><span><b>+</b> BUILT TO SPEC. BUILT TO LAST.</span><span>EL PASO, TEXAS ↗</span></div>
      </div>
    </div>
  );
}
