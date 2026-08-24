---
type: Component
title: Sheet
description: A bottom-anchored panel that slides up, the mobile form of a drawer.
tags: [components, sheet, overlay, panel, mobile]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/sheet.example.html
  - /components/sheet.wireframe.html
---

A panel anchored to the bottom of the viewport that slides up over a scrim, with a grabber handle —
the mobile-friendly form of a [drawer](/components/drawer.md) for actions and short forms. See
[sheet.example.html](/components/sheet.example.html).

# Structure
A full-width panel pinned to the bottom edge, rounded on its top corners only, with `{spacing.6}`
of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.sheet-grabber` | 1 | fixed 36 by 4, centred by `margin: 0 auto 16px` | `{spacing.4}` | unchanged |
| Action stack | 2 | `.col`; each button `width: 100%`, `{spacing.2}` apart | none | unchanged |

`width: 100%` and a radius on the top corners only are what make this the mobile counterpart to a
[drawer](/components/drawer.md): it is anchored to one edge and spans the viewport rather than
floating. Actions are stretched full width so each is a large touch target, and the grabber is a
purely visual affordance that adds `20px` of height. The sheet grows upward with its content and
has no fixed height.

# Accessibility
`role="dialog"` with a label; trap focus; close on Escape, scrim tap, or downward swipe; return focus
to the trigger.

# Do & Don't
- **Do** use a sheet for bottom-anchored mobile actions.
- **Don't** cram long, scrolling content into a sheet; use a full page.
