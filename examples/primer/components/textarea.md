---
type: Component
title: Textarea
description: A multi-line text field that matches the input styling and resizes vertically.
tags: [components, textarea, form, input]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/textarea.example.html
tokens:
  form-textarea:
    background: "{colors.bgColor-default}"
    border: "{colors.borderColor-default}"
    radius: "{radius.medium}"
---

A multi-line companion to the [text input](/components/text-input.md) — same border, radius, and
focus ring, with auto height and vertical resize. For comments, descriptions, and other free text.
See [textarea.example.html](/components/textarea.example.html).

# Anatomy
A `.form-control.form-textarea` inside a `.form-group` with a `.FormControl-label`; `min-height`
shows a few lines and the user can drag to grow it.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `form-textarea.background` | `{colors.bgColor-default}` |
| `form-textarea.border` | `{colors.borderColor-default}` |

# Examples
- [textarea.example.html](/components/textarea.example.html) — a labeled description field.

# Accessibility
Link the `<label>` by `for`/`id`; the focus ring follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** allow vertical resize for free-text fields.
- **Don't** lock the height so small that users can't see what they typed.
