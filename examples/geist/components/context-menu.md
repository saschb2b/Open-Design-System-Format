---
type: Component
title: Context menu
description: A right-click menu of actions for the element under the cursor.
tags: [components, context-menu, menu, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/context-menu.example.html
---

The same floating [menu](/components/menu.md), opened by **right-click** (or a long-press) on an
element, listing actions for that target — copy, rename, delete a file or row. See
[context-menu.example.html](/components/context-menu.example.html).

# Accessibility
Open on `contextmenu` and via the keyboard menu key; `role="menu"` with arrow-key navigation; Escape
closes and restores focus. Always provide a non-right-click path to the same actions (e.g. a
[dots menu](/components/dots-menu.md)).

# Do & Don't
- **Do** mirror the actions in a visible affordance too.
- **Don't** make right-click the only way to reach an action.
