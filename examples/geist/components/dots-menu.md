---
type: Component
title: Dots menu
description: An overflow "⋯" icon button that opens a menu of secondary actions.
tags: [components, menu, overflow, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/dots-menu.example.html
  - /components/dots-menu.wireframe.html
---

The "⋯" overflow trigger — a ghost [icon button](/components/button.md) that opens a
[menu](/components/menu.md) of an item's secondary actions. The standard place to tuck rename, copy,
and destructive actions on rows and cards. See [dots-menu.example.html](/components/dots-menu.example.html).

# Structure
A fixed square trigger with a floating panel anchored below it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Trigger `.btn-icon.btn-sm` | 1 | fixed 32px square | `4px` | unchanged |
| `.menu` | 2 | `min-width: 200px`, independent of the trigger | none | unchanged |

The trigger is square and small so it can sit at the end of an [entity](/components/entity.md) row
or a table cell without changing the row height. The panel width is set by its own minimum rather
than the trigger, since a 32px menu would be unusable.

# Accessibility
The trigger has `aria-haspopup="true"` and an `aria-label` ("More actions"); Escape closes and returns
focus to it. Follows the [menu](/components/menu.md) keyboard pattern.

# Do & Don't
- **Do** reserve the dots menu for secondary actions; keep the primary action visible.
- **Don't** bury the only path to a critical action inside it.
