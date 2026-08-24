---
type: Component
title: Split button
description: A primary action joined to a menu trigger for related secondary actions.
tags: [components, button, split, action, menu]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/split-button.example.html
  - /components/split-button.wireframe.html
---

A [button](/components/button.md) joined to a caret trigger that opens a [menu](/components/menu.md)
of related actions — "Deploy" with a dropdown of deploy options. The two share a seam and round only
on the outer corners. See [split-button.example.html](/components/split-button.example.html).

# Structure
An inline flex row of two buttons welded into one control by removing the inner radii and
collapsing the seam.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Primary action | 1 | content width; right corners squared | `-1px` | unchanged |
| Menu trigger | 2 | fixed 36px wide, no padding; left corners squared | none | unchanged |

There is no gap. The trigger pulls left by `1px` so the two borders collapse into a single hairline
instead of doubling. The trigger is narrower than a standard 40px icon button, which keeps the pair
from looking like two separate controls. Both halves keep the 40px height, so the group sits in a
toolbar row unchanged.

# Accessibility
The main button performs the default action; the trigger has `aria-haspopup="true"`. Both are
keyboard-reachable; the menu follows the [menu](/components/menu.md) pattern.

# Do & Don't
- **Do** make the left action the most common one and the menu its variants.
- **Don't** hide unrelated actions in the split menu.
