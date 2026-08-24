---
type: Component
title: Modal
description: A centered dialog over a dimmed scrim, for a focused task or confirmation.
tags: [components, modal, dialog, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/modal.example.html
  - /components/modal.wireframe.html
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

# Structure
A fixed `440px` panel of two stacked regions, centred in its scrim and capped at `100%` so it
shrinks on a narrow viewport rather than overflowing.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.modal-body` | 1 | full width, `{spacing.6}` padding | none | unchanged |
| `.modal-footer` | 2 | full width; actions pushed right, `{spacing.2}` apart | none | unchanged |

The regions abut and are divided by a real border, with the footer carrying shorter vertical
padding so it reads as a bar. `justify-content: flex-end` right-aligns the actions with no spacer
element, and the confirming action is last, which puts it last in tab order. `overflow: hidden`
clips both regions to the outer radius.

# Accessibility
`role="dialog"` + `aria-modal="true"` with `aria-labelledby`; **trap focus** while open, return it to
the trigger on close, and close on Escape and scrim click.

# Do & Don't
- **Do** keep modals short and single-purpose.
- **Don't** stack modals or use one for content that belongs on a page.
