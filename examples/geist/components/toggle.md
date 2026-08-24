---
type: Component
title: Toggle
description: A segmented control of mutually exclusive options that switches a view in place.
tags: [components, toggle, segmented-control]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/toggle.example.html
  - /components/toggle.wireframe.html
---

A small segmented control — a `{colors.gray-100}` track where the active segment lifts to
`{colors.background-100}` with the `border` hairline — for switching a view or mode in place. For page
sections use [tabs](/components/tabs.md). See [toggle.example.html](/components/toggle.example.html).

# Structure
An inline flex row of segments inside `2px` of track padding, `2px` apart.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.toggle-item` | 1..n | content width, `5px 12px` padding | `2px` | unchanged |

Segments are sized by their own labels rather than divided evenly, so the control is as wide as its
content and segment widths differ. The pressed state adds a fill and a border shadow but changes no
box, so selection moves with no reflow. The row does not wrap, which bounds this to a few short
labels; use [tabs](/components/tabs.md) when there are more.

# Accessibility
Use `<button>`s with `aria-pressed` (or a radio group) and arrow-key navigation; the group has a label.

# Do & Don't
- **Do** keep to 2–4 short segments.
- **Don't** use it for navigation between pages.
