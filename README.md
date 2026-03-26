# Anta Scaffolding Landing

A multi-page Next.js App Router site for Anta Access with distinct "Home", "Solution", and "Service" experiences plus shared sections such as stats, process, news, and contact flows. Each route can be extended independently while reusing the shared components defined in `components/`.

## Features

- App Router layout under `app/[locale]/page.tsx` with locale-aware metadata, hero, solution grid, impact stats, process timeline, localized posts, and CTA form.
- Text and CTA copy live in `data/locales/{en,vi,zh}.json`, so you can edit, copy, or add languages without touching the components.
- Localized news feed pulled from `data/posts.json` via `/api/posts`, plus an admin console at `/admin` to create announcements (protected by `ADMIN_SECRET`).
- Contact form posts to `/api/contact` and, if `CONTACT_WEBHOOK_URL` is configured, forwards every submission to that webhook for CRM/Slack automation.
- Case studies curated inside `data/case-studies.json` render in their own section to show proof-of-work without external assets.
- Tailwind-based styling, gradients, cards, responsive spacing, plus inlined SVGs keep the design sharp on desktop and mobile.

## Development

1. `npm install`
2. `npm run dev`
3. Visit `/home`, `/solution`, `/service`, or `/admin` on `http://localhost:3000` to explore each experience.
4. Form submissions hit `/api/contact`; admin posts hit `/api/posts` with the current `ADMIN_SECRET`.

## Environment variables

- `NEXT_PUBLIC_GA_ID`: Optional Google Analytics measurement ID used in `app/layout.tsx` (falls back to `G-000000000`).
- `CONTACT_WEBHOOK_URL`: When set, every payload from the contact form is forwarded to this URL as JSON.
- `ADMIN_SECRET`: Protects `/api/posts` (defaults to `ant-admin-demo`).

## Deploying to Vercel

- Connect the root of this repository (`/`) as your Vercel project; the default root build location is correct because the Next.js app sits at the repo root.
- Vercel auto-detects the App Router run-time. Provide the above environment variables so analytics and integrations work in production.
- After pushing to `main`, Vercel watches the repo and automatically rebuilds/deploys.
- API routes (`/api/contact`, `/api/posts`) and the admin console (`/admin`) land on the same deployment as the public landing page.
