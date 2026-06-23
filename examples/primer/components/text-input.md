---
type: Component
title: Text input
description: A labeled form control with Primer's accent focus ring.
tags: [components, input, form, field]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/text-input.example.html
tokens:
  form-control:
    background: "{colors.bgColor-default}"
    color: "{colors.fgColor-default}"
    border: "{colors.borderColor-default}"
    radius: "{radius.medium}"
  form-control-focus:
    border: "{colors.borderColor-accent-emphasis}"
---

A labeled single-line input. On focus the border shifts to `{colors.borderColor-accent-emphasis}`
with a soft `{colors.bgColor-accent-muted}` ring — Primer's consistent, accessible focus treatment.
See [text-input.example.html](/components/text-input.example.html).

# Anatomy
A `.form-group` stacking a `.FormControl-label` (`{typography.body-medium}`, weight 600) over a
`.form-control` — 32px tall, `0 {spacing.12}` padding, `{radius.medium}`, 1px
`{colors.borderColor-default}` border, on `{colors.bgColor-default}`, linked by `for`/`id`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `form-control.background` | `{colors.bgColor-default}` |
| `form-control.border` | `{colors.borderColor-default}` |
| `form-control-focus.border` | `{colors.borderColor-accent-emphasis}` |

# Variants & States
default → focus (accent border + ring) → invalid (`{colors.fgColor-danger}` border **and** a message).

# Examples
- [text-input.example.html](/components/text-input.example.html) — default and focus.

# Accessibility
Every input needs a visible `<label>` linked by `for`/`id`; placeholders are not labels. The focus
ring is required — never remove the outline without an equal substitute. See [focus](/behaviors/focus.md).

# Do & Don't
- **Do** keep label + input as a linked pair.
- **Don't** suppress the focus ring.
