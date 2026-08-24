---
type: Component
title: Radio
description: A native radio group tinted with the accent color, for a single choice among options.
tags: [components, radio, form, input]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/radio.example.html
  - /components/radio.wireframe.html
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

# Structure
Each option is a flex row aligned to the top, and the group is the browser default block stack of
the `fieldset`.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `legend` | 1 | full width | default | unchanged |
| `input[type=radio]` | 2.1 | fixed 16px, nudged `2px` down onto the text baseline | `{spacing.8}` | unchanged |
| Label | 2.2 | fills the remaining width, wraps | none | unchanged |
| `.caption` | 2.3 | block inside the label, full width | none | unchanged |

The row shares its box with [checkbox](/components/checkbox.md) exactly, so the two align when
mixed in one form. Top alignment matters more here because radio options usually carry captions:
centring would drift the control toward the middle of a two-line option.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `radio.accent` | `{colors.bgColor-accent-emphasis}` |

# Examples
- [radio.example.html](/components/radio.example.html) — a three-option group.
- [radio.wireframe.html](/components/radio.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Group the radios in a `<fieldset>` with a `<legend>`; share one `name`; link each `<label>`. Arrow
keys move within the group.

# Do & Don't
- **Do** preselect a sensible default.
- **Don't** use radios for more than ~5 options — use a [select](/components/select.md).
