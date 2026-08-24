---
type: Component
title: Choicebox
description: A large selectable card for choosing among rich, described options.
tags: [components, choicebox, form, radio]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/choicebox.example.html
  - /components/choicebox.wireframe.html
tokens:
  choicebox-selected:
    border: "{colors.gray-1000}"
---

A [radio](/components/radio.md)/[checkbox](/components/checkbox.md) dressed as a large, described card —
for weighty choices that benefit from a title, description, and icon (a framework, a plan, a region).
The selected card draws a `{colors.gray-1000}` ring. See
[choicebox.example.html](/components/choicebox.example.html).

# Anatomy
A `.choicebox` (bordered) with a control + a title and description; `.choicebox--selected` adds the ink
ring. Group several for a single- or multi-choice set.

# Structure
A flex row inside `14px` of padding, with the control beside a text block rather than above it.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `input[type=radio]` | 1 | fixed, nudged `2px` down onto the first text line | `10px` | unchanged |
| Text block (title + description) | 2 | fills the remaining width, wraps | none | unchanged |

The whole box is a `label`, so the entire card is the click target rather than just the control.
Selection adds an inset `box-shadow` on top of the existing border instead of thickening it, which
is the point: a real `2px` border would grow the box by a pixel on each side and shift every
neighbouring card. Selected and unselected therefore measure identically.

# Accessibility
Back it with a real radio/checkbox; the whole card is the label and is clickable; the group has a
legend.

# Do & Don't
- **Do** use a choicebox when options need explanation.
- **Don't** use it for trivial yes/no — a [checkbox](/components/checkbox.md) suffices.
