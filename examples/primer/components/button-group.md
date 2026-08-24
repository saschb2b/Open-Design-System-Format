---
type: Component
title: Button group
description: A row of related buttons joined into a single segmented control of actions.
tags: [components, button, group, action]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/button-group.example.html
  - /components/button-group.wireframe.html
---

Joins related [buttons](/components/button.md) into one connected unit — shared borders, rounded
only on the outer corners — for tightly-coupled actions like a split control or a set of view modes.
See [button-group.example.html](/components/button-group.example.html).

# Anatomy
A `.BtnGroup` wrapping two or more `.btn`s; the group rounds the first and last corners and collapses
the seams between buttons.

# Structure
An inline flex row of buttons that reads as one control because the boxes are welded rather than
spaced.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| First `.btn` | 1 | content width; outer corners rounded on the left only | `-1px` | unchanged |
| Middle `.btn` | 2..n-1 | content width; square corners | `-1px` | unchanged |
| Last `.btn` | n | content width; outer corners rounded on the right only | none | unchanged |

There is no gap. Each button after the first pulls left by `1px` so adjacent borders collapse into
a single hairline instead of doubling. Corner radius is removed from the inner edges and kept only
on the two outer ones, which is the whole trick: the group is structurally three boxes and reads as
one. The split-button form is the same row with a `.btn-icon` as its last child.

# Examples
- [button-group.example.html](/components/button-group.example.html) — a three-action group and a split button.
- [button-group.wireframe.html](/components/button-group.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use a `role="group"` with an `aria-label`. Each button keeps its own label and focus ring
([focus](/behaviors/focus.md)).

# Do & Don't
- **Do** group genuinely related actions (e.g. a primary action + its menu trigger).
- **Don't** join unrelated buttons just to save space.
