---
type: Component
title: Menu
description: A floating list of actions and options with labels, dividers, and shortcuts.
tags: [components, menu, overlay, dropdown]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/menu.example.html
  - /components/menu.wireframe.html
tokens:
  menu:
    background: "{colors.background-100}"
    shadow: "{elevation.menu}"
    radius: "{radius.medium}"
---

The floating list that drops from triggers and the [dots menu](/components/dots-menu.md): rows that
highlight on hover (`{colors.gray-100}`), section labels, dividers, trailing
[shortcuts](/components/keyboard-input.md), and a danger row for destructive actions. Built on
`{elevation.menu}`. See [menu.example.html](/components/menu.example.html).

# Structure
A floating panel of full-width rows inside `4px` of padding, with a `200px` minimum width.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.menu-label` group heading | 1 | full width, `6px 8px` padding | none | unchanged |
| `.menu-item` | 2..n | full width; label, then shortcut pushed right | none | unchanged |
| `.menu-divider` | between groups | full width, `1px` tall | `4px` above and below | unchanged |

Rows abut with no gap and are separated only by their `7px` vertical padding, so the hover fill
reads as one continuous target. Group labels and dividers are the only things that add space, and
they are alternative ways of doing the same job: use one or the other, not both. Shortcuts are
pushed right by `margin-left: auto` on the `.kbd`, so rows with and without one share a box.

# Accessibility
`role="menu"` with `menuitem`s; arrow keys navigate; Escape closes and restores focus to the trigger.
A right-click variant is the [context menu](/components/context-menu.md).

# Do & Don't
- **Do** group with dividers/labels and place destructive actions last.
- **Don't** nest deep submenus where a [command menu](/components/command-menu.md) would serve better.
