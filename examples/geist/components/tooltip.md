---
type: Component
title: Tooltip
description: A small dark label revealed on hover or focus.
tags: [components, tooltip, overlay]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/tooltip.example.html
tokens:
  tooltip:
    background: "{colors.gray-1000}"
    color: "{colors.background-100}"
---

A short supplementary label shown on hover or focus — most often naming an
[icon button](/components/button.md). A high-contrast `{colors.gray-1000}` bubble with
`{colors.background-100}` text. It supplements an accessible name, never replaces one; for richer
content use a [context card](/components/context-card.md). See [tooltip.example.html](/components/tooltip.example.html).

# Accessibility
The control still needs its own label; show the tooltip on focus as well as hover, and don't put
essential-only info in it (it's unreachable on touch).

# Do & Don't
- **Do** use a tooltip to name an icon-only control.
- **Don't** hide essential information solely in a tooltip.
