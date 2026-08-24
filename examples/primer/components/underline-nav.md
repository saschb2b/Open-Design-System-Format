---
type: Component
title: Underline nav
description: GitHub's tabbed navigation with the signature coral underline on the current item.
tags: [components, navigation, tabs]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/underline-nav.example.html
  - /components/underline-nav.wireframe.html
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

# Structure
A flex row of items sitting on a shared bottom rule, `{spacing.8}` apart, with the selection
indicator drawn as each item own bottom border.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.UnderlineNav-item` | 1..n | content width; icon and `.Counter` inline, `{spacing.8}` apart | `{spacing.8}` | unchanged |
| `.Counter` | within an item | `min-width: 20px`, 20px tall | none | unchanged |

Every item carries a transparent `2px` bottom border at rest and `margin-bottom: -1px` to sit on
the container rule, so the indicator appears by colouring an existing border rather than adding
one. Nothing moves when selection changes, and the same is true of the current item weight change,
which is skin. Bottom padding is `12px` against `{spacing.8}` on top, leaving room for the
indicator without crowding the label. The row does not wrap or scroll.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `UnderlineNav.border` | `{colors.borderColor-default}` |
| `UnderlineNav-item-current.indicator` | `#fd8c73` (the signature coral) |

# Examples
- [underline-nav.example.html](/components/underline-nav.example.html) — a repo nav with counters.
- [underline-nav.wireframe.html](/components/underline-nav.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `<nav>` with `aria-current="page"` on the active item; the underline and weight change both mark
it, never color alone.

# Do & Don't
- **Do** reserve the coral underline strictly for the current-tab indicator.
- **Don't** repurpose `#fd8c73` elsewhere; its whole job is to mark "you are here".
