---
type: Component
title: Gauge
description: A circular progress ring showing a score or percentage.
tags: [components, gauge, progress, data]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/gauge.example.html
  - /components/gauge.wireframe.html
---

A compact circular ring that shows a single value as an arc with the number in the center — a Core Web
Vitals score, a usage percentage, build health. The arc uses an accent (`{colors.blue-700}`) on the
`{colors.gray-200}` track. For a linear measure use a [progress bar](/components/progress.md). See
[gauge.example.html](/components/gauge.example.html).

# Structure
A fixed 56px circle with a centred value, where the arc is painted by a conic gradient and the
centre is masked by a smaller absolutely positioned circle.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.gauge` | 1 | fixed 56px circle | none | unchanged |
| Mask (`::after`) | 1.1 | fixed 42px circle, absolutely centred | none | unchanged |
| Value | 1.2 | centred, `position: relative` to sit above the mask | none | unchanged |

The ring thickness is the difference between the two circles (`7px` per side) rather than a border,
so changing the gauge size means changing both numbers. Progress is the `--g` custom property fed
to the conic gradient, so the value changes what is painted and never the box. The label needs
`position: relative` to stack above the mask, since both are in the same containing block.

# Accessibility
Use `role="meter"` with `aria-valuenow`/`min`/`max` and a label; the center number is the text value.

# Do & Don't
- **Do** label what the gauge measures.
- **Don't** rely on arc color alone to convey good/bad — include the number and a label.
