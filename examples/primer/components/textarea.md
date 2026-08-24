---
type: Component
title: Textarea
description: A multi-line text field that matches the input styling and resizes vertically.
tags: [components, textarea, form, input]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/textarea.example.html
  - /components/textarea.wireframe.html
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

# Structure
The text input group with the height constraint inverted: the control grows instead of staying
fixed.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.FormControl-label` | 1 | full width | `{spacing.4}` | unchanged |
| `.form-textarea` | 2 | `width: 100%`, `min-height: 80px`, grows downward | none | unchanged |

`height: auto` with a `min-height` floor replaces the fixed 32px of a single-line field, and
`resize: vertical` lets the user extend it while blocking horizontal resize, which would otherwise
let the control escape its column and break the form grid. Padding becomes symmetric
(`{spacing.8} {spacing.12}`) because the text now occupies more than one line.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `form-textarea.background` | `{colors.bgColor-default}` |
| `form-textarea.border` | `{colors.borderColor-default}` |

# Examples
- [textarea.example.html](/components/textarea.example.html) — a labeled description field.
- [textarea.wireframe.html](/components/textarea.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Link the `<label>` by `for`/`id`; the focus ring follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** allow vertical resize for free-text fields.
- **Don't** lock the height so small that users can't see what they typed.
