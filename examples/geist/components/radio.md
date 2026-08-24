---
type: Component
title: Radio
description: A native radio group for choosing exactly one option.
tags: [components, radio, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/radio.example.html
  - /components/radio.wireframe.html
---

A group of `<input type="radio">` sharing one `name`, for choosing **one** option, tinted with
`{colors.gray-1000}`. For independent toggles use a [checkbox](/components/checkbox.md). See
[radio.example.html](/components/radio.example.html).

# Structure
Each option is an inline flex row aligned to the top; the group is the browser default block stack
of the `fieldset`.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `legend` | 1 | full width | default | unchanged |
| `input[type=radio]` | 2.1 | fixed 16px, nudged `2px` down onto the text baseline | `{spacing.2}` | unchanged |
| Label text | 2.2 | fills the remaining width, wraps | none | unchanged |

`align-items: flex-start` keeps the control beside the first line when an option wraps. The row
shares its box with the checkbox exactly, so the two align when mixed in one form. The whole row is
a `label`, making the text part of the target.

# Accessibility
Group in a `<fieldset>` with a `<legend>`; share one `name`; link each `<label>`. Arrow keys move
within the group.

# Do & Don't
- **Do** preselect a sensible default.
- **Don't** exceed ~5 options — use a [select](/components/select.md).
