---
type: Layout
title: Layout & responsive
description: A 12-column grid, four breakpoints, and container widths capped at 1280px.
tags: [foundations, layout, grid, responsive, tokens]
status: stable
timestamp: 2026-06-23T10:00:00Z
tokens:
  breakpoints:
    small: "544px"
    medium: "768px"
    large: "1012px"
    xlarge: "1280px"
  layout:
    container-large: "1012px"
    container-xlarge: "1280px"
---

Primer lays content on a **12-column grid** within centered containers, with four breakpoints. Most
application pages cap at the `large` container (1012px) for comfortable line lengths; full-width
marketing and app shells use `xlarge` (1280px). Projected as `--breakpoint-large`, etc., in
[`/styles/tokens.css`](/styles/tokens.css).

# Breakpoints
| Name | Min width | Typical change |
|------|-----------|----------------|
| `small` | 544px | Single column → two; show inline metadata. |
| `medium` | 768px | Sidebar appears; multi-column forms. |
| `large` | 1012px | Full app layout; primary content container. |
| `xlarge` | 1280px | Max content width; extra outer gutter. |

# Containers
- **App content** caps at `layout.container-large` (1012px), centered.
- **App shell / marketing** caps at `layout.container-xlarge` (1280px).

# Do & Don't
- **Do** reduce columns at each breakpoint down to a single stacked column on mobile.
- **Don't** let text lines run wider than the `large` container; long measures hurt readability.
