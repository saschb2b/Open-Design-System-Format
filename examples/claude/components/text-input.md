---
type: Component
title: Text input
description: A cream-surface field whose focus state shifts the border to coral with a soft ring.
tags: [components, input, form, field]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/text-input.example.html
  - /components/text-input.wireframe.html
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

# Structure
A two-part column stack. The label sits above the field, `{spacing.xs}` apart, never beside it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.field__label` | 1 | full width, wraps | `{spacing.xs}` | unchanged |
| `.input` | 2 | fills the field width; fixed 40px tall | none | unchanged |

The field takes its width from its container, so the input is only as wide as whatever the form lays
out around it; the component itself sets no width. Height is fixed at 40px and matches
[button](/components/button.md), which is what lets an input and a button sit on one row without
either shifting. The focus treatment adds a border colour and a ring drawn with `box-shadow`, so it
consumes no layout space and the field does not move when focused.

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
- [text-input.wireframe.html](/components/text-input.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Every input needs a visible `<label>` linked by `for`/`id`; placeholders are not labels. Invalid
inputs set `aria-invalid` and reference a message with `aria-describedby`.

# Do & Don't
- **Do** keep the focus ring soft and coral-tinted.
- **Don't** use the placeholder as the only label.
