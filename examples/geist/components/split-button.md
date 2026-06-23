---
type: Component
title: Split button
description: A primary action joined to a menu trigger for related secondary actions.
tags: [components, button, split, action, menu]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/split-button.example.html
---

A [button](/components/button.md) joined to a caret trigger that opens a [menu](/components/menu.md)
of related actions — "Deploy" with a dropdown of deploy options. The two share a seam and round only
on the outer corners. See [split-button.example.html](/components/split-button.example.html).

# Accessibility
The main button performs the default action; the trigger has `aria-haspopup="true"`. Both are
keyboard-reachable; the menu follows the [menu](/components/menu.md) pattern.

# Do & Don't
- **Do** make the left action the most common one and the menu its variants.
- **Don't** hide unrelated actions in the split menu.
