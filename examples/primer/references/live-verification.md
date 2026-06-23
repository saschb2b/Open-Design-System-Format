---
type: Reference
title: Primer — live token verification
description: The token values in this bundle, read directly from the live primer.style DOM in both modes.
resource: https://primer.style
tags: [reference, external, verification]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
Every token here was read from the live primer.style DOM on 2026-06-23 by inspecting the
`@primer/primitives` CSS custom properties on `:root` (and again with `data-color-mode="dark"`), so
the values are exact, not approximated.

# Confirmed (light → dark)
| Token | Light | Dark |
|-------|-------|------|
| `fgColor-default` | `#1f2328` | `#f0f6fc` |
| `bgColor-default` | `#ffffff` | `#0d1117` |
| `bgColor-muted` | `#f6f8fa` | `#151b23` |
| `borderColor-default` | `#d1d9e0` | `#3d444d` |
| `fgColor-accent` | `#0969da` | `#4493f8` |
| `button-primary-bgColor-rest` | `#1f883d` | `#238636` |
| `fgColor-danger` | `#d1242f` | `#f85149` |

# Other verified facts
- `borderRadius` small/medium/large = `3px` / `6px` / `12px`; the primary action is **green**, not blue.
- Base body size is **14px** (`text-body-size-medium`); display is 40px.
- Sans stack leads with **Mona Sans**, then the system fallback; mono is `ui-monospace, SFMono-Regular, …`.
- Shadows are layered, low-alpha stacks (`shadow-resting-small`, `shadow-floating-small`).

# Caveat
A live system evolves; this is a dated snapshot. The `timestamp` and the cited source are how to
re-check it. Names and values follow `@primer/primitives` at the time of capture.

# Citations
[1] [primer.style](https://primer.style)
[2] [Primer (primer.style)](/references/primer-style.md)
