---
type: Component
title: Gauge
description: A circular progress ring showing a score or percentage.
tags: [components, gauge, progress, data]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/gauge.example.html
---

A compact circular ring that shows a single value as an arc with the number in the center — a Core Web
Vitals score, a usage percentage, build health. The arc uses an accent (`{colors.blue-700}`) on the
`{colors.gray-200}` track. For a linear measure use a [progress bar](/components/progress.md). See
[gauge.example.html](/components/gauge.example.html).

# Accessibility
Use `role="meter"` with `aria-valuenow`/`min`/`max` and a label; the center number is the text value.

# Do & Don't
- **Do** label what the gauge measures.
- **Don't** rely on arc color alone to convey good/bad — include the number and a label.
