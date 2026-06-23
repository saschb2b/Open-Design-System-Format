---
type: Component
title: Combobox
description: A single-select input that filters a dropdown of options as you type.
tags: [components, combobox, form, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/combobox.example.html
---

A single-select [input](/components/input.md) that opens a filtered [menu](/components/menu.md) of
options as the user types — for picking one value from a long, searchable list (a project, a branch).
For multiple values use a [multi select](/components/multi-select.md). See
[combobox.example.html](/components/combobox.example.html).

# Accessibility
ARIA combobox pattern: `role="combobox"` with `aria-expanded` and `aria-activedescendant` on the input;
`role="listbox"`/`option` on the list; arrow keys move the active option, Enter selects.

# Do & Don't
- **Do** use a combobox when the list is long and benefits from search.
- **Don't** use it for a few fixed options — a [select](/components/select.md) is simpler.
