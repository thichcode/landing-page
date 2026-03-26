# Anta Scaffolding Landing

Multi-language landing page inspired by https://www.antascaffolding.com/solution.html. Built with Next.js App Router, Tailwind CSS, and ready-to-edit translations for English, Vietnamese, and Chinese.

## Features

- App Router structure with `[locale]` segments for `/en`, `/vi`, and `/zh`.
- Content stored in JSON files under `data/locales` for easy edits or additions.
- Hero, solution grid, stats, process timeline, and contact form sections modeled after the reference page.
- Localized news feed powered by `data/posts.json` plus API routes so every locale shows matching updates.
- Admin publishing console at `/admin` that posts to `/api/posts`; the feed reflects newly published entries immediately in the current session.
- Tailwind styling with gradients, cards, and responsive layout.
- Language switcher, localized metadata, and contact form backed by a `/api/contact` route.

## Development

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open <http://localhost:3000/en>, `/vi`, or `/zh` for each locale or visit `/admin` to publish test stories.

## Admin console

- Visit `/admin` to see existing news items, choose a locale, and publish a new announcement.
- The form posts to `/api/posts`; the API expects an `ADMIN_SECRET` value. Defaults to `ant-admin-demo` unless you set a custom env var.
- New posts are written back to `data/posts.json` (if the filesystem is writable) and also appear immediately in the admin list and the locale landing page.

## Deploying to Vercel

1. Push the repo to GitHub (like `https://github.com/thichcode/landing-page`).
2. Import it into Vercel—Next.js App Router is detected automatically.
3. Set the `ADMIN_SECRET` environment variable in Vercel if you want to override the default `ant-admin-demo` key.
4. Deploy; the `/api/contact` and `/api/posts` routes run on Vercel Edge/Serverless automatically.
