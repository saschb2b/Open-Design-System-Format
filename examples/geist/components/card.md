---
type: Component
title: Card
description: A bordered content surface with an optional muted footer.
tags: [components, card, surface, container]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/card.example.html
  - /components/card.wireframe.html
tokens:
  card:
    background: "{colors.background-100}"
    radius: "{radius.large}"
    border: "{colors.gray-alpha-400}"
---

The basic content container: a `{colors.background-100}` surface with the `border` hairline and
`{radius.large}` corners; an optional muted footer carries metadata or a single action. Structure
comes from the border, not a shadow — see [elevation](/foundations/elevation.md). See
[card.example.html](/components/card.example.html).

# Anatomy
A `.card` → `.card-body` (content) → optional `.card-footer` (`{colors.gray-100}`, muted text or an
action).

# Structure
A clipped surface that stacks full-width regions. The card sets no padding of its own; each region
carries its own inset.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.card-body` | 1 | full width, `{spacing.4}` padding | none | unchanged |
| `.card-footer` | 2 | full width, `{spacing.3} {spacing.4}` padding | none | unchanged |

Regions abut with no gap and are divided by a top border on the footer. `overflow: hidden` clips
both to the outer radius, which is what lets the footer carry a fill right up to the rounded
corners. The card takes its width from its container and never sets one.

# Accessibility
A card is a visual grouping, not a landmark; use a real heading inside.

# Do & Don't
- **Do** keep one idea per card.
- **Don't** add drop shadows; the hairline is the treatment.
