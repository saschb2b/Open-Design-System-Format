---
type: Component
title: Card
description: A bordered content surface with an optional muted footer.
tags: [components, card, surface, container]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/card.example.html
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

# Accessibility
A card is a visual grouping, not a landmark; use a real heading inside.

# Do & Don't
- **Do** keep one idea per card.
- **Don't** add drop shadows; the hairline is the treatment.
