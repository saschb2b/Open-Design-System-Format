---
type: Spacing
title: Spacing
description: Primer's base-size scale — a 4px-based set used for padding, gaps, and margins.
tags: [foundations, spacing, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  spacing:
    4: "4px"
    8: "8px"
    12: "12px"
    16: "16px"
    20: "20px"
    24: "24px"
    32: "32px"
    40: "40px"
    48: "48px"
---

Primer's spacing is the **`base-size` scale** — a 4px-based set named by its pixel value
(`--base-size-16` is 16px). Density is the goal: GitHub screens pack a lot of information, so the
common steps are tight (8, 16) and large gaps are rare. Projected as `--base-size-16`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Typical use |
|-------|-------|-------------|
| `4` | `4px` | Label-to-control gaps, icon spacing. |
| `8` | `8px` | Gaps between sibling controls. |
| `12` | `12px` | Button horizontal padding. |
| `16` | `16px` | Default surface padding ([Box](/components/box.md) rows, [banners](/components/banner.md)). |
| `20` | `20px` | — |
| `24` | `24px` | Section spacing. |
| `32` | `32px` | Major section separation. |
| `40` · `48` | `40` · `48px` | Page-level rhythm. |

# Usage
- `16px` is the workhorse — surface padding and the gap between stacked blocks.
- Prefer `gap` on a flex/grid container over per-child margins so spacing stays on the scale.

# Do & Don't
- **Do** snap every dimension to a `base-size` step.
- **Don't** invent off-scale values; density depends on the rhythm being consistent.
