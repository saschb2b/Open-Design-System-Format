---
type: Component
title: Feature card
description: The cream content card used in 3-up feature grids.
tags: [components, card, feature]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/feature-card.example.html
  - /components/feature-card.wireframe.html
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

# Structure
A single column stack, `{spacing.sm}` between parts, inside `{spacing.xl}` padding. Nothing wraps
and nothing reorders; the card is as tall as its own content.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.feature-card__icon` | 1 | fixed 36px square | `{spacing.sm}` | unchanged |
| `.title-md` heading | 2 | full width, wraps | `{spacing.sm}` | unchanged |
| `.body-md` description | 3 | full width, wraps freely | none | unchanged |

The card is meant for the `.grid.grid-3` container shown in the example: three equal columns
`{spacing.lg}` apart, dropping to two at `{breakpoints.desktop}` and one at `{breakpoints.tablet}`.
Grid items stretch, so every card in a row matches the tallest description rather than sizing to its
own text. Check that in the wireframe: uneven copy is the usual cause of a card with a large empty
foot.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `feature-card.background` | `{colors.surface-card}` |
| `feature-card.radius` | `{radius.lg}` |
| `feature-card.padding` | `{spacing.xl}` |

# Examples
- [feature-card.example.html](/components/feature-card.example.html) — a 3-up feature grid.
- [feature-card.wireframe.html](/components/feature-card.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
One idea per card, with a real heading inside; don't rely on the visual box to convey grouping.

# Do & Don't
- **Do** alternate cream feature cards with dark mockup bands — the rhythm is the brand. See
  [surface rhythm](/behaviors/surface-rhythm.md).
- **Don't** add a drop shadow; the cream fill is the entire treatment.
