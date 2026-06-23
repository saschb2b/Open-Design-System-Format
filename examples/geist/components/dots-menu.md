---
type: Component
title: Dots menu
description: An overflow "⋯" icon button that opens a menu of secondary actions.
tags: [components, menu, overflow, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/dots-menu.example.html
---

The "⋯" overflow trigger — a ghost [icon button](/components/button.md) that opens a
[menu](/components/menu.md) of an item's secondary actions. The standard place to tuck rename, copy,
and destructive actions on rows and cards. See [dots-menu.example.html](/components/dots-menu.example.html).

# Accessibility
The trigger has `aria-haspopup="true"` and an `aria-label` ("More actions"); Escape closes and returns
focus to it. Follows the [menu](/components/menu.md) keyboard pattern.

# Do & Don't
- **Do** reserve the dots menu for secondary actions; keep the primary action visible.
- **Don't** bury the only path to a critical action inside it.
