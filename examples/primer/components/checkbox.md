---
type: Component
title: Checkbox
description: A native checkbox tinted with the accent color, with label and optional caption.
tags: [components, checkbox, form, input]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/checkbox.example.html
  - /components/checkbox.wireframe.html
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

# Structure
A flex row aligned to the top so the control sits on the first line of its label.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `input[type=checkbox]` | 1 | fixed 16px, nudged `2px` down onto the text baseline | `{spacing.8}` | unchanged |
| Label | 2 | fills the remaining width, wraps | none | unchanged |
| `.caption` | 2.1 | block inside the label, full width | none | unchanged |

`align-items: flex-start` keeps the box beside the first line when the label wraps or carries a
caption. The caption is a block-level child of the label rather than a sibling, so it inherits the
label indent and stays inside the same click target.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `checkbox.accent` | `{colors.bgColor-accent-emphasis}` |

# Examples
- [checkbox.example.html](/components/checkbox.example.html) — checked, unchecked, with caption.
- [checkbox.wireframe.html](/components/checkbox.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Always link `<label>` to the input by `for`/`id`; the whole label is then clickable. Focus follows
[focus](/behaviors/focus.md).

# Do & Don't
- **Do** add a caption for non-obvious options.
- **Don't** use a checkbox where only one of several can be chosen — use [radio](/components/radio.md).
