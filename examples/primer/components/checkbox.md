---
type: Component
title: Checkbox
description: A native checkbox tinted with the accent color, with label and optional caption.
tags: [components, checkbox, form, input]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/checkbox.example.html
tokens:
  checkbox:
    accent: "{colors.bgColor-accent-emphasis}"
---

A real `<input type="checkbox">` tinted with `{colors.bgColor-accent-emphasis}` via `accent-color`,
paired with a label (and an optional caption). For independent on/off options; use
[radio](/components/radio.md) for a single choice among many. See
[checkbox.example.html](/components/checkbox.example.html).

# Anatomy
A `.FormControl-check` row: the `<input type="checkbox" id>` then a `<label for>`; an optional
`.caption` adds helper text in `{colors.fgColor-muted}`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `checkbox.accent` | `{colors.bgColor-accent-emphasis}` |

# Examples
- [checkbox.example.html](/components/checkbox.example.html) — checked, unchecked, with caption.

# Accessibility
Always link `<label>` to the input by `for`/`id`; the whole label is then clickable. Focus follows
[focus](/behaviors/focus.md).

# Do & Don't
- **Do** add a caption for non-obvious options.
- **Don't** use a checkbox where only one of several can be chosen — use [radio](/components/radio.md).
