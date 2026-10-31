# mhaydarov-portfolio

A second personal site, separate from the software-engineering portfolio at
[muzaffarkhaydarov.com](https://muzaffarkhaydarov.com). History-themed; the
theme, content and visual direction are not decided yet, so what is here is
scaffolding only.

## Running it

```bash
npm install
npm run dev
```

## Layout

- `src/app` — App Router routes. `sitemap.ts`, `robots.ts` and `og/[page]/route.tsx` are the SEO baseline.
- `src/components/site` — chrome: header, footer, theme toggle, theme script, reveal.
- `src/lib/site.ts` — every site-wide constant, including the canonical origin.
- `src/lib/jsonld.ts` — `Person` and `WebSite` structured data.

## Conventions worth keeping

- **Design tokens** are CSS custom properties on `:root` in `src/app/globals.css`, overridden under `:root[data-theme='dark']`. Tailwind colours map onto those tokens, so there is one place to change a colour.
- **Theme is applied before paint** by the inline script in `src/components/site/ThemeScript.tsx`, which sets both `data-theme` and Tailwind's `dark` class.
- **Scroll reveals fail visible.** Content is opaque in its base state; it can only be hidden after `Reveal.tsx` sets `data-reveal="ready"` on `<html>`. Animations use `animation-fill-mode: forwards` — never `both`, which applies the `opacity: 0` frame during the delay and blanks the page whenever the animation is deferred or blocked.
- **Filename casing matters.** macOS is case-insensitive, Vercel builds on Linux. If an import says `Header` the file must be tracked in git as `Header.tsx`; check with `git ls-files`.
- **The canonical origin** comes from `NEXT_PUBLIC_SITE_URL`, falling back to the Vercel URL. Set it in the Vercel project once a custom domain is attached.

## Deployment

Vercel, auto-deploying from `main`.
