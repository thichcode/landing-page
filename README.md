# Anta Scaffolding Landing

A multilingual Next.js App Router site with tailored solutions, stats, process, news, and contact flow for a construction/engineering audience. Content is structured so the same layout renders in English, Vietnamese, and Chinese simply by switching the `[locale]` segment.

## Features

- App Router layout under `app/[locale]/page.tsx` with locale-aware metadata, hero, solution grid, impact stats, process timeline, localized posts, and CTA form.
- Text and CTA copy live in `data/locales/{en,vi,zh}.json`, so you can edit, copy, or add languages without touching the components.
- Localized news feed pulled from `data/posts.json` via `/api/posts`, plus an admin console at `/admin` to create announcements (protected by `ADMIN_SECRET`).
- Contact form posts to `/api/contact`, ready for custom webhooks once you replace the console log stub.
- Tailwind-based styling, gradients, cards, and responsive spacing derived from the broader design system.

## Development

1. `npm install`
2. `npm run dev`
3. Visit `/en`, `/vi`, `/zh`, or `/admin` on `http://localhost:3000`.
4. Form submissions hit `/api/contact`; admin posts hit `/api/posts` with the current `ADMIN_SECRET`.

## Deploying to Vercel

- Connect the root of this repository (`/`) as your Vercel project; the default root build location is correct because the Next.js app sits at the repo root.
- Vercel auto-detects the App Router run-time. Set `ADMIN_SECRET` as an environment variable to override the default `ant-admin-demo` key if desired.
- After pushing to `main`, Vercel watches the repo and automatically rebuilds/deploys.
- API routes (`/api/contact`, `/api/posts`) and the admin console (`/admin`) land on the same deployment as the public landing page.
