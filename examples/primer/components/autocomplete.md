---
type: Component
title: Autocomplete
description: A text input that suggests matching options in a dropdown as you type.
tags: [components, autocomplete, form, input, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/autocomplete.example.html
  - /components/autocomplete.wireframe.html
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

# Structure
A relatively positioned wrapper capped at `300px`, holding a field with its result list anchored
below.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.form-control` | 1 | fills the wrapper; fixed 32px tall | `{spacing.4}` | unchanged |
| `.Autocomplete-results` | 2 | matches the wrapper width | none | unchanged |

The `300px` cap belongs to the wrapper, so the field and its results always share one edge and the
list can never be wider or narrower than the input that filters it. Results are a floating layer
and do not push following content down.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Autocomplete-results.shadow` | `{elevation.floating-small}` |

# Examples
- [autocomplete.example.html](/components/autocomplete.example.html) — an open suggestion list.
- [autocomplete.wireframe.html](/components/autocomplete.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Implement the ARIA combobox pattern: `role="combobox"` with `aria-expanded` and `aria-activedescendant`
on the input, `role="listbox"`/`option` on the results; arrow keys move the active option.

# Do & Don't
- **Do** use it when the value set is large and known.
- **Don't** use it for free text — that is a [text input](/components/text-input.md).
