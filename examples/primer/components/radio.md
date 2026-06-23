---
type: Component
title: Radio
description: A native radio group tinted with the accent color, for a single choice among options.
tags: [components, radio, form, input]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/radio.example.html
tokens:
  radio:
    accent: "{colors.bgColor-accent-emphasis}"
---

A group of `<input type="radio">` controls sharing one `name`, for choosing **exactly one** option.
Tinted with `{colors.bgColor-accent-emphasis}`. For independent toggles, use a
[checkbox](/components/checkbox.md) instead. See [radio.example.html](/components/radio.example.html).

# Anatomy
A `<fieldset>` with a `<legend>`, then `.FormControl-check` rows — each an `<input type="radio"
name="…">` linked to its `<label>`. Captions add helper text in `{colors.fgColor-muted}`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `radio.accent` | `{colors.bgColor-accent-emphasis}` |

# Examples
- [radio.example.html](/components/radio.example.html) — a three-option group.

# Accessibility
Group the radios in a `<fieldset>` with a `<legend>`; share one `name`; link each `<label>`. Arrow
keys move within the group.

# Do & Don't
- **Do** preselect a sensible default.
- **Don't** use radios for more than ~5 options — use a [select](/components/select.md).
