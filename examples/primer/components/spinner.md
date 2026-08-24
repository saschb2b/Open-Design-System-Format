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
tokens:
  Spinner:
    track: "{colors.borderColor-muted}"
    indicator: "{colors.fgColor-accent}"
---

An indeterminate loader for work of unknown length. A ring in `{colors.borderColor-muted}` with one
arc in `{colors.fgColor-accent}` rotates; for work with known progress use a
[progress bar](/components/progress-bar.md) instead. See
[spinner.example.html](/components/spinner.example.html).

# Structure
A single square whose ring is drawn as a border, with `box-sizing: border-box` so the border is
inside the declared size.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.Spinner` | 1 | fixed 32px square, `3px` border | none | unchanged |

Because the border is inset rather than added, the spinner occupies exactly 32px and can be swapped
for a 32px avatar or icon button without shifting its row. Resizing it means changing width, height
and border width together, as the inline variant in the example does at 18px. Rotation is a
transform, so it never affects layout.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Spinner.track` | `{colors.borderColor-muted}` |
| `Spinner.indicator` | `{colors.fgColor-accent}` |

# Examples
- [spinner.example.html](/components/spinner.example.html) — default and inline-with-text.
- [spinner.wireframe.html](/components/spinner.wireframe.html) — the same markup, skin stripped; structure only.

# Accessibility
Give the spinner `role="status"` and an `aria-label` (e.g. "Loading"); when work finishes, move focus
to the result. The animation slows under `prefers-reduced-motion` — see [motion](/foundations/motion.md).

# Do & Don't
- **Do** use a spinner for indeterminate waits.
- **Don't** spin forever silently; surface an error or result.
