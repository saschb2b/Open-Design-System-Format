---
type: Component
title: Nav list
description: A vertical navigation list for sidebars, with a coral current-item marker.
tags: [components, nav-list, navigation, sidebar]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/nav-list.example.html
  - /components/nav-list.wireframe.html
tokens:
  NavList-item:
    hover: "{colors.bgColor-muted}"
  NavList-item-current:
    background: "{colors.bgColor-muted}"
    indicator: "#fd8c73"
---

The vertical navigation used in settings and app sidebars. Items highlight on hover with
`{colors.bgColor-muted}`; the current item gets a filled background, semibold weight, and the
signature **coral** marker on its left edge. The horizontal counterpart is the
[underline nav](/components/underline-nav.md). See [nav-list.example.html](/components/nav-list.example.html).

# Anatomy
A `.NavList` (`<ul>`/`<nav>`) of `.NavList-item` links, each an optional leading icon and a label; the
active one carries `.NavList-item--current` and `aria-current="page"`.

# Structure
A column of full-width rows with no gap between them. Each row is a centred flex line.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.NavList-item` | 1..n | full width; icon fixed, label fills the rest, `{spacing.8}` apart | none | unchanged |

Rows abut and are separated only by their `6px` vertical padding, so the hover and current fills
read as one continuous column. The current-item marker is an absolutely positioned `3px` bar at
`left: -8px`, outside the row box, so it costs no layout space and the label does not shift when
selection moves. That also means the list needs `{spacing.8}` of clearance on its left or the
marker is clipped.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `NavList-item.hover` | `{colors.bgColor-muted}` |
| `NavList-item-current.indicator` | `#fd8c73` (coral) |

# Examples
- [nav-list.example.html](/components/nav-list.example.html) — a settings sidebar.
- [nav-list.wireframe.html](/components/nav-list.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Wrap in `<nav aria-label="…">` and mark the active item `aria-current="page"`. Nested sections use a
[disclosure](/components/details.md) pattern.

# Do & Don't
- **Do** use a nav list for vertical, sidebar-style navigation.
- **Don't** reuse the coral marker for anything but "current".
