---
type: Component
title: Segmented control
description: A compact row of mutually exclusive options that swaps a view in place.
tags: [components, segmented-control, tabs, toggle]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/segmented-control.example.html
  - /components/segmented-control.wireframe.html
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

# Structure
An inline flex row of segments inside `{spacing.4}` of track padding, with `{spacing.4}` between
them.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.SegmentedControl-item` | 1..n | content width, `3px {spacing.12}` padding | `{spacing.4}` | unchanged |

Segments are sized by their own labels rather than divided evenly, so the control is as wide as its
content and segment widths differ. The selected state adds a fill and a shadow but changes no box,
so selection moves without any reflow. The row does not wrap, which bounds this to a small number
of short labels.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `SegmentedControl.track` | `{colors.bgColor-muted}` |
| `SegmentedControl-selected.background` | `{colors.bgColor-default}` |

# Examples
- [segmented-control.example.html](/components/segmented-control.example.html) — a three-option control.
- [segmented-control.wireframe.html](/components/segmented-control.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `<button>`s with `aria-current="true"` on the selected one (or a radio group); the control should
be operable by keyboard with arrow keys.

# Do & Don't
- **Do** keep to 2–5 short segments.
- **Don't** use it for navigation between pages — that is the [underline nav](/components/underline-nav.md).
