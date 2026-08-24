---
type: Component
title: Spinner
description: An indeterminate loading indicator that slows under reduced motion.
tags: [components, spinner, loading, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/spinner.example.html
  - /components/spinner.wireframe.html
---

An indeterminate ring for work of unknown length — a track in `{colors.gray-400}` with one arc in
`{colors.gray-1000}`. For a sequence of dots use [loading dots](/components/loading-dots.md); for known
progress a [progress bar](/components/progress.md). See [spinner.example.html](/components/spinner.example.html).

# Structure
A single square whose ring is drawn as a border.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.spinner` | 1 | fixed 20px square, `2px` border | none | unchanged |

Resizing means changing width, height and border width together, as the 28px and 16px variants in
the example do; the border does not scale on its own. Rotation is a transform, so it never affects
layout. Note that this component does not set `box-sizing: border-box`, so the border is added
outside the declared size and a 20px spinner occupies 24px: allow for that when aligning it against
a fixed-height control.

# Accessibility
Wrap with `role="status"` and an `aria-label` ("Loading"); the animation slows under
`prefers-reduced-motion`.

# Do & Don't
- **Do** use a spinner for indeterminate waits.
- **Don't** spin forever silently; surface a result or error.
