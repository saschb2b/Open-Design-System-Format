---
type: Component
title: Search input
description: An input with a leading search icon for filtering and lookups.
tags: [components, input, search, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/search-input.example.html
  - /components/search-input.wireframe.html
---

An [input](/components/input.md) with a leading magnifier affix, for filtering lists and lookups.
Often paired with a [keyboard shortcut](/components/keyboard-input.md) hint and clear affordance.
See [search-input.example.html](/components/search-input.example.html).

# Structure
The affix shell with a leading icon and a trailing keyboard hint around a borderless field.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.icon` | 1 | fixed | `6px` | unchanged |
| `input` | 2 | `flex: 1`, `min-width: 0` | `6px` | unchanged |
| `.kbd` hint | 3 | fixed `min-width: 22px`, 22px tall | none | unchanged |

The shell owns the border and the 40px height; the field strips its own so the three parts read as
one control. `min-width: 0` on the field is what lets a long query scroll inside it instead of
pushing the shortcut hint out of the shell. Both affixes are fixed, so the field is the only part
that yields.

# Accessibility
Use `type="search"` with an accessible label; debounce live filtering and announce result counts via
`aria-live`.

# Do & Don't
- **Do** show the magnifier and an optional shortcut hint.
- **Don't** auto-submit on every keystroke without debouncing.
