---
type: Component
title: Tooltip
description: A small dark label that names an icon-only control on hover or focus.
tags: [components, tooltip, overlay, accessibility]
status: stable
applies_to: [web]
timestamp: 2026-06-23T10:00:00Z
examples:
  - /components/tooltip.example.html
tokens:
  Tooltip:
    background: "{colors.bgColor-emphasis}"
    color: "{colors.fgColor-onEmphasis}"
---

A short, supplementary label revealed on hover or focus — most often to name an
[icon button](/components/icon-button.md). It is a dark `{colors.bgColor-emphasis}` bubble with
`{colors.fgColor-onEmphasis}` text. A tooltip **supplements** an accessible name; it never replaces
one. See [tooltip.example.html](/components/tooltip.example.html).

# Anatomy
A `.Tooltip-text` bubble positioned near its trigger, shown on `:hover` and `:focus-visible` of the
trigger. The example renders the bubble statically so it is visible.

# Tokens
| Token | Resolves to |
|-------|-------------|
| `Tooltip.background` | `{colors.bgColor-emphasis}` |
| `Tooltip.color` | `{colors.fgColor-onEmphasis}` |

# Examples
- [tooltip.example.html](/components/tooltip.example.html) — a tooltip over an icon button.

# Accessibility
The control still needs its own `aria-label` (or visible text) — a tooltip is supplementary, and is
invisible to touch users. Show it on focus as well as hover.

# Do & Don't
- **Do** use a tooltip to name an icon-only control, in addition to its `aria-label`.
- **Don't** put essential information only in a tooltip; it is not reliably reachable.
