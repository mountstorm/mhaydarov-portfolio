# mhaydarov-portfolio

A personal site for a student researcher in Tashkent — history, languages and
maps. One scrolling homepage plus a separate page for the research paper, in
English, Uzbek and Russian.

Separate from, and unrelated to, the software-engineering portfolio at
[muzaffarkhaydarov.com](https://muzaffarkhaydarov.com).

## Running it

```bash
npm install
npm run dev
```

## Filling in the content

**All copy lives in [`src/lib/content.ts`](src/lib/content.ts).** Nothing else
needs touching to put the site live. Fields that are still empty render a
visible "To add" slot on the page rather than placeholder prose — so the site
never asserts anything its author did not write, and so what is missing is
obvious at a glance.

Start with `IDENTITY.name` and `IDENTITY.email`: they are empty, and the
header, footer, metadata and JSON-LD all read from them.

Each text field is `{ en, uz, ru }`. `uz` and `ru` fall back to `en` when
empty, so a missing translation is never a broken page.

`RESEARCH.underReview` is `true`, so the paper page shows the abstract and a
status badge only. The Concord Review requires unpublished work. If he is not
submitting there, set it to `false` and point `RESEARCH.pdf` at a file in
`/public`.

Interface strings — section names, buttons, "Under review" — are in
[`src/lib/i18n.ts`](src/lib/i18n.ts). The Uzbek and Russian there are a first
pass and want a native read-through.

## Layout

- `src/app/[locale]` — the homepage and the paper page, statically generated for `en`, `uz` and `ru`.
- `src/middleware.ts` — serves English at `/` and redirects `/en/*` away, so each page has exactly one URL.
- `src/components/home` — one component per section, in the order of the brief.
- `src/components/site` — header, footer, language switch, theme toggle, reveal, the "To add" slot.
- `src/lib/content.ts` — everything the site says.
- `src/lib/i18n.ts` — locales and interface strings.

## Conventions worth keeping

- **Design tokens** are CSS custom properties on `:root` in `src/app/globals.css`, overridden under `:root[data-theme='dark']`. Tailwind colours map onto those tokens, so a colour changes in one place.
- **Theme is applied before paint** by the inline script in `ThemeScript.tsx`, which sets both `data-theme` and Tailwind's `dark` class.
- **Scroll reveals fail visible.** Content is opaque in its base state; it can only be hidden after `Reveal.tsx` sets `data-reveal="ready"` on `<html>`, and only when `IntersectionObserver` exists and reduced motion is off. Animations use `animation-fill-mode: forwards` — never `both`, which applies the `opacity: 0` frame during the delay and blanks the page whenever the animation is deferred. There is also a 1.5s failsafe that reveals everything. This has taken a live site down twice; do not simplify it back.
- **Filename casing matters.** macOS is case-insensitive, Vercel builds on Linux. Check with `git ls-files` before trusting a green local build.
- **SEO** is per-locale: canonical plus `hreflang` on every page, all three languages in `sitemap.ts`, dynamic OG images at `/og/home` and `/og/research`, `Person` + `WebSite` + `ScholarlyArticle` JSON-LD.
- **Privacy:** contact is an email and nothing else. No phone number, home address or schedule anywhere in the content model.
- **The canonical origin** comes from `NEXT_PUBLIC_SITE_URL`, falling back to the Vercel URL. Set it in Vercel when a custom domain is attached.

## Favicon

`public/icon-32.png`, `public/icon.png` and `public/apple-icon.png` are a tight crop of Vasily
Perov's 1872 portrait of Dostoyevsky, from Wikimedia Commons. The painting is
public domain (Perov died in 1882), so no attribution is required, but it is
worth recording where it came from.

They live in `public/`, not in `app/`: Next serves only its own reserved icon
filenames from `app/`, so a name like `icon-32.png` there is a 404. The
`icons` field in `src/app/[locale]/layout.tsx` is what emits the `<link>`
tags — renaming a file means updating that field too. The tab icon is the
2.6 KB 32px version; the 192px one is only fetched when something needs it.

## Deployment

Vercel. Auto-deploy from `main` needs the Vercel GitHub App granted access to
this repo (https://github.com/settings/installations → Vercel → Configure);
until then, deploy with `npx vercel deploy --prod --yes`.
