---
type: Layout
title: Grid
description: The geometric grid that underpins the Vercel aesthetic — 4px spacing and 1px hairlines.
tags: [foundations, grid, layout, spacing, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  spacing:
    1: "4px"
    2: "8px"
    3: "12px"
    4: "16px"
    6: "24px"
    8: "32px"
  breakpoints:
    sm: "640px"
    md: "768px"
    lg: "1024px"
    xl: "1200px"
---

The grid is "a huge part of the new Vercel aesthetic": geometric, precise, built on a **4px spacing
unit** and **1px hairline borders** (`gray-alpha-400`). Surfaces align to the grid and divide with
single-pixel lines rather than shadows — the crisp, drafting-table feel of the Geist UI. Projected as
`--ds-space-4`, etc., in [`/styles/tokens.css`](/styles/tokens.css).

# Tokens
| Token | Value | Use |
|-------|-------|-----|
| `spacing.1` | `4px` | Hairline gaps. |
| `spacing.2` | `8px` | Control gaps. |
| `spacing.4` | `16px` | Default surface padding. |
| `spacing.6` | `24px` | Section spacing, modal padding. |
| `spacing.8` | `32px` | Page rhythm. |

Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1200; content centers within ~1200px.

# Do & Don't
- **Do** snap spacing to the 4px unit and divide surfaces with 1px hairlines.
- **Don't** reach for heavy shadows where a crisp border will do — see [elevation](/foundations/elevation.md).
