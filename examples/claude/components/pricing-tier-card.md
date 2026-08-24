---
type: Component
title: Pricing tier card
description: A plan card whose featured variant flips to the dark surface instead of using a colored border.
tags: [components, card, pricing]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/pricing-tier-card.example.html
  - /components/pricing-tier-card.wireframe.html
tokens:
  pricing-card:
    background: "{colors.canvas}"
    border: "{colors.hairline}"
    radius: "{radius.lg}"
    padding: "{spacing.xl}"
    name: "{typography.title-lg}"
    price: "{typography.display-sm}"
  pricing-card-featured:
    background: "{colors.surface-dark}"
    color: "{colors.on-dark}"
---

A standard tier is cream with a hairline border; the price is set in the **serif display**
(`{typography.display-sm}`), a small editorial flourish that ties pricing back to the brand voice.
The featured tier flips its whole surface to dark navy — **the dark surface itself is the
"recommended" signal**, with no colored border or ribbon. See
[pricing-tier-card.example.html](/components/pricing-tier-card.example.html).

# Anatomy
`.pricing-card` (`{colors.canvas}`, `{colors.hairline}` border, `{radius.lg}`, `{spacing.xl}`) → plan
name in `{typography.title-lg}` → price in `{typography.display-sm}` (serif) → a checklist in
`{typography.body-md}` → a [primary button](/components/button.md). Featured: `.pricing-card--featured`
swaps to `{colors.surface-dark}` and inverts text.

# Structure
A column stack, `{spacing.md}` between parts, inside `{spacing.xl}` padding. The feature list is
itself a nested column at `{spacing.xs}`, tighter than the card's own rhythm so the checklist reads
as one block rather than four separate parts.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.title-lg` plan name | 1 | full width | `{spacing.md}` | unchanged |
| `.pricing-card__price` | 2 | full width | `{spacing.md}` | unchanged |
| `.pricing-card__features` | 3 | grows with item count; rows `{spacing.xs}` apart | `{spacing.md}` | unchanged |
| Button | 4 | pinned to the card foot via `margin-top: auto` | none | unchanged |

The `margin-top: auto` on the button is the one rule that makes a row of tiers line up: cards in the
grid stretch to equal height, and without it a tier with fewer features would float its button
mid-card. Tiers sit in the same `.grid.grid-3` as the [feature card](/components/feature-card.md),
so they drop to two columns at `{breakpoints.desktop}` and one at `{breakpoints.tablet}`. Featured
is a skin change only; `.pricing-card--featured` alters no box, which the wireframe confirms by
showing all three tiers identical.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `pricing-card.background` | `{colors.canvas}` |
| `pricing-card.price` | `{typography.display-sm}` |
| `pricing-card-featured.background` | `{colors.surface-dark}` |

# Examples
- [pricing-tier-card.example.html](/components/pricing-tier-card.example.html) — Free / Pro (featured) / Team.
- [pricing-tier-card.wireframe.html](/components/pricing-tier-card.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
The featured tier must remain distinguishable without color — the dark surface plus a label does
that. Keep checklist items as real list semantics.

# Do & Don't
- **Do** use the dark surface as the featured-tier signal.
- **Don't** add a coral border to the featured card; that spends the scarce coral. See
  [coral is scarce](/guidelines/coral-is-scarce.md).
