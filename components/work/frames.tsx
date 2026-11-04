import Image from "next/image";
import type { Shot } from "@/data/work";

export function BrowserFrame({
  shot,
  url,
  priority = false,
  sizes,
}: {
  shot: Shot;
  url: string;
  priority?: boolean;
  sizes: string;
}) {
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
          priority={priority}
          className="cover-img"
        />
      </div>
    </div>
  );
}

export function PhoneFrame({ shot, sizes, priority = false }: { shot: Shot; sizes: string; priority?: boolean }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} priority={priority} className="cover-img top" />
      </div>
    </div>
  );
}
