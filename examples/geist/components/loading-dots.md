---
type: Component
title: Loading dots
description: Three pulsing dots for short, inline indeterminate waits.
tags: [components, loading, dots, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/loading-dots.example.html
  - /components/loading-dots.wireframe.html
---

Three small dots pulsing in sequence — Geist's quiet inline loader, used inside
[buttons](/components/button.md) and labels where a [spinner](/components/spinner.md) would be too
heavy. Animation stops under reduced motion. See [loading-dots.example.html](/components/loading-dots.example.html).

# Structure
An inline flex row of three fixed 5px dots, `4px` apart, sized entirely by its content.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| Dot | 1..3 | fixed 5px circle | `4px` | unchanged |

The row measures a constant `23px`, so it can be dropped into a button label or a sentence without
changing the line. The animation is opacity only, staggered by delay, so no dot ever changes size
and the row never reflows while animating.

# Accessibility
Wrap with `role="status"` and a label; pair with text when the wait is meaningful.

# Do & Don't
- **Do** use loading dots for short, inline waits.
- **Don't** use them for long operations — a [progress bar](/components/progress.md) is clearer.
