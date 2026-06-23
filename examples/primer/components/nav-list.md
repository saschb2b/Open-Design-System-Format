---
type: Component
title: Nav list
description: A vertical navigation list for sidebars, with a coral current-item marker.
tags: [components, nav-list, navigation, sidebar]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/nav-list.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `NavList-item.hover` | `{colors.bgColor-muted}` |
| `NavList-item-current.indicator` | `#fd8c73` (coral) |

# Examples
- [nav-list.example.html](/components/nav-list.example.html) — a settings sidebar.

# Accessibility
Wrap in `<nav aria-label="…">` and mark the active item `aria-current="page"`. Nested sections use a
[disclosure](/components/details.md) pattern.

# Do & Don't
- **Do** use a nav list for vertical, sidebar-style navigation.
- **Don't** reuse the coral marker for anything but "current".
