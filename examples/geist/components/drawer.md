---
type: Component
title: Drawer
description: A panel that slides in from the edge for side content and detail views.
tags: [components, drawer, overlay, panel]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/drawer.example.html
---

A panel that slides in from the screen edge over a scrim, for detail views and secondary flows that
keep context — deployment details, a filter panel, a build log. Wider than a
[menu](/components/menu.md), less blocking than a [modal](/components/modal.md). The bottom-anchored
mobile form is a [sheet](/components/sheet.md). See [drawer.example.html](/components/drawer.example.html).

# Accessibility
`role="dialog"` with a label; trap focus while open; close on Escape and scrim click; return focus to
the trigger.

# Do & Don't
- **Do** use a drawer for detail that benefits from the page staying visible.
- **Don't** nest drawers; go one level deep.
