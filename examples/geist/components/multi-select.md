---
type: Component
title: Multi select
description: An input that holds multiple selected values as removable tokens, with a suggestion menu.
tags: [components, multi-select, form, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/multi-select.example.html
  - /components/multi-select.wireframe.html
---

A field that collects **multiple** values as removable tokens, opening a checkable suggestion
[menu](/components/menu.md) as you type — environment variables, team members, regions. The
multi-value cousin of the [combobox](/components/combobox.md). See
[multi-select.example.html](/components/multi-select.example.html).

# Anatomy
An [input](/components/input.md) surface holding token chips (each with a remove ×), plus a dropdown
list of options with checkmarks for the selected ones.

# Structure
A wrapping flex shell that grows in height as chips are added, with the text field as its last
flexible item.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.chip` | 1..n | content width | `6px` | wraps to a new line when the row fills |
| `input` | last | `flex: 1`, `min-width: 60px` | none | wraps with the chips |

Unlike every other field in the bundle this control has no fixed height: `flex-wrap: wrap` means it
grows a row at a time, so a form laid out around it must not assume 40px. The `min-width: 60px` on
the input is what stops it collapsing to nothing once chips fill the line; instead it wraps to the
next row and stays typeable. Chips never shrink or truncate.

# Accessibility
Implement the ARIA multi-select combobox pattern; each token's remove button is labelled; arrow keys
move through options.

# Do & Don't
- **Do** show selected values as removable tokens inline.
- **Don't** use it when only one value is allowed — use a [select](/components/select.md).
