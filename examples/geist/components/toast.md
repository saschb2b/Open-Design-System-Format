---
type: Component
title: Toast
description: A transient floating notification confirming an action or surfacing an event.
tags: [components, toast, notification, feedback, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/toast.example.html
tokens:
  toast:
    background: "{colors.background-100}"
    shadow: "{elevation.menu}"
---

A small floating card that appears briefly to confirm an action ("Deployment ready") or surface an
event, then dismisses itself. It can carry an [icon](/foundations/icons.md), a message, and one
action. Stacks in a corner. See [toast.example.html](/components/toast.example.html).

# Accessibility
Render in an `aria-live="polite"` region (`assertive` for errors); keep it on screen long enough to
read, and let any action be reachable before it dismisses.

# Do & Don't
- **Do** keep toasts short with at most one action.
- **Don't** use a toast for critical info that must not be missed — use a [dialog](/components/modal.md).
