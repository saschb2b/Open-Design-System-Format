---
type: Component
title: Progress bar
description: A determinate progress indicator with a green fill.
tags: [components, progress, feedback]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/progress-bar.example.html
  - /components/progress-bar.wireframe.html
tokens:
  ProgressBar:
    track: "{colors.bgColor-neutral-muted}"
    fill: "{colors.bgColor-success-emphasis}"
---

A determinate bar for work whose completion is known — a file upload, an onboarding checklist. The
track is `{colors.bgColor-neutral-muted}` and the fill is the affirmative green
`{colors.bgColor-success-emphasis}`. For unknown-length work use a [spinner](/components/spinner.md).
See [progress-bar.example.html](/components/progress-bar.example.html).

# Anatomy
A `.ProgressBar` track containing a `.ProgressBar-item` whose `width` is the percent complete.

# Structure
A fixed-height track holding one or more fill segments in a row. Progress is expressed as the
segment width, so it is structural rather than painted.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.ProgressBar` track | 1 | full width of its container, fixed `8px` tall | none | unchanged |
| `.ProgressBar-item` fill | 1.1..n | percentage width, full track height | none | unchanged |

The track sets `overflow: hidden`, which clips the fill to the rounded ends and means a segment
wider than `100%` is bounded rather than spilling. Multiple segments sit side by side in one flex
row, so a multi-part bar needs its percentages to sum to `100` or the remainder shows as track.
The bar takes its width from its container and has no width of its own.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ProgressBar.track` | `{colors.bgColor-neutral-muted}` |
| `ProgressBar.fill` | `{colors.bgColor-success-emphasis}` |

# Examples
- [progress-bar.example.html](/components/progress-bar.example.html) — partial and near-complete.
- [progress-bar.wireframe.html](/components/progress-bar.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Use `role="progressbar"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax`, and a label.

# Do & Don't
- **Do** use a progress bar when you can measure completion.
- **Don't** animate a fake bar to mask an unknown wait — use a [spinner](/components/spinner.md).
