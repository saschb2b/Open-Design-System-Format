---
type: Component
title: Loading dots
description: Three pulsing dots for short, inline indeterminate waits.
tags: [components, loading, dots, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/loading-dots.example.html
---

Three small dots pulsing in sequence — Geist's quiet inline loader, used inside
[buttons](/components/button.md) and labels where a [spinner](/components/spinner.md) would be too
heavy. Animation stops under reduced motion. See [loading-dots.example.html](/components/loading-dots.example.html).

# Accessibility
Wrap with `role="status"` and a label; pair with text when the wait is meaningful.

# Do & Don't
- **Do** use loading dots for short, inline waits.
- **Don't** use them for long operations — a [progress bar](/components/progress.md) is clearer.
