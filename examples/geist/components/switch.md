---
type: Component
title: Switch
description: An immediate on/off toggle that fills with the foreground when on.
tags: [components, switch, toggle, form]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/switch.example.html
tokens:
  switch-on:
    background: "{colors.gray-1000}"
---

A switch for settings that apply **immediately**. Off is `{colors.gray-400}`; on fills with
`{colors.gray-1000}` (the monochrome high-contrast state) with the knob sliding across. For options
that apply on submit, use a [checkbox](/components/checkbox.md). See
[switch.example.html](/components/switch.example.html).

# Accessibility
`role="switch"` with `aria-checked` and an associated label; toggles on click/Enter/Space.

# Do & Don't
- **Do** use a switch only for instant changes.
- **Don't** use one in a form that needs a Save button.
