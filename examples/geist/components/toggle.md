---
type: Component
title: Toggle
description: A segmented control of mutually exclusive options that switches a view in place.
tags: [components, toggle, segmented-control]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/toggle.example.html
---

A small segmented control — a `{colors.gray-100}` track where the active segment lifts to
`{colors.background-100}` with the `border` hairline — for switching a view or mode in place. For page
sections use [tabs](/components/tabs.md). See [toggle.example.html](/components/toggle.example.html).

# Accessibility
Use `<button>`s with `aria-pressed` (or a radio group) and arrow-key navigation; the group has a label.

# Do & Don't
- **Do** keep to 2–4 short segments.
- **Don't** use it for navigation between pages.
