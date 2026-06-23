---
type: Component
title: Feature card
description: The cream content card used in 3-up feature grids.
tags: [components, card, feature]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/feature-card.example.html
tokens:
  feature-card:
    background: "{colors.surface-card}"
    radius: "{radius.lg}"
    padding: "{spacing.xl}"
    title: "{typography.title-md}"
    body: "{typography.body-md}"
---

The cream feature card sits one step darker than the canvas (`{colors.surface-card}`), with no
shadow — depth comes from the surface contrast, not elevation. Used in 3-up grids and alternated
with [dark product mockups](/components/code-window-card.md) to create the page's pacing. See
[feature-card.example.html](/components/feature-card.example.html).

# Anatomy
`.feature-card` (`{colors.surface-card}`, `{radius.lg}`, `{spacing.xl}` padding) → a small coral
icon → a `{typography.title-md}` headline → a `{typography.body-md}` description.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `feature-card.background` | `{colors.surface-card}` |
| `feature-card.radius` | `{radius.lg}` |
| `feature-card.padding` | `{spacing.xl}` |

# Examples
- [feature-card.example.html](/components/feature-card.example.html) — a 3-up feature grid.

# Accessibility
One idea per card, with a real heading inside; don't rely on the visual box to convey grouping.

# Do & Don't
- **Do** alternate cream feature cards with dark mockup bands — the rhythm is the brand. See
  [surface rhythm](/behaviors/surface-rhythm.md).
- **Don't** add a drop shadow; the cream fill is the entire treatment.
