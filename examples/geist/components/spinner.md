---
type: Component
title: Spinner
description: An indeterminate loading indicator that slows under reduced motion.
tags: [components, spinner, loading, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/spinner.example.html
---

An indeterminate ring for work of unknown length — a track in `{colors.gray-400}` with one arc in
`{colors.gray-1000}`. For a sequence of dots use [loading dots](/components/loading-dots.md); for known
progress a [progress bar](/components/progress.md). See [spinner.example.html](/components/spinner.example.html).

# Accessibility
Wrap with `role="status"` and an `aria-label` ("Loading"); the animation slows under
`prefers-reduced-motion`.

# Do & Don't
- **Do** use a spinner for indeterminate waits.
- **Don't** spin forever silently; surface a result or error.
