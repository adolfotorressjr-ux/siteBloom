# Verification: 2026 redesign

Checked locally on November 3, 2026 against the production build (`npm run build && npm start`), Node 24.15.0.

- `npm run build`: passes (TypeScript included). `npm run lint`: no errors or warnings.
- No horizontal scrolling at 375, 768, 1280 and 1920px on `/`, all three case studies, `/start` and the 404.
- One `h1` per page, no skipped heading levels, every `<img>` has an `alt` attribute.
- Before/after slider responds to arrow keys and announces its position. Mobile menu opens, moves focus in, closes on Escape.
- Unknown URLs return HTTP 404 with the branded page.
- No console errors.

Lighthouse 12 (local, simulated throttling):

| Page | Mobile Perf / A11y / BP / SEO | Desktop |
| --- | --- | --- |
| `/` | 95 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/work/rodriguez-plastics` | 95 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/work/ccptx` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/start` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

Not verified locally: the Tally embed on `/start` (it did not render in the local preview browser, same as the live site in that
browser), and scores on the deployed Vercel URL. Re-run Lighthouse on the preview deployment.
