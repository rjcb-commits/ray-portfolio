# ray-portfolio

Source for [rayzjack.com](https://rayzjack.com), my personal portfolio site.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Plain CSS (`app/globals.css`)
- Hosted on [Vercel](https://vercel.com)

## Project layout

```
app/
  layout.tsx     Root layout, page metadata, font loading
  page.tsx       Single-page portfolio: hero, apps, experience, stack, contact
  globals.css    All styles
public/          Icons and static assets
```

The site is one route. All page content lives in data structures at the top of `app/page.tsx` (`publicApps`, `experience`, `stacks`) and renders through the JSX below.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
npm run start
```

## Deployment

Auto-deploys to Vercel on push to `main`.

## Editing content

All copy lives in `app/page.tsx`:

- **Hero copy**: inside the `<header>` block in `HomePage()`
- **Public apps**: `publicApps` array
- **Experience timeline**: `experience` array
- **Skills pills**: `stacks` object
- **Page metadata** (title, OG description, favicon): `app/layout.tsx`

No CMS, no environment variables. Edit, save, push.

## License

All rights reserved.
