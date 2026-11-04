# siteBloom

The siteBloom studio website: [mysitebloom.com](https://mysitebloom.com). Next.js 16 (App Router), React 19, TypeScript, deployed on Vercel.

```sh
npm ci
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # ESLint (next/core-web-vitals + TypeScript)
npm run typecheck
```

Node 24.x. `vercel.json` sets the install and build commands. No environment variables are required.

## Where to edit things

| What | File |
| --- | --- |
| Name, tagline, nav, **email** | `data/site.ts` |
| Portfolio projects and case studies | `data/work.ts` |
| Starting prices | `data/pricing.ts` |
| Process steps, Why siteBloom, FAQ, proof strip | `data/content.ts` |
| Colors, type, stripe, all styles | `app/globals.css` |
| Tally form on /start | `components/start/tally-embed.tsx` |

### Add a project (about a minute)

1. Copy an entry in `data/work.ts` and change the fields.
2. Set `status` to `"live"`, `"soon"` or `"concept"`. Concepts are always labeled as concepts.
3. Optional: add screenshots to `public/work/<slug>/` and reference them as `cover`, `mobile`, or inside `caseStudy`.
4. Add a `caseStudy` block to get a `/work/<slug>` page. Without it, the project shows as a card only.

The homepage grid, case study pages and sitemap update automatically.

### Add Monica's quote

In `data/work.ts`, replace `quote: null` on Rodriguez Plastics with
`quote: { text: "…", name: "Monica …", role: "Rodriguez Plastics Inc." }`. Until then a clearly marked placeholder shows.

## Routes

`/`, `/work/rodriguez-plastics`, `/work/ccptx`, `/work/accent-landscape`, `/start`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image.png`. Unknown URLs get the branded 404.

## Brand rules (built into `globals.css`)

- Colors: Cream `#F7F2E8`, Ocean `#1499C6`, Teal `#075D73`, Ink `#15272B`, Red `#E74432`, Orange `#F47A24`, Gold `#F6B51B`, White.
- Text is Ink on Cream, White, Ocean, Gold and Orange; Cream on Teal and Ink. Never Gold or Orange text on Cream.
- The stripe is one `linear-gradient` with hard stops (`--stripe`), so it has no seams at any width.
- Type: Fraunces (display, soft axis) and DM Sans (body), self-hosted with `next/font`.

## Images

Rodriguez Plastics screenshots in `public/work/rodriguez-plastics/` were captured from the live site. The "before" image is the
July 2025 Internet Archive snapshot of the old site. `next/image` serves them as AVIF/WebP at the right size.

## Accessibility and motion

- Skip link, visible focus rings, ordered headings, alt text on content images.
- The before/after slider is a native range input (mouse, touch, arrow keys, screen-reader value).
- The mobile menu traps focus and closes on Escape.
- Scroll reveals only hide content once JavaScript runs, and `prefers-reduced-motion` turns all motion off.
