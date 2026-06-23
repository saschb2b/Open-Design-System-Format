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
tokens:
  Spinner:
    track: "{colors.borderColor-muted}"
    indicator: "{colors.fgColor-accent}"
---

An indeterminate loader for work of unknown length. A ring in `{colors.borderColor-muted}` with one
arc in `{colors.fgColor-accent}` rotates; for work with known progress use a
[progress bar](/components/progress-bar.md) instead. See
[spinner.example.html](/components/spinner.example.html).

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Spinner.track` | `{colors.borderColor-muted}` |
| `Spinner.indicator` | `{colors.fgColor-accent}` |

# Examples
- [spinner.example.html](/components/spinner.example.html) — default and inline-with-text.

# Accessibility
Give the spinner `role="status"` and an `aria-label` (e.g. "Loading"); when work finishes, move focus
to the result. The animation slows under `prefers-reduced-motion` — see [motion](/foundations/motion.md).

# Do & Don't
- **Do** use a spinner for indeterminate waits.
- **Don't** spin forever silently; surface an error or result.
