---
type: Component
title: Modal
description: A centered dialog over a dimmed scrim, for a focused task or confirmation.
tags: [components, modal, dialog, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/modal.example.html
tokens:
  modal:
    background: "{colors.background-100}"
    radius: "{radius.large}"
    shadow: "{elevation.menu}"
---

A centered dialog over a `{colors.gray-alpha-600}` scrim for a focused task — a body and a
right-aligned footer of [buttons](/components/button.md). For a destructive confirmation use the
[destructive action modal](/components/destructive-action-modal.md); for side content a
[drawer](/components/drawer.md). See [modal.example.html](/components/modal.example.html).

# Accessibility
`role="dialog"` + `aria-modal="true"` with `aria-labelledby`; **trap focus** while open, return it to
the trigger on close, and close on Escape and scrim click.

# Do & Don't
- **Do** keep modals short and single-purpose.
- **Don't** stack modals or use one for content that belongs on a page.
