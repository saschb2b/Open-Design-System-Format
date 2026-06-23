---
type: Reference
title: Geist — live token verification
description: The token values in this bundle, read directly from the live vercel.com/geist DOM in both themes.
resource: https://vercel.com/geist
tags: [reference, external, verification]
status: stable
timestamp: 2026-06-23T10:00:00Z
---

# Summary
Every token here was read from the live vercel.com/geist DOM on 2026-06-23 by inspecting the
`@vercel/geist` `--ds-*` CSS custom properties on the document root — once in light mode and once with
`data-theme="dark"` — so the values are exact, in both themes.

# Confirmed (light → dark)
| Token | Light | Dark |
|-------|-------|------|
| `gray-1000` (text) | `hsl(0 0% 9%)` | `hsl(0 0% 93%)` |
| `background-100` | `hsl(0 0% 100%)` | `hsl(0 0% 4%)` |
| `background-200` | `hsl(0 0% 98%)` | `hsl(0 0% 0%)` |
| `blue-700` (Vercel blue) | `hsl(212 100% 48%)` | `hsl(212 100% 48%)` |
| `red-700` | `hsl(358 75% 59%)` | `hsl(358 75% 59%)` |
| `gray-alpha-400` (border) | `#00000029` | `#ffffff24` |

# Other verified facts
- The full system is **eight numbered scales** (gray + 7 accents) × **10 steps** (100→1000), plus
  `background-100/200`, `gray-alpha-*`, and `focus-color`.
- Standard radius is **6px** (`--geist-radius`); the gray scale carries the monochrome UI.
- Body font stack leads with **Geist**, then Inter; mono is **Geist Mono** then the system monospace.
- Shadows are layered, low-alpha, and built on `gray-alpha-*`, so they adapt per theme.

# Caveat
A live system evolves; this is a dated snapshot. The `timestamp` and source URL are how to re-check it.

# Citations
[1] [vercel.com/geist](https://vercel.com/geist)
