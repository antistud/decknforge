# Contributing to DeckNForge

DeckNForge is a legacy card game in active playtest. Every band that gets
played is data we can learn from. Contributions are welcome from
anyone — wizards, designers, coders, illustrators.

There are four ways to help.

## 1. Playtest the game

This is the most valuable contribution. Run a dungeon, then open an
issue on GitHub with the **Playtest Report** template.

Useful things to include:

- Player count and total play time
- Did wizards hesitate before revealing high cards? (Tension working?)
- Did anyone use a Tactic before round 4?
- Did the table audibly react to a Tactic resolving?
- Was the final boss fight loud?
- Did anyone regret adding a label?
- Did one wizard run away with the Coppers?
- Anything that confused the table

The full Playtest Watchlist is in section 8 of the rulebook.

## 2. Suggest rules changes

Open an issue tagged `rules` with:

- The rule you want to change (cite the section number)
- The problem you're solving
- Your proposed change
- Playtest data if you have it

Rules changes that ship with playtest data move 10× faster than ones that
don't.

## 3. Add labels, inscriptions, or monster types

Open an issue or PR tagged `content`. Game content is licensed
**CC BY-SA 4.0** — by submitting, you agree your contribution is shared
under the same license.

A good content PR includes:

- The label or inscription name and effect text (≤ 12 words is the goal)
- The proposed tier (Easy / Medium / Hard for monster labels;
  Common / Uncommon / Rare / Mythic for inscriptions)
- Why it's interesting — what new decision does it create?

## 4. Improve the website / tracker

The website lives under `site/` and is built with [Astro](https://astro.build).
The tracker is a single Astro page with vanilla JS and `localStorage` —
no backend. Code is licensed MIT.

```bash
cd site
npm install
npm run dev      # local dev at http://127.0.0.1:4321
npm run build    # static build → dist/
```

Good first issues are tagged `good first issue`. Bug reports and feature
ideas are equally welcome.

## Code of conduct

Be kind. We're building a game about cooperation and betrayal — keep the
betrayal at the table, not in the issue tracker.
