---
type: Component
title: Segmented control
description: A compact row of mutually exclusive options that swaps a view in place.
tags: [components, segmented-control, tabs, toggle]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/segmented-control.example.html
tokens:
  SegmentedControl:
    track: "{colors.bgColor-muted}"
    border: "{colors.borderColor-default}"
  SegmentedControl-selected:
    background: "{colors.bgColor-default}"
---

A small, single-select control for switching between a few views or modes in place — like the
file/preview toggle on a diff. The track is `{colors.bgColor-muted}`; the selected segment lifts to
`{colors.bgColor-default}` with a resting shadow. For page-level sections use the
[underline nav](/components/underline-nav.md). See
[segmented-control.example.html](/components/segmented-control.example.html).

# Anatomy
A `.SegmentedControl` track holding `.SegmentedControl-item` buttons; the active one carries
`.SegmentedControl-item--selected` and `aria-current="true"`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `SegmentedControl.track` | `{colors.bgColor-muted}` |
| `SegmentedControl-selected.background` | `{colors.bgColor-default}` |

# Examples
- [segmented-control.example.html](/components/segmented-control.example.html) — a three-option control.

# Accessibility
Use `<button>`s with `aria-current="true"` on the selected one (or a radio group); the control should
be operable by keyboard with arrow keys.

# Do & Don't
- **Do** keep to 2–5 short segments.
- **Don't** use it for navigation between pages — that is the [underline nav](/components/underline-nav.md).
