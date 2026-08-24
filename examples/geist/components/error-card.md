---
type: Component
title: Error card
description: A full error surface with a title, explanation, and recovery action.
tags: [components, error, card, feedback, empty-state]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/error-card.example.html
  - /components/error-card.wireframe.html
---

A [card](/components/card.md)-scale error surface shown when a whole view fails to load — an icon, a
title, a plain-language explanation, and a recovery [button](/components/button.md) (Retry). The
heavier cousin of inline [error](/components/error.md) text. See
[error-card.example.html](/components/error-card.example.html).

# Structure
The [empty state](/components/empty-state.md) box exactly, inside a card. The difference is
semantic and coloured, not structural.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Icon | 1 | fixed | `{spacing.3}` | unchanged |
| Heading | 2 | full width, centred | `4px` | unchanged |
| Description | 3 | full width, centred | `{spacing.4}` | unchanged |
| Retry action | 4 | content width | none | unchanged |

Sharing the empty-state box is deliberate: an error and an empty result occupy the same slot in a
layout, so reusing the measurements means the container does not resize when one becomes the other.
Only the icon colour and the `role="alert"` semantics differ.

# Accessibility
Use `role="alert"` so it's announced; the recovery action is a real button; explain what happened and
what to do.

# Do & Don't
- **Do** give a clear cause and a recovery path.
- **Don't** show a raw stack trace as the primary message.
