---
type: Component
title: Empty state
description: A centered placeholder shown when there is no content yet, with one action.
tags: [components, empty-state, content]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/empty-state.example.html
---

The friendly placeholder for an empty list or area — a muted icon, a heading, a one-line description,
and a single [button](/components/button.md) to move forward. Usually centered inside a
[card](/components/card.md). See [empty-state.example.html](/components/empty-state.example.html).

# Accessibility
Use a real heading; the action is the clear next step. Decorative icons are `aria-hidden`.

# Do & Don't
- **Do** offer one obvious next action.
- **Don't** crowd an empty state with multiple competing buttons.
