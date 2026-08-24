---
type: Component
title: Breadcrumbs
description: A trail of links showing the current location in a hierarchy.
tags: [components, breadcrumbs, navigation]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/breadcrumbs.example.html
  - /components/breadcrumbs.wireframe.html
---

A horizontal trail showing where the current view sits — team / project / deployment. Ancestors are
muted (`{colors.gray-900}`) links separated by slashes; the final crumb is the current page in
`{colors.gray-1000}`. See [breadcrumbs.example.html](/components/breadcrumbs.example.html).

# Structure
One centred flex row, `8px` between every child including the separators.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Ancestor link | 1..n-1 | content width | `8px` | unchanged |
| `.sep` slash | between | content width | `8px` | unchanged |
| `.current` leaf | last | content width | none | unchanged |

Separators are real elements in the gap sequence rather than generated content, so spacing is even
on both sides of each slash. The trail does not wrap or truncate, so a deep path overflows its
container; pair it with [middle truncate](/components/middle-truncate.md) when segments are long.

# Accessibility
Wrap in `<nav aria-label="Breadcrumb">`; mark the last crumb `aria-current="page"`; separators are
decorative (`aria-hidden`).

# Do & Don't
- **Do** make the last crumb plain text.
- **Don't** use breadcrumbs as the primary navigation.
