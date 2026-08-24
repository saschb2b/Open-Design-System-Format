---
type: Component
title: Empty state
description: A centered placeholder shown when there is no content yet, with one action.
tags: [components, empty-state, content]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/empty-state.example.html
  - /components/empty-state.wireframe.html
---

The friendly placeholder for an empty list or area — a muted icon, a heading, a one-line description,
and a single [button](/components/button.md) to move forward. Usually centered inside a
[card](/components/card.md). See [empty-state.example.html](/components/empty-state.example.html).

# Structure
A centred column inside `40px 24px` of padding, with spacing from element margins rather than a
gap, so the steps between parts are deliberately uneven.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Icon | 1 | fixed | `{spacing.3}` | unchanged |
| Heading | 2 | full width, centred | `4px` | unchanged |
| Description | 3 | full width, centred | `{spacing.4}` | unchanged |
| Action | 4 | content width | none | unchanged |

The tight `4px` between heading and description binds them as one message, while the larger steps
above the heading and below the description separate icon, message and action into three beats.
`text-align: center` is inherited by every child, which is why the button centres with no flex
alignment on the container. The generous vertical padding is what makes an empty card read as
intentional rather than broken.

# Accessibility
Use a real heading; the action is the clear next step. Decorative icons are `aria-hidden`.

# Do & Don't
- **Do** offer one obvious next action.
- **Don't** crowd an empty state with multiple competing buttons.
