---
type: Component
title: Progress
description: A linear determinate progress bar.
tags: [components, progress, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/progress.example.html
  - /components/progress.wireframe.html
---

A horizontal determinate bar for work whose completion is known — an upload, a build step, a quota.
Monochrome fill (`{colors.gray-1000}`) on the `{colors.gray-200}` track, with accent variants for
status. For unknown-length work use a [spinner](/components/spinner.md) or
[loading dots](/components/loading-dots.md). See [progress.example.html](/components/progress.example.html).

# Structure
A fixed-height track holding one fill segment. Progress is the segment width, so it is structural
rather than painted.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.progress` track | 1 | full width of its container, fixed `8px` tall | none | unchanged |
| `.progress-bar` fill | 1.1 | percentage width, full track height | none | unchanged |

`overflow: hidden` on the track clips the fill to the rounded ends and bounds a value over `100%`
rather than letting it spill. The track takes its width from its container and sets none of its
own, so it is the container that decides how long the bar is.

# Accessibility
`role="progressbar"` with `aria-valuenow`/`min`/`max` and a label.

# Do & Don't
- **Do** use a progress bar only when you can measure completion.
- **Don't** fake progress to mask an unknown wait.
