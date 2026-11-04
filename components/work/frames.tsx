import Image from "next/image";
import type { Shot } from "@/data/work";

/**
 * Browser-window mockup. `eager` loads the screenshot right away (above the
 * fold) without preloading it, so the fonts behind the LCP headline win the
 * bandwidth race on slow phones.
 */
export function BrowserFrame({ shot, url, eager = false, sizes }: { shot: Shot; url: string; eager?: boolean; sizes: string }) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <span className="dot" style={{ background: "var(--red)" }} />
        <span className="dot" style={{ background: "var(--gold)" }} />
        <span className="dot" style={{ background: "var(--ocean)" }} />
        <span className="browser-url">{url}</span>
      </div>
      <div className="browser-screen">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="cover-img"
        />
      </div>
    </div>
  );
}

export function PhoneFrame({ shot, sizes }: { shot: Shot; sizes: string }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} className="cover-img top" />
      </div>
    </div>
  );
}
