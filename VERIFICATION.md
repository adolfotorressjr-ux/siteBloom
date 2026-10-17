# Vercel migration verification

Verified locally on October 16, 2026, using Node.js 24.15.0.

- Clean `npm ci --offline --no-audit --no-fund` from the pinned lockfile: passed (46 installed packages).
- Standard `npm run build` (`next build`, Next.js 16.3.4 / Turbopack): passed.
- Build-time TypeScript checks and separate `npm run typecheck`: passed.
- All eight generated static pages completed successfully.
- Production `npm start`: started successfully.
- HTTP 200: `/`, `/start`, `/work/ccptx`, `/work/accent-landscape`, `/sitemap.xml`, `/robots.txt`, favicon, social image, and self-hosted font.
- HTTP 404: `/work/does-not-exist`.
- All eight CSS/JavaScript assets referenced by the production homepage returned nonempty HTTP 200 responses.
- Browser confirmed homepage rendering and hydrated service switching to the e-commerce preview.
- Browser console: no warnings/errors during that production interaction check.
- Byte comparison: all 30 website UI/content/asset files checked, including the inquiry logic, are identical to the original completed site. `data/site.ts` differs only in its metadata URL configuration.

Only deployment configuration, dependencies, documentation, and canonical URL selection were changed. The original design/content and local-only inquiry behavior are preserved.

A hosted Vercel build and public URL cannot be verified until the repository is created/uploaded and imported. No Lighthouse score is claimed. The prior site's responsive polish passes are not presented as a new full breakpoint audit of this deployment migration.
