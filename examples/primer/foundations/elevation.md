---
type: Elevation
title: Elevation
description: Layered, low-alpha shadows for resting and floating surfaces — subtle by design.
tags: [foundations, elevation, shadow, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  elevation:
    resting-small: "0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808"
    resting-medium: "0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f"
    floating-small: "0 0 0 1px #d1d9e040, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f"
---

Primer's shadows are **layered and low-alpha** — depth is felt, not announced. Resting shadows sit
under cards and rows; floating shadows lift overlays (menus, dialogs) and add a hairline ring so the
edge reads on any background. Each token is several stacked shadows. Projected as
`--shadow-resting-small`, etc., in [`/styles/tokens.css`](/styles/tokens.css). In dark mode the same
tokens swap to deeper, near-black shadows.

# Tokens
| Token | Use |
|-------|-----|
| `elevation.resting-small` | Resting cards and rows ([Box](/components/box.md)). |
| `elevation.resting-medium` | Slightly raised surfaces. |
| `elevation.floating-small` | Overlays: menus, dialogs, popovers (note the `0 0 0 1px` edge ring). |

# Usage
Most surfaces are **flat with a 1px border**, not shadowed — Primer gets structure from borders and
the `bgColor-muted` / `bgColor-default` contrast. Reserve shadows for genuinely floating layers.

# Do & Don't
- **Do** use `floating-small` for overlays so they separate from content on any background.
- **Don't** shadow flush, in-flow elements; a `borderColor-default` hairline is the resting treatment.
