---
type: Component
title: Underline nav
description: GitHub's tabbed navigation with the signature coral underline on the current item.
tags: [components, navigation, tabs]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/underline-nav.example.html
tokens:
  UnderlineNav:
    border: "{colors.borderColor-default}"
    typography: "{typography.body-medium}"
  UnderlineNav-item-current:
    indicator: "#fd8c73"
---

The horizontal tab bar at the top of every repository and profile — Code, Issues, Pull requests. The
current item is marked by a **coral underline** (`#fd8c73`), the one warm accent in Primer's
otherwise neutral product UI, plus a weight change; the bar itself is a single
`{colors.borderColor-default}` bottom border. See
[underline-nav.example.html](/components/underline-nav.example.html).

# Anatomy
A `.UnderlineNav` (bottom border) holding `.UnderlineNav-item`s — each `{typography.body-medium}`
with an optional leading icon and trailing [Counter](/components/label.md). The current item gets
`.UnderlineNav-item--current`: weight 600 and a `2px` coral bottom border that overlaps the bar.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `UnderlineNav.border` | `{colors.borderColor-default}` |
| `UnderlineNav-item-current.indicator` | `#fd8c73` (the signature coral) |

# Examples
- [underline-nav.example.html](/components/underline-nav.example.html) — a repo nav with counters.

# Accessibility
Use `<nav>` with `aria-current="page"` on the active item; the underline and weight change both mark
it, never color alone.

# Do & Don't
- **Do** reserve the coral underline strictly for the current-tab indicator.
- **Don't** repurpose `#fd8c73` elsewhere; its whole job is to mark "you are here".
