---
type: Component
title: Select
description: A native dropdown styled to match the input, with a chevron affordance.
tags: [components, select, dropdown, form]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/select.example.html
  - /components/select.wireframe.html
tokens:
  select:
    background: "{colors.background-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.medium}"
---

A native `<select>` styled to match the [input](/components/input.md), with a trailing chevron, for
choosing one option from a known list. For search or multi-select, use a
[combobox](/components/combobox.md) or [multi select](/components/multi-select.md). See
[select.example.html](/components/select.example.html).

# Structure
A label above a full-width control, with the chevron painted rather than laid out.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.label` | 1 | full width | set by the form | unchanged |
| `.select` | 2 | `width: 100%`, fixed 40px tall | none | unchanged |

The native chevron is removed with `appearance: none` and replaced by a background image pinned
`10px` from the right edge. A background image occupies no space, so `30px` of right padding is
reserved by hand to stop a long option label running underneath it. That reserved padding is the
only structural difference from a plain [input](/components/input.md), and the two share the same
40px height so they align in a form.

# Accessibility
Keep it a native `<select>` for built-in keyboard and screen-reader support; label it by `for`/`id`.

# Do & Don't
- **Do** use a native select for short, known lists.
- **Don't** rebuild it as a custom dropdown unless you need search.
