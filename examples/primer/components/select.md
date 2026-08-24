---
type: Component
title: Select
description: A native dropdown styled to match the text input, with a chevron affordance.
tags: [components, select, dropdown, form, input]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/select.example.html
  - /components/select.wireframe.html
tokens:
  form-select:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    radius: "{radius.medium}"
---

A native `<select>` styled to match the [text input](/components/text-input.md) — same height,
border, and radius — with a chevron on the right. Use it for choosing one option from a known list of
roughly 5–15 items. See [select.example.html](/components/select.example.html).

# Anatomy
A `.form-select` (the `.form-control` styling plus `appearance: none` and a chevron background),
inside a `.form-group` with a `.FormControl-label`.

# Structure
A label above a control, `{spacing.4}` apart, matching [text input](/components/text-input.md)
exactly. The chevron is painted, not laid out.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.FormControl-label` | 1 | full width | `{spacing.4}` | unchanged |
| `.form-select` | 2 | fills the group width; fixed 32px tall | none | unchanged |

The native chevron is removed with `appearance: none` and replaced by a background image pinned
`8px` from the right edge. Because a background image occupies no space, `28px` of right padding is
reserved by hand so a long option label cannot run underneath the arrow. That reserved padding is
the one structural difference from a plain text input.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `form-select.background` | `{colors.bgColor-default}` |
| `form-select.border` | `{colors.borderColor-default}` |

# Examples
- [select.example.html](/components/select.example.html) — a labeled select.
- [select.wireframe.html](/components/select.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Keep it a native `<select>` for built-in keyboard and screen-reader support; label it with `for`/`id`.
For very long or searchable lists, use an ActionMenu / SelectPanel instead.

# Do & Don't
- **Do** use a native select for short, known option lists.
- **Don't** replace it with a custom dropdown unless you need search or rich items.
