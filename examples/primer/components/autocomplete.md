---
type: Component
title: Autocomplete
description: A text input that suggests matching options in a dropdown as you type.
tags: [components, autocomplete, form, input, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/autocomplete.example.html
tokens:
  Autocomplete-results:
    shadow: "{elevation.floating-small}"
---

A [text input](/components/text-input.md) that opens a floating [action list](/components/action-list.md)
of matching suggestions as the user types — for fields with many possible values (a label, a
reviewer, a repo). See [autocomplete.example.html](/components/autocomplete.example.html).

# Anatomy
An `.Autocomplete` wrapper holding a `.form-control` and, while open, an `.Autocomplete-results`
([Box](/components/box.md) + `.ActionList`) with the `{elevation.floating-small}` shadow. The active
suggestion is highlighted.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Autocomplete-results.shadow` | `{elevation.floating-small}` |

# Examples
- [autocomplete.example.html](/components/autocomplete.example.html) — an open suggestion list.

# Accessibility
Implement the ARIA combobox pattern: `role="combobox"` with `aria-expanded` and `aria-activedescendant`
on the input, `role="listbox"`/`option` on the results; arrow keys move the active option.

# Do & Don't
- **Do** use it when the value set is large and known.
- **Don't** use it for free text — that is a [text input](/components/text-input.md).
