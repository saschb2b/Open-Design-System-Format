---
type: Pattern
title: Landing page
description: A full marketing page composed in the cream → dark → coral surface rhythm.
tags: [patterns, landing, page, composition]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /patterns/landing-page.example.html
---

The canonical Claude marketing page: a [top nav](/components/top-nav.md), a cream hero with a 6/6
split, alternating cream feature bands and dark product-mockup bands, a pricing section, a
full-bleed [coral callout](/components/callout-card-coral.md), and the dark [footer](/components/footer.md).
The whole page is paced by the **surface rhythm** — no two consecutive bands share a surface mode.
See [landing-page.example.html](/patterns/landing-page.example.html); it is the bundle's single best
illustration of how the parts combine.

# When to use
Any top-level marketing or product page. For a focused utility page (a form, a doc), drop the
alternating bands and keep the cream canvas.

# Composition
| Band | Surface | Components |
|------|---------|-----------|
| Nav | cream | [Top navigation](/components/top-nav.md) |
| Hero | cream | display-xl headline + [buttons](/components/button.md) + [code-window card](/components/code-window-card.md) |
| Features | cream | 3-up [feature cards](/components/feature-card.md) |
| Product | dark | [code-window card](/components/code-window-card.md) + heading |
| Pricing | cream | 3-up [pricing tier cards](/components/pricing-tier-card.md) (featured = dark) |
| Callout | coral | [coral callout card](/components/callout-card-coral.md) |
| Footer | dark | [Footer](/components/footer.md) |

# Example
- [landing-page.example.html](/patterns/landing-page.example.html) — the full page.

# Accessibility
One `<h1>` (the hero). Each band is a `<section>`; the nav, footer, and column lists use landmark
elements. Maintain logical heading order down the page.

# Do & Don't
- **Do** alternate surfaces band to band — the cream-to-dark pacing is the brand's mechanism. See
  [surface rhythm](/behaviors/surface-rhythm.md).
- **Don't** repeat a surface mode in two consecutive bands, and use only one coral band per page.
