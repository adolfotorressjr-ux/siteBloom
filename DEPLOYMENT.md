# Publish siteBloom with GitHub and Vercel

## Repository

The project repository is https://github.com/adolfotorressjr-ux/siteBloom . To deploy that repository, go directly to step 3 below. Steps 1–2 are for using a downloaded copy in another repository.

## 1. Extract the source

Unzip `sitebloom-vercel.zip`. Inside is a folder named `sitebloom`. Open it: `package.json`, `package-lock.json`, `app`, and `public` should be directly inside.

Do not upload the ZIP as the repository's source. Upload the extracted files.

## 2. Create the GitHub repository

1. Sign in at https://github.com/new as your intended GitHub account.
2. Name the repository `sitebloom`. Private is fine; Vercel can deploy a private repository after you grant it access.
3. Create it without a generated README, license, or .gitignore. These source files are already provided where needed.
4. On the empty repository page, choose **uploading an existing file**. (For an initialized repository, use **Add file → Upload files**.)
5. Drag the contents of the extracted `sitebloom` folder into the uploader, preserving subfolders. Upload all source files, including `package-lock.json` and `vercel.json`. On macOS, Command-Shift-period reveals dotfiles such as `.gitignore` and `.nvmrc`.
6. Commit to `main`. Confirm `package.json` is at the repository root, not inside another `sitebloom` folder.

This package is under GitHub's 100-file batch and 25 MiB-per-file browser upload limits. If your browser does not preserve folders, use GitHub Desktop instead: clone the empty repository, copy the extracted contents into that local repository, commit to main, and push. Do not include node_modules or .next.

Official upload instructions: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## 3. Import into Vercel

1. Sign in at https://vercel.com/new.
2. Connect your GitHub account when prompted. Authorize access to `sitebloom`.
3. Import `sitebloom`. If it is missing, configure the Vercel GitHub app's repository access and refresh.
4. Choose the intended Vercel account/team and an available project name.
5. Confirm these settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | repository root (`./`) |
| Node.js Version | 24.x |
| Install Command | npm ci |
| Build Command | npm run build |
| Output Directory | leave default; no custom override |
| Environment Variables | none required |
| Production Branch | main |

6. Click **Deploy** and wait for **Ready**. If a build fails, open Build Logs; first confirm the root directory and that the lockfile was uploaded.

Official GitHub integration guide: https://vercel.com/docs/git/vercel-for-github

## 4. Get a public preview of the site

1. Open the project's production deployment and copy the production domain Vercel actually assigns, ending in `.vercel.app`. No custom domain purchase is necessary. Do not assume `sitebloom.vercel.app` is available.
2. Test that URL in a signed-out/private browser window. It should open the website without asking viewers to sign in.
3. Share the production domain rather than a protected branch-preview URL. If the production domain itself asks viewers to sign in, review the project's **Settings → Deployment Protection** and configure public access for that production website if your account/team policy permits it. These are Vercel project settings, not Codex sandbox settings.
4. Check the homepage, `/start`, both project pages, images, mobile menu, and the before/after slider.

Vercel calls the main-branch website a Production deployment, even when you are using it as your initial public preview. Future branch pushes/pull requests can create separate Preview deployments, which may have authentication protection.

Official protection guide: https://vercel.com/docs/deployment-protection

## Optional custom domain later

Add your domain in Vercel's project settings and follow its DNS instructions. Set `NEXT_PUBLIC_SITE_URL` to the full canonical HTTPS origin and redeploy. Do not enter an unowned placeholder domain.

The project inquiry form still creates a downloadable brief locally. Publishing does not enable email delivery; a backend must be configured separately if desired.
