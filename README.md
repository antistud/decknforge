# DeckNForge

A persistent legacy card game for 3–5 wizards, built from a standard
deck of playing cards. Every game leaves permanent marks the next wizard
inherits.

> *"Without teamwork, your band will never survive the dungeon. Without betrayal, you'll never claim the coppers."*

## Repository layout

```
.
├── site/                          ← Astro static site (the website + tracker)
│   ├── src/                       ← pages, components, styles, config
│   ├── public/                    ← static assets + downloads
│   └── package.json               ← actual build lives here
├── DeckNForge_v2.0_Rules.md       ← rules source-of-truth
├── DeckNForge_Player_Rules.html   ← printable 2-page reference
├── DeckNForge (2).pdf             ← rulebook PDF
├── DeckNForge.png                 ← logo
├── DeckNForge Background.png      ← key art
├── package.json                   ← root build delegator (for Cloudflare Pages, etc.)
├── LICENSE.md / CONTRIBUTING.md   ← inside site/, also linked from the website
└── README.md                      ← you are here
```

## Local development

```bash
npm run dev      # installs site deps and starts dev server at http://127.0.0.1:4321
npm run build    # builds the site to ./dist/ (also leaves a copy in ./site/dist/)
```

Or work directly in the site directory:

```bash
cd site
npm install
npm run dev
npm run build
```

## Deploying

The site is fully static. The root `package.json` delegates to `site/`
and copies the build output up to `./dist/` so the default settings of
most static hosts just work.

### Cloudflare Pages

| Setting                   | Value             |
| ------------------------- | ----------------- |
| Build command             | `npm run build`   |
| Build output directory    | `dist`            |
| Root directory (advanced) | *(leave blank)*   |
| Node version              | `20` or higher    |

If you'd rather skip the root delegator, you can instead set:

| Setting                   | Value             |
| ------------------------- | ----------------- |
| Build command             | `npm run build`   |
| Build output directory    | `site/dist`       |
| Root directory (advanced) | `site`            |

Either approach works. The first is the default; the second avoids the
copy step.

### Netlify / Vercel / other static hosts

Use the same settings: `npm run build` produces `dist/` at repo root.

## Licenses

DeckNForge is dual-licensed:

- **Game content** (rules, labels, inscriptions, sheets) — [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Website code** (everything in `site/src/`) — [MIT](https://opensource.org/license/mit/)
- **Logo & key art** — © DeckNForge. Replace with your own art if you fork.

See [`site/LICENSE.md`](site/LICENSE.md) for the full text.

## Contributing

See [`site/CONTRIBUTING.md`](site/CONTRIBUTING.md). Four ways to help:

1. **Playtest** the game and file a report
2. **Suggest** rules changes (with playtest data)
3. **Add** labels, inscriptions, monster types
4. **Improve** the website / tracker

All contributions are welcome. Be kind in the issue tracker — keep the
betrayal at the table.
