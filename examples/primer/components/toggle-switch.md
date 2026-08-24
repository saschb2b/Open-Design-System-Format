---
type: Component
title: Toggle switch
description: An immediate on/off control that turns green when on.
tags: [components, toggle, switch, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/toggle-switch.example.html
  - /components/toggle-switch.wireframe.html
tokens:
  ToggleSwitch:
    off-background: "{colors.bgColor-muted}"
    on-background: "{colors.bgColor-success-emphasis}"
    knob: "{colors.fgColor-onEmphasis}"
---

A switch for settings that take effect **immediately** (no Save). It reads `{colors.bgColor-muted}`
when off and the affirmative green `{colors.bgColor-success-emphasis}` when on, with the knob sliding
across. For options that apply on submit, use a [checkbox](/components/checkbox.md) instead. See
[toggle-switch.example.html](/components/toggle-switch.example.html).

# Anatomy
A `<button>` with `.ToggleSwitch` and `aria-checked="true|false"`. The `::after` knob is
`{colors.fgColor-onEmphasis}` and translates on the checked state.

# Structure
A fixed 48 by 24 track with an absolutely positioned 18px knob. The knob moves by transform, so no
layout changes when it toggles.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.ToggleSwitch` track | 1 | fixed 48 by 24 | none | unchanged |
| Knob (`::after`) | 1.1 | fixed 18px, inset `2px`; `translateX(24px)` when on | none | unchanged |

Both states occupy exactly the same box, so a row of switches never shifts as they are toggled. The
knob is a pseudo-element rather than a child, which is why the control can be a single empty
`button` element carrying `role="switch"`. The label is a sibling laid out by the surrounding form,
not part of this component.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ToggleSwitch.off-background` | `{colors.bgColor-muted}` |
| `ToggleSwitch.on-background` | `{colors.bgColor-success-emphasis}` |

# Examples
- [toggle-switch.example.html](/components/toggle-switch.example.html) — on and off.
- [toggle-switch.wireframe.html](/components/toggle-switch.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `role="switch"` with `aria-checked` and an associated label. Toggle on click/Enter/Space; focus
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use a toggle only when the change is instant.
- **Don't** use one inside a form that needs a Save button — use a [checkbox](/components/checkbox.md).
