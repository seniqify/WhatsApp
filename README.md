# Seniqify

Marketing site for **Seniqify** — WhatsApp-first business infrastructure for India
(WhatsApp API, PocketLink storefronts, websites, and automation).
Live at [seniqify.com](https://seniqify.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for animation
- Dark tech theme — fonts: Space Grotesk (display) + Inter (text) + JetBrains Mono

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
src/
  app/            # layout, page, globals.css, icon/sitemap/robots
  components/     # Nav, Hero, Services, Work, Process, Studio, Contact, Footer
```

Deploys automatically to Vercel on push to `main`.
