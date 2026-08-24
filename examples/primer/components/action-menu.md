---
type: Component
title: Action menu
description: A button that opens a floating action list of choices.
tags: [components, action-menu, menu, overlay, dropdown]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/action-menu.example.html
  - /components/action-menu.wireframe.html
tokens:
  ActionMenu-overlay:
    shadow: "{elevation.floating-small}"
---

A trigger [button](/components/button.md) that opens a floating [action list](/components/action-list.md)
of single-step choices — the "⋯" overflow menu, a sort selector, a branch switcher. It is the
composition of a button and an overlaid ActionList. See
[action-menu.example.html](/components/action-menu.example.html).

# Anatomy
An `.ActionMenu` (the trigger) with, when open, an `.ActionMenu-overlay` ([Box](/components/box.md) +
`{elevation.floating-small}`) containing an `.ActionList`.

# Structure
A relatively positioned inline block: a trigger button in normal flow, and an overlay that is
anchored to it and taken out of flow.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Trigger `.btn` | 1 | content width; label then caret, `{spacing.8}` apart | none | unchanged |
| `.ActionMenu-overlay` | 2 | fixed `220px`, independent of the trigger width | `{spacing.4}` below the trigger | unchanged |

The overlay width is fixed rather than matched to the trigger, so a narrow button still opens a
readable menu. In the example the overlay is rendered open and in flow so it is visible in a static
page; in use it is positioned over the content and does not displace it.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ActionMenu-overlay.shadow` | `{elevation.floating-small}` |

# Examples
- [action-menu.example.html](/components/action-menu.example.html) — an open overflow menu.
- [action-menu.wireframe.html](/components/action-menu.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
The trigger has `aria-haspopup="true"` and `aria-expanded`; the list is `role="menu"` with
`menuitem`s; Escape closes and returns focus to the trigger. For choosing many values, use a
[select panel](/components/select-panel.md).

# Do & Don't
- **Do** use an action menu for a short list of immediate actions.
- **Don't** put form fields in it — use a [dialog](/components/dialog.md).
