---
type: Component
title: Text input
description: A cream-surface field whose focus state shifts the border to coral with a soft ring.
tags: [components, input, form, field]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/text-input.example.html
tokens:
  text-input:
    background: "{colors.canvas}"
    color: "{colors.ink}"
    border: "{colors.hairline}"
    radius: "{radius.md}"
    typography: "{typography.body-md}"
  text-input-focused:
    border: "{colors.primary}"
---

A label-and-control pair on the cream canvas. On focus, the border shifts to `{colors.primary}`
(coral) with a soft coral ring — the rare moment the accent appears on an input. See
[text-input.example.html](/components/text-input.example.html).

# Anatomy
`.field` → `.field__label` (`{typography.title-sm}`) → `.input` (`{colors.canvas}`,
`{colors.hairline}` border, `{radius.md}`, 40px tall), linked by `for`/`id`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `text-input.background` | `{colors.canvas}` |
| `text-input.border` | `{colors.hairline}` |
| `text-input-focused.border` | `{colors.primary}` |

# Variants & States
default → focus (coral border + `rgba(204,120,92,.15)` ring) → invalid (`{colors.error}` border **and**
a message). Marketing surfaces rarely show validation; see
[Known gaps](/references/claude-design-md.md).

# Examples
- [text-input.example.html](/components/text-input.example.html) — default and focus.

# Accessibility
Every input needs a visible `<label>` linked by `for`/`id`; placeholders are not labels. Invalid
inputs set `aria-invalid` and reference a message with `aria-describedby`.

# Do & Don't
- **Do** keep the focus ring soft and coral-tinted.
- **Don't** use the placeholder as the only label.
