---
type: Component
title: Sheet
description: A bottom-anchored panel that slides up, the mobile form of a drawer.
tags: [components, sheet, overlay, panel, mobile]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/sheet.example.html
---

A panel anchored to the bottom of the viewport that slides up over a scrim, with a grabber handle —
the mobile-friendly form of a [drawer](/components/drawer.md) for actions and short forms. See
[sheet.example.html](/components/sheet.example.html).

# Accessibility
`role="dialog"` with a label; trap focus; close on Escape, scrim tap, or downward swipe; return focus
to the trigger.

# Do & Don't
- **Do** use a sheet for bottom-anchored mobile actions.
- **Don't** cram long, scrolling content into a sheet; use a full page.
