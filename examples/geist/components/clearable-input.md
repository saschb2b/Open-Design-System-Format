---
type: Component
title: Clearable input
description: An input with a trailing clear button that empties the field.
tags: [components, input, clearable, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/clearable-input.example.html
  - /components/clearable-input.wireframe.html
---

An [input](/components/input.md) with a trailing "×" that appears when there is a value and clears it
in one click — for filters and search fields where resetting is common. See
[clearable-input.example.html](/components/clearable-input.example.html).

# Structure
An affix shell that owns the border and height, with a borderless field and a trailing button
inside it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `input` | 1 | `flex: 1`, `min-width: 0` | `6px` | unchanged |
| Clear button | 2 | fixed, zero padding | none | unchanged |

The shell is the 40px control; the inner `input` strips its own border, outline and background so
the two read as one field. `min-width: 0` on the input is load-bearing: a flex item defaults to a
`min-content` floor, so without it a long value would push the clear button out of the shell rather
than scrolling inside the field.

# Accessibility
The clear control is a `<button>` with `aria-label="Clear"`; after clearing, return focus to the input.

# Do & Don't
- **Do** show the clear button only when the field has content.
- **Don't** clear without keeping focus on the input.
