# siteBloom

Vercel-ready Next.js App Router project. The website design, visible content, images, fonts, and interactions are preserved from the completed siteBloom build.

## Run locally

Use Node.js 24.x and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm run typecheck
npm start
```

## Deploy

Follow [DEPLOYMENT.md](./DEPLOYMENT.md). Import the repository into Vercel as **Next.js**, with the repository root as the Root Directory. No database, API key, or email service is required.

- Install: `npm ci`
- Build: `npm run build`
- Node.js: `24.x`
- Output Directory: framework default (do not override)
- Production Branch: `main`

`vercel.json` provides the install/build settings. `package-lock.json` pins dependencies. `.nvmrc` and `package.json` specify Node 24.

## Routes

- `/`
- `/start`
- `/work/ccptx`
- `/work/accent-landscape`
- `/sitemap.xml`
- `/robots.txt`

## Configuration

No custom environment variables are required on Vercel. Canonical URLs use `NEXT_PUBLIC_SITE_URL` when provided; otherwise they use Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`, then `http://localhost:3000` for local work. Keep Vercel's automatic system environment variables enabled. For a custom domain, optionally set `NEXT_PUBLIC_SITE_URL` to its full HTTPS origin and redeploy.

The inquiry form intentionally prepares a downloadable project brief locally. It does not send email or save submissions to a server. The integration boundary is `lib/inquiry.ts`. Budget and timeline options are in `data/site.ts`; the email remains unconfigured. Project examples remain labeled concepts.

## Source structure

- `app/`: pages, metadata, global styles
- `components/studio/`: reusable layout and interactive components
- `data/`: projects, services, site configuration
- `lib/inquiry.ts`: inquiry submission integration boundary
- `public/`: optimized images, self-hosted fonts and font license, favicon, social image

The migration removes unused Sites/Cloudflare runtime files and dependencies. It does not require Wrangler, Vinext, or a Sites account. The original source remains separately available in the workspace.
