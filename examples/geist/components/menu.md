---
type: Component
title: Menu
description: A floating list of actions and options with labels, dividers, and shortcuts.
tags: [components, menu, overlay, dropdown]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/menu.example.html
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

# Accessibility
`role="menu"` with `menuitem`s; arrow keys navigate; Escape closes and restores focus to the trigger.
A right-click variant is the [context menu](/components/context-menu.md).

# Do & Don't
- **Do** group with dividers/labels and place destructive actions last.
- **Don't** nest deep submenus where a [command menu](/components/command-menu.md) would serve better.
