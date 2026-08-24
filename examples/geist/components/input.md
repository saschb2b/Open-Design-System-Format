---
type: Component
title: Input
description: The base single-line text field with optional prefix/suffix affixes.
tags: [components, input, form, field]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/input.example.html
  - /components/input.wireframe.html
tokens:
  input:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.medium}"
---

The base text field: a `{colors.background-100}` surface with a 1px `{colors.gray-alpha-400}` border
and `{radius.medium}` corners; on focus the border goes to `{colors.gray-1000}`. Supports prefix/suffix
affixes for icons, units, or buttons. The atom behind [search](/components/search-input.md),
[clearable](/components/clearable-input.md), and [combobox](/components/combobox.md). See
[input.example.html](/components/input.example.html).

# Structure
A label above a full-width field. The affix form moves the border to a shell so icons can sit
inside the control.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.label` | 1 | full width | set by the form | unchanged |
| `.input` | 2 | `width: 100%`, fixed 40px tall | none | unchanged |
| `.input-affix` shell | alt | fixed 40px tall; prefix and suffix fixed, field `flex: 1` | none | unchanged |

The plain input is `width: 100%`, so it fills whatever column lays it out and never sets its own
width. In the affix form the shell owns the border, height and padding while the inner field
strips its own, so the two read as one control; `min-width: 0` on that field is what lets a long
value scroll inside the shell instead of pushing the suffix out.

# Variants & states
default · with affix (`.input-affix`) · focus (ink border) · disabled · error (red border + message).

# Accessibility
Pair every input with a [label](/components/label.md) linked by `for`/`id`; placeholders are not
labels. Focus ring per [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use affixes for inline units/icons rather than separate elements.
- **Don't** rely on the placeholder as the only label.
