---
type: Component
title: Keyboard input
description: A kbd key cap for documenting keyboard shortcuts.
tags: [components, kbd, keyboard, shortcut]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/keyboard-input.example.html
tokens:
  kbd:
    background: "{colors.gray-100}"
    border: "{colors.gray-alpha-400}"
    radius: "{radius.small}"
---

A small key cap (`<kbd>`) for rendering keyboard shortcuts in monospace on a subtle
`{colors.gray-100}` fill with the `border` hairline — `⌘K`, `Esc`. Pairs with
[command menu](/components/command-menu.md), [search](/components/search-input.md), and tooltips. See
[keyboard-input.example.html](/components/keyboard-input.example.html).

# Accessibility
Use a real `<kbd>` element; combine keys with "+" or adjacency, and ensure the shortcut is also
operable in the UI.

# Do & Don't
- **Do** use `<kbd>` and the mono font for keys.
- **Don't** document a shortcut that isn't actually wired up.
