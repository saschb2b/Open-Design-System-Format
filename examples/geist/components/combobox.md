---
type: Component
title: Combobox
description: A single-select input that filters a dropdown of options as you type.
tags: [components, combobox, form, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/combobox.example.html
  - /components/combobox.wireframe.html
---

A single-select [input](/components/input.md) that opens a filtered [menu](/components/menu.md) of
options as the user types — for picking one value from a long, searchable list (a project, a branch).
For multiple values use a [multi select](/components/multi-select.md). See
[combobox.example.html](/components/combobox.example.html).

# Structure
A field with a listbox anchored below it. The two are separate boxes, not one control.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.input` | 1 | full width of its container; fixed 40px tall | `4px` | unchanged |
| `.menu` listbox | 2 | `min-width: 200px`, otherwise its container width | none | unchanged |

The menu carries its own `min-width` rather than matching the field, so a narrow field still opens
a readable list. In the example the list is rendered open and in flow so it is visible statically;
in use it floats and does not displace what follows.

# Accessibility
ARIA combobox pattern: `role="combobox"` with `aria-expanded` and `aria-activedescendant` on the input;
`role="listbox"`/`option` on the list; arrow keys move the active option, Enter selects.

# Do & Don't
- **Do** use a combobox when the list is long and benefits from search.
- **Don't** use it for a few fixed options — a [select](/components/select.md) is simpler.
