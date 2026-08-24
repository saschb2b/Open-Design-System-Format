---
type: Component
title: Switch
description: An immediate on/off toggle that fills with the foreground when on.
tags: [components, switch, toggle, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/switch.example.html
  - /components/switch.wireframe.html
tokens:
  switch-on:
    background: "{colors.gray-1000}"
---

A switch for settings that apply **immediately**. Off is `{colors.gray-400}`; on fills with
`{colors.gray-1000}` (the monochrome high-contrast state) with the knob sliding across. For options
that apply on submit, use a [checkbox](/components/checkbox.md). See
[switch.example.html](/components/switch.example.html).

# Structure
A fixed 36 by 20 track with an absolutely positioned 16px knob that moves by transform.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.switch` track | 1 | fixed 36 by 20 | none | unchanged |
| Knob (`::after`) | 1.1 | fixed 16px, inset `2px`; `translateX(16px)` when on | none | unchanged |

Both states occupy exactly the same box, so a column of switches never shifts as they are toggled.
The knob is a pseudo-element rather than a child, which is why the control can be a single empty
`button` carrying `role="switch"`. The label is a sibling laid out by the surrounding row, not part
of this component.

# Accessibility
`role="switch"` with `aria-checked` and an associated label; toggles on click/Enter/Space.

# Do & Don't
- **Do** use a switch only for instant changes.
- **Don't** use one in a form that needs a Save button.
