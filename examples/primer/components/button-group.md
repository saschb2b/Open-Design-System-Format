---
type: Component
title: Button group
description: A row of related buttons joined into a single segmented control of actions.
tags: [components, button, group, action]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/button-group.example.html
---

Joins related [buttons](/components/button.md) into one connected unit — shared borders, rounded
only on the outer corners — for tightly-coupled actions like a split control or a set of view modes.
See [button-group.example.html](/components/button-group.example.html).

# Anatomy
A `.BtnGroup` wrapping two or more `.btn`s; the group rounds the first and last corners and collapses
the seams between buttons.

# Examples
- [button-group.example.html](/components/button-group.example.html) — a three-action group and a split button.

# Accessibility
Use a `role="group"` with an `aria-label`. Each button keeps its own label and focus ring
([focus](/behaviors/focus.md)).

# Do & Don't
- **Do** group genuinely related actions (e.g. a primary action + its menu trigger).
- **Don't** join unrelated buttons just to save space.
