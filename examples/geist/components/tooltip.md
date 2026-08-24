---
type: Component
title: Tooltip
description: A small dark label revealed on hover or focus.
tags: [components, tooltip, overlay]
status: stable
applies_to: [web]
generated: { by: claude/opus-5, at: 2026-08-24T00:00:00Z }
examples:
  - /components/tooltip.example.html
  - /components/tooltip.wireframe.html
tokens:
  tooltip:
    background: "{colors.gray-1000}"
    color: "{colors.background-100}"
---

A short supplementary label shown on hover or focus — most often naming an
[icon button](/components/button.md). A high-contrast `{colors.gray-1000}` bubble with
`{colors.background-100}` text. It supplements an accessible name, never replaces one; for richer
content use a [context card](/components/context-card.md). See [tooltip.example.html](/components/tooltip.example.html).

# Structure
A single inline-block bubble sized by its text, with `5px {spacing.2}` of padding.

| Part | Order | Sizing | Space after | Reflow |
|------|-------|--------|-------------|--------|
| `.tooltip` | 1 | content width; no width cap | none | unchanged |

The bubble has no positioning of its own and is placed by whatever anchors it; the example stacks
it above its trigger so it is visible in a static page. Because it carries no maximum width, a long
string produces one very wide bubble, so cap it at the call site when the text is more than a short
label. As a floating layer it displaces nothing.

# Accessibility
The control still needs its own label; show the tooltip on focus as well as hover, and don't put
essential-only info in it (it's unreachable on touch).

# Do & Don't
- **Do** use a tooltip to name an icon-only control.
- **Don't** hide essential information solely in a tooltip.
