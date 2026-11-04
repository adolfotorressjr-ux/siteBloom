"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Shot } from "@/data/work";

/**
 * Before/after comparison. A native range input drives it, so it works with
 * mouse, touch and arrow keys, and screen readers announce the position.
 */
export function BeforeAfter({ before, after, sizes }: { before: Shot; after: Shot; sizes: string }) {
  const [pos, setPos] = useState(50);
  const hintId = useId();

  return (
    <div className="ba">
      <div className="ba-stage">
        <Image src={before.src} alt={before.alt} fill sizes={sizes} className="ba-img" />
        <div className="ba-after" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={after.src} alt={after.alt} fill sizes={sizes} className="ba-img" />
        </div>
        <span className="ba-tag ba-tag-after" aria-hidden="true">
          After
        </span>
        <span className="ba-tag ba-tag-before" aria-hidden="true">
          Before
        </span>
        <input
          className="ba-range"
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Before and after comparison"
          aria-describedby={hintId}
          aria-valuetext={`Showing ${pos}% of the new site`}
        />
        <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="ba-line" />
          <span className="ba-knob">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
      <p id={hintId} className="ba-hint">
        Drag the handle, or use the arrow keys, to compare the old site with the new one.
      </p>
    </div>
  );
}
