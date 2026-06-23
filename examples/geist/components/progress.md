---
type: Component
title: Progress
description: A linear determinate progress bar.
tags: [components, progress, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/progress.example.html
---

A horizontal determinate bar for work whose completion is known — an upload, a build step, a quota.
Monochrome fill (`{colors.gray-1000}`) on the `{colors.gray-200}` track, with accent variants for
status. For unknown-length work use a [spinner](/components/spinner.md) or
[loading dots](/components/loading-dots.md). See [progress.example.html](/components/progress.example.html).

# Accessibility
`role="progressbar"` with `aria-valuenow`/`min`/`max` and a label.

# Do & Don't
- **Do** use a progress bar only when you can measure completion.
- **Don't** fake progress to mask an unknown wait.
