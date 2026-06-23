---
type: Component
title: Select
description: A native dropdown styled to match the text input, with a chevron affordance.
tags: [components, select, dropdown, form, input]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/select.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `form-select.background` | `{colors.bgColor-default}` |
| `form-select.border` | `{colors.borderColor-default}` |

# Examples
- [select.example.html](/components/select.example.html) — a labeled select.

# Accessibility
Keep it a native `<select>` for built-in keyboard and screen-reader support; label it with `for`/`id`.
For very long or searchable lists, use an ActionMenu / SelectPanel instead.

# Do & Don't
- **Do** use a native select for short, known option lists.
- **Don't** replace it with a custom dropdown unless you need search or rich items.
