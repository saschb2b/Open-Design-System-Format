---
type: Component
title: Pricing tier card
description: A plan card whose featured variant flips to the dark surface instead of using a colored border.
tags: [components, card, pricing]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/pricing-tier-card.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `pricing-card.background` | `{colors.canvas}` |
| `pricing-card.price` | `{typography.display-sm}` |
| `pricing-card-featured.background` | `{colors.surface-dark}` |

# Examples
- [pricing-tier-card.example.html](/components/pricing-tier-card.example.html) — Free / Pro (featured) / Team.

# Accessibility
The featured tier must remain distinguishable without color — the dark surface plus a label does
that. Keep checklist items as real list semantics.

# Do & Don't
- **Do** use the dark surface as the featured-tier signal.
- **Don't** add a coral border to the featured card; that spends the scarce coral. See
  [coral is scarce](/guidelines/coral-is-scarce.md).
