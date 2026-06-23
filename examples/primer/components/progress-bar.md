---
type: Component
title: Progress bar
description: A determinate progress indicator with a green fill.
tags: [components, progress, feedback]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/progress-bar.example.html
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

# Tokens
| Token | Resolves to |
|-------|-------------|
| `ProgressBar.track` | `{colors.bgColor-neutral-muted}` |
| `ProgressBar.fill` | `{colors.bgColor-success-emphasis}` |

# Examples
- [progress-bar.example.html](/components/progress-bar.example.html) — partial and near-complete.

# Accessibility
Use `role="progressbar"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax`, and a label.

# Do & Don't
- **Do** use a progress bar when you can measure completion.
- **Don't** animate a fake bar to mask an unknown wait — use a [spinner](/components/spinner.md).
