---
type: Component
title: Destructive action modal
description: A confirmation modal that requires typing to confirm an irreversible action.
tags: [components, modal, destructive, confirmation, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/destructive-action-modal.example.html
  - /components/destructive-action-modal.wireframe.html
---

Vercel's guardrail for irreversible actions — a [modal](/components/modal.md) that explains the
consequence and requires the user to **type the resource name** before the red confirm
[button](/components/button.md) enables. Used for deleting projects, teams, and domains. See
[destructive-action-modal.example.html](/components/destructive-action-modal.example.html).

# Structure
The [modal](/components/modal.md) box with a confirmation field added to the body, so the panel is
taller but structurally unchanged.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.modal-body` | 1 | full width, `{spacing.6}` padding | none | unchanged |
| Confirm label + field | 1.1 | full width; field `width: 100%` | none | unchanged |
| `.modal-footer` | 2 | full width; actions pushed right, `{spacing.2}` apart | none | unchanged |

The destructive action is the last item in the footer, which puts it furthest from the reading path
and last in tab order. The confirm field is full width so it cannot be mistaken for an optional
inline control. Body and footer abut and are divided by a border, with the panel fixed at `440px`
and capped at `100%`.

# Accessibility
`role="dialog"` + `aria-modal`; the confirm button is `disabled` until the typed value matches; explain
exactly what will be lost.

# Do & Don't
- **Do** require typed confirmation and spell out the consequence.
- **Don't** make a destructive default action one careless click away.
