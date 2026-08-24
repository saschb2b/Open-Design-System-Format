---
type: Component
title: Context menu
description: A right-click menu of actions for the element under the cursor.
tags: [components, context-menu, menu, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/context-menu.example.html
  - /components/context-menu.wireframe.html
---

The same floating [menu](/components/menu.md), opened by **right-click** (or a long-press) on an
element, listing actions for that target — copy, rename, delete a file or row. See
[context-menu.example.html](/components/context-menu.example.html).

# Structure
A floating panel of full-width rows inside `4px` of padding, with a `200px` minimum width.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.menu-item` | 1..n | full width; label, then shortcut pushed right | none | unchanged |
| `.menu-divider` | between groups | full width, `1px` tall | `4px` above and below | unchanged |

Rows carry no gap and abut, separated only by their `7px` vertical padding, so the hover fill reads
as one continuous target. The divider is the only element that adds space. Keyboard hints are
pushed right by `margin-left: auto` on the `.kbd`, so a row with a shortcut and one without measure
the same. The danger row changes colour only.

# Accessibility
Open on `contextmenu` and via the keyboard menu key; `role="menu"` with arrow-key navigation; Escape
closes and restores focus. Always provide a non-right-click path to the same actions (e.g. a
[dots menu](/components/dots-menu.md)).

# Do & Don't
- **Do** mirror the actions in a visible affordance too.
- **Don't** make right-click the only way to reach an action.
