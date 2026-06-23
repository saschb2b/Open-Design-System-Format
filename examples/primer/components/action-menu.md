---
type: Component
title: Action menu
description: A button that opens a floating action list of choices.
tags: [components, action-menu, menu, overlay, dropdown]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/action-menu.example.html
tokens:
  ActionMenu-overlay:
    shadow: "{elevation.floating-small}"
---

A trigger [button](/components/button.md) that opens a floating [action list](/components/action-list.md)
of single-step choices — the "⋯" overflow menu, a sort selector, a branch switcher. It is the
composition of a button and an overlaid ActionList. See
[action-menu.example.html](/components/action-menu.example.html).

# Anatomy
An `.ActionMenu` (the trigger) with, when open, an `.ActionMenu-overlay` ([Box](/components/box.md) +
`{elevation.floating-small}`) containing an `.ActionList`.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ActionMenu-overlay.shadow` | `{elevation.floating-small}` |

# Examples
- [action-menu.example.html](/components/action-menu.example.html) — an open overflow menu.

# Accessibility
The trigger has `aria-haspopup="true"` and `aria-expanded`; the list is `role="menu"` with
`menuitem`s; Escape closes and returns focus to the trigger. For choosing many values, use a
[select panel](/components/select-panel.md).

# Do & Don't
- **Do** use an action menu for a short list of immediate actions.
- **Don't** put form fields in it — use a [dialog](/components/dialog.md).
