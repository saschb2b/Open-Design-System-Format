---
type: Component
title: Toggle switch
description: An immediate on/off control that turns green when on.
tags: [components, toggle, switch, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/toggle-switch.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ToggleSwitch.off-background` | `{colors.bgColor-muted}` |
| `ToggleSwitch.on-background` | `{colors.bgColor-success-emphasis}` |

# Examples
- [toggle-switch.example.html](/components/toggle-switch.example.html) — on and off.

# Accessibility
Use `role="switch"` with `aria-checked` and an associated label. Toggle on click/Enter/Space; focus
follows [focus](/behaviors/focus.md).

# Do & Don't
- **Do** use a toggle only when the change is instant.
- **Don't** use one inside a form that needs a Save button — use a [checkbox](/components/checkbox.md).
