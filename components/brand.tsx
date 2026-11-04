import Link from "next/link";

/** The signature stripe: one hard-stop gradient, so no seams at any width. */
export function Stripe({ height = 8, className = "" }: { height?: number; className?: string }) {
  return <span aria-hidden="true" className={`stripe ${className}`} style={{ height }} />;
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="logo" aria-label="siteBloom home" onClick={onClick}>
      <span aria-hidden="true" className="sun logo-mark" />
      <span aria-hidden="true" className="logo-word">
        siteBloom
      </span>
    </Link>
  );
}

type IconProps = { size?: number };

export function ArrowRight({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function Check({ size = 22, color = "currentColor" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
