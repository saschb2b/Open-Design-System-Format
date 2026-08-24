---
type: Component
title: Drawer
description: A panel that slides in from the edge for side content and detail views.
tags: [components, drawer, overlay, panel]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/drawer.example.html
  - /components/drawer.wireframe.html
---

A panel that slides in from the screen edge over a scrim, for detail views and secondary flows that
keep context — deployment details, a filter panel, a build log. Wider than a
[menu](/components/menu.md), less blocking than a [modal](/components/modal.md). The bottom-anchored
mobile form is a [sheet](/components/sheet.md). See [drawer.example.html](/components/drawer.example.html).

# Structure
A fixed `360px` panel at full viewport height, pinned to one edge, with `{spacing.6}` of padding
and its content in a plain block stack.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Title row | 1 | full width; title and close pushed apart | `{spacing.4}` | unchanged |
| Status | 2 | content width | `{spacing.4}` | unchanged |
| Description list | 3 | full width | `{spacing.4}` | unchanged |
| Action button | 4 | `width: 100%` | none | unchanged |

`max-width: 100%` on the panel is what makes it usable below `360px`: it becomes full-bleed rather
than overflowing. `height: 100%` means the panel always spans the viewport regardless of content,
so a short drawer has empty space at the foot rather than shrinking to fit. The footer action is
stretched to full width, which is the convention that distinguishes a drawer action from the
right-aligned pair in a [modal](/components/modal.md).

# Accessibility
`role="dialog"` with a label; trap focus while open; close on Escape and scrim click; return focus to
the trigger.

# Do & Don't
- **Do** use a drawer for detail that benefits from the page staying visible.
- **Don't** nest drawers; go one level deep.
