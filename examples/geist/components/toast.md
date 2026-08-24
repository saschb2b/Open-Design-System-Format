---
type: Component
title: Toast
description: A transient floating notification confirming an action or surfacing an event.
tags: [components, toast, notification, feedback, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/toast.example.html
  - /components/toast.wireframe.html
tokens:
  toast:
    background: "{colors.background-100}"
    shadow: "{elevation.menu}"
---

A small floating card that appears briefly to confirm an action ("Deployment ready") or surface an
event, then dismisses itself. It can carry an [icon](/foundations/icons.md), a message, and one
action. Stacks in a corner. See [toast.example.html](/components/toast.example.html).

# Structure
A fixed `380px` centred row, capped at `100%`, inside `12px 14px` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Status dot | 1 | fixed | `{spacing.3}` | unchanged |
| `.grow` message | 2 | `flex: 1` | `{spacing.3}` | unchanged |
| Action | 3 | content width | none | unchanged |

The width is fixed rather than content-driven so a stack of toasts has one edge, and `max-width:
100%` keeps it usable on a narrow viewport. `flex: 1` on the message pins the action right without
a spacer. The row is centred, so a message that wraps to two lines centres the dot and the action
against the block: keep messages to one line if that matters.

# Accessibility
Render in an `aria-live="polite"` region (`assertive` for errors); keep it on screen long enough to
read, and let any action be reachable before it dismisses.

# Do & Don't
- **Do** keep toasts short with at most one action.
- **Don't** use a toast for critical info that must not be missed — use a [dialog](/components/modal.md).
