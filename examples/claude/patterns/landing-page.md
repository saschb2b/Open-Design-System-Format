---
type: Pattern
title: Landing page
description: A full marketing page composed in the cream → dark → coral surface rhythm.
tags: [patterns, landing, page, composition]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /patterns/landing-page.example.html
  - /patterns/landing-page.wireframe.html
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

# Structure
A single vertical stack of full-bleed bands in DOM order, with no horizontal composition at the page
level. Every band is a `<section>` that paints edge to edge and holds one `.container`, which caps
the content at `{layout.container}` (1200px), centres it, and adds `{spacing.lg}` of inline padding.
Bands set `padding-block: {spacing.section}` (96px), which drops to `{spacing.xxl}` at
`{breakpoints.tablet}`. That container plus that band padding is the page's whole grid.

| Band | Order | Inner layout | Space after | Reflow |
|------|-------|--------------|-------------|--------|
| Nav | 1 | `.top-nav` row, fixed 64px | none (bar is flush) | menu hidden below `{breakpoints.tablet}` |
| Hero | 2 | `.hero`, two equal columns, 48px gap, centred | `{spacing.section}` | one column at `{breakpoints.tablet}` |
| Features | 3 | centred `.section-head` + `.grid-3` | `{spacing.section}` | 2 columns at `{breakpoints.desktop}`, 1 at `{breakpoints.tablet}` |
| Product | 4 | `.hero` again: copy beside a code-window card | `{spacing.section}` | one column at `{breakpoints.tablet}` |
| Pricing | 5 | centred `.section-head` + `.grid-3` | `{spacing.section}` | 2 columns at `{breakpoints.desktop}`, 1 at `{breakpoints.tablet}` |
| Callout | 6 | one `.callout-coral` card at container width | `{spacing.section}` | unchanged |
| Footer | 7 | `.footer__cols`, `1.5fr repeat(4, 1fr)` | none | 2 columns at `{breakpoints.desktop}`, 1 at `{breakpoints.tablet}` |

Two structural details are easy to miss and both show up in the wireframe. The features and callout
bands carry `padding-top: 0`, which welds them to the cream band above so a run of cream reads as
one region rather than three stacked ones; the 96px rhythm therefore separates *surface changes*,
not every section. And the callout is a coral card inside a cream band, not a coral band: the page
has six bands of structure and the coral is an inset box, which is why it keeps the container
margin instead of bleeding to the viewport edge.

The hero and the product band share the same `.hero` two-column grid, and both collapse to one
column at `{breakpoints.tablet}` with the text column first in DOM order. Reading order down the
page is the band order above, and it never diverges from visual order.

# Example
- [landing-page.example.html](/patterns/landing-page.example.html) — the full page.
- [landing-page.wireframe.html](/patterns/landing-page.wireframe.html) — the same page, skin stripped: band rhythm, container measure, and reflow only.

# Accessibility
One `<h1>` (the hero). Each band is a `<section>`; the nav, footer, and column lists use landmark
elements. Maintain logical heading order down the page.

# Do & Don't
- **Do** alternate surfaces band to band — the cream-to-dark pacing is the brand's mechanism. See
  [surface rhythm](/behaviors/surface-rhythm.md).
- **Don't** repeat a surface mode in two consecutive bands, and use only one coral band per page.
