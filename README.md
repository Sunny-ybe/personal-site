# Portfolio

Next.js + TypeScript + Tailwind. One editable data file drives the whole
site — the layout and components never need to change when you add work.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add or edit content

Everything you see on the page — every job, project, research entry, field
note, your email and socials — lives in one file:

```
src/content/site-data.ts
```

To add a new entry, copy an existing object in the relevant array and fill
it in. Nothing else needs to change — the page re-renders from the array.
Search that file for `TODO` to find every placeholder that still needs your
real content (descriptions, stack, dates, the resume PDF, your real email
and social links).

- **Screenshots** for the "Shipped & vibe-coded" section go in
  `public/screenshots/`. Reference them from `site-data.ts` as
  `image: "/screenshots/your-file.png"`. Leave `image` unset and the tile
  shows a placeholder.
- **Research PDF** goes in `public/research/`, referenced the same way.
- **Resume** — drop a `resume.pdf` into `public/` (it's already linked from
  the header and footer).

## Design system

Colors, type and spacing tokens are defined once in
`src/app/globals.css` under `:root` — change a value there and it updates
everywhere. Fonts (Space Grotesk / Inter / JetBrains Mono) are set in
`src/app/layout.tsx`.

## Deploy to your own domain

The fastest path, since the domain is already bought:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo. No
   config needed — Vercel detects Next.js automatically.
3. Once it's deployed, go to the project's **Settings → Domains** in
   Vercel and add your domain. Vercel gives you the DNS records to add
   (usually an A record or CNAME) at whatever registrar you bought it
   from — add those and it propagates within a few minutes to a few
   hours.
4. Every push to `main` auto-redeploys. For a new section or project:
   edit `site-data.ts`, commit, push — live in about a minute, no need to
   touch Vercel again.

## Note on fonts in this build environment

`next/font/google` fetches Inter / Space Grotesk / JetBrains Mono from
Google Fonts at build time. The sandbox this was built in has no network
access to `fonts.googleapis.com`, so `npm run build` couldn't complete
there — confirmed with a clean `tsc --noEmit` and `eslint` pass instead.
This isn't a code issue: it'll fetch normally the moment you run
`npm run dev` or `npm run build` with real internet (your machine, or
Vercel's build servers), both of which have it.
